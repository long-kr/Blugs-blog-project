import { createContext } from "react";
import { MemoProps } from "./type";

export const MyContext = createContext<MemoProps | null>(null);
