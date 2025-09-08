import arrowBack from "../assets/icons/arrow-back.png";
import arrowDown from "../assets/icons/arrow-down.png";
import arrowRight from "../assets/icons/arrow-right.png";
import bag from "../assets/icons/bag.png";
import check from "../assets/icons/check.png";
import clock from "../assets/icons/clock.png";
import dollar from "../assets/icons/dollar.png";
import envelope from "../assets/icons/envelope.png";
import home from "../assets/icons/home.png";
import location from "../assets/icons/location.png";
import logout from "../assets/icons/logout.png";
import minus from "../assets/icons/minus.png";
import pencil from "../assets/icons/pencil.png";
import person from "../assets/icons/person.png";
import phone from "../assets/icons/phone.png";
import plus from "../assets/icons/plus.png";
import search from "../assets/icons/search.png";
import star from "../assets/icons/star.png";
import trash from "../assets/icons/trash.png";
import user from "../assets/icons/user.png";

import avatar from "../assets/images/avatar.png";
import avocado from "../assets/images/avocado.png";
import bacon from "../assets/images/bacon.png";
import burgerOne from "../assets/images/burger-one.png";
import burgerTwo from "../assets/images/burger-two.png";
import buritto from "../assets/images/buritto.png";
import cheese from "../assets/images/cheese.png";
import coleslaw from "../assets/images/coleslaw.png";
import cucumber from "../assets/images/cucumber.png";
import emptyState from "../assets/images/empty-state.png";
import fries from "../assets/images/fries.png";
import loginGraphic from "../assets/images/login-graphic.png";
import logo from "../assets/images/logo.png";
import mozarellaSticks from "../assets/images/mozarella-sticks.png";
import mushrooms from "../assets/images/mushrooms.png";
import onionRings from "../assets/images/onion-rings.png";
import onions from "../assets/images/onions.png";
import pizzaOne from "../assets/images/pizza-one.png";
import salad from "../assets/images/salad.png";
import success from "../assets/images/success.png";
import tomatoes from "../assets/images/tomatoes.png";
// constants/index.ts

// ✅ Import all assets
import ps5 from "../assets/ps5.png";
import ps4Pro from "../assets/ps4-pro.png";
import ps3Slim from "../assets/ps3-slim.png";
import xboxSx from "../assets/xbox-sx.png";
import xboxOneS from "../assets/xbox-one-s.png";

import dsController from "../assets/ds-controller.png";
import ps4Controller from "../assets/ps4-controller.png";
import gamingHeadset from "../assets/gaming-headset.png";
import hdmi4k from "../assets/hdmi-4k.png";
import hdd2tb from "../assets/2tb-hdd.png";
import monitor from "../assets/monitor.png";

import gow from "../assets/gow.png";
import spidermanMiles from "../assets/spiderman-miles.png";
import theLastOfUs2 from "../assets/thelastofus2.png";
import uncharted4 from "../assets/uncharted4.png";
import got from "../assets/got.png";
import hfw from "../assets/hfw.png";
import granTurismo from "../assets/gran-turismo.png";

// ✅ Product Type
export type Product = {
  id: string;
  title: string;
  image: any;
  price: number;
  category: string;
};
// export type Offers = {
//   id: string;
//   title: string;
//   image: any;
//   color: string;
// };

export type Category = {
  id: string;
  title: string;
  image: any;
  filterKey: string; // key to filter shopProducts
};

const categoryList: Category[] = [
  {
    id: "cat1",
    title: "Consoles",
    image: ps5,
    filterKey: "console",
  },
  {
    id: "cat2",
    title: "PS4/PS5 Games",
    image: spidermanMiles,
    filterKey: "game",
  },
  {
    id: "cat3",
    title: "Accessories",
    image: dsController,
    filterKey: "accessory",
  },
  {
    id: "cat4",
    title: "Monitors",
    image: monitor,
    filterKey: "monitor",
  },
];

// 🔝 Top Selling (slider)
const topSellingSlides: Product[] = [
  {
    id: "ts1",
    title: "PlayStation 5",
    image: ps5,
    price: 499,
    category: "console",
  },
  {
    id: "ts2",
    title: "Marvel's Spider-Man: Miles Morales (PS5)",
    image: spidermanMiles,
    price: 49,
    category: "game",
  },
  {
    id: "ts3",
    title: "DualSense Wireless Controller",
    image: dsController,
    price: 69,
    category: "accessory",
  },
  {
    id: "ts4",
    title: "God of War Ragnarök (PS5)",
    image: gow,
    price: 59,
    category: "game",
  },
  {
    id: "ts5",
    title: "Xbox Series X",
    image: xboxSx,
    price: 499,
    category: "console",
  },
];

// 🛒 Shop Products (catalog)
const shopProducts: Product[] = [
  // Consoles
  {
    id: "p1",
    title: "PlayStation 4 Pro",
    image: ps4Pro,
    price: 399,
    category: "console",
  },
  {
    id: "p2",
    title: "PlayStation 3 Slim",
    image: ps3Slim,
    price: 199,
    category: "console",
  },
  {
    id: "p3",
    title: "Xbox One S",
    image: xboxOneS,
    price: 299,
    category: "console",
  },

  // Accessories
  {
    id: "p4",
    title: "PS4 DualShock Controller",
    image: ps4Controller,
    price: 59,
    category: "accessory",
  },
  {
    id: "p5",
    title: "Gaming Headset",
    image: gamingHeadset,
    price: 89,
    category: "accessory",
  },
  {
    id: "p6",
    title: "HDMI Cable 4K",
    image: hdmi4k,
    price: 19,
    category: "accessory",
  },
  {
    id: "p7",
    title: "2TB External Hard Disk",
    image: hdd2tb,
    price: 129,
    category: "storage",
  },
  {
    id: "p8",
    title: "Gaming Monitor 27”",
    image: monitor,
    price: 299,
    category: "monitor",
  },

  // Games
  {
    id: "p9",
    title: "The Last of Us Part II (PS4)",
    image: theLastOfUs2,
    price: 39,
    category: "game",
  },
  {
    id: "p10",
    title: "Uncharted 4: A Thief’s End (PS4)",
    image: uncharted4,
    price: 29,
    category: "game",
  },
  {
    id: "p11",
    title: "Ghost of Tsushima (PS4)",
    image: got,
    price: 39,
    category: "game",
  },
  {
    id: "p12",
    title: "Horizon Forbidden West (PS5)",
    image: hfw,
    price: 59,
    category: "game",
  },
  {
    id: "p13",
    title: "Gran Turismo 7 (PS5)",
    image: granTurismo,
    price: 59,
    category: "game",
  },
];  

// 🎁 Special Offers (Updated Color)
const offers = [
  {
    id: "o1",
    title: "Next-Gen Combo",
    image: ps5,
    color: "#8e6cef", // Soft rich purple
  },
  {
    id: "o2",
    title: "Pro Gamer Kit",
    image: dsController,
    color: "#2d6be5", // Deep royal purple (gaming/tech feel)
  },
  {
    id: "o3",
    title: "Get Your Gaming Bundle",
    image: spidermanMiles,
    color: "#d12929", // Dark crimson red (Spider-Man theme)
  },
  {
    id: "o4",
    title: "Accessories",
    image: monitor,
    color: "#7d8d2a", // Deep emerald teal
  },
];



// ✅ Export everything
export { topSellingSlides, offers, shopProducts , categoryList};

export const images = {
    avatar,
    avocado,
    bacon,
    burgerOne,
    burgerTwo,
    buritto,
    cheese,
    coleslaw,
    cucumber,
    emptyState,
    fries,
    loginGraphic,
    logo,
    mozarellaSticks,
    mushrooms,
    onionRings,
    onions,
    pizzaOne,
    salad,
    success,
    tomatoes,
    arrowBack,
    arrowDown,
    arrowRight,
    bag,
    check,
    clock,
    dollar,
    envelope,
    home,
    location,
    logout,
    minus,
    pencil,
    person,
    phone,
    plus,
    search,
    star,
    trash,
    user,
};

