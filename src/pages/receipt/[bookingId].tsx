import {ReactElement, useEffect, useRef, useState} from "react";
// Next.js
import {useRouter} from "next/router";
// Material ui
import {Alert, AlertTitle, Box, CircularProgress, Divider, Paper, Stack} from "@mui/material";
// Third party
import {AxiosError, AxiosResponse} from "axios";
import {useReactToPrint} from "react-to-print";
// Project imports
import AppContainer from "@/components/global/AppContainer";
import Layout from "@/components/layout/Layout";
import {instance as axios} from "@/config/axiosConfig";
import {IBooking, IPriceComponent} from "@/utils/booking-type";
import EuclidText from "@/components/css-texts/EuclidText";
import GeneralInfoTitleAndValue from "@/components/global/GeneralInfoTitleAndValue";
import dayjs from "dayjs";
import {camelCaseToTitle} from "@/functions/camelCaseToTitle";
import colors from "@/assets/colors";
import AppButton from "@/components/global/AppButton";

//========================|| Receipt Page ||==========================

const BookingId = () => {
    const router = useRouter();
    const componentRef = useRef(null);
    const [receiptData, setReceiptData] = useState<IBooking>();
    const [loading, setLoading] = useState<boolean>(false)
    const [hasError, setHasError] = useState<boolean>(false)

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    //TODO base url

    useEffect(() => {
        setLoading(true)
        axios(`http://45.61.55.150:1337/api/bookings/${router.query.bookingId}`).then((response: AxiosResponse) => {
            if (response.status === 200) {
                setReceiptData(response.data?.data?.attributes);
                setLoading(false)
            }
        }).catch((error: AxiosError) => {
            console.log(error);
            setLoading(false);
            setHasError(true);
        })
    }, [router.query.bookingId])

    return (
        <AppContainer>
            <Paper sx={{p: 2, mt: 20, '@media print': {mt: 1}}} ref={componentRef} id="page-break">
                {loading ? <Box sx={{
                    width: '100%',
                    height: '70vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <CircularProgress sx={{color: colors.mainColor}} size={40}/>
                </Box> : hasError ?
                    <Box sx={{
                        width: '100%',
                        height: '70vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}><Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        Something went wrong — <strong>please contact the admin!</strong>
                    </Alert></Box>
                    : <>
                        <EuclidText variant={'h5'} text={'Receipt Details'} sx={{fontWeight: 600}} my={0.5}/>
                        <Divider sx={{mb: 1}}/>
                        {router && router.query?.success ?
                            <Alert severity="success" sx={{my: 1}}>The payment was successful.</Alert> :
                            <Alert severity="error" sx={{my: 1}}>The payment was failed!</Alert>}
                        <GeneralInfoTitleAndValue title={'Booking Datetime'}
                                                  value={dayjs(receiptData?.bookingDate).format('YYYY-MM-DD HH:mm')}/>
                        <GeneralInfoTitleAndValue title={'Reservation Id'} value={receiptData?.hostawayReservationId}/>
                        <GeneralInfoTitleAndValue title={'Arrival Date'}
                                                  value={dayjs(receiptData?.arrivalDate).format('YYYY-MM-DD')}/>
                        <GeneralInfoTitleAndValue title={'Departure Date'}
                                                  value={dayjs(receiptData?.departureDate).format('YYYY-MM-DD')}/>
                        <GeneralInfoTitleAndValue title={'Total Nights'} value={receiptData?.totalNights}/>
                        {
                            receiptData?.price?.components?.map((item: IPriceComponent) => <GeneralInfoTitleAndValue
                                key={item.name} title={camelCaseToTitle(item.name)} value={item.total}/>)
                        }
                        {receiptData?.hostawayResponse?.guestName &&
                            <Box sx={{my: 0.5, p: 1, borderRadius: 2, border: `1px dashed ${colors.mainColor}`}}>
                                <GeneralInfoTitleAndValue title={'Guest Name'}
                                                          value={receiptData?.hostawayResponse.guestName}/>
                                <GeneralInfoTitleAndValue title={'Guest Email'}
                                                          value={receiptData?.hostawayResponse.guestEmail}/>
                                <GeneralInfoTitleAndValue title={'Guest Phone No.'}
                                                          value={receiptData?.hostawayResponse.phone}/>
                            </Box>
                        }
                        <Stack direction={'row'} justifyContent={'space-between'} mt={2}>
                            <AppButton label={'Home Page'} onClick={() => router.push('/')}/>
                            <AppButton label={'Print'} onClick={handlePrint}/>
                        </Stack>
                    </>}
            </Paper>
        </AppContainer>
    )
}
export default BookingId;

BookingId.getLayout = (page: ReactElement) => <Layout>{page}</Layout>