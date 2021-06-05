import React from "react";
import { Card, Button } from "react-bootstrap";
//components
import Rating from "./Rating";

// routers
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <>
      <Card style={{}} className="p-2 rounded  shadow-sm">
        <Link to={`/product/${product._id}`}>
          <Card.Img
            variant="top"
            style={{ width: "100%", objectFit: "cover" }}
            src={product.image}
          />
        </Link>

        <Card.Body>
          <Card.Title>
            <Link to={`/product/${product._id}`} style={{ color: "black" }}>
              <strong>
                <h3>{product.name}</h3>
              </strong>
            </Link>
          </Card.Title>

          <Card.Text>
            <Rating
              rating={product.rating}
              reviewCount={product.numOfReviews}
              color={"grey"}
            />
          </Card.Text>
          <h4 className="my-2">Rs {product.price}</h4>

          <Button variant="primary" className="my-2">
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Product;
