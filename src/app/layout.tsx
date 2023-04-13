import '../global.css'

export const metadata = {
  title: {
    template: '%s | Menumize',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
