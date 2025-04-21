import Page from "../components/Page";
import SignIn from "../pages/Authentication/SignIn";
import SignUp from "../pages/Authentication/SignUp";
import Overview from "../pages/StudentPortal/Overview";
import Task from "../pages/StudentPortal/Task";
export const routes = [
  {
    name: "portfolio",
    path: "/",
    component: Page,
    subRoutes: [
      {
        name: "overview",
        path: "overview",
        component: Overview,
      },
      {
        name: "task",
        path: "task",
        component: Task,
      },
    ],
  },
];
