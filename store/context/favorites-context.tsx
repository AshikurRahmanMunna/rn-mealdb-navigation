import { createContext, useState } from "react";
export interface IFavoriteContext {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
}
export const FavoritesContext = createContext<IFavoriteContext>({
  ids: [],
  addFavorite: (id: string) => {},
  removeFavorite: (id: string) => {},
});

interface IFavoriteContextProvider {
  children: React.ReactNode;
}
function FavoriteContextProvider({ children }: IFavoriteContextProvider) {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const addFavorite = (id: string) => {
    setFavoriteIds((currentFavId) => [...currentFavId, id]);
  };
  const removeFavorite = (id: string) => {
    setFavoriteIds((currentFavId) =>
      currentFavId.filter((favId) => favId !== id)
    );
  };
  const value = {
    ids: favoriteIds,
    addFavorite,
    removeFavorite,
  };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoriteContextProvider;
