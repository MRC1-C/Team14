import HomeImage from '../image/HomeImage.svg';
import AccountImage from "../image/AccountImage.svg";
import Home from "../screens/Home";
import Auth from "../screens/Auth";
import AuthPassword from "../screens/Auth/AuthPassword";



export const tabs = [
  {
    name: "Home",
    component: Home,
    icon: HomeImage,
  },
  {
    name: "Accout",
    component: Auth,
    icon: AccountImage,
  }
];

export const screens = [
  {
    name: 'AuthPassword',
    component: AuthPassword
  },
];


export const screensTransparent = [
  // {
  //   name: 'AuthPass',
  //   component: Auth
  // }
]