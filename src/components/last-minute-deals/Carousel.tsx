import {CSSProperties} from "react";
import {IconButton} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Image from "next/image";
import {Carousel} from "react-responsive-carousel";
import {ImageType} from "@/utils/property-type";

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
    images: ImageType[]
}

const AppCarousel = ({images}: Props) => {
    return (
        <Carousel
            autoPlay
            infiniteLoop
            transitionTime={1000}
            showIndicators={false}
            thumbWidth={80}
            renderArrowNext={(onClickHandler, hasNext) =>
                hasNext && (
                    <IconButton sx={{...arrowStyles, right: 15}}
                                onClick={onClickHandler}><ArrowForwardIosIcon/></IconButton>
                )
            }
            renderArrowPrev={(onClickHandler, hasPrev) =>
                hasPrev && (
                    <IconButton sx={{...arrowStyles, left: 15}} onClick={onClickHandler}><ArrowBackIosNewIcon/></IconButton>
                )
            }
            showThumbs={true}
            renderThumbs={() => images?.map(image =>
                <div key={image.id}>
                    <Image
                        src={image.url} width={80} height={50} alt={image.caption}/>
                </div>)}
        >
            {
                images?.map(image =>
                    <div key={image.id}>
                        <Image
                            src={image.url} width={300} height={320} alt={image.caption}/>
                    </div>)
            }
        </Carousel>
    )
}

export default AppCarousel;