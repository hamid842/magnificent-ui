// Next.js
import Image from "next/image";
// Material-ui
import {Box, Grid, Stack, Typography} from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// Project imports
import profileImage from '../../../public/profile.png';
import TitleSeparator from "@/components/TitleSeparator";
import dictionaries from '../../../dictionaries/en.json';
import SwitzerText from "@/components/css-texts/SwitzerText";

//=========================|| Reviews Section ||=========================

const ReviewsSection = () => {
    return (
        <Box>
            <TitleSeparator separatorTitle={'Your Feedback'} title={'Reviews'} />
            <Stack direction={'row'} sx={{width: '100%', height: 250,pb:10}} alignItems={'center'}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 30,
                    height: 30,
                    borderRadius: 1,
                    backgroundColor: "#A47C30",
                    border: 'none'
                }}>
                    <KeyboardArrowLeftIcon sx={{color: 'white'}}/>
                </Box>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Stack direction={'column'} alignItems={'center'} p={2}>
                            <Image src={profileImage} alt={'Profile'} width={50} height={50}
                                   style={{borderRadius: 50}}/>
                            <SwitzerText variant={'caption'} pt={1} sx={{textAlign: 'justify'}} text={dictionaries.homePage.reviews} />
                            <Typography variant={'caption'} pt={1}><b>John Doe</b>, Publisher</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Stack direction={'column'} alignItems={'center'} p={2}>
                            <Image src={profileImage} alt={'Profile'} width={50} height={50}
                                   style={{borderRadius: 50}}/>
                            <SwitzerText variant={'caption'} pt={1} sx={{textAlign: 'justify'}} text={dictionaries.homePage.reviews} />
                            <Typography variant={'caption'} pt={1}><b>John Doe</b>, Publisher</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <Stack direction={'column'} alignItems={'center'} p={2}>
                            <Image src={profileImage} alt={'Profile'} width={50} height={50}
                                   style={{borderRadius: 50}}/>
                            <SwitzerText variant={'caption'} pt={1} sx={{textAlign: 'justify'}} text={dictionaries.homePage.reviews} />
                            <Typography variant={'caption'} pt={1}><b>John Doe</b>, Publisher</Typography>
                        </Stack>
                    </Grid>
                </Grid>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 30,
                    height: 30,
                    borderRadius: 1,
                    backgroundColor: "#A47C30",
                    border: 'none'
                }}>
                    <KeyboardArrowRightIcon sx={{color: 'white'}}/>
                </Box>
            </Stack>
        </Box>
    )
}
export default ReviewsSection;