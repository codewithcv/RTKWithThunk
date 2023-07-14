import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeItem = (productID) => {
    dispatch(remove(productID));
  };

  const cards = products.map((product) => (
    <div className="col-md-12" style={{ marginBottom: "10px" }}>
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
            variant="danger"
            onClick={() => {
              removeItem(product.id);
            }}
          >
            Remove Item
          </Button>
        </Card.Body>
      </Card>
    </div>
  ));

  return (
    <>
      <div>Cart Items</div>
      {cards}
    </>
  );
};

export default Cart;
