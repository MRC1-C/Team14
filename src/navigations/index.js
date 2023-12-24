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
import Setting from '../screens/Setting';
import Video from '../screens/Video';
import CreateProfile from '../screens/CreateProfile';
import EditProfile from '../screens/EditProfile';
import ImageSeen from '../screens/Image';
import Personal from '../screens/Personal';
export const tabs = [
  {
    name: "Home",
    component: Home,
    icon: HomeImage,
  },
  {
    name: "Video",
    component: Video,
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
  }
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
  {
    name: 'Setting',
    component: Setting
  },
  {
    name: 'CreateProfile',
    component: CreateProfile
  },
  {
    name: 'EditProfile',
    component: EditProfile
  },
  {
    name: 'Personal',
    component: Personal
  }
];


export const screensTransparent = [
  {
    name: 'Image',
    component: ImageSeen
  }
]