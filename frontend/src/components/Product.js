import React from "react";
import { Card, Button } from "react-bootstrap";

function Product({ product }) {
  return (
    <>
      <Card style={{}} className="p-2 rounded  shadow-sm">
        <Card.Img
          variant="top"
          style={{ width: "100%", objectFit: "cover" }}
          src={product.image}
        />
        <Card.Body>
          <Card.Title>
            <a href={`/product/${product._id}`} style={{ color: "black" }}>
              <strong>
                <h3>{product.name}</h3>
              </strong>
            </a>
          </Card.Title>
          <Card.Text>
            <p>
              Rated {product.rating} based on {product.numReviews} reviews
            </p>
            <h4>Rs {product.price}</h4>
          </Card.Text>
          <Button variant="primary">Add To Cart</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Product;
