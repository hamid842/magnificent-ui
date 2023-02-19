import Image, {ImageProps} from "next/image";
import {Box} from "@mui/material";

const ImageWithHoverZoom = (props: ImageProps) => {
    return (
        <Box sx={{
            width: '100%',
            height: {xs:220,sm:220,md:170,lg:170},
            overflow: 'hidden',
            margin: '0 auto',
            borderRadius: 3,
            boxShadow:'rgb(0 0 0 / 25%) 0 14px 40px, rgb(0 0 0 / 22%) 0 10px 18px',
            '& :hover': {transform: 'scale(1.1)'}
        }}>
            <Image {...props} />
        </Box>
    )
}
export default ImageWithHoverZoom;