'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import NavLink from './components/NavLink/NavLink';
import { NavItem } from './types';

const NAV_ITEMS: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '#about', label: 'Sobre Mim' },
  { href: '#projects', label: 'Projetos' },
  { href: '#blog', label: 'Blog' },
  { href: '#skills', label: 'Habilidades' },
  { href: '#experience', label: 'Experiência' },
  { href: '#contact', label: 'Contato' }
];

const Header: React.FC = () => {
  useEffect(() => {
    const smoothScroll = (e: MouseEvent) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const targetId = target.getAttribute('href')?.substring(1);
      const element = document.getElementById(targetId || '');
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
        });
      }
    };

    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
      link.addEventListener('click', smoothScroll as EventListener);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', smoothScroll as EventListener);
      });
    };
  }, []);

  return (
    <header className="container flex items-end justify-between pt-8" role="banner">
      <div>
        <Link href="/" className="text-gray-300">
          <Image
            src="/pedro_dev.png"
            alt="Pedro Dev"
            width={300}
            height={300}
            className="w-48"
          />
        </Link>
      </div>
      <nav role="navigation" aria-label="Main navigation">
        <ul className="flex space-x-12">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <NavLink {...item} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
