import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Alimentar com Saúde',
  description: 'Rede Social para quem quer se alimentar com saúde e ter uma vida saudável. Desenvolvido por João Mozelli Neto',
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
