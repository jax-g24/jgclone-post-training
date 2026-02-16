import './globals.css';
import BottomNav from './components/BottomNav';
import { ModuleProvider } from './components/ModuleContext';

export const metadata = {
  title: 'Post Training',
  description: 'Building Thoughtful AI Systems — CDSS 94 · Spring 2026',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ModuleProvider>
          {children}
          <BottomNav />
        </ModuleProvider>
      </body>
    </html>
  );
}
