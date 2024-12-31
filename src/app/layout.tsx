import type {Metadata} from "next";
import React from "react";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
    title: "Hype-less AI",
    description: "AI talk, without the buzz",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`antialiased`}>
        {children}
        <Analytics />
        </body>
        </html>
    );
}
