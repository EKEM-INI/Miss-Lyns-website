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
      id: "standard-pop",
      name: "Standard Drink (Included)",
      type: "standard",
      image: "/images/dishes/drinks.png",
      description: "Choice of chilled canned soft drink (Coca-Cola, Diet Coke, Sprite, Ginger Ale, C-Plus, Nestea, Root Beer) or pure spring water."
    }
  ],
  premium: [
    {
      id: "premium-island-soda",
      name: "Premium Island Soda Upgrade",
      type: "premium",
      upgradeBadge: "+$1.50 Upgrade",
      image: "/images/dishes/drinks.png",
      description: "Authentic imported Jamaican tropical soda (Bigga flavors, Ting Sparkling Grapefruit, D&G Cream Soda / Ginger Beer, or Cran Wata)."
    }
  ]
};
