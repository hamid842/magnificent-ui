// Material-ui
import {Box, Grid, Stack, Typography} from "@mui/material";
// Next.js
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import AirlineSeatFlatOutlinedIcon from '@mui/icons-material/AirlineSeatFlatOutlined';
import AspectRatioOutlinedIcon from '@mui/icons-material/AspectRatioOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import SellIcon from '@mui/icons-material/Sell';
// Project imports
import {IProperty} from "@/utils/property-type";
import colors from "@/assets/colors";
import EuclidText from "@/components/css-texts/EuclidText";
import SwitzerText from "@/components/css-texts/SwitzerText";
import ImageWithHoverZoom from "@/components/global/ZoomableImage";

type Props = {
    data: IProperty
}

//=======================|| Special Offers Each Item Component ||==========================

const SpecialOffersItem = ({data}: Props) => {
    const {attributes} = data;

    const favoriteIconStyles = {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: 10,
        right: 10,
        backgroundColor: 'white',
        width: 30,
        height: 30,
        borderRadius: 25
    }
    const detailsStyles = {color: 'gray', paddingLeft: 0.5}
    const iconsStyle = {color: colors.mainColor}

    return (
        <>
            <Box sx={{position: 'relative'}}>
                <ImageWithHoverZoom
                    alt={'Pic'}
                    sizes={'100%'}
                    src={attributes.images[0].url}
                    width={100}
                    height={100}
                    style={{
                        width: '100%',
                        transition: '0.3s all ease-in-out',
                        height: 'auto',
                        borderRadius: 10
                    }}/>
                <Box sx={favoriteIconStyles}>
                    <FavoriteBorderOutlinedIcon sx={iconsStyle}/>
                </Box>
                <Box sx={{
                    position: 'absolute',
                    backgroundColor: 'white',
                    width: 55,
                    height: 25,
                    top: 10,
                    left: 10,
                    borderRadius: 1
                }}>
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'center'}>
                        <StarOutlinedIcon sx={iconsStyle}/>
                        <SwitzerText text={'4.8'}/>
                    </Stack>
                </Box>
            </Box>
            <Box sx={{paddingTop: 2}}>
                <EuclidText text={attributes.Title} sx={{fontWeight: 600, fontSize: 14}}/>
                <SwitzerText variant={'body2'} sx={{color: 'gray'}}
                             text={`${attributes.bedroomsNumber} Bedroom/s Combined Lodge`}/>
                <SwitzerText variant={'subtitle1'} text={'28 October - 1 November'}/>
                <Typography variant={'subtitle1'} sx={{color: colors.mainColor, paddingTop: 1}}>
                    <SellIcon sx={{pt: 1}}/>{attributes.price} AED/ per night</Typography>
            </Box>
            <Grid container alignItems={'center'} spacing={1} sx={{paddingTop: 1}}>
                <Grid item xs={4} sm={4} lg={4}>
                    <Stack direction={'row'} alignItems={'center'}>
                        <BedOutlinedIcon sx={iconsStyle}/>
                        <SwitzerText variant={'caption'} sx={detailsStyles}
                                     text={`${attributes.bedsNumber ? attributes.bedsNumber : "-"} Beds`}/>
                    </Stack>
                </Grid>
                <Grid item xs={4} sm={4} lg={4}>
                    <Stack direction={'row'} alignItems={'center'}>
                        <AirlineSeatFlatOutlinedIcon sx={iconsStyle}/>
                        <SwitzerText variant={'caption'} sx={detailsStyles}
                                     text={`${attributes.bedsNumber ? attributes.bedsNumber : "-"} Sleeps`}/>
                    </Stack>
                </Grid>
                <Grid item xs={4} sm={4} lg={4}>
                    <Stack direction={'row'} alignItems={'center'}>
                        <AspectRatioOutlinedIcon sx={iconsStyle} fontSize={'small'}/>
                        <SwitzerText variant={'caption'} sx={detailsStyles}
                                     text={`${attributes.squareMeters ? attributes.squareMeters : "-"} Sq Ft`}/>
                    </Stack>
                </Grid>
            </Grid>

        </>
    )
}
export default SpecialOffersItem;