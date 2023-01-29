import {Box, Grid, Stack, Typography} from "@mui/material";
import Image from "next/image";
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import AirlineSeatFlatOutlinedIcon from '@mui/icons-material/AirlineSeatFlatOutlined';
import AspectRatioOutlinedIcon from '@mui/icons-material/AspectRatioOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';

const SpecialOffersItem = (props: any) => {
    const {data} = props;
    return (
        <>
            <Box sx={{position: 'relative'}}>
                <Image src={data.imageUrl} alt={'Pic'} width={370} height={250} style={{borderRadius: 10}}/>
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
                <Box sx={{position: 'absolute', backgroundColor: 'white', width: 55,height:30,top:10,left:10,borderRadius:1}}>
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'center'}>
                       <StarOutlinedIcon sx={{color: "#A47C30"}}/>
                        <Typography>{data.stars}</Typography>
                    </Stack>
                </Box>
            </Box>
            <Box sx={{paddingTop: 2}}>
                <Typography variant={'h5'}>{data.title}</Typography>
                <Typography variant={'body2'} sx={{color: 'gray'}}>{data.subtitle}</Typography>
                <Typography variant={'h6'}>{data.fromDate} - {data.toDate}</Typography>
                <Typography variant={'h6'}
                            sx={{color: "#A47C30", paddingTop: 1}}>${data.price} /{data.nights}</Typography>
            </Box>
            <Grid container alignItems={'center'} spacing={2} sx={{paddingTop: 1}}>
                <Grid item xs={4} sm={4} lg={4}>
                    <Stack direction={'row'} alignItems={'center'}>
                        <BedOutlinedIcon sx={{color: "#A47C30"}}/>
                        <Typography variant={'caption'}
                                    sx={{color: 'gray', paddingLeft: 1}}>{data.bedsNo} Beds</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={4} sm={4} lg={4}>
                    <Stack direction={'row'} alignItems={'center'}>
                        <AirlineSeatFlatOutlinedIcon sx={{color: "#A47C30"}}/>
                        <Typography variant={'caption'}
                                    sx={{color: 'gray', paddingLeft: 1}}>{data.personsNo} Sleeps</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={4} sm={4} lg={4}>
                    <Stack direction={'row'} alignItems={'center'}>
                        <AspectRatioOutlinedIcon sx={{color: "#A47C30"}} fontSize={'small'}/>
                        <Typography variant={'caption'}
                                    sx={{color: 'gray', paddingLeft: 1}}>{data.bedsNo} Beds</Typography>
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}
export default SpecialOffersItem;