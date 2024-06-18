import React from 'react'

function Logo({ width = "100px" }) {
    return (
        <div>
            <img src="./src/assets/logo.avif" alt="logo" width={width} />
        </div>
    )
}

export default Logo