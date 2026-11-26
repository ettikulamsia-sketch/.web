// ==========================================
// American Fried Chicken Kambil - script.js
// Menu, Cart, WhatsApp Checkout, GPS Pin,
// Order Tracker & Live Admin Dashboard (PIN: 106648)
// ==========================================

const defaultMenuItems = [
    // FRIED CHICKEN (2 Pcs to 22 Pcs & Poppy Chick)
    {
        id: 1,
        name: "2 Pcs Chicken Combo",
        category: "Fried Chicken",
        price: 199,
        image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=800&auto=format&fit=crop",
        tag: "Offer ₹199",
        desc: "2 Pcs Crispy Fried Chicken, 1 Bun, 1 Mayonnaise, French Fries & Ketchup."
    },
    {
        id: 2,
        name: "3 Pcs Chicken Combo",
        category: "Fried Chicken",
        price: 299,
        image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=800&auto=format&fit=crop",
        tag: "Offer ₹299",
        desc: "3 Pcs Crispy Fried Chicken, 1 Bun, 1 Mayonnaise, French Fries & Ketchup."
    },
    {
        id: 3,
        name: "4 Pcs Chicken Combo",
        category: "Fried Chicken",
        price: 399,
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=800&auto=format&fit=crop",
        tag: "Offer ₹399",
        desc: "4 Pcs Crispy Fried Chicken, 2 Buns, 2 Mayonnaise, French Fries & Ketchup."
    },
    {
        id: 4,
        name: "6 Pcs Chicken Bucket",
        category: "Fried Chicken",
        price: 569,
        image: "https://images.unsplash.com/photo-1569058242253-92a9c755aaec?q=80&w=800&auto=format&fit=crop",
        tag: "Offer ₹569",
        desc: "6 Pcs Crispy Fried Chicken, 3 Buns, 3 Mayonnaise, French Fries & Coleslaws."
    },
    {
        id: 5,
        name: "8 Pcs Chicken Bucket",
        category: "Fried Chicken",
        price: 749,
        image: "https://images.unsplash.com/photo-1569058242253-92a9c755aaec?q=80&w=800&auto=format&fit=crop",
        tag: "Offer ₹749",
        desc: "8 Pcs Crispy Fried Chicken, 4 Buns, 3 Mayonnaise, French Fries, Ketchup & 1 Coleslaw."
    },
    {
        id: 6,
        name: "10 Pcs Chicken Bucket",
        category: "Fried Chicken",
        price: 999,
        image: "https://images.unsplash.com/photo-1569058242253-92a9c755aaec?q=80&w=800&auto=format&fit=crop",
        tag: "Family Pack",
        desc: "10 Pcs Crispy Fried Chicken, 4 Buns, 4 Mayonnaise, French Fries, Ketchup & 1 Coleslaw."
    },
    {
        id: 7,
        name: "12 Pcs Chicken Bucket",
        category: "Fried Chicken",
        price: 1149,
        image: "https://images.unsplash.com/photo-1569058242253-92a9c755aaec?q=80&w=800&auto=format&fit=crop",
        tag: "With 750ml Drink",
        desc: "12 Pcs Chicken, 5 Buns, 5 Mayonnaise, French Fries, 2 Coleslaws & 750 ml. Drink."
    },
    {
        id: 8,
        name: "14 Pcs Chicken Bucket",
        category: "Fried Chicken",
        price: 1299,
        image: "https://images.unsplash.com/photo-1569058242253-92a9c755aaec?q=80&w=800&auto=format&fit=crop",
        tag: "With 1.25L Drink",
        desc: "14 Pcs Chicken, 6 Buns, 6 Mayonnaise, French Fries, 2 Coleslaws & 1.250 ltr. Drink."
    },
    {
        id: 9,
        name: "16 Pcs Chicken Bucket",
        category: "Fried Chicken",
        price: 1549,
        image: "https://images.unsplash.com/photo-1569058242253-92a9c755aaec?q=80&w=800&auto=format&fit=crop",
        tag: "With 2.25L Drink",
        desc: "16 Pcs Chicken, 7 Buns, 7 Mayonnaise, French Fries, 3 Coleslaws & 2.250 ltr. Drink."
    },
    {
        id: 10,
        name: "22 Pcs Chicken Bucket",
        category: "Fried Chicken",
        price: 1989,
        image: "https://images.unsplash.com/photo-1569058242253-92a9c755aaec?q=80&w=800&auto=format&fit=crop",
        tag: "Mega Party Pack",
        desc: "22 Pcs Chicken, 8 Buns, 8 Mayonnaise, French Fries, 3 Coleslaws & 2.250 ltr. Drink."
    },
    {
        id: 11,
        name: "Poppy Chick (Small)",
        category: "Fried Chicken",
        price: 99,
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=800&auto=format&fit=crop",
        tag: "Small",
        desc: "Crunchy bite-sized AFC Poppy Chick popcorn chicken."
    },
    {
        id: 12,
        name: "Poppy Chick (Large)",
        category: "Fried Chicken",
        price: 159,
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=800&auto=format&fit=crop",
        tag: "Large",
        desc: "Large bucket of crunchy AFC Poppy Chick popcorn chicken."
    },

    // LOADED FRIES
    {
        id: 21,
        name: "Spice Kick Loaded Fries (Medium)",
        category: "Loaded Fries",
        price: 189,
        image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=800&auto=format&fit=crop",
        tag: "Medium • Spicy",
        desc: "Medium AFC cup loaded with crispy fries, melted cheese sauce, spicy kick drizzle & herbs."
    },
    {
        id: 22,
        name: "Spice Kick Loaded Fries (Large)",
        category: "Loaded Fries",
        price: 249,
        image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=800&auto=format&fit=crop",
        tag: "Large • Spicy",
        desc: "Large cup of golden fries smothered in melted cheese, spicy red sauce & herbs."
    },
    {
        id: 23,
        name: "Melt Prime Loaded Fries (Medium)",
        category: "Loaded Fries",
        price: 179,
        image: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?q=80&w=800&auto=format&fit=crop",
        tag: "Medium • Bestseller",
        desc: "Medium tray of crispy fries topped with fried chicken strips, creamy cheese melt & jalapenos."
    },
    {
        id: 24,
        name: "Melt Prime Loaded Fries (Large)",
        category: "Loaded Fries",
        price: 239,
        image: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?q=80&w=800&auto=format&fit=crop",
        tag: "Large • Bestseller",
        desc: "Large tray of crispy fries topped with crunchy chicken chunks, creamy melt sauce & jalapenos."
    },
    {
        id: 25,
        name: "French Fries",
        category: "Loaded Fries",
        price: 69,
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=800&auto=format&fit=crop",
        tag: "Classic",
        desc: "Hot & crispy AFC signature salted French fries."
    },

    // ROLL ZONE
    {
        id: 31,
        name: "OG Wrap",
        category: "Roll Zone",
        price: 69,
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=800&auto=format&fit=crop",
        tag: "Value Bite",
        desc: "Original AFC grilled tortilla wrap stuffed with crispy chicken, veggies & signature sauce."
    },
    {
        id: 32,
        name: "Crispy Twister",
        category: "Roll Zone",
        price: 109,
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=800&auto=format&fit=crop",
        tag: "Bestseller",
        desc: "Extra crunchy fried chicken strips wrapped with fresh lettuce, tomatoes & pepper mayo."
    },
    {
        id: 33,
        name: "Crispy Twister Meal",
        category: "Roll Zone",
        price: 149,
        image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=800&auto=format&fit=crop",
        tag: "Combo Meal",
        desc: "1 Crispy Twister roll served with a portion of golden French fries."
    },

    // MOMOS
    {
        id: 41,
        name: "Classic Momos",
        category: "Momos",
        price: 99,
        image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?q=80&w=800&auto=format&fit=crop",
        tag: "7 Pcs",
        desc: "7 Pc. juicy chicken momos served with 1 creamy mayonnaise dip."
    },
    {
        id: 42,
        name: "Periperi Momos",
        category: "Momos",
        price: 140,
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=800&auto=format&fit=crop",
        tag: "7 Pcs • Spicy",
        desc: "7 Pc. spicy peri-peri seasoned momos served with 1 creamy mayonnaise dip."
    },

    // COMBOS, MEALS & PARTY BOX
    {
        id: 51,
        name: "Chicken Nuggets Meal",
        category: "Combos & Meals",
        price: 269,
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=800&auto=format&fit=crop",
        tag: "Combo",
        desc: "12 Pcs Crispy Chicken Nuggets + Pepsi (250 ml.) + French Fries."
    },
    {
        id: 52,
        name: "Chicken Strip Meal",
        category: "Combos & Meals",
        price: 299,
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=800&auto=format&fit=crop",
        tag: "10 Pcs Strips",
        desc: "10 Pcs. Crispy Strips Chicken + French Fries & Ketchup."
    },
    {
        id: 53,
        name: "Power Crunch Combo",
        category: "Combos & Meals",
        price: 229,
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=800&auto=format&fit=crop",
        tag: "Bestseller",
        desc: "1 Crispy Burger + 1 Pc. Fried Chicken + French Fries + Ketchup."
    },
    {
        id: 54,
        name: "Besties Meal",
        category: "Combos & Meals",
        price: 339,
        image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=800&auto=format&fit=crop",
        tag: "For Two",
        desc: "1 Pc. Fried Chicken + 6 Pc. Strips Chicken + French Fries + Ketchup."
    },
    {
        id: 55,
        name: "Momos Meal",
        category: "Combos & Meals",
        price: 269,
        image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?q=80&w=800&auto=format&fit=crop",
        tag: "15 Pcs Momos",
        desc: "15 Pc. Momos + 1 Mayonnaise + French Fries."
    },
    {
        id: 56,
        name: "AFC Party Box (Per Box)",
        category: "Combos & Meals",
        price: 99,
        image: "https://images.unsplash.com/photo-1569058242253-92a9c755aaec?q=80&w=800&auto=format&fit=crop",
        tag: "Min. 150 Boxes",
        desc: "1 Pc. Chicken, Ketchup, Bun 1 Pc. (Minimum 150 Box Required for event orders)."
    },

    // BURGERS
    {
        id: 101,
        name: "Kids Pop Burger",
        category: "Burgers",
        price: 79,
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop",
        tag: "Kids Special",
        desc: "Bite-sized crispy chicken pops layered with fresh lettuce and creamy mayo in a soft bun."
    },
    {
        id: 102,
        name: "Kids Burger",
        category: "Burgers",
        price: 79,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
        tag: "",
        desc: "Mildly seasoned crispy fried chicken patty with fresh veggies and mild mayo."
    },
    {
        id: 103,
        name: "Mini Burger",
        category: "Burgers",
        price: 49,
        image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=800&auto=format&fit=crop",
        tag: "Budget Bite",
        desc: "Pocket-friendly mini crispy chicken burger packed with signature AFC sauce."
    },
    {
        id: 104,
        name: "Spicy Crispy Burger",
        category: "Burgers",
        price: 119,
        image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=800&auto=format&fit=crop",
        tag: "Spicy",
        desc: "Fiery crunchy fried chicken fillet topped with spicy mayo and crisp iceberg lettuce."
    },
    {
        id: 105,
        name: "Chicken Cheese Burger",
        category: "Burgers",
        price: 139,
        image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=800&auto=format&fit=crop",
        tag: "Cheesy",
        desc: "Golden fried chicken patty loaded with melted cheddar cheese slice and creamy sauce."
    },
    {
        id: 106,
        name: "Crispy Double Burger",
        category: "Burgers",
        price: 169,
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=800&auto=format&fit=crop",
        tag: "Bestseller",
        desc: "Double stacked extra-crispy chicken fillets with cheese, fresh veggies, and signature dip."
    },
    {
        id: 107,
        name: "Chilli Chicken Burger",
        category: "Burgers",
        price: 139,
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=800&auto=format&fit=crop",
        tag: "Hot & Tangy",
        desc: "Crispy chicken patty tossed in bold chilli glaze with jalapenos and lettuce."
    },
    {
        id: 108,
        name: "Crazy Beef Burger",
        category: "Burgers",
        price: 129,
        image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=800&auto=format&fit=crop",
        tag: "Chef's Special",
        desc: "Juicy grilled beef patty layered with cheese, caramelized onions, tomatoes & smoky sauce."
    },
    {
        id: 109,
        name: "Veg. Burger",
        category: "Burgers",
        price: 99,
        image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?q=80&w=800&auto=format&fit=crop",
        tag: "Veg",
        desc: "Crispy golden vegetable patty topped with fresh tomatoes, lettuce, and tangy mayo."
    },
    {
        id: 110,
        name: "Double Veg. Burger",
        category: "Burgers",
        price: 149,
        image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=800&auto=format&fit=crop",
        tag: "Veg Feast",
        desc: "Two crunchy veg patties stacked with cheese, crisp lettuce, and creamy herb dressing."
    },
    {
        id: 111,
        name: "Chicken Momos Burger",
        category: "Burgers",
        price: 139,
        image: "https://images.unsplash.com/photo-1615297928064-24977384d0da?q=80&w=800&auto=format&fit=crop",
        tag: "Fusion Hit",
        desc: "Crispy fried chicken momos stuffed inside a toasted burger bun with spicy sauce."
    },

    // PIZZAS
    {
        id: 201,
        name: "Tandoor Veg. Pizza (Medium)",
        category: "Pizza",
        price: 280,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop",
        tag: "Medium • Veg",
        desc: "Paneer, onion, capsicum, tomato, sauce & cheese."
    },
    {
        id: 202,
        name: "Tandoor Veg. Pizza (Large)",
        category: "Pizza",
        price: 365,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop",
        tag: "Large • Veg",
        desc: "Large size loaded with paneer, onion, capsicum, tomato, sauce & cheese."
    },
    {
        id: 203,
        name: "Margherita Pizza (Medium)",
        category: "Pizza",
        price: 285,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop",
        tag: "Medium • Classic",
        desc: "Classic cheese & signature tomato pizza sauce."
    },
    {
        id: 204,
        name: "Margherita Pizza (Large)",
        category: "Pizza",
        price: 389,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop",
        tag: "Large • Classic",
        desc: "Large Margherita loaded with extra mozzarella cheese & sauce."
    },
    {
        id: 205,
        name: "BBQ Chicken Pizza (Medium)",
        category: "Pizza",
        price: 349,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop",
        tag: "Medium • Popular",
        desc: "BBQ chicken, onion, capsicum, sauce & cheese."
    },
    {
        id: 206,
        name: "BBQ Chicken Pizza (Large)",
        category: "Pizza",
        price: 489,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop",
        tag: "Large • Bestseller",
        desc: "Large crust loaded with BBQ chicken, onion, capsicum, sauce & cheese."
    },
    {
        id: 207,
        name: "Crispy Chicken Pizza (Medium)",
        category: "Pizza",
        price: 339,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop",
        tag: "Medium • Crunchy",
        desc: "Crispy fried chicken, onion, capsicum, sauce & cheese."
    },
    {
        id: 208,
        name: "Crispy Chicken Pizza (Large)",
        category: "Pizza",
        price: 479,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop",
        tag: "Large • Crunchy",
        desc: "Large pizza topped with crispy fried chicken, onion, capsicum, sauce & cheese."
    },
    {
        id: 209,
        name: "Farm Fresh Pizza (Medium)",
        category: "Pizza",
        price: 299,
        image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?q=80&w=800&auto=format&fit=crop",
        tag: "Medium • Veg",
        desc: "Onion, capsicum, mushroom, tomato, sauce & cheese."
    },
    {
        id: 210,
        name: "Farm Fresh Pizza (Large)",
        category: "Pizza",
        price: 399,
        image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?q=80&w=800&auto=format&fit=crop",
        tag: "Large • Veg",
        desc: "Large Farm Fresh with onion, capsicum, mushroom, tomato, sauce & cheese."
    },
    {
        id: 211,
        name: "Tandoori Chicken Pizza (Medium)",
        category: "Pizza",
        price: 329,
        image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=800&auto=format&fit=crop",
        tag: "Medium • Spicy",
        desc: "Spiced tandoori chicken, onion, capsicum, sauce & cheese."
    },
    {
        id: 212,
        name: "Tandoori Chicken Pizza (Large)",
        category: "Pizza",
        price: 469,
        image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=800&auto=format&fit=crop",
        tag: "Large • Spicy",
        desc: "Large Tandoori Chicken pizza with onion, capsicum, sauce & cheese."
    },

    // ADD-ONS & DRINKS
    {
        id: 301,
        name: "Add-On Combo (1.25 Ltr Pepsi)",
        category: "Add-Ons & Drinks",
        price: 163,
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop",
        tag: "Value Add-On",
        desc: "Pepsi 1.25 Ltr + French Fries + 5 Buns + Coleslaw."
    },
    {
        id: 302,
        name: "Add-On Combo (750 ml Pepsi)",
        category: "Add-Ons & Drinks",
        price: 137,
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop",
        tag: "Value Add-On",
        desc: "Pepsi 750 ml + French Fries + 4 Buns + Coleslaw."
    },
    {
        id: 303,
        name: "Choice Chicken Piece",
        category: "Add-Ons & Drinks",
        price: 110,
        image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=800&auto=format&fit=crop",
        tag: "Add-On",
        desc: "1 Choice piece of hot & crispy AFC fried chicken."
    },
    {
        id: 304,
        name: "One Piece Chicken",
        category: "Add-Ons & Drinks",
        price: 99,
        image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=800&auto=format&fit=crop",
        tag: "Add-On",
        desc: "1 Piece signature AFC crispy fried chicken."
    },
    {
        id: 305,
        name: "Extra Cheese (Pizza Add-On)",
        category: "Add-Ons & Drinks",
        price: 69,
        image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=800&auto=format&fit=crop",
        tag: "Pizza Topping",
        desc: "Extra mozzarella cheese topping for pizzas."
    },
    {
        id: 306,
        name: "Extra Cheese Slice",
        category: "Add-Ons & Drinks",
        price: 20,
        image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=800&auto=format&fit=crop",
        tag: "Add-On",
        desc: "Extra cheese slice add-on."
    },
    {
        id: 307,
        name: "Coleslaw",
        category: "Add-Ons & Drinks",
        price: 30,
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop",
        tag: "Side",
        desc: "Fresh creamy AFC coleslaw salad cup."
    },
    {
        id: 308,
        name: "Mayonnaise",
        category: "Add-Ons & Drinks",
        price: 20,
        image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=800&auto=format&fit=crop",
        tag: "Dip",
        desc: "Creamy AFC signature mayonnaise dip cup."
    },
    {
        id: 309,
        name: "Garlic Paste",
        category: "Add-Ons & Drinks",
        price: 20,
        image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=800&auto=format&fit=crop",
        tag: "Dip",
        desc: "Rich garlic paste dip cup."
    },
    {
        id: 310,
        name: "Bun",
        category: "Add-Ons & Drinks",
        price: 10,
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop",
        tag: "Add-On",
        desc: "Soft freshly baked burger bun."
    },
    {
        id: 311,
        name: "Kubhoos",
        category: "Add-Ons & Drinks",
        price: 10,
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop",
        tag: "Add-On",
        desc: "Soft Arabic kubhoos bread."
    },
    {
        id: 312,
        name: "Ketchup",
        category: "Add-Ons & Drinks",
        price: 2,
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=800&auto=format&fit=crop",
        tag: "Sachet",
        desc: "Tomato ketchup sachet."
    },
    {
        id: 313,
        name: "Pepsi / 7Up / Dew / Mirinda (250 ml)",
        category: "Add-Ons & Drinks",
        price: 20,
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop",
        tag: "250 ml",
        desc: "Chilled 250 ml soft drink (Pepsi, 7Up, Mountain Dew, or Mirinda)."
    },
    {
        id: 314,
        name: "Pepsi / 7Up / Dew / Mirinda (750 ml)",
        category: "Add-Ons & Drinks",
        price: 40,
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop",
        tag: "750 ml",
        desc: "Chilled 750 ml soft drink bottle."
    },
    {
        id: 315,
        name: "Pepsi / 7Up / Dew / Mirinda (1.25 Ltr)",
        category: "Add-Ons & Drinks",
        price: 65,
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop",
        tag: "1.25 Ltr",
        desc: "Chilled 1.25 Ltr family soft drink bottle."
    },
    {
        id: 316,
        name: "Pepsi / 7Up / Dew / Mirinda (2.25 Ltr)",
        category: "Add-Ons & Drinks",
        price: 99,
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop",
        tag: "2.25 Ltr",
        desc: "Chilled 2.25 Ltr party soft drink bottle."
    }
];

let menuItems = [];
let cart = [];
let orders = [];
let bookings = [];
let manualSales = 0;
let currentCategory = 'All';
let manageMode = false;
let currentLang = 'EN';
let trackingInterval = null;
let adminLiveTimer = null;

// Load persisted application state from localStorage
function loadFromStorage() {
    try {
        const savedMenu = localStorage.getItem('afc_kambil_menu_official_v2');
        menuItems = savedMenu ? JSON.parse(savedMenu) : [...defaultMenuItems];

        if (!localStorage.getItem('afc_kambil_clean_v1')) {
            localStorage.removeItem('afc_kambil_orders');
            localStorage.removeItem('afc_kambil_bookings');
            localStorage.removeItem('afc_kambil_manual_sales');
            localStorage.setItem('afc_kambil_clean_v1', 'true');
        }

        const savedOrders = localStorage.getItem('afc_kambil_orders');
        orders = savedOrders ? JSON.parse(savedOrders) : [];

        const savedBookings = localStorage.getItem('afc_kambil_bookings');
        bookings = savedBookings ? JSON.parse(savedBookings) : [];

        const savedSales = localStorage.getItem('afc_kambil_manual_sales');
        manualSales = savedSales ? parseFloat(savedSales) || 0 : 0;
    } catch (e) {
        menuItems = [...defaultMenuItems];
        orders = [];
        bookings = [];
        manualSales = 0;
    }
}

// Save current state to localStorage
function saveToStorage() {
    try {
        localStorage.setItem('afc_kambil_menu_official_v2', JSON.stringify(menuItems));
        localStorage.setItem('afc_kambil_orders', JSON.stringify(orders));
        localStorage.setItem('afc_kambil_bookings', JSON.stringify(bookings));
        localStorage.setItem('afc_kambil_manual_sales', String(manualSales));
    } catch (e) {}
}

// Synchronize changes across open tabs/windows
window.addEventListener('storage', (event) => {
    if (
        event.key === 'afc_kambil_orders' ||
        event.key === 'afc_kambil_bookings' ||
        event.key === 'afc_kambil_menu_official_v2' ||
        event.key === 'afc_kambil_manual_sales'
    ) {
        const prevOrderCount = orders.length;
        loadFromStorage();
        renderMenu();
        updateAdminUI();

        if (event.key === 'afc_kambil_orders' && orders.length > prevOrderCount) {
            const adminModal = document.getElementById('admin-modal');
            if (adminModal && !adminModal.classList.contains('hidden')) {
                showToast(`New Live Order Received: ${orders[0].id}!`);
            }
        }

        const trackedId = document.getElementById('track-order-id-input')?.value.trim();
        if (trackedId) {
            syncCustomerTrackerWithAdmin(trackedId);
        }
    }
});

// Display toast notifications
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    const bgColor = type === 'error' ? 'bg-red-600' : 'bg-emerald-600';
    toast.className = `${bgColor} text-white px-5 py-3 rounded-xl shadow-2xl text-sm font-bold flex items-center gap-2.5 transform transition-all duration-300 translate-y-2 opacity-0 pointer-events-auto border border-white/10`;
    toast.innerHTML = `<i class="fa-solid ${type === 'error' ? 'fa-circle-exclamation' : 'fa-circle-check'}"></i><span>${message}</span>`;
    container.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.remove('translate-y-2', 'opacity-0');
    });

    setTimeout(() => {
        toast.classList.add('translate-y-2', 'opacity-0');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Toggle English / Malayalam text elements
function toggleLanguage() {
    currentLang = currentLang === 'EN' ? 'ML' : 'EN';
    const langLabel = document.getElementById('lang-label');
    if (langLabel) {
        langLabel.textContent = currentLang === 'EN' ? 'MALAYALAM' : 'ENGLISH';
    }
    document.querySelectorAll('[data-ml]').forEach(el => {
        el.textContent = currentLang === 'ML' ? el.getAttribute('data-ml') : el.getAttribute('data-en');
    });
    showToast(currentLang === 'ML' ? 'മലയാളത്തിലേക്ക് മാറ്റി' : 'Switched to English');
}

// Filter menu items by category
function filterCategory(category) {
    currentCategory = category;
    document.querySelectorAll('.cat-btn').forEach(btn => {
        if (btn.textContent.includes(category) || (category === 'All' && btn.textContent.includes('All Items'))) {
            btn.className = 'cat-btn active px-4 py-2 rounded-xl text-sm font-bold bg-amber-500 text-gray-950 transition-all whitespace-nowrap cursor-pointer';
        } else {
            btn.className = 'cat-btn px-4 py-2 rounded-xl text-sm font-semibold text-gray-300 hover:bg-gray-800 transition-all whitespace-nowrap cursor-pointer';
        }
    });
    renderMenu();
}

// Toggle edit/delete buttons on menu cards
function toggleManageMode() {
    manageMode = !manageMode;
    const btnText = document.getElementById('manage-btn-text');
    if (btnText) {
        btnText.textContent = manageMode ? 'Done Editing' : 'Edit / Delete Items';
    }
    renderMenu();
    showToast(manageMode ? 'Edit/Delete mode enabled' : 'Exited edit mode');
}

// Render menu cards into #menu-grid
function renderMenu() {
    const grid = document.getElementById('menu-grid');
    const emptyState = document.getElementById('empty-menu-state');
    const searchInput = document.getElementById('menu-search');
    if (!grid) return;

    const searchTerm = (searchInput ? searchInput.value : '').toLowerCase().trim();

    const filtered = menuItems.filter(item => {
        const matchesCat = currentCategory === 'All' || item.category === currentCategory;
        const matchesSearch = item.name.toLowerCase().includes(searchTerm) || (item.desc && item.desc.toLowerCase().includes(searchTerm));
        return matchesCat && matchesSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = '';
        if (emptyState) emptyState.classList.remove('hidden');
        return;
    }

    if (emptyState) emptyState.classList.add('hidden');
    grid.innerHTML = filtered.map(item => `
        <div class="bg-gray-900 rounded-3xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition-all shadow-xl flex flex-col justify-between group">
            <div>
                <div class="h-52 w-full relative overflow-hidden bg-gray-800">
                    <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.onerror=null;this.src='https://placehold.co/600x400/171717/FBBF24?text=${encodeURIComponent(item.name)}'" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                    <div class="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent"></div>
                    ${item.tag ? `<span class="absolute top-3 left-3 bg-amber-500 text-gray-950 text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">${item.tag}</span>` : ''}
                    <span class="absolute bottom-3 right-3 bg-gray-950/90 text-amber-400 font-display text-xl font-bold px-3.5 py-1 rounded-xl border border-amber-500/30 shadow-lg">₹${item.price}</span>
                </div>
                <div class="p-5">
                    <span class="text-[11px] font-bold uppercase tracking-widest text-amber-400/80">${item.category}</span>
                    <h3 class="font-display text-xl text-white font-bold mt-1">${item.name}</h3>
                    <p class="text-gray-400 text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed">${item.desc || 'Freshly prepared at American Fried Chicken Kambil.'}</p>
                </div>
            </div>
            <div class="px-5 pb-5 pt-2">
                ${manageMode ? `
                    <div class="grid grid-cols-2 gap-2">
                        <button onclick="openEditModal(${item.id})" class="bg-gray-800 hover:bg-gray-700 text-amber-400 font-bold py-2.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer border border-amber-500/30">
                            <i class="fa-solid fa-pen"></i> Edit
                        </button>
                        <button onclick="deleteMenuItem(${item.id})" class="bg-red-900/60 hover:bg-red-700 text-white font-bold py-2.5 rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer border border-red-500/30">
                            <i class="fa-solid fa-trash"></i> Delete
                        </button>
                    </div>
                ` : `
                    <button onclick="addToCart(${item.id})" class="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-gray-950 font-extrabold py-3 rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer">
                        <i class="fa-solid fa-cart-plus"></i> Add to Cart
                    </button>
                `}
            </div>
        </div>
    `).join('');
}

// Open Add Menu Item modal
function openAddModal() {
    document.getElementById('modal-title').textContent = 'ADD NEW MENU ITEM';
    document.getElementById('edit-item-id').value = '';
    document.getElementById('menu-form').reset();
    const defaultImg = 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=800&auto=format&fit=crop';
    document.getElementById('item-image').value = defaultImg;
    updateImagePreview(defaultImg);
    const modal = document.getElementById('menu-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

// Open Edit Menu Item modal
function openEditModal(id) {
    const item = menuItems.find(i => i.id === id);
    if (!item) return;
    document.getElementById('modal-title').textContent = 'EDIT MENU ITEM';
    document.getElementById('edit-item-id').value = item.id;
    document.getElementById('item-name').value = item.name;
    document.getElementById('item-category').value = item.category;
    document.getElementById('item-price').value = item.price;
    document.getElementById('item-image').value = item.image;
    updateImagePreview(item.image);
    document.getElementById('item-tag').value = item.tag || '';
    document.getElementById('item-desc').value = item.desc || '';
    const modal = document.getElementById('menu-modal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function updateImagePreview(url) {
    const preview = document.getElementById('item-image-preview');
    if (preview && url) {
        preview.src = url;
    }
}

function selectPresetImage(url) {
    document.getElementById('item-image').value = url;
    updateImagePreview(url);
}

// Resize and convert uploaded image file to data URL
function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
            const canvas = document.createElement('canvas');
            const maxWidth = 600;
            const scale = Math.min(1, maxWidth / img.width);
            canvas.width = img.width * scale;
            canvas.height = img.height * scale;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.8);
            document.getElementById('item-image').value = compressedDataUrl;
            updateImagePreview(compressedDataUrl);
            showToast('Photo uploaded & ready!');
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function closeModal() {
    const modal = document.getElementById('menu-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

// Save new or edited menu item
function saveMenuItem(e) {
    e.preventDefault();
    const editId = document.getElementById('edit-item-id').value;
    const name = document.getElementById('item-name').value.trim();
    const category = document.getElementById('item-category').value;
    const price = parseFloat(document.getElementById('item-price').value);
    const image = document.getElementById('item-image').value.trim();
    const tag = document.getElementById('item-tag').value.trim();
    const desc = document.getElementById('item-desc').value.trim();

    if (editId) {
        const index = menuItems.findIndex(i => i.id == editId);
        if (index !== -1) {
            menuItems[index] = { ...menuItems[index], name, category, price, image, tag, desc };
            showToast('Menu item updated!');
        }
    } else {
        const newItem = {
            id: Date.now(),
            name,
            category,
            price,
            image,
            tag,
            desc
        };
        menuItems.unshift(newItem);
        showToast('New menu item added!');
    }

    saveToStorage();
    renderMenu();
    updateAdminUI();
    closeModal();
}

function deleteMenuItem(id) {
    menuItems = menuItems.filter(i => i.id !== id);
    saveToStorage();
    renderMenu();
    updateAdminUI();
    showToast('Item removed from menu', 'error');
}

// Cart management
function addToCart(id) {
    const item = menuItems.find(i => i.id === id);
    if (!item) return;

    const existing = cart.find(c => c.id === id);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...item, qty: 1 });
    }
    updateCartUI();
    showToast(`Added ${item.name} to cart`);
}

function updateCartQty(id, delta) {
    const index = cart.findIndex(c => c.id === id);
    if (index === -1) return;
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }
    updateCartUI();
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    const badge = document.getElementById('cart-badge-count');
    const totalEl = document.getElementById('cart-total-price');
    if (badge) badge.textContent = totalItems;
    if (totalEl) totalEl.textContent = `₹${totalPrice}`;

    const container = document.getElementById('cart-items-container');
    const ploioPreview = document.getElementById('ploio-cart-summary-preview');
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `<div class="text-center py-10 text-gray-500 text-sm">Your cart is empty. Add delicious items from our menu!</div>`;
        if (ploioPreview) {
            ploioPreview.innerHTML = `No items in active cart. Add items from the menu below to checkout.`;
        }
        return;
    }

    container.innerHTML = cart.map(item => `
        <div class="flex items-center justify-between gap-3 bg-gray-950 p-3.5 rounded-2xl border border-gray-800">
            <div class="flex items-center gap-3">
                <img src="${item.image}" alt="${item.name}" class="w-12 h-12 rounded-xl object-cover">
                <div>
                    <h4 class="text-sm font-bold text-white leading-tight">${item.name}</h4>
                    <span class="text-xs text-amber-400 font-bold">₹${item.price * item.qty}</span>
                </div>
            </div>
            <div class="flex items-center gap-2 bg-gray-900 rounded-xl p-1 border border-gray-800">
                <button onclick="updateCartQty(${item.id}, -1)" class="w-7 h-7 rounded-lg bg-gray-800 hover:bg-gray-700 text-white text-xs font-bold cursor-pointer">-</button>
                <span class="text-xs font-bold text-white w-5 text-center">${item.qty}</span>
                <button onclick="updateCartQty(${item.id}, 1)" class="w-7 h-7 rounded-lg bg-amber-500 text-gray-950 text-xs font-bold cursor-pointer">+</button>
            </div>
        </div>
    `).join('');

    if (ploioPreview) {
        ploioPreview.innerHTML = `<span class="text-amber-400 font-bold">${totalItems} item(s)</span> ready • Total: <span class="text-white font-bold">₹${totalPrice}</span>`;
    }
}

function toggleCartModal() {
    const modal = document.getElementById('cart-modal');
    if (!modal) return;
    if (modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    } else {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
}

function toggleLocationField() {
    const type = document.getElementById('checkout-type')?.value;
    const wrapper = document.getElementById('checkout-location-wrapper');
    if (wrapper) {
        wrapper.style.display = type === 'Delivery' ? 'block' : 'none';
    }
}

// Detect live GPS coordinates and insert Google Maps link
function detectCustomerLocation() {
    const locationInput = document.getElementById('checkout-location');
    if (!locationInput) return;
    if (!navigator.geolocation) {
        showToast('GPS not supported on this browser', 'error');
        return;
    }
    showToast('Fetching your live GPS location...');
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude.toFixed(6);
            const lng = position.coords.longitude.toFixed(6);
            const mapLink = `https://maps.google.com/?q=${lat},${lng}`;
            locationInput.value = `GPS Pin: ${mapLink}`;
            showToast('Live location pinned!');
        },
        () => {
            showToast('Unable to access GPS. Please type your address.', 'error');
        },
        { enableHighAccuracy: true, timeout: 8000 }
    );
}

// Submit order to WhatsApp and record in live dashboard
function checkoutWhatsApp() {
    if (cart.length === 0) {
        showToast('Please add items to your cart first!', 'error');
        return;
    }
    const name = document.getElementById('checkout-name')?.value.trim() || 'Customer';
    const phone = document.getElementById('checkout-phone')?.value.trim() || 'Not provided';
    const type = document.getElementById('checkout-type')?.value || 'Delivery';
    const payment = document.getElementById('checkout-payment')?.value || 'COD';
    const locationEl = document.getElementById('checkout-location');
    const location = locationEl ? locationEl.value.trim() : '';

    if (type === 'Delivery' && !location) {
        showToast('Please enter your delivery location or click Use Current GPS!', 'error');
        if (locationEl) locationEl.focus();
        return;
    }

    const total = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
    const itemsSummary = cart.map(i => `${i.name} x${i.qty}`).join(', ');
    const finalLocation = type === 'Delivery' ? location : 'Takeaway Pickup';

    const orderId = 'AFC-' + Math.floor(100000 + Math.random() * 900000);
    const newOrder = {
        id: orderId,
        name,
        phone,
        location: finalLocation,
        items: itemsSummary,
        total,
        type,
        status: 'Order Placed',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    orders.unshift(newOrder);
    saveToStorage();
    updateAdminUI();

    const locationLine = type === 'Delivery' ? `*Delivery Location:* ${encodeURIComponent(location)}%0A` : '';
    const itemsList = cart.map(i => `• ${i.name} x${i.qty} = ₹${i.price * i.qty}`).join('%0A');
    const message = `*New Order (${orderId}) - American Fried Chicken Kambil*%0A%0A*Customer:* ${encodeURIComponent(name)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Type:* ${type}%0A${locationLine}*Payment:* ${payment}%0A%0A*Items:*%0A${itemsList}%0A%0A*Total Amount:* ₹${total}`;

    cart = [];
    updateCartUI();
    toggleCartModal();

    const trackInput = document.getElementById('track-order-id-input');
    if (trackInput) {
        trackInput.value = orderId;
        startPloioSimulation(orderId);
    }

    window.open(`https://wa.me/919072113450?text=${message}`, '_blank');
    showToast(`Order ${orderId} sent to WhatsApp!`);
}

// Live order tracker functions
function trackOrderLive() {
    const id = document.getElementById('track-order-id-input')?.value.trim();
    if (!id) {
        showToast('Enter an Order ID to track', 'error');
        return;
    }
    startPloioSimulation(id);
}

function syncCustomerTrackerWithAdmin(orderId) {
    const foundOrder = orders.find(o => o.id.toLowerCase() === orderId.toLowerCase());
    if (!foundOrder) return false;

    const statusToStep = {
        'Order Placed': 1,
        'Preparing': 2,
        'Packing': 3,
        'Out for Delivery': 4,
        'Delivered': 4
    };
    const step = statusToStep[foundOrder.status] || 1;
    updateTrackingStep(step, foundOrder.status);
    return true;
}

function startPloioSimulation(orderId) {
    if (trackingInterval) clearInterval(trackingInterval);
    const badge = document.getElementById('order-id-badge');
    if (badge) {
        badge.textContent = orderId;
        badge.className = 'bg-amber-500/20 text-amber-400 text-xs px-3 py-1.5 rounded-full font-mono border border-amber-500/40 font-bold';
    }

    if (syncCustomerTrackerWithAdmin(orderId)) {
        trackingInterval = setInterval(() => {
            loadFromStorage();
            syncCustomerTrackerWithAdmin(orderId);
        }, 2000);
        return;
    }

    let step = 1;
    updateTrackingStep(step);

    trackingInterval = setInterval(() => {
        step++;
        if (step <= 4) {
            updateTrackingStep(step);
        } else {
            clearInterval(trackingInterval);
        }
    }, 3500);
}

function updateTrackingStep(activeStep, customStatusText = '') {
    for (let i = 1; i <= 4; i++) {
        const icon = document.getElementById(`step-${i}-icon`);
        const title = document.getElementById(`step-${i}-title`);
        if (!icon || !title) continue;
        if (i <= activeStep) {
            icon.className = 'w-8 h-8 rounded-full bg-emerald-500 text-gray-950 flex items-center justify-center font-bold text-xs shrink-0 z-10 shadow-lg shadow-emerald-500/30 transition-all';
            icon.innerHTML = '<i class="fa-solid fa-check"></i>';
            title.className = 'text-sm font-bold text-white';
        } else {
            icon.className = 'w-8 h-8 rounded-full bg-gray-800 text-gray-400 flex items-center justify-center font-bold text-xs shrink-0 z-10 transition-all';
            icon.textContent = i;
            title.className = 'text-sm font-bold text-gray-400';
        }
    }
    const footer = document.getElementById('tracking-footer');
    const messages = [
        'Order confirmed by Kambil kitchen!',
        'Chefs are pressure-frying your chicken fresh...',
        'Packing hot fries, buns, and signature garlic mayo...',
        customStatusText === 'Delivered' ? 'Order Delivered! Enjoy your meal!' : 'Rider is arriving at your doorstep in Kambil!'
    ];
    if (footer) {
        footer.innerHTML = `<p class="text-xs text-emerald-400 font-bold animate-pulse">${messages[activeStep - 1]}</p>`;
    }
}

// Table reservation handler
function submitTableBooking(e) {
    e.preventDefault();
    const name = document.getElementById('book-name').value.trim();
    const phone = document.getElementById('book-phone').value.trim();
    const date = document.getElementById('book-date').value;
    const time = document.getElementById('book-time').value;
    const guests = document.getElementById('book-guests').value;
    const notes = document.getElementById('book-notes').value.trim();

    const booking = {
        id: 'BK-' + Math.floor(100 + Math.random() * 900),
        name, phone, date, time, guests, notes
    };
    bookings.unshift(booking);
    saveToStorage();
    updateAdminUI();
    e.target.reset();
    showToast(`Table booked for ${name} on ${date}!`);
}

// Manual sales entry modal handlers
function openAddSalesModal() {
    const modal = document.getElementById('add-sales-modal');
    const amountInput = document.getElementById('manual-sales-amount');
    const noteInput = document.getElementById('manual-sales-note');
    if (!modal || !amountInput) return;
    amountInput.value = '';
    if (noteInput) noteInput.value = '';
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    setTimeout(() => amountInput.focus(), 100);
}

function closeAddSalesModal() {
    const modal = document.getElementById('add-sales-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

function submitManualSales(e) {
    e.preventDefault();
    const amount = parseFloat(document.getElementById('manual-sales-amount').value);
    const note = document.getElementById('manual-sales-note')?.value.trim() || '';
    if (isNaN(amount) || amount <= 0) {
        showToast('Please enter a valid sales amount', 'error');
        return;
    }
    manualSales += amount;
    saveToStorage();
    updateAdminUI();
    closeAddSalesModal();
    showToast(`Added ₹${amount.toLocaleString()} to Total Sales${note ? ` (${note})` : ''}!`);
}

// Admin authentication & live dashboard
function openAdminModal() {
    const authModal = document.getElementById('admin-auth-modal');
    const passInput = document.getElementById('admin-password-input');
    if (!authModal || !passInput) return;
    passInput.value = '';
    authModal.classList.remove('hidden');
    authModal.classList.add('flex');
    setTimeout(() => passInput.focus(), 100);
}

function closeAdminAuthModal() {
    const authModal = document.getElementById('admin-auth-modal');
    if (!authModal) return;
    authModal.classList.add('hidden');
    authModal.classList.remove('flex');
}

function verifyAdminPassword(e) {
    e.preventDefault();
    const enteredPin = document.getElementById('admin-password-input').value.trim();
    if (enteredPin === '106648') {
        closeAdminAuthModal();
        loadFromStorage();
        updateAdminUI();
        const modal = document.getElementById('admin-modal');
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        startAdminLivePolling();
        showToast('Live Admin Dashboard Unlocked!');
    } else {
        showToast('Incorrect Password! Access Denied.', 'error');
        document.getElementById('admin-password-input').value = '';
        document.getElementById('admin-password-input').focus();
    }
}

function closeAdminModal() {
    const modal = document.getElementById('admin-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    if (adminLiveTimer) {
        clearInterval(adminLiveTimer);
        adminLiveTimer = null;
    }
}

function startAdminLivePolling() {
    if (adminLiveTimer) clearInterval(adminLiveTimer);
    const updateClock = () => {
        const clockEl = document.getElementById('admin-live-clock');
        if (clockEl) {
            clockEl.textContent = new Date().toLocaleTimeString();
        }
    };
    updateClock();
    adminLiveTimer = setInterval(() => {
        updateClock();
        const prevCount = orders.length;
        loadFromStorage();
        if (orders.length !== prevCount) {
            updateAdminUI();
        }
    }, 1000);
}

function updateOrderStatus(orderId, newStatus) {
    const orderIndex = orders.findIndex(o => o.id === orderId);
    if (orderIndex === -1) return;
    orders[orderIndex].status = newStatus;
    saveToStorage();
    updateAdminUI();

    const trackedId = document.getElementById('track-order-id-input')?.value.trim();
    if (trackedId && trackedId.toLowerCase() === orderId.toLowerCase()) {
        syncCustomerTrackerWithAdmin(orderId);
    }
    showToast(`Order ${orderId} updated to "${newStatus}"`);
}

function deleteAdminBooking(bookingId) {
    bookings = bookings.filter(b => b.id !== bookingId);
    saveToStorage();
    updateAdminUI();
    showToast('Reservation removed');
}

function switchAdminTab(tab) {
    ['orders', 'bookings', 'menu'].forEach(t => {
        document.getElementById(`admin-tab-${t}`).classList.add('hidden');
        document.getElementById(`tab-btn-${t}`).className = 'admin-tab-btn px-4 py-2 rounded-xl text-sm font-semibold text-gray-300 hover:bg-gray-800 cursor-pointer';
    });
    document.getElementById(`admin-tab-${tab}`).classList.remove('hidden');
    document.getElementById(`tab-btn-${tab}`).className = 'admin-tab-btn active px-4 py-2 rounded-xl text-sm font-bold bg-amber-500 text-gray-950 cursor-pointer';
}

function clearAdminOrders() {
    orders = [];
    saveToStorage();
    updateAdminUI();
    showToast('Order history cleared');
}

function updateAdminUI() {
    const ordersSales = orders.reduce((sum, o) => sum + (o.total || 0), 0);
    const totalSales = ordersSales + (manualSales || 0);
    const salesEl = document.getElementById('admin-total-sales');
    const ordersCountEl = document.getElementById('admin-today-orders');
    const bookingsCountEl = document.getElementById('admin-active-bookings');
    const menuCountEl = document.getElementById('admin-menu-count');

    if (salesEl) salesEl.textContent = `₹${totalSales.toLocaleString()}`;
    if (ordersCountEl) ordersCountEl.textContent = orders.length;
    if (bookingsCountEl) bookingsCountEl.textContent = bookings.length;
    if (menuCountEl) menuCountEl.textContent = menuItems.length;

    const statusColors = {
        'Order Placed': 'bg-blue-500/20 text-blue-400 border-blue-500/40',
        'Preparing': 'bg-amber-500/20 text-amber-400 border-amber-500/40',
        'Packing': 'bg-purple-500/20 text-purple-400 border-purple-500/40',
        'Out for Delivery': 'bg-orange-500/20 text-orange-400 border-orange-500/40',
        'Delivered': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
    };

    const ordersList = document.getElementById('admin-orders-list');
    if (ordersList) {
        ordersList.innerHTML = orders.length ? orders.map(o => `
            <div class="bg-gray-950 p-4 rounded-2xl border border-gray-800 hover:border-amber-500/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                    <div class="flex items-center gap-2 flex-wrap">
                        <span class="text-xs font-mono text-amber-400 font-bold">${o.id}</span>
                        <span class="text-xs bg-gray-800 text-gray-300 px-2 py-0.5 rounded-md">${o.type || 'Delivery'}</span>
                        ${o.timestamp ? `<span class="text-[11px] text-gray-500">${o.timestamp}</span>` : ''}
                    </div>
                    <div class="text-sm font-bold text-white mt-1">${o.name} <span class="text-xs font-normal text-gray-400">(${o.phone})</span></div>
                    <p class="text-xs text-gray-300 mt-1">${o.items}</p>
                    ${o.location ? `<p class="text-xs text-amber-400/90 mt-1"><i class="fa-solid fa-location-dot mr-1"></i>${o.location}</p>` : ''}
                </div>
                <div class="flex items-center gap-3 self-end sm:self-center">
                    <span class="text-base font-bold text-amber-400">₹${o.total}</span>
                    <select onchange="updateOrderStatus('${o.id}', this.value)" class="text-xs font-bold px-3 py-2 rounded-xl border bg-gray-900 cursor-pointer focus:outline-none ${statusColors[o.status] || 'text-emerald-400 border-emerald-500/40'}">
                        <option value="Order Placed" ${o.status === 'Order Placed' ? 'selected' : ''}>Order Placed</option>
                        <option value="Preparing" ${o.status === 'Preparing' ? 'selected' : ''}>Preparing</option>
                        <option value="Packing" ${o.status === 'Packing' ? 'selected' : ''}>Packing</option>
                        <option value="Out for Delivery" ${o.status === 'Out for Delivery' ? 'selected' : ''}>Out for Delivery</option>
                        <option value="Delivered" ${o.status === 'Delivered' ? 'selected' : ''}>Delivered</option>
                    </select>
                </div>
            </div>
        `).join('') : '<p class="text-xs text-gray-500">No recent orders.</p>';
    }

    const bookingsList = document.getElementById('admin-bookings-list');
    if (bookingsList) {
        bookingsList.innerHTML = bookings.length ? bookings.map(b => `
            <div class="bg-gray-950 p-4 rounded-2xl border border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                    <span class="text-xs font-mono text-amber-400 font-bold">${b.id}</span> • <span class="text-sm font-bold text-white">${b.name}</span> (${b.phone})
                    <p class="text-xs text-gray-400 mt-1">${b.date} at ${b.time} • ${b.guests} ${b.notes ? `(${b.notes})` : ''}</p>
                </div>
                <div class="flex items-center gap-2">
                    <span class="text-xs bg-amber-500/20 text-amber-400 px-2.5 py-1 rounded-full font-bold">Confirmed</span>
                    <button onclick="deleteAdminBooking('${b.id}')" class="text-xs text-red-400 hover:text-red-300 px-2 py-1 cursor-pointer"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
        `).join('') : '<p class="text-xs text-gray-500">No active bookings.</p>';
    }

    const adminMenuList = document.getElementById('admin-menu-list');
    if (adminMenuList) {
        adminMenuList.innerHTML = menuItems.map(m => `
            <div class="bg-gray-950 p-3 rounded-xl border border-gray-800 flex items-center justify-between">
                <div>
                    <span class="text-sm font-bold text-white">${m.name}</span>
                    <span class="text-xs text-gray-400 ml-2">(${m.category})</span>
                </div>
                <div class="flex items-center gap-3">
                    <span class="text-sm font-bold text-amber-400">₹${m.price}</span>
                    <button onclick="openEditModal(${m.id}); closeAdminModal();" class="text-amber-400 hover:text-amber-300 text-xs font-bold cursor-pointer">Edit</button>
                    <button onclick="deleteMenuItem(${m.id})" class="text-red-400 hover:text-red-300 text-xs font-bold cursor-pointer">Delete</button>
                </div>
            </div>
        `).join('');
    }
}

// Initialize app on page load
window.addEventListener('DOMContentLoaded', () => {
    loadFromStorage();
    toggleLocationField();
    renderMenu();
    updateCartUI();
    updateAdminUI();
});