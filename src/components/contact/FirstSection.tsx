// Next.js
import Image from "next/image";
// Material ui
import {Box, Grid} from "@mui/material";
// Project imports
import EuclidText from "@/components/css-texts/EuclidText";
import colors from "@/assets/colors";
import homePagePicture from "../../../public/home-page-pic.png";
import SwitzerText from "@/components/css-texts/SwitzerText";
import dictionaries from '../../../dictionaries/en.json';

//======================|| ContactUs Page First Section ||========================

const FirstSection = () => {
    return (
        <Grid container spacing={2} mt={20}>
            <Grid item xs={12} sm={6} md={6} lg={6}>
                <EuclidText variant={'h4'} sx={{fontWeight: 700}} text={'We are here to assist !'}/>
                <SwitzerText sx={{textAlign: 'justify', mt: 1}} text={dictionaries.contact.assistFirstPar}/>
                <SwitzerText sx={{textAlign: 'justify', mt: 1}} text={dictionaries.contact.assistSecondPar}/>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
                <Box
                    sx={{
                        p: 2,
                        width: "100%",
                        height: "100%",
                        backgroundColor: colors.mainColor,
                        borderTopLeftRadius: 50,
                        boxShadow:
                            "rgb(0 0 0 / 25%) 0 14px 45px, rgb(0 0 0 / 22%) 0 10px 18px",
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            height: "100%",
                            borderTopLeftRadius: 50,
                        }}
                    >
                        <Image
                            src={homePagePicture}
                            alt={"Pic"}
                            width={400}
                            style={{
                                background: "transparent",
                                borderTopLeftRadius: 50,
                                borderBottomRightRadius: 50,
                                width: "100%",
                                height: "100%",
                            }}
                        />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}
export default FirstSection;