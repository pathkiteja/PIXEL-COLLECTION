'use client';

import { useState } from 'react';

interface ProductTabsProps {
  product: any;
}

export default function ProductTabs({ product }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <>
      <div className="mt-12 border-b border-gray-200">
        <div className="flex">
          <button
            onClick={() => setActiveTab('description')}
            className={`py-4 px-6 font-bold ${
              activeTab === 'description'
                ? 'border-b-2 border-purple-600 text-purple-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab('specifications')}
            className={`py-4 px-6 font-bold ${
              activeTab === 'specifications'
                ? 'border-b-2 border-purple-600 text-purple-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Specifications
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`py-4 px-6 font-bold ${
              activeTab === 'reviews'
                ? 'border-b-2 border-purple-600 text-purple-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Reviews
          </button>
        </div>
      </div>
      
      <div className="py-8">
        {activeTab === 'description' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Product Description</h2>
            <div className="prose max-w-none text-gray-600">
              <p>{product.description || product.shortDescription}</p>
              <p className="mt-4">
                Each pixel art piece in our collection is meticulously crafted, pixel by pixel, 
                to create stunning visual masterpieces that evoke nostalgia while pushing the boundaries 
                of digital art. Perfect for collectors, gamers, and art enthusiasts alike.
              </p>
              <p className="mt-4">
                When you purchase this digital collectible, you'll receive high-resolution files 
                optimized for both digital display and physical printing. Our dedicated support team 
                is available to assist with any questions about formats, printing recommendations, 
                or custom requests.
              </p>
            </div>
          </div>
        )}
        
        {activeTab === 'specifications' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Technical Specifications</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white divide-y divide-gray-200">
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap bg-gray-50 text-gray-600 font-medium">Resolution</td>
                    <td className="px-6 py-4 whitespace-nowrap">{product.resolution || '1920x1080'}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap bg-gray-50 text-gray-600 font-medium">File Format</td>
                    <td className="px-6 py-4 whitespace-nowrap">{product.format || 'PNG, JPG'}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap bg-gray-50 text-gray-600 font-medium">Color Profile</td>
                    <td className="px-6 py-4 whitespace-nowrap">sRGB</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap bg-gray-50 text-gray-600 font-medium">Commercial Use</td>
                    <td className="px-6 py-4 whitespace-nowrap">{product.commercialUse ? 'Licensed for commercial use' : 'Personal use only'}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap bg-gray-50 text-gray-600 font-medium">Print Recommendations</td>
                    <td className="px-6 py-4 whitespace-nowrap">{product.printOptions || 'Up to 24"x36" recommended'}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap bg-gray-50 text-gray-600 font-medium">Style</td>
                    <td className="px-6 py-4 whitespace-nowrap">{product.style || 'Pixel Art'}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap bg-gray-50 text-gray-600 font-medium">Creation Date</td>
                    <td className="px-6 py-4 whitespace-nowrap">{product.createdAt || '2025'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
        
        {activeTab === 'reviews' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>
            
            {/* Star Rating Summary */}
            <div className="flex items-center mb-6">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg 
                    key={star}
                    className="w-5 h-5 text-yellow-400" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xl font-bold ml-2">4.8 out of 5</span>
              <span className="text-gray-500 ml-2">(24 reviews)</span>
            </div>
            
            {/* Review Form */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="font-bold text-lg mb-4">Write a Review</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="rating" className="block mb-2 text-sm font-medium text-gray-700">
                    Your Rating
                  </label>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className="text-gray-300 hover:text-yellow-400 focus:text-yellow-400"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label htmlFor="review-title" className="block mb-2 text-sm font-medium text-gray-700">
                    Review Title
                  </label>
                  <input
                    type="text"
                    id="review-title"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Give your review a title"
                  />
                </div>
                <div>
                  <label htmlFor="review-content" className="block mb-2 text-sm font-medium text-gray-700">
                    Review Content
                  </label>
                  <textarea
                    id="review-content"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Write your review here"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-purple-600 text-white px-4 py-2 rounded-md font-medium hover:bg-purple-700 transition-colors"
                >
                  Submit Review
                </button>
              </form>
            </div>
            
            {/* Sample Reviews */}
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg 
                        key={star}
                        className="w-4 h-4" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <h4 className="font-bold ml-2">Absolutely stunning pixel art!</h4>
                </div>
                <div className="text-sm text-gray-500 mb-2">
                  <span>Alex T. | Verified Purchase | March 15, 2025</span>
                </div>
                <p className="text-gray-700">
                  This is exactly what I was looking for to decorate my gaming room. The colors are vibrant,
                  and the pixelated style is perfectly executed. I've printed it out at 20x20" and it looks amazing!
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star, i) => (
                      <svg 
                        key={star}
                        className="w-4 h-4" 
                        fill={i < 4 ? "currentColor" : "none"} 
                        stroke={i >= 4 ? "currentColor" : "none"}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <h4 className="font-bold ml-2">Great artwork, but resolution could be higher</h4>
                </div>
                <div className="text-sm text-gray-500 mb-2">
                  <span>Jamie K. | Verified Purchase | February 28, 2025</span>
                </div>
                <p className="text-gray-700">
                  I love the design and style, but I wish it came in a higher resolution for large format printing.
                  Still, it's a beautiful piece and looks great on my desktop and as a smaller print.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
