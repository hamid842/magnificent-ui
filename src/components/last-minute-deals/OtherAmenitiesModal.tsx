import {useEffect, useRef, useState} from "react";
// Material-ui
import {Button, Dialog, DialogActions, DialogContent, DialogProps, DialogTitle, Divider, Grid,} from "@mui/material";
// Project imports
import EuclidText from "@/components/css-texts/EuclidText";
import colors from "@/assets/colors";
import {euclidFont} from "@/assets/fonts";
import SwitzerText from "@/components/css-texts/SwitzerText";
import AmenityIconAndTitle from "@/components/global/AmenityIconAndTitle";
import {IAmenitiesAttributes} from "@/utils/property-type";

type Props = {
    data?: IAmenitiesAttributes[];
};

const OtherAmenitiesModal = ({data}: Props) => {
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState<DialogProps["scroll"]>("body");

    const kitchenFeatures = data?.filter((el: any) => el.category === "kitchen");
    const bathFeatures = data?.filter((el: any) => el.category === "bath");
    const bedroomFeatures = data?.filter((el: any) => el.category === "bedroom");
    const lobbyFeatures = data?.filter((el: any) => el.category === "lobby");
    const parkingFeatures = data?.filter((el: any) => el.category === "parking");
    const outdoorFeatures = data?.filter((el: any) => el.category === "outdoor");
    const othersFeatures = data?.filter((el: any) => el.category === null);

    const handleClickOpen = () => {
        setOpen(true);
        setScroll("body");
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = useRef<HTMLElement>(null);
    useEffect(() => {
        if (open) {
            const {current: descriptionElement} = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <div>
            <Button
                sx={{
                    textTransform: "none",
                    color: colors.mainColor,
                    fontWeight: 600,
                    fontSize: 12,
                }}
                className={euclidFont.className}
                onClick={handleClickOpen}
            >
                show All
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">
                    <EuclidText
                        align={"center"}
                        sx={{fontSize: 16, fontWeight: 600}}
                        text={"The other amenities this place have:"}
                    />
                </DialogTitle>
                <DialogContent dividers={scroll === "paper"}>
                    <SwitzerText
                        sx={{fontWeight: 600, fontSize: 14, mt: 1}}
                        text={"Kitchen"}
                    />
                    <Divider/>
                    <Grid container my={1} spacing={1}>
                        {kitchenFeatures?.map((item: any) => (
                            <AmenityIconAndTitle
                                key={item.name}
                                title={item.name}
                                icon={item.icon ? item.icon : "tv"}
                            />
                        ))}
                    </Grid>
                    <SwitzerText
                        sx={{fontWeight: 600, fontSize: 14, mt: 1}}
                        text={"Bathroom"}
                    />
                    <Divider/>
                    <Grid container my={1} spacing={1}>
                        {bathFeatures?.map((item: any) => (
                            <AmenityIconAndTitle
                                key={item.name}
                                title={item.name}
                                icon={item.icon ? item.icon : "tv"}
                            />
                        ))}
                    </Grid>
                    <SwitzerText
                        sx={{fontWeight: 600, fontSize: 14, mt: 1}}
                        text={"Bedroom"}
                    />
                    <Divider/>
                    <Grid container my={1} spacing={1}>
                        {bedroomFeatures?.map((item: any) => (
                            <AmenityIconAndTitle
                                key={item.name}
                                title={item.name}
                                icon={item.icon ? item.icon : "tv"}
                            />
                        ))}
                    </Grid>
                    <SwitzerText
                        sx={{fontWeight: 600, fontSize: 14, mt: 1}}
                        text={"Facilities"}
                    />
                    <Divider/>

                    <SwitzerText
                        sx={{fontWeight: 600, fontSize: 14, mt: 1}}
                        text={"Others"}
                    />
                    <Divider/>
                    <Grid container my={1} spacing={1}>
                        {othersFeatures?.map((item: any) => (
                            <AmenityIconAndTitle
                                key={item.name}
                                title={item.name}
                                icon={item.icon ? item.icon : "tv"}
                            />
                        ))}
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button
                        sx={{
                            textTransform: "none",
                            color: colors.mainColor,
                            fontWeight: 600,
                            fontSize: 14,
                        }}
                        onClick={handleClose}
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
export default OtherAmenitiesModal;
