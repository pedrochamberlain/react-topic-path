import React, { useState } from 'react'

const useDropdown = (label, defaultState, options) => {
    const [state, setState] = useState(defaultState)
    const id = createDropdownId(label)

    const Dropdown = () => {
        return (
            <label htmlFor={id}>
                {label}
                <select
                    id={id}
                    value={state}
                    onChange={e => setState(e.target.value)}
                    onBlur={e => setState(e.target.value)}
                    disabled={options.length === 0}
                >
                    <option>All</option>
                    {options.map(item => (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
            </label>
        )
    }

    return [state, Dropdown, setState]
}

function createDropdownId(label) {
    // Best Dogs Ever -> use-dropdown-bestdogsever
    return `use-dropdown-${label.replace(' ', '').toLowerCase()}`
}

export default useDropdown