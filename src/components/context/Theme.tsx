import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { Props } from "../../Types/interfaces";

type ThemeContextType = {
  theme: "light" | "dark";
  onChangeTheme: (e: React.FormEvent<HTMLInputElement>) => void;
};

const themeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<ThemeContextType["theme"]>("light");

  const handelChangeTheme = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setTheme(e.currentTarget.checked ? "dark" : "light");
    },
    []
  );

  const value = useMemo(() => {
    return {
      theme,
      onChangeTheme: handelChangeTheme,
    };
  }, [theme, handelChangeTheme]);

  return (
    <themeContext.Provider value={value}>{children}</themeContext.Provider>
  );
};

export const useTheme = () => {
  const value = useContext(themeContext);

  if (value === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return value;
};
