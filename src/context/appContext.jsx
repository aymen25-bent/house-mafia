import { createContext, useState } from "react";
import { Inter } from "next/font/google";

export const appContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
});

const inter = Inter({ subsets: ["latin"] });
const AppContext = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  return (
    <appContext.Provider
      value={{
        theme,
        toggleTheme: () => setTheme(theme === "dark" ? "light" : "dark"),
      }}
    >
      <body
        className={inter.className}
        style={{ backgroundColor: theme === "dark" ? "#000" : "#fff" }}
      >
        {children}
      </body>
    </appContext.Provider>
  );
};

export default AppContext;
