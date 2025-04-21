import React from "react";
import { routes } from "./routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route
            path={route.path}
            element={<route.component />}
            key={route.path}
          >
            {route.subRoutes?.map((sub) => (
              <Route
                path={sub.path}
                element={
                    <sub.component />
                }
                key={sub.path}
              />
            ))}
          </Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
