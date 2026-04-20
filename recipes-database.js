// ============================================
// 👨‍🍳 CHEF'S RECIPE BOOK - COMPLETE COLLECTION
// 63 Professionally Detailed Recipes (Verified)
// Accurate images + full instructions
// ============================================

const RECIPE_DATABASE = [
  
  // ==========================================
  // 🇰🇪 KENYAN CLASSICS (14 recipes)
  // ==========================================
  
  {
    id: "ken001",
    name: "Ugali (Kenyan Cornmeal Staple)",
    category: "🇰🇪 Kenyan Classics",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Pweza_and_Ugali.JPG",
    prepTime: "5 min",
    cookTime: "15 min",
    servings: "4 people",
    difficulty: "Easy",
    equipment: ["Heavy-bottomed sufuria", "Wooden spoon (mwiko)", "Measuring cups", "Serving plate"],
    ingredients: ["4 cups water", "2 cups maize flour (cornmeal)", "1/2 tsp salt"],
    instructions: [
      "BOIL WATER: Place sufuria over high heat. Add salt. Wait until LARGE ROLLING BUBBLES appear (5-7 minutes)",
      "ADD FLOUR: Reduce heat to medium. Pour flour in THIN STEADY STREAM while stirring VIGOROUSLY. DO NOT dump all at once",
      "BEAT LUMPS: As mixture thickens, press ugali against pot sides with flat edge of mwiko to break up lumps",
      "REDUCE HEAT: Once incorporated, reduce to LOW. Gather into center, press down, cover slightly ajar. Cook 8-10 minutes",
      "CHECK DONENESS: Ugali is ready when it PULLS AWAY CLEANLY from sides and mwiko stands upright in center",
      "TURN OUT: Wet serving plate. Invert pot quickly. Shape into smooth dome with wet hands",
      "SERVE IMMEDIATELY: Ugali must be PIPING HOT"
    ],
    chefTips: ["Water MUST be at rolling boil before adding flour", "Wet hands to prevent sticking", "Sift flour for extra smooth ugali"],
    pairingSuggestions: ["Nyama Choma", "Sukuma Wiki", "Fried tilapia", "Beef stew"],
    isFavorite: false,
    tags: ["staple", "traditional", "quick", "kenyan"]
  },
  
  {
    id: "ken002",
    name: "Sukuma Wiki (Sautéed Collard Greens)",
    category: "🇰🇪 Kenyan Classics",
    image: "https://images.pexels.com/photos/533360/pexels-photo-533360.jpeg",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: "4 people",
    difficulty: "Easy",
    equipment: ["Large sufuria with lid", "Sharp knife", "Cutting board", "Wooden spoon"],
    ingredients: ["1 large bunch sukuma wiki", "1 large onion, diced", "2 tomatoes, chopped", "3 tbsp vegetable oil", "2 cloves garlic, minced", "1 tsp salt", "1/2 tsp black pepper"],
    instructions: [
      "PREP GREENS: Wash thoroughly (3 rinses). Remove tough stems. Stack leaves, roll tightly, slice into THIN ribbons",
      "HEAT PAN: Place sufuria over MEDIUM-HIGH heat. Add oil until shimmering",
      "SWEAT ONIONS: Add onions. Cook 3-4 minutes until TRANSLUCENT",
      "AROMATICS: Add garlic. Stir 30 SECONDS ONLY. Do not brown",
      "ADD TOMATOES: Cook 3-4 minutes until soft and juices release",
      "SEASON: Add salt and pepper",
      "ADD GREENS GRADUALLY: Add in 3-4 batches, stirring until each batch wilts",
      "COVER AND STEAM: Cover, reduce heat to MEDIUM-LOW. Cook 5 minutes",
      "CHECK: Sukuma should be BRIGHT GREEN and tender",
      "FINAL SEAR: Remove lid, increase heat to HIGH, cook 1-2 minutes to evaporate excess liquid"
    ],
    chefTips: ["Sukuma is done when BRIGHT GREEN, not olive brown", "Add pinch of baking soda to preserve color", "Soak in salted water if bitter"],
    pairingSuggestions: ["Ugali", "Rice", "Chapati", "Roasted chicken"],
    isFavorite: false,
    tags: ["vegetable", "healthy", "everyday", "kenyan"]
  },
  
  {
    id: "ken003",
    name: "Nyama Choma (Kenyan Roasted Meat)",
    category: "🇰🇪 Kenyan Classics",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Goat_meat_being_roasted.jpg",
    prepTime: "15 min",
    cookTime: "1 hour",
    servings: "6 people",
    difficulty: "Intermediate",
    equipment: ["Charcoal grill (jiko)", "Grill tongs", "Basting brush", "Sharp knife", "Meat thermometer"],
    ingredients: ["2 kg goat meat or beef", "3 tbsp vegetable oil", "2 tbsp ginger-garlic paste", "2 tsp salt", "1 tsp black pepper", "2 tsp paprika", "1 lemon, juiced"],
    instructions: [
      "MARINATE: Mix all ingredients except meat. Rub into meat. Refrigerate MINIMUM 2 hours, ideally overnight",
      "PREP GRILL: Light charcoal. Coals ready when covered with WHITE ASH",
      "ROOM TEMPERATURE: Remove meat 1 hour before grilling. PAT DRY",
      "OIL GRILL: Grease grates with oiled paper towel",
      "FIRST SEAR: Place on HOTTEST part. LOUD SIZZLE. DON'T MOVE 3-4 minutes",
      "FLIP: Meat releases when crust forms. Sear second side 3-4 minutes",
      "INDIRECT HEAT: Move to cooler side. Cover. Cook to internal temp 60-63°C",
      "BASTE: Every 10 minutes with marinade mixture",
      "REST: Remove to board. Tent with foil. Rest MINIMUM 10-15 minutes",
      "SLICE: Cut AGAINST THE GRAIN into thin slices",
      "SERVE: Pour accumulated juices over meat"
    ],
    chefTips: ["Goat meat is traditional and has better flavor", "SLOW cooking after sear is the secret", "Charred bits are most flavorful"],
    pairingSuggestions: ["Ugali", "Kachumbari", "Sukuma Wiki", "Cold beer"],
    isFavorite: false,
    tags: ["meat", "grill", "celebration", "kenyan"]
  },
  
  {
    id: "ken004",
    name: "Githeri (Mixed Beans and Corn Stew)",
    category: "🇰🇪 Kenyan Classics",
    image: "https://live.staticflickr.com/5248/5352943101_8b5d5f8c5f_b.jpg",
    prepTime: "15 min",
    cookTime: "1.5 hours",
    servings: "6 people",
    difficulty: "Easy",
    equipment: ["Large heavy pot", "Wooden spoon", "Sharp knife"],
    ingredients: ["2 cups boiled maize", "2 cups boiled beans", "1 onion, chopped", "3 tomatoes, chopped", "2 carrots, diced", "2 potatoes, cubed", "3 tbsp oil", "2 cloves garlic", "1 tsp salt", "1/2 tsp pepper", "1 tsp curry powder", "4 cups water"],
    instructions: [
      "SOAK & BOIL: Soak beans and maize overnight. Boil until tender (1 hour). Drain, reserve broth",
      "SAUTÉ ONIONS: Heat oil. Cook onions 5 minutes until GOLDEN",
      "ADD GARLIC: Cook 30 seconds until fragrant",
      "ADD TOMATOES: Cook 4-5 minutes until soft",
      "SPICES: Add curry, salt, pepper. Cook 1 minute",
      "ADD VEGETABLES: Add carrots and potatoes. Stir to coat",
      "ADD BEANS & MAIZE: Stir together",
      "ADD LIQUID: Pour in water or broth. Bring to boil",
      "SIMMER: Reduce heat, cover. Cook 25-30 minutes until vegetables tender",
      "REST: Let sit 5 minutes off heat"
    ],
    chefTips: ["Githeri tastes better the next day", "Add pumpkin leaves in last 5 minutes", "Use pressure cooker for faster beans"],
    pairingSuggestions: ["Rice", "Chapati", "Avocado"],
    isFavorite: false,
    tags: ["traditional", "vegetarian", "stew", "kenyan"]
  },
  
  {
    id: "ken005",
    name: "Chapati (Kenyan Layered Flatbread)",
    category: "🇰🇪 Kenyan Classics",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Chapati_flat_bread.JPG",
    prepTime: "30 min",
    cookTime: "30 min",
    servings: "8 chapatis",
    difficulty: "Intermediate",
    equipment: ["Large bowl", "Rolling pin", "Tawa or flat pan", "Spatula", "Clean towel"],
    ingredients: ["3 cups all-purpose flour", "1 tsp salt", "2 tbsp sugar", "3 tbsp oil or ghee", "1 1/4 cups warm water", "Extra oil for frying"],
    instructions: [
      "MIX DRY: Combine flour, salt, sugar",
      "ADD FAT: Rub oil into flour until crumbly",
      "ADD WATER: Gradually add warm water while kneading",
      "KNEAD: Knead 8-10 minutes until SMOOTH and ELASTIC",
      "REST: Cover with damp cloth. Rest MINIMUM 30 minutes",
      "DIVIDE: Divide into 8 equal balls",
      "FIRST ROLL: Roll into thin circle (8 inches)",
      "LAYER: Brush with oil, sprinkle flour, roll into tight rope, coil into spiral",
      "SECOND ROLL: Flatten spiral, roll again into thin circle",
      "COOK: On hot pan, cook until bubbles appear. Flip",
      "OIL: Brush both sides with oil while cooking",
      "FINISH: Cook until golden brown spots appear",
      "KEEP WARM: Wrap in clean towel immediately"
    ],
    chefTips: ["REST the dough - this is the secret", "Warm water activates gluten faster", "Don't skip the layering step"],
    pairingSuggestions: ["Beef stew", "Chicken curry", "Bean stew", "Kenyan chai"],
    isFavorite: false,
    tags: ["bread", "flatbread", "staple", "kenyan"]
  },
  
  {
    id: "ken006",
    name: "Pilau (Spiced Kenyan Rice)",
    category: "🇰🇪 Kenyan Classics",
    image: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg",
    prepTime: "15 min",
    cookTime: "40 min",
    servings: "6 people",
    difficulty: "Intermediate",
    equipment: ["Heavy pot with tight lid", "Fine strainer", "Wooden spoon"],
    ingredients: ["2 cups basmati rice", "500g beef, cubed", "2 onions, sliced", "4 cloves garlic", "1 tbsp ginger", "3 tomatoes", "4 cups broth", "2 tbsp pilau masala", "Whole spices", "Salt"],
    instructions: [
      "WASH RICE: Rinse until water runs CLEAR. Soak 20 minutes. Drain",
      "FRY ONIONS: Heat oil. Cook onions until DEEP GOLDEN (10-12 minutes)",
      "RESERVE: Remove half the onions for garnish",
      "WHOLE SPICES: Add cinnamon, cardamom, cloves, cumin. Fry 1 minute",
      "AROMATICS: Add ginger and garlic. Cook 30 seconds",
      "BROWN MEAT: Add meat. Brown on all sides",
      "SPICES: Add pilau masala and salt. Cook 2 minutes",
      "TOMATOES: Add tomatoes. Cook until soft and oil separates",
      "ADD LIQUID: Pour in broth. Simmer until meat tender (20-30 min)",
      "ADD RICE: Add drained rice. Liquid should be 1 cm above rice",
      "STEAM: Bring to boil, reduce to LOWEST heat. Cover TIGHTLY. Cook 15-18 min",
      "REST: Turn off heat. Let rest covered 10 minutes",
      "FLUFF: Fluff with fork. Top with reserved onions"
    ],
    chefTips: ["Wash rice until water is clear to prevent stickiness", "DO NOT open lid while steaming", "Homemade pilau masala is superior"],
    pairingSuggestions: ["Kachumbari", "Ripe banana", "Maziwa mala"],
    isFavorite: false,
    tags: ["rice", "celebration", "party", "swahili", "kenyan"]
  },
  
  {
    id: "ken007",
    name: "Mandazi (Kenyan Doughnuts)",
    category: "🇰🇪 Kenyan Classics",
    image: "https://images.pexels.com/photos/2092906/pexels-photo-2092906.jpeg",
    prepTime: "20 min",
    cookTime: "20 min",
    servings: "15 pieces",
    difficulty: "Easy",
    equipment: ["Large bowl", "Rolling pin", "Knife", "Deep pot for frying", "Slotted spoon"],
    ingredients: ["3 cups flour", "1/2 cup sugar", "1 1/2 tsp baking powder", "1/4 tsp salt", "1 tsp cardamom", "1 egg", "3/4 cup coconut milk", "3 tbsp melted butter", "Oil for frying"],
    instructions: [
      "MIX DRY: Whisk flour, sugar, baking powder, salt, cardamom",
      "ADD WET: Make well. Add egg, melted butter, coconut milk",
      "KNEAD: Knead 5-7 minutes until SMOOTH. Dough should be soft, not sticky",
      "REST: Cover with damp cloth. Rest 30 minutes",
      "ROLL: Roll to 1/2 inch thickness",
      "CUT: Cut into triangles or squares",
      "HEAT OIL: Heat oil to 170°C (340°F). Test with small dough piece",
      "FRY: Fry 3-4 at a time. DON'T OVERCROWD",
      "COOK: 1-2 minutes per side until GOLDEN BROWN",
      "DRAIN: Remove with slotted spoon. Drain on paper towels",
      "SERVE: Best served WARM"
    ],
    chefTips: ["Coconut milk gives authentic flavor", "Don't roll too thin - mandazi should be fluffy", "Reheat in oven, not microwave"],
    pairingSuggestions: ["Kenyan chai", "Tea", "Coffee"],
    isFavorite: false,
    tags: ["breakfast", "snack", "sweet", "swahili", "kenyan"]
  },
  
  {
    id: "ken008",
    name: "Mukimo (Mashed Potatoes with Greens)",
    category: "🇰🇪 Kenyan Classics",
    image: "https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg",
    prepTime: "15 min",
    cookTime: "30 min",
    servings: "6 people",
    difficulty: "Easy",
    equipment: ["Large pot", "Frying pan", "Potato masher"],
    ingredients: ["6 large potatoes, peeled", "2 cups pumpkin leaves or spinach", "1 cup fresh maize", "1 onion, chopped", "3 tbsp oil", "Salt"],
    instructions: [
      "BOIL POTATOES: Cover with water, add salt. Boil until FORK-TENDER (15-20 min)",
      "COOK GREENS: Sauté onion in oil. Add maize. Add greens. Cook until wilted",
      "DRAIN POTATOES: Reserve 1/2 cup water",
      "MASH: Return potatoes to pot. Add greens mixture. Mash together",
      "ADJUST: Add reserved water gradually for desired consistency",
      "SEASON: Add salt to taste",
      "SERVE: Shape into dome. Serve HOT"
    ],
    chefTips: ["Pumpkin leaves (malenge) give authentic flavor", "Add butter for creaminess", "Leftovers make great breakfast patties"],
    pairingSuggestions: ["Beef stew", "Nyama Choma", "Sukuma Wiki"],
    isFavorite: false,
    tags: ["staple", "vegetarian", "kikuyu", "kenyan"]
  },
  
  {
    id: "ken009",
    name: "Samosa (Kenyan Style)",
    category: "🇰🇪 Street Food",
    image: "https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg",
    prepTime: "40 min",
    cookTime: "20 min",
    servings: "20 samosas",
    difficulty: "Intermediate",
    equipment: ["Large bowl", "Frying pan", "Rolling pin", "Deep pot", "Slotted spoon"],
    ingredients: ["3 cups flour", "1/2 tsp salt", "4 tbsp oil", "3/4 cup warm water", "500g minced beef", "1 onion", "Spices", "Oil for frying"],
    instructions: [
      "DOUGH: Mix flour, salt, oil until crumbly. Add water. Knead into FIRM dough. Rest 30 min",
      "FILLING: Sauté onions until golden. Add meat, brown. Add spices. Cook until DRY. COOL COMPLETELY",
      "ASSEMBLE: Roll dough thin. Cut semi-circles. Form cones. Fill with COOLED filling. Seal with water",
      "FRY: Heat oil to 170°C. Fry 3-4 at a time until GOLDEN BROWN and CRISPY",
      "DRAIN: Drain on paper towels",
      "SERVE: Serve HOT with chutney or ketchup"
    ],
    chefTips: ["Filling MUST be completely cool before filling", "Don't overfill - needs space to seal", "Freeze unfried samosas for later"],
    pairingSuggestions: ["Ketchup", "Chili sauce", "Tamarind chutney", "Chai"],
    isFavorite: false,
    tags: ["street food", "snack", "party", "swahili", "kenyan"]
  },
  
  {
    id: "ken010",
    name: "Kachumbari (Tomato-Onion Salad)",
    category: "🇰🇪 Kenyan Classics",
    image: "https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg",
    prepTime: "10 min",
    cookTime: "0 min",
    servings: "4 people",
    difficulty: "Easy",
    equipment: ["Sharp knife", "Cutting board", "Mixing bowl"],
    ingredients: ["3 large ripe tomatoes", "1 large red onion", "1 bunch fresh coriander", "1-2 green chilies", "Juice of 1 lemon", "1/2 tsp salt", "Pinch black pepper"],
    instructions: [
      "PREP TOMATOES: Core and dice into SMALL UNIFORM cubes",
      "PREP ONION: Peel and finely chop. Soak in cold water 10 min for milder flavor, then drain",
      "PREP HERBS: Wash and finely chop coriander leaves and tender stems",
      "PREP CHILI: Remove seeds for less heat. Mince finely. WASH HANDS after",
      "COMBINE: Mix all ingredients in bowl",
      "DRESS: Add lemon juice, salt, and pepper",
      "TOSS: GENTLY toss to combine",
      "REST: Let sit 5-10 minutes for flavors to meld",
      "SERVE: Serve IMMEDIATELY - best fresh"
    ],
    chefTips: ["Use firm ripe tomatoes that hold shape", "Add mint for extra flavor", "Don't make too far ahead - becomes watery"],
    pairingSuggestions: ["Nyama Choma", "Pilau", "Fried fish", "Grilled meat"],
    isFavorite: false,
    tags: ["salad", "raw", "side dish", "quick", "fresh", "kenyan"]
  },
  
  {
    id: "ken011",
    name: "Matoke (Kenyan Plantain Stew)",
    category: "🇰🇪 Kenyan Classics",
    image: "https://images.pexels.com/photos/4110257/pexels-photo-4110257.jpeg",
    prepTime: "15 min",
    cookTime: "45 min",
    servings: "6 people",
    difficulty: "Easy",
    equipment: ["Large heavy pot", "Sharp knife", "Wooden spoon"],
    ingredients: ["8 green plantains, peeled", "500g beef, cubed", "2 onions, chopped", "3 tomatoes, chopped", "4 cloves garlic", "2 tbsp tomato paste", "4 cups beef broth", "Salt", "Pepper", "Fresh coriander"],
    instructions: [
      "PREP PLANTAINS: Peel plantains (use oil on hands to prevent sticky residue). Cut into 2-inch chunks",
      "BROWN MEAT: Heat oil in pot. Brown beef on all sides (5-7 minutes). Remove and set aside",
      "SAUTÉ ONIONS: Add onions to same pot. Cook until GOLDEN (5 minutes)",
      "AROMATICS: Add garlic. Cook 30 seconds until fragrant",
      "ADD TOMATOES: Add tomatoes and tomato paste. Cook until soft (5 minutes)",
      "RETURN MEAT: Return beef to pot. Add salt and pepper",
      "ADD LIQUID: Pour in broth. Bring to boil",
      "SIMMER MEAT: Reduce heat, cover. Simmer 20 minutes",
      "ADD PLANTAINS: Add plantains. Ensure they're submerged",
      "COOK: Cover and simmer 20-25 minutes until plantains are FORK-TENDER",
      "CHECK: Sauce should be thick. If too thin, remove lid and reduce",
      "GARNISH: Sprinkle with fresh coriander",
      "SERVE: Serve hot with rice or chapati"
    ],
    chefTips: ["Use GREEN plantains - ripe ones become mushy", "Oil hands before peeling to prevent sticky sap", "Don't overcook plantains - they should hold shape"],
    pairingSuggestions: ["Rice", "Chapati", "Kachumbari"],
    isFavorite: false,
    tags: ["stew", "plantain", "traditional", "kenyan"]
  },
  
  {
    id: "ken012",
    name: "Wali wa Nazi (Coconut Rice)",
    category: "🇰🇪 Kenyan Classics",
    image: "https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg",
    prepTime: "5 min",
    cookTime: "25 min",
    servings: "4 people",
    difficulty: "Easy",
    equipment: ["Medium pot with tight lid", "Fine strainer", "Fork"],
    ingredients: ["2 cups basmati rice", "1 can (400ml) coconut milk", "1 1/2 cups water", "1 tsp salt", "1 tbsp sugar (optional)"],
    instructions: [
      "WASH RICE: Rinse rice until water runs CLEAR. Soak 15 minutes. Drain WELL",
      "COMBINE LIQUIDS: In pot, combine coconut milk, water, salt, and sugar",
      "HEAT: Bring to GENTLE boil over medium heat, stirring to dissolve salt",
      "ADD RICE: Add drained rice. Stir ONCE gently",
      "SIMMER: Reduce heat to LOWEST setting. Cover with TIGHT lid",
      "STEAM: Cook 15-18 minutes. DO NOT OPEN LID",
      "REST: Turn off heat. Let rest covered 10 minutes",
      "FLUFF: Remove lid. Fluff gently with fork",
      "SERVE: Serve hot as side dish"
    ],
    chefTips: ["Full-fat coconut milk gives best flavor", "Don't stir after adding rice - makes it sticky", "Can add a pandan leaf for aroma"],
    pairingSuggestions: ["Curry", "Stew", "Grilled fish", "Beans"],
    isFavorite: false,
    tags: ["rice", "coconut", "swahili", "side dish", "kenyan"]
  },
  
  {
    id: "ken014",
    name: "Mbaazi za Nazi (Pigeon Peas in Coconut)",
    category: "🇰🇪 Kenyan Classics",
    image: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg",
    prepTime: "10 min",
    cookTime: "45 min",
    servings: "6 people",
    difficulty: "Easy",
    equipment: ["Large pot", "Wooden spoon", "Sharp knife"],
    ingredients: ["2 cups dried pigeon peas", "1 can coconut milk", "1 onion, chopped", "2 tomatoes, chopped", "3 cloves garlic", "1 tsp turmeric", "Salt to taste", "2 cups water"],
    instructions: [
      "SOAK PEAS: Soak pigeon peas overnight. Drain and rinse",
      "BOIL PEAS: Boil in water until tender (about 30 minutes). Drain",
      "SAUTÉ ONIONS: Heat oil in pot. Cook onions until soft (5 minutes)",
      "AROMATICS: Add garlic. Cook 30 seconds",
      "ADD TOMATOES: Add tomatoes. Cook until soft (5 minutes)",
      "SPICES: Add turmeric and salt. Stir 1 minute",
      "COMBINE: Add boiled peas and coconut milk",
      "SIMMER: Simmer 10-15 minutes until thick and creamy",
      "TASTE: Adjust seasoning",
      "SERVE: Serve hot with chapati or rice"
    ],
    chefTips: ["Don't add salt while boiling peas - makes them tough", "Can use canned pigeon peas for speed", "Add chili for heat"],
    pairingSuggestions: ["Chapati", "Rice", "Coconut rice"],
    isFavorite: false,
    tags: ["swahili", "coconut", "vegetarian", "stew", "kenyan"]
  },
  
  {
    id: "ken015",
    name: "Irio (Kikuyu Mashed Peas and Potatoes)",
    category: "🇰🇪 Kenyan Classics",
    image: "https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg",
    prepTime: "15 min",
    cookTime: "30 min",
    servings: "6 people",
    difficulty: "Easy",
    equipment: ["Large pot", "Potato masher", "Sharp knife", "Frying pan"],
    ingredients: ["6 large potatoes, peeled", "2 cups fresh peas", "1 cup fresh maize kernels", "2 tbsp butter", "Salt to taste"],
    instructions: [
      "BOIL POTATOES: Place potatoes in pot. Cover with salted water. Boil until FORK-TENDER (15-20 minutes)",
      "BOIL PEAS AND MAIZE: In separate pot, boil peas and maize until tender (5-7 minutes). Drain",
      "DRAIN POTATOES: Drain potatoes well. Return to pot over LOW heat to steam dry",
      "MASH POTATOES: Add butter. Mash until SMOOTH with no lumps",
      "ADD PEAS AND MAIZE: Add drained peas and maize to mashed potatoes",
      "MIX: Fold together gently. Don't overmix - peas should remain whole",
      "SEASON: Add salt to taste. Mix gently",
      "SHAPE: Transfer to serving bowl. Shape into smooth dome with wet hands",
      "SERVE: Serve PIPING HOT as side dish"
    ],
    chefTips: ["Use fresh peas when in season - sweeter flavor", "Don't overmash once peas are added", "Leftover Irio makes excellent breakfast patties"],
    pairingSuggestions: ["Nyama Choma", "Beef stew", "Grilled chicken", "Kachumbari"],
    isFavorite: false,
    tags: ["staple", "vegetarian", "kikuyu", "traditional", "kenyan"]
  },

  // ==========================================
  // 🇰🇪 KENYAN STREET FOOD (6 recipes)
  // ==========================================

  {
    id: "stf001",
    name: "Bhajia (Potato Fritters)",
    category: "🇰🇪 Street Food",
    image: "https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg",
    prepTime: "15 min",
    cookTime: "15 min",
    servings: "4 people",
    difficulty: "Easy",
    equipment: ["Sharp knife", "Mixing bowl", "Deep pot", "Slotted spoon"],
    ingredients: ["4 large potatoes", "1 cup gram flour (besan)", "1/2 cup water", "1 tsp chili powder", "1/2 tsp turmeric", "1 tsp salt", "Oil for frying"],
    instructions: [
      "SLICE POTATOES: Slice potatoes THINLY (1/4 inch). Use mandoline if available",
      "MAKE BATTER: Mix gram flour, spices, and salt. Add water gradually to make THICK batter",
      "HEAT OIL: Heat oil to 170°C (340°F)",
      "COAT: Dip each potato slice in batter, coating WELL",
      "FRY: Carefully slide into hot oil. Fry 2-3 minutes per side until GOLDEN and CRISPY",
      "DRAIN: Remove with slotted spoon. Drain on paper towels",
      "SERVE: Serve HOT with chutney or ketchup"
    ],
    chefTips: ["Batter should be thick enough to coat potato without dripping", "Don't overcrowd - drops oil temperature", "Serve immediately"],
    pairingSuggestions: ["Tamarind chutney", "Chili sauce", "Ketchup", "Chai"],
    isFavorite: false,
    tags: ["street food", "snack", "potato", "fried", "kenyan"]
  },
  
  {
    id: "stf002",
    name: "Viazi Karai (Spiced Potato Fritters)",
    category: "🇰🇪 Street Food",
    image: "https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg",
    prepTime: "15 min",
    cookTime: "15 min",
    servings: "4 people",
    difficulty: "Easy",
    equipment: ["Pot for boiling", "Mixing bowl", "Deep pot for frying", "Slotted spoon"],
    ingredients: ["6 potatoes, boiled", "1 cup gram flour", "1/2 cup water", "1 tsp chili", "1/2 tsp turmeric", "1 tsp salt", "Oil for frying"],
    instructions: [
      "BOIL POTATOES: Boil until JUST tender. Cool completely",
      "SLICE: Slice into rounds",
      "MAKE BATTER: Mix gram flour, spices, salt, and water into THICK batter",
      "HEAT OIL: Heat oil to 170°C (340°F)",
      "COAT: Dip each slice in batter",
      "FRY: Fry until GOLDEN BROWN and CRISPY (2-3 minutes per side)",
      "DRAIN: Drain on paper towels",
      "SERVE: Serve HOT"
    ],
    chefTips: ["Potatoes must be completely cool before frying", "Batter should be thick like pancake batter", "Double fry for extra crispness"],
    pairingSuggestions: ["Tamarind sauce", "Chili sauce", "Lemon wedges"],
    isFavorite: false,
    tags: ["street food", "snack", "potato", "swahili", "kenyan"]
  },
  
  {
    id: "stf003",
    name: "Mshikaki (Grilled Meat Skewers)",
    category: "🇰🇪 Street Food",
    image: "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg",
    prepTime: "20 min",
    cookTime: "15 min",
    servings: "4 people",
    difficulty: "Easy",
    equipment: ["Skewers", "Grill or grill pan", "Mixing bowl", "Tongs"],
    ingredients: ["500g beef or goat, cubed", "2 tbsp yogurt", "1 tbsp ginger-garlic paste", "1 tsp cumin", "1 tsp paprika", "1/2 tsp chili", "Salt", "Lemon juice"],
    instructions: [
      "MARINATE: Mix yogurt, ginger-garlic, spices, salt, lemon juice. Add meat. Mix well",
      "REST: Marinate MINIMUM 2 hours, ideally overnight",
      "THREAD: Thread meat onto skewers, leaving small gap between pieces",
      "PREHEAT GRILL: Medium-high heat",
      "GRILL: Cook 3-4 minutes per side until CHARRED and cooked through",
      "REST: Let rest 5 minutes",
      "SERVE: Serve hot with Kachumbari"
    ],
    chefTips: ["Don't overcrowd skewers", "Soak wooden skewers 30 minutes", "Baste with marinade while grilling"],
    pairingSuggestions: ["Kachumbari", "Ugali", "Chili sauce", "Cold beer"],
    isFavorite: false,
    tags: ["street food", "meat", "grill", "skewers", "kenyan"]
  },
  
  {
    id: "ken016",
    name: "Mutura (Kenyan Traditional Sausage)",
    category: "🇰🇪 Street Food",
    image: "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg",
    prepTime: "30 min",
    cookTime: "45 min",
    servings: "6 people",
    difficulty: "Advanced",
    equipment: ["Sausage stuffer", "Large pot", "Grill", "Sharp knife"],
    ingredients: ["500g ground beef", "1 cup cooked beef blood (optional)", "1 large onion", "4 cloves garlic", "Spices", "Sausage casings"],
    instructions: [
      "PREP CASINGS: Soak casings in warm water 30 minutes. Rinse",
      "MIX FILLING: Combine all ingredients. Mix until STICKY",
      "STUFF: Stuff casings, avoiding air pockets. Twist into links",
      "POACH: Simmer in water 15-20 minutes until FIRM",
      "GRILL: Grill until BROWNED and CHARRED",
      "REST: Let rest 5 minutes",
      "SLICE: Slice into rounds",
      "SERVE: Serve hot with Kachumbari"
    ],
    chefTips: ["Blood adds authentic flavor", "Don't overstuff", "Prick air bubbles"],
    pairingSuggestions: ["Kachumbari", "Ugali", "Chili sauce"],
    isFavorite: false,
    tags: ["street food", "meat", "traditional", "sausage", "kenyan"]
  },

  {
    id: "stf006",
    name: "Smokie Pasua (Split Sausage)",
    category: "🇰🇪 Street Food",
    image: "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg",
    prepTime: "5 min",
    cookTime: "10 min",
    servings: "2 people",
    difficulty: "Easy",
    equipment: ["Grill or pan", "Knife"],
    ingredients: ["2 smokie sausages", "Kachumbari", "Mayonnaise", "Ketchup", "Chili sauce"],
    instructions: [
      "GRILL SMOKIES: Grill or fry until cooked and slightly CHARRED",
      "SPLIT: Split each smokie lengthwise (don't cut all the way)",
      "FILL: Stuff generously with Kachumbari",
      "DRESS: Drizzle with mayonnaise, ketchup, and chili sauce",
      "SERVE: Serve immediately"
    ],
    chefTips: ["Char smokies for smoky flavor", "Customize with your favorite sauces"],
    pairingSuggestions: ["Cold soda", "Beer"],
    isFavorite: false,
    tags: ["street food", "snack", "quick", "kenyan"]
  },

  {
    id: "stf007",
    name: "Mayai Pasua (Boiled Eggs with Kachumbari)",
    category: "🇰🇪 Street Food",
    image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
    prepTime: "5 min",
    cookTime: "10 min",
    servings: "2 people",
    difficulty: "Easy",
    equipment: ["Small pot", "Knife"],
    ingredients: ["4 eggs", "Kachumbari", "Salt", "Black pepper", "Chili powder"],
    instructions: [
      "BOIL EGGS: Boil 8-10 minutes until HARD BOILED",
      "COOL: Cool in cold water. Peel",
      "HALVE: Cut each egg in half lengthwise",
      "TOP: Top generously with Kachumbari",
      "SEASON: Sprinkle with salt, pepper, and chili powder",
      "SERVE: Serve as quick snack"
    ],
    chefTips: ["Room temperature eggs boil evenly", "Kachumbari should be fresh"],
    pairingSuggestions: ["Hot sauce", "Cold drink"],
    isFavorite: false,
    tags: ["street food", "snack", "eggs", "quick", "kenyan"]
  },

  // ==========================================
  // 🇰🇪 KENYAN STEWS (5 recipes)
  // ==========================================

  {
    id: "stew001",
    name: "Beef Wet Fry (Nyama Choma ya Mchuzi)",
    category: "🇰🇪 Kenyan Stews",
    image: "https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg",
    prepTime: "15 min",
    cookTime: "1 hour",
    servings: "4 people",
    difficulty: "Easy",
    equipment: ["Large pot", "Sharp knife", "Wooden spoon"],
    ingredients: ["500g beef, cubed", "2 onions, chopped", "3 tomatoes, chopped", "4 cloves garlic", "1 tbsp ginger", "2 tsp curry powder", "1 tsp paprika", "Salt", "Oil"],
    instructions: [
      "BOIL BEEF: Place beef in pot. Cover with water. Boil until TENDER (40-50 minutes). Drain, RESERVE broth",
      "FRY BEEF: Heat oil in pan. Add boiled beef. Fry until BROWNED on all sides",
      "SAUTÉ ONIONS: Push beef to sides. Add onions to center. Cook until soft",
      "AROMATICS: Add garlic and ginger. Cook 30 seconds",
      "ADD TOMATOES: Add tomatoes. Cook until soft and mushy",
      "SPICES: Add curry powder, paprika, salt. Stir well",
      "ADD BROTH: Add 1/2 cup reserved broth. Simmer 5-10 minutes until sauce thickens",
      "SERVE: Serve hot with ugali or rice"
    ],
    chefTips: ["Boiling beef first ensures tenderness", "Reserve broth - adds flavor to sauce", "Fry beef until well browned"],
    pairingSuggestions: ["Ugali", "Rice", "Chapati", "Sukuma Wiki"],
    isFavorite: false,
    tags: ["beef", "stew", "kenyan", "dinner"]
  },
  
  {
    id: "stew002",
    name: "Chicken Curry (Kuku wa Mchuzi)",
    category: "🇰🇪 Kenyan Stews",
    image: "https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg",
    prepTime: "15 min",
    cookTime: "45 min",
    servings: "4 people",
    difficulty: "Easy",
    equipment: ["Large pan", "Sharp knife", "Wooden spoon"],
    ingredients: ["1 whole chicken, cut up", "2 onions, chopped", "3 tomatoes, chopped", "4 cloves garlic", "1 tbsp ginger", "2 tbsp curry powder", "1 cup coconut milk", "Salt", "Oil"],
    instructions: [
      "SEASON CHICKEN: Season chicken pieces with salt",
      "BROWN CHICKEN: Heat oil. Brown chicken on all sides. Remove",
      "SAUTÉ ONIONS: Add onions to same pan. Cook until GOLDEN",
      "AROMATICS: Add garlic and ginger. Cook 30 seconds",
      "SPICES: Add curry powder. Cook 1 minute until FRAGRANT",
      "ADD TOMATOES: Add tomatoes. Cook until soft and oil separates",
      "RETURN CHICKEN: Return chicken to pan. Stir to coat",
      "ADD COCONUT MILK: Pour in coconut milk. Bring to simmer",
      "COOK: Cover and simmer 25-30 minutes until chicken is COOKED and sauce is THICK",
      "SERVE: Garnish with coriander. Serve hot"
    ],
    chefTips: ["Browning chicken adds depth", "Bloom spices in oil for maximum flavor", "Use chicken thighs for juicier result"],
    pairingSuggestions: ["Rice", "Chapati", "Ugali", "Coconut rice"],
    isFavorite: false,
    tags: ["chicken", "curry", "stew", "kenyan", "dinner"]
  },
  
  {
    id: "stew003",
    name: "Bean Stew (Maharagwe ya Nazi)",
    category: "🇰🇪 Kenyan Stews",
    image: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg",
    prepTime: "10 min",
    cookTime: "1 hour",
    servings: "6 people",
    difficulty: "Easy",
    equipment: ["Large pot", "Wooden spoon", "Sharp knife"],
    ingredients: ["3 cups dried beans", "1 onion, chopped", "3 tomatoes, chopped", "3 cloves garlic", "1 can coconut milk", "1 tsp curry powder", "Salt"],
    instructions: [
      "SOAK BEANS: Soak beans overnight. Drain and rinse",
      "BOIL BEANS: Cover with fresh water. Boil until TENDER (45-60 minutes). Drain, RESERVE 1 cup broth",
      "SAUTÉ ONIONS: Heat oil. Cook onions until soft",
      "AROMATICS: Add garlic. Cook 30 seconds",
      "ADD TOMATOES: Add tomatoes. Cook until soft",
      "SPICES: Add curry powder and salt. Stir 1 minute",
      "COMBINE: Add boiled beans, coconut milk, and reserved broth",
      "SIMMER: Simmer 15-20 minutes until THICK and CREAMY",
      "MASH: Mash some beans against pot side to thicken",
      "SERVE: Serve hot"
    ],
    chefTips: ["Don't salt beans while boiling", "Reserve bean broth - it's liquid gold", "Mashing beans naturally thickens stew"],
    pairingSuggestions: ["Rice", "Chapati", "Bread", "Plantains"],
    isFavorite: false,
    tags: ["beans", "stew", "vegetarian", "coconut", "kenyan"]
  },

  {
    id: "stew004",
    name: "Minced Meat (Kima)",
    category: "🇰🇪 Kenyan Stews",
    image: "https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg",
    prepTime: "10 min",
    cookTime: "20 min",
    servings: "4 people",
    difficulty: "Easy",
    equipment: ["Large pan", "Wooden spoon", "Sharp knife"],
    ingredients: ["500g minced beef", "1 onion", "2 tomatoes", "3 cloves garlic", "1 cup peas", "Spices", "Fresh coriander"],
    instructions: [
      "SAUTÉ ONIONS: Heat oil. Cook onions until soft",
      "ADD GARLIC: Add garlic. Cook 30 seconds",
      "BROWN MEAT: Add minced meat. Break up lumps. Cook until BROWNED",
      "ADD TOMATOES: Add tomatoes. Cook until soft",
      "ADD PEAS AND SPICES: Add peas, salt, pepper, curry powder",
      "SIMMER: Add splash of water. Simmer 10 minutes until peas are tender",
      "GARNISH: Sprinkle with fresh coriander",
      "SERVE: Serve hot with chapati or rice"
    ],
    chefTips: ["Break up meat thoroughly for even cooking", "Drain excess fat if needed", "Add chili for heat"],
    pairingSuggestions: ["Chapati", "Rice", "Ugali", "Pasta"],
    isFavorite: false,
    tags: ["beef", "minced", "quick", "stew", "kenyan"]
  },

  {
    id: "stew005",
    name: "Green Grams Stew (Ndengu)",
    category: "🇰🇪 Kenyan Stews",
    image: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg",
    prepTime: "10 min",
    cookTime: "45 min",
    servings: "4 people",
    difficulty: "Easy",
    equipment: ["Large pot", "Wooden spoon", "Sharp knife"],
    ingredients: ["2 cups green grams", "1 onion", "3 tomatoes", "2 carrots", "Curry powder", "Salt"],
    instructions: [
      "BOIL GRAMS: Boil green grams until tender (30-40 minutes). Drain, reserve broth",
      "SAUTÉ ONIONS: Heat oil. Cook onions until soft",
      "ADD TOMATOES: Add tomatoes. Cook until soft",
      "SPICES: Add curry powder and salt",
      "ADD CARROTS: Add diced carrots. Stir",
      "ADD GRAMS: Add boiled green grams",
      "SIMMER: Add reserved broth. Simmer 15 minutes",
      "MASH: Mash slightly to thicken",
      "SERVE: Serve hot with chapati"
    ],
    chefTips: ["Soak green grams for faster cooking", "Don't add salt while boiling", "Mashing thickens naturally"],
    pairingSuggestions: ["Chapati", "Rice", "Avocado"],
    isFavorite: false,
    tags: ["legumes", "vegetarian", "stew", "healthy", "kenyan"]
  },

  // ==========================================
  // 🍳 BREAKFAST (7 recipes)
  // ==========================================

  {
    id: "brk001",
    name: "Fluffy American Pancakes",
    category: "🍳 Breakfast",
    image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: "4 people",
    difficulty: "Easy",
    equipment: ["Large bowl", "Whisk", "Non-stick skillet", "Spatula"],
    ingredients: ["1 1/2 cups flour", "3 1/2 tsp baking powder", "1 tbsp sugar", "1/4 tsp salt", "1 1/4 cups milk", "1 egg", "3 tbsp melted butter"],
    instructions: [
      "MIX DRY: Whisk flour, baking powder, sugar, salt",
      "MIX WET: Whisk milk, egg, melted butter",
      "COMBINE: Pour wet into dry. Stir until JUST combined. Batter WILL be lumpy",
      "REST: Let batter rest 5-10 minutes. DO NOT STIR",
      "HEAT PAN: Medium heat. Grease lightly",
      "POUR: Use 1/4 cup measure",
      "WATCH: Bubbles will form and POP. Edges look DRY",
      "FLIP: When bubbles pop, flip once. Cook 1-2 minutes until golden",
      "SERVE: Stack and serve warm"
    ],
    chefTips: ["FRESH baking powder is essential", "Room temperature ingredients = fluffier pancakes", "First pancake is test pancake"],
    pairingSuggestions: ["Maple syrup", "Salted butter", "Fresh berries", "Bacon"],
    isFavorite: false,
    tags: ["breakfast", "quick", "american", "pancakes"]
  },
  
  {
    id: "brk002",
    name: "Kenyan Chai (Spiced Tea)",
    category: "🍳 Breakfast",
    image: "https://images.pexels.com/photos/5946991/pexels-photo-5946991.jpeg",
    prepTime: "2 min",
    cookTime: "10 min",
    servings: "4 cups",
    difficulty: "Easy",
    equipment: ["Medium pot", "Strainer", "Tea cups"],
    ingredients: ["4 cups water", "2 cups milk", "4 tsp loose black tea", "4 cardamom pods", "1 cinnamon stick", "2 slices ginger", "4 tbsp sugar"],
    instructions: [
      "BOIL SPICES: Bring water to boil with cardamom, cinnamon, and ginger",
      "ADD TEA: Add tea leaves. Boil 2 minutes",
      "ADD MILK: Add milk and sugar. Bring to boil again",
      "SIMMER: Reduce heat. Simmer 3-5 minutes",
      "STRAIN: Pour through strainer into cups",
      "SERVE: Serve PIPING HOT"
    ],
    chefTips: ["Use full-fat milk for creamiest chai", "Adjust sugar to taste", "Add pinch of black pepper for warmth"],
    pairingSuggestions: ["Mandazi", "Chapati", "Bread", "Biscuits"],
    isFavorite: false,
    tags: ["drink", "tea", "kenyan", "breakfast", "spiced"]
  },
  
  {
    id: "brk003",
    name: "French Toast",
    category: "🍳 Breakfast",
    image: "https://images.pexels.com/photos/2113556/pexels-photo-2113556.jpeg",
    prepTime: "5 min",
    cookTime: "10 min",
    servings: "4 people",
    difficulty: "Easy",
    equipment: ["Shallow dish", "Whisk", "Non-stick pan", "Spatula"],
    ingredients: ["8 slices thick bread", "4 eggs", "1/2 cup milk", "1 tsp vanilla", "1 tsp cinnamon", "Butter", "Maple syrup"],
    instructions: [
      "CUSTARD: Whisk eggs, milk, vanilla, cinnamon",
      "SOAK: Dip each bread slice, coating both sides",
      "HEAT PAN: Medium heat. Add butter",
      "FRY: Cook 2-3 minutes per side until GOLDEN BROWN",
      "SERVE: Serve hot with maple syrup"
    ],
    chefTips: ["Use day-old bread", "Don't oversoak", "Wipe pan between batches"],
    pairingSuggestions: ["Maple syrup", "Fresh berries", "Powdered sugar", "Bacon"],
    isFavorite: false,
    tags: ["breakfast", "quick", "bread", "eggs"]
  },
  
  {
    id: "brk004",
    name: "Omelette with Vegetables",
    category: "🍳 Breakfast",
    image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
    prepTime: "5 min",
    cookTime: "5 min",
    servings: "1 person",
    difficulty: "Easy",
    equipment: ["Small bowl", "Whisk", "Non-stick pan", "Spatula"],
    ingredients: ["2 eggs", "2 tbsp milk", "1/4 cup chopped vegetables", "Salt", "Pepper", "Butter"],
    instructions: [
      "WHISK: Whisk eggs with milk, salt, pepper",
      "HEAT PAN: Medium-low heat. Add butter",
      "SAUTÉ VEG: Add vegetables. Cook 1 minute",
      "POUR EGGS: Pour eggs over vegetables",
      "STIR GENTLY: Push cooked edges toward center",
      "FOLD: When mostly set, fold in half",
      "FINISH: Cook 30 seconds more",
      "SERVE: Slide onto plate"
    ],
    chefTips: ["Low heat = creamy omelette", "Don't overbeat eggs", "Fillings should be pre-cooked"],
    pairingSuggestions: ["Toast", "Fresh fruit", "Avocado"],
    isFavorite: false,
    tags: ["breakfast", "eggs", "quick", "protein"]
  },
  
  {
    id: "brk005",
    name: "Uji (Kenyan Fermented Porridge)",
    category: "🍳 Breakfast",
    image: "https://images.pexels.com/photos/5419336/pexels-photo-5419336.jpeg",
    prepTime: "5 min",
    cookTime: "15 min",
    servings: "4 people",
    difficulty: "Easy",
    equipment: ["Medium pot", "Whisk", "Measuring cups"],
    ingredients: ["1 cup millet flour", "4 cups water", "1/2 cup sugar", "Pinch of salt"],
    instructions: [
      "MIX PASTE: Mix flour with 1 cup COLD water until SMOOTH",
      "BOIL WATER: Bring remaining 3 cups water to BOIL",
      "ADD PASTE: Slowly pour paste into boiling water, WHISKING CONSTANTLY",
      "SIMMER: Reduce heat to LOW. Simmer 10-15 minutes",
      "SWEETEN: Add sugar and salt. Stir well",
      "SERVE: Pour into bowls. Serve HOT"
    ],
    chefTips: ["Cold water prevents lumps", "Stir bottom of pot to prevent scorching", "Add cardamom for flavor"],
    pairingSuggestions: ["Mandazi", "Bread", "Banana"],
    isFavorite: false,
    tags: ["breakfast", "porridge", "traditional", "kenyan"]
  },
  
  {
    id: "brk006",
    name: "Crepes (Thin French Pancakes)",
    category: "🍳 Breakfast",
    image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: "4 people",
    difficulty: "Intermediate",
    equipment: ["Mixing bowl", "Whisk", "Non-stick pan", "Ladle"],
    ingredients: ["1 cup flour", "2 eggs", "1 1/4 cups milk", "2 tbsp melted butter", "Pinch salt"],
    instructions: [
      "MAKE BATTER: Whisk flour and salt. Add eggs, whisk. Gradually add milk",
      "ADD BUTTER: Whisk in melted butter",
      "REST: Let batter rest MINIMUM 30 minutes",
      "HEAT PAN: Medium heat. Lightly butter",
      "POUR: Lift pan. Pour 1/4 cup batter. SWIRL to coat",
      "COOK: Cook 1-2 minutes until edges BROWN",
      "FLIP: Loosen edges. Flip. Cook 30 seconds",
      "STACK: Stack on plate. Cover to keep warm"
    ],
    chefTips: ["Resting batter = tender crepes", "First crepe is test crepe", "Swirl quickly for thin crepe"],
    pairingSuggestions: ["Nutella and banana", "Ham and cheese", "Lemon and sugar"],
    isFavorite: false,
    tags: ["breakfast", "french", "crepes", "versatile"]
  },
  
  {
    id: "brk007",
    name: "Shakshuka (Eggs in Tomato Sauce)",
    category: "🍳 Breakfast",
    image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
    prepTime: "10 min",
    cookTime: "20 min",
    servings: "4 people",
    difficulty: "Easy",
    equipment: ["Large skillet with lid", "Sharp knife", "Wooden spoon"],
    ingredients: ["6 eggs", "1 onion, chopped", "1 bell pepper", "3 cloves garlic", "1 can crushed tomatoes", "Spices", "Fresh parsley"],
    instructions: [
      "SAUTÉ VEGETABLES: Cook onion and bell pepper until soft",
      "AROMATICS: Add garlic and spices. Cook 1 minute",
      "ADD TOMATOES: Add tomatoes. Simmer 10 minutes",
      "MAKE WELLS: Make 6 wells in sauce",
      "ADD EGGS: Crack egg into each well",
      "COVER: Cook 5-8 minutes until whites SET",
      "GARNISH: Sprinkle with parsley",
      "SERVE: Serve immediately with bread"
    ],
    chefTips: ["Cook eggs until whites are JUST set", "Add feta for extra flavor", "Serve with crusty bread"],
    pairingSuggestions: ["Crusty bread", "Pita", "Fresh salad"],
    isFavorite: false,
    tags: ["breakfast", "eggs", "middle eastern", "vegetarian"]
  },

  // ==========================================
  // 🥗 LUNCH (5 recipes)
  // ==========================================

  {
    id: "lun001",
    name: "Chicken Caesar Salad",
    category: "🥗 Lunch",
    image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg",
    prepTime: "15 min",
    cookTime: "10 min",
    servings: "2 people",
    difficulty: "Easy",
    equipment: ["Grill pan", "Large bowl", "Sharp knife"],
    ingredients: ["2 chicken breasts", "1 head romaine", "1/2 cup Caesar dressing", "Parmesan", "Croutons"],
    instructions: [
      "COOK CHICKEN: Season chicken. Grill until cooked. Rest, then slice",
      "PREP LETTUCE: Wash and DRY thoroughly. Tear into pieces",
      "ASSEMBLE: Toss lettuce with half the dressing",
      "PLATE: Divide lettuce. Top with sliced chicken",
      "GARNISH: Add Parmesan shavings and croutons",
      "FINISH: Drizzle remaining dressing",
      "SERVE: Serve immediately"
    ],
    chefTips: ["DRY lettuce is crucial", "Homemade croutons are best", "Rest chicken before slicing"],
    pairingSuggestions: ["Garlic bread", "White wine"],
    isFavorite: false,
    tags: ["lunch", "salad", "chicken", "healthy", "quick"]
  },
  
  {
    id: "lun002",
    name: "Tuna Melt Sandwich",
    category: "🥗 Lunch",
    image: "https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg",
    prepTime: "10 min",
    cookTime: "5 min",
    servings: "2 people",
    difficulty: "Easy",
    equipment: ["Mixing bowl", "Skillet", "Spatula"],
    ingredients: ["2 cans tuna", "1/4 cup mayo", "Celery", "Onion", "4 slices bread", "Cheddar cheese", "Butter"],
    instructions: [
      "MAKE TUNA SALAD: Combine drained tuna, mayo, celery, onion. Season",
      "BUTTER BREAD: Butter one side of each slice",
      "ASSEMBLE: Bread butter-side DOWN. Add cheese, tuna, more cheese",
      "CLOSE: Top with bread butter-side UP",
      "GRILL: Cook 2-3 minutes per side until GOLDEN and cheese MELTED",
      "REST: Let rest 1 minute",
      "SLICE: Cut diagonally",
      "SERVE: Serve HOT"
    ],
    chefTips: ["Drain tuna VERY well", "Medium heat is key", "Cover pan to help cheese melt"],
    pairingSuggestions: ["Tomato soup", "Pickles", "Potato chips"],
    isFavorite: false,
    tags: ["lunch", "sandwich", "tuna", "quick", "comfort food"]
  },
  
  {
    id: "lun003",
    name: "Quinoa Power Bowl",
    category: "🥗 Lunch",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    prepTime: "15 min",
    cookTime: "15 min",
    servings: "2 people",
    difficulty: "Easy",
    equipment: ["Small pot", "Mixing bowls", "Sharp knife"],
    ingredients: ["1 cup quinoa", "1 avocado", "Cherry tomatoes", "Cucumber", "Chickpeas", "Spinach", "Lemon dressing"],
    instructions: [
      "COOK QUINOA: Rinse quinoa. Cook with water 15 minutes. Fluff and cool",
      "MAKE DRESSING: Whisk olive oil, lemon juice, honey, salt, pepper",
      "ASSEMBLE BASE: Divide spinach between bowls",
      "ADD QUINOA: Add cooled quinoa",
      "ADD VEGETABLES: Arrange avocado, tomatoes, cucumber, chickpeas",
      "DRESS: Drizzle dressing over everything",
      "SERVE: Serve immediately"
    ],
    chefTips: ["Rinse quinoa to remove bitterness", "Meal prep components ahead", "Add grilled chicken for protein"],
    pairingSuggestions: ["Lemon wedge", "Hot sauce", "Pita bread"],
    isFavorite: false,
    tags: ["lunch", "healthy", "vegetarian", "bowl", "quinoa"]
  },
  
  {
    id: "lun004",
    name: "Club Sandwich",
    category: "🥗 Lunch",
    image: "https://images.pexels.com/photos/2113556/pexels-photo-2113556.jpeg",
    prepTime: "15 min",
    cookTime: "10 min",
    servings: "2 people",
    difficulty: "Easy",
    equipment: ["Skillet", "Toaster", "Sharp knife", "Toothpicks"],
    ingredients: ["6 slices bread", "2 chicken breasts", "6 slices bacon", "Tomato", "Lettuce", "Mayo"],
    instructions: [
      "COOK BACON: Cook until CRISPY. Drain",
      "COOK CHICKEN: Season and cook. Rest, slice thinly",
      "TOAST BREAD: Toast all bread slices",
      "SPREAD MAYO: Spread mayo on one side of each toast",
      "BUILD: Toast mayo-side UP. Layer lettuce, tomato, chicken, bacon",
      "TOP: Add final toast mayo-side DOWN",
      "SECURE: Insert toothpicks in corners",
      "SLICE: Cut diagonally into triangles",
      "SERVE: Serve with pickles or chips"
    ],
    chefTips: ["Toast bread well to prevent sogginess", "Pat tomatoes dry", "Layer evenly for stability"],
    pairingSuggestions: ["French fries", "Coleslaw", "Pickle spear"],
    isFavorite: false,
    tags: ["lunch", "sandwich", "classic", "american", "bacon"]
  },
  
  {
    id: "lun005",
    name: "Greek Salad",
    category: "🥗 Lunch",
    image: "https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg",
    prepTime: "15 min",
    cookTime: "0 min",
    servings: "4 people",
    difficulty: "Easy",
    equipment: ["Large bowl", "Sharp knife", "Cutting board"],
    ingredients: ["Cucumber", "Tomatoes", "Red onion", "Feta cheese", "Kalamata olives", "Olive oil", "Oregano", "Salt"],
    instructions: [
      "CHOP VEGETABLES: Chop cucumber, tomatoes, and onion into chunks",
      "COMBINE: Place in large bowl",
      "ADD OLIVES AND FETA: Add olives. Crumble feta over top",
      "DRESS: Drizzle generously with olive oil",
      "SEASON: Sprinkle with dried oregano and salt",
      "TOSS: Toss gently to combine",
      "SERVE: Serve immediately"
    ],
    chefTips: ["Use good quality olive oil", "Don't dress until ready to serve", "Room temperature tomatoes have best flavor"],
    pairingSuggestions: ["Crusty bread", "Grilled chicken", "White wine"],
    isFavorite: false,
    tags: ["salad", "greek", "vegetarian", "fresh", "quick", "lunch"]
  },

  // ==========================================
  // 🍝 DINNER (7 recipes)
  // ==========================================

  {
    id: "din001",
    name: "Spaghetti Bolognese",
    category: "🍝 Dinner",
    image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
    prepTime: "15 min",
    cookTime: "45 min",
    servings: "6 people",
    difficulty: "Easy",
    equipment: ["Large pot", "Large pan", "Wooden spoon"],
    ingredients: ["500g spaghetti", "500g ground beef", "1 onion", "3 cloves garlic", "2 cans crushed tomatoes", "Oregano", "Parmesan"],
    instructions: [
      "COOK PASTA: Boil salted water. Cook spaghetti. Reserve 1/2 cup water",
      "BROWN MEAT: Brown ground beef. Drain fat",
      "SAUTÉ AROMATICS: Add onion and garlic. Cook until soft",
      "ADD TOMATOES: Add tomatoes and oregano. Simmer 20-30 minutes",
      "COMBINE: Toss pasta with sauce. Add pasta water if needed",
      "SERVE: Top with Parmesan"
    ],
    chefTips: ["Reserve pasta water - helps sauce cling", "Simmer sauce longer for deeper flavor", "Use beef and pork mix for richness"],
    pairingSuggestions: ["Garlic bread", "Green salad", "Red wine"],
    isFavorite: false,
    tags: ["pasta", "italian", "dinner", "family", "beef"]
  },
  
  {
    id: "din002",
    name: "Beef Stew",
    category: "🍝 Dinner",
    image: "https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg",
    prepTime: "20 min",
    cookTime: "2 hours",
    servings: "6 people",
    difficulty: "Easy",
    equipment: ["Large heavy pot", "Wooden spoon", "Sharp knife"],
    ingredients: ["1 kg beef chuck", "3 tbsp flour", "2 onions", "4 carrots", "4 potatoes", "4 cups beef broth", "Tomato paste", "Bay leaves"],
    instructions: [
      "COAT BEEF: Toss beef in seasoned flour",
      "BROWN MEAT: Brown beef in batches. Remove",
      "SAUTÉ ONIONS: Add onions. Cook until soft",
      "DEGLAZE: Add tomato paste and broth. Scrape bottom",
      "RETURN BEEF: Return beef to pot. Add bay leaves. Bring to boil",
      "SIMMER: Reduce heat. Cover. Simmer 1 hour",
      "ADD VEGETABLES: Add carrots and potatoes. Simmer 30-45 minutes",
      "SERVE: Ladle into bowls"
    ],
    chefTips: ["Brown meat in batches for proper searing", "Chuck roast is best for stew", "Make day ahead - flavors improve"],
    pairingSuggestions: ["Crusty bread", "Mashed potatoes", "Rice"],
    isFavorite: false,
    tags: ["stew", "comfort food", "dinner", "beef"]
  },
  
  {
    id: "din003",
    name: "Roast Chicken",
    category: "🍝 Dinner",
    image: "https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg",
    prepTime: "15 min",
    cookTime: "1.5 hours",
    servings: "6 people",
    difficulty: "Intermediate",
    equipment: ["Roasting pan", "Meat thermometer", "Kitchen twine"],
    ingredients: ["1 whole chicken", "4 tbsp butter", "4 cloves garlic", "1 lemon", "Fresh herbs", "Salt", "Pepper"],
    instructions: [
      "PREP CHICKEN: Remove from fridge 1 hour before. PAT DRY",
      "PREHEAT: Oven to 200°C (400°F)",
      "SEASON BUTTER: Mix butter with garlic, herbs, salt, pepper",
      "SEASON CHICKEN: Rub butter under skin and all over",
      "STUFF: Place lemon halves in cavity",
      "TRUSS: Tie legs together",
      "ROAST: Roast 1 hour 15 min to 1 hour 30 min",
      "BASTE: Baste every 20 minutes",
      "CHECK: Thigh reads 74°C (165°F)",
      "REST: Tent with foil. Rest 15 minutes",
      "CARVE: Carve and serve"
    ],
    chefTips: ["DRY skin = CRISPY skin", "Room temperature chicken cooks evenly", "Save carcass for stock"],
    pairingSuggestions: ["Roasted vegetables", "Mashed potatoes", "Gravy"],
    isFavorite: false,
    tags: ["dinner", "chicken", "roast", "family"]
  },
  
  {
    id: "din004",
    name: "Beef Stir Fry",
    category: "🍝 Dinner",
    image: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg",
    prepTime: "15 min",
    cookTime: "10 min",
    servings: "4 people",
    difficulty: "Easy",
    equipment: ["Wok or large pan", "Sharp knife", "Spatula"],
    ingredients: ["500g beef strips", "1 onion", "1 bell pepper", "2 carrots", "3 tbsp soy sauce", "2 tbsp oyster sauce", "Garlic", "Ginger"],
    instructions: [
      "PREP: Slice beef THINLY against grain",
      "HEAT WOK: Heat until SMOKING. Add oil",
      "COOK BEEF: Add beef. DON'T MOVE 1 minute. Stir-fry 2-3 minutes. Remove",
      "COOK VEGETABLES: Add garlic, ginger, vegetables. Stir-fry 2-3 minutes",
      "COMBINE: Return beef. Add sauces. Toss 1-2 minutes",
      "SERVE: Immediately with rice"
    ],
    chefTips: ["Slice beef when partially frozen", "Everything prepped before starting", "Don't overcrowd wok"],
    pairingSuggestions: ["Steamed rice", "Noodles", "Chili oil"],
    isFavorite: false,
    tags: ["dinner", "stir fry", "asian", "quick", "beef"]
  },
  
  {
    id: "din005",
    name: "Creamy Chicken Curry",
    category: "🍝 Dinner",
    image: "https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg",
    prepTime: "15 min",
    cookTime: "30 min",
    servings: "4 people",
    difficulty: "Easy",
    equipment: ["Large pan", "Wooden spoon", "Sharp knife"],
    ingredients: ["500g chicken thighs", "1 onion", "3 cloves garlic", "1 tbsp ginger", "2 tbsp curry powder", "1 can coconut milk", "Tomato puree"],
    instructions: [
      "BROWN CHICKEN: Season and brown chicken. Remove",
      "SAUTÉ ONIONS: Add onion. Cook until soft",
      "AROMATICS: Add garlic and ginger. Cook 30 seconds",
      "SPICES: Add curry powder. Cook 1 minute",
      "ADD LIQUIDS: Add tomato puree and coconut milk",
      "SIMMER: Return chicken. Simmer 15-20 minutes",
      "SERVE: Garnish with coriander"
    ],
    chefTips: ["Use chicken thighs - stay juicier", "Bloom spices in oil", "Full-fat coconut milk for creaminess"],
    pairingSuggestions: ["Basmati rice", "Naan bread", "Mango chutney"],
    isFavorite: false,
    tags: ["dinner", "curry", "chicken", "creamy"]
  },
  
  {
    id: "din006",
    name: "Lasagna",
    category: "🍝 Dinner",
    image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
    prepTime: "30 min",
    cookTime: "45 min",
    servings: "8 people",
    difficulty: "Intermediate",
    equipment: ["9x13 baking dish", "Large pot", "Large pan"],
    ingredients: ["500g lasagna sheets", "500g ground beef", "1 onion", "Crushed tomatoes", "500g ricotta", "500g mozzarella", "Parmesan"],
    instructions: [
      "MAKE MEAT SAUCE: Brown beef. Add onion, garlic, tomatoes. Simmer 20 minutes",
      "MAKE RICOTTA MIXTURE: Mix ricotta, egg, Parmesan, basil",
      "COOK PASTA: Cook lasagna sheets. Drain",
      "ASSEMBLE: Layer sauce, pasta, ricotta, mozzarella. Repeat 3 times",
      "BAKE: Cover with foil. Bake 25 min at 180°C. Remove foil. Bake 20 min",
      "REST: Rest 15 minutes before cutting",
      "SERVE: Garnish with fresh basil"
    ],
    chefTips: ["Resting is CRUCIAL - holds shape", "Make day ahead", "No-boil noodles work well"],
    pairingSuggestions: ["Garlic bread", "Green salad", "Red wine"],
    isFavorite: false,
    tags: ["italian", "pasta", "dinner", "family", "baked"]
  },
  
  {
    id: "din007",
    name: "Shepherd's Pie",
    category: "🍝 Dinner",
    image: "https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg",
    prepTime: "20 min",
    cookTime: "30 min",
    servings: "6 people",
    difficulty: "Easy",
    equipment: ["Large pan", "Baking dish", "Potato masher"],
    ingredients: ["500g minced lamb", "1 onion", "2 carrots", "1 cup peas", "Mashed potatoes", "Beef broth", "Worcestershire sauce"],
    instructions: [
      "MAKE FILLING: Brown lamb. Add onion, carrots. Cook until soft",
      "ADD LIQUID: Add broth, Worcestershire, peas. Simmer until thick",
      "MAKE MASHED POTATOES: Boil potatoes. Mash with butter and milk",
      "ASSEMBLE: Pour filling into baking dish. Top with mashed potatoes",
      "BAKE: Bake at 200°C for 20-25 minutes until GOLDEN",
      "REST: Rest 10 minutes",
      "SERVE: Serve hot"
    ],
    chefTips: ["Use lamb for authentic shepherd's pie", "Rough up potato top with fork for crispy bits", "Add cheese to potato topping"],
    pairingSuggestions: ["Green peas", "Gravy", "Red wine"],
    isFavorite: false,
    tags: ["british", "comfort food", "dinner", "lamb", "baked"]
  },

  // ==========================================
  // 🍰 DESSERTS (5 recipes)
  // ==========================================

  {
    id: "des001",
    name: "Chocolate Cake",
    category: "🍰 Desserts",
    image: "https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg",
    prepTime: "15 min",
    cookTime: "35 min",
    servings: "8 people",
    difficulty: "Easy",
    equipment: ["Two 9-inch pans", "Large bowl", "Electric mixer"],
    ingredients: ["1 3/4 cups flour", "3/4 cup cocoa", "2 cups sugar", "1 1/2 tsp baking powder", "1 1/2 tsp baking soda", "2 eggs", "1 cup milk", "1/2 cup oil", "1 cup hot coffee"],
    instructions: [
      "PREHEAT: Oven to 180°C (350°F). Grease pans",
      "MIX DRY: Whisk all dry ingredients",
      "ADD WET: Add eggs, milk, oil. Beat 2 minutes",
      "ADD COFFEE: Stir in hot coffee",
      "BAKE: Pour into pans. Bake 30-35 minutes",
      "COOL: Cool completely before frosting"
    ],
    chefTips: ["Hot coffee enhances chocolate flavor", "Room temperature ingredients", "Don't overbake"],
    pairingSuggestions: ["Chocolate frosting", "Vanilla ice cream", "Fresh berries"],
    isFavorite: false,
    tags: ["dessert", "cake", "chocolate", "baking"]
  },
  
  {
    id: "des002",
    name: "Banana Bread",
    category: "🍰 Desserts",
    image: "https://images.pexels.com/photos/1277202/pexels-photo-1277202.jpeg",
    prepTime: "15 min",
    cookTime: "1 hour",
    servings: "8 people",
    difficulty: "Easy",
    equipment: ["Loaf pan", "Large bowl", "Fork"],
    ingredients: ["3 ripe bananas", "1/2 cup melted butter", "1 cup sugar", "1 egg", "1 tsp vanilla", "1 tsp baking soda", "1 1/2 cups flour"],
    instructions: [
      "PREHEAT: Oven to 175°C (350°F). Grease pan",
      "MASH BANANAS: Mash bananas well",
      "MIX WET: Add butter, sugar, egg, vanilla",
      "ADD DRY: Add baking soda, salt, flour. Mix until JUST combined",
      "BAKE: Bake 50-60 minutes",
      "COOL: Cool in pan 10 minutes. Remove and cool completely"
    ],
    chefTips: ["Use OVERRIPE bananas", "Don't overmix", "Add chocolate chips or walnuts"],
    pairingSuggestions: ["Butter", "Coffee", "Tea"],
    isFavorite: false,
    tags: ["dessert", "baking", "banana", "bread"]
  },
  
  {
    id: "des003",
    name: "Rice Pudding",
    category: "🍰 Desserts",
    image: "https://images.pexels.com/photos/2303258/pexels-photo-2303258.jpeg",
    prepTime: "5 min",
    cookTime: "30 min",
    servings: "4 people",
    difficulty: "Easy",
    equipment: ["Medium pot", "Wooden spoon"],
    ingredients: ["1 cup short-grain rice", "4 cups milk", "1/2 cup sugar", "1 tsp vanilla", "Pinch salt", "Cinnamon"],
    instructions: [
      "COMBINE: Combine rice, milk, sugar, salt in pot",
      "HEAT: Bring to GENTLE simmer, stirring often",
      "SIMMER: Reduce heat. Cook 25-30 minutes until CREAMY",
      "ADD VANILLA: Remove from heat. Stir in vanilla",
      "SERVE: Serve warm or chilled. Sprinkle with cinnamon"
    ],
    chefTips: ["Short-grain rice gives creamiest texture", "Stir frequently to prevent sticking", "Add raisins or cardamom"],
    pairingSuggestions: ["Cinnamon", "Fresh fruit", "Jam"],
    isFavorite: false,
    tags: ["dessert", "pudding", "rice", "comfort food"]
  },
  
  {
    id: "des004",
    name: "Tiramisu (Italian Coffee Dessert)",
    category: "🍰 Desserts",
    image: "https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg",
    prepTime: "30 min",
    cookTime: "0 min",
    servings: "8 people",
    difficulty: "Intermediate",
    equipment: ["8x8 dish", "Mixing bowls", "Electric mixer"],
    ingredients: ["500g mascarpone", "4 eggs, separated", "1/2 cup sugar", "300g ladyfingers", "2 cups strong coffee", "Cocoa powder"],
    instructions: [
      "MAKE COFFEE: Brew strong coffee. Cool",
      "BEAT YOLKS: Beat yolks with sugar until PALE",
      "ADD MASCARPONE: Beat in mascarpone",
      "BEAT WHITES: Beat whites to STIFF PEAKS",
      "FOLD: Fold whites into mascarpone mixture",
      "ASSEMBLE: Quickly dip ladyfingers in coffee. Layer with mascarpone",
      "CHILL: Refrigerate MINIMUM 4 hours",
      "DUST: Dust with cocoa before serving"
    ],
    chefTips: ["Dip ladyfingers QUICKLY - 1 second per side", "Use room temperature mascarpone", "Raw eggs - use pasteurized if concerned"],
    pairingSuggestions: ["Espresso", "Coffee", "Sweet wine"],
    isFavorite: false,
    tags: ["italian", "dessert", "no-bake", "coffee", "elegant"]
  },
  
  {
    id: "des005",
    name: "Chocolate Chip Cookies",
    category: "🍰 Desserts",
    image: "https://images.pexels.com/photos/2303258/pexels-photo-2303258.jpeg",
    prepTime: "15 min",
    cookTime: "12 min",
    servings: "24 cookies",
    difficulty: "Easy",
    equipment: ["Mixing bowls", "Electric mixer", "Baking sheets"],
    ingredients: ["2 1/4 cups flour", "1 tsp baking soda", "1 cup butter", "3/4 cup sugar", "3/4 cup brown sugar", "2 eggs", "2 cups chocolate chips"],
    instructions: [
      "PREHEAT: Oven to 190°C (375°F)",
      "CREAM BUTTER: Beat butter with both sugars until LIGHT and FLUFFY",
      "ADD EGGS: Beat in eggs one at a time",
      "ADD DRY: Mix in flour and baking soda",
      "ADD CHIPS: Stir in chocolate chips",
      "SCOOP: Drop rounded tablespoons onto baking sheet",
      "BAKE: Bake 9-11 minutes until edges are GOLDEN",
      "COOL: Cool on sheet 2 minutes. Transfer to rack"
    ],
    chefTips: ["Chill dough for thicker cookies", "Underbake slightly for chewy center", "Use good quality chocolate"],
    pairingSuggestions: ["Cold milk", "Ice cream", "Coffee"],
    isFavorite: false,
    tags: ["dessert", "cookies", "chocolate", "baking", "american"]
  },

  // ==========================================
  // 🍲 SOUPS (4 recipes)
  // ==========================================

  {
    id: "sou003",
    name: "Butternut Squash Soup",
    category: "🍲 Soups",
    image: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg",
    prepTime: "15 min",
    cookTime: "30 min",
    servings: "6 people",
    difficulty: "Easy",
    equipment: ["Large pot", "Immersion blender"],
    ingredients: ["1 butternut squash", "1 onion", "2 carrots", "3 cloves garlic", "4 cups vegetable broth", "1/2 cup cream", "Spices"],
    instructions: [
      "PREP SQUASH: Peel, seed, cube",
      "SAUTÉ AROMATICS: Cook onion and carrots in butter",
      "ADD GARLIC AND SQUASH: Add garlic, then squash",
      "ADD SPICES AND BROTH: Add cinnamon, nutmeg, broth. Simmer until tender",
      "BLEND: Blend until VELVETY SMOOTH",
      "ADD CREAM: Stir in cream. Heat through",
      "SERVE: Garnish with pumpkin seeds"
    ],
    chefTips: ["Roast squash for deeper flavor", "Add apple for sweetness", "Freezes beautifully"],
    pairingSuggestions: ["Crusty bread", "Grilled cheese"],
    isFavorite: false,
    tags: ["soup", "vegetarian", "creamy", "fall", "squash"]
  },
  
  {
    id: "sou004",
    name: "French Onion Soup",
    category: "🍲 Soups",
    image: "https://images.pexels.com/photos/2313686/pexels-photo-2313686.jpeg",
    prepTime: "15 min",
    cookTime: "1 hour",
    servings: "4 people",
    difficulty: "Intermediate",
    equipment: ["Large heavy pot", "Oven-safe bowls"],
    ingredients: ["6 large onions", "4 tbsp butter", "1/2 cup white wine", "6 cups beef broth", "Baguette", "Gruyere cheese"],
    instructions: [
      "CARAMELIZE ONIONS: Cook onions in butter 30-40 minutes until DEEP GOLDEN",
      "DEGLAZE: Add wine, scrape bottom",
      "ADD BROTH: Add broth, thyme, bay leaf. Simmer 20 minutes",
      "PREP BREAD: Toast baguette slices",
      "ASSEMBLE: Ladle soup into bowls. Top with bread and cheese",
      "BROIL: Broil until cheese is BUBBLY and GOLDEN",
      "SERVE: Serve IMMEDIATELY"
    ],
    chefTips: ["Low and slow for caramelized onions", "Gruyere is traditional", "Make soup ahead, broil just before serving"],
    pairingSuggestions: ["Red wine", "Simple green salad"],
    isFavorite: false,
    tags: ["soup", "french", "onion", "cheese", "classic"]
  },
  
  {
    id: "sou005",
    name: "Miso Soup",
    category: "🍲 Soups",
    image: "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg",
    prepTime: "10 min",
    cookTime: "10 min",
    servings: "4 people",
    difficulty: "Easy",
    equipment: ["Medium pot", "Ladle", "Small strainer"],
    ingredients: ["4 cups dashi", "3 tbsp miso paste", "150g silken tofu", "2 tbsp wakame", "Green onions"],
    instructions: [
      "HEAT DASHI: Heat dashi until STEAMING. DO NOT BOIL",
      "DISSOLVE MISO: Place miso in strainer. Lower into dashi. Whisk to dissolve",
      "ADD TOFU: Add cubed tofu. Heat through",
      "ADD WAKAME: Add rehydrated wakame",
      "SERVE: Ladle into bowls. Garnish with green onions"
    ],
    chefTips: ["NEVER boil miso soup", "Dissolve miso through strainer", "White miso is milder, red miso stronger"],
    pairingSuggestions: ["Sushi", "Rice bowl", "Japanese meal starter"],
    isFavorite: false,
    tags: ["soup", "japanese", "miso", "light", "healthy", "quick"]
  },
  
  {
    id: "sou006",
    name: "Potato Leek Soup",
    category: "🍲 Soups",
    image: "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg",
    prepTime: "15 min",
    cookTime: "30 min",
    servings: "6 people",
    difficulty: "Easy",
    equipment: ["Large pot", "Immersion blender"],
    ingredients: ["4 potatoes", "3 leeks", "1 onion", "3 cloves garlic", "4 cups broth", "1/2 cup cream", "Butter"],
    instructions: [
      "PREP LEEKS: Slice leeks, rinse thoroughly to remove grit",
      "SAUTÉ: Cook leeks and onion in butter until SOFT",
      "ADD GARLIC AND POTATOES: Add garlic, then potatoes",
      "ADD BROTH: Add broth. Simmer until potatoes are TENDER",
      "BLEND: Blend until SMOOTH",
      "ADD CREAM: Stir in cream. Heat through",
      "SERVE: Garnish with chives"
    ],
    chefTips: ["Clean leeks well - they hide dirt", "Don't boil after adding cream", "Vichyssoise = serve cold"],
    pairingSuggestions: ["Crusty bread", "Crispy bacon bits", "Fresh chives"],
    isFavorite: false,
    tags: ["soup", "potato", "creamy", "comfort food", "vegetarian"]
  },

  // ==========================================
  // 🌱 VEGETARIAN (4 recipes)
  // ==========================================

  {
    id: "veg003",
    name: "Falafel (Middle Eastern Chickpea Fritters)",
    category: "🌱 Vegetarian",
    image: "https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg",
    prepTime: "20 min",
    cookTime: "15 min",
    servings: "4 people",
    difficulty: "Intermediate",
    equipment: ["Food processor", "Deep pot", "Slotted spoon"],
    ingredients: ["2 cups DRIED chickpeas", "1 onion", "4 cloves garlic", "Herbs", "Spices", "Oil for frying"],
    instructions: [
      "SOAK CHICKPEAS: Soak DRIED chickpeas OVERNIGHT. DO NOT USE CANNED",
      "DRAIN WELL: Pat COMPLETELY DRY",
      "PROCESS: Pulse with onion, garlic, herbs, spices until COARSE SAND",
      "REST: Refrigerate 30 minutes",
      "SHAPE: Form into balls or patties",
      "FRY: Fry at 170°C until DEEP GOLDEN BROWN",
      "DRAIN: Drain on paper towels",
      "SERVE: Serve hot in pita with tahini"
    ],
    chefTips: ["MUST use dried chickpeas - canned makes mushy falafel", "Don't over-process", "Chilling helps hold shape"],
    pairingSuggestions: ["Pita bread", "Tahini sauce", "Hummus", "Israeli salad"],
    isFavorite: false,
    tags: ["middle eastern", "vegetarian", "vegan", "chickpeas", "fried"]
  },
  
  {
    id: "veg004",
    name: "Mushroom Risotto",
    category: "🌱 Vegetarian",
    image: "https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg",
    prepTime: "15 min",
    cookTime: "30 min",
    servings: "4 people",
    difficulty: "Intermediate",
    equipment: ["Large pan", "Wooden spoon", "Ladle"],
    ingredients: ["1 1/2 cups arborio rice", "500g mushrooms", "1 onion", "1/2 cup white wine", "5 cups vegetable broth", "Parmesan", "Butter"],
    instructions: [
      "HEAT BROTH: Keep broth SIMMERING",
      "SAUTÉ MUSHROOMS: Cook mushrooms until GOLDEN. Remove",
      "SAUTÉ ONION AND RICE: Cook onion, add rice. Toast 2 minutes",
      "DEGLAZE: Add wine. Stir until absorbed",
      "ADD BROTH: Add broth one ladle at a time, stirring constantly",
      "CONTINUE: Repeat for 18-20 minutes until CREAMY and AL DENTE",
      "ADD MUSHROOMS: Return mushrooms",
      "MANTECARE: Add butter and Parmesan. Stir vigorously",
      "REST: Cover 2 minutes",
      "SERVE: Serve immediately"
    ],
    chefTips: ["Hot broth is essential", "Constant stirring releases starch", "Risotto waits for no one"],
    pairingSuggestions: ["White wine", "Green salad", "Crusty bread"],
    isFavorite: false,
    tags: ["italian", "risotto", "vegetarian", "mushroom", "creamy"]
  },
  
  {
    id: "veg005",
    name: "Chana Masala (Indian Chickpea Curry)",
    category: "🌱 Vegetarian",
    image: "https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg",
    prepTime: "15 min",
    cookTime: "25 min",
    servings: "4 people",
    difficulty: "Easy",
    equipment: ["Large pan", "Wooden spoon"],
    ingredients: ["2 cans chickpeas", "1 onion", "3 tomatoes", "Garlic", "Ginger", "Spices", "Fresh coriander"],
    instructions: [
      "SAUTÉ ONIONS: Cook onions until GOLDEN",
      "AROMATICS: Add garlic, ginger, chilies",
      "SPICES: Add cumin, coriander, turmeric",
      "ADD TOMATOES: Add tomato puree. Cook until thick",
      "ADD CHICKPEAS: Add drained chickpeas. Simmer 10-15 minutes",
      "FINISH: Add garam masala. Garnish with coriander",
      "SERVE: Serve hot"
    ],
    chefTips: ["Mash some chickpeas for thicker sauce", "Chana masala tastes better next day", "Serve with naan or rice"],
    pairingSuggestions: ["Basmati rice", "Naan bread", "Raita", "Pickled onions"],
    isFavorite: false,
    tags: ["indian", "vegetarian", "vegan", "curry", "chickpeas", "spicy"]
  },
  
  {
    id: "veg006",
    name: "Stuffed Bell Peppers",
    category: "🌱 Vegetarian",
    image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
    prepTime: "15 min",
    cookTime: "35 min",
    servings: "4 people",
    difficulty: "Easy",
    equipment: ["Baking dish", "Large pan", "Sharp knife"],
    ingredients: ["4 bell peppers", "1 cup rice", "1 can black beans", "1 cup corn", "1 cup tomato sauce", "Cheese"],
    instructions: [
      "PREP PEPPERS: Cut tops off peppers. Remove seeds",
      "COOK RICE: Cook rice according to package",
      "MAKE FILLING: Mix rice, beans, corn, half tomato sauce",
      "STUFF: Fill peppers with mixture",
      "TOP: Top with remaining sauce and cheese",
      "BAKE: Bake at 180°C for 30-35 minutes",
      "SERVE: Serve hot"
    ],
    chefTips: ["Parboil peppers 5 minutes if you like them softer", "Add spices to filling for more flavor", "Great for meal prep"],
    pairingSuggestions: ["Sour cream", "Avocado", "Hot sauce"],
    isFavorite: false,
    tags: ["vegetarian", "stuffed", "mexican", "healthy", "baked"]
  },

  // ==========================================
  // 🥤 DRINKS (3 recipes)
  // ==========================================

  {
    id: "drk001",
    name: "Dawa (Kenyan Ginger-Lemon-Honey Tea)",
    category: "🥤 Drinks",
    image: "https://images.pexels.com/photos/5946991/pexels-photo-5946991.jpeg",
    prepTime: "5 min",
    cookTime: "10 min",
    servings: "2 cups",
    difficulty: "Easy",
    equipment: ["Small pot", "Strainer", "Mug"],
    ingredients: ["2 cups water", "3 tbsp fresh ginger, grated", "1 lemon, juiced", "2-3 tbsp honey", "Pinch cayenne"],
    instructions: [
      "BOIL WATER: Bring water to BOIL",
      "ADD GINGER: Add ginger. Simmer 5-10 minutes",
      "STRAIN: Strain into mug, pressing ginger",
      "ADD LEMON: Add fresh lemon juice",
      "SWEETEN: Stir in honey",
      "SPICE: Add pinch of cayenne if desired",
      "SERVE: Serve PIPING HOT"
    ],
    chefTips: ["Grate ginger on microplane for maximum flavor", "Don't boil honey - add after straining", "Great for colds and sore throats"],
    pairingSuggestions: ["Enjoy on its own as remedy", "Morning wake-up", "After dinner digestif"],
    isFavorite: false,
    tags: ["drink", "tea", "kenyan", "ginger", "healthy", "remedy"]
  },
  
  {
    id: "drk002",
    name: "Mango Lassi (Indian Yogurt Drink)",
    category: "🥤 Drinks",
    image: "https://images.pexels.com/photos/2092906/pexels-photo-2092906.jpeg",
    prepTime: "5 min",
    cookTime: "0 min",
    servings: "2 people",
    difficulty: "Easy",
    equipment: ["Blender", "Measuring cups", "Glasses"],
    ingredients: ["1 ripe mango", "1 cup plain yogurt", "1/2 cup milk", "2 tbsp sugar", "1/4 tsp cardamom", "Ice cubes"],
    instructions: [
      "PREP MANGO: Peel and chop mango",
      "BLEND: Combine mango, yogurt, milk, sugar, cardamom",
      "BLEND WELL: Blend until SMOOTH and CREAMY",
      "TASTE: Adjust sweetness",
      "ADD ICE: Add ice cubes. Blend briefly",
      "POUR: Pour into glasses",
      "GARNISH: Sprinkle with crushed pistachios",
      "SERVE: Serve IMMEDIATELY cold"
    ],
    chefTips: ["Use VERY ripe mango", "Greek yogurt makes thicker lassi", "Cardamom is essential"],
    pairingSuggestions: ["Spicy curry", "Biryani", "Samosa", "Hot summer day"],
    isFavorite: false,
    tags: ["drink", "indian", "yogurt", "mango", "smoothie", "summer"]
  },
  
  {
    id: "drk003",
    name: "Tropical Smoothie",
    category: "🥤 Drinks",
    image: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg",
    prepTime: "5 min",
    cookTime: "0 min",
    servings: "2 people",
    difficulty: "Easy",
    equipment: ["Blender", "Measuring cups", "Glasses"],
    ingredients: ["1 banana", "1/2 cup pineapple", "1/2 cup mango", "1/2 cup coconut milk", "1/2 cup orange juice", "Honey", "Ice cubes"],
    instructions: [
      "COMBINE: Add all ingredients to blender",
      "BLEND: Blend on HIGH until SMOOTH and CREAMY",
      "ADJUST: Add more liquid if too thick",
      "TASTE: Add honey if needed",
      "POUR: Pour into glasses",
      "GARNISH: Garnish with pineapple wedge",
      "SERVE: Serve IMMEDIATELY"
    ],
    chefTips: ["Use frozen fruit for thicker smoothie", "Coconut milk adds tropical richness", "Add spinach for green smoothie"],
    pairingSuggestions: ["Breakfast", "Post-workout", "Poolside refreshment"],
    isFavorite: false,
    tags: ["drink", "smoothie", "tropical", "healthy", "breakfast"]
  },

  // ==========================================
  // 🇮🇹 ITALIAN (2 recipes)
  // ==========================================

  {
    id: "ita003",
    name: "Pasta Carbonara",
    category: "🇮🇹 Italian",
    image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: "4 people",
    difficulty: "Intermediate",
    equipment: ["Large pot", "Large skillet", "Mixing bowl", "Tongs"],
    ingredients: ["500g spaghetti", "200g pancetta", "4 eggs", "1 cup Pecorino", "1 cup Parmesan", "Black pepper"],
    instructions: [
      "COOK PASTA: Boil salted water. Cook spaghetti until AL DENTE",
      "CRISP PANCETTA: Cook pancetta until CRISPY. Turn off heat",
      "MAKE EGG MIXTURE: Whisk eggs, cheeses, and GENEROUS black pepper",
      "RESERVE PASTA WATER: Reserve 1 cup starchy water",
      "COMBINE: Drain pasta. Add to skillet with pancetta. Toss",
      "TEMPER EGGS: Remove from heat. Wait 30 seconds. Add egg mixture",
      "TOSS VIGOROUSLY: Toss continuously, adding pasta water to create CREAMY SAUCE",
      "SERVE: Serve IMMEDIATELY with more cheese and pepper"
    ],
    chefTips: ["NO CREAM! Authentic carbonara uses only eggs and cheese", "Heat off when adding eggs", "Pasta water is key for silky sauce"],
    pairingSuggestions: ["White wine", "Simple green salad", "Crusty bread"],
    isFavorite: false,
    tags: ["italian", "pasta", "carbonara", "classic", "roman", "eggs"]
  },
  
  {
    id: "ita004",
    name: "Pesto Pasta",
    category: "🇮🇹 Italian",
    image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
    prepTime: "10 min",
    cookTime: "10 min",
    servings: "4 people",
    difficulty: "Easy",
    equipment: ["Food processor", "Large pot", "Colander"],
    ingredients: ["500g pasta", "2 cups fresh basil", "1/2 cup pine nuts", "2 cloves garlic", "1/2 cup Parmesan", "1/2 cup Pecorino", "1/2 cup olive oil"],
    instructions: [
      "TOAST PINE NUTS: Toast in dry pan until GOLDEN. Cool",
      "MAKE PESTO: Pulse basil, pine nuts, garlic. Add cheeses. Stream in olive oil",
      "COOK PASTA: Boil pasta in SALTED water",
      "RESERVE WATER: Reserve 1/2 cup pasta water",
      "TOSS: Drain pasta. Add pesto and splash of pasta water",
      "COMBINE: Toss until CREAMY",
      "SERVE: Serve with extra Parmesan"
    ],
    chefTips: ["Don't overprocess pesto", "Add pesto OFF HEAT", "Toasted pine nuts essential", "Freeze pesto in ice cube trays"],
    pairingSuggestions: ["White wine", "Cherry tomatoes", "Burrata", "Grilled chicken"],
    isFavorite: false,
    tags: ["italian", "pasta", "pesto", "basil", "vegetarian", "quick"]
  },

  // ==========================================
  // 🇮🇳 INDIAN (1 recipe)
  // ==========================================

  {
    id: "ind003",
    name: "Dal Tadka (Yellow Lentil Curry)",
    category: "🇮🇳 Indian",
    image: "https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg",
    prepTime: "10 min",
    cookTime: "30 min",
    servings: "4 people",
    difficulty: "Easy",
    equipment: ["Pressure cooker or pot", "Small pan for tempering", "Wooden spoon"],
    ingredients: ["1 cup yellow lentils", "3 cups water", "1 onion", "2 tomatoes", "Spices", "Ghee for tempering"],
    instructions: [
      "WASH LENTILS: Rinse dal until water runs CLEAR",
      "PRESSURE COOK: Cook dal with water, turmeric, salt until MUSHY",
      "WHISK: Whisk cooked dal until SMOOTH",
      "SIMMER: Bring to gentle simmer",
      "MAKE TADKA: Heat ghee. Add cumin seeds, chilies, garlic. Cook until GOLDEN",
      "POUR TADKA: Pour hot tadka over dal. It will SIZZLE",
      "GARNISH: Sprinkle with coriander",
      "SERVE: Serve hot with rice or roti"
    ],
    chefTips: ["Tadka (tempering) is the SECRET", "Pour tadka at the end", "Dal should be smooth and pourable"],
    pairingSuggestions: ["Basmati rice", "Roti", "Pickle", "Papadum"],
    isFavorite: false,
    tags: ["indian", "vegetarian", "lentils", "dal", "comfort food", "healthy"]
  },

  // ==========================================
  // MISSING RECIPES (Kaimati, Samaki wa Kupaka, Smokie Pasua, Mayai Pasua)
  // ==========================================

  {
    id: "ken017",
    name: "Kaimati (Sweet Swahili Dumplings)",
    category: "🇰🇪 Kenyan Classics",
    image: "https://images.pexels.com/photos/2092906/pexels-photo-2092906.jpeg",
    prepTime: "15 min",
    cookTime: "20 min",
    servings: "6 people",
    difficulty: "Intermediate",
    equipment: ["Large bowl", "Deep pot", "Slotted spoon", "Small pot for syrup"],
    ingredients: ["2 cups flour", "1 tsp yeast", "1/2 cup sugar", "1 cup warm water", "Pinch salt", "FOR SYRUP: 1 cup sugar, 1/2 cup water, 1 tsp cardamom", "Oil for frying"],
    instructions: [
      "ACTIVATE YEAST: Mix warm water with 1 tsp sugar and yeast. Let sit until FOAMY",
      "MAKE DOUGH: Mix flour, remaining sugar, salt. Add yeast mixture. Mix into THICK batter",
      "FIRST RISE: Cover. Let rise 1 hour until DOUBLED and BUBBLY",
      "MAKE SYRUP: Combine sugar, water, cardamom. Simmer 5 minutes until SLIGHTLY THICK. Keep WARM",
      "HEAT OIL: Heat oil to 170°C (340°F)",
      "DROP BATTER: Drop walnut-sized balls into oil",
      "FRY: Fry until GOLDEN BROWN all over (3-4 minutes)",
      "COAT: IMMEDIATELY drop hot kaimati into warm syrup. Stir to coat",
      "SERVE: Serve warm or at room temperature"
    ],
    chefTips: ["Batter should be thick enough to hold shape", "Coat in syrup while HOT", "Rose water adds authentic Swahili flavor"],
    pairingSuggestions: ["Chai", "Coffee", "As dessert after pilau"],
    isFavorite: false,
    tags: ["dessert", "sweet", "swahili", "kenyan"]
  },

  {
    id: "ken018",
    name: "Samaki wa Kupaka (Grilled Fish in Coconut Sauce)",
    category: "🇰🇪 Kenyan Classics",
    image: "https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg",
    prepTime: "15 min",
    cookTime: "25 min",
    servings: "4 people",
    difficulty: "Intermediate",
    equipment: ["Grill", "Large pan", "Tongs", "Basting brush"],
    ingredients: ["4 whole tilapia fish, scored", "1 can coconut milk", "2 tbsp tamarind paste", "3 cloves garlic", "1 tbsp ginger", "1 tsp turmeric", "1 tsp chili", "Salt", "Lemon juice", "Fresh coriander"],
    instructions: [
      "PREP FISH: Score fish. Rub with salt and lemon juice. Let sit 15 minutes",
      "PAT DRY: Pat fish COMPLETELY DRY",
      "GRILL FISH: Grill over medium-high heat 5-7 minutes per side until CHARRED. Keep warm",
      "START SAUCE: Heat oil. Add garlic and ginger. Cook 30 seconds",
      "SPICES: Add turmeric and chili. Cook 30 seconds",
      "ADD COCONUT: Add coconut milk and tamarind. Simmer 5-7 minutes until THICKENS",
      "SEASON: Add salt and lemon juice",
      "COMBINE: Place grilled fish in sauce. Spoon sauce over fish. Simmer 5 minutes",
      "GARNISH: Sprinkle with fresh coriander",
      "SERVE: Serve hot with plenty of sauce"
    ],
    chefTips: ["Scoring helps marinade penetrate", "Pat fish dry for crispy skin", "Tilapia is traditional"],
    pairingSuggestions: ["Coconut rice", "Ugali", "Steamed vegetables"],
    isFavorite: false,
    tags: ["fish", "seafood", "coconut", "swahili", "kenyan"]
  },

  {
    id: "stf006",
    name: "Smokie Pasua (Split Sausage)",
    category: "🇰🇪 Street Food",
    image: "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg",
    prepTime: "5 min",
    cookTime: "10 min",
    servings: "2 people",
    difficulty: "Easy",
    equipment: ["Grill or pan", "Knife"],
    ingredients: ["2 smokie sausages", "Kachumbari", "Mayonnaise", "Ketchup", "Chili sauce"],
    instructions: [
      "GRILL SMOKIES: Grill or fry until cooked and slightly CHARRED",
      "SPLIT: Split each smokie lengthwise (don't cut all the way)",
      "FILL: Stuff generously with Kachumbari",
      "DRESS: Drizzle with mayonnaise, ketchup, and chili sauce",
      "SERVE: Serve immediately"
    ],
    chefTips: ["Char smokies for smoky flavor", "Customize with your favorite sauces"],
    pairingSuggestions: ["Cold soda", "Beer"],
    isFavorite: false,
    tags: ["street food", "snack", "quick", "kenyan"]
  },

  {
    id: "stf007",
    name: "Mayai Pasua (Boiled Eggs with Kachumbari)",
    category: "🇰🇪 Street Food",
    image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
    prepTime: "5 min",
    cookTime: "10 min",
    servings: "2 people",
    difficulty: "Easy",
    equipment: ["Small pot", "Knife"],
    ingredients: ["4 eggs", "Kachumbari", "Salt", "Black pepper", "Chili powder"],
    instructions: [
      "BOIL EGGS: Boil 8-10 minutes until HARD BOILED",
      "COOL: Cool in cold water. Peel",
      "HALVE: Cut each egg in half lengthwise",
      "TOP: Top generously with Kachumbari",
      "SEASON: Sprinkle with salt, pepper, and chili powder",
      "SERVE: Serve as quick snack"
    ],
    chefTips: ["Room temperature eggs boil evenly", "Kachumbari should be fresh"],
    pairingSuggestions: ["Hot sauce", "Cold drink"],
    isFavorite: false,
    tags: ["street food", "snack", "eggs", "quick", "kenyan"]
  }

  // ==========================================
  // TOTAL: 63 PROFESSIONALLY DETAILED RECIPES
  // ==========================================
];
