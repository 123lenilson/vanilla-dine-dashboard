import { Product } from "@/types/pos";
import { formatMoney } from "@/utils/format";

interface ProductCardProps {
  product: Product;
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const ProductCard = ({ product, quantity, onIncrement, onDecrement }: ProductCardProps) => {
  const isOutOfStock = product.stock === 0;
  const canIncrement = quantity < product.stock;

  return (
    <div
      className="bg-card rounded-xl p-4 border border-border hover:shadow-md transition-all duration-200"
      data-testid={`product-${product.id}`}
    >
      <div className="flex items-start space-x-3">
        {/* Product Image */}
        <div className="flex-shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-14 h-14 rounded-lg object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `data:image/svg+xml,<svg width="56" height="56" xmlns="http://www.w3.org/2000/svg"><rect width="56" height="56" fill="%23f3f4f6"/><text x="28" y="32" text-anchor="middle" fill="%236b7280" font-size="12">${product.name.slice(0, 2)}</text></svg>`;
            }}
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-card-foreground mb-1 truncate">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between">
            {/* Price */}
            <div className="font-bold text-lg text-card-foreground">
              {formatMoney(product.price)}
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center space-x-2">
              {quantity > 0 && (
                <button
                  onClick={onDecrement}
                  data-testid={`minus-${product.id}`}
                  className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                  aria-label={`Decrease quantity of ${product.name}`}
                >
                  <span className="text-sm">−</span>
                </button>
              )}
              
              {quantity > 0 && (
                <span className="min-w-[1.5rem] text-center font-medium">
                  {quantity}
                </span>
              )}
              
              <button
                onClick={onIncrement}
                data-testid={`plus-${product.id}`}
                disabled={isOutOfStock || !canIncrement}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  isOutOfStock || !canIncrement
                    ? "bg-muted text-muted-foreground cursor-not-allowed"
                    : "bg-primary text-primary-foreground hover:bg-primary-hover"
                }`}
                aria-label={`Increase quantity of ${product.name}`}
              >
                <span className="text-sm">+</span>
              </button>
            </div>
          </div>

          {/* Stock Status */}
          {isOutOfStock && (
            <div className="mt-2 text-xs text-destructive font-medium">
              Out of stock
            </div>
          )}
          {!canIncrement && quantity > 0 && !isOutOfStock && (
            <div className="mt-2 text-xs text-warning font-medium">
              Maximum stock reached
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;