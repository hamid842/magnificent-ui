// Next.js
import Image from "next/image";
// Material-ui
import {Box, Grid, Stack, Typography} from "@mui/material";
// Project imports
import activityOne from '../../../public/activity-1.png'
import activityTwo from '../../../public/activity-2.png'
import activityThree from '../../../public/activity-3.png'
import activityMain from '../../../public/activity-main.png'
import OurPartnership from "@/components/OurPartnership";
import TitleSeparator from "@/components/TitleSeparator";
import colors from '../../assets/colors'
import {switzerFont} from "@/assets/fonts";

//======================|| Activities Section ||========================

const ActivityList = () => {
    return (
        <>
            <TitleSeparator separatorTitle={'Spend your'} title={'Vacation with our activities'}/>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={6} lg={6}>
                    <Typography variant={'body2'} sx={{fontStyle: 'italic'}}>The traveller where you can select
                        your</Typography>
                    <Typography variant={'body2'} sx={{fontStyle: 'italic'}}>desired activity destinations of
                        your</Typography>
                    <Typography variant={'body2'} sx={{fontStyle: 'italic'}}>choice for vacations.</Typography>
                    <Typography variant={'body2'} mt={3} sx={{fontWeight: 600}}>ACTIVITY LIST</Typography>
                    <Stack direction={'row'} justifyContent={'space-between'} my={2}>
                        <Box sx={{
                            width: 145,
                            height: 180,
                            p: 1,
                            backgroundColor: colors.yellow,
                            borderTopLeftRadius: 6,
                            borderTopRightRadius: 50,
                            borderBottomRightRadius: 6
                        }}>
                            <Image src={activityOne} alt={"Pic"} width={130} height={130} style={{
                                borderTopLeftRadius: 5,
                                borderTopRightRadius: 46,
                                borderBottomLeftRadius: 46
                            }}/>
                            <Typography variant={'caption'} className={switzerFont.className}
                                        sx={{fontWeight: 600, ml: 5, color: 'white'}}>Flying</Typography>
                        </Box>
                        <Box sx={{
                            p: 1,
                            width: 145,
                            height: 250,
                            backgroundColor: '#000000',
                            borderTopRightRadius: 6,
                            borderTopLeftRadius: 6,
                            borderBottomRightRadius: 46
                        }}>
                            <Image src={activityTwo} alt={"Pic"} width={130} height={200} style={{
                                borderTopLeftRadius: 5,
                                borderTopRightRadius: 5,
                                borderBottomLeftRadius: 5,
                                borderBottomRightRadius: 46
                            }}/>
                            <Typography variant={'caption'} className={switzerFont.className}
                                        sx={{fontWeight: 600, ml: 3, color: 'white'}}>Fun Activities</Typography>
                        </Box>
                        <Box sx={{
                            width: 145,
                            height: 180,
                            p: 1,
                            backgroundColor: colors.brown,
                            borderTopRightRadius: 6,
                            borderTopLeftRadius: 50,
                            borderBottomLeftRadius: 6
                        }}>
                            <Image src={activityThree} alt={"Pic"} width={130} height={130} style={{
                                borderTopRightRadius: 5,
                                borderTopLeftRadius: 46,
                                borderBottomRightRadius: 46
                            }}/>
                            <Typography variant={'caption'} className={switzerFont.className}
                                        sx={{fontWeight: 600, ml: 2, color: 'white'}}>Beach Walking</Typography>
                        </Box>
                    </Stack>
                    <OurPartnership/>
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                    <Image src={activityMain}
                           alt={'Pic'}
                           priority
                           style={{
                               width: '100%',
                               height: '100%',
                               objectFit: 'cover'
                           }}/>
                </Grid>
            </Grid>
        </>
    )
}
export default ActivityList;