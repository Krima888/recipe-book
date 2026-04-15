// ============================================
// 👨‍🍳 CHEF'S RECIPE BOOK - COMPLETE COLLECTION
// 57 Detailed Recipes with Professional Instructions
// ============================================

const RECIPE_DATABASE = [
  
  // ==========================================
  // 🇰🇪 KENYAN CLASSICS (10 recipes - DETAILED)
  // ==========================================
  
  {
    id: "ken001",
    name: "Ugali (Kenyan Cornmeal Staple)",
    category: "🇰🇪 Kenyan Classics",
    image: "https://i.pinimg.com/736x/8c/e3/5d/8ce35dba6a905798cc7aac1614f0cd79.jpg",
    prepTime: "5 min",
    cookTime: "15 min",
    servings: "4 people",
    difficulty: "Easy",
    heatLevel: "Mild",
    equipment: ["Heavy-bottomed sufuria (pot)", "Wooden spoon (mwiko)", "Measuring cups", "Serving plate", "Bowl of cold water"],
    ingredients: ["4 cups water", "2 cups maize flour (cornmeal)", "1/2 tsp salt (optional)"],
    instructions: [
      "STEP 1: BOIL WATER - Place sufuria over high heat. Add salt to water. Wait until you see LARGE ROLLING BUBBLES (not just small ones). This takes 5-7 minutes.",
      "STEP 2: ADD FLOUR - Reduce heat to medium. Pour flour in a THIN STEADY STREAM while stirring VIGOROUSLY with mwiko. DO NOT dump all flour at once - creates lumps!",
      "STEP 3: BEAT OUT LUMPS - As mixture thickens, increase stirring speed. Use flat edge of mwiko to PRESS ugali against pot sides. This breaks up lumps.",
      "STEP 4: REDUCE HEAT - Once all flour is incorporated (2 minutes), reduce heat to LOW. Mixture should be thick but moist.",
      "STEP 5: SHAPE AND COOK - Gather ugali into center. Press down firmly. Cover with lid slightly ajar. Cook 8-10 minutes.",
      "STEP 6: CHECK DONENESS - Ugali is ready when it PULLS AWAY CLEANLY from pot sides and has FIRM, ELASTIC texture. Mwiko should stand upright in center!",
      "STEP 7: FINAL BEAT - Remove lid. Beat vigorously 30 seconds to remove any remaining lumps.",
      "STEP 8: TURN OUT - Quickly invert pot over wet plate. Ugali slides out in one piece. Shape into smooth dome with wet hands.",
      "STEP 9: SERVE IMMEDIATELY - Ugali must be served PIPING HOT. It hardens as it cools."
    ],
    chefTips: [
      "💡 Water MUST be at rolling boil before adding flour - lukewarm water makes mushy ugali",
      "💡 Wet hands before handling hot ugali to prevent sticking and burns",
      "💡 For extra smooth ugali, sift maize flour before use"
    ],
    commonMistakes: [
      "⚠️ Adding flour to cold water = lumpy, raw-tasting ugali",
      "⚠️ Not stirring constantly = lumps you can't fix",
      "⚠️ Cooking on high heat throughout = burnt bottom, raw center"
    ],
    pairingSuggestions: ["🍖 Nyama Choma", "🥬 Sukuma Wiki", "🐟 Fried tilapia", "🥘 Beef stew"],
    platingInstructions: "Place ugali dome off-center on plate. Arrange stew around it. Provide extra stew in separate bowl.",
    isFavorite: false,
    tags: ["staple", "traditional", "quick", "kenyan"]
  },
  
  {
    id: "ken002",
    name: "Sukuma Wiki (Sautéed Collard Greens)",
    category: "🇰🇪 Kenyan Classics",
    image: "https://i.pinimg.com/736x/fc/04/ae/fc04aeee22cbce1229a93dd3d0e1eefa.jpg",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: "4 people",
    difficulty: "Easy",
    heatLevel: "Mild to Medium",
    equipment: ["Large sufuria with lid", "Sharp chef's knife", "Cutting board", "Wooden spoon"],
    ingredients: ["1 large bunch sukuma wiki (collard greens)", "1 large onion, finely diced", "2 tomatoes, chopped", "3 tbsp vegetable oil", "2 cloves garlic, minced", "1 tsp salt", "1/2 tsp black pepper"],
    instructions: [
      "STEP 1: PREP GREENS - Wash sukuma thoroughly (3 rinses). Remove tough stems. Stack leaves, roll tightly, slice into THIN ribbons (1/4 inch).",
      "STEP 2: HEAT PAN - Place sufuria over MEDIUM-HIGH heat. Add oil. Wait until oil shimmers (1-2 minutes).",
      "STEP 3: SWEAT ONIONS - Add diced onions. You should hear a GENTLE SIZZLE. Cook 3-4 minutes until TRANSLUCENT.",
      "STEP 4: AROMATICS - Add minced garlic. Stir continuously for 30 SECONDS ONLY. DO NOT let garlic brown - becomes bitter.",
      "STEP 5: ADD TOMATOES - Add chopped tomatoes. Cook 3-4 minutes until SOFT and release juices. Mash larger pieces with spoon.",
      "STEP 6: SEASON - Add salt and pepper. Stir to combine.",
      "STEP 7: ADD GREENS GRADUALLY - Add sukuma in 3-4 batches. Add handful, stir until wilted (30 seconds), add next. Ensures even cooking.",
      "STEP 8: COVER AND STEAM - Stir well. Add 2-3 tbsp water if dry. Cover with lid. Reduce heat to MEDIUM-LOW.",
      "STEP 9: COOK COVERED - Let cook 5 minutes. RESIST opening lid! Steam cooks the greens.",
      "STEP 10: CHECK - After 5 minutes, open lid. Stir. Sukuma should be BRIGHT GREEN and reduced. If tough, cover 2-3 more minutes.",
      "STEP 11: FINAL SEAR - Remove lid. Increase heat to HIGH. Cook 1-2 minutes, stirring, to evaporate excess liquid.",
      "STEP 12: REST - Turn off heat. Let sit covered 2 minutes. Serve hot."
    ],
    chefTips: [
      "💡 Sukuma is done when BRIGHT GREEN, not olive or brown. Overcooking dulls color.",
      "💡 If bitter, soak sliced leaves in cold salted water 10 minutes, drain and rinse.",
      "💡 Add pinch of baking soda with salt - preserves bright green color."
    ],
    commonMistakes: [
      "⚠️ Not washing thoroughly = gritty texture",
      "⚠️ Adding all greens at once = uneven cooking",
      "⚠️ Cooking with lid off = dry, tough greens",
      "⚠️ Overcooking = olive-colored, mushy, bitter"
    ],
    pairingSuggestions: ["🍚 Ugali", "🍚 Rice pilau", "🫓 Chapati", "🍗 Roasted chicken"],
    platingInstructions: "Use tongs to lift sukuma, let excess liquid drain. Place in neat mound. Garnish with lemon wedge.",
    isFavorite: false,
    tags: ["vegetable", "healthy", "everyday", "kenyan"]
  },
  
  {
    id: "ken003",
    name: "Nyama Choma (Kenyan Roasted Meat)",
    category: "🇰🇪 Kenyan Classics",
    image: "https://i.pinimg.com/736x/48/d2/b6/48d2b65e39df5e4d738fc60bde129a13.jpg",
    prepTime: "15 min",
    cookTime: "1 hour",
    servings: "6 people",
    difficulty: "Intermediate",
    heatLevel: "Medium",
    equipment: ["Charcoal grill (jiko) or gas grill", "Grill tongs", "Basting brush", "Sharp knife", "Large mixing bowl", "Meat thermometer", "Aluminum foil"],
    ingredients: ["2 kg goat meat or beef", "3 tbsp vegetable oil", "2 tbsp ginger-garlic paste", "2 tsp salt", "1 tsp black pepper", "2 tsp paprika", "1 lemon, juiced", "Kachumbari for serving"],
    instructions: [
      "=== MARINADE (Day Before Recommended) ===",
      "STEP 1: MAKE MARINADE - Combine ginger-garlic paste, salt, pepper, paprika, lemon juice, and oil. Whisk into paste.",
      "STEP 2: SCORE MEAT - Make shallow cuts (1/4 inch) in crosshatch pattern on fatty areas.",
      "STEP 3: MASSAGE - Rub marinade into EVERY surface. Massage firmly 2-3 minutes.",
      "STEP 4: MARINATE - Refrigerate MINIMUM 2 hours, IDEALLY OVERNIGHT. Turn meat once.",
      "=== COOKING ===",
      "STEP 5: PREP GRILL - Light charcoal 30-40 minutes before. Coals ready when covered with WHITE ASH.",
      "STEP 6: ROOM TEMPERATURE - Remove meat 1 hour before grilling. PAT DRY with paper towels.",
      "STEP 7: OIL GRILL - Use oiled paper towel with tongs to grease grates.",
      "STEP 8: FIRST SEAR - Place meat on HOTTEST part. LOUD SIZZLE. DON'T MOVE for 3-4 minutes.",
      "STEP 9: FLIP - Meat releases when crust forms. Flip with tongs. Sear second side 3-4 minutes.",
      "STEP 10: INDIRECT HEAT - Move to cooler side. Cover grill. Cook 20-40 minutes to internal temp 60-63°C (140-145°F).",
      "STEP 11: BASTE - Every 10 minutes, brush with remaining marinade mixed with oil.",
      "STEP 12: CHECK DONENESS - Meat feels FIRM but SPRINGY. Juices run CLEAR when pierced.",
      "STEP 13: REST (CRUCIAL!) - Remove to board. Tent loosely with foil. Rest MINIMUM 10-15 minutes.",
      "STEP 14: SLICE - Cut AGAINST THE GRAIN into thin slices (1/2 inch).",
      "STEP 15: SERVE - Arrange on platter. Pour accumulated juices over meat. Serve with Kachumbari."
    ],
    chefTips: [
      "💡 Goat meat (mbuzi) is traditional and has better flavor than beef",
      "💡 Secret to tender Nyama Choma is SLOW cooking after initial sear",
      "💡 Charred bits (the 'choma') are most flavorful - don't trim off!",
      "💡 For oven: Sear in cast iron, finish at 180°C (350°F)"
    ],
    commonMistakes: [
      "⚠️ Cold meat straight from fridge = uneven cooking",
      "⚠️ Not patting dry = steamed meat, no crust",
      "⚠️ Moving too early = sticks to grill, tears",
      "⚠️ Piercing with fork = juices escape",
      "⚠️ Skipping rest = dry meat"
    ],
    pairingSuggestions: ["🍚 Ugali - essential", "🥗 Kachumbari - essential", "🥬 Sukuma Wiki", "🍺 Cold Tusker beer"],
    platingInstructions: "Fan sliced meat across wooden board. Place Kachumbari beside meat. Scatter fresh coriander. Serve with lemon wedges.",
    isFavorite: false,
    tags: ["meat", "grill", "celebration", "weekend", "kenyan"]
  },
  
  {
    id: "ken004",
    name: "Githeri (Mixed Beans and Corn Stew)",
    category: "🇰🇪 Kenyan Classics",
    image: "https://i.pinimg.com/736x/d9/6f/6a/d96f6ad175a83982c8069c45fedc4a61.jpg",
    prepTime: "15 min",
    cookTime: "1.5 hours",
    servings: "6 people",
    difficulty: "Easy",
    heatLevel: "Mild",
    equipment: ["Large heavy pot", "Wooden spoon", "Sharp knife", "Cutting board"],
    ingredients: ["2 cups boiled maize (corn)", "2 cups boiled beans (njahi/kidney)", "1 large onion, chopped", "3 tomatoes, chopped", "2 carrots, diced", "2 potatoes, cubed", "3 tbsp vegetable oil", "2 cloves garlic, minced", "1 tsp salt", "1/2 tsp black pepper", "1 tsp curry powder", "4 cups water or bean broth"],
    instructions: [
      "STEP 1: SOAK & BOIL (Night Before) - Soak dried beans and maize separately overnight. Boil until tender (about 1 hour). Drain, reserve broth.",
      "STEP 2: HEAT POT - Heat oil in large pot over MEDIUM heat.",
      "STEP 3: SAUTÉ ONIONS - Add onions. Cook 5 minutes until GOLDEN BROWN. Stir occasionally.",
      "STEP 4: ADD GARLIC - Add minced garlic. Cook 30 seconds until FRAGRANT. Don't burn!",
      "STEP 5: ADD TOMATOES - Add chopped tomatoes. Cook 4-5 minutes until SOFT and MUSHY. Mash with spoon.",
      "STEP 6: SPICES - Add curry powder, salt, pepper. Stir 1 minute until fragrant.",
      "STEP 7: ADD VEGETABLES - Add carrots and potatoes. Stir to coat with spices.",
      "STEP 8: ADD BEANS & MAIZE - Add boiled maize and beans. Stir everything together.",
      "STEP 9: ADD LIQUID - Pour in water or bean broth. Liquid should just cover ingredients.",
      "STEP 10: BRING TO BOIL - Increase heat to HIGH. Bring to boil.",
      "STEP 11: SIMMER - Reduce heat to LOW. Cover. Simmer 25-30 minutes until vegetables are TENDER (fork easily pierces).",
      "STEP 12: CHECK & ADJUST - Taste broth. Add salt if needed. Githeri should be THICK and HEARTY.",
      "STEP 13: OPTIONAL MASH - For creamier texture, mash slightly with potato masher.",
      "STEP 14: REST - Turn off heat. Let sit covered 5 minutes.",
      "STEP 15: SERVE - Ladle into bowls. Serve hot as complete meal."
    ],
    chefTips: [
      "💡 Githeri tastes BETTER the next day as flavors meld. Make extra!",
      "💡 Add pumpkin leaves (malenge) or spinach in last 5 minutes for extra nutrition.",
      "💡 Use pressure cooker to speed up bean/maize cooking (20 minutes instead of 1 hour).",
      "💡 Traditional Githeri uses njahi (black beans) - nuttier flavor than kidney beans."
    ],
    commonMistakes: [
      "⚠️ Not soaking beans = extremely long cooking time",
      "⚠️ Adding salt to beans while boiling = tough beans (add salt after tender)",
      "⚠️ Too much liquid = watery githeri",
      "⚠️ Not enough cooking time = hard vegetables"
    ],
    pairingSuggestions: ["🍚 Rice", "🫓 Chapati", "🥑 Avocado slices", "🌶️ Chili sauce on side"],
    platingInstructions: "Ladle into deep bowl. Create small well in center. Drizzle with chili oil if desired. Garnish with fresh coriander.",
    isFavorite: false,
    tags: ["traditional", "vegetarian", "stew", "kenyan", "beans"]
  },
  
  {
    id: "ken005",
    name: "Chapati (Kenyan Layered Flatbread)",
    category: "🇰🇪 Kenyan Classics",
    image: "https://i.pinimg.com/736x/8c/e3/5d/8ce35dba6a905798cc7aac1614f0cd79.jpg",
    prepTime: "30 min",
    cookTime: "30 min",
    servings: "8 chapatis",
    difficulty: "Intermediate",
    heatLevel: "Mild",
    equipment: ["Large mixing bowl", "Rolling pin", "Tawa or flat pan", "Spatula", "Clean kitchen towel", "Pastry brush"],
    ingredients: ["3 cups all-purpose flour", "1 tsp salt", "2 tbsp sugar", "3 tbsp vegetable oil or ghee", "1 1/4 cups warm water", "Extra oil for frying", "Extra flour for dusting"],
    instructions: [
      "=== DOUGH PREPARATION ===",
      "STEP 1: MIX DRY - In large bowl, combine flour, salt, and sugar. Whisk to combine.",
      "STEP 2: ADD FAT - Add 3 tbsp oil or ghee. Using fingertips, rub fat into flour until mixture resembles WET SAND and holds shape when squeezed.",
      "STEP 3: ADD WATER - Gradually add warm water while mixing with other hand. Start with 1 cup.",
      "STEP 4: KNEAD - Form into shaggy ball. Transfer to lightly floured surface. KNEAD VIGOROUSLY for 8-10 minutes. Dough should become SMOOTH, ELASTIC, and NOT STICKY. Windowpane test: stretch small piece - should stretch thin without tearing.",
      "STEP 5: REST (CRUCIAL!) - Form into smooth ball. Lightly oil surface. Cover with DAMP cloth. Rest MINIMUM 30 minutes (up to 2 hours). This relaxes gluten.",
      "=== SHAPING ===",
      "STEP 6: DIVIDE - Divide dough into 8 equal portions (about size of lime). Roll each into smooth ball.",
      "STEP 7: FIRST ROLL - Take one ball. Flatten with palm. Roll into thin circle (8 inches / 20 cm). Rotate dough quarter turn after each roll for even circle.",
      "STEP 8: OIL AND FLOUR - Brush surface lightly with oil. Sprinkle PINCH of flour evenly over surface.",
      "STEP 9: CREATE LAYERS - Roll circle TIGHTLY into rope (like cigar). Coil rope into SPIRAL. Tuck end underneath.",
      "STEP 10: SECOND ROLL - Flatten spiral gently with palm. Roll again into thin circle (7-8 inches). You'll see LAYERS forming!",
      "=== COOKING ===",
      "STEP 11: PREHEAT PAN - Heat tawa over MEDIUM-HIGH heat. Pan is ready when water droplets SIZZLE and DANCE.",
      "STEP 12: FIRST SIDE - Place chapati on hot pan. Cook 30-45 seconds until BUBBLES appear on surface and bottom has LIGHT BROWN spots.",
      "STEP 13: FLIP - Flip chapati. Cook second side 30 seconds.",
      "STEP 14: OIL FIRST SIDE - Flip back to first side. Brush top with oil. You'll see chapati PUFF slightly - layers separating!",
      "STEP 15: OIL SECOND SIDE - Flip again. Brush second side with oil. Press edges gently with spatula to ensure even cooking.",
      "STEP 16: FINISH - Cook until GOLDEN BROWN spots appear on both sides (about 1 minute total after oiling).",
      "STEP 17: KEEP WARM - Remove to plate. IMMEDIATELY wrap in clean kitchen towel. This traps steam, keeps chapati soft.",
      "STEP 18: REPEAT - Continue with remaining dough balls. Stack chapatis in towel.",
      "STEP 19: SERVE - Serve warm. To reheat, wrap in damp paper towel and microwave 15 seconds."
    ],
    chefTips: [
      "💡 The SECRET to soft layered chapati: REST the dough AND the rolling technique. Don't skip either!",
      "💡 Warm water activates gluten faster than cold. Ideal temp: 40-45°C (105-115°F) - feels warm but not hot.",
      "💡 For EXTRA flaky chapati, use ghee instead of oil for richer flavor.",
      "💡 If dough springs back when rolling, let it rest 5 more minutes. Gluten needs time to relax.",
      "💡 Chapati freezes well! Layer between parchment paper, freeze in zip-lock. Reheat directly on pan."
    ],
    commonMistakes: [
      "⚠️ Not kneading enough = tough chapati that doesn't puff",
      "⚠️ Skipping rest time = dough fights back, won't roll thin",
      "⚠️ Pan too hot = burnt outside, raw inside",
      "⚠️ Pan too cool = hard, crispy chapati (not soft)",
      "⚠️ Rolling too thin = no layers, dry chapati",
      "⚠️ Not wrapping immediately = chapati dries out"
    ],
    pairingSuggestions: ["🥘 Beef stew", "🍛 Chicken curry", "🫘 Bean stew (maharagwe)", "☕ Kenyan chai", "🥬 Sukuma wiki"],
    platingInstructions: "Stack 2-3 chapatis on plate. Fold one into triangle and place on top. Serve with stew in separate bowl.",
    isFavorite: false,
    tags: ["bread", "flatbread", "staple", "kenyan", "breakfast", "dinner"]
  },
  
  {
    id: "ken006",
    name: "Pilau (Spiced Kenyan Rice)",
    category: "🇰🇪 Kenyan Classics",
    image: "https://i.pinimg.com/736x/fc/04/ae/fc04aeee22cbce1229a93dd3d0e1eefa.jpg",
    prepTime: "15 min",
    cookTime: "40 min",
    servings: "6 people",
    difficulty: "Intermediate",
    heatLevel: "Mild to Medium",
    equipment: ["Heavy-bottomed pot with tight lid", "Fine mesh strainer", "Sharp knife", "Wooden spoon", "Measuring cups"],
    ingredients: ["2 cups basmati rice", "500g beef or goat, cubed", "2 large onions, thinly sliced", "4 cloves garlic, minced", "1 tbsp ginger, minced", "3 tomatoes, chopped", "4 cups beef broth or water", "4 tbsp vegetable oil or ghee", "2 tbsp pilau masala", "2 cinnamon sticks", "4 cardamom pods", "4 cloves", "1 tsp cumin seeds", "Salt to taste", "Fresh coriander"],
    instructions: [
      "=== PREPARATION ===",
      "STEP 1: WASH RICE - Place rice in bowl. Cover with cold water. Swirl with fingers. Water will be CLOUDY. Drain. Repeat 3-4 times until water runs CLEAR. This removes excess starch.",
      "STEP 2: SOAK RICE - Cover washed rice with fresh cold water. Soak 20 minutes. Drain WELL in strainer for 5 minutes.",
      "=== COOKING ===",
      "STEP 3: FRY ONIONS - Heat oil in pot over MEDIUM heat. Add sliced onions. Cook, stirring occasionally, until DEEP GOLDEN BROWN (10-12 minutes). Patience! This builds flavor foundation.",
      "STEP 4: RESERVE ONIONS - Remove HALF the fried onions. Set aside on paper towel for garnish.",
      "STEP 5: WHOLE SPICES - To remaining onions in pot, add cinnamon sticks, cardamom pods, cloves, and cumin seeds. Fry 1 minute until FRAGRANT. You'll smell spices blooming!",
      "STEP 6: AROMATICS - Add ginger and garlic. Cook 30 seconds until fragrant. Don't burn!",
      "STEP 7: BROWN MEAT - Add meat cubes. Increase heat to MEDIUM-HIGH. Brown meat on ALL sides (5-7 minutes). Meat should have nice color.",
      "STEP 8: SPICE POWDER - Add pilau masala and salt. Stir to coat meat. Cook 2 minutes. Spices should darken slightly and smell TOASTY.",
      "STEP 9: ADD TOMATOES - Add chopped tomatoes. Cook 5 minutes until SOFT and oil separates from mixture. You'll see oil forming pools around edges.",
      "STEP 10: ADD LIQUID - Pour in broth or water. Scrape bottom of pot to release any browned bits (deglaze). Bring to BOIL.",
      "STEP 11: SIMMER MEAT - Reduce heat to LOW. Cover. Simmer until meat is TENDER (20-30 minutes for beef, 40-45 for goat). Test by piercing with fork - should slide in easily.",
      "STEP 12: CHECK LIQUID LEVEL - After meat is tender, check liquid amount. You need enough to cook rice (see next step).",
      "STEP 13: ADD RICE - Add drained rice. Stir GENTLY once to combine. Liquid should be about 1 cm (1/2 inch) ABOVE rice level. If low, add hot water.",
      "STEP 14: BRING TO BOIL - Increase heat to HIGH. Bring to boil. You'll see bubbles around edges.",
      "STEP 15: COVER AND REDUCE HEAT - IMMEDIATELY reduce heat to LOWEST setting. Cover with TIGHT-FITTING lid. If lid is loose, seal with foil first.",
      "STEP 16: STEAM (DO NOT OPEN!) - Cook 15-18 minutes. DO NOT OPEN LID! Steam is cooking the rice.",
      "STEP 17: CHECK DONENESS - After 15 minutes, quickly peek. Rice grains should be separate and FLUFFY. If wet on top, cover and cook 2-3 more minutes.",
      "STEP 18: REST - Turn off heat. Let rest COVERED for 10 minutes. This allows steam to redistribute.",
      "STEP 19: FLUFF - Remove lid. Using fork, GENTLY fluff rice. Don't mash!",
      "STEP 20: GARNISH AND SERVE - Transfer to serving platter. Top with reserved fried onions and fresh coriander."
    ],
    chefTips: [
      "💡 HOMEMADE pilau masala is superior: Toast and grind cumin, cardamom, cinnamon, cloves, black pepper.",
      "💡 For RICHER pilau, use half beef broth, half coconut milk.",
      "💡 Add 1/4 cup raisins or fried cashews for celebration pilau.",
      "💡 If rice is mushy: too much liquid or cooked too long. If crunchy: not enough liquid or heat too high.",
      "💡 Perfect pilau has each grain SEPARATE and coated with spiced oil."
    ],
    commonMistakes: [
      "⚠️ Not washing rice = gummy, sticky pilau",
      "⚠️ Opening lid during steaming = steam escapes, uneven cooking",
      "⚠️ Heat too high = burnt bottom, raw top",
      "⚠️ Too much liquid = mushy rice",
      "⚠️ Not enough liquid = crunchy, undercooked rice",
      "⚠️ Stirring rice after adding liquid = broken grains, sticky pilau"
    ],
    pairingSuggestions: ["🥗 Kachumbari - essential", "🍌 Ripe banana", "🥛 Maziwa mala (sour milk)", "🥤 Cold soda"],
    platingInstructions: "Mound pilau on large platter. Create well in center for meat pieces. Scatter fried onions and coriander over top. Serve Kachumbari in separate bowl.",
    isFavorite: false,
    tags: ["rice", "celebration", "party", "meat", "swahili", "kenyan"]
  },
  
  {
    id: "ken007",
    name: "Mandazi (Kenyan Doughnuts)",
    category: "🇰🇪 Kenyan Classics",
    image: "https://i.pinimg.com/736x/48/d2/b6/48d2b65e39df5e4d738fc60bde129a13.jpg",
    prepTime: "20 min",
    cookTime: "20 min",
    servings: "15 pieces",
    difficulty: "Easy",
    heatLevel: "Mild",
    equipment: ["Large mixing bowl", "Rolling pin", "Knife or pizza cutter", "Deep pot for frying", "Slotted spoon", "Paper towels", "Thermometer (recommended)"],
    ingredients: ["3 cups all-purpose flour", "1/2 cup sugar", "1 1/2 tsp baking powder", "1/4 tsp salt", "1 tsp cardamom powder", "1 egg", "3/4 cup coconut milk", "3 tbsp melted butter", "Vegetable oil for deep frying"],
    instructions: [
      "=== DOUGH ===",
      "STEP 1: MIX DRY - In large bowl, whisk flour, sugar, baking powder, salt, and cardamom until well combined.",
      "STEP 2: ADD WET - Make well in center. Add egg, melted butter, and coconut milk.",
      "STEP 3: KNEAD - Mix with spoon until shaggy. Transfer to lightly floured surface. Knead 5-7 minutes until SMOOTH and ELASTIC. Dough should be soft but NOT STICKY.",
      "STEP 4: REST - Form into ball. Cover with damp cloth. Rest 30 minutes. Dough will relax and be easier to roll.",
      "=== SHAPING ===",
      "STEP 5: ROLL - On lightly floured surface, roll dough to 1/2 inch (1.25 cm) thickness. Use even pressure.",
      "STEP 6: CUT - Using sharp knife or pizza cutter, cut into triangles, squares, or rectangles. Traditional is triangles.",
      "=== FRYING ===",
      "STEP 7: HEAT OIL - Pour oil into deep pot to depth of 2 inches (5 cm). Heat to 170°C (340°F). TEST: Drop small piece of dough - should SIZZLE and rise slowly. If it browns immediately, oil too hot. If it sits without sizzling, too cool.",
      "STEP 8: FRY IN BATCHES - Carefully slide 3-4 mandazis into hot oil. DON'T OVERCROWD - drops oil temperature.",
      "STEP 9: FIRST SIDE - Fry 1-2 minutes until GOLDEN BROWN on bottom. Mandazi will PUFF slightly and float.",
      "STEP 10: FLIP - Using slotted spoon, flip each mandazi. Fry second side 1-2 minutes until golden brown.",
      "STEP 11: DRAIN - Remove with slotted spoon, letting excess oil drip off. Place on paper towel-lined plate.",
      "STEP 12: MAINTAIN TEMPERATURE - Between batches, let oil return to 170°C. Check with thermometer or dough test.",
      "STEP 13: COOL SLIGHTLY - Let cool 5 minutes before serving. Mandazi will be VERY hot inside!",
      "STEP 14: SERVE - Best served WARM. Can dust with powdered sugar or cinnamon sugar if desired."
    ],
    chefTips: [
      "💡 Coconut milk gives authentic flavor. If using regular milk, add 1/2 tsp coconut extract.",
      "💡 For EXTRA soft mandazi, add 1/4 cup mashed ripe banana to dough (reduce milk slightly).",
      "💡 Cardamom is traditional. Can substitute 1 tsp vanilla or 1/2 tsp cinnamon.",
      "💡 Don't roll dough too thin - mandazi will be hard and crispy instead of soft and fluffy.",
      "💡 Leftover mandazi: Reheat in oven at 150°C (300°F) for 5 minutes, or microwave 15 seconds wrapped in damp paper towel."
    ],
    commonMistakes: [
      "⚠️ Oil too hot = burnt outside, raw inside",
      "⚠️ Oil too cool = greasy, oil-soaked mandazi",
      "⚠️ Overcrowding = oil temperature drops, greasy mandazi",
      "⚠️ Rolling too thin = hard, crispy mandazi (should be soft and fluffy)",
      "⚠️ Not resting dough = tough mandazi"
    ],
    pairingSuggestions: ["☕ Kenyan chai - classic combination", "🍵 Tea", "☕ Coffee", "🥭 Fresh mango"],
    platingInstructions: "Stack mandazis on plate. Dust with powdered sugar if desired. Serve warm with chai in separate cup.",
    isFavorite: false,
    tags: ["breakfast", "snack", "sweet", "tea time", "swahili", "kenyan"]
  },
  
  {
    id: "ken008",
    name: "Mukimo (Mashed Potatoes with Greens)",
    category: "🇰🇪 Kenyan Classics",
    image: "https://i.pinimg.com/736x/d9/6f/6a/d96f6ad175a83982c8069c45fedc4a61.jpg",
    prepTime: "15 min",
    cookTime: "30 min",
    servings: "6 people",
    difficulty: "Easy",
    heatLevel: "Mild",
    equipment: ["Large pot", "Frying pan", "Potato masher or wooden spoon", "Sharp knife", "Cutting board"],
    ingredients: ["6 large potatoes, peeled", "2 cups pumpkin leaves (malenge) or spinach", "1 cup fresh maize kernels", "1 onion, chopped", "3 tbsp vegetable oil", "Salt to taste"],
    instructions: [
      "=== PREPARATION ===",
      "STEP 1: BOIL POTATOES - Place peeled potatoes in large pot. Cover with cold water. Add 1 tsp salt. Bring to boil over HIGH heat.",
      "STEP 2: COOK POTATOES - Reduce heat to MEDIUM. Cook 15-20 minutes until FORK-TENDER (fork slides in easily).",
      "=== GREENS ===",
      "STEP 3: COOK AROMATICS - While potatoes cook, heat oil in pan over MEDIUM heat. Add chopped onion. Cook 3-4 minutes until TRANSLUCENT.",
      "STEP 4: ADD MAIZE - Add maize kernels. Cook 2 minutes, stirring.",
      "STEP 5: ADD GREENS - Add chopped pumpkin leaves or spinach. Stir. Cook 3-5 minutes until WILTED and bright green. Remove from heat.",
      "=== MASHING ===",
      "STEP 6: DRAIN POTATOES - When potatoes are tender, drain in colander. RESERVE 1/2 cup cooking water.",
      "STEP 7: RETURN TO POT - Return drained potatoes to pot over LOW heat. Let steam dry for 1 minute.",
      "STEP 8: ADD GREENS MIXTURE - Add cooked greens, maize, and onion mixture to potatoes.",
      "STEP 9: MASH - Using potato masher or wooden spoon, mash everything together. Add reserved potato water 1 tbsp at a time to reach desired consistency.",
      "STEP 10: SEASON - Add salt to taste. Mix well.",
      "STEP 11: TEXTURE CHECK - Mukimo should be SMOOTH but with VISIBLE SPECKS of green and corn. Not completely pureed.",
      "STEP 12: SHAPE - Transfer to serving bowl. Shape into dome using wet hands or spoon.",
      "STEP 13: SERVE - Serve HOT as accompaniment to stew or nyama choma."
    ],
    chefTips: [
      "💡 Traditional Mukimo uses pumpkin leaves (malenge) which give unique flavor. Spinach is good substitute.",
      "💡 For creamier Mukimo, add 2 tbsp butter or margarine while mashing.",
      "💡 Can use frozen corn and frozen spinach - thaw and drain well before using.",
      "💡 Leftover Mukimo can be shaped into patties and pan-fried for breakfast!"
    ],
    commonMistakes: [
      "⚠️ Over-mashing = gummy, gluey texture",
      "⚠️ Not draining potatoes well = watery Mukimo",
      "⚠️ Adding cold ingredients = Mukimo cools too fast"
    ],
    pairingSuggestions: ["🥘 Beef stew", "🍗 Nyama Choma", "🥬 Sukuma Wiki", "🍅 Kachumbari"],
    platingInstructions: "Shape Mukimo into dome on plate. Make well in center. Fill with stew. Or serve as side mound beside meat.",
    isFavorite: false,
    tags: ["staple", "vegetarian", "kikuyu", "traditional", "kenyan"]
  },
  
  {
    id: "ken009",
    name: "Samosa (Kenyan Style with Meat)",
    category: "🇰🇪 Street Food",
    image: "https://i.pinimg.com/736x/8c/e3/5d/8ce35dba6a905798cc7aac1614f0cd79.jpg",
    prepTime: "40 min",
    cookTime: "20 min",
    servings: "20 samosas",
    difficulty: "Intermediate",
    heatLevel: "Medium",
    equipment: ["Large mixing bowl", "Frying pan", "Rolling pin", "Sharp knife", "Deep pot for frying", "Slotted spoon", "Paper towels"],
    ingredients: ["3 cups all-purpose flour", "1/2 tsp salt", "4 tbsp vegetable oil", "3/4 cup warm water", "500g minced beef", "1 large onion, finely chopped", "3 cloves garlic, minced", "1 tbsp ginger, minced", "1 tsp cumin", "1 tsp coriander", "1/2 tsp turmeric", "1 tsp garam masala", "Salt to taste", "Fresh coriander", "Oil for deep frying"],
    instructions: [
      "=== DOUGH ===",
      "STEP 1: MIX FLOUR - In bowl, combine flour and salt. Add 4 tbsp oil. Rub with fingertips until mixture resembles BREADCRUMBS and holds shape when squeezed.",
      "STEP 2: ADD WATER - Gradually add warm water, mixing until stiff dough forms. Knead 5 minutes until SMOOTH. Dough should be FIRM (harder than chapati dough).",
      "STEP 3: REST - Cover with damp cloth. Rest 30 minutes MINIMUM.",
      "=== FILLING ===",
      "STEP 4: COOK ONIONS - Heat 2 tbsp oil in pan. Add onions. Cook until GOLDEN BROWN (5-7 minutes).",
      "STEP 5: AROMATICS - Add ginger and garlic. Cook 30 seconds until fragrant.",
      "STEP 6: BROWN MEAT - Add minced beef. Break up lumps with spoon. Cook until BROWNED and any liquid has evaporated (8-10 minutes).",
      "STEP 7: SPICES - Add cumin, coriander, turmeric, garam masala, and salt. Stir. Cook 2 minutes until FRAGRANT.",
      "STEP 8: SIMMER - Add 1/4 cup water. Simmer until meat is cooked and COMPLETELY DRY. No liquid should remain.",
      "STEP 9: FINISH FILLING - Remove from heat. Stir in chopped fresh coriander. COOL COMPLETELY before filling. Warm filling makes soggy samosas!",
      "=== ASSEMBLY ===",
      "STEP 10: DIVIDE DOUGH - Divide into 10 equal balls. Keep covered.",
      "STEP 11: ROLL - Roll one ball into THIN circle (6-7 inches / 15-18 cm).",
      "STEP 12: CUT - Cut circle in half to make two SEMI-CIRCLES.",
      "STEP 13: FORM CONE - Take one semi-circle. Bring straight edges together, overlapping by 1/4 inch (0.5 cm). Seal with water to form CONE.",
      "STEP 14: FILL - Hold cone in palm. Fill with 1-2 tbsp COOLED filling. DON'T OVERFILL - needs space to seal!",
      "STEP 15: SEAL - Wet top edges with water. Pinch firmly to seal. Press edges with fork for decorative seal and extra security.",
      "STEP 16: REPEAT - Continue with all dough and filling. Keep finished samosas covered with damp cloth.",
      "=== FRYING ===",
      "STEP 17: HEAT OIL - Heat oil to 170°C (340°F). Test with small dough piece - should sizzle and rise.",
      "STEP 18: FRY - Fry 3-4 samosas at a time. DON'T OVERCROWD.",
      "STEP 19: COOK - Fry 2-3 minutes per side until GOLDEN BROWN and CRISPY.",
      "STEP 20: DRAIN - Remove with slotted spoon. Drain on paper towels.",
      "STEP 21: SERVE - Serve HOT with ketchup, chili sauce, or tamarind chutney."
    ],
    chefTips: [
      "💡 Filling MUST be completely cool before filling - warm filling creates steam, makes samosas burst open.",
      "💡 For extra crispy samosas, add 1 tbsp cornstarch to flour when making dough.",
      "💡 Can freeze UNFRIED samosas: Arrange on tray, freeze solid, transfer to zip-lock. Fry directly from frozen (add 1-2 minutes).",
      "💡 Vegetarian filling: Substitute meat with mashed potatoes, peas, and carrots."
    ],
    commonMistakes: [
      "⚠️ Warm filling = soggy samosas that burst open",
      "⚠️ Overfilling = can't seal properly, bursts during frying",
      "⚠️ Poor sealing = filling leaks into oil",
      "⚠️ Oil too hot = burnt outside, cold inside",
      "⚠️ Dough too thick = doughy, undercooked samosas"
    ],
    pairingSuggestions: ["🍅 Ketchup", "🌶️ Chili sauce", "🥭 Tamarind chutney", "☕ Chai"],
    platingInstructions: "Arrange samosas on platter. Place small bowls of sauces around. Garnish with fresh coriander and lemon wedges.",
    isFavorite: false,
    tags: ["street food", "snack", "party", "iftar", "swahili", "kenyan"]
  },
  
  {
    id: "ken010",
    name: "Kachumbari (Tomato-Onion Salad)",
    category: "🇰🇪 Kenyan Classics",
    image: "https://i.pinimg.com/736x/fc/04/ae/fc04aeee22cbce1229a93dd3d0e1eefa.jpg",
    prepTime: "10 min",
    cookTime: "0 min",
    servings: "4 people",
    difficulty: "Easy",
    heatLevel: "Mild to Medium",
    equipment: ["Sharp knife", "Cutting board", "Mixing bowl", "Citrus juicer"],
    ingredients: ["3 large ripe tomatoes", "1 large red onion", "1 bunch fresh coriander (dhania)", "1-2 green chilies (optional)", "Juice of 1 lemon", "1/2 tsp salt", "Pinch black pepper"],
    instructions: [
      "STEP 1: PREP TOMATOES - Core tomatoes. Cut into SMALL UNIFORM cubes (1/2 inch / 1 cm). Uniform size ensures even flavor distribution.",
      "STEP 2: PREP ONION - Peel red onion. Cut in half. Slice THINLY, then chop finely. For milder flavor, soak chopped onion in cold water 10 minutes, then drain well.",
      "STEP 3: PREP HERBS - Wash coriander. Shake dry or use salad spinner. Chop leaves and tender stems FINELY. Discard tough bottom stems.",
      "STEP 4: PREP CHILI (Optional) - Slit chili lengthwise. Remove seeds and white membrane for less heat. Mince finely. WASH HANDS after handling!",
      "STEP 5: COMBINE - In mixing bowl, combine tomatoes, onion, coriander, and chili (if using).",
      "STEP 6: DRESS - Squeeze fresh lemon juice over mixture. Use strainer to catch seeds.",
      "STEP 7: SEASON - Sprinkle with salt and black pepper.",
      "STEP 8: TOSS - Using two spoons or clean hands, GENTLY toss to combine. Don't crush tomatoes!",
      "STEP 9: REST (IMPORTANT) - Let sit at room temperature 5-10 minutes. This allows flavors to MELD and tomatoes to release some juice.",
      "STEP 10: FINAL TASTE - Taste and adjust seasoning. Add more salt, lemon, or chili as needed.",
      "STEP 11: SERVE - Serve IMMEDIATELY after resting. Kachumbari doesn't keep well - best fresh!"
    ],
    chefTips: [
      "💡 Use FIRM ripe tomatoes - Roma or plum tomatoes hold shape best. Avoid overripe tomatoes (become mushy).",
      "💡 For EXTRA flavor, add 1 tbsp finely chopped fresh mint along with coriander.",
      "💡 Lime juice works equally well. Some prefer the slightly sweeter lime flavor.",
      "💡 Make sure onion is VERY finely chopped - large chunks overpower.",
      "💡 Don't make too far ahead - Kachumbari is best within 30 minutes of making."
    ],
    commonMistakes: [
      "⚠️ Chopping tomatoes too large = unbalanced bites",
      "⚠️ Not draining soaked onion well = watery Kachumbari",
      "⚠️ Adding too much lemon = overly sour",
      "⚠️ Making too far ahead = tomatoes become mushy, watery",
      "⚠️ Stirring too vigorously = crushed tomatoes"
    ],
    pairingSuggestions: ["🍖 Nyama Choma - classic", "🍚 Pilau - essential", "🐟 Fried fish", "🌮 Tacos or burritos", "🍛 Any grilled meat"],
    platingInstructions: "Spoon Kachumbari into small serving bowl. Let some liquid drain before serving. Can also serve as bed under grilled meat.",
    isFavorite: false,
    tags: ["salad", "raw", "side dish", "quick", "fresh", "kenyan"]
  }

  // ==========================================
  // NOTE: This is Batch 1 (10 detailed recipes)
  // Reply "Batch 2" for next 10 recipes!
  // ==========================================
];
