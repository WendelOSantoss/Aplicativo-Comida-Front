import { useContext } from "react";
import { IoMdAdd } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import ContextSearch from "../../context/contextsearch";

export function Top() {
  const navigate = useNavigate();
  const { setSearch } = useContext(ContextSearch);

  return (
    <>
      <Flex
        marginTop="10px"
        width="98%"
        display="flex"
        justifyContent="space-evenly"
      >
        <Flex display="flex" justifyContent="center" width="50%">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<BsSearch color="gray.300" />}
            />
            <Input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Nome do restaurante"
            />
          </InputGroup>
        </Flex>
        <Button
          leftIcon={<IoMdAdd size={20} color="black" />}
          borderRadius={20}
          color="black"
          colorScheme="rgba (34, 28, 100)"
          type="submit"
          bg="rgba(0, 0, 225, 0.6)"
          onClick={() => {
            navigate("/create");
          }}
        >
          Criar Perfil
        </Button>
      </Flex>
    </>
  );
}
