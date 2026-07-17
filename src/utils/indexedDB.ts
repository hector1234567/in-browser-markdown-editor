import { openDB } from "idb";
import type { file } from "../contexts";

async function getDB() {
  return openDB("markdownfiles", 1, {
    upgrade(db) {
      db.createObjectStore("files", { keyPath: "id", autoIncrement: true });
    },
  });
}

export async function addFileToDB(file: file) {
  const db = await getDB();
  return db.add("files", file);
}

export async function updateFileFromDB(file: file) {
  const db = await getDB();
  return db.put("files", file);
}

export async function deleteFileFromDB(id: IDBValidKey) {
  const db = await getDB();
  return db.delete("files", id);
}

export async function getFilesFromDB() {
  const db = await getDB();
  return db.getAll("files");
}
