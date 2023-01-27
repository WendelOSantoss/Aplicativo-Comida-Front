import { FormEvent, useState } from "react";
import { StyledForm, StyledLoginForm } from "./styles";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Loading } from "../loading/loading";
import { api } from "../../../utils/api/api";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();
  function handleShowPassword() {
    setShowPassword(!showPassword);
  }
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const loginPayload = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };
    console.log(loginPayload);
    const userData = await api.login(loginPayload);
    console.log(userData);
    setLoading(false);
    if (!userData) {
      setError(true);
      return;
    }
    navigate("/home");
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <StyledLoginForm>
          <h2>Login</h2>
          <StyledForm onSubmit={handleSubmit} error={error}>
            <input placeholder="E-mail" name="email" required />
            <div>
              <input
                placeholder="Senha"
                type={showPassword ? "text" : "password"}
                name="password"
                required
              />
              <button type="button" onClick={handleShowPassword}>
                {showPassword ? (
                  <BsEyeSlashFill size={25} />
                ) : (
                  <BsEyeFill size={25} />
                )}
              </button>
            </div>
            <button type="submit">Login</button>
          </StyledForm>
          <button
            onClick={() => {
              navigate("/register");
            }}
          >
            Registre-se
          </button>
        </StyledLoginForm>
      )}
    </>
  );
}
