import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from "@/components/ui/button"
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export default function CartPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="text-center space-y-4">
          <ShoppingCart className="mx-auto h-16 w-16 text-muted-foreground" />
          <h1 className="text-2xl font-semibold">Your cart is empty</h1>
          <p className="text-muted-foreground">
            Looks like you haven&apos;t added anything to your cart yet.
          </p>
          <Button asChild>
            <Link href="/#all-products">Start Shopping</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
