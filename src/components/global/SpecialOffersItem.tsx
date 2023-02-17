// Material-ui
import {Box, Stack, Typography} from "@mui/material";
// Next.js
// Project imports
import {IProperty} from "@/utils/property-type";
import colors from "@/assets/colors";
import EuclidText from "@/components/css-texts/EuclidText";
import SwitzerText from "@/components/css-texts/SwitzerText";
import ImageWithHoverZoom from "@/components/global/ZoomableImage";
import SpecialOffersIconDetails from "@/components/global/SpecialOffersIconDetails";
import AppIcon from "@/components/global/AppIcon";

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

    return (
        <>
            <Box sx={{position: 'relative'}}>
                <ImageWithHoverZoom
                    alt={'Pic'}
                    sizes={'100%'}
                    src={attributes.images[0].url}
                    width={100}
                    height={140}
                    style={{
                        width: '100%',
                        transition: '0.3s all ease-in-out',
                        height: '100%',
                        borderRadius: 10,
                    }}/>
                <Box sx={favoriteIconStyles}>
                    <AppIcon name={'favorite'}/>
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
                        <AppIcon name={'star'}/>
                        <SwitzerText text={'4.8'}/>
                    </Stack>
                </Box>
            </Box>
            <Box sx={{paddingTop: 2}}>
                {/* TODO position of icons*/}
                <EuclidText text={attributes.Title} sx={{fontWeight: 600, fontSize: 14}}/>
                <SwitzerText variant={'body2'} sx={{color: 'gray'}}
                             text={`${attributes.bedroomsNumber} Bedroom/s Combined Lodge`}/>
                <Stack direction={'row'} alignItems={'center'} pt={1}>
                    <Typography variant={'subtitle1'} sx={{color: colors.mainColor}}>
                        <AppIcon name={'sell'}/>{attributes.price} AED/ per night</Typography>
                </Stack>
            </Box>

            <SpecialOffersIconDetails bedsNumber={attributes.bedsNumber} squareMeters={attributes.squareMeters}/>
        </>
    )
}
export default SpecialOffersItem;