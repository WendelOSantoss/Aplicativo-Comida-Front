import { createContext, useState } from "react";

interface PropsContextSearch {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<any>>;
}

interface ContextSearchProviderType {
  children: any;
}

const DEFAULT_VALUE = {
  setSearch: (value: string) => "",
  search: "",
};

const ContextSearch = createContext<PropsContextSearch>(DEFAULT_VALUE);

const ContextSearchProvider: React.FC<ContextSearchProviderType> = ({
  children,
}) => {
  const [search, setSearch] = useState(DEFAULT_VALUE.search);
  return (
    <ContextSearch.Provider value={{ search, setSearch }}>
      {children}
    </ContextSearch.Provider>
  );
};

export { ContextSearchProvider };
export default ContextSearch;
