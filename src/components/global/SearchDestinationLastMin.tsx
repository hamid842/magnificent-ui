// Next.js
import {useRouter} from "next/router";
// Material-ui
import {AppBar, Box, Grid, IconButton, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {CalendarTodayOutlined, PeopleAlt} from "@mui/icons-material";
import {styled} from "@mui/material/styles";
// Project imports
import colors from '../../assets/colors'
import AppButton from "@/components/global/AppButton";

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: colors.mainColor,
        background: 'transparent'
    },
    '& .MuiFilledInput-root': {
        background: 'transparent',
        '&:hover': {
            background: 'transparent'
        },
    },
});

type Props = {
    position: string
}

//======================|| Search Component ||===========================

const SearchDestinationLastMin = ({position}: Props) => {
    const router = useRouter()
    return (
        <Box
            sx={{
                position,
                bottom: 20,
                width: 500,
                height: 45,
                background: 'white',
                borderRadius: 25,
                left: '50%',
                transform: 'translate(-50%, -50%)',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 1,
                boxShadow: '0px 0 2px 2px gray'
            }}>
            <Grid container alignItems={'center'}>
                <Grid item xs={5}>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <CalendarTodayOutlined sx={{color: colors.mainColor, my: 0.5}}/>
                        <CssTextField
                            label="When"
                            variant="filled"
                            InputProps={{
                                disableUnderline: true,
                            }}/>
                    </Box>
                </Grid>
                <Grid item xs={7}>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <PeopleAlt sx={{color: colors.mainColor, my: 0.5}}/>
                        <CssTextField
                            label="Guests"
                            variant="filled"
                            InputProps={{
                                disableUnderline: true,
                            }}
                        />
                        <AppButton label={'Search'} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
export default SearchDestinationLastMin