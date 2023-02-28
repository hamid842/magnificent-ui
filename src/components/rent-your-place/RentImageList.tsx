// Next.js
import Image from "next/image";

import { Box, ImageList, ImageListItem } from "@mui/material";
import listFour from "../../../public/rent-place/list-1.jpeg";
import listFive from "../../../public/rent-place/list-2.jpeg";
import listSix from "../../../public/rent-place/list-3.jpeg";
import listSeven from "../../../public/rent-place/list-4.jpeg";

const RentImageList = () => {
  return (
    <Box sx={{ width: "100%", height: "auto", overflowY: "hidden" }}>
      <ImageList variant="masonry" cols={2} gap={10}>
        {itemData.map((item: any) => (
          <ImageListItem key={item.img}>
            <Image
              src={item.img}
              width={800}
              height={600}
              alt={item.title}
              style={{ width: "100%", height: "auto", borderRadius: 5 }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};
export default RentImageList;

const itemData = [
  {
    img: listFive,
    title: "One",
  },
  {
    img: listSix,
    title: "Two",
  },
  {
    img: listFour,
    title: "Three",
  },
  {
    img: listSeven,
    title: "Four",
  },
];
