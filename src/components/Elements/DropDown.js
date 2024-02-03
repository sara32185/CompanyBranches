import * as React from 'react';
import { Autocomplete, TextField } from '@mui/material';

const DropDown = (props) => {
    const { options, label, id, onChange, value } = props

    return (
        <Autocomplete
            disablePortal
            value={value}
            id={id}
            options={options}
            sx={{ width: 220 }}
            onChange={(e, value) => { onChange(value, id) }}
            renderInput={(params) => <TextField {...params} label={label || ""} />}
        />
    );
}

export default DropDown


