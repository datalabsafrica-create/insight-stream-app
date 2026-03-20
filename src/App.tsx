import React from 'react';
import { LayoutDashboard } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="text-center">
        <LayoutDashboard size={48} className="mx-auto text-blue-600 mb-4" />
        <h1 className="text-3xl font-bold">It Works!</h1>
        <p className="text-slate-500">Your app is now on GitHub.</p>
      </div>
    </div>
  );
}
