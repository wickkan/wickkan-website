
import React from 'react';

const navItems = {
  '/': { name: 'Home' },
  '/experiences': { name: 'Experiences' },
  '/projects': { name: 'Projects' }
};

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative" id="nav">
          {Object.entries(navItems).map(([path, { name }]) => (
            <a key={path} href={path} className="px-2 py-1 text-sm font-medium">
              {name}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}

