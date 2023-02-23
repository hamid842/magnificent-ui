import {ChangeEvent, FC, useCallback, useEffect, useState} from 'react';
// Material ui
import {Box, Button, Divider, InputAdornment, Paper, Stack, TextField, Typography, useMediaQuery} from "@mui/material";
import {useTheme} from '@mui/material/styles';
import {CalendarMonthRounded} from "@mui/icons-material";
// Third party
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {DateRangePicker} from 'react-dates';
import moment from 'moment';
// Project imports
import colors from "@/assets/colors";
import EuclidText from "@/components/css-texts/EuclidText";
import SwitzerText from "@/components/css-texts/SwitzerText";
import BookingDialog from "@/components/last-minute-deals/BookingDialog";
import {instance} from '@/config/axiosConfig';
import {DATE_FORMAT, IProperty, TCalendarDay} from "@/utils/property-type";

/**
 * Must match 'field' attribute of the server error on the host side 
 * to determine which field doesn't the error belong to
 */
enum EFields {
    DATE = 'datepicker',
    GUEST = 'guestscount',
    COUPON = 'couponname'
}

type TFormError = {
    couponname?: string,
}

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
    calendar: TCalendarDay[]
};

const BookingCalculationSection: FC<Props> = ({property, calendar}) => {
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'))
    const {id: propertyId} = property;
    const {minNights} = property.attributes;

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
    const isDayBlocked = (day: moment.Moment): boolean => {
        return calendar.some((calDay: TCalendarDay) => { 
            return day.isSame(calDay.date, 'day') && !calDay.isAvailable;
        });
    }

    //=======================================================================================================================================

    const [minStay, setMinStay] = useState<number>(property.attributes.minNights);

    // When the startDate state changes (user selects an start date)
    useEffect(() => {
        if (!startDate) return;
        // Loop through the calendar to find the selected date and retrieve its minimumStay attribute
        calendar.every((calDay) => {
            if (startDate.isSame(calDay.date, 'day')) {
                // Found the selected date
                setMinStay(calDay.minimumStay);
                console.log(calDay.minimumStay);
                return false; // break the loop
            }
            return true; // Continue the loop
        });
    }, [calendar, startDate]);

    //=======================================================================================================================================
    //=======================================================================================================================================

    const [formError, setFormError] = useState<TFormError>({});

    //=======================================================================================================================================
    //=======================================================================================================================================

    // Disable Book Now button when there's a problem with the form

    const [bookEnabled, setBookEnabled] = useState<boolean>(false);

    useEffect(() => {
        // Disable book now button when required fields are empty or there's a form error
        if (!startDate || !endDate || !guestCount || formError.couponname) {
            setBookEnabled(false);
        } else {
            setBookEnabled(true);
        }
    }, [startDate, endDate, guestCount, formError.couponname]);

    //=======================================================================================================================================
    //=======================================================================================================================================

    // To keep track of pricing details (updated through the API call to the backend)
    const [price, setPrice] = useState<TPrice | null>(null);

    useEffect(() => {
        //----------------------------------------
        if (!startDate || !endDate) return setPrice(null);
        //----------------------------------------
        // Clear form errors
        setFormError({});
        //----------------------------------------
        const reqParams: any = {
            guestCount: guestCount,
            startDate: startDate.format(DATE_FORMAT),
            endDate: endDate.format(DATE_FORMAT)
        };
        if (couponName && couponName.trim()) reqParams.couponName = couponName;

        instance.get(`/properties/${propertyId}/price`, {
            params: reqParams
        }).then((result) => {
            const {data} = result;
            if (!data) return;
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
        }).catch((error) => {
            const errorData = error.response.data.error.details;
            console.log(`[ERROR: while retrieving pricing details] ->\n ${error}`);
            // If there's an error that should be displayed on a field
            if (errorData && errorData.field && errorData.message) {
                setFormError((prev) => {
                    return {
                        ...prev,
                        [errorData.field]: errorData.message
                    }
                })
            }
            // Clear Prices
            setPrice(null);
        });

    }, [startDate, endDate, guestCount, couponName, propertyId]);

    //=======================================================================================================================================
    /**
     * We need a mechanism to block users from selecting blocked dates inside a range:
     * Example:
     *      -User selects: 10
     *      -But, 14, 15, are blocked
     *      -Without the below logic:
     *          -The user can select 10 -> 20  - 14 and 15 will be selected
     *      -We must make every date after 14, outside of the selection range (not possible to select)
     *      -So, the user can at most select: 10, 11, 12, 13
     */


    const [firstBlockedDate, setFirstBlockedDate] = useState<moment.Moment | null>(null);
    
    // Returns the first blocked date after the selected startDate
    const findFirstBlockedDate = (startDate: moment.Moment | null) => {
        // If the user hasn't selected any startDate, clear firstBlockedDate, which will make all dates selectable
        if (!startDate) return setFirstBlockedDate(null);

        calendar.every((calDay) => {
            // If this calDay is after the startDate and is not available:
            if (startDate.isBefore(calDay.date, 'day') && !calDay.isAvailable) {
                // Set the state
                setFirstBlockedDate(moment(calDay.date));
                return false; // break the loop
            }
            return true; // continue looping
        });
    };


    // Every time user selects a startDate, find the first blocked date to make every day after it, outside range
    useEffect(() => {
        findFirstBlockedDate(startDate);
    }, [startDate]);


    // This function determines whether a day is selectable in the range or not
    // Note: using useCallback to redefine the function every time the firstBlockedDate value changes
    const isOutsideRange = useCallback<(day: moment.Moment) => boolean>((day: moment.Moment) => {
        // if in the past
        if (day.isSameOrBefore(new Date(), 'day')) return true;
        // If a firstBlockedDate was found (which means the user has selected a startDate)
        if (firstBlockedDate)
            // If this day (in datepicker) is after the firstBlockedDate: make it unselectable
            if (day.isSameOrAfter(firstBlockedDate, 'day')) return true;
        // Everthing else is selectable
        return false;
    }, [firstBlockedDate]);

    //=======================================================================================================================================

    return (
        <>
            <Paper sx={{p: 1, minHeight: 340, height: 'auto', borderRadius: 2, position: 'sticky', top: 10,zIndex:1000}}>
                <Stack direction={'column'} alignItems={'center'}>
                    <EuclidText variant={'subtitle2'} p={2} text={'Booking Calculation'}/>
                    {/* Date Picker-------------------------------------------------------------------------------------- */}
                    <DateRangePicker
                        required
                        small
                        showClearDates
                        hideKeyboardShortcutsPanel
                        minimumNights={minStay > 1 ? minStay : 0} // If only one day is available the user  should be able to select the same day
                        orientation={sm ? 'vertical' : 'horizontal'}
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
                        isOutsideRange={isOutsideRange}
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
                            sx={{zIndex:0}}
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
                            error={!!formError.couponname}
                            helperText={formError.couponname || ''}
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
                                my: 1,
                                zIndex:0
                            }}
                        />
                    </Box>
                    {/* Book Now Button------------------------------------------------------------------------------------ */}
                    <Box sx={{width: '100%', my: 1}}>
                        <BookingDialog
                            buttonEnabled={bookEnabled}
                            property={property} 
                            arrivalDate={startDate} 
                            departureDate={endDate}
                            price={price} 
                            guestCount={guestCount}/>
                    </Box>
                    {/* Price Details-------------------------------------------------------------------------------------  */}
                    <Box sx={{width: 1}}>
                        {!price && <Stack alignItems={'center'}><SwitzerText variant={'caption'} sx={{my: 1}}
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

