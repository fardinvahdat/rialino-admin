import AuthModule from "./models/auth";
import UsersModule from "./models/users";
import DashboardModule from "./models/dashboard";
import Purchases from "./models/purchase";
import Orders from "./models/orders";

const UseApi = {
  Auth: new AuthModule(),
  Users: new UsersModule(),
  Dashboard:new DashboardModule(),
  Purchases:new Purchases(),
  Orders:new Orders()
};
export default UseApi;
