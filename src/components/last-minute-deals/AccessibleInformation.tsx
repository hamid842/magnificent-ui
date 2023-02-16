import {Grid, Paper, Stack, Typography} from "@mui/material";
import AccessibleSlider from "@/components/last-minute-deals/AccessibleSlider";
import EuclidText from "@/components/css-texts/EuclidText";

const AccessibleInformation = () => {
    return (
        <Paper elevation={3} sx={{p: 2, my: 2, borderRadius: 2}}>
            <EuclidText variant={'subtitle1'} sx={{fontWeight: 600}} text={'Location and accessible information'}/>
            <Grid container spacing={6}>
                <Grid item xs={12} sm={6} lg={6}>
                    <Typography variant={'caption'} sx={{fontWeight: 600, fontSize: 10}}>Distance to places</Typography>
                    <Stack direction={'row'} py={2}>
                        <Typography variant={'caption'} sx={{mr: 3}}>&lt;20 min</Typography>
                        <Typography variant={'caption'} sx={{mr: 3}}>~20 min</Typography>
                        <Typography variant={'caption'}>&gt;20 min</Typography>
                    </Stack>
                    <AccessibleSlider title={'Metro'} value={'38.6'} color={'#FEBE1E'}/>
                    <AccessibleSlider title={'Dubai Mall'} value={'27.6'} color={'#FEBE1E'}/>
                    <AccessibleSlider title={'Opera'} value={'64.6'} color={'#FEBE1E'}/>
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                    <Typography variant={'caption'} sx={{fontWeight: 600, fontSize: 10}}>Change in house rental
                        prices</Typography>
                    <Stack direction={'row'} py={2}>
                        <Typography variant={'caption'} sx={{mr: 3}}>&lt;20 min</Typography>
                        <Typography variant={'caption'} sx={{mr: 3}}>~20 min</Typography>
                        <Typography variant={'caption'}>&gt;20 min</Typography>
                    </Stack>
                    <AccessibleSlider title={'Airport'} value={'38.6'} color={'#A47C30'}/>
                    <AccessibleSlider title={'Car Rental'} value={'27.6'} color={'#A47C30'}/>
                    <AccessibleSlider title={'Beach Walk'} value={'64.6'} color={'#A47C30'}/>
                </Grid>
            </Grid>
        </Paper>
    )
}
export default AccessibleInformation;