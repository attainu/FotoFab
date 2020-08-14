import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";
import PublicUserProfilePage from "./pages/publicUserProfilePage";
import AboutPage from "./pages/AboutPage";
import CollectionPage from "./pages/CollectionPhotos";
import DetailPage from "./pages/DetailPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signUp" component={SignUpPage} />
        <Route exact path="/profile/:username" component={ProfilePage} />
        <Route exact path="/search/:searchQuery" component={SearchPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/collection/:id" component={CollectionPage} />
        <Route exact path="/detailPage/:id" component={DetailPage} />
        <Route
          exact
          path="/public/:username"
          component={PublicUserProfilePage}
        />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
