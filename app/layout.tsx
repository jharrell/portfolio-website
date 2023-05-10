import '@/styles/globals.css'
import Navbar from '@/components/Navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>

          <title>Sudhir&apos;s Portfolio</title>
          <meta charSet="UTF-8"/>
          <meta name="description" content="My Portfolio"/>
          <meta name="keywords" content="HTML, CSS, JavaScript"/>
          <meta name="author" content="Sudhir Madhyastha"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
