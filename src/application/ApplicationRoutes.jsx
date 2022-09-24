import PageLoader from "../components/shared/loaders/PageLoader";
import { routeNames } from "../resources/constants/routeNames";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Root = lazy(() => import("../pages/root/Root"));
const Home = lazy(() => import("../pages/home/HomePage"));
const Login = lazy(() => import("../pages/login/LoginPage"));
const Signup = lazy(() => import("../pages/signup/SignupPage"));
const Projects = lazy(() => import("../pages/projects/ProjectsPage"));

export default function ApplicationRoutes() {
  return(
    <BrowserRouter>
      <Suspense fallback={<PageLoader/>}>
        <Routes>
          <Route path={routeNames.root} element={<Root />}>
            <Route path={routeNames.home} element={<Home />}/>
            <Route path={routeNames.login} element={<Login />}/>
            <Route path={routeNames.signup} element={<Signup />}/>
            <Route path={routeNames.projects} element={<Projects />}/>
          </Route>
        </Routes>
      </Suspense>
  </BrowserRouter>
  );
}