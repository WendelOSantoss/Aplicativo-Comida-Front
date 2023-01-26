import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Text,
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
      text: "Deseja mesmo deletar seu perfil?",
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
    <Card maxWidth="small" margin="10px" width="100%">
      <CardBody>
        <Flex
          flex="1"
          gap="4"
          alignItems="center"
          flexWrap="wrap"
          flexDirection="column"
        >
          <Avatar name={profiles.name} src={profiles.image} />
          <Box>
            <Heading size="sm" display="flex" justifyContent="center">
              {profiles.name}
            </Heading>
            <Text display="flex" justifyContent="center" as="b">
              Restaurante: {profiles.type}
            </Text>
          </Box>
        </Flex>
      </CardBody>
      <Divider />
      <CardFooter display="flex" justifyContent="center">
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
    </Card>
  );
}
