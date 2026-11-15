/* Kitchen Helper recipe book.
   To add a recipe, copy one block below and edit it.
   Ingredient: { q: amount (number, scales with servings), u: "unit", n: "name" }
               or { text: "something that doesn't scale" }
   Step:       { t: "instruction", timer: seconds (optional), label: "timer name" (optional) }
*/
window.KITCHEN_RECIPES = [
  {
    id: "bolognese",
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
      { q: 400, u: "g", n: "tin chopped tomatoes" },
      { q: 150, u: "ml", n: "beef stock or red wine" },
      { q: 1, u: "tsp", n: "dried oregano" },
      { q: 350, u: "g", n: "spaghetti" },
      { text: "Salt, pepper and grated Parmesan to serve" }
    ],
    steps: [
      { t: "Heat the oil in a large pan over a medium heat. Add the onion, carrot and celery with a pinch of salt and cook gently until soft.", timer: 600, label: "Soften veg" },
      { t: "Add the garlic and cook for 1 minute.", timer: 60, label: "Garlic" },
      { t: "Turn the heat up, add the mince and break it up with a spoon. Fry until browned all over.", timer: 300, label: "Brown mince" },
      { t: "Stir in the tomato purée, then the chopped tomatoes, stock (or wine) and oregano. Bring to a simmer." },
      { t: "Cover with a lid slightly ajar and simmer gently, stirring now and then. Add a splash of water if it gets too thick.", timer: 1800, label: "Simmer sauce" },
      { t: "Meanwhile, cook the spaghetti in plenty of salted boiling water according to the packet (usually about 10 minutes).", timer: 600, label: "Spaghetti" },
      { t: "Season the sauce to taste. Drain the pasta, saving a cup of the water, and toss through the sauce, loosening with pasta water if needed. Serve with Parmesan." }
    ],
    notes: "Freezes for up to 3 months. A splash of milk in the last 10 minutes makes it silkier."
  },
  {
    id: "leek-potato-soup",
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
      { t: "Melt the butter in a large pan. Add the leeks and onion with a pinch of salt, cover and sweat gently without browning.", timer: 600, label: "Sweat leeks" },
      { t: "Add the potatoes and stock. Bring to the boil, then simmer until the potatoes are completely soft.", timer: 1200, label: "Simmer soup" },
      { t: "Blend until smooth (or leave chunky if you prefer). Stir in the cream or milk and reheat gently without boiling." },
      { t: "Season well and serve scattered with chives." }
    ],
    notes: "Keeps 3 days in the fridge. Freeze before adding the cream."
  },
  {
    id: "victoria-sponge",
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
      { t: "Put the butter, sugar, eggs, flour, baking powder and milk in a large bowl and beat until smooth and just combined. Don't overmix." },
      { t: "Divide between the tins, level the tops and bake until golden and a skewer comes out clean.", timer: 1200, label: "Sponges" },
      { t: "Cool in the tins for 5 minutes, then turn out onto a wire rack to cool completely.", timer: 300, label: "Cool in tins" },
      { t: "Beat the butter and icing sugar together until pale and fluffy." },
      { t: "Spread jam on one sponge and buttercream on the other, sandwich together and dust the top with caster sugar." }
    ],
    notes: "Best eaten the same day. Keeps 2 days in a tin."
  },
  {
    id: "banana-bread",
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
      { t: "Mash the bananas in a large bowl, then stir in the melted butter, sugar, eggs and vanilla." },
      { t: "Fold in the flour, cinnamon and any nuts or chocolate until just combined." },
      { t: "Pour into the tin and bake until risen and a skewer comes out clean. Cover with foil if it browns too fast.", timer: 3300, label: "Banana bread" },
      { t: "Cool in the tin for 10 minutes, then lift out onto a rack.", timer: 600, label: "Cool in tin" }
    ],
    notes: "Wrapped well, it keeps 4 days and freezes in slices."
  },
  {
    id: "roast-chicken",
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
      { t: "Lay the onions in a roasting tin and sit the chicken on top. Stuff the lemon, garlic and thyme into the cavity. Rub the butter over the skin and season well." },
      { t: "Roast for about 20 minutes per 500g plus 20 minutes (around 1 hr 25 for a 1.6kg bird), until the juices run clear and the thickest part reaches 75°C.", timer: 5100, label: "Roast chicken" },
      { t: "Lift the chicken onto a board, cover loosely with foil and rest.", timer: 900, label: "Rest chicken" },
      { t: "While it rests, put the tin on the hob, stir the flour into the juices and onions, then whisk in the stock. Bubble until thickened, then strain into a jug.", timer: 300, label: "Gravy" }
    ],
    notes: "Use the carcass to make stock for the leek & potato soup."
  },
  {
    id: "pancakes",
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
      { t: "Whisk the flour, eggs, milk, oil and salt into a smooth batter. Rest it if you have time.", timer: 1800, label: "Rest batter" },
      { t: "Heat a non-stick frying pan over a medium heat and wipe it with a little oil." },
      { t: "Pour in a small ladleful of batter and swirl to coat the base thinly. Cook until golden underneath.", timer: 60, label: "First side" },
      { t: "Flip and cook the other side.", timer: 30, label: "Second side" },
      { t: "Serve straight away with lemon and sugar, or keep warm in a low oven while you cook the rest." }
    ],
    notes: "Makes about 8 pancakes."
  }
];
