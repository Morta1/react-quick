import './globals.css'
import {Inter} from 'next/font/google'
import StyledComponentsRegistry from './registry';
import {Metadata} from "next";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'React Quick',
    description: 'Welcome to the game!',
};

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
        </html>
    )
}
