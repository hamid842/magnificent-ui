import {Slider} from "@mui/material";
import {styled} from "@mui/material/styles";


const ReSlider = styled(Slider)({
    color: 'black',
    marginTop:10,
    marginBottom:10,
    height: 5,
    '& .MuiSlider-track': {
        border: 'none',
    },
    '& .MuiSlider-rail': {
        color: 'black'
    },
    '& .MuiSlider-thumb': {
        height: 30,
        width: 30,
        backgroundColor: '#FEBE1E',
        '&:before': {
            display: 'none',
        },
    },
    '& .MuiSlider-valueLabel': {
        lineHeight: 1.2,
        fontSize: 12,
        background: 'unset',
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: '50% 50% 50% 0',
        backgroundColor: '#52af77',
        transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        '&:before': { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
        },
        '& > *': {
            transform: 'rotate(45deg)',
        },
    },
});

const RentSlider = ()=>{
    return(
        <ReSlider />
    )
}
export default RentSlider;