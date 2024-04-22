import Home from "../pages/home/Home";
import Bags from "../pages/bags/Bags";
import Sneakers from "../pages/sneakers/Sneakers";
import Belt from "../pages/belt/Belt";
import Contact from "../pages/contact/Contact";
import img1 from "../assets/images/cardimg1.png";
import img2 from "../assets/images/cardimg2.png";
import img3 from "../assets/images/cardimg3.png";
import img4 from "../assets/images/cardimg4.png";
import img5 from "../assets/images/cardimg5.png";
import img6 from "../assets/images/cardimg6.png";
import img7 from "../assets/images/cardimg6.png";
import img8 from "../assets/images/cardimg8.png";
import stars from "../assets/images/stars.svg";

export const Routers = [
  {
    id: 1,
    path: "/",
    title: "Home",
    Element: <Home />,
  },
  {
    id: 2,
    path: "/bags",
    title: "Bags",
    Element: <Bags />,
  },
  {
    id: 3,
    path: "/Sneakers",
    title: "Sneakers",
    Element: <Sneakers />,
  },
  {
    id: 4,
    path: "/belt",
    title: "Belt",
    Element: <Belt />,
  },
  {
    id: 5,
    path: "/contact",
    title: "Contact",
    Element: <Contact />,
  },
];

export const cardsproduct = [
  {
    id: 1,
    img: img1,
    title: "Nike Air Max 270 React",
    imgstars: stars,
    price: "$299.43",
    delprice: "$534.33",
    modtext: "24% of",
  },
  {
    id: 2,
    img: img2,
    title: "Nike Air Max 270 React",
    imgstars: stars,
    price: "$299.43",
    delprice: "$534.33",
    modtext: "24% of",
  },
  {
    id: 3,
    img: img3,
    title: "Nike Air Max 270 React",
    imgstars: stars,
    price: "$299.43",
    delprice: "$534.33",
    modtext: "24% of",
  },
  {
    id: 4,
    img: img4,
    title: "Nike Air Max 270 React",
    imgstars: stars,
    price: "$299.43",
    delprice: "$534.33",
    modtext: "24% of",
  },
  {
    id: 5,
    img: img5,
    title: "Nike Air Max 270 React",
    imgstars: stars,
    price: "$299.43",
    delprice: "$534.33",
    modtext: "24% of",
  },
  {
    id: 6,
    img: img6,
    title: "Nike Air Max 270 React",
    imgstars: stars,
    price: "$299.43",
    delprice: "$534.33",
    modtext: "24% of",
  },
  {
    id: 7,
    img: img7,
    title: "Nike Air Max 270 React",
    imgstars: stars,
    price: "$299.43",
    delprice: "$534.33",
    modtext: "24% of",
  },
  {
    id: 8,
    img: img8,
    title: "Nike Air Max 270 React",
    imgstars: stars,
    price: "$299.43",
    delprice: "$534.33",
    modtext: "24% of",
  },
];
