import {Box} from "@mui/material";
import SwitzerText from "@/components/css-texts/SwitzerText";

type Props = {
    title:string,
    text:string
}

const OurServiceItem = ({title,text}:Props)=>{
    return(
        <Box sx={{mt:2}}>
            <li style={{paddingLeft:10}}><strong>{title}</strong></li>
            <SwitzerText text={text}/>
        </Box>
    )
}
export default OurServiceItem;