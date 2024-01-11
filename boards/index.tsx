import Login from './Authentication/Login';
import LoginWithPhone from './Authentication/LoginWithPhone';
import Register from './Authentication/Register';
import Reset from './Authentication/Reset';
import LoadingApp from './Global/LoadingApp';
import LoadingUser from './Global/LoadingUser';
import Introduction from './Introduction/Introduction';
import Welcome from './Introduction/Welcome';
import FunctionsTest from './Templates/FunctionsTest';
import Home2 from './Templates/Home2';

import { Boards } from './index.types';

const boards: Boards = {
  Splash: <Login />,
  LoadingApp: <LoadingApp />,
  LoadingUser: <LoadingUser />,
  Login: <Login />,
  LoginByPhone: <LoginWithPhone />,
  Register: <Register />,
  Reset: <Reset />,
  Feed: <FunctionsTest />,
  Home: <Home2 />,
  Introduction: <Introduction />,
  Welcome: <Welcome />,
}

export default boards;

