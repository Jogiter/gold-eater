import { ReactNode } from 'react'
import Appbar from './AppBar'
import Footer from './Footer'
import { AppBarConfig } from '~/config'

export type Props = {
  children?: ReactNode
  footer?: boolean
}

export default function Layout({ children, footer = true }: Props) {
  return (
    <div>
      <Appbar {...AppBarConfig}></Appbar>
      <div className="text-center p-4">{children}</div>
      {footer ? <Footer></Footer> : ''}
    </div>
  )
}