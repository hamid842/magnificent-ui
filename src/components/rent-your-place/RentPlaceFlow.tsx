import {Box, Grid, Paper} from "@mui/material";
import colors from "@/assets/colors";
import RentPlaceFlowItem from "@/components/rent-your-place/RentPlaceFlowItem";
import EuclidText from "@/components/css-texts/EuclidText";
import FlowStartAndEndIcon from "@/components/rent-your-place/FlowStartAndEndIcon";

const RentPlaceFlow = () => {
    return (
        <Paper elevation={3} sx={{px: 2, py: 5, borderRadius: 3}}>
            <EuclidText sx={{fontWeight: 700, textAlign: 'center', fontSize: 20}}
                        text={'Convert Your Property Investment'}/>
            <EuclidText sx={{fontWeight: 700, textAlign: 'center', fontSize: 20, mb: 3}}
                        text={'Into A Profitable Holiday Home'}/>
            <Grid container sx={{position: 'relative', pl: 2}}>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <RentPlaceFlowItem num={1}/>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <RentPlaceFlowItem num={2}/>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <RentPlaceFlowItem num={3}/>
                </Grid>
                <FlowStartAndEndIcon iconName={'home'}/>
            </Grid>
            <Grid container sx={{position: 'relative', pl: 2, mt: 8}}>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <RentPlaceFlowItem num={4}/>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <RentPlaceFlowItem num={5}/>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <RentPlaceFlowItem num={6}/>
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
                        height: 'calc(100% + 65px)',
                        width: '20px',
                        backgroundColor: 'transparent',
                        borderTopRightRadius: 5,
                        borderBottomRightRadius: 5,
                        borderLeft: 'none',
                        bottom: 12
                    }
                }}/>
            </Grid>
            <Grid container sx={{position: 'relative', pl: 2, mt: 8}}>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <RentPlaceFlowItem num={7}/>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <RentPlaceFlowItem num={8}/>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <RentPlaceFlowItem num={9}/>
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
                        borderTopLeftRadius: 5,
                        borderBottomLeftRadius: 5,
                        borderRight: 'none',
                        bottom: 12
                    }
                }}/>
            </Grid>
            <Grid container sx={{position: 'relative', pl: 2, mt: 8}}>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <RentPlaceFlowItem num={1}/>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <RentPlaceFlowItem num={2}/>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <RentPlaceFlowItem num={3}/>
                </Grid>
                <FlowStartAndEndIcon iconName={'real_estate_agent'}/>
                <Box sx={{
                    '&::before': {
                        content: `""`,
                        border: `1px dashed ${colors.mainColor}`,
                        position: 'absolute',
                        right: 28,
                        height: 'calc(100% + 65px)',
                        width: '20px',
                        backgroundColor: 'transparent',
                        borderTopRightRadius: 5,
                        borderBottomRightRadius: 5,
                        borderLeft: 'none',
                        bottom: 12
                    }
                }}/>
            </Grid>
        </Paper>
    )
}
export default RentPlaceFlow;