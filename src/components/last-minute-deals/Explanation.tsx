import {Paper, Typography} from "@mui/material";

type Props = {
    explanation:string
}

const Explanation = ({explanation}:Props)=>{
    return(
        <Paper elevation={3} sx={{p: 2, my: 2, borderRadius: 2}}>
            <Typography variant={'subtitle1'} sx={{fontWeight: 600}}>Explanation</Typography>
            <Typography variant={'caption'} sx={{fontSize:9,lineHeight:0.2,textAlign:'justify'}}>{explanation}</Typography>
        </Paper>

    )
}
export default Explanation;