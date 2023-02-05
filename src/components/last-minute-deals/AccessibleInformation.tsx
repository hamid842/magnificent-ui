import {Grid, Paper, Box, Typography, Stack} from "@mui/material";

const AccessibleInformation = ()=>{
    return (
        <Paper elevation={3} sx={{p: 2, my: 2, borderRadius: 2}}>
            <Typography variant={'subtitle2'} sx={{fontWeight: 600}}>Location and accessible information</Typography>
            <Grid container spacing={6}>
                <Grid item xs={12} sm={6} lg={6}>
                    <Typography variant={'caption'} sx={{fontWeight: 600,fontSize:10}}>Distance to places</Typography>
                    <Stack>
                    <Typography variant={'caption'} sx={{fontWeight: 600,fontSize:10,my:1}}>Metro</Typography>
                    <Box sx={{width:'100%',height:15,border:'1px solid #FEBE1E',borderRadius:1}}>

                    </Box>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                    <Typography variant={'caption'} sx={{fontWeight: 600,fontSize:10}}>Change in house rental prices</Typography>
                </Grid>
            </Grid>
        </Paper>
    )
}
export default AccessibleInformation;