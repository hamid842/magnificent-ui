import {Grid, Paper} from "@mui/material";
import EuclidText from "@/components/css-texts/EuclidText";
import NearByPlaces from "@/components/global/NearByPlaces";

const AccessibleInformation = () => {
    return (
        <Paper elevation={3} sx={{p: 2, my: 2, borderRadius: 2}}>
            <EuclidText
                variant={"subtitle1"}
                sx={{fontWeight: 600}}
                text={"Location and accessible information"}
            />
            <Grid container spacing={1} my={1}>
                <Grid item xs={12} sm={6} lg={6}>
                    <NearByPlaces locationName={'Mall'} taxiDistance={'<20 min'} busDistance={'<20 min'}
                                  walkingDistance={'<20 min'}/>
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                    <NearByPlaces locationName={'Metro'} taxiDistance={'<20 min'} busDistance={'<20 min'}
                                  walkingDistance={'<20 min'}/>
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                    <NearByPlaces locationName={'Airport'} taxiDistance={'<20 min'} busDistance={'<20 min'}
                                  walkingDistance={'<20 min'}/>
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                    <NearByPlaces locationName={'Beach'} taxiDistance={'<20 min'} busDistance={'<20 min'}
                                  walkingDistance={'<20 min'}/>
                </Grid>
            </Grid>
        </Paper>
    );
};
export default AccessibleInformation;
