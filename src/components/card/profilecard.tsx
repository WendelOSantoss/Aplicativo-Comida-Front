import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { LoginProfile } from "../../types/requests";
import { api } from "../../utils/api/api";

interface CardProps {
  profiles: LoginProfile;
  updatePage: () => void;
}

export function CardProfile({ profiles, updatePage }: CardProps) {
  const navigate = useNavigate();

  async function CardDelete() {
    Swal.fire({
      title: "Aviso!",
      text: "Quer deletar seu perfil?",
      icon: "error",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, pode deletar",
    }).then(async (res) => {
      if (res) {
        const deleted = await api.ProfileDelete(profiles.id);
        Swal.fire("Seu perfil foi deletado com sucesso!");
        if (deleted) {
          updatePage();
        }
      }
    });
  }

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        alt={profiles.name}
        src={profiles.image}
      />

      <Stack>
        <CardBody>
          <Heading size="md">Restaurante: {profiles.name}</Heading>

          <Text py="2">Tipo: {profiles.type}</Text>
          <Text py="2">Endereço: {profiles.adress}</Text>
        </CardBody>

        <CardFooter>
          <ButtonGroup spacing="2">
            <Button
              backgroundColor="rgba(66, 153, 225, 0.6)"
              variant="solid"
              colorScheme="red"
              onClick={CardDelete}
            >
              Remover
            </Button>
            <Button
              variant="ghost"
              colorScheme="blue"
              onClick={() => {
                navigate("/profile/update/" + profiles.id);
              }}
            >
              Editar
            </Button>
            <Button
              variant="solid"
              colorScheme="blue"
              backgroundColor="rgba(66, 153, 225, 0.6)"
              onClick={() => {
                navigate("/menu/find/" + profiles.id);
              }}
            >
              Menu
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Stack>
    </Card>
  );
}
