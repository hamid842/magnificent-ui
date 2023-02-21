import Image, {ImageProps} from "next/image";
import {Box} from "@mui/material";

type THeight = {
    xs: number,
    sm: number,
    md: number,
    lg: number
}

type ImageWithHoverZoomProps = {
    boxHeight?: THeight,
    radius?: number
}

const ImageWithHoverZoom = (props: (ImageWithHoverZoomProps & ImageProps)) => {
    const {boxHeight, radius = 0,...rest} = props;
    return (
        <Box sx={{
            height: boxHeight,
            width: '100%',
            overflow: 'hidden',
            margin: '0 auto',
            borderRadius: radius,
            boxShadow: 'rgb(0 0 0 / 25%) 0 14px 40px, rgb(0 0 0 / 22%) 0 10px 18px',
            '& :hover': {transform: 'scale(1.1)'}
        }}>
            <Image {...rest} alt={'Pic'}/>
        </Box>
    )
}
export default ImageWithHoverZoom;