import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../config/firebase";
import { useStateValue } from "../../contex/stateProvider";
import Header from "../header/header";
import Order from "../order/order";
import "./orders.css";

export default function Orders() {
  const [{ user }] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // effect
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot(snap =>
          setOrders(
            snap.docs.map(doc => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }

    return () => {
      // cleanup
    };
  }, [user]);

  console.log(orders);
  console.log(user?.uid);
  return (
    <>
      <Header />
      <div className='orders'>
        <h1>Your Orders</h1>
        {user && (
          <div className='order'>
            {orders.map(order => (
              <Order order={order} />
            ))}
          </div>
        )}
      </div>
      {!user && (
        <div className='no-user'>
          <h2>
            Your not logged in ! please <Link to='/login'>log in</Link> or <Link to='/signup'>Sing Up</Link>
          </h2>
        </div>
      )}
    </>
  );
}
