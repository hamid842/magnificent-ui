import Image from "next/image";
import {Box, Grid, Stack, Typography} from "@mui/material";
import homePagePicture from "../../public/home-page-pic.png";
import manager from "../../public/general-manager.jpg";
import specialist from "../../public/specialist.jpg";
import chief from '../../public/chief.jpg';
import officer from '../../public/officer.jpg';
import sales from '../../public/sales.jpg'
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import ScheduleSendOutlinedIcon from '@mui/icons-material/ScheduleSendOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';

const Contacts = () => {
    return (
        <>
            <Box sx={{textAlign: 'center', position: 'relative'}}>
                <Image
                    src={homePagePicture}
                    alt={'Pic'}
                    sizes="90vw"
                    style={{
                        width: '100%',
                        height: '25vh'
                    }}/>
                <Typography variant={'h3'} sx={{position: 'absolute', bottom: 40, left: 40, color: 'white'}}>Contact
                    Us</Typography>
            </Box>
            <Grid container px={20} py={10} spacing={5}>
                <Grid item xs={12} sm={12} lg={8}>
                    <Typography variant={'h4'} sx={{fontWeight: 700}}>About blah blah</Typography>
                    <Typography sx={{textAlign: 'justify'}}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque illo, impedit maiores
                            molestiae quo tenetur! Accusantium aliquid aperiam delectus dolor ducimus minus nisi, nulla
                            quod recusandae sit. Id, optio, quod?
                        </p>
                        <p>A adipisci alias commodi consequuntur dicta distinctio doloribus est et ex exercitationem
                            explicabo impedit laboriosam magni nihil obcaecati officia omnis pariatur quasi quod,
                            recusandae tempora temporibus unde ut voluptatem voluptatum!
                        </p>
                        <p>Deleniti enim, exercitationem mollitia non perferendis reiciendis similique suscipit
                            voluptatum. Animi debitis distinctio enim est incidunt maiores neque rem tenetur. Atque
                            consequatur corporis error incidunt non nostrum obcaecati tempore vero.
                        </p></Typography>
                </Grid>
                <Grid item xs={12} sm={12} lg={4}>
                    <Image
                        src={homePagePicture}
                        alt={'Pic'}
                        style={{
                            width: '100%',
                            height: '50vh'
                        }}/>
                </Grid>
            </Grid>
            <Grid container px={20} py={10} spacing={5}>
                <Grid item xs={12} sm={12} lg={12}>
                    <Typography variant={'h4'} sx={{fontWeight: 700}}>Our team</Typography>
                    <Typography variant={'body2'}>Lorem ipsum dolor sit amet</Typography>
                </Grid>
                <Grid item xs={12} sm={12} lg={12}>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4} lg={2.4}>
                            <Image
                                src={manager}
                                alt={'Pic'}
                                sizes="90vw"
                                style={{
                                    width: '100%',
                                    height: '80%'
                                }}/>
                            <Typography sx={{fontWeight: 600}}>John Doe</Typography>
                            <Typography variant={'caption'} sx={{color: "gray"}}>John Doe</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} lg={2.4}>
                            <Image
                                src={sales}
                                alt={'Pic'}
                                sizes="90vw"
                                style={{
                                    width: '100%',
                                    height: '80%'
                                }}/>
                            <Typography sx={{fontWeight: 600}}>John Doe</Typography>
                            <Typography variant={'caption'} sx={{color: "gray"}}>John Doe</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} lg={2.4}>
                            <Image
                                src={chief}
                                alt={'Pic'}
                                sizes="90vw"
                                style={{
                                    width: '100%',
                                    height: '80%'
                                }}/>
                            <Typography sx={{fontWeight: 600}}>John Doe</Typography>
                            <Typography variant={'caption'} sx={{color: "gray"}}>John Doe</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} lg={2.4}>
                            <Image
                                src={officer}
                                alt={'Pic'}
                                sizes="90vw"
                                style={{
                                    width: '100%',
                                    height: '80%'
                                }}/>
                            <Typography sx={{fontWeight: 600}}>John Doe</Typography>
                            <Typography variant={'caption'} sx={{color: "gray"}}>John Doe</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} lg={2.4}>
                            <Image
                                src={specialist}
                                alt={'Pic'}
                                sizes="90vw"
                                style={{
                                    width: '100%',
                                    height: '80%'
                                }}/>
                            <Typography sx={{fontWeight: 600}}>John Doe</Typography>
                            <Typography variant={'caption'} sx={{color: "gray"}}>John Doe</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container px={20} py={10} spacing={5}>
                <Grid item xs={12} sm={12} lg={12}>
                    <Typography align={'center'} variant={'h4'} sx={{fontWeight: 600}}>Why choose us?</Typography>
                    <Typography align={'center'}>These popular destinations have a lot to offer?</Typography>
                </Grid>
                <Grid item xs={12} sm={12} lg={12}>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4} lg={4}>
                            <Stack direction={'column'} alignItems={'center'}>
                                <VerifiedUserOutlinedIcon sx={{color: "#A47C30", fontSize: 100}}/>
                                <Typography variant={'subtitle1'} sx={{fontWeight: 600, py: 2}}>Best Price
                                    Guarantee</Typography>
                                <Typography variant={'body2'} align={'center'}>Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit.
                                    Ab at consectetur consequatur corporis, cum dolorum et ex illo illum,
                                    in, obcaecati odio quaerat quisquam rem velit. Ex reprehenderit sequi
                                    voluptatum!</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={4} lg={4}>
                            <Stack direction={'column'} alignItems={'center'}>
                                <ScheduleSendOutlinedIcon sx={{color: "#A47C30", fontSize: 100}}/>
                                <Typography variant={'subtitle1'} sx={{fontWeight: 600, py: 2}}>Best Price
                                    Guarantee</Typography>
                                <Typography variant={'body2'} align={'center'}>Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit.
                                    Ab at consectetur consequatur corporis, cum dolorum et ex illo illum,
                                    in, obcaecati odio quaerat quisquam rem velit. Ex reprehenderit sequi
                                    voluptatum!</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={4} lg={4}>
                            <Stack direction={'column'} alignItems={'center'}>
                                <SupportAgentOutlinedIcon sx={{color: "#A47C30", fontSize: 100}}/>
                                <Typography variant={'subtitle1'} sx={{fontWeight: 600, py: 2}}>Customer Service
                                    24h/7d</Typography>
                                <Typography variant={'body2'} align={'center'}>Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit.
                                    Ab at consectetur consequatur corporis, cum dolorum et ex illo illum,
                                    in, obcaecati odio quaerat quisquam rem velit. Ex reprehenderit sequi
                                    voluptatum!</Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
export default Contacts;