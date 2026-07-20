import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'InAmigos Foundation',
  description: 'Empowering Communities, Changing Lives in Bilaspur, Chhattisgarh.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* 
        min-h-screen & flex-col: Keeps footer at the bottom
        overflow-x-hidden: Prevents horizontal scrolling bugs on mobile
        text-gray-900 & antialiased: Keeps text crisp and readable
      */}
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-900 antialiased overflow-x-hidden">
        
        <Navbar />
        
        {/* flex-grow pushes the footer down to fill available space */}
        <main className="flex-grow w-full">
          {children}
        </main>
        
        <Footer />
        
      </body>
    </html>
  );
}