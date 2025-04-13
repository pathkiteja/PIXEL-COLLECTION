import { Category } from '@/data/products';
import Link from 'next/link';
import Image from 'next/image';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link 
      href={`/categories/${category.id}`}
      className="block group"
    >
      <div className="relative aspect-square w-full overflow-hidden border-pixel transition-transform group-hover:scale-[1.02]">
        <img
          src={category.image}
          alt={category.name}
          fill
          className="object-cover transition-transform group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
          <h3 className="font-['Press_Start_2P'] text-white text-lg mb-2">{category.name}</h3>
          <p className="text-white text-sm opacity-90">{category.description}</p>
        </div>
      </div>
    </Link>
  );
}