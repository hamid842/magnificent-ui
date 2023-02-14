import {Paper, Typography} from "@mui/material";
import ReactMarkdown from "react-markdown";
import {switzerFont} from "@/assets/fonts";

type Props = {
    explanation:string
}

const Explanation = ({explanation}:Props)=>{
    console.log(explanation)
    return(
        <Paper elevation={3} sx={{p: 2, my: 2, borderRadius: 2}}>
            <Typography variant={'subtitle2'} sx={{fontWeight: 600}}>Explanation</Typography>
            {/*<Typography variant={'caption'} sx={{fontSize:12,lineHeight:0.2}}>{explanation}</Typography>*/}
            <ReactMarkdown className={switzerFont.className}>

                {explanation.toString()}
            </ReactMarkdown>
        </Paper>

    )
}
export default Explanation;