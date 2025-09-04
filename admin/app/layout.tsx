import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DropMan Admin',
  description: 'Admin panel for DropMan Discord bot',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-background">
          <nav className="border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  <h1 className="text-xl font-semibold">DropMan Admin</h1>
                </div>
                <div className="flex items-center space-x-4">
                  <a href="/" className="text-sm text-muted-foreground hover:text-foreground">
                    Dashboard
                  </a>
                  <a href="/sources" className="text-sm text-muted-foreground hover:text-foreground">
                    Sources
                  </a>
                  <a href="/health" className="text-sm text-muted-foreground hover:text-foreground">
                    Health
                  </a>
                </div>
              </div>
            </div>
          </nav>
          <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
