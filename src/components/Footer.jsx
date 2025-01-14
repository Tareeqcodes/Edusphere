import React from 'react';

const Footer = () => {
  const currentYear =new Date().getFullYear();
  return (
    <footer className="bg-slate-100 font-poppins hidden md:block lg:block text-black p-4">
      <div className="container mx-auto text-center">
        <div className="mt-2">
          <a href="/" className="mr-4">About</a>
          <a href="/" className="mr-4">Contact</a>
          <a href="/" className="mr-4">Privacy Policy</a>
        </div>
        <p>&copy; {currentYear} Edusphere. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
