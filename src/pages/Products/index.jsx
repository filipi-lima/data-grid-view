import './style.css'
import database from '../../database/listProducts.js'

function Products() {
  return (
    <main className='container'>
      {
        database.map((product) => (
          <div key={crypto.randomUUID()} className='card-content'>
            <img src={product.image}/>
            <div className="text-content">
              <span className='title'>{product.name}</span>
              <p className='description'>{product.description}</p>

              <span className="price">R${product.price.toFixed(2)}</span>
            </div>
          </div>
        ))
      }
    </main>
  )
}

export default Products
