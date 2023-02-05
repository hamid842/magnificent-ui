import {CSSProperties} from "react";
import {IconButton} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Image from "next/image";
import {Carousel} from "react-responsive-carousel";
import {ImageType} from "@/utils/property-type";

const arrowStyles: CSSProperties = {
    position: 'absolute',
    backgroundColor:'white',
    opacity:0.5,
    zIndex: 2,
    top: 'calc(50% - 15px)',
    width: 40,
    height: 40,
    cursor: 'pointer',
};

type Props ={
    images:ImageType[]
}

const AppCarousel = ({images}:Props)=>{
    return (
        <Carousel
            showIndicators={false}
            renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                    <IconButton sx={{...arrowStyles, right: 15}} onClick={onClickHandler}><ArrowForwardIosIcon/></IconButton>
                )
            }
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                    <IconButton sx={{...arrowStyles, left: 15}} onClick={onClickHandler}><ArrowBackIosNewIcon/></IconButton>
                )
            }
            showThumbs={false}
        >
            {
                images?.map(image =>
                    <div key={image.id}>
                        <Image
                            src={image.url} width={350} height={350} alt={image.caption}/>
                    </div>)
            }
        </Carousel>
    )
}

export default AppCarousel;