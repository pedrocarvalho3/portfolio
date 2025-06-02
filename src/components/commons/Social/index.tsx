import { Github, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Social() {
  const socialLinks = [
    {
      href: 'https://github.com/pedrocarvalho3',
      icon: <Github className="h-8 w-8" />,
      label: 'GitHub',
    },
    {
      href: 'https://www.instagram.com/pdr_vinic',
      icon: <Instagram className="h-8 w-8" />,
      label: 'Instagram',
    },
    {
      href: 'https://www.linkedin.com/in/pedrocarvalhodev/',
      icon: <Linkedin className="h-8 w-8" />,
      label: 'LinkedIn',
    },
  ];

  return (
    <nav className="fixed left-10 top-1/2 z-50 -translate-y-1/2">
      <ul className="flex flex-col gap-8">
        {socialLinks.map(({ href, icon, label }) => (
          <li
            key={href}
            className="text-teal-300 transition-all duration-300 hover:text-teal-700"
          >
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="block"
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
