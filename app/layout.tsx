import type { Metadata } from 'next';
import './globals.css';
import { Nunito } from 'next/font/google';

const font = Nunito({
    subsets: ['latin'],
    weight: ['200', '400', '500', '700']
})

export const metadata: Metadata = {
  title: 'Alimentar com Saúde',
  description: 'Rede Social para quem quer se alimentar com saúde e ter uma vida saudável. Desenvolvido por João Mozelli Neto',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="pt-br">
      <body style={ font.style }>
        {children}
      </body>
    </html>
  )
}
