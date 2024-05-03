import { useParams } from 'react-router-dom';

import React, { useState, useEffect } from 'react';

const ProductDetail =  () =>{
    const param = useParams();
    const productId = param.id;
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchProductDetails = async () => {
          try {
            const response = await fetch(`http://localhost:3000/api/product/${productId}`);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setProduct(data);
          } catch (error) {
            setError(error.message);
          } finally {
            setLoading(false);
          }
        };
        fetchProductDetails();
      }, [productId]);  // Cette dépendance assure qu
    




      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error: {error}</div>;
      if (!product) return <div>No product found</div>;

      const data = product.product;
      console.log(data);
    return (
      <div className="product-card">
        <img src={data.mainImage} alt={data.name} className='product-image' />
        <table className="product-info">
          <tr>
              <th>Nom</th>
              <td>{data.name}</td>
          </tr>
          <tr>
              <th>Marque :</th>
              <td>Mac</td>
          </tr>
          <tr>
              <th>Description: </th>
              <td>{data.description}</td>
          </tr>
          <tr>
              <th>Colors : </th>
              <td>{data.colors[0].color}</td>
          </tr>
          <tr>
            <th>Size : </th>
            <td>{data.sizes[0].size}</td>
          </tr>
          <tr>
              <th>Price :</th>
              <td>{data.price} €</td>
          </tr>
      </table>
    </div>

    );
  
}

export default ProductDetail;
