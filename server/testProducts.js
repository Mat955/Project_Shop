const Product = require('./models/product.model');

const loadTestProduct = async () => {

  const data = [
    {
      id: '21sd42sdsaaf',
      title: 'How do I get funding for my startup?',
      content: ' Getting funding for your startup can be a bit frustrating. You want <b>a lot of money</b> and <b>you don\'t have a lot to offer. But don\'t worry.</b> There is something you can do! I\'ll teach you everything you need to know. Are you ready?',
      author: 'Jan Sienkiewicz'
    },
    {
      id: '543fg43gzsd4',
      title: '10 Brilliant Small Bussiness Ideas',
      content: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
      author: 'Maria Konopnicka'
    }
  ];

  try {
    let counter = await Product.countDocuments();
    if (counter === 0) {
      console.log('No Products. Loading data.....');
      await Product.create(data);
      console.log('Test data has been successfully loaded');
    }
  } catch (err) {
    console.log('Couldn\'t load test data', err);
  }
};

module.exports = loadTestProduct;