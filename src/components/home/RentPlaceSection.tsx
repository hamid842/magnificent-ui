import {Box, Button, Grid, Stack, Typography} from "@mui/material";
import Image from "next/image";
import rentImage from '../../../public/rent.png'
import {useRouter} from "next/router";

const RentPlaceSection = () => {
    const router = useRouter();
    return (
        <Box pt={10} px={8}>
            <Stack alignItems={'center'}>
                <Box sx={{width: '1px', height: 40, backgroundColor: "#A47C30"}}/>
            </Stack>
            <Typography align={'center'} variant={'h5'} py={2}>Rent your place </Typography>
            <Typography align={'center'} variant={'subtitle2'} pt={2} color={'#A47C30'}
                        sx={{letterSpacing: 5, fontSize: 10}}>LOREM IPSUM</Typography>
            <Grid container spacing={5} mt={1}>
                <Grid item xs={12} sm={6} lg={6}>
                    <Image src={rentImage} alt={"Pic"} width={500} height={400} style={{background: "transparent"}}/>
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                    <Typography sx={{textAlign: 'justify'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Ad, architecto delectus
                        ducimus esse eveniet expedita facere harum illum magnam magni maiores nihil nulla quis quod,
                        reprehenderit repudiandae sequi veniam voluptas! Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Excepturi incidunt ipsum neque quidem? Amet aperiam aut commodi, consequuntur
                        ducimus ex hic inventore iure laborum molestiae nemo nesciunt quisquam totam,
                        voluptates! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci blanditiis
                        consectetur dignissimos dolor est explicabo illo illum nam neque officia officiis omnis
                        perspiciatis ratione reprehenderit, tempora unde. Ad, quod?</Typography>
                    <Button size={'small'} variant={'contained'}
                            sx={{
                                mt: 5,
                                backgroundColor: "#A47C30",
                                width: 100,
                                borderRadius: 25,
                                textTransform: 'none'
                            }}
                            onClick={() => router.push('/rent-your-place')}>See
                        more</Button>
                </Grid>
            </Grid>
        </Box>

    )
}

export default RentPlaceSection;