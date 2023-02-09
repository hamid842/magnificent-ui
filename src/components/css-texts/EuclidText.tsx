import {Typography,TypographyProps} from "@mui/material";
import {euclidFont} from "@/assets/fonts";

type PoppinsTextProps = {
    text:string,
}

const EuclidText = (props:(PoppinsTextProps & TypographyProps))=>{
    return(
        <Typography className={euclidFont.className} {...props}>{props.text}</Typography>
    )
}
export default EuclidText;