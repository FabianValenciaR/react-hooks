import React, { useLayoutEffect, useRef } from 'react';
import './layout.css';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

export const LayoutEffect = () => {

    const { counter, increment } = useCounter(1);

    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { quote } = !!data && data[0];

    const pTag = useRef();

    useLayoutEffect(() => {
        console.log(pTag.current.getBoundingClientRect());
    }, [quote])

    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr />

            <blockquote className="blockquote text-end">
                <p
                    ref={pTag}
                    className="pb-1"
                >
                    {quote}
                </p>
            </blockquote>
            <button
                onClick={increment}
                className="btn btn-primary"
            >
                Siguiente quote
            </button>
        </div>
    )
}
