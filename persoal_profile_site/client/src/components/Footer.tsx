const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold font-poppins">
              Jason<span className="text-primary">.Miller</span>
            </h2>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-white/70">&copy; {new Date().getFullYear()} Jason Miller. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
