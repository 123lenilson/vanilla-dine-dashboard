import { Category } from "@/types/pos";
import { PRODUCTS } from "@/data/products";

interface CategoryTabsProps {
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const categoryInfo = {
  breakfast: { label: "Breakfast", icon: "🍳" },
  lunch: { label: "Lunch", icon: "🍽️" },
  dinner: { label: "Dinner", icon: "🥘" },
  soup: { label: "Soup", icon: "🍲" },
  desserts: { label: "Desserts", icon: "🍰" },
  side_dish: { label: "Side Dish", icon: "🥗" },
  appetizer: { label: "Appetizer", icon: "🥙" },
  beverages: { label: "Beverages", icon: "🥤" },
};

const CategoryTabs = ({ selectedCategory, onCategoryChange }: CategoryTabsProps) => {
  const getStockCount = (category: Category) => {
    return PRODUCTS.filter(p => p.category === category).length;
  };

  const handleKeyDown = (e: React.KeyboardEvent, category: Category) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onCategoryChange(category);
    }
  };

  return (
    <div id="categoryTabs" className="grid grid-cols-4 lg:grid-cols-8 gap-4 mb-6">
      {Object.entries(categoryInfo).map(([key, info]) => {
        const category = key as Category;
        const isSelected = selectedCategory === category;
        const stockCount = getStockCount(category);

        return (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            onKeyDown={(e) => handleKeyDown(e, category)}
            data-testid={`category-${category}`}
            className={`p-4 rounded-xl border transition-all duration-200 hover:shadow-md ${
              isSelected
                ? "bg-primary text-primary-foreground border-primary shadow-md"
                : "bg-card text-card-foreground border-border hover:border-primary/30"
            }`}
            aria-pressed={isSelected}
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-2xl">{info.icon}</span>
              <div className="text-center">
                <div className="font-medium text-sm">{info.label}</div>
                <div className="text-xs opacity-75">
                  {stockCount} Menu In Stock
                </div>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default CategoryTabs;