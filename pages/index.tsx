import Header from '../components/layout/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Next.js Project
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            A modern web application built with Next.js, TypeScript, and Tailwind CSS
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Modern Framework</h3>
              <p className="text-gray-600">Built with Next.js for optimal performance and SEO</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Type Safety</h3>
              <p className="text-gray-600">Full TypeScript support for better development experience</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Beautiful UI</h3>
              <p className="text-gray-600">Styled with Tailwind CSS for responsive design</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
