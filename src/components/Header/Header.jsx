import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Header() {

  const shoppingCart = useSelector(store => store.shoppingCart);

  const totalCost = (shoppingCart) => {
    const pizzaCost = (sum, pizza) => sum + Number(pizza.price);
    const totalPrice = shoppingCart.reduce(pizzaCost, 0);
    return totalPrice;
  } // End totalCost

  return (
    <header className='App-header'>

    <h1 className='App-title'>Prime Pizza</h1>

    <nav>
      <ul className="App-header-ul">
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/step2">Customer Info</Link>
        </li>
        <li>
          <Link to="/step3">Checkout</Link>
        </li>
      </ul>
    </nav>

    <div className='cost-total'>
      <h4>Total Cost: ${totalCost(shoppingCart)}</h4>
    </div>

  </header>
  )
} // End Header


export default Header;