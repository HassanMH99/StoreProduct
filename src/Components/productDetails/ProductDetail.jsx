import React,{useState,useEffect} from "react";
import {useParams,Link} from 'react-router-dom'
import axios from "axios";
import './ProductDetail.css'
export function ProductDetail(){
    const productId = useParams().productId;
    const [showPopup, setShowPopup] = useState(false);
    console.log(productId);
  const [product, setProduct] = useState(null); 
  useEffect(() => {
    axios.get(`https://63f7738fe40e087c958f2bf7.mockapi.io/products/${productId}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [productId]);
  if (!product) {
    return <div>Loading...</div>;
  }
  const handleDelete = () => {
    showDeletePopup();
  };
  const showDeletePopup = () => {
    setShowPopup(true);
  };
  const hideDeletePopup = () => {
    setShowPopup(false);
  };
  const handleConfirmDelete = () => {
    fetch(`https://63f7738fe40e087c958f2bf7.mockapi.io/products/${productId}`, {
      method: "DELETE",
    })
      .then(() => {
        window.location.href="/products";
      })
      .catch((error) => console.error(error));
  };
  const handleEdit = () => {
    window.location.href=`/products/${productId}/edit`;
  };
  return (
    <div className="ProductDetails">
        <nav className="Nav-ProductDetails">
            <button onClick={handleDelete} className="Button-ProductDetails">Delete</button>
            <h1>Details of {product.name}</h1>
            <button onClick={handleEdit} className="Button-ProductDetails">Edit</button>
        </nav>
      <p className="ProductDetails_p">{product.descrption}</p>
      <img className="ProductDetails_img" src={product.img} alt={product.name} />
      <p className="ProductDetails_p">Price: {product.price+"$"}</p>
      
      <Link className="Link_ProductDetails" to="/products"><button className="Button-Back">Back to all products</button></Link>
      {showPopup && (
        <div className="popup">
          <p>Are you sure you want to delete this product?</p>
          <button onClick={hideDeletePopup}>No</button>
          <button onClick={handleConfirmDelete}>Yes</button>
        </div>
      )}
    </div>
  );
}