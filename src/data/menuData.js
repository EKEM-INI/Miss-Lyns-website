export const menuCategories = [
  { id: "family-meals", name: "Family Feasts & Bundles", icon: "Users", count: 2 },
  { id: "wings", name: "Signature Wings", icon: "Flame", count: 5 },
  { id: "combos", name: "Individual Combos", icon: "Layers", count: 4 },
  { id: "chicken", name: "Jerk & Fried Chicken", icon: "Utensils", count: 6 },
  { id: "patties", name: "Jamaican Patties", icon: "Sparkles", count: 5 },
  { id: "sides", name: "Sides & Upgrades", icon: "Soup", count: 10 },
  { id: "sauces", name: "Sauces & Dips", icon: "Droplet", count: 5 },
  { id: "drinks", name: "Island Sodas & Drinks", icon: "Coffee", count: 6 }
];

export const menuItems = [
  // 1. FAMILY MEALS
  {
    id: "family-feast-bundle",
    categoryId: "family-meals",
    name: "Family Feast Promotional Bundle",
    price: 49.99,
    priceDisplay: "$49.99",
    description: "The ultimate Caribbean feast! Includes your choice of 3 Proteins (Wings, Jerk Chicken, Fried Chicken) + 3 Comfort Sides + 4 Cold Drinks. Serves 4-6.",
    image: "/images/dishes/0053.jpg",
    altImages: ["/images/dishes/0019.jpg", "/images/dishes/0021.jpg", "/images/dishes/0017.jpg"],
    tags: ["Best Value", "Feeds 4-6", "Special Promotion"],
    isSpecial: true,
    spiceLevel: 2
  },
  {
    id: "party-wings-pack",
    categoryId: "family-meals",
    name: "5 Lbs Party Wing Platter",
    price: 79.99,
    priceDisplay: "$79.99",
    description: "5 pounds of fresh, plump jumbo wings tossed in up to 3 of your favorite sauces. Served with large veggies and 4 dips.",
    image: "/images/dishes/0018.jpg",
    tags: ["Party Size", "Feeds 5-8"],
    spiceLevel: 2
  },

  // 2. WINGS
  {
    id: "wings-1lb",
    categoryId: "wings",
    name: "1 Lb Signature Wings",
    price: 17.25,
    priceDisplay: "$17.25",
    description: "One pound of fresh, juicy wings fried to golden crispness or tossed in your choice of Miss Lyn's signature sauces. Served with carrots, celery, and dip.",
    image: "/images/dishes/0053.jpg",
    tags: ["Top Seller", "Fresh Never Frozen"],
    spiceLevel: 2
  },
  {
    id: "wings-1-5lb",
    categoryId: "wings",
    name: "1.5 Lbs Signature Wings",
    price: 25.25,
    priceDisplay: "$25.25",
    description: "A generous portion of crispy or sauced wings cooked fresh to order with choice of seasoning, fresh veggies, and house dip.",
    image: "/images/dishes/0031.jpg",
    tags: ["Popular Size"],
    spiceLevel: 2
  },
  {
    id: "wings-2lb",
    categoryId: "wings",
    name: "2 Lbs Signature Wings",
    price: 33.25,
    priceDisplay: "$33.25",
    description: "Two full pounds of our famous wings. Pick up to 2 distinct sauces. Includes double veggies and dipping sauces.",
    image: "/images/dishes/0018.jpg",
    tags: ["Great to Share"],
    spiceLevel: 2
  },
  {
    id: "wings-3lb",
    categoryId: "wings",
    name: "3 Lbs Signature Wings",
    price: 49.50,
    priceDisplay: "$49.50",
    description: "Three pounds of crispy golden wings tossed in up to 3 signature flavours. Served with triple veggies and dips.",
    image: "/images/dishes/0037.jpg",
    tags: ["Crowd Pleaser"],
    spiceLevel: 2
  },
  {
    id: "crispy-naked-wings-1lb",
    categoryId: "wings",
    name: "1 Lb Crispy Dry Seasoned Wings",
    price: 17.25,
    priceDisplay: "$17.25",
    description: "Extra crunchy wings lightly dusted with Miss Lyn's Caribbean dry spice blend, lemon pepper, or jerk dust.",
    image: "/images/dishes/0016.jpg",
    tags: ["Extra Crispy", "Dry Rub"],
    spiceLevel: 1
  },

  // 3. COMBOS (Authoritative Single Listing)
  {
    id: "wings-fries-combo",
    categoryId: "combos",
    name: "Classic 1 Lb Wings & Fries Combo",
    price: 19.99,
    priceDisplay: "$19.99",
    description: "1 Lb of signature wings tossed in your choice of sauce, served alongside crispy golden french fries and a chilled can of pop.",
    image: "/images/dishes/0053.jpg",
    tags: ["#1 Lunch Combo"],
    spiceLevel: 2
  },
  {
    id: "jerk-chicken-combo",
    categoryId: "combos",
    name: "2-Piece Jerk Chicken Combo",
    price: 15.50,
    priceDisplay: "$15.50",
    description: "2 pieces of authentic slow-marinated Jamaican jerk chicken, served with your choice of standard side and a cold drink.",
    image: "/images/dishes/0019.jpg",
    tags: ["Authentic Jamaican"],
    spiceLevel: 3
  },
  {
    id: "fried-chicken-combo",
    categoryId: "combos",
    name: "2-Piece Fried Chicken Combo",
    price: 15.50,
    priceDisplay: "$15.50",
    description: "2 pieces of golden spiced crispy fried chicken with your choice of standard side and a cold drink.",
    image: "/images/dishes/0017.jpg",
    tags: ["Comfort Classic"],
    spiceLevel: 1
  },
  {
    id: "double-protein-combo",
    categoryId: "combos",
    name: "Double Protein Power Combo",
    price: 28.50,
    priceDisplay: "$28.50",
    description: "Can't decide? Get 1 Lb of crispy wings + 2 pieces of Jerk or Fried Chicken, complete with side and beverage.",
    image: "/images/dishes/0039.jpg",
    tags: ["High Protein", "Best of Both"],
    spiceLevel: 2
  },

  // 4. JERK & FRIED CHICKEN
  {
    id: "jerk-chicken-2pc",
    categoryId: "chicken",
    name: "Jerk Chicken (2 Pieces)",
    price: 9.00,
    priceDisplay: "$9.00",
    description: "Two pieces of dark meat chicken marinated in authentic Jamaican pimento, scallions, thyme, and scotch bonnet peppers, cooked to juicy tenderness.",
    image: "/images/dishes/0019.jpg",
    tags: ["Authentic Jerk"],
    spiceLevel: 3
  },
  {
    id: "jerk-chicken-4pc",
    categoryId: "chicken",
    name: "Jerk Chicken (4 Pieces)",
    price: 17.25,
    priceDisplay: "$17.25",
    description: "Four pieces of our signature jerk chicken basted in rich spicy house jerk glaze.",
    image: "/images/dishes/0039.jpg",
    tags: ["Authentic Jerk"],
    spiceLevel: 3
  },
  {
    id: "jerk-chicken-6pc",
    categoryId: "chicken",
    name: "Jerk Chicken (6 Pieces)",
    price: 24.50,
    priceDisplay: "$24.50",
    description: "Six succulent pieces of authentic jerk chicken. Perfect for dinner or sharing.",
    image: "/images/dishes/0040.jpg",
    tags: ["Family Portion"],
    spiceLevel: 3
  },
  {
    id: "fried-chicken-2pc",
    categoryId: "chicken",
    name: "Crispy Fried Chicken (2 Pieces)",
    price: 9.00,
    priceDisplay: "$9.00",
    description: "Two pieces of tender chicken drumstick and thigh with our seasoned golden crunchy crust.",
    image: "/images/dishes/0017.jpg",
    tags: ["Golden Crisp"],
    spiceLevel: 1
  },
  {
    id: "fried-chicken-4pc",
    categoryId: "chicken",
    name: "Crispy Fried Chicken (4 Pieces)",
    price: 17.25,
    priceDisplay: "$17.25",
    description: "Four pieces of crunchy, deeply seasoned Caribbean-style fried chicken.",
    image: "/images/dishes/0038.jpg",
    tags: ["Golden Crisp"],
    spiceLevel: 1
  },
  {
    id: "fried-chicken-6pc",
    categoryId: "chicken",
    name: "Crispy Fried Chicken (6 Pieces)",
    price: 24.50,
    priceDisplay: "$24.50",
    description: "Six pieces of crispy fried chicken made fresh to order.",
    image: "/images/dishes/0038.jpg",
    tags: ["Sharing Size"],
    spiceLevel: 1
  },

  // 5. JAMAICAN PATTIES
  {
    id: "spicy-beef-patty",
    categoryId: "patties",
    name: "Spicy Beef Jamaican Patty",
    price: 3.25,
    priceDisplay: "$3.25",
    description: "Golden flaky turmeric pastry crust packed with spicy seasoned minced beef and Scotch bonnet aroma.",
    image: "/images/dishes/0057.jpg",
    tags: ["Hot & Flaky"],
    spiceLevel: 3
  },
  {
    id: "mild-beef-patty",
    categoryId: "patties",
    name: "Mild Beef Jamaican Patty",
    price: 3.25,
    priceDisplay: "$3.25",
    description: "Flaky yellow pastry stuffed with savory seasoned beef and Jamaican herbs with mild warmth.",
    image: "/images/dishes/0013.jpg",
    tags: ["Traditional Mild"],
    spiceLevel: 1
  },
  {
    id: "jerk-chicken-patty",
    categoryId: "patties",
    name: "Jerk Chicken Patty",
    price: 3.50,
    priceDisplay: "$3.50",
    description: "Tender shredded chicken seasoned with jerk spices inside a golden flaky crust.",
    image: "/images/dishes/0060.jpg",
    tags: ["Customer Favorite"],
    spiceLevel: 2
  },
  {
    id: "veggie-patty",
    categoryId: "patties",
    name: "Vegetable Jamaican Patty",
    price: 3.25,
    priceDisplay: "$3.25",
    description: "Flaky crust loaded with seasoned carrots, corn, cabbage, and Island spices.",
    image: "/images/dishes/0061.jpg",
    tags: ["Vegetarian"],
    spiceLevel: 1
  },
  {
    id: "patty-cheese-cocobread",
    categoryId: "patties",
    name: "Patty with Melted Cheese",
    price: 4.50,
    priceDisplay: "$4.50",
    description: "Any patty of your choice stuffed with melted cheddar cheese.",
    image: "/images/dishes/0057.jpg",
    tags: ["Cheesy Upgrade"],
    spiceLevel: 2
  },

  // 6. SIDES & UPGRADES
  {
    id: "french-fries",
    categoryId: "sides",
    name: "Crispy French Fries",
    price: 6.00,
    priceDisplay: "$6.00",
    description: "Classic golden cut potato fries fried crisp with sea salt.",
    image: "/images/dishes/0021.jpg",
    tags: ["Standard Side"]
  },
  {
    id: "poutine-classic",
    categoryId: "sides",
    name: "Classic Canadian Poutine",
    price: 9.50,
    priceDisplay: "$9.50",
    description: "Golden fries smothered in real squeaky cheese curds and piping hot savoury brown gravy.",
    image: "/images/dishes/0026.jpg",
    tags: ["Premium Side", "Canadian Classic"]
  },
  {
    id: "mac-and-cheese-pie",
    categoryId: "sides",
    name: "Crispy Mac & Cheese Pie",
    price: 7.50,
    priceDisplay: "$7.50",
    description: "Authentic Caribbean-style baked macaroni and cheese pie, sliced and crisped with cheesy crust.",
    image: "/images/dishes/0014.jpg",
    tags: ["House Specialty", "Comfort Food"]
  },
  {
    id: "onion-rings",
    categoryId: "sides",
    name: "Crispy Battered Onion Rings",
    price: 7.00,
    priceDisplay: "$7.00",
    description: "Thick-cut sweet onion rings in golden crispy batter.",
    image: "/images/dishes/0015.jpg",
    tags: ["Crispy Side"]
  },
  {
    id: "jamaican-festivals",
    categoryId: "sides",
    name: "Jamaican Festivals (3 Pieces)",
    price: 5.00,
    priceDisplay: "$5.00",
    description: "Sweet fried cornmeal and flour dough sticks — the classic Jamaican pairing for wings and jerk chicken.",
    image: "/images/dishes/0022.jpg",
    tags: ["Authentic Side", "Sweet & Savoury"]
  },
  {
    id: "macaroni-salad",
    categoryId: "sides",
    name: "Creamy Macaroni Salad",
    price: 5.50,
    priceDisplay: "$5.50",
    description: "Chilled elbow macaroni tossed in rich seasoned creamy dressing.",
    image: "/images/dishes/0024.jpg",
    tags: ["Cool Side"]
  },
  {
    id: "caribbean-coleslaw",
    categoryId: "sides",
    name: "Fresh Caribbean Coleslaw",
    price: 5.00,
    priceDisplay: "$5.00",
    description: "Crunchy hand-shredded cabbage and carrots tossed in tangy homemade dressing.",
    image: "/images/dishes/0025.jpg",
    tags: ["Fresh & Crisp"]
  },
  {
    id: "garlic-bread",
    categoryId: "sides",
    name: "Toasted Garlic Bread (3 Slices)",
    price: 4.50,
    priceDisplay: "$4.50",
    description: "Thick Texas toast brushed with aromatic garlic herb butter and toasted golden.",
    image: "/images/dishes/0023.jpg",
    tags: ["Toasted Warm"]
  },
  {
    id: "garlic-cheese-toast",
    categoryId: "sides",
    name: "Garlic Cheese Toast (3 Slices)",
    price: 6.50,
    priceDisplay: "$6.50",
    description: "Garlic Texas toast layered with bubbly melted cheddar and mozzarella cheese.",
    image: "/images/dishes/0030.jpg",
    tags: ["Melted Cheese"]
  },
  {
    id: "veggies-and-dip",
    categoryId: "sides",
    name: "Fresh Veggies & Dip",
    price: 4.50,
    priceDisplay: "$4.50",
    description: "Crisp chilled celery sticks and carrot batons served with ranch or blue cheese dip.",
    image: "/images/dishes/0020.jpg",
    tags: ["Cool Crunch"]
  },

  // 7. SAUCES & DIPS
  {
    id: "house-jerk-sauce",
    categoryId: "sauces",
    name: "Miss Lyn's House Jerk Sauce",
    price: 1.75,
    priceDisplay: "$1.75",
    description: "Our signature blend of scotch bonnet, allspice, thyme, garlic, and Island cane sugar.",
    image: "/images/dishes/0028.jpg",
    tags: ["Signature Sauce"],
    spiceLevel: 3
  },
  {
    id: "mango-pepper-sauce",
    categoryId: "sauces",
    name: "Mango Scotch Bonnet Pepper Dip",
    price: 1.75,
    priceDisplay: "$1.75",
    description: "Sweet tropical mango balanced with fiery fresh scotch bonnet peppers.",
    image: "/images/dishes/0029.jpg",
    tags: ["Sweet & Hot"],
    spiceLevel: 3
  },
  {
    id: "rich-house-gravy",
    categoryId: "sauces",
    name: "Rich Savoury Gravy",
    price: 2.00,
    priceDisplay: "$2.00",
    description: "Piping hot, rich brown gravy perfect for dipping fries, wings, and festivals.",
    image: "/images/dishes/0028.jpg",
    tags: ["Warm Savoury"],
    spiceLevel: 0
  },
  {
    id: "blue-cheese-dip",
    categoryId: "sauces",
    name: "Creamy Blue Cheese Dip",
    price: 1.50,
    priceDisplay: "$1.50",
    description: "Cool, tangy blue cheese dip made for hot wings.",
    image: "/images/dishes/0020.jpg",
    tags: ["Cool Dip"],
    spiceLevel: 0
  },
  {
    id: "ranch-dip",
    categoryId: "sauces",
    name: "Buttermilk Ranch Dip",
    price: 1.50,
    priceDisplay: "$1.50",
    description: "Classic buttermilk and herb ranch dip.",
    image: "/images/dishes/0020.jpg",
    tags: ["Cool Dip"],
    spiceLevel: 0
  },

  // 8. DRINKS
  {
    id: "canned-pop",
    categoryId: "drinks",
    name: "Canned Soft Drinks (355ml)",
    price: 2.00,
    priceDisplay: "$2.00",
    description: "Choice of Coca-Cola, Diet Coke, Sprite, Canada Dry Ginger Ale, C-Plus Orange, Nestea, or Root Beer.",
    image: "/images/dishes/0020.jpg",
    tags: ["Chilled Can"]
  },
  {
    id: "ting-grapefruit",
    categoryId: "drinks",
    name: "Ting Sparkling Grapefruit (Jamaica)",
    price: 3.50,
    priceDisplay: "$3.50",
    description: "Authentic Jamaican sparkling soda made with real Caribbean grapefruit juice.",
    image: "/images/dishes/0047.jpg",
    tags: ["Island Favorite", "Imported"]
  },
  {
    id: "bigga-soda",
    categoryId: "drinks",
    name: "Bigga Jamaican Soda",
    price: 3.50,
    priceDisplay: "$3.50",
    description: "Vibrant tropical soda. Flavors: Pineapple, Fruit Punch, Ginger Beer, Kola Champagne, Grape.",
    image: "/images/dishes/0029.jpg",
    tags: ["Imported from Jamaica"]
  },
  {
    id: "dg-beverages",
    categoryId: "drinks",
    name: "D&G Jamaican Sodas",
    price: 3.50,
    priceDisplay: "$3.50",
    description: "Desnoes & Geddes authentic Jamaican Cream Soda, Pineapple Soda, or Jamaican Ginger Beer.",
    image: "/images/dishes/0049.jpg",
    tags: ["Jamaican Heritage"]
  },
  {
    id: "tropical-pineapple-soda",
    categoryId: "drinks",
    name: "Tropical Pineapple Island Soda",
    price: 3.50,
    priceDisplay: "$3.50",
    description: "Crisp and bubbly tropical pineapple soda.",
    image: "/images/dishes/0051.jpg",
    tags: ["Tropical Sweet"]
  },
  {
    id: "spring-water",
    categoryId: "drinks",
    name: "Bottled Spring Water (500ml)",
    price: 1.75,
    priceDisplay: "$1.75",
    description: "Pure, chilled natural spring water.",
    image: "/images/dishes/0028.jpg",
    tags: ["Pure & Fresh"]
  }
];
