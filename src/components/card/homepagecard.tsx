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

import { LoginProfile } from "../../types/requests";

interface CardProps {
  profiles: LoginProfile;
  updatePage: () => void;
}

export function CardHome({ profiles, updatePage }: CardProps) {
  const navigate = useNavigate();

  return (
    <Card maxW="sm" margin="10px" width="100%">
      <CardBody>
        <Flex
          flex="1"
          gap="4"
          alignItems="center"
          flexWrap="wrap"
          display="flex"
          justifyContent="center"
        >
          <Avatar name={profiles.name} src={profiles.image} />
          <Box>
            <Heading size="sm">{profiles.name}</Heading>
            <Text as="b"> {profiles.type}</Text>
          </Box>
        </Flex>
      </CardBody>
      <Divider />
      <CardFooter display="flex" justifyContent="center">
        <ButtonGroup spacing="2">
          <Button
            display="flex"
            justifyContent="center"
            alignItems="center"
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
