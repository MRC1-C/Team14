import HomeImage from '../image/HomeImage.svg';
import AccountImage from "../image/AccountImage.svg";
import Home from "../screens/Home";
import Auth from "../screens/Auth";
import AuthPassword from "../screens/Auth/AuthPassword";
import Account from '../screens/Account';
import Recharge from '../screens/Recharge';
import Post from '../screens/Post';
import Friends from '../screens/Friends';
import Notification from '../screens/Notification';
import BTVN from '../screens/BTVN';



export const tabs = [
  {
    name: "Home",
    component: Home,
    icon: HomeImage,
  },
  {
    name: "Friends",
    component: Friends,
    icon: AccountImage,
  },
  {
    name: "Notification",
    component: Notification,
    icon: AccountImage,
  },
  {
    name: "Account",
    component: Account,
    icon: AccountImage,
  },
  {
    name: "BTVN",
    component: BTVN,
    icon: AccountImage,
  },
];

export const screens = [
  {
    name: 'AuthPassword',
    component: AuthPassword
  },
  {
    name: 'Auth',
    component: Auth
  },
  {
    name: 'Recharge',
    component: Recharge
  },
  {
    name: 'Post',
    component: Post
  },
];


export const screensTransparent = [
  // {
  //   name: 'AuthPass',
  //   component: Auth
  // }
]