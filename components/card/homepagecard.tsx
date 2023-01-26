import { Heading } from "@chakra-ui/layout";
import { CardBody } from "@chakra-ui/react";
import { addPointerInfo } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


interface CardProps extends Profiles {
  updatePage: () => void;
}

export function CardProfile({ profile }: CardProps) {
  const navigate = useNavigate();
}
export function CardDelete() {
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
    }
    if (deleted) {
      updatePage();
    }
  });
}

return (
    <card
    maxWidth="small"
    >
        <CardBody>
            <Flex flex="1" gap= "4" alignItems="center" flexWrap ="wrap">
                <Avatar name={name} src = {image} />
                <Box>
                    <Heading size ="small">{name}</Heading>
                    <text>{'Comida'}</text>
                    </Box>
</Flex>
</CardBody>

)

