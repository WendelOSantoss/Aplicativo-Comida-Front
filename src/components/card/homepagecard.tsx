import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { LoginProfile } from "../../types/requests";

interface CardProps {
  profiles: LoginProfile;
  updatePage: () => void;
}

export function CardHome({ profiles, updatePage }: CardProps) {
  const navigate = useNavigate();

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
        </CardBody>

        <CardFooter>
          <Button
            variant="solid"
            colorScheme="blue"
            backgroundColor="rgba(0, 0, 225, 0.6)"
            onClick={() => {
              navigate("/menu/find/" + profiles.id);
            }}
          >
            Menu
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
}
