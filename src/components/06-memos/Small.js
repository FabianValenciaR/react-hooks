import React from 'react'

export const Small = React.memo(({ value }) => {
    console.log("Mostrando");
    return (
        <small>
            {value}
        </small>
    )
})
