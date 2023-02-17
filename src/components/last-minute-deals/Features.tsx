import {IAmenities} from "@/utils/property-type";
import {Paper} from "@mui/material";
import AmenitiesRendering from "@/components/global/AmenitiesRendering";
import EuclidText from "@/components/css-texts/EuclidText";

type Props = {
    amenities: IAmenities
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

    return (
        <Paper elevation={3} sx={{p: 2, my: 2, borderRadius: 2}}>
            <EuclidText variant={'subtitle1'} sx={{fontWeight: 600}} text={'This Place Features'}/>
            <AmenitiesRendering amenitiesList={amenities.data}/>
        </Paper>
    )
}

export default Features;