import { Product } from "@/types/pos";

export const PRODUCTS: Product[] = [
  // Lunch Items
  { id: 1, name: "Pasta Bolognese", description: "Delicious beef lasagna with double chili", price: 50.5, image: "https://picsum.photos/seed/1/200", category: "lunch", stock: 12 },
  { id: 2, name: "Spicy Fried Chicken", description: "Crispy spicy chicken", price: 45.7, image: "https://picsum.photos/seed/2/200", category: "lunch", stock: 12 },
  { id: 3, name: "Grilled Steak", description: "Juicy grilled steak", price: 80.0, image: "https://picsum.photos/seed/3/200", category: "lunch", stock: 6 },
  { id: 4, name: "Fish And Chips", description: "Classic battered fish and fries", price: 90.4, image: "https://picsum.photos/seed/4/200", category: "lunch", stock: 5 },
  { id: 5, name: "Beef Bourguignon", description: "Slow-cooked beef", price: 75.5, image: "https://picsum.photos/seed/5/200", category: "lunch", stock: 8 },
  { id: 6, name: "Spaghetti Carbonara", description: "Creamy carbonara", price: 35.3, image: "https://picsum.photos/seed/6/200", category: "lunch", stock: 10 },
  { id: 7, name: "Ratatouille", description: "Vegetable medley", price: 26.7, image: "https://picsum.photos/seed/7/200", category: "lunch", stock: 12 },
  { id: 8, name: "Kimchi Jjigae", description: "Spicy Korean stew", price: 45.7, image: "https://picsum.photos/seed/8/200", category: "lunch", stock: 7 },
  { id: 9, name: "Tofu Scramble", description: "Savory tofu mix", price: 85.6, image: "https://picsum.photos/seed/9/200", category: "lunch", stock: 4 },

  // Breakfast Items
  { id: 10, name: "Pancakes", description: "Fluffy pancakes", price: 15.5, image: "https://picsum.photos/seed/10/200", category: "breakfast", stock: 20 },
  { id: 11, name: "Omelette", description: "Three-egg omelette", price: 12.0, image: "https://picsum.photos/seed/11/200", category: "breakfast", stock: 15 },
  { id: 12, name: "French Toast", description: "Sweet french toast", price: 14.5, image: "https://picsum.photos/seed/12/200", category: "breakfast", stock: 10 },
  { id: 28, name: "Eggs Benedict", description: "Poached eggs with hollandaise", price: 18.0, image: "https://picsum.photos/seed/28/200", category: "breakfast", stock: 8 },
  { id: 29, name: "Breakfast Burrito", description: "Eggs, cheese, and sausage wrap", price: 13.5, image: "https://picsum.photos/seed/29/200", category: "breakfast", stock: 12 },

  // Dinner Items
  { id: 13, name: "Steak Dinner", description: "Full steak dinner", price: 120.0, image: "https://picsum.photos/seed/13/200", category: "dinner", stock: 3 },
  { id: 14, name: "Roast Chicken", description: "Herb roast chicken", price: 55.0, image: "https://picsum.photos/seed/14/200", category: "dinner", stock: 6 },
  { id: 15, name: "Salmon Fillet", description: "Pan-seared salmon", price: 65.5, image: "https://picsum.photos/seed/15/200", category: "dinner", stock: 5 },
  { id: 30, name: "Lobster Thermidor", description: "Luxury lobster dish", price: 89.0, image: "https://picsum.photos/seed/30/200", category: "dinner", stock: 2 },
  { id: 31, name: "Rack of Lamb", description: "Herb-crusted lamb", price: 78.5, image: "https://picsum.photos/seed/31/200", category: "dinner", stock: 4 },

  // Soup Items
  { id: 16, name: "Tomato Soup", description: "Warm tomato soup", price: 8.5, image: "https://picsum.photos/seed/16/200", category: "soup", stock: 25 },
  { id: 17, name: "Miso Soup", description: "Classic miso soup", price: 6.0, image: "https://picsum.photos/seed/17/200", category: "soup", stock: 30 },
  { id: 32, name: "Chicken Noodle", description: "Classic comfort soup", price: 9.0, image: "https://picsum.photos/seed/32/200", category: "soup", stock: 20 },
  { id: 33, name: "French Onion", description: "Rich onion soup with cheese", price: 11.5, image: "https://picsum.photos/seed/33/200", category: "soup", stock: 15 },

  // Desserts
  { id: 18, name: "Chocolate Cake", description: "Decadent chocolate cake", price: 9.5, image: "https://picsum.photos/seed/18/200", category: "desserts", stock: 18 },
  { id: 19, name: "Ice Cream Sundae", description: "Ice cream with toppings", price: 7.5, image: "https://picsum.photos/seed/19/200", category: "desserts", stock: 20 },
  { id: 20, name: "Fruit Tart", description: "Seasonal fruit tart", price: 6.5, image: "https://picsum.photos/seed/20/200", category: "desserts", stock: 10 },
  { id: 34, name: "Tiramisu", description: "Italian coffee dessert", price: 8.5, image: "https://picsum.photos/seed/34/200", category: "desserts", stock: 12 },

  // Side Dishes
  { id: 21, name: "Garlic Bread", description: "Toasted garlic bread", price: 4.5, image: "https://picsum.photos/seed/21/200", category: "side_dish", stock: 20 },
  { id: 22, name: "Mashed Potato", description: "Creamy mashed potatoes", price: 5.0, image: "https://picsum.photos/seed/22/200", category: "side_dish", stock: 15 },
  { id: 35, name: "Roasted Vegetables", description: "Seasonal roasted vegetables", price: 6.5, image: "https://picsum.photos/seed/35/200", category: "side_dish", stock: 18 },

  // Appetizers
  { id: 23, name: "Spring Rolls", description: "Vegetable spring rolls", price: 6.0, image: "https://picsum.photos/seed/23/200", category: "appetizer", stock: 12 },
  { id: 24, name: "Bruschetta", description: "Tomato bruschetta", price: 5.5, image: "https://picsum.photos/seed/24/200", category: "appetizer", stock: 10 },
  { id: 36, name: "Buffalo Wings", description: "Spicy chicken wings", price: 12.5, image: "https://picsum.photos/seed/36/200", category: "appetizer", stock: 15 },

  // Beverages
  { id: 25, name: "Iced Tea", description: "Refreshing iced tea", price: 3.5, image: "https://picsum.photos/seed/25/200", category: "beverages", stock: 30 },
  { id: 26, name: "Coffee", description: "Hot brewed coffee", price: 2.5, image: "https://picsum.photos/seed/26/200", category: "beverages", stock: 50 },
  { id: 27, name: "Orange Juice", description: "Fresh orange juice", price: 3.0, image: "https://picsum.photos/seed/27/200", category: "beverages", stock: 40 },
  { id: 37, name: "Smoothie Bowl", description: "Fresh fruit smoothie", price: 7.5, image: "https://picsum.photos/seed/37/200", category: "beverages", stock: 25 },
];