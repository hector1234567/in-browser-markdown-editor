import { useState, useEffect, type ReactNode } from "react";
import {
  addFileToDB,
  deleteFileFromDB,
  getFilesFromDB,
  updateFileFromDB,
} from "./utils/indexedDB";
import { FilesContext, type file, type FilesContextType } from "./contexts";

type FilesProviderProps = { children: ReactNode };

export function FilesProvider({ children }: FilesProviderProps) {
  const [files, setFiles] = useState<file[]>([]);

  function getAllFiles() {
    return files;
  }

  async function addFile(text: string, name: string, date: number | undefined) {
    const newFile: file = {
      text,
      name,
      date: date ?? new Date().getTime(),
    };

    newFile["id"] = await addFileToDB(newFile);

    setFiles((fs) => [...fs, newFile]);
  }

  async function updateFile(text: string, name: string, id: IDBValidKey) {
    const updatedFile = {
      id,
      text,
      name,
      date: new Date().getTime(),
    };

    setFiles((fs) => {
      const fitered = fs.filter((f) => f.id !== id);
      return [...fitered, updatedFile];
    });

    return updateFileFromDB(updatedFile);
  }

  async function deleteFile(id: IDBValidKey) {
    setFiles((fs) => {
      const fitered = fs.filter((f) => f.id !== id);
      return [...fitered];
    });
    deleteFileFromDB(id);
  }

  useEffect(() => {
    (async function loadFiles() {
      const files = await getFilesFromDB();
      setFiles(files);
    })();
  }, []);

  const value: FilesContextType = {
    addFile,
    updateFile,
    getAllFiles,
    deleteFile,
  };

  return (
    <FilesContext.Provider value={value}>{children}</FilesContext.Provider>
  );
}
