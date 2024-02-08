import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Store = () => {
  return (
    <div className="flex  items-center justify-center h-screen flex-wrap">
      <Image src="/store.png" width={800} height={800} />
      <div className="flex flex-col items-center ">
        <h1 className="text-4xl text-center  text-[#FE1900] font-bold">
          Visit the band store
        </h1>
        <p>Get your favorite band merchandise</p>
        <Button text="Visit Store" href="event1" />
      </div>
    </div>
  );
};

export default Store;
