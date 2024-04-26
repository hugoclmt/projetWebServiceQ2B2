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
            // Remplace 'url_to_your_api' par l'URL réelle de ton API
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

    return (
        <div>
            <h1>Product Detail</h1>
            <p>Product ID: {data._id}</p>
            <p>Product Name: {data.name}</p>
            <img src={data.mainImage} alt={data.name} />
        </div>
    );
  
}

export default ProductDetail;
