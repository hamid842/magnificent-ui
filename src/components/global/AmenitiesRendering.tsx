import {IAmenitiesData} from "@/utils/property-type";
import {Grid} from "@mui/material";
import AmenityIconAndTitle from "@/components/global/AmenityIconAndTitle";
import OtherAmenitiesModal from "@/components/our-homes/OtherAmenitiesModal";

type AmenitiesRenderingProps = {
    amenitiesList?: IAmenitiesData[];
};

const AmenitiesRendering = ({amenitiesList}: AmenitiesRenderingProps) => {
    const mappedAmenities = amenitiesList?.map(
        (item: IAmenitiesData) => item.attributes
    );

    return (
        <Grid container spacing={0.5} my={1} xs={12} sx={{textAlign: "right"}}>
            <AmenityIconAndTitle icon={"wifi"} title={"Wifi"} detail={false}/>
            <AmenityIconAndTitle
                icon={"location_city"}
                title={"City Views"}
                detail={false}
            />
            <AmenityIconAndTitle icon={"yard"} title={"Garden"} detail={false}/>
            <AmenityIconAndTitle
                icon={"mode_fan"}
                title={"Air conditioning"}
                detail={false}
            />
            <AmenityIconAndTitle
                icon={"countertops"}
                title={"Kitchen"}
                detail={false}
            />
            <AmenityIconAndTitle
                icon={"pool"}
                title={"Swimming pool"}
                detail={false}
            />
            <AmenityIconAndTitle icon={"exercise"} title={"Gym"} detail={false}/>
            <AmenityIconAndTitle icon={"hot_tub"} title={"Hot tub"} detail={false}/>
            <AmenityIconAndTitle
                icon={"local_parking"}
                title={"Free parking"}
                detail={false}
            />
            <AmenityIconAndTitle icon={"cleaning_services"} title={"Cleaning Service"} detail={false}/>
            <AmenityIconAndTitle icon={"local_laundry_service"} title={"Laundry"} detail={false}/>
            <AmenityIconAndTitle icon={"balcony"} title={"Balcony"} detail={false}/>
            <Grid item xs={12} sx={{textAlign: "right"}}>
                <OtherAmenitiesModal data={mappedAmenities}/>
            </Grid>
        </Grid>
    );
};
export default AmenitiesRendering;
