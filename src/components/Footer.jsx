"use client";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="footer bg-house-white px-10 py-4 text-lg pt-60"
    >
      <div className="items-center justify-center">
        <p className="text-center text-house-black text-sm">
          <span className="">&copy; {new Date().getFullYear()} - </span>
          <span className="font-heavy">House 58</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
