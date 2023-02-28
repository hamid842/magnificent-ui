// Material-ui
import { Box, Grid, Stack, Typography } from "@mui/material";
// Project imports
import { IProperty } from "@/utils/property-type";
import colors from "@/assets/colors";
import EuclidText from "@/components/css-texts/EuclidText";
import SwitzerText from "@/components/css-texts/SwitzerText";
import ImageWithHoverZoom from "@/components/global/ZoomableImage";
import SpecialOffersIconDetails from "@/components/global/SpecialOffersIconDetails";
import AppIcon from "@/components/global/AppIcon";

type Props = {
  data: IProperty;
};

//=======================|| Special Offers Each Item Component ||==========================

const SpecialOffersItem = ({ data }: Props) => {
  const { attributes } = data;

  const favoriteIconStyles = {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: 10,
    right: 10,
    backgroundColor: "white",
    width: 30,
    height: 30,
    borderRadius: 25,
  };

  return (
    <>
      <Box sx={{ position: "relative" }}>
        <ImageWithHoverZoom
          alt={"Pic"}
          sizes={"100%"}
          src={attributes.images[0].url}
          width={200}
          height={200}
          boxHeight={{ xs: 220, sm: 220, md: 170, lg: 170 }}
          radius={3}
          style={{
            width: "100%",
            transition: "0.3s all ease-in-out",
            height: "100%",
            borderRadius: 10,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            backgroundColor: "white",
            width: 55,
            height: 30,
            top: 10,
            left: 10,
            borderRadius: 1,
          }}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <AppIcon name={"star"} />
            {/* <SwitzerText text={'4.8'}/> */}
          </Stack>
        </Box>
      </Box>
      <Grid container mt={1}>
        <Grid item xs={12}>
          <EuclidText
            text={attributes.Title}
            sx={{ fontWeight: 600, fontSize: 14 }}
          />
        </Grid>
        <Grid item xs={12}>
          <SwitzerText
            variant={"body2"}
            sx={{ color: "gray" }}
            text={`${attributes.bedroomsNumber} Bedroom/s Combined Lodge`}
          />
        </Grid>
        <Grid item xs={12}>
          <Stack direction={"row"} alignItems={"center"} pt={1}>
            <AppIcon name={"sell"} />
            <Typography
              variant={"subtitle1"}
              sx={{ color: colors.mainColor, ml: 1 }}
            >
              {attributes.price} AED/ per night
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <SpecialOffersIconDetails
            bedsNumber={attributes.bedsNumber}
            squareMeters={attributes.squareMeters}
          />
        </Grid>
      </Grid>
    </>
  );
};
export default SpecialOffersItem;
