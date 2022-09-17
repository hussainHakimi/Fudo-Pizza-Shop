import { useStore } from "../store/store";
import css from "../styles/Cart.module.css";
import Image from "next/image";
import { urlFor } from "../lib/client";
import Pizza from "./pizza/[slug]";
import toast, { Toaster } from "react-hot-toast";
import { AiTwotoneAlert } from "react-icons/ai";

export default function Cart() {
  const CartData = useStore((state) => state.cart);
  const removePizza = useStore((state) => state.removePizza);
  const handleRemove = (i) => {
    removePizza(i);
    toast.error("Item Removed");
  };

  const total = () =>
    CartData.pizzas.reduce((a, b) => a + b.quantity * b.price, 0);
  return (
    <div className={css.conatiner}>
      <div>
        {" "}
        {/* Details */}
        <table className="w-[100%] border-seprate border-spacing-[1rem]">
          <thead>
            <th>Pizza</th>
            <th>Name</th>
            <th>Size</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th></th>
          </thead>
          <tbody>
            {CartData.pizzas.length > 0 &&
              CartData.pizzas.map((pizza, i) => {
                const src = urlFor(pizza.image).url();
                return (
                  <tr key={i}>
                    <td className="text-center">
                      <Image
                        loader={() => src}
                        src={src}
                        alt=""
                        objectFit="cover"
                        width={85}
                        height={85}
                        className="rounded-[1rem]"
                      />
                    </td>
                    <td className="text-center w-[15%]">{pizza.name}</td>
                    <td className="text-center">
                      {pizza.size === 0
                        ? "Small"
                        : pizza.size === 1
                        ? "Medium"
                        : "Large"}
                    </td>
                    <td className="text-center">${pizza.price}</td>
                    <td className="text-center">{pizza.quantity}</td>
                    <td className="text-center">
                      ${pizza.price * pizza.quantity}
                    </td>
                    <td
                      className="text-[#f54748] cursor-pointer"
                      onClick={() => handleRemove(i)}
                    >
                      x
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between h-[16rem] p-[1.6rem] bg-[#fffbfb76] flex-col shadow-lg shadow-gray-400 rounded-[15px]">
        <span className="text-[1.5rem] font-bold">Cart</span>
        <div className="w-full flex flex-col gap-[0.6rem]">
          <div className="flex justify-between">
            <span>Items</span>
            <span>{CartData.pizzas.length}</span>
          </div>
          <div className="flex justify-between">
            <span>Total</span>
            <span>$ {total()}</span>
          </div>
        </div>
        <div className="flex gap-[1rem]">
          <button
            className="bg-transparent py-3 px-6 rounded-full text-[#f54748] border-2 border-[#f54748] text-[0.8rem] p-[0.8rem]"
            onClick={handleOnDelivery}
          >
            Pay on Delivery
          </button>
          <button className="bg-[#f54748] py-3 px-6 rounded-full text-white text-[0.8rem] p-[0.8rem]">
            Pay Now
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
