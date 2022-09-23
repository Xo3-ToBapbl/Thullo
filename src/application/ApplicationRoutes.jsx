import Root from "../pages/root/Root";
import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/login/LoginPage";
import SignupPage from "../pages/signup/SignupPage";
import { routeNames } from "../resources/constants/routeNames";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function ApplicationRoutes() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path={routeNames.root} element={<Root/>}>
        <Route path={routeNames.home} element={<HomePage/>}/>
        <Route path={routeNames.signup} element={<SignupPage/>}/>
        <Route path={routeNames.login} element={<LoginPage/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}