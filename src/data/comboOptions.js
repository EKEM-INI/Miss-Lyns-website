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
      id: "rice-and-peas",
      name: "Rice & Peas",
      type: "standard",
      image: "/images/dishes/0022.jpg", // authentic side visual
      description: "Traditional Jamaican coconut-infused rice cooked with red kidney beans and thyme."
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
      id: "mac-and-cheese",
      name: "Mac & Cheese",
      type: "premium",
      upgradeBadge: "Premium Upgrade",
      image: "/images/dishes/0014.jpg",
      description: "Baked cheesy macaroni pie cut into thick, golden-crusted squares."
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
      image: "/images/dishes/0020.jpg",
      description: "Refreshing 355ml chilled canned soft drink of your choice."
    },
    {
      id: "water",
      name: "Spring Water",
      type: "standard",
      options: ["Bottled Spring Water"],
      image: "/images/dishes/0028.jpg",
      description: "Crisp, pure bottled spring water."
    }
  ],
  premium: [
    {
      id: "bigga",
      name: "Bigga Soda",
      type: "premium",
      upgradeBadge: "Island Soda",
      options: ["Bigga Pineapple", "Bigga Fruit Punch", "Bigga Ginger Beer", "Bigga Grape", "Bigga Kola Champagne"],
      image: "/images/dishes/0029.jpg",
      description: "Authentic Jamaican fruit soda bursting with vibrant Caribbean flavor."
    },
    {
      id: "ting",
      name: "Ting",
      type: "premium",
      upgradeBadge: "Island Soda",
      options: ["Ting Sparkling Pink Grapefruit", "Ting Original"],
      image: "/images/dishes/0047.jpg",
      description: "Famous Jamaican sparkling citrus soda made with real Caribbean grapefruit juice."
    },
    {
      id: "dg-soda",
      name: "D&G Soda",
      type: "premium",
      upgradeBadge: "Island Soda",
      options: ["D&G Cream Soda", "D&G Genuine Ginger Beer", "D&G Pineapple", "D&G Kola Champagne"],
      image: "/images/dishes/0049.jpg",
      description: "Classic Desnoes & Geddes Jamaican heritage beverages."
    },
    {
      id: "pineapple-soda",
      name: "Pineapple Soda",
      type: "premium",
      upgradeBadge: "Island Soda",
      options: ["Tropical Pineapple Soda"],
      image: "/images/dishes/0051.jpg",
      description: "Sweet, sparkling tropical pineapple sensation."
    }
  ]
};
