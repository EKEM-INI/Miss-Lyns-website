export const menuCategories = [
  { id: "family-meals", name: "Family Packs & Feasts", icon: "Users", count: 4 },
  { id: "wings", name: "Wings (Just Wings)", icon: "Flame", count: 6 },
  { id: "combos", name: "Combos", icon: "Layers", count: 6 },
  { id: "chicken", name: "Jerk Chicken", icon: "Utensils", count: 3 },
  { id: "patties", name: "Jamaican Patties", icon: "Sparkles", count: 5 },
  { id: "sides", name: "Regular Sides", icon: "Soup", count: 5 },
  { id: "premium-sides", name: "Premium Sides", icon: "Sparkles", count: 2 },
  { id: "drinks", name: "Drinks", icon: "Coffee", count: 4 }
];

export const menuItems = [
  // 1. FAMILY PACKS & FEASTS
  {
    id: "fp2-wings",
    categoryId: "family-meals",
    name: "Fp2 - 2 Lbs Wings (1 Sauce)",
    price: 46.80,
    priceDisplay: "$46.80",
    description: "2 medium sides, 2 pop, 2 sauce max per order. Plump crispy wings cooked fresh.",
    image: "/images/dishes/0053.jpg",
    tags: ["Family Size", "Includes 2 Sides & 2 Drinks"],
    spiceLevel: 2
  },
  {
    id: "fp3-wings",
    categoryId: "family-meals",
    name: "Fp3 - 3 Lbs Wings (1 Sauce)",
    price: 69.60,
    priceDisplay: "$69.60",
    description: "3 medium sides, 3 pop, 3 sauce max per order. Plump crispy wings tossed in your favourite sauce.",
    image: "/images/dishes/0053.jpg",
    tags: ["Family Size", "Includes 3 Sides & 3 Drinks"],
    spiceLevel: 2
  },
  {
    id: "fp5-wings",
    categoryId: "family-meals",
    name: "Fp5 - 5 Lbs Wings (1 Sauce)",
    price: 114.60,
    priceDisplay: "$114.60",
    description: "5 medium sides, 5 pop, 5 sauce max per order. Jumbo party portion for groups and families.",
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

  // 2. WINGS (JUST WINGS)
  {
    id: "wings-1lb",
    categoryId: "wings",
    name: "1 Lb Wings",
    price: 18.00,
    priceDisplay: "$18.00",
    description: "Crispy breaded chicken wings, 1 lb. Fresh, juicy wings fried to golden crispness or tossed in your choice of sauce.",
    image: "/images/dishes/0053.jpg",
    tags: ["#1 Most Liked", "Fresh Never Frozen"],
    spiceLevel: 2
  },
  {
    id: "wings-1-5lb",
    categoryId: "wings",
    name: "1.5 Lbs Wings",
    price: 26.40,
    priceDisplay: "$26.40",
    description: "Crispy fried chicken wings, 1.5 lb portion cooked fresh to order.",
    image: "/images/dishes/0053.jpg",
    tags: ["Popular Size"],
    spiceLevel: 2
  },
  {
    id: "wings-2lb",
    categoryId: "wings",
    name: "2 Lbs Wings",
    price: 34.80,
    priceDisplay: "$34.80",
    description: "Crispy fried chicken wings, 2 lb portion. Two full pounds of famous wings.",
    image: "/images/dishes/0053.jpg",
    tags: ["#2 Most Liked", "Great to Share"],
    spiceLevel: 2
  },
  {
    id: "wings-3lb",
    categoryId: "wings",
    name: "3 Lbs Wings",
    price: 51.60,
    priceDisplay: "$51.60",
    description: "Crispy fried chicken wings, 3 lb portion. Three pounds of golden wings tossed in signature flavours.",
    image: "/images/dishes/0053.jpg",
    tags: ["Crowd Pleaser"],
    spiceLevel: 2
  },
  {
    id: "wings-5lb",
    categoryId: "wings",
    name: "5 Lbs Wings",
    price: 84.60,
    priceDisplay: "$84.60",
    description: "Chicken wings, 5 lb portion. Generous platter for sharing with family and friends.",
    image: "/images/dishes/0053.jpg",
    tags: ["Party Size"],
    spiceLevel: 2
  },
  {
    id: "wings-10lb",
    categoryId: "wings",
    name: "10 Lbs Wings",
    price: 156.00,
    priceDisplay: "$156.00",
    description: "10 lb order of chicken wings, ideal for sharing, game nights, and celebrations.",
    image: "/images/dishes/0053.jpg",
    tags: ["Ultimate Feast"],
    spiceLevel: 2
  },

  // 3. COMBOS
  {
    id: "combo-1",
    categoryId: "combos",
    name: "1 - Half Pound Wings Combo",
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
    name: "3 - 1.5 Lbs Wings (1 Sauce) Combo",
    price: 33.40,
    priceDisplay: "$33.40",
    description: "1 medium side, 1 pop, 1 sauce per order. 1.5 lbs of crispy wings with side and drink.",
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
    name: "6 - Half Pound Wings + 2 Pcs Jerk Chicken (1 Sauce) Combo",
    price: 25.80,
    priceDisplay: "$25.80",
    description: "1 medium side, 1 pop, 1 sauce per order. Half pound of crispy wings plus 2 pieces of authentic jerk chicken.",
    image: "/images/dishes/0053.jpg",
    tags: ["Best of Both"],
    spiceLevel: 3
  },

  // 4. JERK CHICKEN
  {
    id: "jerk-chicken-2pc",
    categoryId: "chicken",
    name: "2 Pcs Jerk Chicken (1 Sauce)",
    price: 9.60,
    priceDisplay: "$9.60",
    description: "Tender jerk seasoned chicken pieces served with a side of sauce. Marinated in Jamaican pimento and scotch bonnet peppers.",
    image: "/images/dishes/0019.jpg",
    tags: ["Authentic Jerk"],
    spiceLevel: 3
  },
  {
    id: "jerk-chicken-4pc",
    categoryId: "chicken",
    name: "4 Pcs Jerk Chicken (2 Sauce)",
    price: 18.00,
    priceDisplay: "$18.00",
    description: "Jerk seasoned chicken pieces served with two sauces. Basted in rich spicy house jerk glaze.",
    image: "/images/dishes/0039.jpg",
    tags: ["Authentic Jerk"],
    spiceLevel: 3
  },
  {
    id: "jerk-chicken-6pc",
    categoryId: "chicken",
    name: "6 Pcs Jerk Chicken (2 Sauce)",
    price: 26.40,
    priceDisplay: "$26.40",
    description: "Jerk seasoned chicken pieces served with two sauces. Six succulent pieces perfect for sharing.",
    image: "/images/dishes/0040.jpg",
    tags: ["Family Portion"],
    spiceLevel: 3
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

  // 7. PREMIUM SIDES
  {
    id: "onion-rings",
    categoryId: "premium-sides",
    name: "Onion Rings",
    price: 9.60,
    priceDisplay: "$9.60",
    description: "Crispy onion slices in a golden crunchy batter.",
    image: "/images/dishes/0015.jpg",
    tags: ["Premium Side"]
  },
  {
    id: "garlic-bread-cheese",
    categoryId: "premium-sides",
    name: "Garlic Bread with Cheese",
    price: 9.60,
    priceDisplay: "$9.60",
    description: "Rich, buttery bread smothered in melted cheese and garlic herbs.",
    image: "/images/dishes/0030.jpg",
    tags: ["Melted Cheese"]
  },

  // 8. DRINKS
  {
    id: "canned-pop",
    categoryId: "drinks",
    name: "Canned Pop & Bottled Water",
    price: 2.50,
    priceDisplay: "$2.50",
    description: "Chilled canned drinks (Coke, Diet Coke, Sprite, Ginger Ale, Ice T) and refreshing pure bottled water.",
    image: "/images/dishes/drinks.png",
    tags: ["Chilled Beverages"]
  },
  {
    id: "bigga-island-soda",
    categoryId: "drinks",
    name: "Bigga Jamaican Island Soda",
    price: 4.00,
    priceDisplay: "$4.00",
    description: "Authentic imported Jamaican sodas in Pineapple Bigga, Fruit Punch Bigga, and Jamaican Kola Bigga.",
    image: "/images/dishes/drinks.png",
    tags: ["Direct Jamaican Import"]
  },
  {
    id: "gatorade-drink",
    categoryId: "drinks",
    name: "Gatorade Sports Drink",
    price: 4.00,
    priceDisplay: "$4.00",
    description: "Refreshing sports drinks in popular flavors including Cool Blue, Fruit Punch, and Orange.",
    image: "/images/dishes/drinks.png",
    tags: ["Electrolyte Refreshment"]
  },
  {
    id: "island-drinks-selection",
    categoryId: "drinks",
    name: "Cold Drinks & Island Sodas Spotlight",
    price: 2.50,
    priceDisplay: "$2.50 – $4.00",
    description: "All cold drinks and refreshing beverages in one spot! Includes authentic imported Jamaican Island sodas (Bigga, Ting, D&G), refreshing water, Gatorade, and chilled canned soft drinks.",
    image: "/images/dishes/drinks.png",
    tags: ["All Beverages Included", "Direct Jamaican Imports"],
    isDrinksSpotlight: true
  }
];
