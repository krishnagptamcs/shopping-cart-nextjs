'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <section className="flex items-center justify-center  w-screen h-screen">
        <div className="w-1/3 p-1  flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl font-bold font-mono">Shopping cart</h1>

          <button
            className="p-2 bg-gray-500 border-2 border-black rounded-md "
            onClick={() => router.push("/products")}
          >
            Show Products
          </button>
        </div>
      </section>
    </>
  );
}
