import HomeImage from '../image/HomeImage.svg';
import AccountImage from "../image/AccountImage.svg";
import Accout from "../screens/Accout";
import Home from "../screens/Home";

export const tabs = [
  {
    name: "Home",
    component: Home,
    icon: HomeImage,
  },
  {
    name: "Accout",
    component: Accout,
    icon: AccountImage,
  }
];

export const screens = [
//   {
//     name: "FashionSocial",
//     component: FashionSocial,
//   },
];


// export const screensTransparent = [
//   {
//     name: "ProductDetail",
//     component: ProductDetail,
//   },
//   {
//     name: 'Auth',
//     component: Auth
//   },
//   {
//     name: "SocialDetail",
//     component: SocialDetail,
//   },
//   {
//     name: 'EditImage',
//     component: EditImage
//   }
// ]