function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[#1f1f1f] py-8 text-white">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h3 className="text-xl font-semibold">
          Meena Web Solutions
        </h3>

        <p className="mt-2 text-sm text-gray-400">
          Professional websites for businesses and growing brands.
        </p>

        <div className="mt-5 border-t border-gray-700 pt-5">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Meena Web Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;