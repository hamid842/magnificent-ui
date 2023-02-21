import {TextField, TextFieldProps} from "@mui/material";
import {FormikErrors} from "formik";

type Props = {
    errorMsg:any
}

const AppTextField = (props: (Props & TextFieldProps)) => {
    const {errorMsg} = props
    return (
        <TextField {...props}
                   fullWidth
                   variant={'outlined'}
                   size={'small'}
                   helperText={<small style={{color:'red'}}>{errorMsg}</small>}
        />
    )
}
export default AppTextField;