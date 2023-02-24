// Next.js
import Image from "next/image";
import {useRouter} from "next/router";
// Material-ui
import {Box, Grid, Stack} from "@mui/material";
// Project imports
import rentImage from '../../../public/8/8-2-1.jpg'
import TitleSeparator from "@/components/global/TitleSeparator";
import dictionaries from '../../../dictionaries/en.json';
import AppButton from "@/components/global/AppButton";
import SwitzerText from "@/components/css-texts/SwitzerText";
import colors from "@/assets/colors";

//======================|| Rent Your Place Section ||==========================

const RentPlaceSection = () => {
    const router = useRouter();
    return (
        <Box>
            <TitleSeparator separatorTitle={'With us'} title={'Calculate your income'}/>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} lg={6}>
                    <Box sx={{
                        p: 2,
                        width: '100%',
                        height: '100%',
                        backgroundColor: colors.mainColor,
                        borderTopLeftRadius: 50,
                        boxShadow: 'rgb(0 0 0 / 25%) 0 14px 45px, rgb(0 0 0 / 22%) 0 10px 18px',
                    }}>
                        <Box sx={{
                            width: '100%',
                            height: '100%',
                            borderTopLeftRadius: 50,
                        }}>
                            <Image src={rentImage} alt={"Pic"} width={400} height={310}
                                   style={{
                                       background: "transparent",
                                       borderTopLeftRadius: 50,
                                       borderBottomRightRadius: 50,
                                       width: '100%'
                                   }}/>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                    <SwitzerText sx={{textAlign: 'justify', mb: 2}}
                                 text={`${dictionaries.homePage.rentExplanation}`}/>
                    <Stack alignItems={'center'}>

                        <AppButton label={'See more'}
                                   onClick={() => router.push('/our-homes')}/>
                    </Stack>
                </Grid>
            </Grid>
        </Box>

    )
}

export default RentPlaceSection;