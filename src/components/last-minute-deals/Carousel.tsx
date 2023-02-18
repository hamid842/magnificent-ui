import {CSSProperties} from "react";
import Image from "next/image";
import {Box, IconButton} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {Carousel} from "react-responsive-carousel";
import {IImageType} from "@/utils/property-type";
import colors from "@/assets/colors";

const arrowStyles: CSSProperties = {
    position: 'absolute',
    backgroundColor: 'white',
    opacity: 0.5,
    zIndex: 2,
    top: 'calc(50% - 15px)',
    width: 40,
    height: 40,
    cursor: 'pointer',
};

type Props = {
    images: IImageType[]
}

const AppCarousel = ({images}: Props) => {
    return (
        //TODO modify shadow and bg
        // <Box sx={{
        //     width: '100%',
        //     height: 'auto',
        //     backgroundColor:colors.bodyBackground,
        //     boxShadow: 'rgb(0 0 0 / 25%) 0 14px 40px, rgb(0 0 0 / 22%) 0 10px 18px'
        // }}>
        <Carousel
            autoPlay
            infiniteLoop
            transitionTime={1000}
            showIndicators={false}
            thumbWidth={100}
            renderArrowNext={(onClickHandler, hasNext) =>
                hasNext && (
                    <IconButton sx={{...arrowStyles, right: 15}}
                                onClick={onClickHandler}><ArrowForwardIosIcon/></IconButton>
                )
            }
            renderArrowPrev={(onClickHandler, hasPrev) =>
                hasPrev && (
                    <IconButton sx={{...arrowStyles, left: 15}}
                                onClick={onClickHandler}><ArrowBackIosNewIcon/></IconButton>
                )
            }
            showThumbs={true}
            renderThumbs={() => images?.map(image =>
                <div key={image.id} style={{background: 'transparent'}}>
                    <Image
                        src={image.url} width={80} height={50} alt={image.caption}/>
                </div>)}
        >
            {
                images?.map(image =>
                    <Box key={image.id} sx={{
                        width: '100%',
                        height: 340,
                        backgroundColor: colors.bodyBackground,
                        // boxShadow: 'rgb(0 0 0 / 25%) 0 14px 40px, rgb(0 0 0 / 22%) 0 10px 18px'
                    }}>
                        <Image
                            src={image.url} width={200} height={340} alt={image.caption}/>
                    </Box>
                )
            }
        </Carousel>
        // </Box>
    )
}

export default AppCarousel;