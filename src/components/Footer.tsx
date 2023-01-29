import {Box, Divider, Grid, Stack, Typography} from "@mui/material";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import {
    EmailOutlined,
    Facebook,
    Instagram,
    LinkedIn,
    LocalPhoneOutlined,
    LocationCityOutlined,
    WhatsApp
} from "@mui/icons-material";

const Footer = () => {
    return (
        <Box sx={{backgroundColor: "#ecebe9", width: '100%', px: 15, pt: 5}}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} lg={3}>
                    <Stack direction={'column'}>
                        <Image
                            src={logo}
                            alt={'Logo'}
                            width={150}
                            height={80}
                        />
                        <Typography variant={'caption'} sx={{py: 2, textAlign: 'justify'}}>Magnificent Holiday Home
                            Rental is a trusted
                            marketplace where guests can rent fully
                            equipped luxury holiday homes in the prime locations of Dubai, with easy access to local
                            amenities and the added benefit of space and freedom to live a home-from-home
                            experience.</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <Typography sx={{fontWeight: 600, fontSize: 16}}>Quick Links</Typography>
                    <Box my={2}>
                        <Stack>
                            <Link href={'/about'} style={{textDecoration: 'none', color: 'black', paddingTop: 5}}>About
                                Us</Link>
                            <Link href={'/blog'}
                                  style={{textDecoration: 'none', color: 'black', paddingTop: 5}}>Blog</Link>
                            <Link href={'/last-minute-deals'}
                                  style={{textDecoration: 'none', color: 'black', paddingTop: 5}}>Last minute
                                deals</Link>
                            <Link href={'/contacts'} style={{textDecoration: 'none', color: 'black', paddingTop: 5}}>Contact
                                Us</Link>
                        </Stack>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <Typography sx={{fontWeight: 600, fontSize: 16}}>Information</Typography>
                    <Box my={2}>
                        <Stack>
                            <Link href={'/about'} style={{textDecoration: 'none', color: 'black', paddingTop: 5}}>Terms
                                and conditions</Link>
                            <Link href={'/about'} style={{textDecoration: 'none', color: 'black', paddingTop: 5}}>Privacy
                                policy</Link>
                            <Link href={'/about'} style={{textDecoration: 'none', color: 'black', paddingTop: 5}}>Refund
                                policy</Link>
                            <Link href={'/about'}
                                  style={{textDecoration: 'none', color: 'black', paddingTop: 5}}>Faq</Link>
                        </Stack>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <Typography sx={{fontWeight: 600, fontSize: 16}}>Contact Details</Typography>
                    <Box my={2}>
                        <Stack direction={'row'} alignItems={'center'}>
                            <LocationCityOutlined sx={{mr: 1}}/>
                            <Typography>Business Bay, OPUS by Omniyat, Dubai, UAE</Typography>
                        </Stack>
                        <Stack direction={'row'} alignItems={'center'} py={1}>
                            <LocalPhoneOutlined sx={{mr: 1}}/>
                            <Link href={'tel:045547294'}
                                  style={{textDecoration: 'none', color: 'black', paddingTop: 5}}>(04) 554 7294</Link>
                        </Stack>
                        <Stack direction={'row'} alignItems={'center'}>
                            <EmailOutlined sx={{mr: 1}}/>
                            <Link href={'mailto:info@magnificent.ae'} style={{
                                textDecoration: 'none',
                                color: 'black',
                                paddingTop: 5
                            }}>info@magnificent.ae</Link>
                        </Stack>
                        <Stack direction={'row'} py={1}>
                            <Facebook fontSize={'large'} sx={{mr: 2}}/>
                            <LinkedIn fontSize={'large'} sx={{mr: 2}}/>
                            <Instagram fontSize={'large'} sx={{mr: 2}}/>
                            <WhatsApp fontSize={'large'}/>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
            <Divider variant={'middle'} sx={{height: 1, width: '100%', backgroundColor: "#A47C30"}}/>
            <Stack direction={'row'} my={2} justifyContent={'center'}>
                <Typography variant={'body2'}>Copyright {new Date().getFullYear()}, </Typography>
                <Typography variant={'body2'} sx={{color: "#A47C30"}}> Magnificent Property Management.</Typography>
            </Stack>
        </Box>
    )
}
export default Footer;