import { useContext } from "react";
import { FilesContext } from "../contexts";

export function useFiles() {
  const context = useContext(FilesContext);
  if (!context) {
    throw new Error("useFiles debe usarse dentro de un FilesProvider");
  }
  return context;
}
