import TitleSeparator from "@/components/global/TitleSeparator";
import EuclidText from "@/components/css-texts/EuclidText";
import dictionaries from '../../../dictionaries/en.json';
import SwitzerText from "@/components/css-texts/SwitzerText";
import {Box} from "@mui/material";

const AboutFifthSection = ()=>{
    const titlesStyles = {
        p:'10px 0 10px 30px',
        fontWeight:600
    }
    return (
        <>
            <TitleSeparator
                separatorTitle={"Reasons to Invest"}
                title={"in Our Property Management Services"}
            />
            <Box textAlign={'justify'}>
            <SwitzerText text={dictionaries.aboutUs.section5.content}/>
                <EuclidText sx={titlesStyles} text={dictionaries.aboutUs.section5.title1} />
                <SwitzerText text={dictionaries.aboutUs.section5.text1}/>
                <EuclidText sx={titlesStyles} text={dictionaries.aboutUs.section5.title2} />
                <SwitzerText text={dictionaries.aboutUs.section5.text2}/>
                <EuclidText sx={titlesStyles} text={dictionaries.aboutUs.section5.title3} />
                <SwitzerText text={dictionaries.aboutUs.section5.text3}/>
            </Box>
        </>
    )
}
export default AboutFifthSection;