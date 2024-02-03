import React, { useState, useEffect } from 'react'
import { InputAdornment, TextField } from '@mui/material'

const SearchInput = (props) => {
    const { id, label, onChange, autoComplete, Icon, value } = props

    const [inputVal, setInputVal] = useState(value)

    useEffect(() => {
        const timer = setTimeout(() => {
            onChange(inputVal, id)
        }, 200)

        return () => clearTimeout(timer)
    }, [inputVal])

    return (
        <>
            <TextField
                id={id}
                value={inputVal}
                autoComplete={autoComplete || "off"}
                label={label}
                variant="outlined"
                onChange={(e) => { setInputVal(e.target.value) }}
                InputProps={Icon && {
                    endAdornment: (
                        <InputAdornment position="end">
                            <Icon />
                        </InputAdornment>
                    ),
                }}
            />
        </>
    )
}

export default SearchInput;