import { createContext, type Dispatch, type SetStateAction } from "react";

export type file = {
  id?: number;
  text: string;
  name: string;
  date: number;
};

export interface FilesContextType {
  getActualFile: () => file;
  addFile: (text: string, name: string) => Promise<IDBValidKey>;
  updateActualFile: (text: string, name: string) => Promise<IDBValidKey>;
  setActualFileIndex: Dispatch<SetStateAction<number>>;
}

export const FilesContext = createContext<FilesContextType | null>(null);
