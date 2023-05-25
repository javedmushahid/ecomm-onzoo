import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart);
  console.log(items);

  const getTotalAmount = () => {
    let total = 0;
    items.forEach((item) => {
      const price = parseFloat(item.price.replace("$", ""));
      if (!isNaN(price)) {
        total += price;
      }
    });
    return total.toFixed(2);
  };

  const handleRemove=(productId)=>{
    dispatch(remove(productId));
  };

  useEffect(() => {
    document.title = 'Cart'; // Set the title to "Login" when the component mounts
  }, []);
  return (
    <div style={styles.cart}>
      <h2 style={styles.heading}>Shopping Cart</h2>
      {items.length === 0 ? (
        <h6 style={styles.empty}>Your cart is empty.</h6>
      ) : (
        <>
          <ul style={styles.list}>
            {items.map((item) => (
              <li key={item.id} style={styles.item}>
                <img src={item.image} alt={item.name} style={styles.image} />
                <div style={styles.itemDetails}>
                  <div style={styles.itemDetailsContent}>
                    <span style={styles.itemName}>{item.name}</span>
                    <span style={styles.itemPrice}>{item.price}</span>
                  </div>
                </div>
                <button
                  style={styles.removeButton}
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div style={styles.totalAmount}>
            <h4>Total Amount: ${getTotalAmount()}</h4>
          </div>
        </>
      )}
    </div>
  );
};

const styles = {
  cart: {
    backgroundColor: "#f5f5f5",
    padding: "20px",
    borderRadius: "5px",
    textAlign: "center",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  empty: {
    fontSize: "13px",
  },
  list: {
    listStyleType: "none",
    padding: "0",
  },
  totalAmount: {
    marginTop: "20px",
    fontSize: "18px",
    fontWeight: "bold",
    "@media (max-width: 768px)": {
      fontSize: "16px",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Box shadow style
    padding: "10px",
  },
  image: {
    width: "200px",
    height: "200px",
    marginRight: "10px",
  },
  itemDetails: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "1",
  },
  itemDetailsContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    textAlign: "center",
  },
  itemName: {
    fontWeight: "bold",
    marginBottom: "5px",
    marginTop: "0",
  },
  itemPrice: {
    color: "#888",
    marginTop: "0",
  },
  removeButton: {
    backgroundColor: "#e74c3c",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "5px 10px",
    cursor: "pointer",
  },
  "@media (max-width: 768px)": {
    cart: {
      padding: "10px",
    },
    heading: {
      fontSize: "20px",
      marginBottom: "8px",
    },
    image: {
      width: "150px",
      height: "150px",
      marginRight: "8px",
    },
    item: {
      marginBottom: "8px",
      padding: "8px",
    },
    itemDetailsContent: {
      fontSize: "14px",
    },
    itemName: {
      fontWeight: "bold",
      marginBottom: "3px",
      fontSize: "16px",
    },
    itemPrice: {
      color: "#888",
      marginTop: "0",
      fontSize: "12px",
    },
    removeButton: {
      backgroundColor: "#e74c3c",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      padding: "3px 8px",
      cursor: "pointer",
    },
  },
};

export default Cart;
