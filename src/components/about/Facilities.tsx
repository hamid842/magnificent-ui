import {Box, Button, Grid, Typography} from "@mui/material";
import Image from "next/image";
import homePagePicture from "../../../public/home-page-pic.png";
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import FacilitiesItem from "@/components/about/FacilitiesItem";
import WineBarIcon from '@mui/icons-material/WineBar';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

const Facilities = () => {
    return (
        <Box sx={{textAlign: 'center', position: 'relative'}}>
            <Image
                src={homePagePicture}
                alt={'Pic'}
                sizes="90vw"
                style={{
                    width: '100%',
                    height: '70vh'
                }}/>
            <Box sx={{position: 'absolute', top: 0, width: '100%', p: 5}}>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={12} lg={6} sx={{textAlign: 'left'}}>
                        <Typography variant={'h2'} sx={{fontWeight: 700,pt:10}}>Facilities</Typography>
                        <Typography sx={{textAlign: 'justify', py: 2}}>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Aliquid amet architecto
                            consectetur,
                            ea est excepturi exercitationem ipsa itaque labore laudantium maiores natus
                            odio porro quasi recusandae saepe suscipit temporibus voluptas. Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Aliquid amet architecto consectetur,
                            ea est excepturi exercitationem ipsa itaque labore laudantium maiores natus
                            odio porro quasi recusandae saepe suscipit temporibus voluptas.</Typography>
                        <Box sx={{py: 2}}>
                            <Button variant={"contained"}
                                    sx={{backgroundColor: "#A47C30", borderRadius: 2, textTransform: 'none'}}>Read
                                More</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6}>
                        <Grid container spacing={2} sx={{pt:10}}>
                            <Grid item xs={12} sm={6} lg={6}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={12} lg={12}>
                                        <FacilitiesItem
                                            ItemIcon={<ChildFriendlyIcon sx={{fontSize: 45}}/>}
                                            title={"Baby"}
                                            subtitle={'FREE BUGGY'}/>
                                    </Grid>
                                    <Grid item xs={12} sm={12} lg={12}>
                                        <FacilitiesItem
                                            ItemIcon={<HolidayVillageIcon sx={{fontSize: 45}}/>}
                                            title={'Camp'}
                                            subtitle={'INCLUDED'}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={6} lg={6}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={12} lg={12}>
                                        <FacilitiesItem
                                            ItemIcon={<WineBarIcon sx={{fontSize: 45}}/>} title={'Drinks'}
                                            subtitle={'INCLUDED'}/>
                                    </Grid>
                                    <Grid item xs={12} sm={12} lg={12}>
                                        <FacilitiesItem
                                            ItemIcon={<TravelExploreIcon sx={{fontSize: 45}}/>} title={'World'}
                                            subtitle={'CUSTOM TOURS'}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
export default Facilities;