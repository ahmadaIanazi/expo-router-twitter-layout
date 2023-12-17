import Login from './Authentication/Login';
import LoginWithPhone from './Authentication/LoginWithPhone';
import Register from './Authentication/Register';
import Reset from './Authentication/Reset';
import Introduction from './Introduction/Introduction';
import FunctionsTest from './Templates/FunctionsTest';
import Home2 from './Templates/Home2';

import { Boards } from './index.types';

const boards: Boards = {
  Login: <Login />,
  LoginWithPhone: <LoginWithPhone />,
  Register: <Register />,
  Reset: <Reset />,
  Feed: <FunctionsTest />,
  Home: <Home2 />,
  Introduction: <Introduction />,
};

export default boards;

