import {Amenities} from "@/utils/property-type";
import {Grid, Paper, Typography} from "@mui/material";

type Props = {
    amenities: Amenities
}

const interiorFeatures = [
    'Wireless', 'Air conditioning', 'Kitchen', 'Washing Machine', 'Hair Dryer', 'Smoke detector', 'Carbon Monoxide Detector', 'First aid kit',
    'Fire Extinguisher', 'Essentials', 'Shampoo', 'Hangers', 'Iron', 'TV', 'Balcony', 'Suitable for children', 'Suitable for infants', 'Linens',
    'Toaster', 'Oven', 'Electric kettle', 'Coffee/tea maker', 'Tub', 'Baby crib', 'Stove', 'Refrigerator', 'Kitchen utensils', 'Hot water', 'Private entrance',
    'Extra pillows and blankets', 'Cooking basics', 'Electric vehicle charger', 'Room darkening shades', 'Luggage dropoff allowed', 'Long term stays allowed',
    'Dining table', 'Safe', 'Cleaning products', 'Body soap', 'Conditioner', 'Shower gel', 'Clothing storage', 'Drying rack for clothing', 'Exercise equipment',
    'Blender', 'Coffee', 'Freezer', 'Wine glasses'
]

const externalFeatures = [
    'Swimming pool', 'Gym', 'Elevator', 'Free parking', 'Gardened', 'Security', 'Tennis Court', 'Market', 'Basketball Field'
]

const Features = ({amenities}: Props) => {
    const {data} = amenities;
    const mapped = data.map(el => el.attributes.name).join(",")
    return (
        <Paper elevation={3} sx={{p: 2, my: 2, borderRadius: 2}}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={9} lg={9}>
                    <Typography variant={'subtitle2'} sx={{fontWeight: 600,fontSize:10}}>Interior Features</Typography>
                    <Grid container spacing={1}>
                        {interiorFeatures.map(feature=>
                            <Grid key={feature} item xs={6} sm={6} lg={6}>
                                <Typography variant={'caption'} sx={{fontSize:9}}>{feature}</Typography>
                            </Grid>
                        )}
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={3} lg={3}>
                    <Typography variant={'subtitle2'} sx={{fontWeight: 600,fontSize:10}}>External Features</Typography>
                    <Grid container>
                    {externalFeatures.map(feature=>
                        <Grid key={feature} item xs={12} sm={12} lg={12}>
                            <Typography variant={'caption'} sx={{fontSize:9}}>{feature}</Typography>
                        </Grid>
                    )}
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Features;