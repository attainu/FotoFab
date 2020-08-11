import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";
import PublicUserProfilePage from "./pages/publicUserProfilePage";
import MobileNavigation from "./components/MobileNavigation";
import AboutPage from "./pages/AboutPage";
function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/search/:searchQuery" component={SearchPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route
            exact
            path="/public/:username"
            component={PublicUserProfilePage}
          />
          <Redirect to="/" />
        </Switch>
        <MobileNavigation />
      </>
    </BrowserRouter>
  );
}

export default App;
