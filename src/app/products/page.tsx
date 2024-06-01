import { ProductType } from "@/types";
import Image from "next/image";
import React from "react";

const ProductsPage = () => {
  const products: ProductType[] = [
    {
      name: "Product 1",
      id: 1,
      imagePath: "https://source.unsplash.com/random",
      price: 100,
      description: "This is a description",
    },
    {
      name: "Product 2",
      id: 2,
      imagePath: "https://source.unsplash.com/random",
      price: 200,
      description: "This is a description",
    },
    {
      name: "Product 3",
      id: 3,
      imagePath: "https://source.unsplash.com/random",
      price: 300,
      description: "This is a description",
    },
    {
      name: "Product 4",
      id: 4,
      imagePath: "https://source.unsplash.com/random",
      price: 400,
      description: "This is a description",
    },
    {
      name: "Product 5",
      id: 5,
      imagePath: "https://source.unsplash.com/random",
      price: 400,
      description: "This is a description",
    },
    {
      name: "Product 6",
      id: 6,
      imagePath: "https://source.unsplash.com/random",
      price: 700,
      description: "This is a description",
    },
  ];

  return (
    <section className="w-11/12 mx-auto space-y-4 mt-6">
      <h1 className="text-2xl font-bold  text-center">
        {" "}
        Select the prodcut you want to purchase
      </h1>
      {/* div to show product cards */}
      <div className="grid grid-cols-4 gap-5 ">
        {products &&
          products?.map((item) => (
            <>
              <div className="border-2 border-gray-300 rounded-md p-2 space-y-3 w-full">
                <Image
                  src={item.imagePath}
                  alt={item?.name}
                  width={200}
                  height={200}
                  className="w-full h-52 "
                />

                {/* name and price  */}

                <div className="flex items-center justify-between">
                  <span>{item?.name}</span>
                  <span>{item?.price}</span>
                </div>

                <div className="flex items-center justify-between">
                  <button>View</button>
                  <button className="bg-orange-400 p-1 rounded-lg">
                    Add To Cart
                  </button>
                </div>
              </div>
            </>
          ))}
      </div>
    </section>
  );
};

export default ProductsPage;
