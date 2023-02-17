import {alpha, styled} from '@mui/material/styles';
import {pink} from '@mui/material/colors';
import Switch from '@mui/material/Switch';
import {FormControlLabel, FormGroup} from "@mui/material";
import colors from "@/assets/colors";
import {ChangeEvent} from "react";

const MagnificentSwitch = styled(Switch)(({theme}) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
        color: colors.mainColor,
        '&:hover': {
            backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
        },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: colors.mainColor,
    },
}));

const label = {inputProps: {'aria-label': 'Color switch demo'}};

type Props = {
    checked:boolean,
    onChange:(event:ChangeEvent<HTMLInputElement>)=>void
}

const SwitchBtnForBooking = ({checked,onChange}:Props) => {
    return (
        <FormGroup>
            <FormControlLabel control={<MagnificentSwitch {...label} checked={checked} onChange={onChange}/>} label="For Others?"/>
        </FormGroup>
    );
}
export default SwitchBtnForBooking;