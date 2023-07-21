import { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";
import StatusCode from "../utils/StatusCode";

const Product = () => {
  const { data: products, status } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (status === StatusCode.LOADING) {
    return <div>Loading.....</div>;
  }

  if (status === StatusCode.ERROR) {
    return <div>Something went wrong</div>;
  }

  const addToCart = (product) => {
    dispatch(add(product));
  };

  const cards = products.map((product) => (
    <div className="col-md-3" style={{ marginBottom: "10px" }}>
      <Card key={product.id} className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.price}</Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              addToCart(product);
            }}
          >
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  ));

  return (
    <>
      <h1>Product Dashboard</h1>
      <div className="row">{cards}</div>
    </>
  );
};
export default Product;
