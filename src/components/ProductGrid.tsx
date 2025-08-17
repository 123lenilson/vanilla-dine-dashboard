import { Product, Category } from "@/types/pos";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  category: Category;
  searchQuery: string;
  onIncrement: (productId: number) => void;
  onDecrement: (productId: number) => void;
  getQuantity: (productId: number) => number;
}

const categoryLabels = {
  breakfast: "Breakfast Menu",
  lunch: "Lunch Menu", 
  dinner: "Dinner Menu",
  soup: "Soup Menu",
  desserts: "Desserts Menu",
  side_dish: "Side Dish Menu",
  appetizer: "Appetizer Menu",
  beverages: "Beverages Menu",
};

const ProductGrid = ({
  products,
  category,
  searchQuery,
  onIncrement,
  onDecrement,
  getQuantity
}: ProductGridProps) => {
  // Filter products by category and search query
  const filteredProducts = products.filter(product => {
    const matchesCategory = product.category === category;
    const matchesSearch = searchQuery === "" || 
      product.name.toLowerCase().startsWith(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="flex-1">
      <h2 id="sectionTitle" className="text-2xl font-bold text-card-foreground mb-6">
        {categoryLabels[category]}
      </h2>
      
      {filteredProducts.length === 0 ? (
        <div className="bg-card rounded-xl p-8 text-center border border-border">
          <div className="text-4xl mb-4">🔍</div>
          <h3 className="text-lg font-medium text-card-foreground mb-2">
            No items found for your search
          </h3>
          <p className="text-muted-foreground">
            {searchQuery 
              ? `No "${searchQuery}" items found in ${categoryLabels[category].toLowerCase()}`
              : `No items available in ${categoryLabels[category].toLowerCase()}`
            }
          </p>
        </div>
      ) : (
        <div id="productGrid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              quantity={getQuantity(product.id)}
              onIncrement={() => onIncrement(product.id)}
              onDecrement={() => onDecrement(product.id)}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductGrid;