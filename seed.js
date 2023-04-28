require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function () {
  await Category.deleteMany({});
  const categories = await Category.create([
    { name: 'Gin', sortOrder: 10 },
    { name: 'Whiskey/Whisky', sortOrder: 20 },
    { name: 'Vodka', sortOrder: 30 },
    { name: 'Rum', sortOrder: 40 },
    { name: 'Tequila', sortOrder: 50 },
    { name: 'Other', sortOrder: 60 },
    { name: 'Bitters', sortOrder: 70 },
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {
      name: 'Beefeater (Eng.)',
      emoji: '🫐',
      category: categories[0],
      price: 20.0,
    },
    {
      name: 'Bombay Sapphire (Eng.)',
      emoji: '🫐',
      category: categories[0],
      price: 22.0,
    },
    {
      name: "Gordon's (Eng.)",
      emoji: '🫐',
      category: categories[0],
      price: 13.0,
    },
    {
      name: "Hendricks's (Scot.)",
      emoji: '🫐',
      category: categories[0],
      price: 31.0,
    },
    {
      name: 'Sipsmith (Eng.)',
      emoji: '🫐',
      category: categories[0],
      price: 21.0,
    },
    {
      name: 'Tommyrotter (NY)',
      emoji: '🫐',
      category: categories[0],
      price: 33.0,
    },

    {
      name: 'Aberlour 12-yr malt',
      emoji: '🥃',
      category: categories[1],
      price: 50.0,
    },
    {
      name: 'Balvenie 21-yr Portwood malt',
      emoji: '🥃',
      category: categories[1],
      price: 270.0,
    },
    {
      name: 'Cardu 12-yr malt',
      emoji: '🥃',
      category: categories[1],
      price: 61.0,
    },
    {
      name: 'Green Spot blend 8-yr (Ireland)',
      emoji: '🥃',
      category: categories[1],
      price: 59.0,
    },
    {
      name: 'Hillrock bourbon 6-yr (NY)',
      emoji: '🥃',
      category: categories[1],
      price: 92.0,
    },
    {
      name: "Maker's Mark bourbon 3-yr (KY)",
      emoji: '🥃',
      category: categories[1],
      price: 24.0,
    },
    {
      name: 'Old Overholt rye (KY)',
      emoji: '🥃',
      category: categories[1],
      price: 20.0,
    },
    {
      name: 'Whistle Pig rye 10-yr (VT)',
      emoji: '🥃',
      category: categories[1],
      price: 20.0,
    },
    {
      name: 'Absolute (Swed.)',
      emoji: '🌾',
      category: categories[2],
      price: 20.0,
    },
    {
      name: 'Chopin (Pol.)',
      emoji: '🌾',
      category: categories[2],
      price: 32.0,
    },
    {
      name: 'Five Wives (UT)',
      emoji: '🌾',
      category: categories[2],
      price: 39.0,
    },
    {
      name: 'Ketel One (Neth.)',
      emoji: '🌾',
      category: categories[2],
      price: 19.25,
    },
    { name: 'Reyka (Ice.)', emoji: '🌾', category: categories[2], price: 20.0 },
    {
      name: 'Bacardi Superior (Puerto R.)',
      emoji: '🍹',
      category: categories[3],
      price: 14.0,
    },
    {
      name: 'Diplomatico Reserva (Venez.)',
      emoji: '🍹',
      category: categories[3],
      price: 35.0,
    },
    {
      name: 'Probitas (Barb./Jam.)',
      emoji: '🍹',
      category: categories[3],
      price: 30.0,
    },
    {
      name: 'The Tides Spirits (Virgin Is.)',
      emoji: '🍹',
      category: categories[3],
      price: 41.0,
    },

    { name: '1800 Silver', emoji: '🌵', category: categories[4], price: 29.0 },
    {
      name: 'Cava de Oro 5-yr',
      emoji: '🌵',
      category: categories[4],
      price: 85.0,
    },
    { name: 'Espolon', emoji: '🌵', category: categories[4], price: 26.25 },
    {
      name: 'Patron Silver',
      emoji: '🌵',
      category: categories[4],
      price: 44.0,
    },
    {
      name: 'Alvear Pedro Ximenez (Sp., 375ml)',
      emoji: '🍇',
      category: categories[5],
      price: 30.0,
    },
    {
      name: 'Cocchi Americano (It.)',
      emoji: '🍇',
      category: categories[5],
      price: 22.0,
    },
    {
      name: 'Dolin dry vermouth (Fr.)',
      emoji: '🍇',
      category: categories[5],
      price: 13.0,
    },
    {
      name: 'Dolin sweet vermouth (Fr.)',
      emoji: '🍇',
      category: categories[5],
      price: 13.0,
    },
    {
      name: 'Dubonnet (KY)',
      emoji: '🍇',
      category: categories[5],
      price: 18.0,
    },
    {
      name: "Graham's Six Grapes port (Port.)",
      emoji: '🍇',
      category: categories[5],
      price: 25.0,
    },
    {
      name: 'Hakkaisan Tokubetsu junmai',
      emoji: '🍶',
      category: categories[5],
      price: 27.0,
    },

    {
      name: 'Kikusui Perfect Snow nigori',
      emoji: '🍶',
      category: categories[5],
      price: 23.0,
    },

    {
      name: 'Lillet Blanc (Fr.)',
      emoji: '🍇',
      category: categories[5],
      price: 23.0,
    },
    {
      name: 'Lustau Rojo sweet vermouth (Sp.)',
      emoji: '🍇',
      category: categories[5],
      price: 2.95,
    },
    {
      name: 'Yuki No Bosha junmai ginjo',
      emoji: '🍶',
      category: categories[5],
      price: 23.0,
    },

    {
      name: 'Angostura, (Trin.) 4 fl oz',
      emoji: '💧',
      category: categories[6],
      price: 9.0,
    },
    {
      name: 'Bennett Wild Hunt, (NY) 2 fl oz',
      emoji: '💧',
      category: categories[6],
      price: 21.0,
    },

    {
      name: "Peychaud's, (USA) 5 fl oz",
      emoji: '💧',
      category: categories[6],
      price: 5.75,
    },
    {
      name: "Regan's No. 6 Orange, (USA) 5 fl oz",
      emoji: '💧',
      category: categories[6],
      price: 7.75,
    },
    {
      name: 'Woodford Reserve Chocolate, (KY) 2 fl oz',
      emoji: '💧',
      category: categories[6],
      price: 12.0,
    },
    {
      name: 'Woodford Reserve Spiced Cherry, (KY) 2 fl oz',
      emoji: '💧',
      category: categories[6],
      price: 12.0,
    },
  ]);

  console.log(items);

  process.exit();
})();
