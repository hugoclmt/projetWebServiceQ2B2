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

    return (
      <div className='containerParent'>
        <div className='container1'>
          <img className='imgDetailProduct' src={data.mainImage} alt={data.name} />
        </div>
        <div className='container2'>
          <div className='container2Enfant1' ><p>Nom</p></div>
          <div className='container2Enfant2'><p>{data.name}</p></div>
        </div>
        <div className='container2'>
          <div className=''>
            <p>Description</p>
          </div>
          <div>
            <ul>
              <li>Category : {data.category}</li>
            </ul>
          </div>
        </div>
      </div>

    );
  
}

export default ProductDetail;
