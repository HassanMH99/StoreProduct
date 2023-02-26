import { useState } from "react";
export function AddProduct(){
    const [name, setName] = useState("");
    const [descrption, setdescrption] = useState("");
    const [price, setPrice] = useState("");
    const [img, setimg] = useState("");
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
    
        // Submit form to API using the fetch() function
        fetch("https://63f7738fe40e087c958f2bf7.mockapi.io/products", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, descrption, price, img }),
        }).then(() => {
          // Navigate back to the product list page after submitting the form
          
          window.location.href=`/add`;
        }).then(()=>{
            window.location.href='/products'
        });
       
      };
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
          <button className="Button_EditProductPage" type="submit">Add</button>
          <button className="Button_EditProductPage" type="submit"><a style={{"color":"white","textDecoration":"none"}} href="/products">Back</a></button>
          
           
        </form>
      </div>
      );
}