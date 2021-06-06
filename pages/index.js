import Container from "@/components/Container";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start  w-1/2 mx-auto mb-16 ">
        <div className="flex flex-row justify-evenly w-full items-center">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            Hey, I’m Robert Fish
          </h1>
          <Image
            alt="Lee Robinson"
            height={130}
            width={130}
            src="/avatar.jpeg"
            className="rounded-full"
          />
        </div>
      </div>
    </Container>
  );
}
