import './globals.css';
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Ojala',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Menu />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
