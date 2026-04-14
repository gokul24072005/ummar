import Footer from '@/components/Footer';
import ScrollToTopButton from './ScrollToTopButton';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default Layout;

