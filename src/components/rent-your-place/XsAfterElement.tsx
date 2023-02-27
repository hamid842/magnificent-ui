import colors from "@/assets/colors";
import {Box} from "@mui/material";

const XsAfterElement = () => {
    return (
        <Box sx={{
            '&::before': {
                content: `""`,
                border: `1px dashed ${colors.mainColor}`,
                position: 'absolute',
                left: 0,
                height: 'calc(100% + 41px)',
                width: '40px',
                backgroundColor: 'transparent',
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
                borderRight: 'none',
                bottom: 13
            }
        }}/>
    )
}
export default XsAfterElement;