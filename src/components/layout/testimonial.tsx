'use client';

import React from 'react';
import Image, { type StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination, A11y, Autoplay, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Testimonial = {
  name: string;
  location: string;
  text: string;
  avatar?: string | StaticImageData; // "/home/rachna.png" OR remote URL OR StaticImageData
  stars?: number;                    // default 5
};

/** === Replace with your data === */
const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Jayeshbhai Modi',
    location: 'Ahmedabad',
    text:
      'I was skeptical about AI bots until I tried Klypto’s passive income system. It actually delivers consistent results backed by backtesting and smart logic. I check it weekly, not hourly—crypto investing has never felt this calm.',
    avatar: '/images/home/jayesh.png',
  },
  {
    name: 'Brijesh Shetty',
    location: 'Navi Mumbai',
    text:
      'The customer support team at Klypto actually responds—fast and to the point. Transparent fees & updates are refreshing. I’ve moved all my active trading to Klypto for good.',
    avatar: '/images/home/brijesh.png', },
  {
    name: 'Kaushal Bainsla',
    location: 'Surat',
    text:
      'As someone new to crypto, I loved the Learn & Earn section. Klypto breaks complex topics into bite-sized guides. I went from confused to confident in a week.',
    avatar: '/images/home/kaushik.png',
  },
   {
    name: 'Rachita Goyal',
    location: 'Pune',
    text:
      '“I invited a few friends to Klypto and started earning instantly. The referral rewards are transparent, and payments are timely.It’s not just about me earning; they benefited too with welcome bonuses.Feels great to grow together in the crypto space!”',
    avatar: '/images/home/kaushik.png',
  },
];

export default function TestimonialsSwiper() {
  return (
    <section className="">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
        <div className="rounded-3xl p-6 sm:p-10 shadow-lg">
            <h2 className="font-poppins font-bold text-[32px] md:text-[48px] text-[#222] leading-tight mb-4 text-center">
            Recent <span className="text-[#2a82df]">Reviews</span> From Our Customers
          </h2>

          <div className="relative mt-8 sm:mt-10">
            <Swiper
              modules={[ Pagination, A11y, Autoplay, Keyboard]}
              navigation
              pagination={{ clickable: true }}
              keyboard={{ enabled: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop
              autoHeight={false}
              spaceBetween={20}
              breakpoints={{
                0:    { slidesPerView: 1, spaceBetween: 16 },
                640:  { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 24 },
              }}
              className="testimonial-swiper !pb-10"
            >
              {TESTIMONIALS.map((t, i) => (
                <SwiperSlide key={i} className="!h-auto">
                  <div className="h-full">
                    <Card {...t} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Theming + equal-height rules */}
            <style jsx global>{`
              .testimonial-swiper .swiper-wrapper { align-items: stretch; } /* equal height */
              .testimonial-swiper .swiper-slide { height: auto; }
              .swiper-button-next,
              .swiper-button-prev {
                width: 36px; height: 36px; border-radius: 9999px;
                background: #ffffff; color: #1d72e8;
                box-shadow: 0 2px 10px rgba(0,0,0,.12);
                border: 1px solid rgba(0,0,0,.08);
              }
              .swiper-button-next:after,
              .swiper-button-prev:after { font-size: 16px; }
              .swiper-pagination-bullet { background: #9ca3af; opacity: 1; }
              .swiper-pagination-bullet-active { background: #1d72e8; }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------ Card + bits ------------ */
function Card({ name, location, text, avatar, stars = 5 }: Testimonial) {
  return (
    <article className="flex h-full flex-col rounded-2xl bg-[#ffffff] p-5 sm:p-6 ring-1 ring-black/10 shadow-sm">
      <div className="flex items-start gap-4">
        <Avatar name={name} src={avatar} />
        <div className="mt-1">
          <TrustStars count={stars} />
        </div>
      </div>

      <h3 className="mt-3 text-base font-extrabold text-[#1A1A1A]">
        {name} <span className="font-semibold text-[#1A1A1A]"> {location}</span>
      </h3>

      <p className="mt-2 text-[#1A1A1A] leading-relaxed">“{text}”</p>
      <div className="mt-auto" />
    </article>
  );
}

/** Robust Avatar:
 * - accepts StaticImageData
 * - accepts '/public/...' style string (must start with '/')
 * - accepts accidental 'public/...' or relative strings — we normalize them
 * - for remote URLs, whitelist domain in next.config.js images.remotePatterns
 */
function Avatar({ name, src }: { name: string; src?: string | StaticImageData }) {
  if (src) {
    const normalized =
      typeof src === 'string'
        ? (src.startsWith('http') || src.startsWith('/'))
            ? src
            : `/${src.replace(/^\.?\.?\/?public\/?/, '')}`
        : src;

    return (
      <Image
        src={normalized}
        alt={name}
        width={56}
        height={56}
        className="h-14 w-14 rounded-full ring-2 ring-white object-cover"
      />
    );
  }
  const initials = name.split(' ').map(n => n[0]).slice(0,2).join('').toUpperCase();
  return (
    <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[#3490f3] to-[#44d1a1] text-white font-bold">
      {initials}
    </div>
  );
}

function TrustStars({ count = 5 }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="grid h-6 w-6 place-items-center rounded-sm bg-[#00B67A]" title="5-star">
          <Star className="h-3.5 w-3.5 text-white" />
        </span>
      ))}
    </div>
  );
}
function Star(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2l2.8 6 6.6.6-5 4.2 1.6 6.3L12 16.7 6 19.1l1.6-6.3-5-4.2 6.6-.6L12 2z"/>
    </svg>
  );
}
