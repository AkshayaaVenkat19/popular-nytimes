import React from 'react';

const Footer = React.memo(() => {
  const links = [
    '© 2024 The New York Times Company',
    'Contact Us',
    'Work with Us',
    'Advertise',
    'Help Center',
    'Privacy Policy',
    'Terms of Service',
    'Terms of Sales',
    'Subscriptions',
  ];
  return (
    <div className="border-t border-gray-300 px-5 py-2 flex justify-between items-center gap-1">
      {links.map((link: string, index: number) => {
        return (
          <div
            key={'link' + index}
            className="text-xs text-gray-600 cursor-pointer"
          >
            {link}
          </div>
        );
      })}
    </div>
  );
});

export default Footer;
