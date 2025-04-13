import Link from 'next/link';

interface RelatedProductsProps {
  product: any;
}

export default function RelatedProducts({ product }: RelatedProductsProps) {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6 font-pixel">You may also like</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Sample related products - in a real app, you'd filter by category or tags */}
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="group">
            <Link href={`/product/${product.id + i}`} className="block">
              <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square mb-3 group-hover:opacity-90 transition-opacity">
                <div className="w-full h-full bg-gray-200"></div>
              </div>
              <h3 className="font-medium text-gray-900 group-hover:text-purple-600 transition-colors">
                Similar Pixel Art #{i}
              </h3>
              <p className="text-gray-500 text-sm mb-1">Artist Name</p>
              <span className="font-bold">${(product.price - 2 + i).toFixed(2)}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
