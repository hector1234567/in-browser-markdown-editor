import { createContext } from "react";

export type file = {
  id?: IDBValidKey;
  text: string;
  name: string;
  date: number;
};

export interface FilesContextType {
  addFile: (text: string, name: string, date?: number) => Promise<void>;
  updateFile: (
    text: string,
    name: string,
    index: IDBValidKey,
  ) => Promise<IDBValidKey>;
  getAllFiles: () => file[];
  deleteFile: (id: IDBValidKey) => Promise<void>;
}

export const FilesContext = createContext<FilesContextType | null>(null);
