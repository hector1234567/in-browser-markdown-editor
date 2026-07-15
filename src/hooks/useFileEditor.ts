// import { useState, useCallback } from "react";

// export default function useFileEditor() {
//   const [fileHandle, setFileHandle] = useState(null);
//   const [content, setContent] = useState("");
//   const [fileName, setFileName] = useState("");

//   const openFile = useCallback(async () => {
//     try {
//       const [handle] = await window.showOpenFilePicker({
//         types: [{ accept: { "text/plain": [".txt", ".md"] } }],
//       });
//       const file = await handle.getFile();
//       const text = await file.text();

//       setFileHandle(handle);
//       setContent(text);
//       setFileName(file.name);
//     } catch (err) {
//       if (err.name !== "AbortError") console.error(err);
//     }
//   }, []);

//   const saveFile = useCallback(async () => {
//     if (!fileHandle) return;
//     const writable = await fileHandle.createWritable();
//     await writable.write(content);
//     await writable.close();
//   }, [fileHandle, content]);

//   const saveAs = useCallback(async () => {
//     const handle = await window.showSaveFilePicker({
//       suggestedName: fileName || "documento.txt",
//       types: [{ accept: { "text/plain": [".txt"] } }],
//     });
//     const writable = await handle.createWritable();
//     await writable.write(content);
//     await writable.close();
//     setFileHandle(handle);
//     setFileName(handle.name);
//   }, [content, fileName]);

//   return {
//     content,
//     setContent,
//     fileName,
//     openFile,
//     saveFile,
//     saveAs,
//     fileHandle,
//   };
// }
