import { FormEvent, useState } from "react";
import { StyledForm, StyledLoginForm } from "./styles";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { api } from "../../../src/utils/api/api";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  function handleShowPassword() {
    setShowPassword(!showPassword);
  }
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const loginPayload = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };
    const userData = await api.login(loginPayload);
  }

  return (
    <StyledLoginForm>
      <h2>Login</h2>
      <StyledForm onSubmit={handleSubmit}>
        <input placeholder="E-mail" name="email" required />
        <div>
          <input
            placeholder="Senha"
            type={showPassword ? "text" : "password"}
            name="password"
            required
          />
          <button onClick={handleShowPassword}>
            {showPassword ? (
              <BsEyeSlashFill size={25} />
            ) : (
              <BsEyeFill size={25} />
            )}
          </button>
        </div>
        <button type="submit">Login</button>
      </StyledForm>
    </StyledLoginForm>
  );
}
