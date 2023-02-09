// Next.js
import Image from "next/image";
// Material-ui
import {Box, Grid, Stack, Typography} from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// Project imports
import profileImage from '../../../public/profile.png'
import TitleSeparator from "@/components/TitleSeparator";

//=========================|| Reviews Section ||=========================

const ReviewsSection = () => {
    return (
        <Box>
            <TitleSeparator separatorTitle={'Your Feedback'} title={'Reviews'}/>
            <Stack direction={'row'} sx={{width: '100%', height: 300}} alignItems={'center'} justifyContent={'center'}>
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
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} lg={4}>
                        <Stack direction={'column'} alignItems={'center'} p={2}>
                            <Image src={profileImage} alt={'Profile'} width={50} height={50}
                                   style={{borderRadius: 50}}/>
                            <Typography variant={'caption'} pt={1} sx={{textAlign: 'justify'}}>Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Accusantium asperiores
                                corporis distinctio iste laudantium minus nulla quo, repudiandae soluta suscipit!
                                Accusantium deleniti eligendi enim ex fugiat hic nihil nostrum officia!</Typography>
                            <Typography variant={'caption'} pt={1}><b>John Doe</b>, Publisher</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <Stack direction={'column'} alignItems={'center'} p={2}>
                            <Image src={profileImage} alt={'Profile'} width={50} height={50}
                                   style={{borderRadius: 50}}/>
                            <Typography variant={'caption'} pt={1} sx={{textAlign: 'justify'}}>Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Accusantium asperiores
                                corporis distinctio iste laudantium minus nulla quo, repudiandae soluta suscipit!
                                Accusantium deleniti eligendi enim ex fugiat hic nihil nostrum officia!</Typography>
                            <Typography variant={'caption'} pt={1}><b>John Doe</b>, Publisher</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={4}>
                        <Stack direction={'column'} alignItems={'center'} p={2}>
                            <Image src={profileImage} alt={'Profile'} width={50} height={50}
                                   style={{borderRadius: 50}}/>
                            <Typography variant={'caption'} pt={1} sx={{textAlign: 'justify'}}>Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Accusantium asperiores
                                corporis distinctio iste laudantium minus nulla quo, repudiandae soluta suscipit!
                                Accusantium deleniti eligendi enim ex fugiat hic nihil nostrum officia!</Typography>
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