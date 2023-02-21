import {ReactNode} from "react";
import {FormControl, FormHelperText, InputLabel, Select, SelectProps} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

type Props = {
    inputLabel: string,
    helperText?: any,
    id?: string,
    children: ReactNode
}

const SelectField = (props: (Props & SelectProps)) => {
    const {inputLabel, id, helperText, children} = props
    return (
        <FormControl fullWidth size={'small'}>
            <InputLabel id={id}>{inputLabel}</InputLabel>
            <Select
                {...props}
                labelId={id}
                id={id}
                name={id}
                label={inputLabel}
                IconComponent={KeyboardArrowDownIcon}
            >
                {children}
            </Select>
            <FormHelperText error>{helperText}</FormHelperText>
        </FormControl>
    );
}
export default SelectField;