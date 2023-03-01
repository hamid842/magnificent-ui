import {MouseEvent, useState} from "react";
import {
    FormControl,
    FormHelperText,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    OutlinedInputProps
} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";

type PasswordFieldProps = {
    helperText?: string | false,
    id:string
}

const PasswordField = (props: (PasswordFieldProps & OutlinedInputProps)) => {
    const {helperText,id, ...rest} = props
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return (
        <FormControl size={'small'} fullWidth variant="outlined">
            <InputLabel htmlFor={id}>Password</InputLabel>
            <OutlinedInput
                {...rest}
                name={id}
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
            />
            {!!helperText && (
                <FormHelperText error>
                    {helperText}
                </FormHelperText>
            )}
        </FormControl>
    )
}
export default PasswordField;