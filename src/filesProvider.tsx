import { useState, useEffect, type ReactNode } from "react";
import {
  addFileToDB,
  getFilesFromDB,
  updateFileFromDB,
} from "./utils/indexedDB";
import { FilesContext, type file, type FilesContextType } from "./contexts";

type FilesProviderProps = { children: ReactNode };

export function FilesProvider({ children }: FilesProviderProps) {
  const [actualFileIndex, setActualFileIndex] = useState(0);
  const [files, setFiles] = useState<file[]>([]);

  function getActualFile() {
    return files[actualFileIndex];
  }

  function getAllFiles() {
    return files;
  }

  async function addFile(text: string, name: string, date: number | undefined) {
    const newFile = {
      text,
      name,
      date: date ?? new Date().getTime(),
    };

    setFiles((fs) => [...fs, newFile]);

    return await addFileToDB(newFile);
  }

  async function updateActualFile(text: string, name: string) {
    const updatedFile = {
      ...files[actualFileIndex],
      text,
      name,
      date: new Date().getTime(),
    };

    setFiles((files: file[]) => {
      files[actualFileIndex] = updatedFile;
      return files;
    });

    return await updateFileFromDB(updatedFile);
  }

  useEffect(() => {
    (async function loadFiles() {
      const files = await getFilesFromDB();
      setFiles(files);
    })();
  }, []);

  const value: FilesContextType = {
    getActualFile,
    addFile,
    updateActualFile,
    setActualFileIndex,
    getAllFiles,
  };

  return (
    <FilesContext.Provider value={value}>{children}</FilesContext.Provider>
  );
}
