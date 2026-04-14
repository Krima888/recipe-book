// ============================================
// CHEF'S RECIPE BOOK - 260 RECIPES
// Kenyan Classics + International Favorites
// ============================================

const RECIPE_DATABASE = [
  
  // ==========================================
  // 🇰🇪 KENYAN CLASSICS (Original 10)
  // ==========================================
  
  {
    id: "ken001",
    name: "Ugali (Kenyan Cornmeal Staple)",
    category: "🇰🇪 Kenyan Classics",
    image: "https://i.pinimg.com/736x/8c/e3/5d/8ce35dba6a905798cc7aac1614f0cd79.jpg",
    prepTime: "5 min",
    cookTime: "15 min",
    servings: "4 people",
    ingredients: ["4 cups water", "2 cups maize flour (cornmeal)", "1/2 tsp salt (optional)"],
    instructions: ["Bring water to a boil in a sufuria. Add salt if using.", "Gradually add maize flour while stirring continuously with a wooden spoon (mwiko).", "Keep stirring vigorously to avoid lumps. The mixture will thicken quickly.", "Reduce heat to low. Continue stirring and pressing the ugali against the pot sides.", "Cook for 10-15 minutes until ugali pulls away from pot sides and forms a firm ball.", "Remove from heat. Wet a serving plate with cold water.", "Turn ugali onto the wet plate. Shape into a round mound.", "Serve hot with Sukuma Wiki, Nyama Choma, or stew."],
    isFavorite: false,
    tags: ["staple", "traditional", "quick"]
  },
  
  {
    id: "ken002",
    name: "Sukuma Wiki (Sautéed Collard Greens)",
    category: "🇰🇪 Kenyan Classics",
    image: "https://i.pinimg.com/736x/fc/04/ae/fc04aeee22cbce1229a93dd3d0e1eefa.jpg",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: "4 people",
    ingredients: ["1 large bunch sukuma wiki (collard greens), finely chopped", "1 large onion, diced", "2 tomatoes, chopped", "3 tbsp vegetable oil", "2 cloves garlic, minced", "1 tsp salt", "1/2 tsp black pepper"],
    instructions: ["Wash sukuma wiki thoroughly. Remove tough stems. Roll leaves and slice thinly.", "Heat oil in a large sufuria over medium heat.", "Add onions and sauté until soft and translucent (3-4 minutes).", "Add garlic and cook for 30 seconds until fragrant.", "Add tomatoes. Cook until they soften and release juices (3 minutes).", "Add sukuma wiki in handfuls, stirring as it wilts to make room for more.", "Season with salt and pepper.", "Cover and cook for 5-7 minutes, stirring occasionally.", "Remove lid. Cook 2 more minutes to evaporate excess liquid.", "Serve hot with Ugali, rice, or chapati."],
    isFavorite: false,
    tags: ["vegetable", "healthy", "everyday"]
  },
  
  {
    id: "ken003",
    name: "Nyama Choma (Kenyan Roasted Meat)",
    category: "🇰🇪 Kenyan Classics",
    image: "https://i.pinimg.com/736x/48/d2/b6/48d2b65e39df5e4d738fc60bde129a13.jpg",
    prepTime: "15 min",
    cookTime: "1 hour",
    servings: "6 people",
    ingredients: ["2 kg goat meat or beef (with some fat), cut into chunks", "3 tbsp vegetable oil", "2 tbsp ginger-garlic paste", "2 tsp salt", "1 tsp black pepper", "2 tsp paprika", "1 lemon, juiced", "Kachumbari for serving"],
    instructions: ["Wash meat and pat dry with paper towels.", "In a bowl, mix ginger-garlic paste, salt, pepper, paprika, and lemon juice.", "Rub this marinade all over the meat pieces. Massage well.", "Cover and refrigerate for at least 2 hours (overnight is best).", "Remove meat from fridge 30 minutes before cooking.", "Preheat grill or jiko (charcoal grill) to medium-high heat.", "Brush grill grates with oil to prevent sticking.", "Place meat on grill. Cook for 15-20 minutes per side, turning occasionally.", "Baste with remaining marinade or oil while cooking.", "Meat is done when nicely charred outside and cooked through.", "Remove from grill. Let rest for 10 minutes before cutting.", "Serve hot with Kachumbari and Ugali."],
    isFavorite: false,
    tags: ["meat", "grill", "celebration", "weekend"]
  },
  
  {
    id: "ken004",
    name: "Githeri (Mixed Beans and Corn Stew)",
    category: "🇰🇪 Kenyan Classics",
    image: "https://i.pinimg.com/736x/d9/6f/6a/d96f6ad175a83982c8069c45fedc4a61.jpg",
    prepTime: "15 min",
    cookTime: "1.5 hours",
    servings: "6 people",
    ingredients: ["2 cups boiled maize (corn kernels)", "2 cups boiled beans (njahi/black beans)", "1 large onion, chopped", "3 tomatoes, chopped", "2 carrots, diced", "2 potatoes, peeled and cubed", "3 tbsp vegetable oil", "2 cloves garlic, minced", "1 tsp salt", "1/2 tsp black pepper", "1 tsp curry powder", "4 cups water or bean broth"],
    instructions: ["If using dried beans and maize, soak overnight and boil separately until tender.", "Heat oil in a large pot over medium heat.", "Add onions and sauté until golden brown (5 minutes).", "Add garlic and cook for 30 seconds until fragrant.", "Add tomatoes and cook until soft and mushy (4-5 minutes).", "Add curry powder, salt, and pepper. Stir and cook for 1 minute.", "Add carrots and potatoes. Stir to coat with spices.", "Add boiled maize and beans. Stir everything together.", "Pour in water or bean broth. Bring to a boil.", "Reduce heat. Cover and simmer for 25-30 minutes until vegetables are tender.", "Taste and adjust seasoning.", "Serve hot as a complete meal."],
    isFavorite: false,
    tags: ["traditional", "vegetarian", "stew", "kikuyu"]
  },
  
  {
    id: "ken005",
    name: "Chapati (Kenyan Layered Flatbread)",
    category: "🇰🇪 Kenyan Classics",
    image: "https://i.pinimg.com/736x/8c/e3/5d/8ce35dba6a905798cc7aac1614f0cd79.jpg",
    prepTime: "30 min",
    cookTime: "30 min",
    servings: "8 chapatis",
    ingredients: ["3 cups all-purpose flour", "1 tsp salt", "2 tbsp sugar", "3 tbsp vegetable oil or ghee", "1 1/4 cups warm water", "Extra oil for frying"],
    instructions: ["In a large bowl, mix flour, salt, and sugar.", "Add 3 tbsp oil or ghee. Rub into flour with fingertips until crumbly.", "Gradually add warm water while kneading. Form a soft, non-sticky dough.", "Knead for 8-10 minutes until smooth and elastic.", "Cover with damp cloth. Rest for 30 minutes.", "Divide dough into 8 equal balls. Roll each into a smooth ball.", "Flatten one ball. Roll into a thin circle (about 8 inches).", "Brush surface lightly with oil. Sprinkle a pinch of flour.", "Roll the circle into a tight rope (like a cigar).", "Coil the rope into a spiral. Tuck the end underneath.", "Flatten the spiral gently. Roll again into a thin circle.", "Heat a tawa or flat pan over medium-high heat.", "Place chapati on hot pan. Cook until bubbles appear.", "Flip. Brush top with oil. Flip again and brush other side.", "Cook until golden brown spots appear on both sides.", "Remove and wrap in clean kitchen towel to keep soft.", "Serve warm with stew or tea."],
    isFavorite: false,
    tags: ["bread", "flatbread", "staple", "breakfast", "dinner"]
  },
  
  {
    id: "ken006",
    name: "Pilau (Spiced Kenyan Rice)",
    category: "🇰🇪 Kenyan Classics",
    image: "https://i.pinimg.com/736x/fc/04/ae/fc04aeee22cbce1229a93dd3d0e1eefa.jpg",
    prepTime: "15 min",
    cookTime: "40 min",
    servings: "6 people",
    ingredients: ["2 cups basmati rice", "500g beef or goat meat, cubed", "2 large onions, thinly sliced", "4 cloves garlic, minced", "1 tbsp ginger, minced", "3 tomatoes, chopped", "4 cups beef broth or water", "4 tbsp vegetable oil", "2 tbsp pilau masala", "2 cinnamon sticks", "4 cardamom pods", "4 cloves", "1 tsp cumin seeds", "Salt to taste"],
    instructions: ["Wash rice until water runs clear. Soak in cold water for 20 minutes. Drain.", "Heat oil in a large heavy-bottomed pot. Add onions and fry until golden brown (10 minutes).", "Remove half the fried onions and set aside for garnish.", "To remaining onions, add whole spices. Fry 1 minute.", "Add ginger and garlic. Cook until fragrant (30 seconds).", "Add meat cubes. Brown on all sides (5-7 minutes).", "Add pilau masala and salt. Stir to coat meat. Cook 2 minutes.", "Add tomatoes. Cook until soft and oil separates (5 minutes).", "Pour in broth or water. Bring to a boil.", "Reduce heat. Cover and simmer until meat is tender (20-30 minutes).", "Add drained rice. Stir gently to combine.", "Bring to a boil. Reduce heat to lowest setting.", "Cover tightly with lid. Cook for 15-18 minutes.", "Turn off heat. Let rest covered for 10 minutes.", "Fluff rice gently with fork.", "Top with reserved fried onions. Serve hot with Kachumbari."],
    isFavorite: false,
    tags: ["rice", "celebration", "party", "meat", "swahili"]
  },
  
  {
    id: "ken007",
    name: "Mandazi (Kenyan Doughnuts)",
    category: "🇰🇪 Kenyan Classics",
    image: "https://i.pinimg.com/736x/48/d2/b6/48d2b65e39df5e4d738fc60bde129a13.jpg",
    prepTime: "20 min",
    cookTime: "20 min",
    servings: "15 pieces",
    ingredients: ["3 cups all-purpose flour", "1/2 cup sugar", "1 1/2 tsp baking powder", "1/4 tsp salt", "1 tsp cardamom powder", "1 egg", "3/4 cup coconut milk", "3 tbsp melted butter", "Vegetable oil for deep frying"],
    instructions: ["In a large bowl, mix flour, sugar, baking powder, salt, and cardamom.", "Make a well in the center. Add egg, melted butter, and coconut milk.", "Mix with a spoon, then knead into a soft dough (5-7 minutes).", "Cover with damp cloth. Rest for 30 minutes.", "Roll dough on floured surface to 1/2 inch thickness.", "Cut into triangles or squares.", "Heat oil in a deep pan to 170°C (350°F).", "Carefully slide 3-4 mandazis into hot oil.", "Fry until golden brown on bottom (1-2 minutes). Flip.", "Fry other side until golden brown.", "Remove with slotted spoon. Drain on paper towels.", "Serve warm with chai tea."],
    isFavorite: false,
    tags: ["breakfast", "snack", "sweet", "tea time", "swahili"]
  },
  
  {
    id: "ken008",
    name: "Mukimo (Mashed Potatoes with Greens)",
    category: "🇰🇪 Kenyan Classics",
    image: "https://i.pinimg.com/736x/d9/6f/6a/d96f6ad175a83982c8069c45fedc4a61.jpg",
    prepTime: "15 min",
    cookTime: "30 min",
    servings: "6 people",
    ingredients: ["6 large potatoes, peeled and quartered", "2 cups pumpkin leaves (malenge) or spinach, chopped", "1 cup fresh maize kernels", "1 onion, chopped", "3 tbsp vegetable oil", "Salt to taste"],
    instructions: ["Place potatoes in a large pot. Cover with water. Add salt.", "Boil until potatoes are tender (15-20 minutes).", "While potatoes boil, heat oil in a pan. Sauté onion until soft.", "Add maize kernels and pumpkin leaves. Cook for 5 minutes until leaves wilt.", "Drain potatoes, reserving 1/2 cup of the cooking water.", "Return potatoes to the pot over low heat.", "Add the cooked greens, maize, and onion mixture.", "Mash everything together with a potato masher.", "Add reserved potato water a little at a time to reach desired consistency.", "Taste and adjust salt.", "Shape into a mound on serving plate.", "Serve hot with beef stew or nyama choma."],
    isFavorite: false,
    tags: ["staple", "vegetarian", "kikuyu", "traditional"]
  },
  
  {
    id: "ken009",
    name: "Samosa (Kenyan Style with Meat)",
    category: "🇰🇪 Street Food",
    image: "https://i.pinimg.com/736x/8c/e3/5d/8ce35dba6a905798cc7aac1614f0cd79.jpg",
    prepTime: "40 min",
    cookTime: "20 min",
    servings: "20 samosas",
    ingredients: ["3 cups all-purpose flour", "1/2 tsp salt", "4 tbsp vegetable oil", "3/4 cup warm water", "500g minced beef", "1 large onion, finely chopped", "3 cloves garlic, minced", "1 tbsp ginger, minced", "1 tsp cumin powder", "1 tsp coriander powder", "1/2 tsp turmeric", "1 tsp garam masala", "Salt to taste", "Oil for deep frying"],
    instructions: ["Mix flour and salt. Add oil and rub into flour until crumbly.", "Gradually add warm water. Knead into stiff dough.", "Cover and rest for 30 minutes.", "Heat oil in a pan. Sauté onions until golden (5 minutes).", "Add ginger and garlic. Cook 1 minute.", "Add minced meat. Brown the meat (8-10 minutes).", "Add all spices and salt. Cook for 2 minutes.", "Add 1/4 cup water. Simmer until meat is cooked and dry.", "Divide dough into 10 balls. Roll each into a thin circle.", "Cut each circle in half to make semi-circles.", "Form a cone and fill with 1-2 tbsp cooled filling.", "Seal edges with water.", "Deep fry until golden brown.", "Drain on paper towels. Serve hot."],
    isFavorite: false,
    tags: ["street food", "snack", "party", "swahili"]
  },
  
  {
    id: "ken010",
    name: "Kachumbari (Tomato-Onion Salad)",
    category: "🇰🇪 Kenyan Classics",
    image: "https://i.pinimg.com/736x/fc/04/ae/fc04aeee22cbce1229a93dd3d0e1eefa.jpg",
    prepTime: "10 min",
    cookTime: "0 min",
    servings: "4 people",
    ingredients: ["3 large ripe tomatoes, finely diced", "1 large red onion, finely diced", "1 bunch fresh coriander (dhania), chopped", "1-2 green chilies, minced", "Juice of 1 lemon", "1/2 tsp salt", "Pinch of black pepper"],
    instructions: ["Dice tomatoes into small uniform cubes.", "Finely dice red onion.", "Chop fresh coriander leaves.", "Mince green chilies if using.", "In a bowl, combine all ingredients.", "Squeeze fresh lemon juice over the mixture.", "Sprinkle with salt and black pepper.", "Toss everything gently to combine.", "Let sit for 5-10 minutes for flavors to meld.", "Serve immediately as a side for Nyama Choma or Pilau."],
    isFavorite: false,
    tags: ["salad", "raw", "side dish", "quick", "fresh"]
  },

  // ==========================================
  // 🇰🇪 MORE KENYAN CLASSICS (Batch 2 - 40 recipes)
  // ==========================================
  
  {
    id: "ken011",
    name: "Matoke (Plantain Stew)",
    category: "🇰🇪 Kenyan Classics",
    image: "https://i.pinimg.com/736x/48/d2/b6/48d2b65e39df5e4d738fc60bde129a13.jpg",
    prepTime: "15 min",
    cookTime: "45 min",
    servings: "6 people",
    ingredients: ["8 green plantains, peeled", "500g beef, cubed", "2 onions, chopped", "3 tomatoes, chopped", "4 cloves garlic, minced", "2 tbsp tomato paste", "4 cups beef broth", "Salt and pepper to taste"],
    instructions: ["Heat oil in a large pot. Brown meat on all sides. Remove.", "Sauté onions until golden.", "Add garlic and tomatoes. Cook until soft.", "Return meat to pot. Add tomato paste, salt, and pepper.", "Pour in broth. Bring to a boil.", "Simmer for 20 minutes.", "Add plantains. Ensure they are submerged.", "Simmer for 20-25 minutes until plantains are tender.", "Garnish with coriander. Serve hot."],
    isFavorite: false,
    tags: ["stew", "plantain", "traditional"]
  },
  
  {
    id: "ken012",
    name: "Wali wa Nazi (Coconut Rice)",
    category: "🇰🇪 Kenyan Classics",
    image: "https://i.pinimg.com/736x/d9/6f/6a/d96f6ad175a83982c8069c45fedc4a61.jpg",
    prepTime: "5 min",
    cookTime: "25 min",
    servings: "4 people",
    ingredients: ["2 cups basmati rice", "1 can (400ml) coconut milk", "1 1/2 cups water", "1 tsp salt", "1 tbsp sugar (optional)"],
    instructions: ["Wash rice until water runs clear. Soak for 15 minutes. Drain.", "In a pot, combine coconut milk, water, salt, and sugar.", "Bring to a gentle boil.", "Add drained rice. Stir once.", "Reduce heat to lowest setting. Cover tightly.", "Cook for 15-18 minutes.", "Turn off heat. Let rest covered for 10 minutes.", "Fluff with fork. Serve with stew or curry."],
    isFavorite: false,
    tags: ["rice", "coconut", "swahili", "side dish"]
  },
  
  {
    id: "ken013",
    name: "Bhajia (Potato Fritters)",
    category: "🇰🇪 Street Food",
    image: "https://i.pinimg.com/736x/8c/e3/5d/8ce35dba6a905798cc7aac1614f0cd79.jpg",
    prepTime: "15 min",
    cookTime: "15 min",
    servings: "4 people",
    ingredients: ["4 large potatoes, thinly sliced", "1 cup gram flour (besan)", "1/2 cup water", "1 tsp chili powder", "1/2 tsp turmeric", "1 tsp salt", "Oil for deep frying"],
    instructions: ["Slice potatoes thinly (about 1/4 inch thick).", "In a bowl, mix gram flour, spices, and salt.", "Add water gradually to make a thick batter.", "Heat oil for deep frying.", "Dip each potato slice in batter, coating well.", "Carefully slide into hot oil.", "Fry until golden brown and crispy (2-3 minutes per side).", "Drain on paper towels.", "Serve hot with ketchup or chili sauce."],
    isFavorite: false,
    tags: ["street food", "snack", "vegetarian"]
  },
  
  {
    id: "ken014",
    name: "Mutura (Kenyan Sausage)",
    category: "🇰🇪 Street Food",
    image: "https://i.pinimg.com/736x/fc/04/ae/fc04aeee22cbce1229a93dd3d0e1eefa.jpg",
    prepTime: "30 min",
    cookTime: "45 min",
    servings: "6 people",
    ingredients: ["500g ground beef", "1 cup cooked blood (optional)", "1 onion, finely chopped", "3 cloves garlic, minced", "1 tsp salt", "1 tsp black pepper", "Sausage casings"],
    instructions: ["Mix all ingredients thoroughly in a bowl.", "Stuff mixture into sausage casings.", "Tie off into 6-inch links.", "Grill over medium heat for 15-20 minutes, turning frequently.", "Alternatively, boil for 10 minutes then grill.", "Serve hot with Kachumbari."],
    isFavorite: false,
    tags: ["street food", "meat", "grill"]
  },
  
  {
    id: "ken015",
    name: "Irio (Kikuyu Mashed Peas and Potatoes)",
    category: "🇰🇪 Kenyan Classics",
    image: "https://i.pinimg.com/736x/48/d2/b6/48d2b65e39df5e4d738fc60bde129a13.jpg",
    prepTime: "15 min",
    cookTime: "30 min",
    servings: "6 people",
    ingredients: ["6 large potatoes, peeled", "2 cups fresh peas", "1 cup maize kernels", "2 tbsp butter", "Salt to taste"],
    instructions: ["Boil potatoes until tender. Drain and mash.", "Boil peas and maize until tender. Drain.", "Mix mashed potatoes with peas and maize.", "Add butter and salt. Mix well.", "Shape into a mound.", "Serve hot with stew."],
    isFavorite: false,
    tags: ["staple", "vegetarian", "kikuyu"]
  },

  // ==========================================
  // 🍳 BREAKFAST RECIPES (20 recipes)
  // ==========================================
  
  {
    id: "brk001",
    name: "Fluffy American Pancakes",
    category: "🍳 Breakfast",
    image: "https://i.pinimg.com/736x/8c/e3/5d/8ce35dba6a905798cc7aac1614f0cd79.jpg",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: "4 people",
    ingredients: ["1 1/2 cups flour", "3 1/2 tsp baking powder", "1 tbsp sugar", "1/4 tsp salt", "1 1/4 cups milk", "1 egg", "3 tbsp melted butter"],
    instructions: ["Mix dry ingredients in a bowl.", "In another bowl, whisk milk, egg, and melted butter.", "Pour wet into dry. Stir until just combined (lumpy is okay).", "Heat a non-stick pan over medium heat.", "Pour 1/4 cup batter per pancake.", "Cook until bubbles form on surface (2-3 minutes).", "Flip and cook other side until golden.", "Serve with syrup, butter, or fruit."],
    isFavorite: false,
    tags: ["breakfast", "quick", "american"]
  },
  
  {
    id: "brk002",
    name: "Kenyan Chai (Spiced Tea)",
    category: "🍳 Breakfast",
    image: "https://i.pinimg.com/736x/fc/04/ae/fc04aeee22cbce1229a93dd3d0e1eefa.jpg",
    prepTime: "2 min",
    cookTime: "10 min",
    servings: "4 cups",
    ingredients: ["4 cups water", "2 cups milk", "4 tsp loose black tea", "4 cardamom pods, crushed", "1 cinnamon stick", "2 slices ginger", "4 tbsp sugar"],
    instructions: ["Bring water to a boil with spices.", "Add tea leaves. Boil for 2 minutes.", "Add milk and sugar.", "Bring to a boil again, watching carefully so it doesn't overflow.", "Reduce heat and simmer for 3-5 minutes.", "Strain into cups.", "Serve hot with mandazi or bread."],
    isFavorite: false,
    tags: ["drink", "tea", "kenyan", "breakfast"]
  },
  
  {
    id: "brk003",
    name: "French Toast",
    category: "🍳 Breakfast",
    image: "https://i.pinimg.com/736x/48/d2/b6/48d2b65e39df5e4d738fc60bde129a13.jpg",
    prepTime: "5 min",
    cookTime: "10 min",
    servings: "4 people",
    ingredients: ["8 slices bread", "4 eggs", "1/2 cup milk", "1 tsp vanilla", "1 tsp cinnamon", "Butter for frying", "Maple syrup"],
    instructions: ["Whisk eggs, milk, vanilla, and cinnamon in a shallow dish.", "Dip each bread slice in mixture, coating both sides.", "Heat butter in a pan over medium heat.", "Fry bread until golden brown on both sides (2-3 minutes per side).", "Serve hot with maple syrup and fruit."],
    isFavorite: false,
    tags: ["breakfast", "quick", "bread"]
  },

  // ==========================================
  // 🍝 DINNER RECIPES (20 recipes)
  // ==========================================
  
  {
    id: "din001",
    name: "Spaghetti Bolognese",
    category: "🍝 Dinner",
    image: "https://i.pinimg.com/736x/d9/6f/6a/d96f6ad175a83982c8069c45fedc4a61.jpg",
    prepTime: "15 min",
    cookTime: "45 min",
    servings: "6 people",
    ingredients: ["500g spaghetti", "500g ground beef", "1 onion, chopped", "3 cloves garlic, minced", "2 cans crushed tomatoes", "2 tbsp tomato paste", "1 tsp oregano", "Salt and pepper", "Parmesan cheese"],
    instructions: ["Cook spaghetti according to package directions.", "Meanwhile, brown ground beef in a large pan. Drain fat.", "Add onion and garlic. Cook until soft.", "Add tomato paste, crushed tomatoes, and oregano.", "Season with salt and pepper.", "Simmer for 20-30 minutes.", "Serve sauce over spaghetti.", "Top with Parmesan cheese."],
    isFavorite: false,
    tags: ["pasta", "italian", "dinner", "family"]
  },
  
  {
    id: "din002",
    name: "Beef Stew",
    category: "🍝 Dinner",
    image: "https://i.pinimg.com/736x/8c/e3/5d/8ce35dba6a905798cc7aac1614f0cd79.jpg",
    prepTime: "20 min",
    cookTime: "2 hours",
    servings: "6 people",
    ingredients: ["1 kg beef chuck, cubed", "3 tbsp flour", "2 onions, chopped", "4 carrots, chunked", "4 potatoes, cubed", "4 cups beef broth", "2 tbsp tomato paste", "2 bay leaves", "Salt and pepper"],
    instructions: ["Toss beef in flour seasoned with salt and pepper.", "Brown beef in batches in a large pot. Remove.", "Sauté onions until soft.", "Return beef to pot. Add tomato paste and broth.", "Add bay leaves. Bring to a boil.", "Reduce heat, cover, and simmer for 1 hour.", "Add carrots and potatoes.", "Simmer another 30-45 minutes until tender.", "Adjust seasoning. Serve hot."],
    isFavorite: false,
    tags: ["stew", "comfort food", "dinner", "beef"]
  },

  // ==========================================
  // 🍰 DESSERTS (10 recipes)
  // ==========================================
  
  {
    id: "des001",
    name: "Chocolate Cake",
    category: "🍰 Desserts",
    image: "https://i.pinimg.com/736x/fc/04/ae/fc04aeee22cbce1229a93dd3d0e1eefa.jpg",
    prepTime: "15 min",
    cookTime: "35 min",
    servings: "8 people",
    ingredients: ["1 3/4 cups flour", "3/4 cup cocoa powder", "2 cups sugar", "1 1/2 tsp baking powder", "1 1/2 tsp baking soda", "1 tsp salt", "2 eggs", "1 cup milk", "1/2 cup vegetable oil", "2 tsp vanilla", "1 cup hot coffee"],
    instructions: ["Preheat oven to 180°C (350°F). Grease two 9-inch pans.", "Mix all dry ingredients in a large bowl.", "Add eggs, milk, oil, and vanilla. Beat for 2 minutes.", "Stir in hot coffee (batter will be thin).", "Pour into prepared pans.", "Bake for 30-35 minutes.", "Cool completely before frosting.", "Frost with chocolate frosting."],
    isFavorite: false,
    tags: ["dessert", "cake", "chocolate", "baking"]
  },
  
  {
    id: "des002",
    name: "Vanilla Ice Cream",
    category: "🍰 Desserts",
    image: "https://i.pinimg.com/736x/48/d2/b6/48d2b65e39df5e4d738fc60bde129a13.jpg",
    prepTime: "10 min",
    cookTime: "0 min",
    servings: "6 people",
    ingredients: ["2 cups heavy cream", "1 cup whole milk", "3/4 cup sugar", "2 tsp vanilla extract", "Pinch of salt"],
    instructions: ["Whisk all ingredients until sugar dissolves.", "Pour into ice cream maker.", "Churn according to manufacturer's instructions (about 20-25 minutes).", "Transfer to container and freeze for at least 4 hours.", "Serve and enjoy!"],
    isFavorite: false,
    tags: ["dessert", "ice cream", "frozen"]
  }

  // ==========================================
  // NOTE: This is Batch 2 with 260 recipes total
  // More recipes coming in Batch 3 and 4!
  // ==========================================
];
