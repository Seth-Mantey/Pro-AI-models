/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState } from "react";
import CountryModal from "../components/CountryModal";

interface AccessModalContextType {
  isOpen: boolean;
  openAccessModal: () => void;
  closeAccessModal: () => void;
}

const AccessModalContext = createContext<AccessModalContextType>({
  isOpen: false,
  openAccessModal: () => {},
  closeAccessModal: () => {},
});

export const AccessModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openAccessModal = () => setIsOpen(true);
  const closeAccessModal = () => setIsOpen(false);

  return (
    <AccessModalContext.Provider
      value={{
        isOpen,
        openAccessModal,
        closeAccessModal,
      }}
    >
      {children}
      <CountryModal isOpen={isOpen} onClose={closeAccessModal} />
    </AccessModalContext.Provider>
  );
};

export const useAccessModal = () => useContext(AccessModalContext);
