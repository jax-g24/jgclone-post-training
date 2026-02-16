import './globals.css';

export const metadata = {
  title: 'Post Training',
  description: 'Building Thoughtful AI Systems — CDSS 94 · Spring 2026',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
