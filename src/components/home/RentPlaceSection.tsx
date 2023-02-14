// Next.js
import Image from "next/image";
import {useRouter} from "next/router";
// Material-ui
import {Box, Grid} from "@mui/material";
// Project imports
import rentImage from '../../../public/8/8-2-1-768x568.jpg'
import TitleSeparator from "@/components/global/TitleSeparator";
import dictionaries from '../../../dictionaries/en.json';
import AppButton from "@/components/global/AppButton";
import SwitzerText from "@/components/css-texts/SwitzerText";

//======================|| Rent Your Place Section ||==========================

const RentPlaceSection = () => {
    const router = useRouter();
    return (
        <Box>
            <TitleSeparator separatorTitle={'With us'} title={'Rent Your Place'}/>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} lg={6}>
                    <Image src={rentImage} alt={"Pic"} width={400} height={310} style={{background: "transparent"}}/>
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                    <SwitzerText sx={{textAlign: 'justify'}}
                                 text={`${dictionaries.homePage.rentExplanation}`}/>
                    <AppButton label={'See more'} sx={{width: 120, mt: 2}}
                               onClick={() => router.push('/rent-your-place')}/>
                </Grid>
            </Grid>
        </Box>

    )
}

export default RentPlaceSection;