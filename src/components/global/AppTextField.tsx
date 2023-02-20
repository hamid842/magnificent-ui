import {TextField, TextFieldProps} from "@mui/material";

const AppTextField = (props: TextFieldProps) => {
    return (
        <TextField {...props}
                   fullWidth
                   variant={'outlined'}
                   size={'small'}
        />
    )
}
export default AppTextField;