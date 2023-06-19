import Header from '@/components/header'
import './style.css'

export const metadata = {
  title: `joshi's blog`,
  description: 'tech stuff',
  icons: {
    icon: 'favicon.ico',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
