import { Grid, Paper, Stack, Typography } from "@mui/material";
import AccessibleSlider from "@/components/last-minute-deals/AccessibleSlider";
import EuclidText from "@/components/css-texts/EuclidText";
import SwitzerText from "../css-texts/SwitzerText";
import colors from "@/assets/colors";

const AccessibleInformation = () => {
  return (
    <Paper elevation={3} sx={{ p: 2, my: 2, borderRadius: 2 }}>
      <EuclidText
        variant={"subtitle1"}
        sx={{ fontWeight: 600 }}
        text={"Location and accessible information"}
      />
      <Grid container spacing={6}>
        <Grid item xs={12} sm={6} lg={6}>
          <Stack direction={"row"} alignItems={"center"}>
            <SwitzerText
              sx={{ marginLeft: 1, fontSize: 12, marginRight: 1 }}
              text={"Dubai Mall"}
            />
            <span
              style={{ fontSize: 16, color: colors.mainColor }}
              className="material-symbols-outlined"
            >
              local_taxi
            </span>
            <SwitzerText
              sx={{ marginLeft: 1, fontSize: 12, marginRight: 1 }}
              text={"< 20 min"}
            />
            <span
              style={{ fontSize: 16, color: colors.mainColor }}
              className="material-symbols-outlined"
            >
              directions_bus
            </span>
            <SwitzerText
              sx={{ marginLeft: 1, fontSize: 12, marginRight: 1 }}
              text={"< 20 min"}
            />
            <span
              style={{ fontSize: 16, color: colors.mainColor }}
              className="material-symbols-outlined"
            >
              directions_walk
            </span>
            <SwitzerText
              sx={{ marginLeft: 1, fontSize: 12 }}
              text={"< 20 min"}
            />
          </Stack>

          <Stack direction={"row"} py={2}>
            <SwitzerText
              sx={{ marginLeft: 1, fontSize: 12, marginRight: 1 }}
              text={"Metro"}
            />
            <span
              style={{ fontSize: 16, color: colors.mainColor }}
              className="material-symbols-outlined"
            >
              local_taxi
            </span>
            <SwitzerText
              sx={{ marginLeft: 1, fontSize: 12, marginRight: 1 }}
              text={"< 20 min"}
            />
            <span
              style={{ fontSize: 16, color: colors.mainColor }}
              className="material-symbols-outlined"
            >
              directions_bus
            </span>
            <SwitzerText
              sx={{ marginLeft: 1, fontSize: 12, marginRight: 1 }}
              text={"< 20 min"}
            />
            <span
              style={{ fontSize: 16, color: colors.mainColor }}
              className="material-symbols-outlined"
            >
              directions_walk
            </span>
            <SwitzerText
              sx={{ marginLeft: 1, fontSize: 12 }}
              text={"< 20 min"}
            />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} lg={6}>
          <Stack direction={"row"} alignItems={"center"}>
            <SwitzerText
              sx={{ marginLeft: 1, fontSize: 12, marginRight: 1 }}
              text={"Resturant"}
            />
            <span
              style={{ fontSize: 16, color: colors.mainColor }}
              className="material-symbols-outlined"
            >
              local_taxi
            </span>
            <SwitzerText
              sx={{ marginLeft: 1, fontSize: 12, marginRight: 1 }}
              text={"< 20 min"}
            />
            <span
              style={{ fontSize: 16, color: colors.mainColor }}
              className="material-symbols-outlined"
            >
              directions_bus
            </span>
            <SwitzerText
              sx={{ marginLeft: 1, fontSize: 12, marginRight: 1 }}
              text={"< 20 min"}
            />
            <span
              style={{ fontSize: 16, color: colors.mainColor }}
              className="material-symbols-outlined"
            >
              directions_walk
            </span>
            <SwitzerText
              sx={{ marginLeft: 1, fontSize: 12 }}
              text={"< 20 min"}
            />
          </Stack>
          <Stack direction={"row"} py={2}>
            <SwitzerText
              sx={{ marginLeft: 1, fontSize: 12, marginRight: 1 }}
              text={"Beach Walk"}
            />
            <span
              style={{ fontSize: 16, color: colors.mainColor }}
              className="material-symbols-outlined"
            >
              local_taxi
            </span>
            <SwitzerText
              sx={{ marginLeft: 1, fontSize: 12, marginRight: 1 }}
              text={"< 20 min"}
            />
            <span
              style={{ fontSize: 16, color: colors.mainColor }}
              className="material-symbols-outlined"
            >
              directions_bus
            </span>
            <SwitzerText
              sx={{ marginLeft: 1, fontSize: 12, marginRight: 1 }}
              text={"< 20 min"}
            />
            <span
              style={{ fontSize: 16, color: colors.mainColor }}
              className="material-symbols-outlined"
            >
              directions_walk
            </span>
            <SwitzerText
              sx={{ marginLeft: 1, fontSize: 12 }}
              text={"< 20 min"}
            />
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default AccessibleInformation;
