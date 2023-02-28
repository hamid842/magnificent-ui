// Next.js
import Image from "next/image";

import { Box, ImageList, ImageListItem } from "@mui/material";
// import listOne from "../../../public/rent-place/list-1.jpeg";
// import listTwo from "../../../public/rent-place/list-2.png";
// import listThree from "../../../public/rent-place/list-3.png";
import listFour from "../../../public/rent-place/list-4.png";
import listFive from "../../../public/rent-place/list-5.png";
import listSix from "../../../public/rent-place/list-6.png";
import listSeven from "../../../public/rent-place/list-7.png";
// import listEight from "../../../public/rent-place/list-8.png";
// import listNine from "../../../public/rent-place/list-9.jpg";
// import listTen from "../../../public/rent-place/list-10.png";

const RentImageList = () => {
  return (
    <Box sx={{ width: "100%", height: "auto", overflowY: "hidden" }}>
      <ImageList variant="masonry" cols={2} gap={10}>
        {itemData.map((item: any) => (
          <ImageListItem key={item.img}>
            <Image
              src={item.img}
              width={100}
              height={100}
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
    title: "Blinds",
  },
  {
    img: listSix,
    title: "Chairs",
  },
  {
    img: listFour,
    title: "Kitchen",
  },
  {
    img: listSeven,
    title: "Laptop",
  },
  //   {
  //     img: listOne,
  //     title: "Bed",
  //   },
  //   {
  //     img: listTwo,
  //     title: "Books",
  //   },
  //   {
  //     img: listThree,
  //     title: "Sink",
  //   },
  //   {
  //     img: listEight,
  //     title: "Doors",
  //   },
  //   {
  //     img: listNine,
  //     title: "Doors",
  //   },
  //   {
  //     img: listTen,
  //     title: "Doors",
  //   },
];
