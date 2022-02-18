// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { LayoutProps } from 'path/to/interfaces';
import { ReactNode } from 'react';

export type LayoutProps = {
    children?: ReactNode
    title?: string
}

export interface RequestProps {
    title?: string
}

export type User = {
    name: string,
    email: string,
    password: string,
    role: string
}
export interface LoginProps {
    title: string
}