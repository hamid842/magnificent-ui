import 'react-dates/initialize';
import {Box, Button, InputAdornment, Paper, Stack, TextField, Typography} from "@mui/material";
import 'react-dates/lib/css/_datepicker.css';
import {DateRangePicker} from 'react-dates';
import {useState} from "react";
import {CalendarMonthRounded} from "@mui/icons-material";

const BookingCalculationSection = (props: any) => {
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [focusedInput, setFocusedInput] = useState(null)

    const onDateChange = ({startDate, endDate}: any) => {
        setStartDate(startDate);
        setEndDate(endDate)
    }

    const onFocusChange = (focusedInput: any) => {
        setFocusedInput(focusedInput)
    }

    return (
        <>
            <Paper elevation={3} sx={{p: 1,height:'100%'}}>
                <Stack direction={'column'} alignItems={'center'}>
                    <Typography variant={'subtitle2'} p={2}>Booking Calculation</Typography>
                    <DateRangePicker
                        required
                        small
                        showClearDates
                        hideKeyboardShortcutsPanel
                        minimumNights={2}
                        orientation={'vertical'}
                        customInputIcon={<CalendarMonthRounded fontSize={'small'} sx={{color: "#A47C30"}}/>}
                        displayFormat={'YYYY-MM-DD'}
                        startDatePlaceholderText={'Check in'}
                        endDatePlaceholderText={'Check out'}
                        startDateId={'start-date'}
                        endDateId={'end-date'}
                        focusedInput={focusedInput}
                        startDate={startDate}
                        endDate={endDate}
                        onDatesChange={onDateChange}
                        onFocusChange={onFocusChange}
                    />
                    <Box sx={{width: '100%', pt: 3,pb:2}}>
                        <TextField fullWidth size={'small'} type={'number'} label="Guests" defaultValue={1} variant="outlined" InputLabelProps={{
                            shrink: true,
                        }}/>
                    </Box>
                    <Box>
                        <Typography variant={'caption'} sx={{marginBottom:2}}>Do you have a discount coupon?</Typography>
                        <TextField fullWidth size={'small'} label="Coupon name" variant="outlined"
                                   InputProps={{
                                       endAdornment: <InputAdornment position="end">
                                           <Button variant={'outlined'} size={'small'} sx={{
                                               backgroundColor: "#A47C30",
                                               textTransform: 'capitalize',
                                               color: 'white',
                                               border: 'none',
                                               '&:hover': {
                                                   backgroundColor: "#A47C30",
                                                   border:'none'
                                               }
                                           }}>Apply</Button>
                                       </InputAdornment>,
                                   }}
                        sx={{my:1}}
                        />
                    </Box>
                    <Button fullWidth variant={'outlined'} size={'small'} sx={{
                        backgroundColor: "#A47C30",
                        textTransform: 'capitalize',
                        color: 'white',
                        my:2,
                        border: 'none',
                        '&:hover': {
                            backgroundColor: "#A47C30",
                            border:'none'
                        }
                    }}>Book now</Button>
                </Stack>
            </Paper>
            <style jsx>{`
              .DateRangePicker__selected_span {
                background: #A47C30; //background
                color: white; //text
                border: 1px solid red; //default styles include a border
              }
            `}</style>

        </>
    )
}
export default BookingCalculationSection;

