import { createContext, useState } from "react";

const BooksContext = createContext();

const BooksProvider = ({ children }) => {
  const [count, setCount] = useState(5);

  const share = {
    count: count,
    incrementCount: () => {
      setCount((prev) => prev + 1);
    },
  };

  return <BooksContext.Provider value={share}>{children}</BooksContext.Provider>;
};

export { BooksContext, BooksProvider };
