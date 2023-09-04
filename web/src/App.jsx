import React, { Suspense, lazy } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Route, Routes } from "react-router-dom";

import Loading from "./components/Loading";
const FrontLayout = lazy(() => import("./layouts/frontend/FrontLayout"));
import Home from "./views/Home";
import Profile from "./views/Profile";

// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const App = () => {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<FrontLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
