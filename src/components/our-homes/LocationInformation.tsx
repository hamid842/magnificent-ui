import {Paper} from "@mui/material";
import EuclidText from "@/components/css-texts/EuclidText";

const LocationInformation = () => {
    return (
        <Paper elevation={3} sx={{py: 2, px: 1, mb: 2}}>
            <EuclidText variant={'subtitle1'} sx={{fontWeight: 600}} text={'Location Information'}/>
            <div id="map-container-google-1"
                 className="z-depth-1-half map-container"
                 style={{height: 400}}>
                <iframe
                    src="https://maps.google.com/maps?q=25.19330025,55.26979828&hl=es;z=14&amp;output=embed"
                    width="100%"
                    height="400"
                    style={{border: 0}}>
                </iframe>
            </div>
        </Paper>
    )
}
export default LocationInformation