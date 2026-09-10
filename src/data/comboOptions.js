export const comboProteins = [
  {
    id: "wings",
    name: "Wings",
    tagline: "Crispy or sauced in your favorite flavour",
    image: "/images/dishes/0053.jpg",
    altImage: "/images/dishes/0031.jpg",
    description: "Plump, juicy wings seasoned with Caribbean spices and fried to golden crisp perfection.",
    badge: "Most Popular"
  },
  {
    id: "jerk-chicken",
    name: "Jerk Chicken",
    tagline: "Authentic slow-marinated Jamaican jerk",
    image: "/images/dishes/0019.jpg",
    altImage: "/images/dishes/0039.jpg",
    description: "Tender chicken infused with Miss Lyn's house jerk marinade, pimento, and scotch bonnet peppers.",
    badge: "House Specialty"
  },
  {
    id: "fried-chicken",
    name: "Fried Chicken",
    tagline: "Crunchy golden seasoned chicken",
    image: "/images/dishes/0017.jpg",
    altImage: "/images/dishes/0038.jpg",
    description: "Deep-seasoned chicken drumsticks and thighs coated in our signature spiced crunchy crust.",
    badge: "Crispy Favorite"
  }
];

export const comboSides = {
  standard: [
    {
      id: "fries",
      name: "Fries",
      type: "standard",
      image: "/images/dishes/0021.jpg",
      description: "Crispy golden cut potato fries seasoned to perfection."
    },
    {
      id: "jamaican-festivals",
      name: "Jamaican Festivals",
      type: "standard",
      image: "/images/dishes/0022.jpg",
      description: "Crispy, sweet Jamaican fried cornmeal dumplings—the classic island pairing."
    },
    {
      id: "coleslaw",
      name: "Coleslaw",
      type: "standard",
      image: "/images/dishes/0025.jpg",
      description: "Cool, crisp shredded cabbage and carrots in house creamy dressing."
    },
    {
      id: "macaroni-salad",
      name: "Macaroni Salad",
      type: "standard",
      image: "/images/dishes/0024.jpg",
      description: "Rich and creamy chilled macaroni salad with subtle Caribbean spice."
    }
  ],
  premium: [
    {
      id: "poutine",
      name: "Poutine",
      type: "premium",
      upgradeBadge: "Premium Upgrade",
      image: "/images/dishes/0026.jpg",
      description: "Golden crispy fries topped with real cheese curds and piping hot savoury gravy."
    },
    {
      id: "mac-and-cheese-pie",
      name: "Deep-Fried Mac Pie",
      type: "premium",
      upgradeBadge: "Premium Upgrade",
      image: "/images/dishes/0014.jpg",
      description: "Classic Caribbean macaroni pie breaded and fried to golden, crunchy perfection."
    },
    {
      id: "sweet-potato-fries",
      name: "Sweet Potato Fries",
      type: "premium",
      upgradeBadge: "Premium Upgrade",
      image: "/images/dishes/0021.jpg",
      description: "Crispy sweet potato fries with a light savoury dusting."
    },
    {
      id: "onion-rings",
      name: "Onion Rings",
      type: "premium",
      upgradeBadge: "Premium Upgrade",
      image: "/images/dishes/0015.jpg",
      description: "Battered thick-cut sweet onion rings fried to deep golden crispness."
    }
  ]
};

export const comboDrinks = {
  standard: [
    {
      id: "pop",
      name: "Pop (Can)",
      type: "standard",
      options: ["Coca-Cola", "Diet Coke", "Sprite", "Canada Dry Ginger Ale", "C-Plus Orange", "Nestea Iced Tea", "A&W Root Beer"],
      image: "/images/dishes/drinks.png",
      description: "Refreshing 355ml chilled canned soft drink of your choice."
    },
    {
      id: "water",
      name: "Spring Water / Cran Wata",
      type: "standard",
      options: ["Bottled Spring Water", "Cran Wata"],
      image: "/images/dishes/drinks.png",
      description: "Crisp, pure bottled water or Jamaican Cran Wata."
    }
  ],
  premium: [
    {
      id: "bigga",
      name: "Bigga Soda",
      type: "premium",
      upgradeBadge: "Island Soda",
      options: ["Bigga Pineapple", "Bigga Fruit Punch", "Bigga Ginger Beer", "Bigga Orange", "Bigga Kola Champagne"],
      image: "/images/dishes/drinks.png",
      description: "Authentic Jamaican fruit soda bursting with vibrant Caribbean flavor."
    },
    {
      id: "ting",
      name: "Ting",
      type: "premium",
      upgradeBadge: "Island Soda",
      options: ["Ting Sparkling Pink Grapefruit", "Ting Original"],
      image: "/images/dishes/drinks.png",
      description: "Famous Jamaican sparkling citrus soda made with real Caribbean grapefruit juice."
    },
    {
      id: "dg-soda",
      name: "D&G Soda",
      type: "premium",
      upgradeBadge: "Island Soda",
      options: ["D&G Cream Soda", "D&G Genuine Ginger Beer", "D&G Pineapple", "D&G Kola Champagne"],
      image: "/images/dishes/drinks.png",
      description: "Classic Desnoes & Geddes Jamaican heritage beverages."
    },
    {
      id: "pineapple-soda",
      name: "Pineapple Soda",
      type: "premium",
      upgradeBadge: "Island Soda",
      options: ["Tropical Pineapple Soda"],
      image: "/images/dishes/drinks.png",
      description: "Sweet, sparkling tropical pineapple sensation."
    }
  ]
};
