// Next.js
import Link from "next/link";
import Image from "next/image";
// Material-ui
import {Box, Divider, Grid, Stack} from "@mui/material";

// Project imports
import logo from "../../../public/main-logo.png";
import grayLogo from "../../../public/png1.png"
import AppContainer from "@/components/global/AppContainer";
import colors from "@/assets/colors";
import PoppinsText from "@/components/css-texts/PoppinsText";
import SwitzerText from "@/components/css-texts/SwitzerText";
import dictionaries from '../../../dictionaries/en.json'
import EuclidText from "@/components/css-texts/EuclidText";
import {switzerFont} from "@/assets/fonts";
import AppIcon from "@/components/global/AppIcon";
import whatsappIcon from '../../../public/whatsapp.png';
import facebookIcon from '../../../public/facebook.png';
import instagramIcon from '../../../public/instagram.png';
import linkedInIcon from '../../../public/linkedin.png';

//===========================|| Footer ||==============================

const AppFooter = () => {

    const footerTitleStyle = {
        fontWeight: 600,
        fontSize: 16,
        color: 'white'
    }

    const linkStyles = {
        textDecoration: 'none',
        color: 'white',
        paddingTop: 5,
        fontSize: 12,
        paddingLeft: 5
    }

    const FOOTER_ICON_WIDTH = 25;
    const FOOTER_ICON_HEIGHT = 25;
    return (
        <Box sx={{backgroundColor: colors.footerBgColor, position: 'relative', overflow: 'hidden'}} mt={10} pt={4}
             pb={1}>
            <Box>
                <Image src={grayLogo} alt={"Logo"} width={250} height={150}
                       style={{position: 'absolute', bottom: -20, right: -30, zIndex: 1}}/>
            </Box>
            <Box sx={{position: 'relative', zIndex: 1000}} pt={5}>
                <AppContainer>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Image
                                src={logo}
                                alt={'Logo'}
                                width={160}
                                height={80}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} lg={3}>
                            <Stack direction={'column'}>
                                <SwitzerText
                                    variant={'caption'}
                                    sx={{py: 0.5, textAlign: 'justify', color: 'white', fontSize: 12}}
                                    text={dictionaries.footer.about}
                                />
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} lg={3}>
                            <EuclidText ml={{lg: 6}} sx={footerTitleStyle} text={'Quick Links'}/>
                            <Box my={2} ml={{lg: 6}}>
                                <Stack className={switzerFont.className}>
                                    <Link href={'/about'} style={linkStyles}>About
                                        Us</Link>
                                    <Link href={'/blogs'}
                                          style={linkStyles}>Blog</Link>
                                    <Link href={'/our-homes'}
                                          style={linkStyles}>Last minute
                                        deals</Link>
                                    <Link href={'/contact-us'}
                                          style={linkStyles}>Contact
                                        Us</Link>
                                </Stack>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} lg={3}>
                            <EuclidText ml={{lg: 2}} sx={footerTitleStyle} text={'Information'}/>
                            <Box my={2} ml={{lg: 2}}>
                                <Stack className={switzerFont.className}>
                                    <Link href={'/about'} style={linkStyles}>Terms
                                        and conditions</Link>
                                    <Link href={'/about'} style={linkStyles}>Privacy
                                        policy</Link>
                                    <Link href={'/about'} style={linkStyles}>Refund
                                        policy</Link>
                                    <Link href={'/about'}
                                          style={linkStyles}>Faq</Link>
                                </Stack>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} lg={3}>
                            <EuclidText sx={footerTitleStyle} text={'Contact Details'}/>
                            <Box my={2}>
                                <Stack direction={'row'} alignItems={'center'}>
                                    <AppIcon name={'location_city'} color={'#fff'}/>
                                    <SwitzerText sx={{color: 'white', fontSize: 10, pl: 1}}
                                                 text={'2204 The Oberoi Centre, Business Bay, Dubai, UAE '}/>
                                </Stack>
                                <Stack direction={'row'} alignItems={'center'} py={1}>
                                    <AppIcon name={'call'} color={'#fff'}/>
                                    <Link href={'tel:045547294'}
                                          style={linkStyles}>(04) 554
                                        7294</Link>
                                </Stack>
                                <Stack direction={'row'} alignItems={'center'} className={switzerFont.className}>
                                    <AppIcon name={'mail'} color={'#fff'}/>
                                    <Link href={`mailto:${process.env.NEXT_PUBLIC_MAIL_ADDRESS}`}
                                          style={linkStyles}>info@magnificent.ae</Link>
                                </Stack>
                                <Stack direction={'row'} pt={2}>
                                    <Image src={facebookIcon} alt={'Facebook'} width={FOOTER_ICON_WIDTH}
                                           height={FOOTER_ICON_HEIGHT}
                                           style={{borderRadius: 5, cursor: 'pointer', marginRight: 8}}
                                           onClick={() => window.open(process.env.NEXT_PUBLIC_FACEBOOK_LINK)}/>
                                    <Image src={instagramIcon} alt={'Instagram'} width={FOOTER_ICON_WIDTH}
                                           height={FOOTER_ICON_HEIGHT}
                                           style={{borderRadius: 5, cursor: 'pointer', marginRight: 8}}
                                           onClick={() => window.open(process.env.NEXT_PUBLIC_INSTAGRAM_LINK)}/>
                                    <Image src={linkedInIcon} alt={'Linkedin'} width={FOOTER_ICON_WIDTH}
                                           height={FOOTER_ICON_HEIGHT}
                                           style={{borderRadius: 5, cursor: 'pointer', marginRight: 8}}
                                           onClick={() => window.open(process.env.NEXT_PUBLIC_LINKEDIN_LINK)}/>
                                    <Image src={whatsappIcon} alt={'Whatsapp'} width={FOOTER_ICON_WIDTH}
                                           height={FOOTER_ICON_HEIGHT}
                                           style={{borderRadius: 5, cursor: 'pointer', marginRight: 8}}
                                           onClick={() => window.open(process.env.NEXT_PUBLIC_WHATSAPP_LINK)}/>
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                    <Divider variant={'middle'} sx={{height: 1, width: '100%', backgroundColor: colors.mainColor}}/>
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'center'}>
                        <PoppinsText variant={'caption'} py={1} color={'white'}
                                     text={`Copyright ${new Date().getFullYear()}`}/>
                        <PoppinsText variant={'caption'} py={1} color={'#B6923E !important'}
                                     text={', Magnificent Property Management.'}/>
                    </Stack>
                </AppContainer>
            </Box>
        </Box>
    )
}
export default AppFooter;