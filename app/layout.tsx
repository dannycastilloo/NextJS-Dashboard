import { montserrat } from './ui/fonts';
import './ui/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Next.js + TypeScript</title>
      </head>
      <body className={`${montserrat.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
