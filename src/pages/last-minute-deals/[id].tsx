import Layout from "@/components/Layout";
import {useRouter} from "next/router";
import {Property} from "@/utils/property-type";
import {Box, IconButton, Stack, Typography} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {SellOutlined} from "@mui/icons-material";
import {Carousel} from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {CSSProperties} from "react";

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


const LivingSpaceItem = () => {
    const router = useRouter();
    const getPropertyFromRouter = router?.query?.propertyItem as string;
    const propertyItem: Property = JSON.parse(getPropertyFromRouter);
    const {attributes} = propertyItem;
    return (
        <Layout>
            <Box px={20}>
                <Typography variant={'h6'}>{attributes?.Title}</Typography>
                <Stack direction={'row'} justifyContent={'space-between'} pb={2}>
                    <Stack direction={'row'} alignItems={'center'}>
                        <LocationOnIcon sx={{color: '#A47C30'}} fontSize={'small'}/>
                        <Typography variant={'caption'}>UAE, Dubai</Typography>
                    </Stack>
                    <Stack direction={'row'} alignItems={'center'}>
                        <Typography variant={'body2'}>28 October - 1 November</Typography>
                        <SellOutlined fontSize={'small'} sx={{color: '#A47C30', ml: 1}}/>
                        <Typography variant={'subtitle1'} sx={{fontWeight: 600}}>{attributes.price} AED</Typography>
                    </Stack>
                </Stack>
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
                        attributes?.images?.map(image =>
                            <div key={image.id}>
                                <Image
                                    src={image.url} width={400} height={400} alt={image.caption}/>
                            </div>)
                    }
                </Carousel>
            </Box>
        </Layout>
    )
}
export default LivingSpaceItem;