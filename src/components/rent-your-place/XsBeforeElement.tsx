import colors from "@/assets/colors";
import {Box} from "@mui/material";

const XsBeforeElement = () => {
    return (
            <Box sx={{
                '&::before': {
                    content: `""`,
                    border: `1px dashed ${colors.mainColor}`,
                    position: 'absolute',
                    right: 0,
                    height: 'calc(100% + 41px)',
                    width: '40px',
                    backgroundColor: 'transparent',
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    borderLeft: 'none',
                    bottom: 13
                }
            }}/>
    )
}
export default XsBeforeElement;