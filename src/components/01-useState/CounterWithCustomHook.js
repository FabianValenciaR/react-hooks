import React from 'react'
import { useCounter } from '../../hooks/useCounter'

import './counter.css'

export const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter(100);

    return (
        <>
            <h1>CounterWithHook: {state}</h1>
            <hr />

            <button onClick={() => increment(2)} className="mx-2 btn btn-secondary">
                +2
            </button>

            <button onClick={reset} className="mx-2 btn btn-secondary">
                Reset
            </button>

            <button onClick={() => decrement(2)} className="mx-2 btn btn-secondary">
                -2
            </button>
        </>
    )
}
