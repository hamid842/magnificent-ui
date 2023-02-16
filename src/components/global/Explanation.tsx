import {Box, Paper, Typography} from "@mui/material";
import ReactMarkdown from "react-markdown";
import {switzerFont} from "@/assets/fonts";
import EuclidText from "@/components/css-texts/EuclidText";

type Props = {
    explanation: string
}

const Explanation = ({explanation}: Props) => {
    return (
        <Paper elevation={3} sx={{p: 2, my: 2, borderRadius: 2}}>
            <EuclidText variant={'subtitle1'} sx={{fontWeight: 600}} text={'Explanation'}/>
            <Box sx={{fontSize:14}}>
            <ReactMarkdown className={switzerFont.className}>

                {explanation.toString()}
            </ReactMarkdown>
            </Box>
        </Paper>

    )
}
export default Explanation;