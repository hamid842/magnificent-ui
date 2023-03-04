import {MouseEvent, useState} from "react";
import {IconButton, TextField, TextFieldProps} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";

const PasswordField = (props: TextFieldProps) => {

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return (
        <TextField
            {...props}
            fullWidth
            variant={'outlined'}
            size={'small'}
            type={showPassword ? 'text' : 'password'}
            InputProps={{
                endAdornment:
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                    >
                        {showPassword ? <VisibilityOff/> : <Visibility/>}
                    </IconButton>
            }}
        />
    )
}
export default PasswordField;