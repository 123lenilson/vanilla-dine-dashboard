import { CartItem, PaymentMethod } from "@/types/pos";
import { formatMoney } from "@/utils/format";
import { useToast } from "@/hooks/use-toast";

interface CartProps {
  cartItems: CartItem[];
  totals: { subTotal: number; tax: number; total: number };
  paymentMethod: PaymentMethod;
  onPaymentMethodChange: (method: PaymentMethod) => void;
  onPlaceOrder: () => void;
  onIncrement: (productId: number) => void;
  onDecrement: (productId: number) => void;
  className?: string;
}

const Cart = ({
  cartItems,
  totals,
  paymentMethod,
  onPaymentMethodChange,
  onPlaceOrder,
  onIncrement,
  onDecrement,
  className = ""
}: CartProps) => {
  const { toast } = useToast();

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Please add items to your cart before placing an order.",
        variant: "destructive"
      });
      return;
    }

    onPlaceOrder();
    toast({
      title: "Order placed successfully!",
      description: "Your order has been submitted.",
    });
  };

  const paymentMethods = [
    { id: "credit" as PaymentMethod, label: "Credit Card", icon: "💳" },
    { id: "paylater" as PaymentMethod, label: "Paylater", icon: "📅" },
    { id: "cash" as PaymentMethod, label: "Cash Payout", icon: "💵" },
  ];

  return (
    <aside id="cart" className={`bg-card border-l border-border ${className}`}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-6 border-b border-border">
          <h2 className="text-lg font-semibold text-card-foreground">Invoice</h2>
        </div>

        {/* Cart Items */}
        <div id="cartItems" className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="text-center text-muted-foreground py-8">
              Your cart is empty
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.product.id}
                  data-testid={`cart-${item.product.id}`}
                  className="flex items-center space-x-3 p-3 rounded-lg border border-border"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-12 h-12 rounded-lg object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `data:image/svg+xml,<svg width="48" height="48" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="%23f3f4f6"/><text x="24" y="28" text-anchor="middle" fill="%236b7280" font-size="10">${item.product.name.slice(0, 2)}</text></svg>`;
                    }}
                  />
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm text-card-foreground truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {item.quantity}x
                    </p>
                    <div className="text-xs text-muted-foreground mt-1">
                      Don't Add Vegetables
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => onDecrement(item.product.id)}
                      className="w-6 h-6 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                      aria-label={`Decrease ${item.product.name}`}
                    >
                      <span className="text-xs">−</span>
                    </button>
                    
                    <span className="text-sm font-medium min-w-[1rem] text-center">
                      {item.quantity}
                    </span>
                    
                    <button
                      onClick={() => onIncrement(item.product.id)}
                      disabled={item.quantity >= item.product.stock}
                      className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label={`Increase ${item.product.name}`}
                    >
                      <span className="text-xs">+</span>
                    </button>
                  </div>

                  <div className="text-sm font-medium text-card-foreground">
                    {formatMoney(item.product.price * item.quantity)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Summary */}
        <div id="summary" className="p-6 border-t border-border space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Sub Total</span>
            <span data-testid="subtotal" className="font-medium">
              {formatMoney(totals.subTotal)}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Tax</span>
            <span data-testid="tax" className="font-medium">
              {formatMoney(totals.tax)}
            </span>
          </div>
          <div className="border-t border-border pt-3">
            <div className="flex justify-between font-semibold">
              <span>Total Payment</span>
              <span data-testid="total" className="text-lg">
                {formatMoney(totals.total)}
              </span>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div id="paymentMethods" className="p-6 border-t border-border">
          <div className="grid grid-cols-3 gap-2 mb-4">
            {paymentMethods.map((method) => (
              <button
                key={method.id}
                onClick={() => onPaymentMethodChange(method.id)}
                data-testid={`payment-${method.id}`}
                className={`p-3 rounded-lg border text-center transition-colors ${
                  paymentMethod === method.id
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-foreground border-border hover:border-primary/30"
                }`}
              >
                <div className="text-lg mb-1">{method.icon}</div>
                <div className="text-xs font-medium">{method.label}</div>
              </button>
            ))}
          </div>

          <button
            id="placeOrderBtn"
            data-testid="place-order"
            onClick={handlePlaceOrder}
            className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={cartItems.length === 0}
          >
            Place An Order
          </button>
        </div>
      </div>

      {/* Accessibility live region */}
      <div id="cartAriaLive" aria-live="polite" className="sr-only"></div>
    </aside>
  );
};

export default Cart;