import {IAmenities} from "@/utils/property-type";
import {Paper} from "@mui/material";
import AmenitiesRendering from "@/components/global/AmenitiesRendering";
import EuclidText from "@/components/css-texts/EuclidText";

type Props = {
    amenities: IAmenities;
};

const Features = ({amenities}: Props) => {
    return (
        <Paper elevation={3} sx={{p: 2, my: 2, borderRadius: 2}}>
            <EuclidText
                variant={"subtitle1"}
                sx={{fontWeight: 600}}
                text={"This Place Features"}
            />
            <AmenitiesRendering amenitiesList={amenities.data}/>
        </Paper>
    );
};

export default Features;
