import { createContext } from "react";
import { type ModalProps } from "./Modal";

export const ModalContext = createContext<ModalProps>({
  isOpen: false,
  onClose: () => {},
  children: null,
});