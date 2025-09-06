"use client";
import { useRef } from 'react';

const sliderData = [
  { img: "/slider/slider1.jpg" },
  { img: "/slider/slider2.jpg" },
  { img: "/slider/slider3.jpg" },
];

export function Slider({ slide, setSlide }) {
  const sliderTrackRef = useRef(null);

  const prevSlide = () => setSlide((s) => (s === 0 ? sliderData.length - 1 : s - 1));
  const nextSlide = () => setSlide((s) => (s === sliderData.length - 1 ? 0 : s + 1));

  const handleTouchStart = (e) => { if(!sliderTrackRef.current) return; sliderTrackRef.current.touchStartX = e.touches[0].clientX; };
  const handleTouchEnd = (e) => { if(!sliderTrackRef.current || sliderTrackRef.current.touchStartX == null) return; const touchEndX = e.changedTouches[0].clientX; const swipeDistance = sliderTrackRef.current.touchStartX - touchEndX; if (Math.abs(swipeDistance) > 50) { swipeDistance > 0 ? nextSlide() : prevSlide(); } };

  return (
    <section className="w-full flex flex-col items-center mt-6 sm:mt-8">
      <div className="w-full px-3 sm:px-4 md:px-6">
        <div className="w-full bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden relative slider-container">
          <div
            className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] slider-wrapper"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              ref={sliderTrackRef}
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] h-full carousel-slide"
              style={{ transform: `translateX(-${slide * 100}%)` }}
            >
              {sliderData.map((item, idx) => (
                <div key={idx} className={`min-w-full h-full relative slide ${slide === idx ? 'active' : ''}`}>
                  <img src={item.img} alt="slide" className="w-full h-full object-cover block" draggable={false} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-2 py-3 bg-white slider-dots">
            {sliderData.map((_, idx) => (
              <span
                key={idx}
                className={`dot w-2 h-2 rounded-full transition-all duration-300 ${slide === idx ? 'bg-[#41e0b3] scale-125' : 'bg-gray-300'}`}
                onClick={() => setSlide(idx)}
                style={{ cursor: 'pointer' }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Añadir export default para compatibilidad con import default en HomeModular
export default Slider;
