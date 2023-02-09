// Next.js
import {useRouter} from "next/router";
// Material-ui
import {Box, Grid, IconButton, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {CalendarTodayOutlined, PeopleAlt} from "@mui/icons-material";
import {styled} from "@mui/material/styles";
// Project imports
import colors from '../assets/colors'

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: colors.mainColor,
        background: 'transparent'
    },
    '& .MuiFilledInput-root': {
        background: 'transparent',
        '&:hover fieldset': {
            background: 'transparent'
        },
    },
});

type Props = {
    position: string
}

//======================|| Search Component ||===========================

const SearchDestination = ({position}: Props) => {
    const router = useRouter()
    return (
        <Box
            sx={{
                position,
                bottom: 30,
                width: 500,
                height: 50,
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
                <Grid item xs={6}>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <CalendarTodayOutlined sx={{color: 'action.active', my: 0.5}}/>
                        <CssTextField
                            label="When"
                            variant="filled"
                            InputProps={{
                                disableUnderline: true,
                            }}/>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <PeopleAlt sx={{color: 'action.active', my: 0.5}}/>
                        <CssTextField
                            label="Guests"
                            variant="filled"
                            InputProps={{
                                disableUnderline: true,
                            }}
                        />
                        <IconButton
                            sx={{
                                backgroundColor: colors.mainColor,
                                '&:hover': {width: 32, height: 32, borderRadius: 25, backgroundColor: colors.mainColor}
                            }}
                            onClick={() => router.push('/last-minute-deals')}>
                            <SearchIcon fontSize={'small'} sx={{color: 'white'}}/>
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
export default SearchDestination