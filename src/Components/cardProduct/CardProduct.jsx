import './CardProduct.css'
import {Link} from 'react-router-dom'
export function CardProduct({products}){
    return  <div className='CardProduct-ListOfit'>
    {products.map(product => (
      <div className="CardProduct" key={product.id}>
        <Link className='Link_CardProduct' to={`/products/${product.id}`}>
        <h2 className='NameProduct'>{product.name}</h2>
        </Link>
        
        <p className='descrptionProduct'>{product.descrption}</p>
        <img className='ImageProduct' src={product.img} alt={product.name} />
        <p className='PriceProduct'>Price: {product.price+"$"}</p>
      </div>
    ))}
  </div>
}

