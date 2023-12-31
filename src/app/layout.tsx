import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import Footer from '@/components/Footer/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  )
}
