import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {SelectChangeEvent} from "@mui/material";

type Props = {
    inputLabel: string,
    id?: string,
    value: string,
    onChange: (event: SelectChangeEvent) => void,
    options: string[]
}

const SelectField = ({inputLabel, id, value, onChange, options}: Props) => {
    return (
        <FormControl fullWidth size={'small'} sx={{my:1}}>
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
                {options?.map(option => <MenuItem key={option} value={option}>{option}</MenuItem>)}
            </Select>
        </FormControl>
    );
}
export default SelectField;