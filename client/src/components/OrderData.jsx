import { motion } from "framer-motion";
import React from "react";
import { HiCurrencyRupee } from "../assets/icons";
import { buttonClcik, staggerFadeInOut } from "../animations";
import { getAllOrder, updateOrderSts } from "../api";
import { setOrders } from "../context/actions/ordersAction";
import { useDispatch } from "react-redux";

const OrderData = ({ index, data, admin }) => {
  const dispatch = useDispatch();

  const handleClick = (orderId, sts) => {
    updateOrderSts(orderId, sts).then((response) => {
      getAllOrder().then((data) => {
        dispatch(setOrders(data));
      });
    });
  };

  return (
    <motion.div
      {...staggerFadeInOut(index)}
      className="w-full flex flex-col items-start justify-start px-3 py-2 border relative border-gray-300 bg-lightOverlay drop-shadow-md rounded-md gap-4"
    >
      <div className="w-full flex items-center justify-between">
        <h1 className="text-xl text-headingColor font-semibold">Orders</h1>

        <div className=" flex items-center gap-4">
          <p className="flex items-center gap-1 text-textColor">
            Total : <HiCurrencyRupee className="text-lg text-red-500" />{" "}
            <span className="text-headingColor font-bold">{data?.total}</span>
          </p>

          <p className="px-2 py-[2px] text-sm text-headingColor font-semibold capitalize  rounded-md bg-emerald-400 drop-shadow-md">
            {data?.status}
          </p>

          <p
            className={`text-base font-semibold capitalize border border-gray-300 px-2 py-[2px] rounded-md ${
              (data.sts === "preparing" && "text-orange-500 bg-orange-100") ||
              (data.sts === "cancelled" && "text-red-500 bg-red-100") ||
              (data.sts === "delivered" && "text-emerald-500 bg-emerald-100")
            }`}
          >
            {data?.sts}
          </p>

          {admin && (
            <div className="flex items-center justify-center gap-2">
              <p className="text-lg font-semibold text-headingColor">Mark As</p>

              <motion.p
                {...buttonClcik}
                onClick={() => handleClick(data.orderId, "preparing")}
                className={`text-orange-500 text-base font-semibold capitalize border border-gray-300 px-2 py-[2px] rounded-md cursor-pointer`}
              >
                Preparing
              </motion.p>

              <motion.p
                {...buttonClcik}
                onClick={() => handleClick(data.orderId, "cancelled")}
                className={`text-red-500 text-base font-semibold capitalize border border-gray-300 px-2 py-[2px] rounded-md cursor-pointer`}
              >
                Cancelled
              </motion.p>

              <motion.p
                {...buttonClcik}
                onClick={() => handleClick(data.orderId, "delivered")}
                className={`text-emerald-500 text-base font-semibold capitalize border border-gray-300 px-2 py-[2px] rounded-md cursor-pointer`}
              >
                Delivered
              </motion.p>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-start flex-wrap w-full">
        <div className="flex items-center justify-center gap-4">
          {data?.items &&
            data.items.map((item, j) => (
              <motion.div
                {...staggerFadeInOut(j)}
                key={j}
                className="flex items-center justify-center gap-1"
              >
                <img
                  src={item.imageURL}
                  className="w-10 h-10 object-contain"
                  alt=""
                />

                <div className="flex items-start flex-col">
                  <p className="text-base font-semibold text-headingColor">
                    {item.product_name}
                  </p>
                  <div className="flex items-start gap-2">
                    <p className="text-sm text-textColor">
                      {" "}
                      Qty : {item.quantity}
                    </p>
                    <p className="flex items-center gap-1 text-textColor">
                      <HiCurrencyRupee className="text-base text-red-500" />
                      {parseFloat(item.product_price).toFixed(2)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        <div className="flex items-start justify-start flex-col gap-2 px-6 ml-auto w-full md:w-460">
          <h1 className="text-lg text-headingColor font-semibold">
            {data.shipping_details.name}
          </h1>

          <p className="text-base text-headingColor -mt-2">
            {data.customer.email} {data.customer.phone}
          </p>

          <p className="text-base text-textColor -mt-2">
            {data.shipping_details.address.line1},
            {data.shipping_details.address.line2}{" "}
            {data.shipping_details.address.country},
            {data.shipping_details.address.state} -
            {data.shipping_details.address.postal_code}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default OrderData;
