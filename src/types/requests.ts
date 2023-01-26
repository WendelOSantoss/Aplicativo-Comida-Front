export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
  user: User;
};

export type User = {
  name: string;
  email: string;
  password: string;
  cpf: string;
};

export type LoginProfile = {
  id: string;
  name: string;
  image: string;
  type: string;
  adress: string;
  restaurantId?: string[];
  consumerId?: string[];
};

export type ProfileCreate = {
  name: string;
  image: string;
  type: string;
  adress: string;
  restaurantId?: string[];
  consumerId?: string[];
};

export type ProfileUpdate = {
  id: string;
  name: string;
  image: string;
  type: string;
  adress: string;
  restaurantId?: string[];
  consumerId?: string[];
};
