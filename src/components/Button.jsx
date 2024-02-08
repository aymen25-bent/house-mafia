import Link from "next/link";

const Button = ({ text, href }) => {
  return (
    <Link
      href={`/${href}`}
      className="bg-[#FE1900] text-white px-10 py-4 rounded-full shadow-2xl font-bold mt-10 hover:bg-[#FE1900] hover:text-black transition duration-300 ease-in-out"
    >
      {text}
    </Link>
  );
};

export default Button;
