import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/home/home";
import { User } from "./components/pages/user/user";
import { Login } from "./components/pages/login/login";
import { CreateProf } from "./components/pages/CreateProfile/createprofile";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Profile } from "./components/pages/Profile/profile";
import GlobalContext from "./context";
import { Header } from "./components/header/header";
import { Menu } from "./components/pages/Menu/menu";
import { CreateMenu } from "./components/pages/CreateMenu/createmenu";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bgGradient: "linear(62deg, #FBAB7E 0%, #F7CE68 100%)",
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalContext>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<User />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create" element={<CreateProf />} />
            <Route path="/profile/update/:id" element={<CreateProf />} />
            <Route path="/menu/create/:id" element={<CreateMenu />} />
            <Route path="/menu/find/:id" element={<Menu />} />
            <Route path="/menu/update/:id" element={<CreateMenu />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </GlobalContext>
  </React.StrictMode>
);
