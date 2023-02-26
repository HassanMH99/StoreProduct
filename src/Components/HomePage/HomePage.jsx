import { Link } from 'react-router-dom'
import './HomePage.css'
export function HomePage(){
    const goToStoreAge =()=>{
        window.location.href="/product"
    }

    return <div className="HomePage">
            <nav className='Nav-HomePage'>
              <h1>Welcome To My App</h1>
            </nav>
        <div className='MainHomePage'><button className="HomePage-button"><a href="/products">Go To Store</a></button></div>
    </div>
}