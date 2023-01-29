import Layout from '@/components/Layout'
import Image from 'next/image';
import homePagePicture from '../../public/home-page-pic.png'
import {Box, Typography} from "@mui/material";
import SearchDestination from "@/components/SearchDestination";
import SpecialOffers from "@/components/SpecialOffers";

export default function Home() {
    return (
        <Layout>
            <Box sx={{textAlign: 'center', position: 'relative'}}>
                <Image
                    src={homePagePicture}
                    alt={'Pic'}
                    sizes="90vw"
                    style={{
                        width: '90%',
                        height: '75vh',
                        left: '90px',
                        borderBottomLeftRadius: 25,
                        borderBottomRightRadius: 25,
                    }}/>
                <SearchDestination/>
                <Typography variant={'h3'} sx={{paddingY: 9}}>Special Offers</Typography>
            </Box>
            <SpecialOffers/>
        </Layout>
    )
}