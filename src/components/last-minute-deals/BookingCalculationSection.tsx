import {ChangeEvent, FC, useContext, useEffect, useState} from 'react';
import {IProperty} from "@/utils/property-type";
import 'react-dates/initialize';
import {Box, Button, Divider, InputAdornment, Paper, Stack, TextField, Typography} from "@mui/material";
import 'react-dates/lib/css/_datepicker.css';
import {DateRangePicker} from 'react-dates';
import {CalendarMonthRounded} from "@mui/icons-material";
import axios from 'axios';
import moment from 'moment';
import colors from "@/assets/colors";
import EuclidText from "@/components/css-texts/EuclidText";
import SwitzerText from "@/components/css-texts/SwitzerText";
import BookingDialog from "@/components/last-minute-deals/BookingDialog";
import {AuthContext} from "../../../context/contexts";

// Capitalize every word
const capitalize = (input: string): string => {
    const words = input.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(" ");
}

// Comma separate numbers
const commaSeparate = (input: number): string => {
    let x = String(input);
    let parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

const BASE_URL: string = 'http://45.61.55.150:1337/api';
const DATE_FORMAT = 'YYYY-MM-DD';

export type TPrice = {
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
    property: IProperty,
    blockedDates: string[]
};

const BookingCalculationSection: FC<Props> = ({property, blockedDates}) => {
    const {id: propertyId} = property;
    const {minNights, maxNights, personCapacity} = property.attributes;

    const {user} = useContext(AuthContext)

    // TODO: Q: Can we book for more than personCapacity?
    //=======================================================================================================================================

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
        const {startDate, endDate} = arg;
        setStartDate(startDate);
        setEndDate(endDate)
    }

    //=======================================================================================================================================

    /**
     * This function will be passed to date-picker to check for each day's availability
     * @returns is the day blocked?
     */
    const isDayBlocked = (day: moment.Moment) => {
        return blockedDates.some(blockedDate => day.isSame(blockedDate, 'day'));
    }
    //=======================================================================================================================================
    //=======================================================================================================================================

    // To keep track of pricing details (updated through the API call to the backend)
    const [price, setPrice] = useState<TPrice | null>(null);

    useEffect(() => {
        if (!startDate || !endDate) return;
        const priceRequestURL: URL = new URL(`/properties/${propertyId}/price`, BASE_URL);
        priceRequestURL.searchParams.set('guestCount', String(guestCount));
        priceRequestURL.searchParams.set('startDate', startDate.format(DATE_FORMAT));
        priceRequestURL.searchParams.set('endDate', endDate.format(DATE_FORMAT));
        if (couponName && couponName.trim()) priceRequestURL.searchParams.set('couponName', couponName);

        (async () => {
            try {
                const result = await axios.get(priceRequestURL.toString());
                const {data} = result;
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
            <Paper sx={{p: 1, minHeight: 340, height: 'auto', borderRadius: 2, position: 'sticky', top: 10}}>
                <Stack direction={'column'} alignItems={'center'}>
                    <EuclidText variant={'subtitle2'} p={2} text={'Booking Calculation'}/>
                    {/* Date Picker-------------------------------------------------------------------------------------- */}
                    <DateRangePicker
                        required
                        small
                        showClearDates
                        hideKeyboardShortcutsPanel
                        minimumNights={minNights || 1}
                        orientation={'horizontal'}
                        customInputIcon={
                            <CalendarMonthRounded
                                fontSize={'small'}
                                sx={{
                                    fontSize: 15,
                                    padding: 0,
                                    color: colors.mainColor
                                }}
                            />
                        }
                        displayFormat={DATE_FORMAT}
                        startDatePlaceholderText={'check-in'}
                        endDatePlaceholderText={'check-out'}
                        startDateId={'start-date'}
                        endDateId={'end-date'}
                        focusedInput={focusedInput}
                        startDate={startDate}
                        endDate={endDate}
                        onDatesChange={onDateChange}
                        onFocusChange={onFocusChange}
                        isDayBlocked={isDayBlocked}
                    />
                    {/* Guest Count Input------------------------------------------------------------------------------- */}
                    <Box sx={{width: '100%', pt: 2, pb: 1}}>
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
                        <Typography variant={'caption'} sx={{marginBottom: 2}}>Do you have a discount
                            coupon?</Typography>
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
                                            size={'small'}
                                            sx={{
                                                textTransform: 'capitalize',
                                                color: colors.mainColor,
                                                border: 'none',
                                                '&:hover': {
                                                    height: 20,
                                                    width: 40,
                                                    backgroundColor: colors.mainColor,
                                                    border: 'none',
                                                    color: 'white'
                                                }
                                            }}>
                                            Apply
                                        </Button>
                                    </InputAdornment>,
                            }}
                            sx={{
                                my: 1
                            }}
                        />
                    </Box>
                    {/* Book Now Button------------------------------------------------------------------------------------ */}
                    <Box sx={{width: '100%',my:1}}>
                        <BookingDialog property={property} arrivalDate={startDate} departureDate={endDate}
                                       price={price} guestCount={guestCount} />
                    </Box>
                    {/* Price Details-------------------------------------------------------------------------------------  */}
                    <Box sx={{width: 1}}>
                        {!price && <Stack alignItems={'center'}><SwitzerText variant={'caption'} sx={{my:1}}
                                                                             text={'Select dates to see the price'}/></Stack>}
                        {
                            price && price.components?.map((item) => {
                                return (<div className="price-item" key={item.name}>
                                    <span className="price-title">{capitalize(item.title)}:</span>
                                    <span>{commaSeparate(item.total)} AED</span>
                                </div>)
                            })
                        }
                        {price && <Divider/>}
                        {
                            price && (<div className="price-item">
                                <span className="price-title">Total: </span>
                                <span className="price-total">{commaSeparate(price.totalPrice)} AED</span>
                            </div>)
                        }
                    </Box>
                </Stack>
            </Paper>
            <style jsx>{`
              .DateRangePicker__selected_span {
                background: #A47C30; //background
                color: white; //text
                border: 1px solid red; //default styles include a border
                z-index: 1;
              }

              .price-item {
                margin: 5px;
                display: flex;
                align-items: center;
                justify-content: space-between;
              }

              .price-title {
                font-weight: bold;
                text-decoration: underline;
              }

              .price-total {
                font-weight: bold;
              }
            `}</style>

        </>
    )
}
export default BookingCalculationSection;

