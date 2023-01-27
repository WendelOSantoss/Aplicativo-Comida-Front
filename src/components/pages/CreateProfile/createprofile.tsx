import {
  Box,
  Button,
  Flex,
  FormLabel,
  Input,
  Text,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProfileUpdate } from "../../../types/requests";
import { api } from "../../../utils/api/api";

export function CreateProf() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState<ProfileUpdate>();
  const { id } = useParams();

  useEffect(() => {
    getProfileById();
  }, []);

  async function getProfileById() {
    if (id) {
      const profile = await api.getProfileById(id);
      setProfiles(profile);
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const newProfile = {
      name: formData.get("name")?.toString() || "",
      image: formData.get("image")?.toString() || "",
      type: formData.get("type")?.toString() || "",
      adress: formData.get("adress")?.toString() || "",
      restaurantId: [],
      consumerId: [],
    };

    let profileResponse;
    if (id) {
      const profileToUpdate = { ...newProfile, id: id };
      profileResponse = await api.UpdateProfile(profileToUpdate);
    } else {
      profileResponse = await api.CreateProfile(newProfile);
      setLoading(false);
    }

    if (profileResponse) {
      navigate("/profile");
    }
  }

  return (
    <>
      <Flex
        flexDirection="column"
        height="100%"
        justifyContent="center"
        alignItems="center"
        margin="100px"
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
                <Text
                  borderBottomWidth="1px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="2xl"
                >
                  {id ? "Atualizar perfil" : "Criar novo perfil"}
                </Text>
                <Box>
                  <FormLabel>Nome:</FormLabel>
                  <Input
                    defaultValue={profiles?.name}
                    type="text"
                    name="name"
                    isRequired
                    placeholder="Nome"
                  />
                </Box>
                <Box>
                  <FormLabel>Imagem:</FormLabel>
                  <Input
                    defaultValue={profiles?.image}
                    type="text"
                    name="image"
                    isRequired
                    placeholder="Imagem"
                  />
                </Box>
                <Box>
                  <FormLabel>Tipo</FormLabel>
                  <Input
                    defaultValue={profiles?.type}
                    type="text"
                    name="type"
                    isRequired
                    placeholder="Tipo"
                  />
                </Box>
                <Box>
                  <FormLabel>Endereço</FormLabel>
                  <Input
                    defaultValue={profiles?.adress}
                    type="text"
                    name="adress"
                    isRequired
                    placeholder="Endereço"
                  />
                </Box>
                {id ? (
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Button
                      borderRadius={20}
                      type="submit"
                      variant="solid"
                      colorScheme="blue"
                      color="black"
                      backgroundColor="rgba(66, 153, 225, 0.6)"
                    >
                      Editar
                    </Button>
                  </Box>
                ) : (
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Button
                      borderRadius={20}
                      type="submit"
                      variant="solid"
                      colorScheme="blue"
                      color="black"
                      backgroundColor="rgba(66, 153, 225, 0.6)"
                    >
                      Criar
                    </Button>
                  </Box>
                )}
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
