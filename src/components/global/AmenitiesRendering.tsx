import {useEffect, useState} from "react";
import {instance} from "@/config/axiosConfig";
import {IAmenitiesData} from "@/utils/property-type";
import {Grid} from "@mui/material";
import AmenityIconAndTitle from "@/components/global/AmenityIconAndTitle";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faDumbbell,
    faElevator,
    faFan,
    faHotTub,
    faKitchenSet,
    faParking,
    faTv,
    faWaterLadder,
    faWifi
} from "@fortawesome/free-solid-svg-icons";
import OtherAmenitiesModal from "@/components/last-minute-deals/OtherAmenitiesModal";

type AmenitiesRenderingProps = {
    amenitiesList?: string[]
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
    const [amenities, setAmenities] = useState<string[]>();

    const getAllAmenities = async () => {
        await instance('/amenities?pagination[page]=1&pagination[pageSize]=100').then(response => {
            if (response.status === 200) {
                const amenitiesNames: string[] = response?.data.data.map((item: IAmenitiesData) => item.attributes.name)
                setAmenities(amenitiesNames)
            }
        }).catch(error => console.log(error))
    }


    useEffect(() => {
        getAllAmenities().then(() => {
        })
    }, [])

    console.log(amenities)
    return (
        <Grid container>
            <AmenityIconAndTitle icon={<FontAwesomeIcon icon={faWifi}/>} title={'Wifi'}/>
            <AmenityIconAndTitle icon={<FontAwesomeIcon icon={faTv}/>} title={'TV'}/>
            <AmenityIconAndTitle icon={<FontAwesomeIcon icon={faElevator}/>} title={'Elevator'}/>
            <AmenityIconAndTitle icon={<FontAwesomeIcon icon={faFan}/>} title={'Air conditioning'}/>
            <AmenityIconAndTitle icon={<FontAwesomeIcon icon={faKitchenSet}/>} title={'Kitchen'}/>
            <AmenityIconAndTitle icon={<FontAwesomeIcon icon={faWaterLadder}/>} title={'Swimming pool'}/>
            <AmenityIconAndTitle icon={<FontAwesomeIcon icon={faDumbbell}/>} title={'Gym'}/>
            <AmenityIconAndTitle icon={<FontAwesomeIcon icon={faHotTub}/>} title={'Hot tub'}/>
            <AmenityIconAndTitle icon={<FontAwesomeIcon icon={faParking}/>} title={'Free parking'}/>
            <Grid item xs={12} sx={{textAlign: 'right'}}>
                <OtherAmenitiesModal/>
            </Grid>
        </Grid>
    )
}
export default AmenitiesRendering;