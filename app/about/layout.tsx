import Header from '@/app/ui/base/header';
import Footer from '@/app/ui/base/footer';  

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex-none">
        <Header />
      </header>
      <main className="flex-grow  md:overflow-y-auto ">
        {children}
      </main>
      <footer className="flex-none">
        <Footer /> 
      </footer>
    </div>
  );
}