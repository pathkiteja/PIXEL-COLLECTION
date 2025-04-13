import HeroSlider from '@/components/home/HeroSlider';
import CategoryDisplay from '@/components/home/CategoryDisplay';
import AlternatingShowcase from '@/components/home/AlternatingShowcase';
import FeaturedProduct from '@/components/home/FeaturedProduct';
import ProductCardsList from '@/components/home/ProductCardsList';
import NewsletterSubscribe from '@/components/home/NewsletterSubscribe';

export default function Home() {
  return (
    <>
      <HeroSlider />
      <CategoryDisplay />
      <AlternatingShowcase />
      <FeaturedProduct />
      <ProductCardsList />
      <NewsletterSubscribe />
    </>
  );
}