import ReduxProvider from '@/components/layout/providers/ReduxProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ReactNode } from 'react';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReduxProvider>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </ReduxProvider>
  );
}