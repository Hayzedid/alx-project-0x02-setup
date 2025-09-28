import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">
            <Link href="/">Next.js App</Link>
          </div>
          <div className="space-x-6">
            <Link 
              href="/home" 
              className="hover:text-blue-200 transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="hover:text-blue-200 transition-colors duration-200"
            >
              About
            </Link>
            <Link 
              href="/posts" 
              className="hover:text-blue-200 transition-colors duration-200"
            >
              Posts
            </Link>
            <Link 
              href="/users" 
              className="hover:text-blue-200 transition-colors duration-200"
            >
              Users
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
