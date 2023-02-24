import {CSSProperties} from "react";
// Next.js
import Image from "next/image";
// Material ui
import {Box, IconButton} from "@mui/material";
import {ArrowBackIosNew, ArrowForwardIos} from "@mui/icons-material";
// Third Party
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// Project imports
import colors from "@/assets/colors";
import {IImageType} from "@/utils/property-type";


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
        <Box sx={{
            width: '100%',
            height: 'auto',
            backgroundColor:colors.bodyBackground,
            boxShadow: 'rgb(0 0 0 / 25%) 0 14px 40px, rgb(0 0 0 / 22%) 0 10px 18px'
        }}>
        <Carousel
            autoPlay
            infiniteLoop
            transitionTime={1000}
            showIndicators={false}
            thumbWidth={100}
            renderArrowNext={(onClickHandler, hasNext) =>
                hasNext && (
                    <IconButton sx={{...arrowStyles, right: 15}}
                                onClick={onClickHandler}><ArrowForwardIos /></IconButton>
                )
            }
            renderArrowPrev={(onClickHandler, hasPrev) =>
                hasPrev && (
                    <IconButton sx={{...arrowStyles, left: 15}}
                                onClick={onClickHandler}><ArrowBackIosNew/></IconButton>
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
                    <Box key={image.id}>
                        <Image
                            src={image.url} width={200} height={340} alt={image.caption}/>
                    </Box>
                )
            }
        </Carousel>
        </Box>

    )
}

export default AppCarousel;