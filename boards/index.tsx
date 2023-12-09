import * as Board from './imports';
import { Boards } from './index.types';

const boards: Boards = {
  Login: <Board.Login />,
  LoginWithPhone: <Board.LoginWithPhone />,
  Register: <Board.Register />,
  Reset: <Board.Reset />,
  Feed: <Board.Home2 />,
  Home: <Board.Home2 />,
  Introduction: <Board.Introduction />,
};

export default boards;

