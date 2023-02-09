// Next.js
import Image from "next/image";
import {useRouter} from "next/router";
// Material-ui
import {Box, Button, Grid, Typography} from "@mui/material";
// Project imports
import rentImage from '../../../public/rent.png'
import TitleSeparator from "@/components/TitleSeparator";

//======================|| Rent Your Place Section ||==========================

const RentPlaceSection = () => {
    const router = useRouter();
    return (
        <Box>
           <TitleSeparator separatorTitle={'With us'} title={'Rent Your Place'}/>
            <Grid container spacing={5}>
                <Grid item xs={12} sm={6} lg={6}>
                    <Image src={rentImage} alt={"Pic"} width={450} height={400} style={{background: "transparent"}}/>
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