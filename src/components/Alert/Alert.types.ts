import { ReactNode } from "react";

export interface ActionPrimary extends React.HTMLProps<HTMLButtonElement>{
    children: ReactNode
};

export interface ActionSecondary extends React.HTMLProps<HTMLButtonElement>{
    children: ReactNode
};

export interface AlertProps {
  type: 'attention'| 'info' | 'error' | 'success',
  mode: 'inline' | 'block',
  children: ReactNode;
}