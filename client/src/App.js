import React from 'react';

class App extends React.Component {

  state = {
    products: [],
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/products')
      .then(res => res.json())
      .then(res => {
        this.setState({ products: res });
      });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.products.map(product => <li key={product.id}>{product.title}</li>)}
        </ul>
      </div>
    );
  }
};

export default App;
