// Next.js
import { useRouter } from "next/router";
// Material-ui
import { Box, Grid, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
// Project imports
import colors from "@/assets/colors";
import AppButton from "@/components/global/AppButton";
import AppIcon from "@/components/global/AppIcon";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";
import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: colors.mainColor,
    background: "transparent",
  },
  "& .MuiFilledInput-root": {
    outline: "none !important",
    background: "transparent",
    "&:hover": {
      background: "transparent",
    },
  },
});

type Props = {
  position: string;
};

//======================|| Search Component ||===========================

const SearchDestination = ({ position }: Props) => {
  const router = useRouter();
  const [value, setValue] = useState<Dayjs | null>(null);

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        position,
        p: {xs:2,sm:3,md:3,lg:3},
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
        bottom: 70,
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: { xs: 350, sm: 500, lg: 600 },
        height: 90,
        backgroundColor: "rgba(11,11,14,0.5)",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          background: "white",
          borderRadius: 25,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: 1,
          boxShadow: "0px 0 2px 2px gray",
        }}
      >
        <Grid container alignItems={"center"}>
          <Grid item xs={5}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <AppIcon name={"calendar_today"} />
                <MobileDatePicker
                  label={"When"}
                  onChange={handleChange}
                  showToolbar={false}
                  disablePast={true}
                  value={value}
                  InputProps={{ disableUnderline: true }}
                  renderInput={(params) => (
                    <CssTextField {...params} variant="filled" />
                  )}
                />
              </Box>
            </LocalizationProvider>
          </Grid>
          <Grid item xs={7}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <AppIcon name={"person"} />
              <CssTextField
                label="Guests"
                variant="filled"
                InputProps={{
                  disableUnderline: true,
                }}
              />
              <AppButton
                label={"Search"}
                onClick={() => router.push("/our-homes")}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default SearchDestination;
