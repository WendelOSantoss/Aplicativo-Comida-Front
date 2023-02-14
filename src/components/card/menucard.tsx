import {
  Box,
  Button,
  ButtonGroup,
  CardFooter,
  Center,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Menus } from "../../types/requests";
import { api } from "../../utils/api/api";

interface CardProps {
  menu: Menus;
  updatePage: () => void;
}

export function CardMenu({ menu, updatePage }: CardProps) {
  const navigate = useNavigate();
  async function CardDelete() {
    Swal.fire({
      title: "Aviso!",
      text: "Quer deletar seu menu?",
      icon: "error",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, pode deletar",
    }).then(async (res) => {
      if (res) {
        const deleted = await api.MenuDelete(menu.id);
        Swal.fire("Seu perfil foi deletado com sucesso!");
        if (deleted) {
          updatePage();
        }
      }
    });
  }

  return (
    <>
      <Center py={6}>
        <Box
          maxW={"445px"}
          w={"full"}
          bg="white"
          boxShadow={"2xl"}
          rounded={"md"}
          p={6}
          overflow={"hidden"}
        >
          <Stack>
            <Heading color="gray.700" fontSize={"2xl"} fontFamily={"body"}>
              {menu.foodName}
            </Heading>
            <Text color={"gray.500"}>Acompanhamento: {menu.accompaniment}</Text>
            <Text color={"gray.500"}>Preço: {menu.price}</Text>
          </Stack>
          <CardFooter display="flex" justifyContent="center">
            <ButtonGroup spacing="2" mt="4">
              <Button
                w="full"
                bg="#151f21"
                color="white"
                rounded="md"
                onClick={() => {
                  navigate("/menu/update/" + menu.id);
                }}
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                }}
              >
                Editar
              </Button>
              <Button
                backgroundColor="rgba(66, 153, 225, 0.6)"
                variant="solid"
                colorScheme="red"
                onClick={CardDelete}
              >
                Remover
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Box>
      </Center>
    </>
  );
}
