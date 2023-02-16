// Next.js
import Image from "next/image";
// Material-ui
import {Box, Grid, Stack, Typography} from "@mui/material";
// Project imports
import activityOne from '../../../public/activity-1.png'
import activityTwo from '../../../public/activity-2.png'
import activityThree from '../../../public/activity-3.png'
import OurPartnership from "@/components/global/OurPartnership";
import TitleSeparator from "@/components/global/TitleSeparator";
import colors from '../../assets/colors'
import SwitzerText from "@/components/css-texts/SwitzerText";

//======================|| Activities Section ||========================

const ActivityList = () => {

    const imageTitleStyle = {fontWeight: 600, color: 'white'}
    const headerTextStyle = {fontStyle: 'italic'}

    return (
        <>
            <TitleSeparator separatorTitle={'Spend your'} title={'Vacation with our activities'}/>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} lg={6}>
                    <SwitzerText variant={'body2'} sx={headerTextStyle}
                                 text={'The traveller where you can select your'}/>
                    <SwitzerText variant={'body2'} sx={headerTextStyle} text={'desired activity destinations of your'}/>
                    <SwitzerText variant={'body2'} sx={headerTextStyle} text={'choice for vacations.'}/>
                    <Typography variant={'body2'} mt={3} sx={{fontWeight: 600}}>ACTIVITY LIST</Typography>
                    <Grid container spacing={1} pt={2}>
                        <Grid item xs={12} sm={4} lg={4}>
                            <Box sx={{
                                width: '100%',
                                height: 180,
                                p: 1,
                                backgroundColor: colors.yellow,
                                borderTopLeftRadius: 6,
                                borderTopRightRadius: 50,
                                borderBottomRightRadius: 6,
                                boxShadow: 'rgb(0 0 0 / 25%) 0 14px 45px, rgb(0 0 0 / 22%) 0 10px 18px',
                            }}>
                                <Image src={activityOne} alt={"Pic"} style={{
                                    width: '100%',
                                    height: 130,
                                    borderTopLeftRadius: 5,
                                    borderTopRightRadius: 46,
                                    borderBottomLeftRadius: 46
                                }}/>
                                <Stack alignItems={'center'} pt={1}>
                                    <SwitzerText variant={'caption'} sx={imageTitleStyle} text={'Flying'}/>
                                </Stack>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4} lg={4}>
                            <Box sx={{
                                p: 1,
                                width: '100%',
                                height: 250,
                                backgroundColor: '#000000',
                                borderTopRightRadius: 6,
                                borderTopLeftRadius: 6,
                                borderBottomRightRadius: 46,
                                boxShadow: 'rgb(0 0 0 / 25%) 0 14px 45px, rgb(0 0 0 / 22%) 0 10px 18px',
                            }}>
                                <Image src={activityTwo} alt={"Pic"} style={{
                                    width: '100%',
                                    height: 200,
                                    borderTopLeftRadius: 5,
                                    borderTopRightRadius: 5,
                                    borderBottomLeftRadius: 5,
                                    borderBottomRightRadius: 46
                                }}/>
                                <Stack alignItems={'center'} pt={1}>
                                    <SwitzerText variant={'caption'} sx={imageTitleStyle} text={'Fun Activities'}/>
                                </Stack>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4} lg={4}>
                            <Box sx={{
                                width: '100%',
                                height: 180,
                                p: 1,
                                backgroundColor: colors.brown,
                                borderTopRightRadius: 6,
                                borderTopLeftRadius: 50,
                                borderBottomLeftRadius: 6,
                                boxShadow: 'rgb(0 0 0 / 25%) 0 14px 45px, rgb(0 0 0 / 22%) 0 10px 18px',
                            }}>
                                <Image src={activityThree} alt={"Pic"} style={{
                                    width: '100%',
                                    height: 130,
                                    borderTopRightRadius: 5,
                                    borderTopLeftRadius: 46,
                                    borderBottomRightRadius: 46
                                }}/>
                                <Stack alignItems={'center'} pt={1}>
                                    <SwitzerText variant={'caption'} sx={imageTitleStyle} text={'Beach Walking'}/>
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                    <OurPartnership/>
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                    <Box sx={{
                        p: 2,
                        width: '100%',
                        height: '80%',
                        backgroundColor: colors.elementsBg,
                        borderBottomRightRadius: 50,
                        mt: 5,
                        boxShadow: 'rgb(0 0 0 / 25%) 0 14px 45px, rgb(0 0 0 / 22%) 0 10px 18px',
                    }}>
                        <Box sx={{
                            width: '100%',
                            height: '100%',
                            borderBottomRightRadius: 50,
                            border: `1px solid ${colors.mainColor}`
                        }}>
                            <TitleSeparator separatorTitle={'Welcome to'} title={'Magnificent'} sx={{color: 'white'}}/>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
export default ActivityList;