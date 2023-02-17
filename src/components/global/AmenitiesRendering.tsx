import {useEffect, useState} from "react";
import {instance} from "@/config/axiosConfig";
import {IAmenitiesData} from "@/utils/property-type";
import {Grid} from "@mui/material";
import AmenityIconAndTitle from "@/components/global/AmenityIconAndTitle";
import OtherAmenitiesModal from "@/components/last-minute-deals/OtherAmenitiesModal";

type AmenitiesRenderingProps = {
    amenitiesList?: IAmenitiesData[]
}

const list = ['Cable TV', 'Internet', 'Wireless', 'Air conditioning', 'Wheelchair access possible', 'Swimming pool',
    'Kitchen', 'Gym', 'Breakfast', 'Hot tub', 'Fireplace', 'Washing Machine', 'Dryer', 'Elevator', '24-hour checkin',
    'Hair Dryer', 'Heating', 'Doorman', 'Smoke detector', 'Carbon Monoxide Detector', 'First aid kit',
    'Fire Extinguisher', 'Essentials', 'Shampoo', 'Hangers', 'Iron', 'Laptop Friendly workspace', 'TV',
    'Sound system', 'Smoking allowed', 'Pets allowed', 'Street parking', 'Free parking', 'Suitable for events',
    'Gay friendly', 'Balcony', 'Electronic key card access', 'Private living room', 'Suitable for children',
    'Suitable for infants', 'Communal swimming pool', 'Heated swimming pool', 'Paid parking', 'Iron board',
    'Linens', 'Outdoor grill', 'Toaster', 'Dishwasher', 'Microwave', 'Oven', 'Electric kettle', 'Coffee/tea maker',
    'Shower', 'Tub', 'Bidet', 'Wheelchair not accessible', 'Baby crib', 'Deck patio uncovered', 'Stove',
    'Refrigerator', 'Towels', 'Dining room', 'Garden or backyard', 'High chair', 'Kitchen utensils',
    'Single level home', 'Home step free access', 'Path to entrance lit at night', 'Home wide doorway',
    'Flat smooth pathway to front door', 'Disabled parking spot', 'Bedroom step free access', 'Wide clearance to bed',
    'Bedroom wide doorway', 'Accessible height bed', 'Electric profiling bed', 'Bathroom step free access',
    'Grab rails in shower', 'Grab rails in toilet', 'Accessible height toilet', 'Rollin shower',
    'Shower chair', 'Bathroom wide doorway', 'Tub with shower bench', 'Wide clearance to shower and toilet',
    'Handheld shower head', 'Common space step free access', 'Common space wide doorway', 'Mobile hoist',
    'Pool hoist', 'Ceiling hoist', 'Hot water', 'Private entrance', 'Extra pillows and blankets', 'Pocket wifi',
    'Cooking basics', 'Electric vehicle charger', 'Beach essentials', 'Room darkening shades', 'Game room']


const AmenitiesRendering = ({amenitiesList}: AmenitiesRenderingProps) => {

    const mappedAmenities = amenitiesList?.map((item:IAmenitiesData)=>item.attributes)


    return (
        <Grid container spacing={0.5} my={1}>
            <AmenityIconAndTitle icon={'wifi'} title={'Wifi'} detail={false}/>
            <AmenityIconAndTitle icon={'location_city'} title={'City Views'} detail={false}/>
            <AmenityIconAndTitle icon={'yard'} title={'Garden'} detail={false}/>
            <AmenityIconAndTitle icon={'mode_fan'} title={'Air conditioning'} detail={false}/>
            <AmenityIconAndTitle icon={'countertops'} title={'Kitchen'} detail={false}/>
            <AmenityIconAndTitle icon={'pool'} title={'Swimming pool'} detail={false}/>
            <AmenityIconAndTitle icon={'exercise'} title={'Gym'} detail={false}/>
            <AmenityIconAndTitle icon={'hot_tub'} title={'Hot tub'} detail={false}/>
            <AmenityIconAndTitle icon={'local_parking'} title={'Free parking'} detail={false}/>
            <AmenityIconAndTitle icon={'balcony'} title={'Balcony'} detail={false}/>
            <Grid item xs={12} sx={{textAlign: 'right'}}>
                <OtherAmenitiesModal data={mappedAmenities}/>
            </Grid>
        </Grid>
    )
}
export default AmenitiesRendering;