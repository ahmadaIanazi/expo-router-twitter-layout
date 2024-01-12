import Login from './Authentication/Login';
import LoginWithPhone from './Authentication/LoginWithPhone';
import Register from './Authentication/Register';
import Reset from './Authentication/Reset';
import LoadingApp from './Global/LoadingApp';
import LoadingUser from './Global/LoadingUser';
import Missing from './Global/Missing';
import Splash from './Global/Splash';
import Introduction from './Introduction/Introduction';
import Welcome from './Introduction/Welcome';
import Alerts from './Others/Alerts';
import Settings from './Settings/Settings';
import HeadphonesCarouselExample from './Templates/ExampleAnimated';
import FunctionsTest from './Templates/FunctionsTest';
import Home2 from './Templates/Home2';
import SecondTabExample from './Templates/SecondTabExample';

const boards = {
  Splash: <Splash />,
  Missing: <Missing />,
  LoadingApp: <LoadingApp />,
  LoadingUser: <LoadingUser />,
  Login: <Login />,
  LoginByPhone: <LoginWithPhone />,
  Register: <Register />,
  Reset: <Reset />,
  Feed: <FunctionsTest />,
  Action: <FunctionsTest />,
  Activity: <FunctionsTest />,
  Home: <Home2 />,
  profile: <SecondTabExample />,
  Introduction: <Introduction />,
  Welcome: <Welcome />,
  Popup: <HeadphonesCarouselExample />,
  Settings: <Settings />,
  Alerts: <Alerts />
}

export default boards;

