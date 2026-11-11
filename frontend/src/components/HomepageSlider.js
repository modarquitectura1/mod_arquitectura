"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { homePageBannersData } from "@/data/slider";

const SLIDE_COUNT = homePageBannersData.length;

function padIndex(value) {
  return String(value).padStart(2, "0");
}

function ArrowIcon({ direction }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={
          direction === "left"
            ? "M19 12H5M11 6l-6 6 6 6"
            : "M5 12h14M13 6l6 6-6 6"
        }
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HomepageSlides() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const banner = homePageBannersData[activeIndex] ?? homePageBannersData[0];

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncAutoplay = () => {
      const swiper = swiperRef.current;
      if (!swiper?.autoplay) return;

      if (media.matches) {
        swiper.autoplay.stop();
        return;
      }

      swiper.autoplay.start();
    };

    syncAutoplay();
    media.addEventListener("change", syncAutoplay);

    return () => media.removeEventListener("change", syncAutoplay);
  }, []);

  return (
    <section className="hero-bg" aria-label="Proyectos destacados">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        modules={[Autoplay, EffectFade, Keyboard]}
        slidesPerView={1}
        loop
        speed={800}
        autoplay={{
          delay: 5600,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        keyboard={{ enabled: true, onlyInViewport: true }}
        className="hero-bg-swiper"
      >
        {homePageBannersData.map((item, index) => (
          <SwiperSlide
            key={item.id}
            aria-label={`${index + 1} de ${SLIDE_COUNT}: ${item.project_name}`}
          >
            <Image
              src={item.image}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className="hero-bg-photo"
              draggable={false}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="hero-bg-scrim" aria-hidden="true" />

      <div className="container hero-bg-copy">
        <h1 className="hero-bg-title">
          MOD Arq.
          <br />
          Transforma espacios
          <br />
          en obras de arte
        </h1>
        <p className="hero-bg-lead">
          Nuestro equipo de diseñadores expertos trabaja estrechamente con los
          clientes para crear espacios únicos, funcionales y hermosos que están
          adaptados a sus necesidades y preferencias específicas.
        </p>
        <Link href="/proyectos" className="hero-bg-cta">
          Ver más proyectos
          <ArrowIcon direction="right" />
        </Link>
      </div>

      <div className="container hero-bg-foot">
        <div className="hero-bg-plate" aria-live="polite">
          <div>
            <p className="hero-bg-kicker">Último proyecto</p>
            <h2 className="hero-bg-project">{banner.project_name}</h2>
            <p className="hero-bg-year">{banner.completed_title}</p>
          </div>
          <dl className="hero-bg-meta">
            <div>
              <dt>Ubicación</dt>
              <dd>{banner.address}</dd>
            </div>
            <div>
              <dt>Categoría</dt>
              <dd>{banner.theme_style}</dd>
            </div>
            <div>
              <dt>Arquitecto</dt>
              <dd>{banner.architect}</dd>
            </div>
          </dl>
        </div>

        <div className="hero-bg-controls">
          <p className="hero-bg-index" aria-hidden="true">
            <span>{padIndex(activeIndex + 1)}</span>
            <span className="hero-bg-index-rule" />
            <span>{padIndex(SLIDE_COUNT)}</span>
          </p>
          <div className="hero-bg-nav">
            <button
              type="button"
              aria-label="Proyecto anterior"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              type="button"
              aria-label="Proyecto siguiente"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/*
ROLLBACK — framed inset hero. Replace the default export above with this
component, and uncomment the ".home-hero-*" block in _hero-area.scss.

"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { homePageBannersData } from "@/data/slider";

const SLIDE_COUNT = homePageBannersData.length;

function padIndex(value) {
  return String(value).padStart(2, "0");
}

function ArrowIcon({ direction }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={direction === "left" ? "M19 12H5M11 6l-6 6 6 6" : "M5 12h14M13 6l6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HomepageSlides() {
  const swiperRef = useRef(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncAutoplay = () => {
      const swiper = swiperRef.current;
      if (!swiper?.autoplay) return;
      if (media.matches) swiper.autoplay.stop();
      else swiper.autoplay.start();
    };
    syncAutoplay();
    media.addEventListener("change", syncAutoplay);
    return () => media.removeEventListener("change", syncAutoplay);
  }, []);

  return (
    <div className="home-hero-slider">
      <div className="container">
        <div className="home-hero-frame">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Autoplay, EffectFade, Keyboard]}
            slidesPerView={1}
            loop
            speed={700}
            autoplay={{ delay: 5200, disableOnInteraction: false, pauseOnMouseEnter: true }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            keyboard={{ enabled: true, onlyInViewport: true }}
            className="home-hero-swiper"
          >
            {homePageBannersData.map((banner, index) => (
              <SwiperSlide key={banner.id} className="home-hero-slide">
                <Image src={banner.image} alt={banner.project_name} fill priority={index === 0} sizes="(max-width: 1400px) 100vw, 1200px" className="home-hero-photo" />
                <div className="home-hero-veil" aria-hidden="true" />
                <p className="home-hero-index" aria-hidden="true">
                  <span>{padIndex(index + 1)}</span>
                  <span className="home-hero-index-rule" />
                  <span>{padIndex(SLIDE_COUNT)}</span>
                </p>
                <div className="home-hero-card">
                  <div className="home-hero-copy">
                    <p className="home-hero-kicker">Último proyecto</p>
                    <h3 className="home-hero-title">{banner.project_name}</h3>
                    <p className="home-hero-year">{banner.completed_title}</p>
                  </div>
                  <dl className="home-hero-meta">
                    <div><dt>Ubicación</dt><dd>{banner.address}</dd></div>
                    <div><dt>Categoría</dt><dd>{banner.theme_style}</dd></div>
                    <div><dt>Arquitecto</dt><dd>{banner.architect}</dd></div>
                  </dl>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="home-hero-nav">
            <button type="button" onClick={() => swiperRef.current?.slidePrev()}><ArrowIcon direction="left" /></button>
            <button type="button" onClick={() => swiperRef.current?.slideNext()}><ArrowIcon direction="right" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
*/
