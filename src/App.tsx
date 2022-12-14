import React from "react";
import "./styles/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/Home";
import AuthenticationPage from "./pages/auth/Authentication";
import Sidebar from "./components/sidebar/Sidebar";
import PostCreationPage from "./pages/post-creation/PostCreation";
import ProfilePage from "./pages/profile/Profile";
import MessengerPage from "./pages/messenger/Messenger";
import SearchPage from "./pages/search/Search";

export interface IApplicationProps {}

const App: React.FunctionComponent<IApplicationProps> = (props) => {
  return (
    <BrowserRouter>
      <Sidebar></Sidebar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthenticationPage />} />
        <Route path="/add_post" element={<PostCreationPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/messages" element={<MessengerPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
