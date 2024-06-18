import React, { forwardRef, useId } from 'react'

// second syntax for forwardRef
function Select({
    options,
    label,
    className = '',
    ...props
}, ref) {
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label htmlFor={id}></label>}
            <select
                id={id}
                {...props}
                ref={ref}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}>
                {/* "?" to account for no options */}
                {options?.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>

        </div>
    )
}

const SelectForward = forwardRef(Select)

export default SelectForward