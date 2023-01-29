import {Box, Button, Grid, Stack, Typography} from "@mui/material";
import HikingIcon from '@mui/icons-material/Hiking';
import ServiceItem from "@/components/about/ServiceItem";
import RollerSkatingIcon from '@mui/icons-material/RollerSkating';
import TerrainIcon from '@mui/icons-material/Terrain';
import TourIcon from '@mui/icons-material/Tour';
import ScubaDivingIcon from '@mui/icons-material/ScubaDiving';
import ParaglidingIcon from '@mui/icons-material/Paragliding';

const OurServices = () => {
    return (
        <>
            <Box sx={{textAlign: 'center'}}>
                <Typography variant={'caption'} sx={{fontSize:20}}>BENEFITS</Typography>
                <Typography variant={'h3'} sx={{fontWeight: 700}}>OUR SERVICES</Typography>
            </Box>
            <Box>
                <Grid container spacing={5} sx={{pt:10}}>
                    <Grid item xs={12} sm={6} lg={4}>
                        <ServiceItem ItemIcon={<HikingIcon sx={{fontSize:50}}/>} title={'Hiking'} />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <ServiceItem ItemIcon={<RollerSkatingIcon sx={{fontSize:50}}/>} title={'Skating'}/>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <ServiceItem ItemIcon={<TerrainIcon sx={{fontSize:50}}/>} title={'Climb'} />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <ServiceItem ItemIcon={<TourIcon sx={{fontSize:50}}/>} title={'Tours'} />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <ServiceItem ItemIcon={<ScubaDivingIcon sx={{fontSize:50}}/>} title={'Diving'} />
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <ServiceItem ItemIcon={<ParaglidingIcon sx={{fontSize:50}}/>} title={'Flying'} />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
export default OurServices;