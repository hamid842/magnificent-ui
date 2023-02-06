import {Box, Grid, Stack, Typography} from "@mui/material";
import Image from "next/image";
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import AirlineSeatFlatOutlinedIcon from '@mui/icons-material/AirlineSeatFlatOutlined';
import AspectRatioOutlinedIcon from '@mui/icons-material/AspectRatioOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import SellIcon from '@mui/icons-material/Sell';
import {Property} from "@/utils/property-type";

type Props = {
    data:Property
}

const SpecialOffersItem = ({data}:Props) => {
    const {attributes} = data;
    return (
        <>
            <Box sx={{position: 'relative'}}>
                <Image src={attributes.images[0].url} width={100} height={100} alt={'Pic'} sizes={'100%'} style={{width:'100%',height:220,borderRadius: 10}}/>
                <Box sx={{
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
                }}>
                    <FavoriteBorderOutlinedIcon sx={{color: "#A47C30"}}/>
                </Box>
                <Box sx={{position: 'absolute', backgroundColor: 'white', width: 55,height:25,top:10,left:10,borderRadius:1}}>
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'center'}>
                       <StarOutlinedIcon sx={{color: "#A47C30"}}/>
                        <Typography>4.8</Typography>
                    </Stack>
                </Box>
            </Box>
            <Box sx={{paddingTop: 2}}>
                <Typography variant={'subtitle1'} sx={{fontSize:16}}><b>{attributes.Title}</b></Typography>
                <Typography variant={'body2'} sx={{color: 'gray'}}>{attributes.bedroomsNumber} Bedroom/s Combined Lodge</Typography>
                <Typography variant={'subtitle1'}>28 October - 1 November</Typography>
                <Typography variant={'subtitle1'}
                            sx={{color: "#A47C30", paddingTop: 1}}><SellIcon sx={{pt:1}}/>{attributes.price} AED/ per night</Typography>
            </Box>
            <Grid container alignItems={'center'} spacing={2} sx={{paddingTop: 1}}>
                <Grid item xs={4} sm={4} lg={4}>
                    <Stack direction={'row'} alignItems={'center'}>
                        <BedOutlinedIcon sx={{color: "#A47C30"}}/>
                        <Typography variant={'caption'}
                                    sx={{color: 'gray', paddingLeft: 1}}>{attributes.bedsNumber} Beds</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={4} sm={4} lg={4}>
                    <Stack direction={'row'} alignItems={'center'}>
                        <AirlineSeatFlatOutlinedIcon sx={{color: "#A47C30"}}/>
                        <Typography variant={'caption'}
                                    sx={{color: 'gray', paddingLeft: 1}}>{attributes.bedsNumber} Sleeps</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={4} sm={4} lg={4}>
                    <Stack direction={'row'} alignItems={'center'}>
                        <AspectRatioOutlinedIcon sx={{color: "#A47C30"}} fontSize={'small'}/>
                        <Typography variant={'caption'}
                                    sx={{color: 'gray', paddingLeft: 1}}>{attributes.squareMeters} Sq Ft</Typography>
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}
export default SpecialOffersItem;