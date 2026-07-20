import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Providers from '@/components/Providers';

export const metadata = {
  title: 'InAmigos Foundation',
  description: 'Empowering Communities, Changing Lives in Bilaspur, Chhattisgarh.',
};

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning is required by next-themes to prevent warnings
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 antialiased overflow-x-hidden transition-colors duration-300">
        
        {/* Everything is safely wrapped inside your separated Providers component */}
        <Providers>
          <Navbar />
          <main className="flex-grow w-full">
            {children}
          </main>
        </Providers>
        
      </body>
    </html>
  );
}