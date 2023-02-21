import {ChangeEvent, MouseEvent, useState} from "react";
import {
    FormControl,
    FormControlProps,
    FormHelperText,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput
} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";

type PasswordFieldProps = {
    label: string,
    value?: string,
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
    helperText?: string
}

const PasswordField = (props: (PasswordFieldProps & FormControlProps)) => {
    const {label, helperText, onChange, value,...rest} = props
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return (
        <FormControl size={'small'} fullWidth variant="outlined" {...rest}>
            <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
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
                label={label}
                onChange={onChange}
                value={value}
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