import { useState, useEffect } from "react";
import {  useParams } from "react-router-dom";
import './EditProduct.css'
export function EditProduct(){
    const { productId } = useParams();
    
    const [product, setProduct] = useState(null);
    const [name, setName] = useState("");
    const [descrption, setdescrption] = useState("");
    const [img, setimg] = useState("");
    const [price, setPrice] = useState("");
    useEffect(() => {
        fetch(`https://63f7738fe40e087c958f2bf7.mockapi.io/products/${productId}`)
          .then((response) => response.json())
          .then((data) => {
            setProduct(data);
            setName(data.name);
            setdescrption(data.descrption);
            setimg(data.img);
            setPrice(data.price);
          })
          .catch((error) => console.error(error));
      }, [productId]);

 const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handledescrptionChange = (event) => {
    setdescrption(event.target.value);
  };

  const handleimgChange = (event) => {
    setimg(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`https://63f7738fe40e087c958f2bf7.mockapi.io/products/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, descrption, img, price }),
    })
      .then(() => {
        window.location.href=`/products/${productId}`;
      })
      .catch((error) => console.error(error));
  };
  if (!product) {
    return <p>Loading...</p>;
  }
  return (
    <div className="EditProductPage">
      <nav className="EditProductPageh2">
          <h2>Edit Product</h2>
      </nav>
      <form className="Form_EditProductPage" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="descrption">descrption:</label>
          <textarea
            id="descrption"
            value={descrption}
            onChange={handledescrptionChange}
          />
        </div>
        <div>
          <label htmlFor="img">img URL:</label>
          <input
            type="text"
            id="img"
            value={img}
            onChange={handleimgChange}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={handlePriceChange}
          />
        </div>
        <button className="Button_EditProductPage" type="submit">Save Changes</button>
        <button className="Button_EditProductPage"  onClick={() => window.location.href=`/products/${productId}`}>
          Cancel
        </button>
      </form>
    </div>
  );
}