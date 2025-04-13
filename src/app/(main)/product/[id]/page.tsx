'use client';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getProductById } from '@/data/products';
import Link from 'next/link';

// Import components
import ProductImages from '@/components/product/ProductImages';
import ProductInfo from '@/components/product/ProductInfo';
import ProductTabs from '@/components/product/ProductTabs';
import RelatedProducts from '@/components/product/RelatedProducts';

// CSS for Swiper (needs to be imported in the page that uses Swiper)
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<any>(null);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [notification, setNotification] = useState<{ message: string, type: string } | null>(null);
  
  useEffect(() => {
    // Get product data
    const fetchedProduct = getProductById(params.id);
    if (fetchedProduct) {
      setProduct(fetchedProduct);
    }
    
    // Check if product is in wishlist
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setIsInWishlist(wishlist.some((item: any) => item.id === params.id));
  }, [params.id]);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-6">Sorry, we couldn't find the product you're looking for.</p>
          <Link 
            href="/"
            className="bg-purple-600 text-white px-6 py-3 rounded-md font-bold hover:bg-purple-700 transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }
  
  const showNotification = (message: string, type: string) => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Notification */}
      {notification && (
        <div className={`fixed top-24 right-4 z-50 p-4 rounded-md shadow-lg transition-all ${
          notification.type === 'success' ? 'bg-green-500' : 'bg-blue-500'
        } text-white`}>
          {notification.message}
        </div>
      )}
    
      {/* Breadcrumbs */}
      <div className="mb-6 text-sm text-gray-500">
        <Link href="/" className="hover:text-purple-600 transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/shop" className="hover:text-purple-600 transition-colors">Shop</Link>
        <span className="mx-2">/</span>
        <Link href={`/categories/${product.category}`} className="hover:text-purple-600 transition-colors">
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700">{product.name}</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Images */}
        <ProductImages 
          images={product.images} 
          productName={product.name}
        />
        
        {/* Product Info */}
        <ProductInfo 
          product={product}
          isInWishlist={isInWishlist}
          setIsInWishlist={setIsInWishlist}
          showNotification={showNotification}
        />
      </div>
      
      {/* Tabs Section */}
      <ProductTabs product={product} />
      
      {/* Related Products */}
      <RelatedProducts product={product} />
    </div>
  );
}