// Next.js
import Link from "next/link";
import Image from "next/image";
// Material-ui
import {Box, Divider, Grid, Stack} from "@mui/material";
import {
    EmailOutlined,
    Facebook,
    Instagram,
    LinkedIn,
    LocalPhoneOutlined,
    LocationCityOutlined,
    WhatsApp
} from "@mui/icons-material";
// Project imports
import logo from "../../public/logo.png";
import AppContainer from "@/components/AppContainer";
import colors from "@/assets/colors";
import PoppinsText from "@/components/css-texts/PoppinsText";
import SwitzerText from "@/components/css-texts/SwitzerText";
import dictionaries from '../../dictionaries/en.json'
import EuclidText from "@/components/css-texts/EuclidText";
import {switzerFont} from "@/assets/fonts";

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
        fontSize: 12
    }
    return (
        <Box sx={{backgroundColor: "#000000"}}>
            <AppContainer>
                <Grid container spacing={4} alignItems={'center'}>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <Stack direction={'column'}>
                            <Image
                                src={logo}
                                alt={'Logo'}
                                width={150}
                                height={80}
                            />
                            <SwitzerText
                                variant={'caption'}
                                sx={{py: 2, textAlign: 'justify', color: 'white', fontSize: 10}}
                                text={dictionaries.footer.about}
                            />
                        </Stack>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <EuclidText sx={footerTitleStyle} text={'Quick Links'}/>
                        <Box my={2}>
                            <Stack className={switzerFont.className}>
                                <Link href={'/about'} style={linkStyles}>About
                                    Us</Link>
                                <Link href={'/blog'}
                                      style={linkStyles}>Blog</Link>
                                <Link href={'/last-minute-deals'}
                                      style={linkStyles}>Last minute
                                    deals</Link>
                                <Link href={'/contacts'}
                                      style={linkStyles}>Contact
                                    Us</Link>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                        <EuclidText sx={footerTitleStyle} text={'Information'}/>
                        <Box my={2}>
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
                                <LocationCityOutlined sx={{mr: 1, color: 'white'}}/>
                                <SwitzerText sx={{color: 'white', fontSize: 10}}
                                             text={'Business Bay, OPUS by Omniyat, Dubai, UAE'}/>
                            </Stack>
                            <Stack direction={'row'} alignItems={'center'} py={1}>
                                <LocalPhoneOutlined sx={{mr: 1, color: 'white'}}/>
                                <Link href={'tel:045547294'}
                                      style={linkStyles}>(04) 554
                                    7294</Link>
                            </Stack>
                            <Stack direction={'row'} alignItems={'center'} className={switzerFont.className}>
                                <EmailOutlined sx={{mr: 1, color: 'white'}}/>
                                <Link href={`mailto:${process.env.NEXT_PUBLIC_MAIL_ADDRESS}`}
                                      style={linkStyles}>info@magnificent.ae</Link>
                            </Stack>
                            <Stack direction={'row'} py={1}>
                                <Facebook fontSize={'large'} sx={{mr: 2, color: '#395590', cursor: 'pointer'}}
                                          onClick={() => window.open(process.env.NEXT_PUBLIC_FACEBOOK_LINK)}/>
                                <Instagram fontSize={'large'} sx={{mr: 2, color: '#F20299', cursor: 'pointer'}}
                                           onClick={() => window.open(process.env.NEXT_PUBLIC_INSTAGRAM_LINK)}/>
                                <WhatsApp fontSize={'large'} sx={{mr: 2, color: '#41BA4F', cursor: 'pointer'}}
                                          onClick={() => window.open(process.env.NEXT_PUBLIC_WHATSAPP_LINK)}/>
                                <LinkedIn fontSize={'large'} sx={{color: '#0B5FBB', cursor: 'pointer'}}
                                          onClick={() => window.open(process.env.NEXT_PUBLIC_LINKEDIN_LINK)}/>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
                <Divider variant={'middle'} sx={{height: 1, width: '100%', backgroundColor: colors.mainColor}}/>
                <Stack direction={'row'} justifyContent={'center'}>
                    <PoppinsText variant={'caption'} py={1} color={'white'}
                                 text={`Copyright ${new Date().getFullYear()}`}/>
                    <PoppinsText variant={'caption'} py={1} sx={{color: colors.mainColor}}
                                 text={', Magnificent Property Management.'}/>
                </Stack>
            </AppContainer>
        </Box>
    )
}
export default AppFooter;