export const menuCategories = [
  { id: "family-meals", name: "Family Packs & Feasts", icon: "Users", count: 4 },
  { id: "combos", name: "Combos", icon: "Layers", count: 6 },
  { id: "chicken", name: "Chicken & Proteins", icon: "Utensils", count: 4 },
  { id: "patties", name: "Jamaican Patties", icon: "Sparkles", count: 5 },
  { id: "sides", name: "Regular Sides", icon: "Soup", count: 5 },
  { id: "premium-sides", name: "Premium Sides", icon: "Sparkles", count: 5 },
  { id: "drinks", name: "Drinks", icon: "Coffee", count: 10 }
];

export const menuItems = [
  // 1. FAMILY PACKS & FEASTS
  {
    id: "fp2-wings",
    categoryId: "family-meals",
    name: "Fp2 - 2 Lbs Wings (1 Sauce)",
    price: 46.80,
    priceDisplay: "$46.80",
    description: "2 medium sides, 2 pop, 1 sauce max per order. Plump crispy wings cooked fresh.",
    image: "/images/dishes/0053.jpg",
    tags: ["Family Size", "Includes 2 Sides & 2 Drinks"],
    spiceLevel: 2
  },
  {
    id: "fp3-wings",
    categoryId: "family-meals",
    name: "Fp3 - 3 Lbs Wings (2 Sauces)",
    price: 69.60,
    priceDisplay: "$69.60",
    description: "3 medium sides, 3 pop, 2 sauce max per order. Plump crispy wings tossed in your favourite sauce.",
    image: "/images/dishes/0053.jpg",
    tags: ["Family Size", "Includes 3 Sides & 3 Drinks"],
    spiceLevel: 2
  },
  {
    id: "fp5-wings",
    categoryId: "family-meals",
    name: "Fp5 - 5 Lbs Wings (3 Sauces)",
    price: 114.60,
    priceDisplay: "$114.60",
    description: "5 medium sides, 5 pop, 3 sauce max per order. Jumbo party portion for groups and families.",
    image: "/images/dishes/0053.jpg",
    tags: ["Mega Pack", "Includes 5 Sides & 5 Drinks"],
    spiceLevel: 2
  },
  {
    id: "family-feast-bundle",
    categoryId: "family-meals",
    name: "Family Feast Promotional Bundle",
    price: 49.99,
    priceDisplay: "$49.99",
    description: "The ultimate Caribbean feast! Includes your choice of Proteins (Wings, Jerk Chicken) + 3 Comfort Sides. Serves 4-6.",
    image: "/images/dishes/0053.jpg",
    altImages: ["/images/dishes/0019.jpg", "/images/dishes/0021.jpg"],
    tags: ["Best Value", "Feeds 4-6", "Special Promotion"],
    isSpecial: true,
    spiceLevel: 2
  },

  // 2. COMBOS
  {
    id: "combo-1",
    categoryId: "combos",
    name: "1 - Half Pound Wings (1 Sauce) Combo",
    price: 17.10,
    priceDisplay: "$17.10",
    description: "1 medium side, 1 pop or water, 1 sauce per order. Crispy wings with hot side and drink.",
    image: "/images/dishes/0053.jpg",
    tags: ["Top Value Combo"],
    spiceLevel: 2
  },
  {
    id: "combo-2",
    categoryId: "combos",
    name: "2 - 1 Lb Wings (1 Sauce) Combo",
    price: 25.25,
    priceDisplay: "$25.25",
    description: "1 medium side, 1 pop, 1 sauce per order. A full pound of signature wings with side and drink.",
    image: "/images/dishes/0053.jpg",
    tags: ["Fan Favourite"],
    spiceLevel: 2
  },
  {
    id: "combo-3",
    categoryId: "combos",
    name: "3 - 1.5 Lbs Wings (2 Sauces) Combo",
    price: 33.40,
    priceDisplay: "$33.40",
    description: "1 medium side, 1 pop, 2 sauces per order. 1.5 lbs of crispy wings with side and drink.",
    image: "/images/dishes/0053.jpg",
    tags: ["Big Appetite"],
    spiceLevel: 2
  },
  {
    id: "combo-4",
    categoryId: "combos",
    name: "4 - 2 Pcs Jerk Chicken (1 Sauce) Combo",
    price: 16.85,
    priceDisplay: "$16.85",
    description: "1 medium side, 1 pop, 1 sauce per order. 2 pieces of authentic slow-marinated Jamaican jerk chicken with side and cold drink.",
    image: "/images/dishes/0019.jpg",
    tags: ["Authentic Jamaican"],
    spiceLevel: 3
  },
  {
    id: "combo-5",
    categoryId: "combos",
    name: "5 - 4 Pcs Jerk Chicken (1 Sauce) Combo",
    price: 21.75,
    priceDisplay: "$21.75",
    description: "1 medium side, 1 pop, 1 sauce per order. 4 succulent pieces of jerk chicken with side and cold drink.",
    image: "/images/dishes/0039.jpg",
    tags: ["Hearty Jerk Meal"],
    spiceLevel: 3
  },
  {
    id: "combo-6",
    categoryId: "combos",
    name: "6 - Half Pound Wings + 2 Pcs Jerk Chicken (5 Sauces) Combo",
    price: 25.80,
    priceDisplay: "$25.80",
    description: "1 medium side, 1 pop, 5 sauces per order. Half pound of crispy wings plus 2 pieces of authentic jerk chicken.",
    image: "/images/dishes/0053.jpg",
    tags: ["Best of Both"],
    spiceLevel: 3
  },

  // 3. CHICKEN & PROTEINS
  {
    id: "jerk-chicken-3pc",
    categoryId: "chicken",
    name: "3 Pcs Jerk Chicken (1 Sauce)",
    price: 9.00,
    priceDisplay: "$9.00",
    description: "1 sauce per order. Tender jerk seasoned chicken pieces marinated in Jamaican pimento, scallions, and scotch bonnet peppers.",
    image: "/images/dishes/0019.jpg",
    tags: ["Authentic Jerk"],
    spiceLevel: 3
  },
  {
    id: "jerk-chicken-6pc",
    categoryId: "chicken",
    name: "6 Pcs Jerk Chicken (2 Sauces)",
    price: 16.00,
    priceDisplay: "$16.00",
    description: "2 sauces per order. Six succulent pieces of Jamaican jerk chicken basted in spicy house jerk glaze.",
    image: "/images/dishes/0040.jpg",
    tags: ["Authentic Jerk", "Family Portion"],
    spiceLevel: 3
  },
  {
    id: "fried-chicken-3pc",
    categoryId: "chicken",
    name: "3 Pcs Fried Chicken (1 Sauce)",
    price: 9.00,
    priceDisplay: "$9.00",
    description: "1 sauce per order. Crispy golden fried chicken pieces seasoned with Caribbean herbs and spices, fried fresh and crunchy.",
    image: "/images/dishes/fried-chicken.jpg",
    tags: ["Golden & Crispy", "Fresh Fried"],
    spiceLevel: 1
  },
  {
    id: "fried-chicken-6pc",
    categoryId: "chicken",
    name: "6 Pcs Fried Chicken (2 Sauces)",
    price: 16.00,
    priceDisplay: "$16.00",
    description: "2 sauces per order. Six pieces of juicy, crunchy golden fried chicken seasoned in Caribbean island spices.",
    image: "/images/dishes/fried-chicken.jpg",
    tags: ["Golden & Crispy", "Family Portion"],
    spiceLevel: 1
  },

  // 5. JAMAICAN PATTIES
  {
    id: "mild-beef-patty",
    categoryId: "patties",
    name: "Mild Beef Patty",
    price: 3.60,
    priceDisplay: "$3.60",
    description: "Tender beef patty in flaky yellow pastry stuffed with savory seasoned beef and Jamaican herbs.",
    image: "/images/dishes/0013.jpg",
    tags: ["Traditional Mild"],
    spiceLevel: 1
  },
  {
    id: "spicy-beef-patty",
    categoryId: "patties",
    name: "Spicy Beef Patty",
    price: 3.60,
    priceDisplay: "$3.60",
    description: "Beef patty with a spicy kick in golden flaky turmeric pastry crust with Scotch bonnet warmth.",
    image: "/images/dishes/0057.jpg",
    tags: ["Hot & Flaky"],
    spiceLevel: 3
  },
  {
    id: "chicken-patty",
    categoryId: "patties",
    name: "Chicken Patty",
    price: 3.60,
    priceDisplay: "$3.60",
    description: "Juicy chicken patty with tender seasoned shredded chicken inside a golden flaky crust.",
    image: "/images/dishes/0060.jpg",
    tags: ["Customer Favorite"],
    spiceLevel: 2
  },
  {
    id: "veggie-patty",
    categoryId: "patties",
    name: "Vegetable Patty",
    price: 3.60,
    priceDisplay: "$3.60",
    description: "Vegetable patty filled with mixed vegetables, carrots, corn, cabbage, and Island spices.",
    image: "/images/dishes/0061.jpg",
    tags: ["Vegetarian"],
    spiceLevel: 1
  },
  {
    id: "patty-with-cheese",
    categoryId: "patties",
    name: "Patty with Cheese",
    price: 6.60,
    priceDisplay: "$6.60",
    description: "Any patty of your choice stuffed with melted creamy cheddar cheese ($3.60 patty + $3.00 cheese).",
    image: "/images/dishes/0057.jpg",
    tags: ["Cheesy Upgrade"],
    spiceLevel: 2
  },

  // 6. REGULAR SIDES
  {
    id: "french-fries",
    categoryId: "sides",
    name: "Fries",
    price: 6.00,
    priceDisplay: "$6.00",
    description: "Crispy potato sticks served hot and seasoned to golden perfection.",
    image: "/images/dishes/0021.jpg",
    tags: ["Standard Side"]
  },
  {
    id: "mac-salad",
    categoryId: "sides",
    name: "Mac Salad",
    price: 6.00,
    priceDisplay: "$6.00",
    description: "Creamy elbow macaroni salad with diced bell peppers and carrots in our signature island dressing.",
    image: "/images/dishes/macaroni-salad.jpg",
    tags: ["Cool & Creamy"]
  },
  {
    id: "garlic-bread",
    categoryId: "sides",
    name: "Garlic Bread",
    price: 6.00,
    priceDisplay: "$6.00",
    description: "Buttery bread infused with garlic herbs and toasted golden.",
    image: "/images/dishes/garlic-bread.jpg",
    tags: ["Toasted Warm"]
  },
  {
    id: "caribbean-coleslaw",
    categoryId: "sides",
    name: "Coleslaw",
    price: 6.00,
    priceDisplay: "$6.00",
    description: "Crisp shredded green and red cabbage and carrots tossed in a refreshing tangy Caribbean dressing.",
    image: "/images/dishes/coleslaw.jpg",
    tags: ["Fresh Crunch"]
  },
  {
    id: "veggie-and-dip",
    categoryId: "sides",
    name: "Veggie and Dip",
    price: 6.00,
    priceDisplay: "$6.00",
    description: "Crunchy chilled vegetables served with a side of creamy ranch or blue cheese dip.",
    image: "/images/dishes/0020.jpg",
    tags: ["Cool Crunch"]
  },

  // 6. PREMIUM SIDES
  {
    id: "mac-pie",
    categoryId: "premium-sides",
    name: "Mac Pie",
    price: 8.50,
    priceDisplay: "$8.50",
    description: "Authentic Caribbean baked macaroni pie layered with rich melted cheddar cheese baked golden brown.",
    image: "/images/dishes/mac-pie.jpg",
    tags: ["Baked Mac Pie", "Island Comfort"]
  },
  {
    id: "poutine",
    categoryId: "premium-sides",
    name: "Poutine",
    price: 8.50,
    priceDisplay: "$8.50",
    description: "Crispy golden french fries loaded with real cheese curds and smothered in rich savory hot gravy.",
    image: "/images/dishes/poutine.jpg",
    tags: ["Cheesy & Savory", "Canadian Classic"]
  },
  {
    id: "festival",
    categoryId: "premium-sides",
    name: "Festival",
    price: 8.50,
    priceDisplay: "$8.50",
    description: "Traditional Jamaican sweet fried cornmeal dumplings, golden and crispy on the outside and fluffy soft inside.",
    image: "/images/dishes/festivals.jpg",
    tags: ["Jamaican Sweet Dumplings", "Authentic Favorite"]
  },
  {
    id: "onion-rings",
    categoryId: "premium-sides",
    name: "Onion Rings",
    price: 8.50,
    priceDisplay: "$8.50",
    description: "Crispy onion slices in a golden crunchy batter.",
    image: "/images/dishes/0015.jpg",
    tags: ["Premium Side"]
  },
  {
    id: "garlic-bread-cheese",
    categoryId: "premium-sides",
    name: "Garlic Bread with Cheese",
    price: 8.50,
    priceDisplay: "$8.50",
    description: "Rich, buttery bread smothered in melted cheese and garlic herbs.",
    image: "/images/dishes/0030.jpg",
    tags: ["Melted Cheese"]
  },

  // 8. DRINKS
  {
    id: "coke-can",
    categoryId: "drinks",
    name: "Coke",
    price: 2.50,
    priceDisplay: "$2.50",
    description: "Classic crisp Coca-Cola chilled 355ml can.",
    image: "/images/drinks/coke.jpg",
    tags: ["Canned Pop", "Chilled"]
  },
  {
    id: "diet-coke-can",
    categoryId: "drinks",
    name: "Diet Coke",
    price: 2.50,
    priceDisplay: "$2.50",
    description: "Refreshing sugar-free Diet Coke chilled 355ml can.",
    image: "/images/drinks/diet-coke.jpg",
    tags: ["Canned Pop", "Zero Calorie"]
  },
  {
    id: "sprite-can",
    categoryId: "drinks",
    name: "Sprite",
    price: 2.50,
    priceDisplay: "$2.50",
    description: "Crisp lemon-lime Sprite chilled 355ml can.",
    image: "/images/drinks/sprite.jpg",
    tags: ["Canned Pop", "Lemon-Lime"]
  },
  {
    id: "ginger-ale-can",
    categoryId: "drinks",
    name: "Ginger Ale",
    price: 2.50,
    priceDisplay: "$2.50",
    description: "Canada Dry Ginger Ale chilled 355ml can.",
    image: "/images/drinks/ginger-ale.jpg",
    tags: ["Canned Pop", "Real Ginger"]
  },
  {
    id: "iced-tea-can",
    categoryId: "drinks",
    name: "Iced Tea",
    price: 2.50,
    priceDisplay: "$2.50",
    description: "Sweet lemon iced tea chilled 355ml can.",
    image: "/images/drinks/iced-tea.jpg",
    tags: ["Canned Pop", "Lemon Tea"]
  },
  {
    id: "bottled-water",
    categoryId: "drinks",
    name: "Bottled Water",
    price: 2.50,
    priceDisplay: "$2.50",
    description: "Pure refreshing natural spring bottled water (500ml).",
    image: "/images/drinks/water.jpg",
    tags: ["Spring Water", "Chilled"]
  },
  {
    id: "pineapple-bigga",
    categoryId: "drinks",
    name: "Pineapple Bigga",
    price: 4.00,
    priceDisplay: "$4.00",
    description: "Authentic imported Jamaican sparkling pineapple soda (600ml bottle).",
    image: "/images/drinks/bigga-pineapple.jpg",
    tags: ["Jamaican Island Soda", "Direct Import"]
  },
  {
    id: "fruit-punch-bigga",
    categoryId: "drinks",
    name: "Fruit Punch Bigga",
    price: 4.00,
    priceDisplay: "$4.00",
    description: "Authentic imported Jamaican sparkling tropical fruit punch soda (600ml bottle).",
    image: "/images/drinks/bigga-fruit-punch.jpg",
    tags: ["Jamaican Island Soda", "Direct Import"]
  },
  {
    id: "jamaican-kola-bigga",
    categoryId: "drinks",
    name: "Jamaican Kola Bigga",
    price: 4.00,
    priceDisplay: "$4.00",
    description: "Authentic imported Jamaican sparkling kola champagne soda (600ml bottle).",
    image: "/images/drinks/bigga-kola.jpg",
    tags: ["Jamaican Island Soda", "Direct Import"]
  },
  {
    id: "apple-bigga",
    categoryId: "drinks",
    name: "Apple Bigga",
    price: 4.00,
    priceDisplay: "$4.00",
    description: "Authentic imported Jamaican sparkling crisp apple soda (600ml bottle).",
    image: "/images/drinks/bigga-apple.jpg",
    tags: ["Jamaican Island Soda", "Direct Import"]
  }
];
