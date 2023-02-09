import {Typography,TypographyProps} from "@mui/material";
import {poppinsFont} from "@/assets/fonts";

type PoppinsTextProps = {
    text:string,
}

const PoppinsText = (props:(PoppinsTextProps & TypographyProps))=>{
    return(
        <Typography className={poppinsFont.className} {...props}>{props.text}</Typography>
    )
}
export default PoppinsText;