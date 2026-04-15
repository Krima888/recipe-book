// ============================================
// 👨‍🍳 CHEF'S RECIPE BOOK - PROFESSIONAL EDITION
// Detailed instructions for kitchen success
// ============================================

const RECIPE_DATABASE = [
  
  // ==========================================
  // 🇰🇪 KENYAN CLASSICS - CHEF DETAILED
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
    
    equipment: [
      "Heavy-bottomed sufuria (pot) - 3-4 liter capacity",
      "Wooden spoon (mwiko) - flat edge is best",
      "Measuring cups",
      "Serving plate",
      "Bowl of cold water for wetting plate"
    ],
    
    miseEnPlace: [
      "Measure 4 cups water into sufuria",
      "Measure 2 cups maize flour into bowl for easy pouring",
      "Have salt ready if using",
      "Wet serving plate with cold water"
    ],
    
    ingredients: [
      "4 cups water (filtered for best taste)",
      "2 cups maize flour (cornmeal) - Jogoo or Pembe brand recommended",
      "1/2 tsp salt (optional, but enhances flavor)"
    ],
    
    instructions: [
      "STEP 1: BOIL WATER - Place sufuria over high heat. Add salt to water. Wait until you see LARGE ROLLING BUBBLES (not just small ones). This takes about 5-7 minutes depending on your stove.",
      "STEP 2: ADD FLOUR - Reduce heat to medium. Using your LEFT hand to pour flour in a THIN STEADY STREAM while your RIGHT hand stirs VIGOROUSLY with the mwiko. DO NOT dump all flour at once - this creates lumps!",
      "STEP 3: BEAT OUT LUMPS - As mixture thickens, you'll feel resistance. Increase stirring speed. Use the flat edge of mwiko to PRESS ugali against the pot sides. This breaks up any forming lumps.",
      "STEP 4: REDUCE HEAT - Once all flour is incorporated (about 2 minutes), reduce heat to LOW. The mixture should be thick but still moist.",
      "STEP 5: SHAPE AND COOK - Use mwiko to gather ugali into center of pot. Press down firmly. You'll see steam escaping from edges. Cover with lid slightly ajar. Cook 8-10 minutes.",
      "STEP 6: CHECK DONENESS - Ugali is ready when it PULLS AWAY CLEANLY from pot sides and has a FIRM, SLIGHTLY ELASTIC texture. Insert mwiko in center - it should stand upright!",
      "STEP 7: FINAL BEAT - Remove lid. Beat ugali vigorously for 30 seconds to remove any remaining lumps and create smooth texture.",
      "STEP 8: TURN OUT - Quickly invert pot over wet plate. Ugali should slide out in one piece. Use wet hands to shape into a smooth dome.",
      "STEP 9: SERVE IMMEDIATELY - Ugali must be served PIPING HOT. It hardens as it cools."
    ],
    
    chefTips: [
      "💡 The water MUST be at a rolling boil before adding flour - lukewarm water makes mushy ugali.",
      "💡 Wet your hands before handling hot ugali to prevent sticking and burns.",
      "💡 For extra smooth ugali, sift the maize flour before use.",
      "💡 Traditionalists use finger millet flour mixed with maize for 'ugali wa wimbi' - nuttier flavor."
    ],
    
    commonMistakes: [
      "⚠️ Adding flour to cold water = lumpy, raw-tasting ugali",
      "⚠️ Not stirring constantly in first 2 minutes = lumps you can't fix",
      "⚠️ Cooking on high heat throughout = burnt bottom, raw center",
      "⚠️ Removing from pot too early = soft ugali that falls apart"
    ],
    
    pairingSuggestions: [
      "🍖 Nyama Choma (roasted meat)",
      "🥬 Sukuma Wiki (sautéed greens)",
      "🐟 Fried tilapia fish",
      "🥘 Beef stew (mchuzi wa nyama)",
      "🥛 Mursik (fermented milk) - traditional pairing"
    ],
    
    platingInstructions: "Place ugali dome slightly off-center on plate. Arrange stew or vegetables around it, not on top. Provide extra stew in a separate bowl for dipping. Garnish plate with fresh coriander sprig.",
    
    isFavorite: false,
    tags: ["staple", "traditional", "quick", "kenyan", "cornmeal"]
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
    
    equipment: [
      "Large sufuria or wide pan with lid",
      "Sharp chef's knife",
      "Cutting board",
      "Wooden spoon",
      "Measuring spoons"
    ],
    
    miseEnPlace: [
      "Wash sukuma thoroughly in cold water (3 rinses minimum)",
      "Remove tough stems - fold leaf in half and cut out center rib",
      "Stack 5-6 leaves, roll tightly into cigar shape",
      "Slice rolled leaves into THIN ribbons (1/4 inch / 0.5 cm)",
      "Dice onion into small uniform cubes",
      "Chop tomatoes",
      "Mince garlic",
      "Have all spices measured and ready"
    ],
    
    ingredients: [
      "1 large bunch sukuma wiki (collard greens) - about 500g / 1 lb",
      "1 large onion, finely diced",
      "2 medium tomatoes, chopped",
      "3 tbsp vegetable oil (sunflower or canola)",
      "2 cloves garlic, minced",
      "1 tsp salt (adjust to taste)",
      "1/2 tsp black pepper, freshly ground",
      "OPTIONAL: 1/4 tsp Royco mchuzi mix (Kenyan seasoning)",
      "OPTIONAL: 1 green chili, minced (for heat)",
      "OPTIONAL: 1/4 cup water or broth"
    ],
    
    instructions: [
      "STEP 1: HEAT THE PAN - Place sufuria over MEDIUM-HIGH heat. Add oil. Wait until oil shimmers and you see faint wisps of smoke - about 1-2 minutes. Properly heated oil prevents sticking.",
      "STEP 2: SWEAT THE ONIONS - Add diced onions. You should hear a GENTLE SIZZLE. Stir immediately. Cook for 3-4 minutes until onions become TRANSLUCENT (see-through) and edges just begin to brown. Don't let them burn!",
      "STEP 3: AROMATICS - Add minced garlic. Stir continuously for 30 SECONDS ONLY. You'll smell the garlic immediately. DO NOT let garlic brown - it becomes bitter.",
      "STEP 4: ADD TOMATOES - Add chopped tomatoes. Stir well. Cook for 3-4 minutes until tomatoes SOFTEN and release their juices. You'll see the mixture become saucy. Mash larger pieces with back of spoon.",
      "STEP 5: FIRST SEASONING - Add salt, pepper, and Royco if using. Stir to combine. This early seasoning helps flavors penetrate the vegetables.",
      "STEP 6: ADD GREENS GRADUALLY - This is CRUCIAL! Add sukuma in 3-4 batches. Add one handful, stir until it wilts and reduces in volume (30 seconds), then add next handful. This ensures even cooking.",
      "STEP 7: COVER AND STEAM - Once all sukuma is in, stir well to coat with onion-tomato mixture. If pan seems dry, add 2-3 tbsp water. Cover with lid. Reduce heat to MEDIUM-LOW.",
      "STEP 8: COOK COVERED - Let cook for 5 minutes. RESIST opening the lid! The steam is cooking the greens.",
      "STEP 9: CHECK AND STIR - After 5 minutes, open lid. Stir well. Sukuma should have turned BRIGHT GREEN and reduced significantly. If still tough, cover and cook 2-3 more minutes.",
      "STEP 10: FINAL SEAR - Remove lid. Increase heat to HIGH. Cook for 1-2 minutes, stirring constantly, to evaporate any excess liquid. Sukuma should be tender but still have a SLIGHT BITE (al dente).",
      "STEP 11: TASTE AND ADJUST - Turn off heat. Taste a leaf. Add more salt if needed. The flavor should be savory with a hint of sweetness from the onions.",
      "STEP 12: REST - Let sit covered for 2 minutes off heat. This allows flavors to meld."
    ],
    
    chefTips: [
      "💡 Sukuma is done when it's BRIGHT GREEN, not olive or brown. Overcooking dulls the color and makes it mushy.",
      "💡 If sukuma is bitter, soak sliced leaves in cold salted water for 10 minutes, then drain and rinse before cooking.",
      "💡 For restaurant-style sukuma, add a pinch of baking soda with the salt - it preserves the bright green color.",
      "💡 Leftover sukuma makes excellent breakfast with eggs the next morning.",
      "💡 The stems you removed can be pickled or added to soup stock - don't waste them!"
    ],
    
    commonMistakes: [
      "⚠️ Not washing sukuma thoroughly = gritty, sandy texture",
      "⚠️ Adding all greens at once = uneven cooking, some leaves overcooked, others raw",
      "⚠️ Cooking with lid off entire time = dry, tough greens",
      "⚠️ Overcooking = olive-colored, mushy, bitter sukuma",
      "⚠️ Not enough oil = greens stick and burn"
    ],
    
    pairingSuggestions: [
      "🍚 Ugali - classic combination",
      "🍚 Rice pilau",
      "🫓 Chapati",
      "🍗 Roasted chicken",
      "🍳 Fried eggs for breakfast"
    ],
    
    platingInstructions: "Use tongs to lift sukuma, letting excess liquid drain. Place in a neat mound on plate. Don't flatten. Garnish with a lemon wedge and a sprinkle of fresh coriander if desired.",
    
    isFavorite: false,
    tags: ["vegetable", "healthy", "everyday", "kenyan", "greens", "quick"]
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
    
    equipment: [
      "Charcoal grill (jiko) OR gas grill OR oven with broiler",
      "Charcoal (if using jiko)",
      "Grill tongs - long handled",
      "Basting brush",
      "Sharp knife for scoring",
      "Large mixing bowl",
      "Meat thermometer (recommended)",
      "Aluminum foil",
      "Cutting board with juice groove"
    ],
    
    miseEnPlace: [
      "Remove meat from refrigerator 1 HOUR before cooking - meat at room temperature cooks evenly",
      "Pat meat COMPLETELY dry with paper towels - moisture prevents browning",
      "Score fatty areas with shallow crosshatch cuts (helps render fat and absorb marinade)",
      "Mix all marinade ingredients in bowl",
      "Have charcoal ready if using jiko",
      "Prepare Kachumbari before starting meat (it needs to rest too)"
    ],
    
    ingredients: [
      "2 kg goat meat OR beef (2.2 lbs) - choose cuts with some fat: shoulder, leg, or ribs",
      "3 tbsp vegetable oil",
      "2 tbsp ginger-garlic paste (freshly made is best)",
      "2 tsp salt (kosher or sea salt)",
      "1 tsp black pepper, freshly ground",
      "2 tsp paprika (sweet or smoked)",
      "1 lemon, juiced",
      "OPTIONAL: 1 tsp cayenne pepper (for heat)",
      "OPTIONAL: 2 tbsp plain yogurt (tenderizes meat)",
      "Kachumbari for serving"
    ],
    
    instructions: [
      "=== MARINADE PREPARATION (Day Before Recommended) ===",
      "STEP 1: MAKE MARINADE - In large bowl, combine ginger-garlic paste, salt, pepper, paprika, lemon juice, oil, and yogurt if using. Whisk until well combined. The mixture should be paste-like, not runny.",
      "STEP 2: SCORE THE MEAT - Using sharp knife, make shallow cuts (1/4 inch deep) in a crosshatch pattern on fatty areas. This allows marinade to penetrate and fat to render.",
      "STEP 3: MASSAGE MARINADE - Using your hands (wear gloves if preferred), rub marinade into EVERY surface of meat. Get into all crevices. Massage firmly for 2-3 minutes - this helps flavors penetrate.",
      "STEP 4: MARINATE - Place meat in bowl or zip-lock bag. Press out air. Refrigerate MINIMUM 2 hours, IDEALLY OVERNIGHT (8-12 hours). Turn meat once halfway through.",
      "STEP 5: PREPARE GRILL - If using charcoal: Light charcoal 30-40 minutes before cooking. Coals are ready when covered with WHITE ASH and you can hold hand 5 inches above for only 3-4 seconds (medium-high heat). Arrange coals for two-zone cooking: hot side and cooler side.",
      "STEP 6: REMOVE FROM FRIDGE - Take meat out 1 hour before grilling. Let come to room temperature. PAT DRY with paper towels - this is crucial for good sear!",
      "STEP 7: OIL THE GRILL - Fold paper towel, dip in oil, use tongs to rub on grill grates. This prevents sticking.",
      "STEP 8: FIRST SEAR - Place meat on HOTTEST part of grill. You should hear a LOUD SIZZLE. DON'T MOVE IT for 3-4 minutes. This creates the crust (Maillard reaction).",
      "STEP 9: CHECK AND FLIP - Meat should release easily when crust has formed. If sticking, wait 1 more minute. Flip using tongs (NEVER fork - pierces meat, juices escape). Sear second side 3-4 minutes.",
      "STEP 10: MOVE TO COOLER SIDE - After both sides are nicely charred, move meat to cooler side of grill (indirect heat). Cover grill (or tent with foil).",
      "STEP 11: COOK TO TEMPERATURE - For goat/beef: Medium = 60-63°C (140-145°F) internal temperature. This takes 20-40 minutes depending on thickness. Use meat thermometer inserted into thickest part, avoiding bone.",
      "STEP 12: BASTE - Every 10 minutes, brush meat with any remaining marinade mixed with a little oil. This adds flavor and moisture.",
      "STEP 13: CHECK DONENESS - Visual cues: Meat should feel FIRM but slightly SPRINGY when pressed. Juices should run CLEAR (not pink) when pierced.",
      "STEP 14: REST (CRUCIAL!) - Remove meat to cutting board. Tent LOOSELY with foil. Let rest MINIMUM 10 minutes, IDEALLY 15-20. This allows juices to redistribute. If you cut immediately, juices run out and meat is dry.",
      "STEP 15: SLICE - Slice AGAINST THE GRAIN (perpendicular to muscle fibers). For goat, this means cutting across the long strands. Slice thinly (1/2 inch / 1 cm).",
      "STEP 16: SERVE - Arrange slices on platter. Pour any accumulated juices from cutting board over meat. Serve immediately with Kachumbari."
    ],
    
    chefTips: [
      "💡 Goat meat (mbuzi) is traditional and has better flavor than beef for Nyama Choma.",
      "💡 The secret to tender Nyama Choma is SLOW cooking after the initial sear. Don't rush!",
      "💡 If meat is tough, it's undercooked. Goat needs to reach higher internal temp than beef to break down connective tissue.",
      "💡 For oven method: Sear in hot cast iron pan, then transfer to 180°C (350°F) oven to finish.",
      "💡 Leftover Nyama Choma makes amazing sandwiches or can be added to stew.",
      "💡 The charred bits (the 'choma') are the most flavorful - don't trim them off!"
    ],
    
    commonMistakes: [
      "⚠️ Cooking cold meat straight from fridge = uneven cooking, burnt outside, raw inside",
      "⚠️ Not patting dry before grilling = steamed meat, no crust",
      "⚠️ Moving meat too early = sticks to grill, tears, loses crust",
      "⚠️ Piercing with fork = juices escape, meat dries out",
      "⚠️ Skipping the rest = dry meat, juices on plate not in meat",
      "⚠️ Overcooking lean cuts = tough, chewy meat"
    ],
    
    pairingSuggestions: [
      "🍚 Ugali - essential",
      "🥗 Kachumbari - essential",
      "🥬 Sukuma Wiki",
      "🍺 Cold Tusker beer",
      "🌶️ Pili Pili sauce for heat lovers"
    ],
    
    platingInstructions: "Fan sliced meat across wooden board or platter. Place Kachumbari in a mound beside meat, not on top. Scatter fresh coriander over everything. Serve with extra lemon wedges and chili sauce on side.",
    
    isFavorite: false,
    tags: ["meat", "grill", "celebration", "weekend", "kenyan", "barbecue", "goat"]
  },

  // ==========================================
  // BREAKFAST - CHEF DETAILED
  // ==========================================
  
  {
    id: "brk001",
    name: "Fluffy American Pancakes",
    category: "🍳 Breakfast",
    image: "https://i.pinimg.com/736x/8c/e3/5d/8ce35dba6a905798cc7aac1614f0cd79.jpg",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: "4 people (12 pancakes)",
    difficulty: "Easy",
    heatLevel: "Mild",
    
    equipment: [
      "Large mixing bowl",
      "Medium mixing bowl",
      "Whisk",
      "Non-stick skillet or griddle",
      "Spatula (thin, flexible)",
      "Measuring cups and spoons",
      "Ladle or 1/4 cup measure",
      "Kitchen towel"
    ],
    
    miseEnPlace: [
      "Measure all dry ingredients into large bowl",
      "Measure all wet ingredients into medium bowl",
      "Melt butter and let cool slightly (hot butter cooks eggs)",
      "Preheat skillet over medium heat for 5 minutes before starting",
      "Have serving plates warming in low oven (optional but nice)"
    ],
    
    ingredients: [
      "1 1/2 cups all-purpose flour (180g)",
      "3 1/2 tsp baking powder (FRESH - check expiration!)",
      "1 tbsp sugar",
      "1/4 tsp salt",
      "1 1/4 cups whole milk (300ml), at room temperature",
      "1 large egg, at room temperature",
      "3 tbsp unsalted butter, melted and slightly cooled",
      "1 tsp vanilla extract (optional but recommended)",
      "Butter or oil for cooking"
    ],
    
    instructions: [
      "STEP 1: COMBINE DRY INGREDIENTS - In large bowl, whisk together flour, baking powder, sugar, and salt. Whisk for 30 seconds to aerate and ensure baking powder is evenly distributed. This prevents bitter spots.",
      "STEP 2: COMBINE WET INGREDIENTS - In medium bowl, whisk milk, egg, melted butter, and vanilla until well combined. The mixture should be uniform pale yellow.",
      "STEP 3: MAKE A WELL - Create a well (hole) in center of dry ingredients. This is where wet ingredients will go.",
      "STEP 4: COMBINE WET AND DRY - Pour wet ingredients into the well. Using whisk or spatula, gently fold together using a FIGURE-8 motion. MIX ONLY UNTIL JUST COMBINED - about 10-15 strokes. Batter WILL be lumpy! This is correct. Overmixing develops gluten = tough pancakes.",
      "STEP 5: REST THE BATTER (CRUCIAL!) - Let batter rest for 5-10 minutes. You'll see small bubbles forming on surface. This allows flour to hydrate and baking powder to activate. DO NOT STIR AGAIN!",
      "STEP 6: TEST PAN TEMPERATURE - Flick a few drops of water onto preheated pan. Water should SIZZLE and DANCE, not immediately evaporate (too hot) or just sit there (too cold). Adjust heat as needed. Medium heat is key.",
      "STEP 7: GREASE PAN - Lightly brush pan with butter or oil. Use paper towel to wipe off excess - you want a THIN film, not pools of fat.",
      "STEP 8: POUR BATTER - Using 1/4 cup measure or ladle, pour batter onto hot pan from LOW HEIGHT (about 2 inches). This creates even, round pancakes. Leave space between pancakes for spreading.",
      "STEP 9: WATCH FOR BUBBLES - DON'T TOUCH! Watch the surface. After 2-3 minutes, bubbles will form across the surface and begin to POP, leaving small holes. The edges will look slightly DRY and SET.",
      "STEP 10: THE FLIP - Slide spatula completely under pancake. Lift slightly to check color - should be GOLDEN BROWN. In one smooth motion, flip pancake. It should land flat. Cook second side for 1-2 minutes until golden.",
      "STEP 11: CHECK DONENESS - Gently press center of pancake. It should SPRING BACK. If it leaves an indentation, cook 30 seconds more.",
      "STEP 12: KEEP WARM - Transfer cooked pancakes to warm plate. Cover loosely with clean kitchen towel (not foil - creates steam, makes pancakes soggy).",
      "STEP 13: WIPE PAN - Between batches, wipe pan with paper towel to remove crumbs. Re-grease lightly.",
      "STEP 14: SERVE IMMEDIATELY - Pancakes are best within 5 minutes of cooking. Stack 3-4 high. Top with butter pat that melts into layers."
    ],
    
    chefTips: [
      "💡 FRESH baking powder is essential. To test: put 1/2 tsp in hot water - should fizz vigorously.",
      "💡 Room temperature ingredients create fluffier pancakes. Cold milk = dense pancakes.",
      "💡 For EXTRA fluffy pancakes, separate egg. Add yolk to wet ingredients. Beat white to soft peaks and FOLD in at the end.",
      "💡 First pancake is usually the test pancake. Adjust heat after seeing it.",
      "💡 Add-ins (blueberries, chocolate chips) should be sprinkled ON TOP after pouring batter, not mixed in. This prevents burning and uneven distribution."
    ],
    
    commonMistakes: [
      "⚠️ Overmixing = tough, flat, rubbery pancakes",
      "⚠️ Pan too hot = burnt outside, raw inside",
      "⚠️ Pan too cool = pale, greasy pancakes",
      "⚠️ Flipping too early = batter splatters, uneven cooking",
      "⚠️ Pressing down with spatula = squeezes out air, makes pancakes dense",
      "⚠️ Using old baking powder = flat pancakes"
    ],
    
    pairingSuggestions: [
      "🍯 Maple syrup (real, not flavored corn syrup)",
      "🧈 Salted butter",
      "🍓 Fresh berries",
      "🍌 Sliced bananas",
      "🥓 Crispy bacon on the side",
      "☕ Fresh coffee or Kenyan chai"
    ],
    
    platingInstructions: "Stack 3-4 pancakes slightly offset (not perfectly aligned). Place butter pat on top so it melts down the sides. Dust with powdered sugar using fine sieve. Arrange berries around plate. Serve syrup in small pitcher on side (not poured over - keeps pancakes crisp).",
    
    isFavorite: false,
    tags: ["breakfast", "quick", "american", "pancakes", "sweet", "kid-friendly"]
  }

  // ==========================================
  // MORE RECIPES CONTINUE WITH SAME DETAIL LEVEL
  // (Due to length, showing structure - all recipes follow this format)
  // ==========================================
];
