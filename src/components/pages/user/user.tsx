import { useState } from "react";
import {
  Flex,
  Input,
  Button,
  InputGroup,
  Stack,
  Box,
  FormControl,
  InputRightElement,
  FormLabel,
} from "@chakra-ui/react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { api } from "../../../utils/api/api";

export function User() {
  const [viewPassword, setViewPassword] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleShowClick = () => setViewPassword(!viewPassword);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newUser = new FormData(event.currentTarget);

    const userData = await api.CreateUser(newUser);

    if (userData) {
      navigate("/");
    }
  }

  return (
    <Flex
      flexDirection="column"
      height="100%"
      justifyContent="center"
      alignItems="center"
      margin="20px"
    >
      <Stack mb="6">
        <Box minW={{ md: "500px" }}>
          <form onSubmit={handleSubmit}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
              borderRadius={14}
            >
              <FormLabel htmlFor="name">Nome:</FormLabel>
              <Input
                borderRadius={10}
                type="name"
                placeholder="name"
                name="name"
                required
              />

              <FormLabel htmlFor="email">Email:</FormLabel>
              <Input
                borderRadius={10}
                type="email"
                placeholder="email"
                name="email"
                required
              />
              <FormLabel htmlFor="text">CPF:</FormLabel>
              <Input
                borderRadius={10}
                type="text"
                placeholder="cpf"
                name="cpf"
                required
              />
              <FormControl>
                <FormLabel htmlFor="password">Senha:</FormLabel>
                <InputGroup>
                  <Input
                    type={viewPassword ? "text" : "password"}
                    name="password"
                    placeholder="Senha"
                    required
                    borderRadius={10}
                  />

                  <InputRightElement width="3rem">
                    <Button
                      h="1.75rem"
                      size="1"
                      bg="none"
                      onClick={handleShowClick}
                    >
                      {viewPassword ? (
                        <AiFillEyeInvisible size={30} />
                      ) : (
                        <AiFillEye size={30} />
                      )}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Button
                  borderRadius={20}
                  type="submit"
                  variant="solid"
                  colorScheme="blue"
                  color="black"
                  backgroundColor="rgba(66, 153, 225, 0.6)"
                >
                  Cadastrar
                </Button>
              </Box>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
