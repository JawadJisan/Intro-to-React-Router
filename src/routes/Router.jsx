import { createBrowserRouter } from "react-router";
import App from "../App";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
import HomeLayout from "../components/layout/HomeLayout";
import DashboardLayout from "../components/layout/DashboardLayout";
import DashboardHome from "../pages/DashboardHome";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import NotFound from "../components/NotFound";
import NotFoundDashboard from "../components/DashboardNotFound";

// Simple Basic Routes
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: "/contact-us",
//     element: <ContactUs />,
//   },
// ]);

// Nested Routes
const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      { index: true, Component: App },
      { path: "about", Component: About },
      { path: "contact-us", Component: ContactUs },
      { path: "*", Component: NotFound },
    ],
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      { index: true, Component: DashboardHome },
      { path: "profile", Component: Profile },
      { path: "settings", Component: Settings },
      { path: "*", Component: NotFoundDashboard },
    ],
  },
]);

export default router;
