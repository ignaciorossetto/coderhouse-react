import * as React from "react";
import { useState, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardA from "react-bootstrap/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "react-bootstrap/Button";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link, useParams } from "react-router-dom";
import SpinnerComponent from "../Spinner/Spinner";
import "./ProductDetail.css";
import { Cartcontext } from "../CartContext/CartContext";
import { doc, getDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export default function ProductDetail() {
  const [itemList, setItemList] = useState([]);
  const [itemListBool, setItemListBool] = useState(false);
  const [amount, setAmount] = useState(0);
  const { id } = useParams();
  const { addToCart } = useContext(Cartcontext);

  useEffect(() => {
    const docSnap = async () => {
      const col = collection(db, "products");
      const docRef = doc(col, id);
      const aa = await getDoc(docRef);
      setItemListBool(true);
      setItemList({ ...aa.data(), id: aa.id });
    };

    docSnap();
  }, [id]);

  const addUnit = () => setAmount(amount + 1);
  const subUnit = () => setAmount(amount - 1);
  const addToShopBag = (id, name, price, image, quantity) => {
    setAmount(0);
    addToCart(id, name, price, image, quantity);
  };

  return (
    <>
      
        {!itemListBool ? (
          <div className="d-flex justify-content-center">
            <SpinnerComponent />
          </div>
        ) : (
        <div className="backBtnContainer d-flex flex-row justify-content-center">
        <Link to={`/products/category/${itemList.category}`}>
          <KeyboardBackspaceIcon fontSize="large" className="backBtn" />
        </Link>
          <Card
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <CardMedia
              component="img"
              className="productImage"
              sx={{ width: 600, height: 700, borderRadius: "20px" }}
              image={itemList.image}
              alt={itemList.name}
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ height: "fit-content" }}>
                <Typography
                  component="div"
                  variant="h3"
                  sx={{ marginBottom: "15px" }}
                >
                  {itemList.name}
                </Typography>
                <Typography
                  variant="h5"
                  color="text.secondary"
                  component="div"
                  sx={{ marginBottom: "15px" }}
                >
                  {itemList.size}
                </Typography>
                <Typography
                  variant="h4"
                  color="text.primary"
                  component="div"
                  sx={{ marginBottom: "15px" }}
                >
                  ${itemList.price && itemList.price.toLocaleString()}
                </Typography>
              </CardContent>
              <div
                className="quantityContainer d-flex justify-content-center align-items-baseline"
                style={{ padding: "16px" }}
              >
                <Button
                  variant="primary"
                  onClick={addUnit}
                  disabled={amount === itemList.stock ? true : false}
                  sx={{ fontSize: "30px" }}
                >
                  +
                </Button>
                <CardA.Text className="mx-3" sx={{ fontSize: "50px" }}>
                  {amount}
                </CardA.Text>
                <Button
                  variant="primary"
                  onClick={subUnit}
                  disabled={amount === 0 ? true : false}
                  sx={{ fontSize: "30px" }}
                >
                  -
                </Button>

                <button className="shopBasketContainer">
                  <ShoppingBasketIcon
                    className="shopBasket"
                    onClick={() => {
                      addToShopBag(
                        itemList.id,
                        itemList.name,
                        itemList.price,
                        itemList.image,
                        amount
                      );
                    }}
                    sx={{ fontSize: "30px" }}
                  />
                </button>
              </div>
            </Box>
          </Card>
          </div>
        )}
      
    </>
  );
}
