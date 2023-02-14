import axios from "axios";
import Swal from "sweetalert";
import {
  ProfileCreate,
  LoginRequest,
  User,
  ProfileUpdate,
  LoginResponse,
  Menus,
  MenusRequest,
} from "../../types/requests";

axios.defaults.baseURL = "https://projetomod5-production.up.railway.app/";

https: axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("token");

axios.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer  ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (config) {
    return config;
  },
  function (error) {
    if (error.response.status === 401) {
      if (localStorage.getItem("token")) localStorage.removeItem("token");
    }
  }
);
function handleError(text: string, description: string) {
  Swal({
    title: text,
    text: description,
    icon: "warning",
    timer: 5000,
  });
}

export const api = {
  CreateUser: async (user: FormData): Promise<User | undefined> => {
    try {
      const userCreate = await axios.post("/user", user);
      return userCreate.data;
    } catch (err: any) {
      handleError("Erro ao registrar o usuário", err.response.data.message);
    }
  },
  login: async (
    loginData: LoginRequest
  ): Promise<LoginResponse | undefined> => {
    try {
      const login = await axios.post("/auth/login/email", loginData);
      localStorage.setItem("token", login.data.token);
      return login.data;
    } catch (err: any) {
      handleError(
        "Email ou senha incorretos tente novamente",
        err.response.data.message[0]
      );
    }
  },

  getProfiles: async (): Promise<ProfileUpdate[] | undefined> => {
    try {
      const profiles = await axios.get("/profile", {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });
      return profiles.data;
    } catch (err: any) {
      handleError(
        "Erro no servidor",
        "Erro no servidor tente novamente em alguns instantes"
      );
    }
  },
  ProfileDelete: async (profileId: string): Promise<boolean | undefined> => {
    try {
      const isDeleted = await axios.delete("/profile/delete/" + profileId, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });
      if (isDeleted.status === 200) {
        return true;
      }
    } catch (err: any) {
      handleError(
        "Erro ao deletar perfil",
        "Ocorreu um erro ao deletar, por favor tente novamente mais tarde!"
      );
    }
  },
  CreateProfile: async (
    profile: ProfileCreate
  ): Promise<ProfileUpdate | undefined> => {
    try {
      const newTeam = await axios.post("/profile", profile, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });
      return newTeam.data;
    } catch (err: any) {
      console.log(err);
      handleError("Erro ao criar o perfil", err.response.data.message[0]);
    }
  },
  getProfileById: async (
    profileId: string
  ): Promise<ProfileUpdate | undefined> => {
    try {
      const teams = await axios.get("/profile/find/" + profileId, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });
      return teams.data;
    } catch (err) {
      handleError(
        "Perfil não encontrado",
        "Nenhum perfil com esse id foi encontrado no servidor"
      );
    }
  },
  UpdateProfile: async (
    profile: ProfileUpdate
  ): Promise<ProfileUpdate | undefined> => {
    try {
      const updatedProfile = await axios.patch("/profile/update", profile, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });
      return updatedProfile.data;
    } catch (err: any) {
      handleError("Erro ao atualizar o perfil", err.response.data.message[0]);
    }
  },

  getMenuById: async (menuId: string): Promise<Menus | undefined> => {
    try {
      const menu = await axios.get("/menu/find/" + menuId, {
        headers: { Authorization: "Bearer" + localStorage.getItem("token") },
      });
      return menu.data;
    } catch (err) {
      handleError(
        "Cardápio não encontrado",
        "Procurar por outro id, pois com este não foi encontrado"
      );
    }
  },

  createMenu: async (menu: MenusRequest): Promise<Menus | undefined> => {
    try {
      const newMenu = await axios.post("/menu/create", menu, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });
      return newMenu.data;
    } catch (err: any) {
      console.log(err);
      handleError("Erro ao criar o cardápio", err.response.data.message[0]);
    }
  },

  updateMenu: async (menu: Menus): Promise<Menus | undefined> => {
    try {
      const updatedMenu = await axios.patch("/menu/update", menu, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });
      return updatedMenu.data;
    } catch (err: any) {
      handleError("Erro ao atualizar o cardápio", err.response.data.message[0]);
    }
  },

  getAllMenu: async (): Promise<Menus[] | undefined> => {
    try {
      const menus = await axios.get("/menu", {
        headers: { Authorization: "Bearer" + localStorage.getItem("token") },
      });
      return menus.data;
    } catch (err: any) {
      handleError("Erro", "Tentar novamente");
    }
  },
  MenuDelete: async (menuId: string): Promise<boolean | undefined> => {
    try {
      const isDeleted = await axios.delete("/menu/delete" + menuId, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      });
      if (isDeleted.status === 200) {
        return true;
      }
    } catch (err: any) {
      handleError(
        "Erro ao deletar menu",
        "Ocorreu um erro ao deletar, por favor tente novamente mais tarde!"
      );
    }
  },
};
