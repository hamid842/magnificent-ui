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
                width: 'calc(100% - 100px)',
                height: '1px',
                borderTop: `1px dashed ${colors.mainColor}`,
                position: 'absolute',
                left: '50%',
                bottom: 12,
                transform: 'translateX(-50%)',
                zIndex: 0
            }
        }}>
            <Box sx={{
                width: 50,
                height: 50,
                borderRadius: 3,
                border: `1px dotted ${colors.mainColor}`,
                display: 'grid',
                placeItems: 'center',
                position: 'absolute',
                left: 0,
                bottom: 0,
                transform: 'translateY(12px)'
            }}>
                <AppIcon name={iconName}/>
            </Box>
        </Box>
    )
}
export default FlowStartAndEndIcon;