import {useEffect, useMemo, useState} from "react";
import {Checkbox, FormControlLabel, FormGroup, Grid, Paper, Stack, Typography} from "@mui/material";
import {IAllAmenityType} from "@/utils/amenity-type";
import EuclidText from "@/components/css-texts/EuclidText";
import {instance as axios} from "@/config/axiosConfig";
import {FormikProps} from "formik";

type Props = {
    formik: FormikProps<any>
}

const AdvertiseFeatures = ({formik}:Props) => {
    const [amenities, setAmenities] = useState<IAllAmenityType[]>([]);

    useEffect(() => {
        axios('/all-amenities').then(res => setAmenities(res?.data)).catch(err => console.log(err))
    }, [])

    const sortNames = (a: IAllAmenityType, b: IAllAmenityType) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    };

    const features = useMemo(
        () => amenities.sort((a, b) => sortNames(a, b)).map((amenity: IAllAmenityType) => ({
            id: amenity.id,
            name: amenity.name
        }))
        , [amenities])

    const {handleChange} = formik

    return (
        <Paper elevation={3} sx={{p: 1, my: 1}}>
            <Typography variant={'subtitle1'} sx={{fontWeight: 600, mb: 1}}>Advertise Features</Typography>
            <div id="checkbox-group"></div>
            <div role="group" aria-labelledby="checkbox-group">
                <Grid container>
                    {features.length ? features?.map((feature) =>
                        <Grid item xs={12} sm={3} lg={3} key={feature.id} sx={{height: 20}}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox size={'small'} name={'amenities'} value={feature.id} onChange={handleChange}/>} label={feature.name} sx={{
                                    '& .MuiSvgIcon-root': {fontSize: 12}, "& .MuiFormControlLabel-label": {
                                        fontSize: 10
                                    }
                                }}/>
                            </FormGroup>
                        </Grid>
                    ) : <Stack alignItems={'center'}><EuclidText align={'center'}
                                                                 text={'Something went wrong!'}/></Stack>
                    }
                </Grid>
            </div>
        </Paper>
    )
}
export default AdvertiseFeatures;