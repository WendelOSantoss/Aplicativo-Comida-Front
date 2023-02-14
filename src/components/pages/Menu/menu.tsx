import { useContext, useEffect, useState } from "react";
import { Card, CircularProgress } from "@chakra-ui/react";
import { useDebounce } from "usehooks-ts";
import { Menus } from "../../../types/requests";
import ContextSearch from "../../../context/contextsearch";
import { api } from "../../../utils/api/api";
import { CardMenu } from "../../card/menucard";
import { Top } from "../../top/top";

export function Menu() {
  const [menus, setMenus] = useState<Menus[]>([]);
  const [loading, setLoading] = useState(false);
  const [control, setControl] = useState<boolean>(false);
  const { search } = useContext(ContextSearch);
  const debouncedSearch = useDebounce(search, 1000);
  const [filteredMenus, setFilteredMenus] = useState<Menus[]>([]);

  async function getMenuInfo() {
    setLoading(true);
    const allMenus = await api.getAllMenu();
    setMenus(allMenus ?? []);
    setLoading(false);
  }

  function MenuUpdate() {
    setControl(!control);
  }

  useEffect(() => {
    getMenuInfo();
  }, [control]);

  useEffect(() => {
    if (search !== "") {
      const getFilteredMenus = menus.filter((menu) =>
        menu.accompaniment.toString().includes(search.toUpperCase())
      );
      setFilteredMenus(getFilteredMenus);
    } else {
      setFilteredMenus([]);
    }
  }, [debouncedSearch]);

  const hasFilter = filteredMenus.length === 0;

  return (
    <>
      <Top />
      {loading ? (
        <CircularProgress
          isIndeterminate
          color="black"
          display="flex"
          alignItems="center"
          justifyContent="center"
          padding="20%"
        />
      ) : (
        <Card
          display="flex"
          flexWrap="wrap"
          justifyContent="space-evenly"
          alignItems="center"
          direction="row"
          paddingBottom="10%"
          paddingTop="5%"
        >
          {hasFilter
            ? menus.map((menus) => {
                return (
                  <CardMenu
                    menu={menus}
                    key={menus.id}
                    updatePage={MenuUpdate}
                  />
                );
              })
            : filteredMenus.map((menus) => {
                return (
                  <CardMenu
                    menu={menus}
                    key={menus.id}
                    updatePage={MenuUpdate}
                  />
                );
              })}
        </Card>
      )}
    </>
  );
}
