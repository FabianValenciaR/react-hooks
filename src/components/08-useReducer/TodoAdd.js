import React from 'react';
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddToDo }) => {

    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }

        handleAddToDo({
            id: new Date().getTime(),
            desc: description,
            done: false
        });

        reset();
    }

    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />

            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleInputChange}
                    value={description}
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Aprender..."
                    autoComplete="off"
                />

                <button
                    type="submit"
                    className="btn btn-outline-success mt-1 w-100"
                >
                    Agregar
                </button>
            </form>
        </>
    )
}
