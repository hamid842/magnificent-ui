import TitleSeparator from "@/components/global/TitleSeparator";
import SwitzerText from "@/components/css-texts/SwitzerText";
import dictionaries from '../../../dictionaries/en.json';
import {Typography} from "@mui/material";
import {switzerFont} from "@/assets/fonts";

const AboutLastSection = () => {
    return (
        <>
            <TitleSeparator
                separatorTitle={"Magnificent Property"}
                title={"Management - A Trustworthy Platform"}
            />
            <SwitzerText textAlign={'justify'} text={dictionaries.aboutUs.lastSection.text}/>
            <Typography className={switzerFont.className}>Are you also seeking the <strong>best property management
                companies in Dubai?</strong> Get in touch with us whether you want to rent or manage your property in
                Dubai.</Typography>
        </>
    )
}
export default AboutLastSection;