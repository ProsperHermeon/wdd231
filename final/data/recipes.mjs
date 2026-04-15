const recipes = [
  {
    id: 1,
    name: "Jollof Rice",
    category: "Main",
    cuisine: "West African",
    time: "45 min",
    image: "https://www.themealdb.com/images/media/meals/tvttqv1504640475.jpg",
    description: "A one-pot tomato rice dish beloved across West Africa, simmered with peppers, onions, and aromatic spices.",
    ingredients: ["Rice", "Tomato paste", "Onion", "Bell pepper", "Scotch bonnet", "Thyme", "Curry powder", "Bay leaves"]
  },
  {
    id: 2,
    name: "Chicken Tikka Masala",
    category: "Main",
    cuisine: "Indian",
    time: "50 min",
    image: "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg",
    description: "Tender marinated chicken pieces in a rich, creamy tomato-based curry sauce served with basmati rice.",
    ingredients: ["Chicken breast", "Yogurt", "Tomato puree", "Cream", "Garam masala", "Cumin", "Garlic", "Ginger"]
  },
  {
    id: 3,
    name: "Pad Thai",
    category: "Main",
    cuisine: "Thai",
    time: "30 min",
    image: "https://www.themealdb.com/images/media/meals/uuuspp1468263334.jpg",
    description: "Stir-fried rice noodles with shrimp, tofu, peanuts, scrambled egg, and bean sprouts in tamarind sauce.",
    ingredients: ["Rice noodles", "Shrimp", "Tofu", "Egg", "Bean sprouts", "Peanuts", "Tamarind paste", "Fish sauce"]
  },
  {
    id: 4,
    name: "Beef Tacos",
    category: "Main",
    cuisine: "Mexican",
    time: "25 min",
    image: "https://www.themealdb.com/images/media/meals/ypxvwv1505856636.jpg",
    description: "Seasoned ground beef in warm corn tortillas topped with fresh salsa, cheese, lettuce, and sour cream.",
    ingredients: ["Ground beef", "Tortillas", "Cheddar cheese", "Lettuce", "Tomato", "Sour cream", "Cumin", "Chili powder"]
  },
  {
    id: 5,
    name: "Margherita Pizza",
    category: "Main",
    cuisine: "Italian",
    time: "35 min",
    image: "https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg",
    description: "Classic Neapolitan pizza with San Marzano tomato sauce, fresh mozzarella, basil, and extra virgin olive oil.",
    ingredients: ["Pizza dough", "San Marzano tomatoes", "Mozzarella", "Basil", "Olive oil", "Salt", "Garlic", "Oregano"]
  },
  {
    id: 6,
    name: "Sushi Rolls",
    category: "Main",
    cuisine: "Japanese",
    time: "40 min",
    image: "https://www.themealdb.com/images/media/meals/g046bb1663960946.jpg",
    description: "Hand-rolled sushi with seasoned rice, fresh salmon, avocado, and cucumber wrapped in nori seaweed.",
    ingredients: ["Sushi rice", "Nori", "Salmon", "Avocado", "Cucumber", "Rice vinegar", "Soy sauce", "Wasabi"]
  },
  {
    id: 7,
    name: "Caesar Salad",
    category: "Starter",
    cuisine: "American",
    time: "15 min",
    image: "https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg",
    description: "Crisp romaine lettuce tossed with creamy Caesar dressing, crunchy croutons, and shaved Parmesan cheese.",
    ingredients: ["Romaine lettuce", "Parmesan", "Croutons", "Anchovy", "Egg yolk", "Lemon juice", "Garlic", "Olive oil"]
  },
  {
    id: 8,
    name: "French Onion Soup",
    category: "Starter",
    cuisine: "French",
    time: "55 min",
    image: "https://www.themealdb.com/images/media/meals/xvrrux1511783685.jpg",
    description: "Caramelized onions slow-cooked in rich beef broth, topped with crusty bread and melted Gruyère cheese.",
    ingredients: ["Onions", "Beef broth", "Butter", "Gruyère cheese", "Baguette", "Thyme", "Bay leaf", "White wine"]
  },
  {
    id: 9,
    name: "Chocolate Lava Cake",
    category: "Dessert",
    cuisine: "French",
    time: "25 min",
    image: "https://www.themealdb.com/images/media/meals/xvsurp1511719182.jpg",
    description: "Individual warm chocolate cakes with a molten center, dusted with powdered sugar and served with cream.",
    ingredients: ["Dark chocolate", "Butter", "Eggs", "Sugar", "Flour", "Vanilla extract", "Powdered sugar", "Cream"]
  },
  {
    id: 10,
    name: "Greek Moussaka",
    category: "Main",
    cuisine: "Greek",
    time: "60 min",
    image: "https://www.themealdb.com/images/media/meals/ctg8jd1585563097.jpg",
    description: "Layers of eggplant, spiced lamb mince, and potatoes topped with creamy béchamel sauce, baked golden.",
    ingredients: ["Eggplant", "Ground lamb", "Potato", "Onion", "Tomato paste", "Béchamel sauce", "Cinnamon", "Nutmeg"]
  },
  {
    id: 11,
    name: "Tom Yum Soup",
    category: "Starter",
    cuisine: "Thai",
    time: "20 min",
    image: "https://www.themealdb.com/images/media/meals/1529446352.jpg",
    description: "Hot and sour Thai soup with shrimp, mushrooms, lemongrass, galangal, and kaffir lime leaves.",
    ingredients: ["Shrimp", "Mushrooms", "Lemongrass", "Galangal", "Kaffir lime leaves", "Chili", "Fish sauce", "Lime juice"]
  },
  {
    id: 12,
    name: "Banana Pancakes",
    category: "Dessert",
    cuisine: "American",
    time: "15 min",
    image: "https://www.themealdb.com/images/media/meals/sywswr1511383814.jpg",
    description: "Fluffy golden pancakes studded with ripe banana slices, drizzled with maple syrup and topped with berries.",
    ingredients: ["Flour", "Banana", "Egg", "Milk", "Baking powder", "Butter", "Maple syrup", "Blueberries"]
  },
  {
    id: 13,
    name: "Lamb Biryani",
    category: "Main",
    cuisine: "Indian",
    time: "70 min",
    image: "https://www.themealdb.com/images/media/meals/xrttsx1487339558.jpg",
    description: "Fragrant basmati rice layered with spiced slow-cooked lamb, caramelized onions, and saffron-infused milk.",
    ingredients: ["Lamb", "Basmati rice", "Onion", "Yogurt", "Saffron", "Cardamom", "Cinnamon", "Mint"]
  },
  {
    id: 14,
    name: "Fish and Chips",
    category: "Main",
    cuisine: "British",
    time: "35 min",
    image: "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
    description: "Crispy beer-battered cod fillets served with thick-cut chips, mushy peas, and tartar sauce.",
    ingredients: ["Cod fillet", "Flour", "Beer", "Potatoes", "Peas", "Tartar sauce", "Lemon", "Salt"]
  },
  {
    id: 15,
    name: "Tiramisu",
    category: "Dessert",
    cuisine: "Italian",
    time: "30 min",
    image: "https://www.themealdb.com/images/media/meals/adxcbq1619787919.jpg",
    description: "Classic Italian dessert with espresso-soaked ladyfingers layered with mascarpone cream and dusted with cocoa.",
    ingredients: ["Mascarpone", "Ladyfingers", "Espresso", "Eggs", "Sugar", "Cocoa powder", "Marsala wine", "Vanilla"]
  },
  {
    id: 16,
    name: "Falafel Wrap",
    category: "Main",
    cuisine: "Middle Eastern",
    time: "30 min",
    image: "https://www.themealdb.com/images/media/meals/qqpwsy1511796276.jpg",
    description: "Crispy chickpea falafel balls wrapped in warm pita with hummus, tahini, pickled turnips, and fresh salad.",
    ingredients: ["Chickpeas", "Pita bread", "Tahini", "Parsley", "Cumin", "Garlic", "Lemon juice", "Onion"]
  },
  {
    id: 17,
    name: "Beef Stroganoff",
    category: "Main",
    cuisine: "Russian",
    time: "40 min",
    image: "https://www.themealdb.com/images/media/meals/svprys1511176755.jpg",
    description: "Tender beef strips sautéed with mushrooms and onions in a rich sour cream sauce over egg noodles.",
    ingredients: ["Beef sirloin", "Mushrooms", "Onion", "Sour cream", "Beef broth", "Egg noodles", "Butter", "Paprika"]
  },
  {
    id: 18,
    name: "Crème Brûlée",
    category: "Dessert",
    cuisine: "French",
    time: "50 min",
    image: "https://www.themealdb.com/images/media/meals/d882j21583465702.jpg",
    description: "Silky vanilla custard with a perfectly caramelized sugar crust that cracks at the tap of a spoon.",
    ingredients: ["Heavy cream", "Egg yolks", "Sugar", "Vanilla bean", "Salt", "Butter", "Milk", "Cornstarch"]
  }
];

export default recipes;
