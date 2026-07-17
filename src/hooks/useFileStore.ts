import { useEffect, useState } from "react";
import {
  addFileToDB,
  getFilesFromDB,
  updateFileFromDB,
} from "../utils/indexedDB";

type file = {
  id?: number;
  text: string;
  name: string;
  date: number;
};

export default function useFileStore() {
  const [actualFileIndex, setActualFileIndex] = useState(0);
  const [files, setFiles] = useState<file[]>([]);

  function getActualFile() {
    return files[actualFileIndex];
  }

  async function addFile(text: string, name: string) {
    const newFile = {
      text,
      name,
      date: new Date().getTime(),
    };

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

  return { getActualFile, addFile, updateActualFile, setActualFileIndex };
}
