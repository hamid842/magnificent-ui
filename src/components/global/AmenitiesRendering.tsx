import dynamic from "next/dynamic";
import {IAmenitiesData} from "@/utils/property-type";
import {Grid} from "@mui/material";

const AmenityIconAndTitle = dynamic(() => import("@/components/global/AmenityIconAndTitle"))
const OtherAmenitiesModal = dynamic(() => import("@/components/our-homes/OtherAmenitiesModal"))

type AmenitiesRenderingProps = {
    amenitiesList?: IAmenitiesData[];
};

const AmenitiesRendering = ({amenitiesList}: AmenitiesRenderingProps) => {
    const mappedAmenities = amenitiesList?.map(
        (item: IAmenitiesData) => item.attributes
    );

    return (
        <Grid container spacing={0.5} my={1} xs={12} sx={{textAlign: "right"}}>
            <AmenityIconAndTitle iconName={"wifi"} title={"Wifi"} detail={false}/>
            <AmenityIconAndTitle
                iconName={"location_city"}
                title={"City Views"}
                detail={false}
            />
            <AmenityIconAndTitle iconName={"yard"} title={"Garden"} detail={false}/>
            <AmenityIconAndTitle
                iconName={"mode_fan"}
                title={"Air conditioning"}
                detail={false}
            />
            <AmenityIconAndTitle
                iconName={"countertops"}
                title={"Kitchen"}
                detail={false}
            />
            <AmenityIconAndTitle
                iconName={"pool"}
                title={"Swimming pool"}
                detail={false}
            />
            <AmenityIconAndTitle iconName={"exercise"} title={"Gym"} detail={false}/>
            <AmenityIconAndTitle iconName={"hot_tub"} title={"Hot tub"} detail={false}/>
            <AmenityIconAndTitle
                iconName={"local_parking"}
                title={"Free parking"}
                detail={false}
            />
            <AmenityIconAndTitle iconName={"cleaning_services"} title={"Cleaning Service"} detail={false}/>
            <AmenityIconAndTitle iconName={"local_laundry_service"} title={"Laundry"} detail={false}/>
            <AmenityIconAndTitle iconName={"balcony"} title={"Balcony"} detail={false}/>
            <Grid item xs={12} sx={{textAlign: "right"}}>
                <OtherAmenitiesModal data={mappedAmenities}/>
            </Grid>
        </Grid>
    );
};
export default AmenitiesRendering;
