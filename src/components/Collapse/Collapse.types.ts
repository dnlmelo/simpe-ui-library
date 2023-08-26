import { ReactNode } from "react"

export interface CollapseProps {
  title: string,
  children: ReactNode
  collapsed: boolean
}