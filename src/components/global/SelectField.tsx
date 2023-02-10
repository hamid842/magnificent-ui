import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {SelectChangeEvent} from "@mui/material";
import {ReactNode} from "react";

type Props = {
    inputLabel: string,
    id?: string,
    value: string,
    onChange: (event: SelectChangeEvent) => void,
    children:ReactNode
}

const SelectField = ({inputLabel, id, value, onChange, children}: Props) => {
    return (
        <FormControl fullWidth size={'small'} >
            <InputLabel id="select-field">{inputLabel}</InputLabel>
            <Select
                labelId="select-field"
                id={id}
                name={id}
                value={value}
                label={inputLabel}
                onChange={onChange}
                IconComponent={KeyboardArrowDownIcon}
            >
                {children}
            </Select>
        </FormControl>
    );
}
export default SelectField;