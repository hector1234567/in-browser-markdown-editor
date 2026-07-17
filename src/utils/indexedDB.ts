import { openDB } from "idb";

type file = {
  id?: number;
  text: string;
  name: string;
  date: number;
};

async function getDB() {
  return openDB("markdownfiles", 1, {
    upgrade(db) {
      db.createObjectStore("files", { keyPath: "id", autoIncrement: true });
    },
  });
}

export async function addFileToDB(file: file) {
  const db = await getDB();
  console.log("addFileToDB" + file);
  return db.add("files", file);
}

export async function updateFileFromDB(file: file) {
  const db = await getDB();
  return db.put("files", file, file.id);
}

export async function getFilesFromDB() {
  const db = await getDB();
  return db.getAll("files");
}
