import './globals.css'
import { Inter } from 'next/font/google'
import { ClerkProvider } from "@clerk/nextjs"
import React from "react";
import {ToastProvider} from "@/components/providers/toaster-provider";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ToastProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
