import { createBrowserRouter } from "react-router";
import App from "../App";
import About from "../pages/About";
import ContactUs from "../pages/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
]);

export default router;
