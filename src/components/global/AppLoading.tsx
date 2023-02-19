import {Stack} from "@mui/material";
import ReactLoading from 'react-loading'
import colors from "@/assets/colors";

const AppLoading = ()=>{
    return (
        <Stack>
            <ReactLoading type={'bubbles'} color={colors.mainColor}/>
        </Stack>
    )
}
export default AppLoading;