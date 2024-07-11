import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen w-screen max-h-screen max-w-screen overflow-hidden bg-neutral-900">
      <Carousel>
        <CarouselContent className="w-screen h-screen max-w-md text-white align-middle -ml-0">
          <CarouselItem className="bg-[url('/bg-1.svg')] bg-cover bg-no-repeat w-full h-full p-0">
            <section className="flex flex-col h-full items-center p-4">
              <p className="self-start">NB</p>
              <div className="flex flex-col items-center gap-5 mt-32">
                <p className="text-sm tracking-[0.3em] font-thin">
                  <span className="text-xl">T</span>HE{" "}
                  <span className="text-xl">W</span>EDDING OF
                </p>
                <p className="title-text text-5xl">Nova & Bagus</p>
                <p className="text-sm tracking-[0.3em] font-thin">
                  SUN 16 SEP 2024
                </p>
              </div>
              <div className="flex flex-col items-center gap-2 mt-72 tracking-[0.2em]">
                <p className="text-sm font-thin">
                  <span className="text-lg leading-5">K</span>EPADA{" "}
                  <span className="text-lg leading-5">YTH.</span>
                </p>
                <p className="text-sm font-extrabold">IBRAM</p>
                <p className="text-sm font-thin">DI TEMPAT</p>
              </div>
              <p className="self-end mt-auto">1 / 9</p>
            </section>
          </CarouselItem>
          <CarouselItem className="bg-[url('/bg-2.svg')] bg-cover bg-no-repeat w-full h-full">
            test
          </CarouselItem>
          <CarouselItem className="bg-[url('/bg-3.svg')] bg-cover bg-no-repeat w-full h-full">
            test
          </CarouselItem>
          <CarouselItem className="bg-[url('/bg-4.svg')] bg-cover bg-no-repeat w-full h-full">
            test
          </CarouselItem>
          <CarouselItem className="bg-[url('/bg-4.svg')] bg-cover bg-no-repeat w-full h-full">
            test
          </CarouselItem>
          <CarouselItem className="w-full h-full">test</CarouselItem>
          <CarouselItem className="bg-[url('/bg-5.svg')] bg-cover bg-no-repeat w-full h-full">
            test
          </CarouselItem>
          <CarouselItem className="bg-[url('/bg-6.svg')] bg-cover bg-no-repeat w-full h-full">
            test
          </CarouselItem>
          <CarouselItem className="w-full h-full">test</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </main>
  );
}
