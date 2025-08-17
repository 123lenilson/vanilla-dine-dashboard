import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import CategoryTabs from "@/components/CategoryTabs";
import ProductGrid from "@/components/ProductGrid";
import Cart from "@/components/Cart";
import MobileCart from "@/components/MobileCart";
import { Category } from "@/types/pos";
import { PRODUCTS } from "@/data/products";
import { useCart } from "@/hooks/useCart";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("lunch");
  const [searchQuery, setSearchQuery] = useState("");
  
  const {
    cart,
    paymentMethod,
    setPaymentMethod,
    addToCart,
    increment,
    decrement,
    getCartTotals,
    getQuantity,
    clearCart,
    getCartItems,
  } = useCart();

  // Clear search when category changes
  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category);
    setSearchQuery("");
  };

  // Debounced search
  useEffect(() => {
    const timeout = setTimeout(() => {
      // Search logic is handled in ProductGrid component
    }, 200);
    return () => clearTimeout(timeout);
  }, [searchQuery]);

  const cartItems = getCartItems();
  const totals = getCartTotals();

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <Sidebar className="hidden lg:flex w-20 flex-shrink-0" />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <TopBar 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        
        {/* Content Area */}
        <div id="content" className="flex-1 p-6">
          <div className="main-grid lg:grid lg:grid-cols-[1fr_360px] lg:gap-6 h-full">
            {/* Products Section */}
            <div className="flex flex-col space-y-6">
              {/* Category Tabs */}
              <CategoryTabs
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
              />
              
              {/* Product Grid */}
              <ProductGrid
                products={PRODUCTS}
                category={selectedCategory}
                searchQuery={searchQuery}
                onIncrement={increment}
                onDecrement={decrement}
                getQuantity={getQuantity}
              />
            </div>

            {/* Desktop Cart */}
            <Cart
              cartItems={cartItems}
              totals={totals}
              paymentMethod={paymentMethod}
              onPaymentMethodChange={setPaymentMethod}
              onPlaceOrder={clearCart}
              onIncrement={increment}
              onDecrement={decrement}
              className="hidden lg:flex flex-col sticky top-6 h-[calc(100vh-8rem)]"
            />
          </div>
        </div>
      </div>

      {/* Mobile Cart */}
      <MobileCart
        cartItems={cartItems}
        totals={totals}
        paymentMethod={paymentMethod}
        onPaymentMethodChange={setPaymentMethod}
        onPlaceOrder={clearCart}
        onIncrement={increment}
        onDecrement={decrement}
      />
    </div>
  );
};

export default Index;
