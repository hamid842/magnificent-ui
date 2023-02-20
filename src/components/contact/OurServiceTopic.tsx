import {Box} from "@mui/material";
import SwitzerText from "@/components/css-texts/SwitzerText";

type Props = {
    title:string,
    text:string
}

const OurServiceTopic = ({title,text}:Props)=>{
    return(
        <Box sx={{mt:2}}>
            <Box sx={{my:1}}><strong>Reasons to Invest in Our Property Management Services:</strong></Box>
            <SwitzerText text={text} />
        </Box>
    )
}
export default OurServiceTopic;