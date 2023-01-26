import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./global-styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/home/home";
import { User } from "./components/pages/user/user";
import { Login } from "./components/pages/login/login";
import { CreateProf } from "./components/pages/CreateProfile/createprofile";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
      <header/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<User />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create" element={<CreateProf />} />
          <Route path="/profile/update/:id" element={<CreateProf />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </ChakraProvider>
  </React.StrictMode>
);
