import {Typography,TypographyProps} from "@mui/material";
import {switzerFont} from "@/assets/fonts";

type PoppinsTextProps = {
    text:string,
}

const SwitzerText = (props:(PoppinsTextProps & TypographyProps))=>{
    return(
        <Typography className={switzerFont.className} {...props}>{props.text}</Typography>
    )
}
export default SwitzerText;