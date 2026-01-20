import './globals.css'

export const metadata = {
  title: 'Workout Timer',
  description: 'A simple workout timer app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}