import {Box, Typography} from "@mui/material";
import {switzerFont} from "@/assets/fonts";
import dictionaries from "../../../dictionaries/en.json";
import TitleSeparator from "@/components/global/TitleSeparator";

const AboutFirstSection = () => {
    return (
        <>
            <TitleSeparator
                separatorTitle={"Your Trusted Property Manager"}
                title={"We Make Property Ownership Simple"}
                pt={20}
            />
            <Box className={switzerFont.className} textAlign={'justify'}>
                <Typography>We are the one-stop solution for property owners and
                    people finding <strong>luxury holiday homes Dubai.</strong> Our comprehensive <strong>property
                        management
                        services</strong> include everything you need to successfully market your property and
                    maximize the value of
                    your real estate investments.</Typography>
                <Typography my={1}>{dictionaries.aboutUs.p1}</Typography>
                <Typography>{dictionaries.aboutUs.p2}</Typography>
            </Box>
        </>
    )
}

export default AboutFirstSection;