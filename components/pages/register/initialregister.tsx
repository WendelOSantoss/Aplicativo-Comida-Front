import { Flex, Stack } from "@chakra-ui/react";
import { addPointerInfo } from "framer-motion";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const [viewPassword, setViewPassword] = useState<boolean>(false);
const navigate = useNavigate();

const handleShowClick = () => setViewPassword(viewPassword);

async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const newUser = {
    name: event.currentTarget.name.valueOf,
    password: event.currentTarget.password.valueOf,
    cpf: event.currentTarget.cpf.valueOf,
    email: event.currentTarget.email.valueOf,
  };

  const userData = await api.initialregisterUser(newUser);
  if (userData) {
    navigate("/login");
  }
}
return(
    <div>register</div>
)
<Flex
flexDirection="column"
height = "100vh"
justifyContent="center"
alignItems="center"
>


    