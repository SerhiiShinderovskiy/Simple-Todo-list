import { MouseEvent, ReactNode } from "react";

export interface IInput {
    children?: ReactNode;
    input?: string;
    index?: number;
    className?: string;
    onChange?: any;
    onClick?:((value: MouseEvent<HTMLButtonElement>) => void);
    boolean?: any;
}