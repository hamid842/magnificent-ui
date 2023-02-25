import {TextField, TextFieldProps} from "@mui/material";
import {memo} from "react";

type Props = {
    errorMsg?: any
}

const AppTextField = (props: (Props & TextFieldProps)) => {
    const {errorMsg, ...rest} = props
    return (
        <TextField {...rest}
                   fullWidth
                   variant={'outlined'}
                   size={'small'}
                   helperText={<small style={{color: 'red'}}>{errorMsg}</small>}
        />
    )
}
export default memo(AppTextField);