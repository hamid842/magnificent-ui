import Image, {ImageProps} from "next/image";
import {Box} from "@mui/material";

const ImageWithHoverZoom = (props: ImageProps) => {
    return (
        <Box sx={{
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            margin: '0 auto',
            borderRadius: 3,
            '& :hover': {transform: 'scale(1.1)'}
        }}>
            <Image {...props} />
        </Box>
    )
}
export default ImageWithHoverZoom;