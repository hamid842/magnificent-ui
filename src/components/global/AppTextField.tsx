import { TextField} from "@mui/material";
import {ChangeEvent} from "react";

type Props = {
    label: string,
    id: string,
    value: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    multiline?:boolean,
    type?:string,
    required?: boolean,
    error?: boolean,
    helperText?: string,
    disabled?: boolean
}

const AppTextField = ({label, id, type='text', value,multiline, onChange, required, error, helperText, disabled}: Props) => {
    return (
        <TextField fullWidth type={type} multiline={multiline} variant={'outlined'} size={'small'} id={id} name={id} label={label} value={value}
                   onChange={onChange} required={required} error={error} helperText={helperText} sx={{'& .MuiTextField':{height:30}}}
                   disabled={disabled}/>
    )
}
export default AppTextField;