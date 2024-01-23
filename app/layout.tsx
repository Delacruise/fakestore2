import type { Metadata } from 'next';
import './globals.css';
import NAVIGATION from './components/navigation';
import FOOTER from './components/footer';

export const metadata: Metadata = {
  title: 'Fake Online Store',
  description: 'What you see is not what you get!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <NAVIGATION />
        {children}
        <FOOTER />
      </body>
    </html>
  );
}
