/* Kitchen Helper recipe book.
   To add a recipe, copy one block below and edit it.
   minutes: total time in minutes (used for sorting by quickest)
   effort:  1 = easy, 2 = some effort, 3 = a project
   rating / kids: optional starting star ratings 1-5 (ratings tapped on the iPad take priority)
   tags: list of tags used for browsing. Use these where they fit:
         Meal:  Breakfast, Lunch, Dinner, Side, Dessert, Baking, Snack
         Main:  Beef, Chicken, Pork, Lamb, Fish, Vegetarian, Vegan
         Style: Slow cook, One pot, Freezer friendly, Batch cook, Budget, Weekend
         ("Quick" is added automatically for anything 30 minutes or under.)
   emoji: one emoji shown on the recipe card (optional)
   Ingredient: { q: amount (number, scales with servings), u: "unit", n: "name" }
               or { text: "something that doesn't scale" }
   Step:       { t: "instruction", timer: seconds (optional), label: "timer name" (optional) }
               In step text, {3} shows ingredient number 3 (counting from 0) with its amount,
               e.g. "Add {5}" -> "Add 500g beef mince". Amounts follow the servings.
               {3|other words} shows the amount with your own wording instead of the name.
*/
window.KITCHEN_RECIPES = [
  {
    id: "bolognese",
    tags: ["Dinner", "Beef", "Batch cook", "Freezer friendly"],
    minutes: 60,
    effort: 2,
    emoji: "🍝",
    title: "Weeknight Spaghetti Bolognese",
    category: "Mains",
    serves: 4,
    time: "1 hr",
    summary: "A rich, simple ragù that freezes well.",
    ingredients: [
      { q: 1, u: "tbsp", n: "olive oil" },
      { q: 1, u: "", n: "onion, finely chopped" },
      { q: 1, u: "", n: "carrot, finely chopped" },
      { q: 1, u: "", n: "celery stick, finely chopped" },
      { q: 2, u: "", n: "garlic cloves, crushed" },
      { q: 500, u: "g", n: "beef mince (5–10% fat)" },
      { q: 2, u: "tbsp", n: "tomato purée" },
      { q: 400, u: "g", n: "chopped tomatoes (1 tin)" },
      { q: 150, u: "ml", n: "beef stock or red wine" },
      { q: 1, u: "tsp", n: "dried oregano" },
      { q: 350, u: "g", n: "spaghetti" },
      { text: "Salt, pepper and grated Parmesan to serve" }
    ],
    steps: [
      { t: "Heat {0} in a large pan over a medium heat. Add {1}, {2} and {3} with a pinch of salt and cook gently until soft.", timer: 600, label: "Soften veg" },
      { t: "Add {4} and cook for 1 minute.", timer: 60, label: "Garlic" },
      { t: "Turn the heat up, add {5} and break it up with a spoon. Fry until browned all over.", timer: 300, label: "Brown mince" },
      { t: "Stir in {6}, then {7}, {8} and {9}. Bring to a simmer." },
      { t: "Cover with a lid slightly ajar and simmer gently, stirring now and then. Add a splash of water if it gets too thick.", timer: 1800, label: "Simmer sauce" },
      { t: "Meanwhile, cook {10} in plenty of salted boiling water according to the packet (usually about 10 minutes).", timer: 600, label: "Spaghetti" },
      { t: "Season the sauce to taste. Drain the pasta, saving a cup of the water, and toss through the sauce, loosening with pasta water if needed. Serve with Parmesan." }
    ],
    notes: "Freezes for up to 3 months. A splash of milk in the last 10 minutes makes it silkier."
  },
  {
    id: "leek-potato-soup",
    tags: ["Lunch", "Dinner", "Vegetarian", "One pot", "Freezer friendly", "Budget"],
    minutes: 40,
    effort: 1,
    emoji: "🍲",
    title: "Leek & Potato Soup",
    category: "Soups",
    serves: 4,
    time: "40 min",
    summary: "Cheap, comforting and ready in under an hour.",
    ingredients: [
      { q: 25, u: "g", n: "butter" },
      { q: 3, u: "", n: "leeks, trimmed and sliced" },
      { q: 1, u: "", n: "onion, chopped" },
      { q: 450, u: "g", n: "floury potatoes, peeled and diced" },
      { q: 1, u: "l", n: "vegetable or chicken stock" },
      { q: 100, u: "ml", n: "single cream or milk (optional)" },
      { text: "Salt, pepper and chopped chives to serve" }
    ],
    steps: [
      { t: "Melt {0} in a large pan. Add {1} and {2} with a pinch of salt, cover and sweat gently without browning.", timer: 600, label: "Sweat leeks" },
      { t: "Add {3} and {4}. Bring to the boil, then simmer until the potatoes are completely soft.", timer: 1200, label: "Simmer soup" },
      { t: "Blend until smooth (or leave chunky if you prefer). Stir in {5} and reheat gently without boiling." },
      { t: "Season well and serve scattered with chives." }
    ],
    notes: "Keeps 3 days in the fridge. Freeze before adding the cream."
  },
  {
    id: "victoria-sponge",
    tags: ["Baking", "Dessert", "Vegetarian", "Weekend"],
    minutes: 50,
    effort: 2,
    emoji: "🍰",
    title: "Victoria Sponge",
    category: "Baking",
    serves: 8,
    time: "50 min",
    summary: "The classic all-in-one method, filled with jam and buttercream.",
    ingredients: [
      { q: 200, u: "g", n: "soft butter, plus extra for the tins" },
      { q: 200, u: "g", n: "caster sugar" },
      { q: 4, u: "", n: "large eggs" },
      { q: 200, u: "g", n: "self-raising flour" },
      { q: 1, u: "tsp", n: "baking powder" },
      { q: 2, u: "tbsp", n: "milk" },
      { q: 100, u: "g", n: "butter for the buttercream" },
      { q: 140, u: "g", n: "icing sugar" },
      { q: 4, u: "tbsp", n: "strawberry or raspberry jam" },
      { text: "Caster sugar for dusting" }
    ],
    steps: [
      { t: "Heat the oven to 190°C (170°C fan, gas 5). Butter two 20cm sandwich tins and line the bases with baking paper." },
      { t: "Put {0}, {1}, {2}, {3}, {4} and {5} in a large bowl and beat until smooth and just combined. Don't overmix." },
      { t: "Divide between the tins, level the tops and bake until golden and a skewer comes out clean.", timer: 1200, label: "Sponges" },
      { t: "Cool in the tins for 5 minutes, then turn out onto a wire rack to cool completely.", timer: 300, label: "Cool in tins" },
      { t: "For the buttercream, beat {6|butter} and {7} together until pale and fluffy." },
      { t: "Spread {8} on one sponge and the buttercream on the other, sandwich together and dust the top with caster sugar." }
    ],
    notes: "Best eaten the same day. Keeps 2 days in a tin."
  },
  {
    id: "banana-bread",
    tags: ["Baking", "Snack", "Vegetarian", "Freezer friendly", "Budget"],
    minutes: 75,
    effort: 1,
    emoji: "🍌",
    title: "Easy Banana Bread",
    category: "Baking",
    serves: 10,
    time: "1 hr 15 min",
    summary: "One bowl, and it uses up your blackest bananas.",
    ingredients: [
      { q: 3, u: "", n: "very ripe bananas" },
      { q: 100, u: "g", n: "butter, melted" },
      { q: 140, u: "g", n: "light brown soft sugar" },
      { q: 2, u: "", n: "eggs" },
      { q: 1, u: "tsp", n: "vanilla extract" },
      { q: 225, u: "g", n: "self-raising flour" },
      { q: 1, u: "tsp", n: "ground cinnamon" },
      { q: 50, u: "g", n: "walnuts or chocolate chips (optional)" }
    ],
    steps: [
      { t: "Heat the oven to 180°C (160°C fan, gas 4). Grease and line a 900g (2lb) loaf tin." },
      { t: "Mash {0} in a large bowl, then stir in {1|melted butter}, {2}, {3} and {4}." },
      { t: "Fold in {5}, {6} and {7} until just combined." },
      { t: "Pour into the tin and bake until risen and a skewer comes out clean. Cover with foil if it browns too fast.", timer: 3300, label: "Banana bread" },
      { t: "Cool in the tin for 10 minutes, then lift out onto a rack.", timer: 600, label: "Cool in tin" }
    ],
    notes: "Wrapped well, it keeps 4 days and freezes in slices."
  },
  {
    id: "roast-chicken",
    tags: ["Dinner", "Chicken", "Weekend"],
    minutes: 105,
    effort: 2,
    emoji: "🍗",
    title: "Simple Roast Chicken",
    category: "Mains",
    serves: 4,
    time: "1 hr 45 min",
    summary: "Lemon and garlic roast chicken with easy gravy.",
    ingredients: [
      { q: 1.6, u: "kg", n: "whole chicken" },
      { q: 1, u: "", n: "lemon, halved" },
      { q: 1, u: "", n: "garlic bulb, halved across" },
      { q: 25, u: "g", n: "soft butter" },
      { q: 2, u: "", n: "onions, thickly sliced" },
      { q: 1, u: "tbsp", n: "plain flour" },
      { q: 400, u: "ml", n: "chicken stock" },
      { text: "Salt, pepper and a few thyme sprigs" }
    ],
    steps: [
      { t: "Take the chicken out of the fridge 30 minutes before cooking. Heat the oven to 200°C (180°C fan, gas 6).", timer: 1800, label: "Chicken to room temp" },
      { t: "Lay {4} in a roasting tin and sit {0} on top. Stuff {1|lemon halves}, {2|garlic bulb halves} and the thyme into the cavity. Rub {3} over the skin and season well." },
      { t: "Roast for about 20 minutes per 500g plus 20 minutes (around 1 hr 25 for a 1.6kg bird), until the juices run clear and the thickest part reaches 75°C.", timer: 5100, label: "Roast chicken" },
      { t: "Lift the chicken onto a board, cover loosely with foil and rest.", timer: 900, label: "Rest chicken" },
      { t: "While it rests, put the tin on the hob, stir {5} into the juices and onions, then whisk in {6}. Bubble until thickened, then strain into a jug.", timer: 300, label: "Gravy" }
    ],
    notes: "Use the carcass to make stock for the leek & potato soup."
  },
  {
    id: "pancakes",
    tags: ["Breakfast", "Dessert", "Vegetarian", "Budget"],
    minutes: 20,
    effort: 1,
    emoji: "🥞",
    title: "Thin British Pancakes",
    category: "Breakfast",
    serves: 4,
    time: "20 min",
    summary: "Shrove Tuesday style, with lemon and sugar.",
    ingredients: [
      { q: 100, u: "g", n: "plain flour" },
      { q: 2, u: "", n: "large eggs" },
      { q: 300, u: "ml", n: "milk" },
      { q: 1, u: "tbsp", n: "sunflower oil, plus extra for frying" },
      { text: "Pinch of salt" },
      { text: "Lemon wedges and caster sugar to serve" }
    ],
    steps: [
      { t: "Whisk {0}, {1}, {2}, {3} and a pinch of salt into a smooth batter. Rest it if you have time.", timer: 1800, label: "Rest batter" },
      { t: "Heat a non-stick frying pan over a medium heat and wipe it with a little oil." },
      { t: "Pour in a small ladleful of batter and swirl to coat the base thinly. Cook until golden underneath.", timer: 60, label: "First side" },
      { t: "Flip and cook the other side.", timer: 30, label: "Second side" },
      { t: "Serve straight away with lemon and sugar, or keep warm in a low oven while you cook the rest." }
    ],
    notes: "Makes about 8 pancakes."
  },
  {
    id: "lemon-yoghurt-cake",
    tags: ["Baking", "Dessert", "Vegetarian"],
    minutes: 65,
    effort: 1,
    emoji: "🍋",
    title: "Glazed Lemon Yoghurt Cake",
    category: "Baking",
    serves: 10,
    time: "1 hr 5 min",
    summary: "A moist, one-bowl lemon cake with a drippy lemon glaze. Based on RecipeTin Eats.",
    ingredients: [
      { q: 160, u: "ml", n: "vegetable or sunflower oil" },
      { q: 2, u: "", n: "large egg" },
      { q: 1.5, u: "tbsp", n: "lemon zest, finely grated (about 2 lemons)" },
      { q: 60, u: "ml", n: "lemon juice" },
      { q: 250, u: "g", n: "thick plain yoghurt (full fat is best)" },
      { q: 250, u: "g", n: "caster sugar" },
      { q: 300, u: "g", n: "plain flour" },
      { q: 4, u: "tsp", n: "baking powder" },
      { text: "Pinch of salt" },
      { q: 210, u: "g", n: "icing sugar, for the glaze" },
      { q: 1, u: "tbsp", n: "lemon juice, for the glaze" },
      { q: 1.5, u: "tbsp", n: "plain yoghurt, for the glaze" },
      { text: "Butter for greasing the tin" }
    ],
    steps: [
      { t: "Heat the oven to 180°C (160°C fan, gas 4). Grease a deep 20cm round cake tin (a springform is ideal) with butter and line the base with baking paper." },
      { t: "In a large bowl, whisk together {0}, {1}, {2}, {3}, {4} and {5} until evenly mixed." },
      { t: "Add {6}, {7} and a pinch of salt. Whisk just until smooth; a few small lumps are fine. The batter should be thick but still pourable." },
      { t: "Pour into the tin and bake until well risen and a skewer pushed into the middle comes out clean.", timer: 3000, label: "Lemon cake" },
      { t: "Take the cake out of the tin and leave it on a wire rack to cool. The more it cools, the better the glaze will set.", timer: 1800, label: "Cool cake" },
      { t: "For the glaze, whisk {9|icing sugar}, {10|lemon juice} and {11|yoghurt} until smooth. It should be thick but drip slowly off the whisk. If it's too stiff, add a little more yoghurt a teaspoon at a time." },
      { t: "Sit the cake on the rack over a tray or baking paper. Pour the glaze onto the middle and gently push it towards the edges so it drips down the sides. Leave it to set before moving the cake.", timer: 3600, label: "Glaze setting" }
    ],
    notes: "Allow an extra 1½ hours or so for cooling and setting the glaze. Use thick yoghurt (or sour cream), as fat-free yoghurt is too thin. Some 20cm tins are too shallow and overflow, so use a deep or springform tin. Keeps 5 days in an airtight tin. For a cream cheese frosting instead of the glaze, beat 200g spreadable cream cheese with 240g icing sugar and 2 tbsp lemon juice. Original recipe: recipetineats.com/lemon-cake"
  },
  {
    id: "chicken-machboos",
    tags: ["Dinner", "Chicken", "One pot", "Freezer friendly", "Weekend"],
    minutes: 115,
    effort: 2,
    emoji: "🍚",
    title: "Chicken Machboos (Bahraini Chicken & Rice)",
    category: "Mains",
    serves: 6,
    time: "1 hr 55 min",
    summary: "Fragrant one-pot spiced chicken and basmati rice with dried limes. Based on The Daring Gourmet.",
    ingredients: [
      { q: 1.4, u: "kg", n: "chicken pieces on the bone (mix of thighs, drumsticks and breast)" },
      { q: 375, u: "g", n: "basmati rice" },
      { q: 2, u: "tbsp", n: "vegetable oil" },
      { q: 600, u: "ml", n: "chicken stock" },
      { q: 2, u: "", n: "large onion, diced" },
      { q: 3, u: "tbsp", n: "ghee or butter" },
      { q: 1, u: "tbsp", n: "fresh ginger, finely chopped" },
      { q: 5, u: "", n: "garlic clove, thinly sliced" },
      { q: 1, u: "", n: "green chilli, deseeded and diced (optional)" },
      { q: 1, u: "tbsp", n: "baharat spice mix" },
      { q: 1, u: "tsp", n: "ground turmeric" },
      { q: 2, u: "", n: "large tomato, diced (or a 400g tin, drained)" },
      { q: 2, u: "", n: "dried lime (loomi)" },
      { q: 5, u: "", n: "green cardamom pod" },
      { q: 1, u: "", n: "cinnamon stick" },
      { text: "Pinch of ground cloves" },
      { q: 2.5, u: "tsp", n: "salt" },
      { q: 3, u: "tbsp", n: "fresh coriander, chopped" },
      { q: 2, u: "tbsp", n: "fresh parsley, chopped" },
      { q: 1, u: "tbsp", n: "rose water (optional)" },
      { text: "Green salad and cucumber raita to serve" }
    ],
    steps: [
      { t: "Soak {1} in cold water for at least 15 minutes, then rinse well and drain.", timer: 900, label: "Soak rice" },
      { t: "Heat {2} in a large, deep pan with a lid over a medium-high heat. Brown {0} well on both sides until golden and crisp (in batches if needed), then lift out onto a plate.", timer: 600, label: "Brown chicken" },
      { t: "Turn the heat down to medium. Add {5} and {4} and fry until the onions are soft and just starting to brown.", timer: 660, label: "Fry onions" },
      { t: "Add {6}, {7} and {8} and cook for 2 minutes. Stir in {9} and {10} and cook for 1 minute more.", timer: 180, label: "Spices" },
      { t: "Pierce {12} a few times with a sharp knife. Put the chicken back in the pan with the limes, {11}, {13}, {14}, a pinch of ground cloves, {16} and {3}. Bring to the boil, then cover, turn the heat to low and simmer.", timer: 3600, label: "Simmer chicken" },
      { t: "Stir in {17}, {18} and the drained rice. Bring back to the boil, then cover, turn the heat to low and cook until the rice has soaked up all the liquid.", timer: 1080, label: "Cook rice" },
      { t: "Mix the chicken through the rice or arrange it on top, then sprinkle with {19}. Serve with a green salad and cucumber raita." }
    ],
    notes: "Baharat is in the world foods aisle of bigger supermarkets. To make your own, dry-toast 1 tbsp black peppercorns, 1 tbsp cumin seeds, 2 tsp coriander seeds, a cinnamon stick, 1 tsp whole cloves and ¼ tsp cardamom seeds for 3–4 minutes, cool, then grind with 1 tbsp paprika and ¼ tsp nutmeg (makes extra). Dried limes (loomi) are sold in Middle Eastern shops and online; a couple of pinches of black lime powder will do instead. Leave out the chilli to keep it mild for the kids. Keeps 3–4 days in the fridge or 3 months frozen. Original recipe: daringgourmet.com"
  },
  {
    id: "spaghetti-garlic-oil-chilli",
    tags: ["Dinner", "Lunch", "Vegetarian", "Budget"],
    minutes: 20,
    effort: 1,
    emoji: "🌶️",
    title: "Spaghetti with Garlic, Oil & Chilli",
    category: "Mains",
    serves: 4,
    time: "20 min",
    summary: "Aglio, olio e peperoncino: a 20-minute storecupboard classic. Based on Andy Cooks.",
    ingredients: [
      { q: 400, u: "g", n: "good dried spaghetti" },
      { q: 6, u: "", n: "garlic clove" },
      { q: 4, u: "tbsp", n: "extra virgin olive oil" },
      { q: 1, u: "tsp", n: "dried chilli flakes" },
      { q: 80, u: "g", n: "Parmesan, finely grated, plus extra to serve" },
      { text: "Large handful of flat-leaf parsley" },
      { text: "Sea salt" }
    ],
    steps: [
      { t: "Bring a large pan of well-salted water to the boil. Cook {0}, stirring now and then, until al dente.", timer: 540, label: "Spaghetti" },
      { t: "While it cooks, finely grate {4|Parmesan} and finely chop the parsley." },
      { t: "Lightly crush {1} with the flat of a knife and cut them in half. Put them in a large, deep frying pan with {2} over a low heat. Let them sizzle gently, stirring now and then, until pale golden. Don't let them brown or the sauce will taste bitter.", timer: 300, label: "Garlic oil" },
      { t: "Add {3} and cook for 30 seconds.", timer: 30, label: "Chilli" },
      { t: "Scoop out a mug of the pasta water. Lift the spaghetti straight into the frying pan with tongs, add a splash of the pasta water and toss constantly until the oil and water come together into a glossy sauce. If it looks oily, add more water and keep tossing." },
      { t: "Toss in the Parmesan, then most of the parsley, and season with salt to taste." },
      { t: "Serve straight away, topped with the rest of the parsley and extra Parmesan." }
    ],
    notes: "The original serves 1 with 200g pasta; this is scaled to 4 normal portions of 100g. Use your best olive oil and good spaghetti, as the starch makes the sauce. Halve the chilli for kids. Parmesan isn't strictly vegetarian, so use a vegetarian Italian-style hard cheese if needed. Garlic time is a guide: go by colour. Original recipe: andy-cooks.com"
  }
];
