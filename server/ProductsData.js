const Product = require('../server/models/product.model');

const loadProductsData = async () => {

  const data = [
    {
      id: 'product-1',
      photo: 'fcb-1.png',
      title: 'FC BARCELONA 2019/20 STADIUM AWAY',
      content: 'The FC Barcelona Stadium Away Shirt brings team pride details celebrating the club\'s fabled academy together with performance elements like highly breathable fabric to help you stay dry and cool.',
      price: 65
    },
    {
      id: 'product-2',
      photo: 'fcb-2.png',
      title: 'Men\'s Short-Sleeve Football Top',
      content: 'The FC Barcelona Top shows off your team pride while keeping you moving comfortably on the pitch. Sweat-wicking technology and mesh side panels help you stay dry and cool when the game heats up.',
      price: 75
    },
    {
      id: 'product-3',
      photo: 'fcb-3.png',
      title: 'Nike Dri-FIT FC Barcelona Strike',
      content: 'The Nike Dri-FIT FC Barcelona Strike Tracksuit is ready for your warm-up and cool-down. Stretchy fabric has sweat-wicking technology to help you stay dry while letting you move comfortably. Zipped legs make it easy to change. Zip pockets on the jacket and pants secure your stuff',
      price: 85
    },
    {
      id: 'product-4',
      photo: 'fcb-4.png',
      title: 'FC BARCELONA 2019/20 HOME',
      content: 'Future champions need the kit to match. The FC Barcelona 2019/20 Home Kit has iconic Barça details. The shirt, shorts and socks are designed for maximum comfort in a look inspired by the elite. Sporting a chequered design for the first time, the shirt channels Barcelona pride inspired by the iconic grid layout of the city',
      price: 45
    },
    {
      id: 'product-5',
      photo: 'fcb-5.png',
      title: 'FC BARCELONA STADIUM 98/99',
      content: 'The FC Barcelona Stadium 98/99 Football Shirt is made from breathable, sweat-wicking fabric to help keep you cool, dry and comfortable on and off the pitch. It\'s inspired by FC Barcelonas 1998/99 home kit, recreating a heritage design with modern performance.',
      price: 70
    },
    {
      id: 'product-6',
      photo: 'fcb-6.png',
      title: 'Nike Dri-FIT FC Barcelona Strike',
      content: 'The Nike Dri-FIT FC Barcelona Strike Drill Top is made from lightly textured fabric around your core for lightweight coverage. Sweat-wicking fabric helps you stay dry and comfortable, while stretchy sleeves let your arms move freely.',
      price: 100
    },
    {
      id: 'product-7',
      photo: 'fcb-7.png',
      title: 'FC Barcelona 2019/20 Stadium Home/Away Shorts',
      content: 'The FC Barcelona 2019/20 Stadium Home/Away Shorts are made from breathable, sweat-wicking fabric to help keep you cool, dry and comfortable on the pitch.',
    },
    {
      id: 'product-8',
      photo: 'fcb-8.png',
      title: 'FC Barcelona Jacket',
      content: 'Cheer for your team in comfort in the FC Barcelona Jacket. Thick knit fabric feels soft and comfortable with just the right amount of stretch. Zip pockets stash your stuff. Iconic team colours and crest round out the look',
      price: 120
    },
    {
      id: 'product-9',
      photo: 'fcb-9.png',
      title: 'Nike Dri-FIT FC Barcelona',
      content: 'The Nike Dri-FIT FC Barcelona T-Shirt features soft fabric with sweat-wicking technology that helps keep you dry, comfortable and ready to cheer.',
      price: 35
    },
    {
      id: 'product-10',
      photo: 'fcb-10.png',
      title: 'Nike VaporKnit FC Barcelona Strike',
      content: 'The Nike VaporKnit FC Barcelona Strike Pants combine the versatility of Nike VaporKnit technology with team pride. High-stretch, quick-drying fabric helps keep you moving fast and feeling light. The team crest and colours show your pride',
      price: 40
    },
    {
      id: 'product-11',
      photo: 'fcb-11.png',
      title: 'FC Barcelona Windrunner',
      content: 'The FC Barcelona Windrunner Women\'s Jacket elevates the original running layer for team pride and everyday wear. It features iconic design details, including the 26-degree chevron on the chest',
      price: 100
    },
    {
      id: 'product-12',
      photo: 'fcb-12.png',
      title: 'FC Barcelona Stadium Backpack',
      content: 'The FC Barcelona Stadium Kids Football Backpack features a spacious main compartment and padded, adjustable shoulder straps so you can comfortably carry your essentials',
      price: 20
    },
    {
      id: 'product-13',
      photo: 'fcb-13.png',
      title: 'FC Barcelona Mercurial Lite',
      content: 'The FC Barcelona Mercurial Lite Football Shin Guards deliver a durable shell with superior cushioning and impact absorption during training and games',
      price: 43
    },
    {
      id: 'product-14',
      photo: 'fcb-14.png',
      title: 'FC Barcelona Skills Ball',
      content: 'Quality and performance combine in the FC Barcelona Skills Football, making it ideal for training and recreational play. It features club graphics for easier ball tracking while also showing off your team spirit',
      price: 15
    },
    {
      id: 'product-15',
      photo: 'fcb-15.png',
      title: '2018/19 FC BARCELONA STADIUM THIRD',
      content: 'The 2018/19 FC Barcelona Stadium Third Men\'s Football Shirt is made from breathable, sweat-wicking fabric to help keep you cool, dry and comfortable on and off the pitch.',
      price: 80
    },
    {
      id: 'product-16',
      photo: 'fcb-16.png',
      title: 'FC Barcelona Stadium Bag',
      content: 'The FC Barcelona Stadium Small Items Bag features a durable design with multiple compartments and graphics that show your team pride',
      price: 30
    },
    {
      id: 'product-17',
      photo: 'fcb-17.png',
      title: 'FC Barcelona Stadium Backpack 2',
      content: 'The FC Barcelona Stadium Kids Football Backpack features a spacious main compartment and padded, adjustable shoulder straps so you can comfortably carry your essentials',
      price: 32
    },
    {
      id: 'product-18',
      photo: 'fcb-18.png',
      title: 'Nike Dri-FIT FC Barcelona Strike',
      content: 'The Nike Dri-FIT FC Barcelona Strike Shorts are made from breathable, sweat-wicking fabric to help you stay cool, dry and comfortable. They have just the right amount of stretch so you can keep focused on the game',
      price: 10
    },
    {
      id: 'product-19',
      photo: 'fcb-19.png',
      title: 'Nike HyperWarm FC Barcelona Academy',
      content: 'The Nike HyperWarm FC Barcelona Academy Football Gloves are designed to help you stay warm and focused on the game. Zones of silicone help you grip the ball during throw-ins, while the flexible cuffs create a secure fit',
      price: 20,
    },
    {
      id: 'product-20',
      photo: 'fcb-20.png',
      title: 'FC Barcelona Down-Fill Jacket',
      content: 'The Nike Dri-FIT FC Barcelona Strike Drill Top is made from lightly textured fabric around your core for lightweight coverage. Sweat-wicking fabric helps you stay dry and comfortable, while stretchy sleeves let your arms move freely.',
      price: 110
    },
    {
      id: 'product-21',
      photo: 'fcb-21.png',
      title: 'FC Barcelona Polo T-Shirt',
      content: 'The FC Barcelona Polo has a classic look with subtle team style. Cotton fabric feels soft with a little bit of stretch so you\'re ready for whatever the day brings',
      price: 63
    },
    {
      id: 'product-22',
      photo: 'fcb-22.png',
      title: 'FC Barcelona Tailwind Hat',
      content: 'Train, play or cheer in the FC Barcelona Tailwind Hat. Sweat-wicking fabric helps keep you dry and comfortable',
      price: 24
    },
    {
      id: 'product-23',
      photo: 'fcb-23.png',
      title: 'FC Barcelona Stadium Gymsack',
      content: 'The FC Barcelona Stadium Football Gymsack features signature details and a minimal, lightweight design so you can tote your gear and daily essentials',
      price: 10
    },
    {
      id: 'product-24',
      photo: 'fcb-24.png',
      title: 'FC Barcelona Flag',
      content: 'The FC Barcelona Flag Scarf helps you stay warm and show your support with soft, woven fabric and premium team details',
      price: 20
    },
  ];

  try {
    let counter = await Product.countDocuments();
    if (counter === 0) {
      await Product.create(data);
      console.log('Test data has been successfully loaded');
    }
  } catch (err) {
    console.log('Couldn\'t load products data', err);
  }

};

module.exports = loadProductsData;