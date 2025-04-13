import { ReduxProvider } from '@/components/layout/providers/ReduxProvider';
import { ReactNode } from 'react';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReduxProvider>
      <div className="flex min-h-screen flex-col bg-gradient-to-br from-purple-600 to-indigo-800">
        <main className="flex-grow flex items-center justify-center p-4">
          {children}
        </main>
        <div className="text-center text-white py-4 text-sm">
          <p>© {new Date().getFullYear()} Pixel Collectibles. All rights reserved.</p>
        </div>
      </div>
    </ReduxProvider>
  );
}