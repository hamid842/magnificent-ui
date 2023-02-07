import {Paper, Stack, Typography, Zoom} from "@mui/material";
import {Check} from "@mui/icons-material";

const ThirdStep = () => {
    return (
        <Stack alignItems={'center'}>
            <Paper sx={{width: 400, height: 200}}>
                <Zoom in={true} style={{transitionDelay: '500ms'}}>
                    <Stack direction={'column'} alignItems={'center'}>
                        <Check color={'success'} sx={{fontSize:60}}/>
                        <Typography sx={{mt:1}}>Your information have been provided successfully.</Typography>
                        <Typography align={'center'}>Thank you, our agents will keep in touch with you as soon as possible.</Typography>
                    </Stack>
                </Zoom>
            </Paper>
        </Stack>


    )
}
export default ThirdStep;