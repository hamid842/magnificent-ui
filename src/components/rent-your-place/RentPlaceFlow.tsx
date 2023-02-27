import {Box, Grid, Paper} from "@mui/material";
import colors from "@/assets/colors";
import RentPlaceFlowItem from "@/components/rent-your-place/RentPlaceFlowItem";
import EuclidText from "@/components/css-texts/EuclidText";
import FlowStartAndEndIcon from "@/components/rent-your-place/FlowStartAndEndIcon";
import consultationIcon from '../../../public/rent-place/consulting.png';
import signIcon from '../../../public/rent-place/agreement.png';
import registerIcon from '../../../public/rent-place/verify.png';
import photoIcon from '../../../public/rent-place/image-gallery.png';
import inventoryIcon from '../../../public/rent-place/inventory.png';
import furnitureIcon from '../../../public/rent-place/furnitures.png';
import channelsIcon from '../../../public/rent-place/channel.png';
import searchIcon from '../../../public/rent-place/search.png';
import verificationIcon from '../../../public/rent-place/verification.png';
import dealIcon from '../../../public/rent-place/deal.png';
import stayIcon from '../../../public/rent-place/stay-at-home.png';
import agreeIcon from '../../../public/rent-place/agree.png';

const RentPlaceFlow = () => {
    return (
        <Paper elevation={3} sx={{px: 2, py: 5, borderRadius: 3}}>
            <EuclidText sx={{fontWeight: 700, textAlign: 'center', fontSize: 20}}
                        text={'Convert Your Property Investment'}/>
            <EuclidText sx={{fontWeight: 700, textAlign: 'center', fontSize: 20, mb: 3}}
                        text={'Into A Profitable Holiday Home'}/>
            <Grid container sx={{position: 'relative', pl: 2}}>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <RentPlaceFlowItem num={1} iconSource={consultationIcon} title={'Free Consultation'} subtitle={'with a Magnificent Expert'}/>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <RentPlaceFlowItem num={2} iconSource={signIcon} title={'Landlord Signs a'} subtitle={'Management Agreement'}/>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <RentPlaceFlowItem num={3} iconSource={registerIcon} title={'Magnificent Registers The'} subtitle={'Property With DTCM'}/>
                </Grid>
                <FlowStartAndEndIcon iconName={'home'}/>
            </Grid>
            <Grid container sx={{position: 'relative', pl: 2, mt: 8}}>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <RentPlaceFlowItem num={6} iconSource={photoIcon} title={'Photo & Video Shoots'} subtitle={'on the Unit'}/>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <RentPlaceFlowItem num={5} iconSource={inventoryIcon} title={'Inventory'} subtitle={'Check'}/>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <RentPlaceFlowItem num={4} iconSource={furnitureIcon} title={'Support With'} subtitle={'Furniture'}/>
                </Grid>
                <Box sx={{
                    '&::after': {
                        content: '""',
                        width: 'calc(100% - 100px)',
                        height: '1px',
                        borderTop: `1px dashed ${colors.mainColor}`,
                        position: 'absolute',
                        left: '50%',
                        bottom: 12,
                        transform: 'translateX(-50%)',
                        zIndex: 0
                    }
                }}/>
                <Box sx={{
                    '&::before': {
                        content: `""`,
                        border: `1px dashed ${colors.mainColor}`,
                        position: 'absolute',
                        right: 28,
                        height: 'calc(100% + 64.5px)',
                        width: '30px',
                        backgroundColor: 'transparent',
                        borderTopRightRadius: 10,
                        borderBottomRightRadius: 10,
                        borderLeft: 'none',
                        bottom: 12.5
                    }
                }}/>
            </Grid>
            <Grid container sx={{position: 'relative', pl: 2, mt: 8}}>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <RentPlaceFlowItem num={7} iconSource={channelsIcon} title={'Property is Marketed on'} subtitle={'Various Channels'}/>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <RentPlaceFlowItem num={8} iconSource={searchIcon} title={'Guest Views Property'} subtitle={'and Books Online'}/>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <RentPlaceFlowItem num={9} iconSource={verificationIcon} title={'Pre-Arrival Call &'} subtitle={'Id Verification'}/>
                </Grid>
                <Box sx={{
                    '&::after': {
                        content: '""',
                        width: 'calc(100% - 100px)',
                        height: '1px',
                        borderTop: `1px dashed ${colors.mainColor}`,
                        position: 'absolute',
                        left: '50%',
                        bottom: 12,
                        transform: 'translateX(-50%)',
                        zIndex: 0
                    }
                }}/>
                <Box sx={{
                    '&::before': {
                        content: `""`,
                        border: `1px dashed ${colors.mainColor}`,
                        position: 'absolute',
                        left: 28,
                        height: 'calc(100% + 65px)',
                        width: '20px',
                        backgroundColor: 'transparent',
                        borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 10,
                        borderRight: 'none',
                        bottom: 12
                    }
                }}/>
            </Grid>
            <Grid container sx={{position: 'relative', pl: 2, mt: 8}}>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <RentPlaceFlowItem num={12} iconSource={agreeIcon} title={'Guest Checks out at'} subtitle={'the agreed time'}/>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <RentPlaceFlowItem num={11} iconSource={stayIcon} title={'Guest Enjoys His Stay'} subtitle={'with our Unmatched Service'}/>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <RentPlaceFlowItem num={10} iconSource={dealIcon} title={'Security Deposit is Held &'} subtitle={'Guest is Checked-in Personally'}/>
                </Grid>
                <FlowStartAndEndIcon iconName={'real_estate_agent'}/>
                <Box sx={{
                    '&::before': {
                        content: `""`,
                        border: `1px dashed ${colors.mainColor}`,
                        position: 'absolute',
                        right: 28,
                        height: 'calc(100% + 64.6px)',
                        width: '30px',
                        backgroundColor: 'transparent',
                        borderTopRightRadius: 10,
                        borderBottomRightRadius: 10,
                        borderLeft: 'none',
                        bottom: 12,
                        zIndex:1
                    }
                }}/>
            </Grid>
        </Paper>
    )
}
export default RentPlaceFlow;