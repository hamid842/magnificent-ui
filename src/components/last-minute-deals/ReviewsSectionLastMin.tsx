import {Grid, Paper, Stack, Typography} from "@mui/material";
import Image from "next/image";
import profileImage from "../../../public/profile.png";
import SwitzerText from "@/components/css-texts/SwitzerText";
import dictionaries from "../../../dictionaries/en.json";

const ReviewsSectionLastMin = () => {
    return (
        <Paper elevation={3} sx={{p: 2, my: 2, borderRadius: 2}}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Paper elevation={5} sx={{borderRadius: 3}}>
                        <Stack direction={'column'} alignItems={'center'} p={2}>
                            <Image src={profileImage} alt={'Profile'} width={50} height={50}
                                   style={{borderRadius: 50}}/>
                            <SwitzerText variant={'caption'} pt={1} sx={{textAlign: 'justify'}}
                                         text={dictionaries.lastMin.reviews}/>
                            <Typography variant={'caption'} pt={1}><b>John Doe</b>, Publisher</Typography>
                        </Stack>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Paper elevation={5} sx={{borderRadius: 3}}>
                        <Stack direction={'column'} alignItems={'center'} p={2}>
                            <Image src={profileImage} alt={'Profile'} width={50} height={50}
                                   style={{borderRadius: 50}}/>
                            <SwitzerText variant={'caption'} pt={1} sx={{textAlign: 'justify'}}
                                         text={dictionaries.lastMin.reviews}/>
                            <Typography variant={'caption'} pt={1}><b>John Doe</b>, Publisher</Typography>
                        </Stack>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Paper elevation={5} sx={{borderRadius: 3}}>
                        <Stack direction={'column'} alignItems={'center'} p={2}>
                            <Image src={profileImage} alt={'Profile'} width={50} height={50}
                                   style={{borderRadius: 50}}/>
                            <SwitzerText variant={'caption'} pt={1} sx={{textAlign: 'justify'}}
                                         text={dictionaries.lastMin.reviews}/>
                            <Typography variant={'caption'} pt={1}><b>John Doe</b>, Publisher</Typography>
                        </Stack>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Paper elevation={5} sx={{borderRadius: 3}}>
                        <Stack direction={'column'} alignItems={'center'} p={2}>
                            <Image src={profileImage} alt={'Profile'} width={50} height={50}
                                   style={{borderRadius: 50}}/>
                            <SwitzerText variant={'caption'} pt={1} sx={{textAlign: 'justify'}}
                                         text={dictionaries.lastMin.reviews}/>
                            <Typography variant={'caption'} pt={1}><b>John Doe</b>, Publisher</Typography>
                        </Stack>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Paper elevation={5} sx={{borderRadius: 3}}>
                        <Stack direction={'column'} alignItems={'center'} p={2}>
                            <Image src={profileImage} alt={'Profile'} width={50} height={50}
                                   style={{borderRadius: 50}}/>
                            <SwitzerText variant={'caption'} pt={1} sx={{textAlign: 'justify'}}
                                         text={dictionaries.lastMin.reviews}/>
                            <Typography variant={'caption'} pt={1}><b>John Doe</b>, Publisher</Typography>
                        </Stack>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Paper elevation={5} sx={{borderRadius: 3}}>
                        <Stack direction={'column'} alignItems={'center'} p={2}>
                            <Image src={profileImage} alt={'Profile'} width={50} height={50}
                                   style={{borderRadius: 50}}/>
                            <SwitzerText variant={'caption'} pt={1} sx={{textAlign: 'justify'}}
                                         text={dictionaries.lastMin.reviews}/>
                            <Typography variant={'caption'} pt={1}><b>John Doe</b>, Publisher</Typography>
                        </Stack>
                    </Paper>
                </Grid>
            </Grid>
        </Paper>
    )
}
export default ReviewsSectionLastMin;