import type { Metadata } from 'next'
import { Providers } from './providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gym Management System',
  description: 'Complete gym management with memberships, rewards, and workout tracking',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-white dark:bg-slate-950">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
