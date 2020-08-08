import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";
import publicUserProfilePage from "./pages/publicUserProfilePage";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/search/:searchQuery" component={SearchPage} />
          <Route
            exact
            path="/public/:username"
            component={publicUserProfilePage}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
