// Next.js
import {useRouter} from "next/router";
// Material-ui
import {Box, Grid, TextField} from "@mui/material";
import {PeopleAlt} from "@mui/icons-material";
import {styled} from "@mui/material/styles";
// Project imports
import colors from '../../assets/colors'
import AppButton from "@/components/global/AppButton";
import AppIcon from "@/components/global/AppIcon";

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

const SearchDestination = ({position}: Props) => {
    const router = useRouter()
    return (
        <Box sx={{
            position,
            p: 3.2,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 25,
            bottom: 80,
            left: '50%',
            transform: 'translate(-50%,-50%)',
            width: {xs: 380, sm: 500, lg: 600},
            height: 100,
            backgroundColor: 'rgba(11,11,14,0.5)',
        }}>
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    background: 'white',
                    borderRadius: 25,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 1,
                    boxShadow: '0px 0 2px 2px gray',
                }}>
                <Grid container alignItems={'center'}>
                    <Grid item xs={5}>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            <AppIcon name={'calendar_today'}/>
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
                            <AppIcon name={'person'} />
                            <CssTextField
                                label="Guests"
                                variant="filled"
                                InputProps={{
                                    disableUnderline: true,
                                }}
                            />
                            <AppButton label={'Search'} onClick={() => router.push('/last-minute-deals')}/>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}
export default SearchDestination