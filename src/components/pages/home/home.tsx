import { Card, CircularProgress } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { api } from "../../../utils/api/api";
import { CardHome } from "../../card/homepagecard";

export function Home() {
  const [profiles, setProfiles] = useState<Profiles[]>([]);
  const [loading, setLoading] = useState(false);
  const [control, setControl] = useState<boolean>(false);
  const [filteredProfiles, setFilteredProfiles] = useState<Profiles[]>([]);

  async function getTeamsInfo() {
    setLoading(true);
    const allProfiles = await api.getProfiles();
    setProfiles(allProfiles ?? []);
    setLoading(false);
  }

  function updatePage() {
    setControl(!control);
  }

  useEffect(() => {
    getTeamsInfo();
  }, [control]);

  useEffect(() => {
    if (search !== "") {
      const getFilteredProfiles = profiles.filter((profile) =>
        profile.name.toUpperCase().includes(search.toUpperCase())
      );
      setFilteredProfiles(getFilteredProfiles);
    } else {
      setFilteredProfiles([]);
    }
  });

  const hasFilter = filteredProfiles.length === 0;

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
          paddingTop="10%"
        >
          {hasFilter
            ? profiles.map((profiles) => {
                return (
                  <CardHome
                    profiles={profiles}
                    key={profiles.id}
                    updatePage={updatePage}
                  />
                );
              })
            : filteredProfiles.map((profiles) => {
                return (
                  <CardHome
                    profiles={profiles}
                    key={profiles.id}
                    updatePage={updatePage}
                  />
                );
              })}
        </Card>
      )}
    </>
  );
}
