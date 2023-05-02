require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Product = require('./models/product');
const User = require('./models/user');

(async function () {
  await User.deleteMany({});
  await User.create([
    { name: 'Mark', email: 'mark@gmail.com', password: '123', isAdmin: true },
  ]);

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

  await Product.deleteMany({});
  const items = await Product.create([
    {
      name: 'Beefeater',
      emoji:
        'https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/256/256/true/eyJpZCI6ImZmMTkwOTE1OTAxMTY4ZTIwMGM3ZTJjYWFmMjJjZTJjIiwic3RvcmFnZSI6InB1YmxpY19zdG9yZSJ9?signature=a3cfa5f5d84aae5aef07a7279f1b619e7b67d979fdddcf87b429396f832acd92',
      category: categories[0],
      origin: 'England',
      volume: 750,
      quantity: 18,
      price: 20.0,
    },
    {
      name: 'Bombay Sapphire',
      emoji:
        'https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/256/256/true/eyJpZCI6ImQzZDBmNzlmZjk1NmNmMDc4NTA3ZDQwMTE1OGQ0MDg3Iiwic3RvcmFnZSI6InB1YmxpY19zdG9yZSJ9?signature=5cc8eb2d8ea57773dff67f44cd7c62535fb1b1033f3ebc0e4782d0067b71e81b',
      category: categories[0],
      origin: 'England',
      volume: 750,
      quantity: 18,
      price: 22.0,
    },
    {
      name: "Gordon's",
      emoji:
        'https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/256/256/true/eyJpZCI6IjY2NDgxMjc4OTU1N2I1YzczNzJmMDRlZTgyNmVkYmFiIiwic3RvcmFnZSI6InB1YmxpY19zdG9yZSJ9?signature=7a8e8c72fbfd53287548bf3ce125e991343ea68f49074f0fc16e13baccb9b832',
      category: categories[0],
      origin: 'England',
      volume: 750,
      quantity: 18,
      price: 13.0,
    },
    {
      name: "Hendrick's",
      emoji:
        'https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/256/256/true/eyJpZCI6IjdiOTk2MDgwYzNhZjM2ZTQ1MmEzMzU4ZDIyNTY2ZDlkIiwic3RvcmFnZSI6InB1YmxpY19zdG9yZSJ9?signature=1846368b2b6ca28082088b265fb0d05aa386447580f0bb9bf4d7cbac1f279523',
      category: categories[0],
      origin: 'Scotland',
      volume: 750,
      quantity: 18,
      price: 31.0,
    },
    {
      name: 'Sipsmith',
      emoji:
        'https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/256/256/true/eyJpZCI6IjA1NzVmNGMxMmJjZjZlNjdmM2JkYjg1MjkzN2EwODVkLnBuZyIsInN0b3JhZ2UiOiJwdWJsaWNfc3RvcmUifQ?signature=b92b5fbf35b894412efdf5e28dd1bee219e0a2067db77a4b1c85cdf9e3ef46e8',
      category: categories[0],
      origin: 'England',
      volume: 750,
      quantity: 18,
      price: 21.0,
    },
    {
      name: 'Tommyrotter',
      emoji:
        'https://cdn.shopify.com/s/files/1/1261/3585/products/tommyrotter_gin_nv_750_grande.png?v=1518910092',
      category: categories[0],
      origin: 'New York, USA',
      volume: 750,
      quantity: 18,
      price: 33.0,
    },

    {
      name: 'Aberlour 12-yr',
      emoji:
        'https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/256/256/true/eyJpZCI6IjVkMjEzOTNlYWY4NmZhYmVhMjc4NTQyNDEwZmFiOWI5LnBuZyIsInN0b3JhZ2UiOiJwdWJsaWNfc3RvcmUifQ?signature=e0c30d9269f2d602a51c88587726ecfff067643069a022cabd1d0bfddcf4e7e4',
      category: categories[1],
      origin: 'Speyside, Scotland',
      volume: 750,
      quantity: 18,
      price: 50.0,
    },
    {
      name: 'Balvenie 21-yr Portwood',
      emoji:
        'https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/256/256/true/eyJpZCI6IjBiODUyN2I0YjA3YzQ3OTEyMzRkNDM4N2E5YzU3MTM5LnBuZyIsInN0b3JhZ2UiOiJwdWJsaWNfc3RvcmUifQ?signature=a129ab0bfe33fbe1b68a365d0e67967fcf5d3e651ee5b0ea7cfaa9f83a702227',
      category: categories[1],
      origin: 'Speyside, Scotland',
      volume: 750,
      quantity: 18,
      price: 270.0,
    },
    {
      name: 'Cardhu Gold Reserve Limited Edition',
      emoji:
        'https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/256/256/true/eyJpZCI6ImJmNjhmYTczMmE4ZGI4M2YyNGMyY2IxYTczOWVmOGQ2LnBuZyIsInN0b3JhZ2UiOiJwdWJsaWNfc3RvcmUifQ?signature=f62c43b891045c7c2d9af45ad3e8c30d80328e81fc340d8d076931b59079326a',
      category: categories[1],
      origin: 'Speyside, Scotland',
      volume: 750,
      quantity: 18,
      price: 47.0,
    },
    {
      name: 'Green Spot blend 8-yr',
      emoji:
        'https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/256/256/true/eyJpZCI6IjEyZTYzMjgxNGM3YzVhYzg1OGNjYWEzOGRlMmIwYjUwIiwic3RvcmFnZSI6InB1YmxpY19zdG9yZSJ9?signature=57803fc69aa2fccff41aad381df062ee35d9cf0fc32c7bbae50148db78d3674c',
      category: categories[1],
      origin: 'Ireland',
      volume: 750,
      quantity: 18,
      price: 59.0,
    },
    {
      name: 'Hillrock bourbon 6-yr',
      emoji:
        'https://www.totalwine.com/dynamic/490x/media/sys_master/twmmedia/h8f/h29/10870897082398.png',
      category: categories[1],
      origin: 'New York, USA',
      volume: 750,
      quantity: 18,
      price: 92.0,
    },
    {
      name: "Maker's Mark bourbon 3-yr",
      emoji:
        'https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/256/256/true/eyJpZCI6ImFjMjQ1MWViZjQ4MjU5ZTFmN2Y3Mjc0MTRjNDljMDYxIiwic3RvcmFnZSI6InB1YmxpY19zdG9yZSJ9?signature=d7fae91b91c7bdefe30e28074667fd8c8c11a8f1f8619f3ce7a2e62401cfcb99',
      category: categories[1],
      origin: 'Kentucky, USA',
      volume: 750,
      quantity: 18,
      price: 24.0,
    },
    {
      name: 'Old Overholt rye',
      emoji:
        'https://www.lawlersliquorsonline.com/wp-content/uploads/2018/10/Old-Overholt-Rye.png',
      category: categories[1],
      origin: 'Kentucky, USA',
      volume: 750,
      quantity: 18,
      price: 20.0,
    },
    {
      name: 'Whistle Pig Small Batch rye 10-yr',
      emoji:
        'https://www.totalwine.com/dynamic/490x/media/sys_master/twmmedia/h49/hf1/16621236682782.png',
      category: categories[1],
      origin: 'Vermont, USA',
      volume: 750,
      quantity: 18,
      price: 68.0,
    },
    {
      name: 'Absolute',
      emoji:
        'https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/256/256/true/eyJpZCI6Ijk2M2Y0MzViOWEzZjQzMjBiMWNkODM1YzM4MTIyOWEyLnBuZyIsInN0b3JhZ2UiOiJwdWJsaWNfc3RvcmUifQ?signature=dc22a8674d453c05a989e364dcd59cd80e9008de9de022954054336217c15917',
      category: categories[2],
      origin: 'Sweden',
      volume: 750,
      quantity: 18,
      price: 20.0,
    },
    {
      name: 'Chopin',
      emoji:
        'https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/256/256/true/eyJpZCI6IjNmM2EzYTBkMTQyN2M4ZWI0MjkwMGFmZTg4ZWU1ZWNiLmpwZyIsInN0b3JhZ2UiOiJwdWJsaWNfc3RvcmUifQ?signature=5cec2c02130b3c8fb88ba05ed5a3a3b1e2f9daab4925c1ecd6070255c10f7517',
      category: categories[2],
      origin: 'Poland',
      volume: 750,
      quantity: 18,
      price: 32.0,
    },
    {
      name: 'Five Wives',
      emoji:
        'https://cdn.shopify.com/s/files/1/0046/7658/3489/products/Ogden_s_-_5_wives_-_VODKA.png?v=1626820680',
      category: categories[2],
      origin: 'Utah, USA',
      volume: 750,
      quantity: 18,
      price: 39.0,
    },
    {
      name: 'Ketel One',
      emoji:
        'https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/256/256/true/eyJpZCI6IjEzNTg4Y2ZhMDU4MDViZWQwZTEyNTZlYTNjMjFiNmRjLnBuZyIsInN0b3JhZ2UiOiJwdWJsaWNfc3RvcmUifQ?signature=e79dbed60257c2f191f1bb9c8b4170b848b0ce087a878b4e62c01038c835556d',
      category: categories[2],
      origin: 'The Netherlands',
      volume: 750,
      quantity: 18,
      price: 19.25,
    },
    {
      name: 'Reyka',
      emoji:
        'https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/256/256/true/eyJpZCI6Ijk4ZmFiZjNmZDg0YWJiZTAwMTkwZDg5YWY2Y2FlYjQ2LnBuZyIsInN0b3JhZ2UiOiJwdWJsaWNfc3RvcmUifQ?signature=800f9e5e363f5b1bcc70f96a107837d1305dbfef8dcfd1d30096c163ff6bf371',
      category: categories[2],
      origin: 'Iceland',
      volume: 750,
      quantity: 19,
      price: 20.0,
    },
    {
      name: 'Bacardi Superior',
      emoji:
        'https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/256/256/true/eyJpZCI6ImNjMjlhNjQxY2QwMWEwN2M1NDFkOTJiOTQ1ZDdlMjhmLnBuZyIsInN0b3JhZ2UiOiJwdWJsaWNfc3RvcmUifQ?signature=3d4153c5f24c723638ec5e368adb96dfa3cb4daf9bd5e73871c3cf318dc48e17',
      category: categories[3],
      origin: 'Puerto Rico (Terr.), USA',
      volume: 750,
      quantity: 18,
      price: 14.0,
    },
    {
      name: 'Diplomatico Reserva',
      emoji:
        'https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/256/256/true/eyJpZCI6IjI4OTZjNjM0MjVhZTFlODU0MDJkYzMzMjlhODczODdiLmpwZyIsInN0b3JhZ2UiOiJwdWJsaWNfc3RvcmUifQ?signature=cea0f221db9c904cbafce9c39e03ee6989da910774a763942e476bce6c5ed892',
      category: categories[3],
      origin: 'Venezuela',
      volume: 750,
      quantity: 18,
      price: 35.0,
    },
    {
      name: 'Probitas',
      emoji:
        'https://cdn.flaviar.com/cache/default_large/upload/media/default/0001/07/72899aea9e92852c80bfeeb989a9a3a40610ab9f.png',
      category: categories[3],
      origin: 'Barbados and Jamaica',
      volume: 750,
      quantity: 18,
      price: 30.0,
    },
    {
      name: 'The Tides Spirits',
      emoji:
        'https://static.beveragetradenetwork.com/en/brands/additional-imagery/w/600/BTN-11112020164907000000-5fac160318327.png',
      category: categories[3],
      origin: 'US Virgin Islands (Terr.), USA',
      volume: 750,
      quantity: 18,
      price: 41.0,
    },

    {
      name: '1800 Silver',
      emoji:
        'https://madisondrinks.co.nz/web/image/product.template/649/image_256/1800%20Silver%20Tequila%2040%25%20750ml?unique=02c5ed0',
      category: categories[4],
      origin: 'Jalisco, Mexico',
      volume: 750,
      quantity: 18,
      price: 29.0,
    },
    {
      name: 'Cava de Oro 5-yr',
      emoji:
        'https://www.totalwine.com/dynamic/490x/media/sys_master/twmmedia/h40/hed/14941705076766.png',
      category: categories[4],
      origin: 'Jalisco, Mexico',
      volume: 750,
      quantity: 18,
      price: 85.0,
    },
    {
      name: 'Espolon',
      emoji:
        'https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/256/256/true/eyJpZCI6Ijg4OGMxYjAwZjYyZGYyZTA0ZTRlNTg0Mzc0NGIxMGI2Iiwic3RvcmFnZSI6InB1YmxpY19zdG9yZSJ9?signature=475b2beba9c11c11bd316815d22f9bb5c7733506f8bcd7a2d69df34a87f28b29',
      category: categories[4],
      origin: 'Jalisco, Mexico',
      volume: 750,
      quantity: 18,
      price: 26.25,
    },
    {
      name: 'Patron Silver',
      emoji:
        'https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/256/256/true/eyJpZCI6Ijg4OGMxYjAwZjYyZGYyZTA0ZTRlNTg0Mzc0NGIxMGI2Iiwic3RvcmFnZSI6InB1YmxpY19zdG9yZSJ9?signature=475b2beba9c11c11bd316815d22f9bb5c7733506f8bcd7a2d69df34a87f28b29',
      category: categories[4],
      origin: 'Jalisco, Mexico',
      volume: 750,
      quantity: 18,
      price: 44.0,
    },
    {
      name: 'Alvear Pedro Ximenez Solera 1927',
      emoji:
        'https://www.totalwine.com/dynamic/490x/media/sys_master/twmmedia/h2c/h6e/10992672407582.png',
      category: categories[5],
      origin: 'Spain',
      volume: 750,
      quantity: 18,
      price: 178.0,
    },
    {
      name: 'Cocchi Americano',
      emoji:
        'https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/256/256/true/eyJpZCI6IjJiMzcxNzU5NzFiNTEzY2YxYTZmMzI1MTEyN2JjOTliLmpwZyIsInN0b3JhZ2UiOiJwdWJsaWNfc3RvcmUifQ?signature=485f94c95e6e63c1e923851c7f4e4bf75cb47093168040d22a6a7957fe5c775e',
      category: categories[5],
      origin: 'Italy',
      volume: 750,
      quantity: 18,
      price: 22.0,
    },
    {
      name: 'Dolin dry vermouth',
      emoji:
        'https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/256/256/true/eyJpZCI6ImY0YjZmNzQyMWE0NTUxNzdiNjdmN2M4OGUzZDRiMzRiIiwic3RvcmFnZSI6InB1YmxpY19zdG9yZSJ9?signature=b4ab9245f50e3f7c61799d286dca8eb27c65de46cd22bf84ba9bad64011c65d5',
      category: categories[5],
      origin: 'Chambéry, France',
      volume: 750,
      quantity: 18,
      price: 13.0,
    },
    {
      name: 'Dolin sweet vermouth (Fr.)',
      emoji:
        'https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/256/256/true/eyJpZCI6ImU3ODkxZTUzYTI4MmQ3Yjk2MGZmYmUzNDhjZjU2Y2M5LnBuZyIsInN0b3JhZ2UiOiJwdWJsaWNfc3RvcmUifQ?signature=66a6648656d6a8d796eda2f32b9a535f382b21e3e04a18a219fb52b4eb1c5d62',
      category: categories[5],
      origin: 'Chambéry, France',
      volume: 750,
      quantity: 18,
      price: 13.0,
    },
    {
      name: 'Dubonnet',
      emoji:
        'https://www.eliquorexpress.com/system_content/images/products/8991_1.png',
      category: categories[5],
      origin: 'Kentucky, USA, (under license)',
      volume: 750,
      quantity: 18,
      price: 18.0,
    },
    {
      name: "Graham's Six Grapes port",
      emoji:
        'https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/256/256/true/eyJpZCI6IjczMWNmYzMxYWVmYzEzZDZkZDNlYmRmOTg0YjIyYjUyIiwic3RvcmFnZSI6InB1YmxpY19zdG9yZSJ9?signature=f0326c3f460219797646cee46f91d8a9ef1f33a44be858314369f1bcc348ccce',
      category: categories[5],
      origin: 'Douro, Portugal',
      volume: 750,
      quantity: 18,
      price: 25.0,
    },
    {
      name: 'Hakkaisan Tokubetsu junmai',
      emoji:
        'https://sushitalia.com/media/com_hikashop/upload/thumbnails/300x300f/hakkaisan_1387827988.png',
      category: categories[5],
      origin: 'Japan',
      volume: 720,
      quantity: 18,
      price: 27.0,
    },

    {
      name: 'Kikusui Perfect Snow nigori',
      emoji:
        'https://www.wiredforwine.com/cdn/shop/products/Kikusui-Perfect-Snow-Nigori-Sake-300ml_700x700.png?v=1652269589',
      category: categories[5],
      origin: 'Japan',
      volume: 300,
      quantity: 18,
      price: 13.0,
    },

    {
      name: 'Lillet Blanc',
      emoji:
        'https://images.vivino.com/thumbs/6QR1pX29QDeJxjM8BVzPzw_pb_600x600.png',
      category: categories[5],
      origin: 'Bordeaux, France',
      volume: 750,
      quantity: 18,
      price: 23.0,
    },
    {
      name: 'Lustau Rojo sweet vermouth',
      emoji:
        'https://www.totalwine.com/dynamic/490x/media/sys_master/twmmedia/hbb/h38/13391336603678.png',
      category: categories[5],
      origin: 'Cádiz, Spain',
      volume: 750,
      quantity: 18,
      price: 18.95,
    },
    {
      name: 'Yuki No Bosha junmai ginjo',
      emoji:
        'https://www.kobrandwineandspirits.com/wp-content/uploads/2017/01/ynb_junmai_ginjo_btl_535px.png',
      category: categories[5],
      origin: 'Japan',
      volume: 720,
      quantity: 18,
      price: 23.0,
    },

    {
      name: 'Angostura',
      emoji:
        'https://www.pogoswine.com/images/sites/pogoswine/labels/t8311021q8.png',
      category: categories[6],
      origin: 'Trinidad and Tobago',
      volume: 200,
      quantity: 18,
      price: 15.0,
    },
    {
      name: 'Bennett Wild Hunt',
      emoji:
        'https://cdn.shopify.com/s/files/1/0046/7658/3489/products/BennettWildHuntBitters.png?v=1667862870',
      category: categories[6],
      origin: 'New York, USA',
      volume: 60,
      quantity: 18,
      price: 21.0,
    },

    {
      name: "Peychaud's",
      emoji:
        'https://dtgxwmigmg3gc.cloudfront.net/imagery/assets/derivations/icon/256/256/true/eyJpZCI6ImI1YWQ1NTFhNTBlMmM2YjMwZTQwOWZlNTQ4OWVhYzg1Iiwic3RvcmFnZSI6InB1YmxpY19zdG9yZSJ9?signature=0580925e5fe1d3cf74d2cac1c9439a6241ba442b54e0552ab3eb95686dae7875',
      category: categories[6],
      origin: 'Kentucky, USA',
      volume: 148,
      quantity: 18,
      price: 5.75,
    },
    {
      name: "Regan's No. 6 Orange",
      emoji:
        'https://www.totalwine.com/dynamic/490x/media/sys_master/twmmedia/h63/h63/10987800625182.png',
      category: categories[6],
      origin: 'Louisiana, USA',
      volume: 148,
      quantity: 18,
      price: 7.75,
    },
    {
      name: 'Woodford Reserve Chocolate',
      emoji:
        'https://www.totalwine.com/dynamic/490x/media/sys_master/twmmedia/h1a/hc1/14192160636958.png',
      category: categories[6],
      origin: 'Kentucky, USA',
      volume: 59,
      quantity: 18,
      price: 12.0,
    },
    {
      name: 'Strongwater Cherry Bourbon',
      emoji:
        'https://cdn.shopify.com/s/files/1/0642/4857/8285/products/8bbb18c880a6e2fb74d47f1fc46f0cb2.png?v=1662190795&width=416',
      category: categories[6],
      origin: 'Colorado, USA',
      volume: 89,
      quantity: 18,
      price: 17.0,
    },
  ]);

  console.log(items);

  process.exit();
})();
