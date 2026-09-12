export const restaurantInfo = {
  name: "Miss Lyn's Wings",
  tagline: "Always Fresh. Made To Order. Bold Flavour Every Time.",
  description: "Hamilton's home for authentic Jamaican jerk chicken, crispy made-to-order wings, Caribbean comfort sides, and golden flaky patties.",
  address: {
    street: "677 King Street East",
    city: "Hamilton",
    province: "Ontario",
    postalCode: "L8N 1E5",
    country: "Canada",
    full: "677 King Street East, Hamilton, ON L8N 1E5",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Miss+Lyn's+Wings+677+King+Street+East+Hamilton+Ontario"
  },
  phones: [
    { label: "Direct Orders", number: "(905) 522-5967", raw: "9055225967" },
    { label: "Mobile / Call Ahead", number: "905-517-8529", raw: "9055178529" }
  ],
  hours: [
    { days: "Monday – Friday", time: "11:00 AM – 9:00 PM", isOpenToday: true },
    { days: "Saturday", time: "1:00 PM – 9:00 PM", isOpenToday: true },
    { days: "Sunday", time: "Closed", isOpenToday: false }
  ],
  deliveryLinks: [
    {
      platform: "SkipTheDishes",
      name: "SkipTheDishes",
      url: "https://www.skipthedishes.com/miss-lyns-wings",
      badgeText: "Recommended Delivery",
      icon: "truck",
      color: "#D8232A"
    },
    {
      platform: "Uber Eats",
      name: "Uber Eats",
      url: "https://www.ubereats.com/store/miss-lyns-wings/Hamilton",
      badgeText: "Fast Delivery",
      icon: "bike",
      color: "#06C167"
    },
    {
      platform: "DoorDash",
      name: "DoorDash",
      url: "https://www.doordash.com/store/miss-lyns-wings-hamilton",
      badgeText: "Order Delivery",
      icon: "car",
      color: "#FF3008"
    }
  ],
  features: [
    { title: "Fresh Never Frozen", desc: "100% fresh chicken seasoned in authentic Jamaican spices" },
    { title: "Made to Order", desc: "Cooked hot and crispy right when you order, never sitting under lamps" },
    { title: "Secret Family Recipe", desc: "Marinated with Miss Lyn's authentic scotch bonnet & pimento spices" },
    { title: "Local Hamilton Pride", desc: "Proudly serving the King St East community with bold Caribbean heat" }
  ],
  social: {
    instagram: {
      handle: "@misslynswings",
      url: "https://www.instagram.com/misslynswings/?hl=en",
      label: "Follow us on Instagram"
    }
  }
};
