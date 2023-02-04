import {Box, FormControl, IconButton, InputLabel, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Grid from "@mui/material/Unstable_Grid2";
import {CalendarTodayOutlined, LocationOnOutlined} from "@mui/icons-material";

type Props = {
    position:string
}

const SearchDestination = ({position}:Props) => {
    return (
        <Box
            sx={{
                position,
                top: "60%",
                width: 500,
                height: 60,
                background: 'white',
                borderRadius: 25,
                left: '50%',
                transform: 'translate(-50%, -50%)',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: 1,
                boxShadow:'0px 0 2px 2px lightgray'
            }}>
            <Grid container alignItems={'center'} spacing={2}>
                <Grid xs={6}>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <LocationOnOutlined sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                        <FormControl variant="standard">
                            <InputLabel shrink htmlFor="bootstrap-input">
                                Where
                            </InputLabel>
                            <TextField variant={'standard'} sx={{border: 'none', outline: 'none'}}
                                       label={'Search Destination'}/>
                        </FormControl>
                    </Box>
                </Grid>
                <Grid xs={6}>
                    <Box sx={{display: 'flex', alignItems: 'center'}}>
                        <CalendarTodayOutlined sx={{color: 'action.active', mr: 1, my: 0.5}}/>
                        <FormControl variant="standard">
                            <InputLabel shrink htmlFor="bootstrap-input">
                                When
                            </InputLabel>
                            <TextField variant={'standard'} sx={{border: 'none', outline: 'none'}}
                                       label={'Select Date'}/>
                        </FormControl>
                        <IconButton sx={{backgroundColor: "#A47C30"}}>
                            <SearchIcon/>
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
export default SearchDestination