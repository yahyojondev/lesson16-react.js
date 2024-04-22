import Home from "../pages/home/Home";
import Bags from "../pages/bags/Bags";
import Sneakers from "../pages/sneakers/Sneakers";
import Belt from "../pages/belt/Belt";
import Contact from "../pages/contact/Contact";

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
