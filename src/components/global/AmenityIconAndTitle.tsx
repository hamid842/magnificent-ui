import {ReactNode} from "react";
import {Grid, Stack} from "@mui/material";
import SwitzerText from "@/components/css-texts/SwitzerText";
import colors from "@/assets/colors";

type Props = {
    icon:ReactNode,
    title:string
}

const AmenityIconAndTitle = ({icon,title}:Props)=>{
    return(
        <Grid item xs={6}>
            <Stack direction={'row'} alignItems={'center'}>
                <span style={{fontSize:20,color:colors.mainColor}}>{icon}</span>
                <SwitzerText sx={{marginLeft:1,fontSize:14}} text={title}/>
            </Stack>
        </Grid>
    )
}
export default AmenityIconAndTitle;