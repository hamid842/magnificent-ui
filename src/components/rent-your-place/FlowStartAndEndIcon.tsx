import colors from "@/assets/colors";
import {Box} from "@mui/material";
import AppIcon from "@/components/global/AppIcon";

type Props = {
    iconName:string
}

const FlowStartAndEndIcon = ({iconName}:Props)=>{
    return (
        <Box sx={{
            '&::after': {
                content: '""',
                width: 'calc(100% - 120px)',
                height: '1px',
                borderTop: `1px dashed ${colors.mainColor}`,
                position: 'absolute',
                left: '50%',
                bottom: 12,
                transform: 'translateX(-50%)',
                zIndex: 2
            }
        }}>
            <Box sx={{
                width: 60,
                height: 60,
                borderRadius: 3,
                border: `1px dashed ${colors.mainColor}`,
                display: 'grid',
                placeItems: 'center',
                position: 'absolute',
                left: 0,
                bottom: 0,
                transform: 'translateY(15px)'
            }}>
                <AppIcon name={iconName}/>
            </Box>
        </Box>
    )
}
export default FlowStartAndEndIcon;