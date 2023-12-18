import type { Metadata } from 'next'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './globals.scss'
import { Nunito } from 'next/font/google'

const nunito = Nunito({
    subsets: ['latin'],
    weight: ['400', '700']
})

export const metadata: Metadata = {
  title: 'Alimentar com Saúde',
  description: 'Rede Social para quem quer se alimentar com saúde e ter uma vida saudável. Desenvolvido por João Mozelli Neto',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="pt-br">
      <body style={ nunito.style }>{children}</body>
    </html>
  )
}
