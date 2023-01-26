export type LoginRequest = {
  email: string;
  password: string;
};


export type LoginResponse{
token: string;
user: User;
}

export type User = {
  name: string;
  email: string;
  password: string;
  cpf: string;
};


