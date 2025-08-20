import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'Instagram',
    href: '#',
    component: FaInstagram,
  },
  {
    name: 'Twitter',
    href: '#',
    component: FaTwitter,
  },
  {
    name: 'YouTube',
    href: '#',
    component: FaYoutube,
  },
];

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>

        <div className='footer__copyright'>
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </div>

        <div className='footer__socials'>
          {socialLinks.map((link, index) => (
            <Link 
              key={index}
              href={link.href} 
              className='footer__social-link'
            >
              <link.component className="w-6 h-6" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
