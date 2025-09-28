import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">About</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">About This Project</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              This is a comprehensive Next.js application built with TypeScript and Tailwind CSS. 
              It demonstrates modern web development practices including component-based architecture, 
              routing, API integration, and responsive design.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              The application features reusable components, dynamic content management, and seamless 
              navigation between different pages. It showcases best practices for building scalable 
              and maintainable web applications.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Button Components Demo</h2>
            <p className="text-gray-600 mb-6">Here are different button sizes and shapes:</p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Small Buttons</h3>
                <div className="flex space-x-4">
                  <Button size="small" shape="rounded-sm">Small Rounded</Button>
                  <Button size="small" shape="rounded-md">Small Medium</Button>
                  <Button size="small" shape="rounded-full">Small Full</Button>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Medium Buttons</h3>
                <div className="flex space-x-4">
                  <Button size="medium" shape="rounded-sm">Medium Rounded</Button>
                  <Button size="medium" shape="rounded-md">Medium Medium</Button>
                  <Button size="medium" shape="rounded-full">Medium Full</Button>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Large Buttons</h3>
                <div className="flex space-x-4">
                  <Button size="large" shape="rounded-sm">Large Rounded</Button>
                  <Button size="large" shape="rounded-md">Large Medium</Button>
                  <Button size="large" shape="rounded-full">Large Full</Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technologies Used</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Next.js - React Framework</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">TypeScript - Type Safety</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                <span className="text-gray-700">Tailwind CSS - Styling</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">ESLint - Code Quality</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
