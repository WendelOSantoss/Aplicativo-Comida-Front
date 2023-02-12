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
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Menus } from "../../../types/requests";
import { api } from "../../../utils/api/api";

export function CreateMenu() {
  const [menus, setMenus] = useState<Menus>();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state.isCreated) return;
    getMenuById();
  }, []);

  async function getMenuById() {
    if (id) {
      const menu = await api.getMenuById(id);
      setMenus(menu);
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const newMenu = {
      profileId: id,
      foodName: formData.get("foodname")?.toString() || "",
      accompaniment: [formData.get("accompaniment")?.toString() || ""],
      price: formData.get("price")?.toString() || "",
    };

    const CreateMenu = await api.createMenu(newMenu);
    setLoading(false);

    if (CreateMenu) {
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
                  Criar novo menu
                </Text>
                <Box>
                  <FormLabel>Alimento:</FormLabel>
                  <Input
                    defaultValue={menus?.foodname}
                    type="text"
                    name="foodname"
                    isRequired
                    placeholder="Alimento"
                  />
                </Box>
                <Box>
                  <FormLabel>Acompanhamento:</FormLabel>
                  <Input
                    defaultValue={menus?.accompaniment}
                    type="text"
                    name="accompaniment"
                    isRequired
                    placeholder="Acompanhamento"
                  />
                </Box>
                <Box>
                  <FormLabel>Preço:</FormLabel>
                  <Input
                    defaultValue={menus?.price}
                    type="text"
                    name="price"
                    isRequired
                    placeholder="Preço"
                  />
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
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
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
