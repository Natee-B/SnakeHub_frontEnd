import { createContext, useState } from "react";

export const OrderAdminDataContext = createContext({});

export const OrderAdminDataProvider = ({ children }) => {
  const [notice, setNotice] = useState(false);

  const updateNotice = (check) => {
    setNotice(check);
  };

  return (
    <OrderAdminDataContext.Provider
      value={{
        notice,
        updateNotice,
      }}
    >
      {children}
    </OrderAdminDataContext.Provider>
  );
};
