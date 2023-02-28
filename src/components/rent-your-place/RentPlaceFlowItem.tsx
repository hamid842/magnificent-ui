import {Box, createTheme, Stack, useMediaQuery} from "@mui/material";
import colors from "@/assets/colors";
import Image, { StaticImageData } from "next/image";
import EuclidText from "@/components/css-texts/EuclidText";

type RentPlaceFlowItemProps = {
  num: number;
  iconSource: string | StaticImageData;
  title: string;
  subtitle: string;
};

const RentPlaceFlowItem = ({
  num,
  iconSource,
  title,
  subtitle,
}: RentPlaceFlowItemProps) => {
  const theme = createTheme();
  const xs = useMediaQuery(theme.breakpoints.down("sm"));

  const ICON_WIDTH = 60;
  const ICON_HEIGHT = 60;
  const titleStyles = {
    fontWeight: 600,
    fontSize: 14,
  };
  return (
    <>
      <Stack direction={"column"} alignItems={"center"}>
        <Image
          alt={"Icon"}
          src={iconSource}
          width={ICON_WIDTH}
          height={ICON_HEIGHT}
        />
        <EuclidText mt={1} text={title} sx={titleStyles} />
        <EuclidText mb={1} text={subtitle} sx={titleStyles} />
        <Box
          sx={{
            backgroundColor: colors.mainColor,
            width: 50,
            height: 25,
            borderRadius: 25,
            color: "white",
            display: "grid",
            placeItems: "center",
            zIndex: 1000,
          }}
        >
          {num}
        </Box>
      </Stack>
      {xs && (
        <Box
          sx={{
            width: "calc(100% - 85px)",
            height: 14,
            borderTop: `1px dashed ${colors.mainColor}`,
            position: "absolute",
            left: "50%",
            bottom: 0,
            transform: "translateX(-50%)",
            zIndex: 0,
          }}
        />
      )}
    </>
  );
};
export default RentPlaceFlowItem;
