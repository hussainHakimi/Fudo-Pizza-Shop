import { client, urlFor } from "../../lib/client";
import Image from "next/image";
import leftArrow from "../../assets/arrowLeft.png";
import rightArrow from "../../assets/arrowRight.png";
import { useState } from "react";
import { useStore } from "../../store/store";
import toast, { Toaster } from "react-hot-toast";

export default function Pizza({ pizza }) {
  // console.log(pizza);
  const src = urlFor(pizza.image).url();
  const [price, setPrice] = useState(`${pizza.price[0]}`);
  const [Quantity, setQuantity] = useState(1);
  const [Size, setSize] = useState(1);
  // const [selected, setSelected] = useState();

  // handle Quantity
  const handleQuantity = (type) => {
    type === "increment"
      ? setQuantity((prev) => prev + 1)
      : Quantity === 1
      ? null
      : setQuantity((prev) => prev - 1);
  };
  // Add to cart Function
  const addPizza = useStore((state) => state.addPizza);
  const addToCart = () => {
    addPizza({
      ...pizza,
      price: pizza.price[Size],
      quantity: Quantity,
      size: Size,
    });
    toast.success("Added to Cart");
  };
  return (
    <>
      {/* <div className='flex'> */}
      <div className="flex p-[2rem] mt-[3rem] gap-[5rem]">
        <div className="relative w-[40%] h-[25rem] overflow-hidden rounded-[2rem]">
          <Image
            src={src}
            loader={() => src}
            alt=""
            layout="fill"
            objectFit="cover"
            unoptimized
            className="hover:scale-[1.1] cursor-pointer"
          />
        </div>
        {/* Right Side */}
        <div className="flex flex-col flex-1 text-[2.2rem] font-bold justify-between">
          <span>{pizza.name}</span>
          <span className="text-[1.2rem] font-normal text-[#828282]">
            {pizza.details}
          </span>
          <span>
            <span className="text-[#f54748]">$</span> {pizza.price[Size]}
          </span>
          <div className="flex gap-[3rem] text-[1.6rem] font-[600]">
            <span>Size</span>
            <div className="flex gap-[0.6rem] text-[#f54748] font-normal text-[0.8rem] italic">
              <div
                className={`${
                  Size == 0 ? "bg-[#f54748] text-white cursor-pointer" : ""
                } flex items-center justify-center py-[0.3rem] px-[1.5rem] border-2 border-[#f54748] rounded-[2rem] hover:bg-[#f54748] hover:text-white cursor-pointer`}
                onClick={() => setSize(0)}
              >
                Small
              </div>
              <div
                className={`${
                  Size == 1 ? "bg-[#f54748] text-white cursor-pointer" : ""
                } flex items-center justify-center py-[0.3rem] px-[1.5rem] border-2 border-[#f54748] rounded-[2rem] hover:bg-[#f54748] hover:text-white cursor-pointer`}
                onClick={() => setSize(1)}
              >
                Medium
              </div>
              <div
                className={`${
                  Size == 2 ? "bg-[#f54748] text-white cursor-pointer" : ""
                } flex items-center justify-center py-[0.3rem] px-[1.5rem] border-2 border-[#f54748] rounded-[2rem] hover:bg-[#f54748] hover:text-white cursor-pointer`}
                onClick={() => setSize(2)}
              >
                Large
              </div>
            </div>
          </div>
          {/* Quantity Counter  */}
          <div className="flex text-[1.6rem] font-[600] gap-[3rem] ">
            <span>Quantity</span>
            <div className="flex gap-[1rem] hover:cursor-pointer">
              <Image
                src={leftArrow}
                alt=""
                width={20}
                height={20}
                objectFit="contain"
                onClick={() => handleQuantity("decrement")}
              />
              <span className="border-2 px-[1rem] text-[1rem] flex items-center justify-center">
                {Quantity}
              </span>
              <Image
                src={rightArrow}
                alt=""
                width={20}
                height={20}
                objectFit="contain"
                onClick={() => handleQuantity("increment")}
              />
            </div>
          </div>
          {/* Button */}
          <div
            className="px-[1rem] py-[0.8rem] bg-[#f54748] hover:cursor-pointer w-[160px] text-[1rem] text-white text-center rounded-[2rem] hover:bg-gray-200 hover:text-[#f54748]"
            onClick={addToCart}
          >
            Add to Cart
          </div>
        </div>
        <Toaster />
      </div>

      {/* </div> */}
    </>
  );
}

export async function getStaticPaths() {
  const path = await client.fetch(
    `*[_type=="pizza" && defined(slug.current)][].slug.current`
  );
  return {
    paths: path.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const pizza = await client.fetch(
    `*[_type =="pizza" && slug.current == '${slug}'][0]`
  );

  return {
    props: {
      pizza,
    },
  };
}
