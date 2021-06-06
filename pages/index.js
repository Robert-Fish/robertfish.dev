import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <button className="bg-green-500 text-white hover:bg-white hover:text-green-500 p-2 rounded-md border-green-500 border">
        click me
      </button>
    </div>
  );
}
