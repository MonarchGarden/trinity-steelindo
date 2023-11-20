import React from 'react';

export default function App() {
  return (
    <div className="flex max-h-screen flex-col">
      <header className="bg-gray-800 p-4 text-white">Navbar</header>
      <main className="flex-grow overflow-y-auto p-4">
        <div>1 </div>
        <div>32 </div>
      </main>
      <footer className="bg-gray-800 p-4 text-white">Footer</footer>
    </div>
  );
}
