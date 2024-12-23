import React from 'react'

const Breaker = (props) => {
    const { space = "5rem" } = props;
    return (
        <div style={{
            marginBlock: space
        }}></div>
    )
}

export default Breaker