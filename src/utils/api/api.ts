import axios from "axios";
import {
  ProfileCreate,
  LoginProfile,
  LoginRequest,
  User,
  ProfileUpdate,
} from "../../types/requests";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.headers.post["Content-Type"] = "application/json";

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

export const api = {
  login: async ({ email, password }: LoginRequest) => {
    try {
      const response = await axios.post("/auth/login/email", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (err) {
      alert(err);
    }
  },

  CreateUser: async (user: FormData): Promise<User | undefined> => {
    try {
      const userCreate = await axios.post("/user", user);
      return userCreate.data;
    } catch (err) {
      alert(err);
    }
  },

  CreateProfile: async (
    profile: ProfileCreate
  ): Promise<ProfileUpdate | undefined> => {
    try {
      const profileCreate = await axios.post("/profile", profile);
      return profileCreate.data;
    } catch (err) {
      alert(err);
    }
  },

  UpdateProfile: async (
    profile: ProfileUpdate
  ): Promise<ProfileUpdate | undefined> => {
    try {
      const updatedProfile = await axios.patch("/profile/update", profile);
      return updatedProfile.data;
    } catch (err) {
      alert(err);
    }
  },

  ProfileDelete: async (id: string): Promise<boolean | undefined> => {
    try {
      const isDeleted = await axios.delete("/profile/delete/" + id);
      if (isDeleted.status === 200) {
        return true;
      }
    } catch (err) {
      alert(err);
    }
  },
  getProfileById: async (id: string): Promise<ProfileUpdate | undefined> => {
    try {
      const profileid = await axios.get("/profile/find/" + id);
      return profileid.data;
    } catch (err) {
      alert(err);
    }
  },
  getProfiles: async (): Promise<ProfileUpdate[] | undefined> => {
    try {
      const allprofiles = await axios.get("/profile");
      return allprofiles.data;
    } catch (err) {
      alert(err);
    }
  },
};
