import {useEffect, useMemo, useState} from "react";
import axios from "axios";
import {Checkbox, FormControlLabel, FormGroup, Grid, Paper, Typography} from "@mui/material";
import {IAmenitiesData} from "@/utils/property-type";

const AdvertiseFeatures = () => {
    const [amenities, setAmenities] = useState<IAmenitiesData[]>([]);

    useEffect(() => {
        axios('http://localhost:1337/api/amenities').then(res => setAmenities(res?.data?.data)).catch(err => console.log(err))
    }, [])

    const features = useMemo(
        () => amenities.map((amenity: IAmenitiesData) => amenity.attributes.name )
        , [amenities])

    return (
        <Paper elevation={3} sx={{p: 1,my:1}}>
            <Typography variant={'subtitle1'} sx={{fontWeight: 600, mb: 1}}>Advertise Features</Typography>
            <Typography variant={'caption'} sx={{fontWeight: 500, fontSize: 10, mt: 1}}>Internal Features</Typography>
            <Grid container>
                {features.length ?
                    features.map((name, index) =>
                    <Grid item xs={12} sm={4} lg={4} key={index} sx={{height:20}}>
                        <FormGroup  >
                            <FormControlLabel control={<Checkbox size={'small'} />} label={name} sx={{ '& .MuiSvgIcon-root': { fontSize: 12 },"& .MuiFormControlLabel-label": {
                                    fontSize: 10
                                }}}/>
                        </FormGroup>
                    </Grid>
                    ) : <div>No data</div>
                }
            </Grid>
        </Paper>
    )
}
export default AdvertiseFeatures;