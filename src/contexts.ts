import { createContext, type Dispatch, type SetStateAction } from "react";

export const FilesContext = createContext<
  [string[], Dispatch<SetStateAction<string[]>>]
>([[], () => {}]);
