import {styled} from "@mui/material/styles";
import {Button, ButtonProps} from "@mui/material";
import colors from "@/assets/colors";
import {euclidFont} from "@/assets/fonts";

export const ColorButton = styled(Button)<ButtonProps>({
    color: "white",
    backgroundColor: colors.mainColor,
    borderRadius:25,
    textTransform:'none',
    '&:hover': {
        backgroundColor: colors.mainColor,
    },
});

type AppButtonProps = {
    label:string
}

const AppButton = (props:(AppButtonProps & ButtonProps))=>{
    return(
        <ColorButton size={'small'} variant={'contained'} className={euclidFont.className} {...props} sx={{width:120,fontSize:14}}>{props.label}</ColorButton>
    )
}

export default AppButton;