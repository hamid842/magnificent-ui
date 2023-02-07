import { FC, useEffect, useState, ChangeEvent } from 'react';
import 'react-dates/initialize';
import {Box, Button, InputAdornment, Paper, Stack, TextField, Typography} from "@mui/material";
import 'react-dates/lib/css/_datepicker.css';
import {DateRangePicker} from 'react-dates';
import {CalendarMonthRounded} from "@mui/icons-material";
import axios from 'axios';
import moment from 'moment';

const BASE_URL: string = 'http://localhost:1337/';
const DATE_FORMAT = 'YYYY-MM-DD';

type TPrice = {
    totalPrice: number,
    components?: {
        type: string,
        name: string,
        title: string,
        value: number,
        total: number
    }[]
}

type Props = {
    propertyId: string,
};

const BookingCalculationSection: FC<Props> = ({ propertyId }) => {
    const [focusedInput, setFocusedInput] = useState(null)

    const onFocusChange = (focusedInput: any) => {
        setFocusedInput(focusedInput)
    }

    //=======================================================================================================================================

    // To make Guests input, Controlled
    const [guestCount, setGuestCount] = useState<number>(1);
    const onGuestCountChange = (event: ChangeEvent<HTMLInputElement>) => {
        setGuestCount(Number(event.target.value) || 1);
    };

    //=======================================================================================================================================

    // To make CouponName input, Controlled
    const [couponNameInputValue, setCouponNameInputValue] = useState<string>('');
    const onCouponNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCouponNameInputValue(event.target.value || '');
    };
    // The state below will keep track of the coupon name when the 'Apply' Button gets clicked (Changing this state will trigger an API call the get the pricing details)
    const [couponName, setCouponName] = useState<string>('');
    const onCouponNameApply = () => {
        setCouponName(couponNameInputValue);
    }

    //=======================================================================================================================================

    const [startDate, setStartDate] = useState<moment.Moment | null>(null)
    const [endDate, setEndDate] = useState<moment.Moment | null>(null)

    const onDateChange = (arg: { startDate: moment.Moment | null; endDate: moment.Moment | null }) => {
        const { startDate, endDate } = arg;
        setStartDate(startDate);
        setEndDate(endDate)
    }

    //=======================================================================================================================================
    //=======================================================================================================================================

    // To keep track of pricing details (updated through the API call to the backend)
    const [price, setPrice] = useState<TPrice | null>(null);

    useEffect(() => {
        if (!startDate || !endDate) return;
        const priceRequestURL: URL = new URL(`/api/properties/${propertyId}/price`, BASE_URL);
        priceRequestURL.searchParams.set('guestCount', String(guestCount));
        priceRequestURL.searchParams.set('startDate', startDate.format(DATE_FORMAT));
        priceRequestURL.searchParams.set('endDate', endDate.format(DATE_FORMAT));
        if (couponName && couponName.trim()) priceRequestURL.searchParams.set('couponName', couponName);
        
        (async () => {
            try {
                const result = await axios.get(priceRequestURL.toString());
                const { data } = result;
                if (data) {
                    const price: TPrice = {
                        totalPrice: data.totalPrice,
                        components: []
                    };
                    for (const component of data.components) {
                        price.components?.push({
                            type: component.type,
                            name: component.name,
                            title: component.title,
                            value: component.value,
                            total: component.total
                        });
                    }
                    // Set state
                    setPrice(price);
                }
            } catch (error) {
                console.log(`[ERROR: while retrieving pricing details] ->\n ${error}`);
            }
        })();
        
    }, [startDate, endDate, guestCount, couponName]);

    //=======================================================================================================================================

    return (
        <>
            <Paper elevation={3} sx={{p: 1}}>
                <Stack direction={'column'} alignItems={'center'}>
                    <Typography variant={'subtitle2'} p={2}>Booking Calculation</Typography>
                    {/* Date Picker-------------------------------------------------------------------------------------- */}
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
                    {/* Guest Count Input------------------------------------------------------------------------------- */}
                    <Box sx={{width: '100%', pt: 2,pb:1}}>
                        <TextField 
                            fullWidth 
                            value={guestCount}
                            onChange={onGuestCountChange}
                            size={'small'} 
                            type={'number'} 
                            label="Guests" 
                            defaultValue={1} 
                            variant="outlined" 
                            InputLabelProps={{ 
                                shrink: true,
                            }}
                        />
                    </Box>
                    {/* Coupon Name Input------------------------------------------------------------------------------ */}
                    <Box>
                        <Typography variant={'caption'} sx={{marginBottom:2}}>Do you have a discount coupon?</Typography>
                        <TextField 
                            value={couponNameInputValue}
                            onChange={onCouponNameChange}
                            fullWidth 
                            size={'small'} 
                            label="Coupon name" 
                            variant="outlined"
                            InputProps={{
                                endAdornment: 
                                        <InputAdornment 
                                            position="end">
                                                <Button 
                                                    onClick={onCouponNameApply}
                                                    variant={'outlined'} 
                                                    size={'small'} 
                                                    sx={{
                                                        backgroundColor: "#A47C30",
                                                        textTransform: 'capitalize',
                                                        color: 'white',
                                                        border: 'none',
                                                        '&:hover': {
                                                            backgroundColor: "#A47C30",
                                                            border:'none'
                                                        }
                                                    }}>
                                                    Apply
                                                </Button>
                                        </InputAdornment>,
                                    }}
                            sx={{
                                my:1
                            }}
                        />
                    </Box>
                    {/* Book Now Button------------------------------------------------------------------------------------ */}
                    <Button 
                        fullWidth 
                        variant={'outlined'} 
                        size={'small'} 
                        sx={{
                            backgroundColor: "#A47C30",
                            textTransform: 'capitalize',
                            color: 'white',
                            my:2,
                            border: 'none',
                            '&:hover': {
                                backgroundColor: "#A47C30",
                                border:'none'
                        }}}>
                        Book now
                    </Button>
                    {/* Price Details-------------------------------------------------------------------------------------  */}
                    <Box>
                        {
                            price && price.components?.map((item) => {
                                return <div key={item.name}> { item.total } </div>
                            })
                        }
                        <hr />
                        { price && <div>{ price.totalPrice }</div>}
                    </Box>
                    {/* /END -----------------------------------------------------------------------------------------------*/}
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

