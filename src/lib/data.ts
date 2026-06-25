export type MenuItem = {
  id: string;
  category: string;
  title: string;
  price: string;
  description: string;
  image: string;
  featured?: boolean;
};

export type GalleryItem = {
  id: string;
  category: string;
  image: string;
  alt: string;
  height: "short" | "medium" | "tall";
};

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "margherita",
    category: "Artisan Pizza",
    title: "Margherita Pizza",
    price: "₹249",
    description: "San Marzano tomatoes, fresh mozzarella, basil on fermented dough.",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80",
    featured: true,
  },
  {
    id: "farmhouse",
    category: "Artisan Pizza",
    title: "Farmhouse Pizza",
    price: "₹299",
    description: "Loaded with fresh vegetables, olives, and premium cheese blend.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80",
    featured: true,
  },
  {
    id: "pepperoni",
    category: "Artisan Pizza",
    title: "Pepperoni Supreme",
    price: "₹329",
    description: "Classic pepperoni with mozzarella on our signature crust.",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&q=80",
  },
  {
    id: "cappuccino",
    category: "Specialty Coffee",
    title: "Cappuccino",
    price: "₹149",
    description: "Rich espresso with velvety steamed milk and microfoam art.",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&q=80",
    featured: true,
  },
  {
    id: "cold-coffee",
    category: "Specialty Coffee",
    title: "Cold Coffee",
    price: "₹129",
    description: "Smooth, chilled brew with a hint of vanilla and ice.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80",
    featured: true,
  },
  {
    id: "latte",
    category: "Specialty Coffee",
    title: "Caramel Latte",
    price: "₹169",
    description: "Premium arabica espresso with caramel and steamed milk.",
    image: "https://www.google.com/imgres?q=caramel%20latte&imgurl=https%3A%2F%2Fdessertsanddrinks.com%2Fwp-content%2Fuploads%2F2023%2F10%2FCaramel-Brulee-Latte-3.jpg&imgrefurl=https%3A%2F%2Fdessertsanddrinks.com%2Fcaramel-brulee-latte%2F&docid=u6jS6eNk0fha3M&tbnid=LZ-wuqfDx_r8HM&vet=12ahUKEwiOnO3foaKVAxWQT2cHHVflLL8QnPAOegUIsQIQAA..i&w=1530&h=2295&hcb=2&ved=2ahUKEwiOnO3foaKVAxWQT2cHHVflLL8QnPAOegUIsQIQAA",
  },
  {
    id: "club-sandwich",
    category: "Sandwiches",
    title: "Club Sandwich",
    price: "₹199",
    description: "Triple-decker with grilled chicken, fresh veggies, and mayo.",
    image: "https://www.google.com/imgres?q=club%20sandwich&imgurl=https%3A%2F%2Fwww.indianhealthyrecipes.com%2Fwp-content%2Fuploads%2F2024%2F05%2Fvegetarian-club-sandwich-recipe.jpg&imgrefurl=https%3A%2F%2Fwww.indianhealthyrecipes.com%2Fveg-club-sandwich-recipe%2F&docid=X7NDlIjdKDC9yM&tbnid=fLf5p1zEzXAVpM&vet=12ahUKEwjss-eFoqKVAxVPzjgGHeZbMyoQnPAOegUIvQIQAA..i&w=1200&h=1200&hcb=2&ved=2ahUKEwjss-eFoqKVAxVPzjgGHeZbMyoQnPAOegUIvQIQAA",
    featured: true,
  },
  {
    id: "grilled-sandwich",
    category: "Sandwiches",
    title: "Grilled Veg Sandwich",
    price: "₹159",
    description: "Crispy grilled bread with seasonal vegetables and cheese.",
    image: "https://www.google.com/imgres?q=grill%20sandwich&imgurl=https%3A%2F%2Fwww.cookwithkushi.com%2Fwp-content%2Fuploads%2F2018%2F04%2Fbest_grilled_margherita_cheese_sandwich_recipe.jpg&imgrefurl=https%3A%2F%2Fwww.cookwithkushi.com%2Fgrilled-margherita-sandwich%2F&docid=DZsm532kwzCU6M&tbnid=v4qPOILLhqY13M&vet=12ahUKEwj2g5CXoqKVAxX6-DgGHRPuFvkQnPAOegQIeRAA..i&w=1200&h=1200&hcb=2&ved=2ahUKEwj2g5CXoqKVAxX6-DgGHRPuFvkQnPAOegQIeRAA",
  },
  {
    id: "classic-burger",
    category: "Burgers",
    title: "Classic Burger",
    price: "₹219",
    description: "Juicy patty, cheddar, lettuce, tomato on a brioche bun.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
  },
  {
    id: "cheese-burger",
    category: "Burgers",
    title: "Double Cheese Burger",
    price: "₹279",
    description: "Double patty, melted cheese, special house sauce.",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800&q=80",
  },
  {
    id: "garlic-bread",
    category: "Garlic Bread",
    title: "Cheesy Garlic Bread",
    price: "₹149",
    description: "Buttery garlic bread topped with melted mozzarella.",
    image: "https://www.google.com/imgres?q=cheesy%20garlic%20bread&imgurl=https%3A%2F%2Fi0.wp.com%2Fbinjalsvegkitchen.com%2Fwp-content%2Fuploads%2F2025%2F06%2FCheesy-Garlic-Bread-with-Chili-Basil-Oil-H1.jpg%3Ffit%3D600%252C900%26ssl%3D1&imgrefurl=https%3A%2F%2Fbinjalsvegkitchen.com%2Firresistible-cheesy-garlic-bread-with-chili-basil-oil%2F&docid=-esK7iFz8T4iSM&tbnid=cb6AOWeqqvQ92M&vet=12ahUKEwjT3OSnoqKVAxVKyjgGHfBkKeAQnPAOegUI7gEQAA..i&w=600&h=900&hcb=2&ved=2ahUKEwjT3OSnoqKVAxVKyjgGHfBkKeAQnPAOegUI7gEQAA",
    featured: true,
  },
 
  {
    id: "virgin-mojito",
    category: "Mocktails",
    title: "Virgin Mojito",
    price: "₹129",
    description: "Fresh mint, lime, and soda — refreshing and zesty.",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&q=80",
  },
  {
    id: "blue-lagoon",
    category: "Mocktails",
    title: "Blue Lagoon",
    price: "₹139",
    description: "Tropical blue curacao mocktail with citrus notes.",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&q=80",
  },
];

export const MENU_CATEGORIES = [
  "All",
  "Artisan Pizza",
  "Specialty Coffee",
  "Sandwiches",
  "Burgers",
  "Garlic Bread",
  "Mocktails",
] as const;

export const POPULAR_DISHES = MENU_ITEMS.filter((item) => item.featured);

export const TRUST_STATS = [
  { value: 272, suffix: "+", label: "Reviews", icon: "reviews" },
  { value: 4.7, suffix: "★", label: "Google Rating", icon: "rating", decimals: 1 },
  { value: 1000, suffix: "+", label: "Happy Customers", icon: "customers" },
  { value: 0, suffix: "", label: "Daily Fresh Ingredients", icon: "fresh", text: "Daily" },
] as const;

export const WHY_US_FEATURES = [
  {
    title: "Traditional Fermentation",
    description: "Every pizza begins with carefully fermented dough crafted to perfection over hours.",
    icon: "fermentation",
  },
  {
    title: "Premium Coffee Beans",
    description: "Sourced arabica beans roasted to bring out rich, aromatic flavor in every cup.",
    icon: "coffee",
  },
  {
    title: "Fresh Ingredients",
    description: "Daily deliveries of the finest vegetables, cheeses, and premium toppings.",
    icon: "ingredients",
  },
  {
    title: "Quick Delivery",
    description: "Hot, fresh food delivered to your door with no-contact safety.",
    icon: "delivery",
  },
  {
    title: "Family Friendly",
    description: "A warm, welcoming space perfect for families, friends, and celebrations.",
    icon: "family",
  },
  {
    title: "Affordable Luxury",
    description: "Premium quality dining experience at prices that won't break the bank.",
    icon: "luxury",
  },
] as const;

export const REVIEWS = [
  {
    id: 1,
    text: "Nice experience owners are amazing people, friendly and caring.",
    author: "Priya S.",
    rating: 5,
  },
  {
    id: 2,
    text: "Best pizza and coffee in Shahdara.",
    author: "Rahul M.",
    rating: 5,
  },
  {
    id: 3,
    text: "Affordable and delicious.",
    author: "Anita K.",
    rating: 5,
  },
  {
    id: 4,
    text: "Perfect place to hang out.",
    author: "Vikram D.",
    rating: 5,
  },
  {
    id: 5,
    text: "The Margherita pizza is absolutely divine. Must visit!",
    author: "Sneha R.",
    rating: 5,
  },
  {
    id: 6,
    text: "Great ambiance and the cold coffee is the best I've had.",
    author: "Arjun P.",
    rating: 5,
  },
] as const;

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: "g1", category: "Pizza", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80", alt: "Artisan pizza", height: "tall" },
  { id: "g2", category: "Coffee", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80", alt: "Pour over coffee", height: "medium" },
  { id: "g3", category: "Food", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80", alt: "Gourmet burger", height: "short" },
  { id: "g4", category: "Cafe", image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80", alt: "Cafe interior", height: "medium" },
  { id: "g5", category: "Ambience", image: "https://images.unsplash.com/photo-1445112250662-ab5832a3f6b5?w=600&q=80", alt: "Warm ambience", height: "tall" },
  { id: "g6", category: "Customers", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80", alt: "Dining experience", height: "short" },
  { id: "g7", category: "Pizza", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&q=80", alt: "Margherita pizza", height: "medium" },
  { id: "g8", category: "Coffee", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80", alt: "Latte art", height: "tall" },
  { id: "g9", category: "Food", image: "https://images.unsplash.com/photo-1528735602782-4692f4760bb0?w=600&q=80", alt: "Club sandwich", height: "short" },
  { id: "g10", category: "Ambience", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80", alt: "Restaurant seating", height: "medium" },
  { id: "g11", category: "Cafe", image: "https://images.unsplash.com/photo-1453614512568-c40285d55649?w=600&q=80", alt: "Coffee bar", height: "short" },
  { id: "g12", category: "Customers", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80", alt: "Happy customers", height: "medium" },
];

export const GALLERY_CATEGORIES = ["All", "Pizza", "Coffee", "Food", "Cafe", "Ambience", "Customers"] as const;
