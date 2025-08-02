"use client";

import { useEffect, useState } from 'react';
import { getProductRecommendations } from '@/app/actions';
import { getProductById, type Product } from '@/lib/products';
import ProductCard from './product-card';
import { Skeleton } from './ui/skeleton';

export default function RecommendedProducts() {
  const [recommendations, setRecommendations] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecommendations = async () => {
      setLoading(true);
      try {
        // For demonstration, we simulate a user's browsing history.
        // In a real app, this would be dynamically tracked.
        const browsingHistory = ['claw-hammer', 'power-drill'];
        
        const result = await getProductRecommendations({ 
          browsingHistory, 
          numberOfRecommendations: 4 
        });
        
        // Map the recommended product IDs back to full product objects.
        const recommendedProducts = result.recommendedProducts
          .map(id => getProductById(id))
          .filter((p): p is Product => p !== undefined);
        
        setRecommendations(recommendedProducts);
      } catch (error) {
        console.error("Failed to fetch recommendations:", error);
        // Optionally, set some default recommendations on error
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {[...Array(4)].map((_, i) => (
           <div key={i} className="flex flex-col space-y-3">
             <Skeleton className="h-[214px] w-full rounded-xl" />
             <div className="space-y-2 p-2">
               <Skeleton className="h-4 w-[250px]" />
               <Skeleton className="h-4 w-[200px]" />
             </div>
           </div>
        ))}
      </div>
    );
  }

  if (recommendations.length === 0) {
    return <p className="text-center text-muted-foreground">No recommendations available at the moment.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
      {recommendations.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
