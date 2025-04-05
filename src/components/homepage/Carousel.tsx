import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

const reviews = [
  {
    name: "1",
    url: "https://i.imgur.com/Jm1ewD7.png",
  },
  {
    name: "2",
    url: "https://i.imgur.com/wRLkGL2.png",
  },
  {
    name: "3",
    url: "https://i.imgur.com/1ayPfeR.png",
  },
  {
    name: "4",
    url: "https://i.imgur.com/vUPNxGU.png",
  },
];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-md"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {reviews.map((work, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="bg-transparent shadow-none border-none">
                <CardContent className="flex aspect-square items-center justify-center">
                  <img src={work.url} alt="דוגמה לעבודה" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
