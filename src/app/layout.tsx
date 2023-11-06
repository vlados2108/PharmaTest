import { ReactElement, ReactNode } from 'react'
import './layout.scss'

const RootLayout = ({ children }: { children: ReactNode }): ReactElement => {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
export default RootLayout
