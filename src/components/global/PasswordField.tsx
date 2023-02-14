import {MouseEvent, useState} from "react";
import {FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput,FormControlProps} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";

type PasswordFieldProps = {
    label:string
}

const PasswordField = (props:(PasswordFieldProps & FormControlProps))=>{
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return (
        <FormControl size={'small'} fullWidth variant="outlined" {...props}>
            <InputLabel htmlFor="outlined-adornment-password">{props.label}</InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff/> : <Visibility/>}
                        </IconButton>
                    </InputAdornment>
                }
                label={props.label}
            />
        </FormControl>
    )
}
export default PasswordField;