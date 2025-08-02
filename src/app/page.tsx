import Header from '@/components/header';
import Footer from '@/components/footer';
import ProductCarousel from '@/components/product-carousel';
import RecommendedProducts from '@/components/recommended-products';
import ProductCard from '@/components/product-card';
import { products, getFeaturedProducts } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

export default function Home() {
  const featuredProducts = getFeaturedProducts();
  const allProducts = products;

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="text-center my-12 md:my-16">
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-4 tracking-tight">Your Project, Our Priority</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Find all the tools and materials you need for your next construction project at Naguabo Commercial Center. Quality products, expert advice.
          </p>
          <Button size="lg" className="text-lg py-6 px-8" asChild>
            <Link href="#all-products">Shop All Deals</Link>
          </Button>
        </section>
        
        <section className="my-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
          <ProductCarousel products={featuredProducts} />
        </section>
        
        <Separator className="my-16 bg-border/50" />

        <section className="my-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Recommended For You</h2>
          <RecommendedProducts />
        </section>
        
        <Separator className="my-16 bg-border/50" />

        <section id="all-products">
          <h2 className="text-3xl font-bold mb-8 text-center">All Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {allProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
