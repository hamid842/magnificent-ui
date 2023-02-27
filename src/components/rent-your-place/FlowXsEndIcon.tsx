import {Box} from "@mui/material";
import AppIcon from "@/components/global/AppIcon";
import colors from "@/assets/colors";

const FlowXsEndIcon = () => {
    return (
        <Box sx={{
            width: 60,
            height: 60,
            borderRadius: 3,
            border: `1px dashed ${colors.mainColor}`,
            display: 'grid',
            placeItems: 'center',
            position: 'absolute',
            left: 0,
            bottom: 2,
            transform: 'translateY(15px)',
            backgroundColor:'white'
        }}>
            <AppIcon name={'real_estate_agent'}/>
        </Box>
    )
}
export default FlowXsEndIcon;