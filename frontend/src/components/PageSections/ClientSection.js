"use client";

import Image from "next/image";
import SliderModule from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// "type": "module" makes webpack return the whole CommonJS exports object here.
const Slider = SliderModule.default ?? SliderModule;
import { clients } from "@/data/client";

export default function ClientSection({ customClass }) {
  // Carousel settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={`client-area section-padding ${customClass}`}>
      <div className="container">
        <div className="align-items-center">
          <div className="col-12">
            <Slider {...settings} className="client-wrap">
              {clients.map((client) => (
                <div key={client.id} className="single-client">
                  <a href={client.link}>
                    <Image
                      src={client.img}
                      alt={`Client ${client.id}`}
                      style={{ height: "auto" }}
                    />
                  </a>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
