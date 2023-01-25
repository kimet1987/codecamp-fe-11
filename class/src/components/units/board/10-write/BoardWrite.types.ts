import { ChangeEvent, MouseEvent } from "react";

export interface IBoardWriteProps {
    isEdit: boolean;
    data?: any;
}

export interface IMyvari {
    number: number;
    writer?: string;
    title?: string;
    contents?: string;
}

export interface IBoardWriteUIProps {
    onSubmit: (e: MouseEvent<HTMLButtonElement>) => void;
    onClickUpdate: (e: MouseEvent<HTMLButtonElement>) => void;
    onWriter: (e: ChangeEvent<HTMLInputElement>) => void;
    onTitle: (e: ChangeEvent<HTMLInputElement>) => void;
    onContents: (e: ChangeEvent<HTMLInputElement>) => void;
    isEdit: boolean;
    data: any;
}
