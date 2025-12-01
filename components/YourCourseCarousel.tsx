"use client";

import Autoplay from "embla-carousel-autoplay";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const YourCardCarousel = () => {
  const images = [
    {
      src: "/images/13.jpeg",
      alt: "Illustrations by ©AarzooAly",
      title: "Block Reader",
    },
    {
      src: "/images/9.jpeg",
      alt: "Illustrations by ©AarzooAly",
      title: "Forest Fungi",
    },
    {
      src: "/images/20.jpeg",
      alt: "Illustrations by ©AarzooAly",
      title: "Golden Dusk",
    },
    {
      src: "/images/21.jpeg",
      alt: "Illustrations by ©AarzooAly",
      title: "Silent Peaks",
    },
    {
      src: "/images/25.jpeg",
      alt: "Illustrations by ©AarzooAly",
      title: "Emerald Woods",
    },
    {
      src: "/images/32.jpeg",
      alt: "Illustrations by ©AarzooAly",
      title: "Falling Mist",
    },
    {
      src: "/images/19.jpeg",
      alt: "Illustrations by ©AarzooAly",
      title: "Midnight Veil",
    },
    {
      src: "/images/3.jpeg",
      alt: "Illustrations by ©AarzooAly",
      title: "Azure Ridge",
    },
    {
      src: "/images/2.jpeg",
      alt: "Illustrations by ©AarzooAly",
      title: "Cloud Summit",
    },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden">
      <Carousel_006
        images={images}
        className=""
        loop={true}
        showNavigation={true}
        showPagination={true}
      />
    </div>
  );
};

interface Carousel_006Props {
  images: { src: string; alt: string; title: string }[];
  className?: string;
  autoplay?: boolean;
  loop?: boolean;
  showNavigation?: boolean;
  showPagination?: boolean;
}

const Carousel_006 = ({
  images,
  className,
  autoplay = false,
  loop = true,
  showPagination = true,
}: Carousel_006Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [fullscreenImageIndex, setFullscreenImageIndex] = useState<
    number | null
  >(null);

  useEffect(() => {
    if (!api) return;
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <>
      <Carousel
        setApi={setApi}
        className={cn("w-full", className)}
        opts={{
          loop,
          slidesToScroll: 1,
          align: "start",
          dragFree: true,
        }}
        plugins={[
          ...(autoplay
            ? [
                Autoplay({
                  delay: 2000,
                  stopOnInteraction: true,
                  stopOnMouseEnter: true,
                }),
              ]
            : []),
          WheelGesturesPlugin(),
        ]}
      >
        <CarouselContent className="flex h-[60dvh] w-full">
          {images.map((img, index) => (
            <CarouselItem
              key={index}
              className="relative flex h-[81.5%] w-full basis-[73%] items-center justify-center sm:basis-[50%] md:basis-[30%] lg:basis-[25%] xl:basis-[21%]"
              onClick={() => setCurrent(index)}
            >
              <motion.div
                initial={false}
                animate={{
                  clipPath:
                    current !== index
                      ? "inset(15% 0 15% 0 round 2rem)"
                      : "inset(0 0 0 0 round 2rem)",
                }}
                className="h-full w-full overflow-hidden rounded-3xl cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setFullscreenImageIndex(index);
                }}
              >
                <div className="relative h-full w-full border">
                  <img
                    src={img.src || "/placeholder.svg"}
                    alt={img.alt}
                    className="h-full w-full scale-105 object-cover"
                  />
                </div>
              </motion.div>
              <AnimatePresence mode="wait">
                {current === index && (
                  <motion.div
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.5 }}
                    className="absolute bottom-20 left-4 flex h-[14%] w-full translate-y-full items-center justify-start p-2 text-center font-medium tracking-tight text-primary-foreground"
                  >
                    {img.title}
                  </motion.div>
                )}
              </AnimatePresence>
            </CarouselItem>
          ))}
        </CarouselContent>
        {showPagination && (
          <div className="flex w-full items-center justify-start absolute bottom-18 left-4">
            <div className="flex items-center justify-center gap-2">
              {Array.from({ length: images.length }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={cn(
                    "h-2 w-2 cursor-pointer rounded-full transition-all duration-300",
                    current === index ? "bg-primary w-6" : "bg-secondary/50",
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </Carousel>

      <AnimatePresence>
        {fullscreenImageIndex !== null && (
          <>
            {/* Background overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 z-40 backdrop-blur-sm"
              onClick={() => setFullscreenImageIndex(null)}
            />

            {/* Fullscreen image container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <motion.img
                  src={images[fullscreenImageIndex].src}
                  alt={images[fullscreenImageIndex].alt}
                  className="w-full h-full object-cover rounded-4xl "
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                />

                {/* Close button */}
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: 0.15 }}
                  onClick={() => setFullscreenImageIndex(null)}
                  className="absolute top-4 right-4 md:top-6 md:right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-colors z-10"
                  aria-label="Close fullscreen"
                >
                  <X className="w-6 h-6 text-white" />
                </motion.button>

                {/* Image title in fullscreen */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-white"
                >
                  <h2 className="text-lg md:text-2xl font-semibold tracking-tight">
                    {images[fullscreenImageIndex].title}
                  </h2>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default YourCardCarousel;
