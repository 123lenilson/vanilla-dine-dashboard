import { useState } from "react";
import { CartItem, PaymentMethod } from "@/types/pos";
import Cart from "./Cart";

interface MobileCartProps {
  cartItems: CartItem[];
  totals: { subTotal: number; tax: number; total: number };
  paymentMethod: PaymentMethod;
  onPaymentMethodChange: (method: PaymentMethod) => void;
  onPlaceOrder: () => void;
  onIncrement: (productId: number) => void;
  onDecrement: (productId: number) => void;
}

const MobileCart = ({
  cartItems,
  totals,
  paymentMethod,
  onPaymentMethodChange,
  onPlaceOrder,
  onIncrement,
  onDecrement,
}: MobileCartProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handlePlaceOrder = () => {
    onPlaceOrder();
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Cart Button */}
      <button
        id="openCartBtn"
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 bg-primary text-primary-foreground rounded-full px-6 py-3 shadow-lg flex items-center space-x-2 z-40"
      >
        <span className="text-lg">🛒</span>
        <span className="font-medium">View Cart</span>
        {totalItems > 0 && (
          <span className="bg-primary-foreground text-primary rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
            {totalItems}
          </span>
        )}
      </button>

      {/* Mobile Cart Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-50"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Cart Panel */}
          <div id="cartPanel" className="lg:hidden fixed right-0 top-0 h-full w-full max-w-sm bg-card z-50 transform transition-transform">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <h2 className="text-lg font-semibold">Your Cart</h2>
                <button
                  id="closeCartBtn"
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                  aria-label="Close cart"
                >
                  <span className="text-lg">✕</span>
                </button>
              </div>

              {/* Cart Content */}
              <div className="flex-1 overflow-hidden">
                <Cart
                  cartItems={cartItems}
                  totals={totals}
                  paymentMethod={paymentMethod}
                  onPaymentMethodChange={onPaymentMethodChange}
                  onPlaceOrder={handlePlaceOrder}
                  onIncrement={onIncrement}
                  onDecrement={onDecrement}
                  className="h-full border-0"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MobileCart;