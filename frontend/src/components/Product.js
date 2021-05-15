import React from "react";
import { Card, Button } from "react-bootstrap";
//components
import Rating from "./Rating";

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
            <Rating
              rating={product.rating}
              reviewCount={product.reviewCount}
              color={"grey"}
            />
            <h4 className="my-2">Rs {product.price}</h4>
          </Card.Text>
          <Button variant="primary" className="my-2">
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Product;
