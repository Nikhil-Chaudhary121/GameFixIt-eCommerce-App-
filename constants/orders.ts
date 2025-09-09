// constants/orders.ts
import { images } from "./index";

 const orders = [
  {
    id: "ORD-2025-0001",
    date: "2025-09-08",
    status: "Delivered",
    total: 706.17,
    items: [
      { id: "prod-ps5", title: "PlayStation 5 Console", image: images },
      { id: "prod-dualsense", title: "DualSense Controller", image: images.dsController },
    ],
  },
  {
    id: "ORD-2025-0002",
    date: "2025-09-01",
    status: "Shipped",
    total: 329.99,
    items: [
      { id: "prod-spiderman2", title: "Spider-Man 2", image: images.spidermanMiles },
    ],
  },
  {
    id: "ORD-2025-0003",
    date: "2025-08-20",
    status: "Cancelled",
    total: 59.99,
    items: [
      { id: "prod-headset", title: "Pulse 3D Headset", image: images.gamingHeadset },
    ],
  },
];


const order = {
  id: "ORD-2025-0001",
  date: "2025-09-08",
  status: "Processing", // e.g. Pending, Shipped, Delivered, Cancelled
  items: [
    {
      id: "prod-ps5",
      title: "PlayStation 5 Console",
      variant: "1TB",
      color: "White",
      price: 499.99,
      quantity: 1,
      image: images.ps5,
    },
    {
      id: "prod-dualsense",
      title: "DualSense Wireless Controller",
      color: "Black",
      price: 69.99,
      quantity: 2,
      image: images.dsController,
    },
  ],
  shippingAddress: {
    name: "Nikhil Chaudhary",
    street: "221B Baker Street",
    city: "Jaipur",
    state: "RJ",
    postalCode: "302001",
    country: "India",
  },
  paymentMethod: "Credit Card",
  subtotal: 639.97,
  shipping: 15.0,
  tax: 51.2,
  discount: 0,
  total: 706.17,
};

export {orders , order}