import React, { useState, useEffect, useMemo } from 'react';
import { MessageCircle, X, ArrowRight, RotateCw, MapPin, Clock, Phone, ArrowUpRight, Menu, Filter, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  flowers: string[];
  price: number;
  image: string;
}

const CATEGORIES = ["Catálogo"];
const NAV_LINKS = [...CATEGORIES, "Visítanos"];
const BACKGROUND_VIDEOS = [
  "https://www.pexels.com/es-es/download/video/12745682/",
  "https://www.pexels.com/es-es/download/video/1494279/",
  "https://www.pexels.com/es-es/download/video/29659853/"
];

const products: Product[] = [
  {
    id: 11,
    name: "Rosas Decoradas",
    category: "Colección Día de la Mujer",
    description: "",
    flowers: ["3 rosas decoradas"],
    price: 25000,
    image: "/products/product-11.png"
  },
  {
    id: 14,
    name: "Girasol Decorado",
    category: "Colección Día de la Mujer",
    description: "",
    flowers: ["1 girasol decorado"],
    price: 30000,
    image: "/products/product-14.png"
  },
  {
    id: 15,
    name: "Girasol y Rosas con Follaje",
    category: "Colección Día de la Mujer",
    description: "",
    flowers: ["1 girasol, 4 rosas y follaje"],
    price: 50000,
    image: "/products/product-15.png"
  },
  {
    id: 16,
    name: "Rosas y Girasoles",
    category: "Colección Día de la Mujer",
    description: "",
    flowers: ["4 rosas, 2 girasoles y follaje"],
    price: 65000,
    image: "/products/product-16.png"
  },
  {
    id: 17,
    name: "Rosas con Follaje",
    category: "Colección Día de la Mujer",
    description: "",
    flowers: ["9 rosas y follaje"],
    price: 70000,
    image: "/products/product-17.png"
  },
  {
    id: 18,
    name: "Girasol y Rosas",
    category: "Colección Día de la Mujer",
    description: "",
    flowers: ["1 girasol y 6 rosas"],
    price: 75000,
    image: "/products/product-18.png"
  },
  {
    id: 19,
    name: "Ramillete Astromelias, Rosas y Lirios",
    category: "Colección Día de la Mujer",
    description: "",
    flowers: ["Astromelias, rosas, lirios y follaje"],
    price: 80000,
    image: "/products/product-19.png"
  },
  {
    id: 20,
    name: "Ramillete de Girasoles",
    category: "Colección Día de la Mujer",
    description: "",
    flowers: ["3 girasoles, yipso y eucalipto"],
    price: 80000,
    image: "/products/product-20.png"
  },
  {
    id: 21,
    name: "Rosas y Yipso",
    category: "Colección Día de la Mujer",
    description: "",
    flowers: ["12 rosas y yipso"],
    price: 85000,
    image: "/products/product-21.png"
  },
  {
    id: 22,
    name: "Virgen, Chocolates y Sinvidio",
    category: "Colección Día de la Mujer",
    description: "",
    flowers: ["Virgen mediana", "Ferrero x4", "Cymbidium"],
    price: 90000,
    image: "/products/product-22.png"
  },
  {
    id: 1,
    name: "Girasol y Rosas",
    category: "Colección Día de la Mujer",
    description: "",
    flowers: ["1 girasol y 12 rosas"],
    price: 100000,
    image: "/products/product-1.png"
  },
  {
    id: 2,
    name: "Girasol y Rosas Edición II",
    category: "Colección Día de la Mujer",
    description: "",
    flowers: ["1 girasol y 12 rosas"],
    price: 100000,
    image: "/products/product-2.png"
  },
  {
    id: 3,
    name: "Rosas y Chocolates",
    category: "Colección Día de la Mujer",
    description: "",
    flowers: ["12 rosas", "Ferrero x8"],
    price: 120000,
    image: "/products/product-3.png"
  },
  {
    id: 4,
    name: "Arreglo Especial con Peluche",
    category: "Colección Día de la Mujer",
    description: "",
    flowers: ["5 rosas y 1 girasol", "Ferrero x4", "Peluche 20cm"],
    price: 120000,
    image: "/products/product-4.png"
  },
  {
    id: 5,
    name: "Arreglo de Rosas Elegante",
    category: "Colección Día de la Mujer",
    description: "",
    flowers: ["12 rosas con follaje"],
    price: 140000,
    image: "/products/product-5.png"
  },
  {
    id: 6,
    name: "Rosas y Varas de Lirio",
    category: "Colección Día de la Mujer",
    description: "",
    flowers: ["15 rosas y 3 varas de lirio"],
    price: 150000,
    image: "/products/product-6.png"
  },
  {
    id: 7,
    name: "Rosas con Mensaje",
    category: "Colección Día de la Mujer",
    description: "",
    flowers: ["24 rosas", "Mensaje personalizado"],
    price: 150000,
    image: "/products/product-7.png"
  },
  {
    id: 8,
    name: "Arreglo de Rosas Premium",
    category: "Colección Día de la Mujer",
    description: "",
    flowers: ["24 rosas"],
    price: 160000,
    image: "/products/product-8.png"
  },
  {
    id: 9,
    name: "Rosas y Fresas Achocolatadas",
    category: "Colección Día de la Mujer",
    description: "",
    flowers: ["24 rosas", "6 fresas cubiertas de chocolate"],
    price: 190000,
    image: "/products/product-9.png"
  },
  {
    id: 10,
    name: "Girasoles y Follaje",
    category: "Colección Día de la Mujer",
    description: "",
    flowers: ["10 girasoles y follaje"],
    price: 200000,
    image: "/products/product-10.png"
  },
  {
    id: 12,
    name: "Rosas, Peluche y Chocolates",
    category: "Colección Día de la Mujer",
    description: "",
    flowers: ["24 rosas", "Peluche 30cm", "Ferrero x8"],
    price: 250000,
    image: "/products/product-12.png"
  },
  {
    id: 13,
    name: "Girasoles, Rosas y Globo",
    category: "Colección Día de la Mujer",
    description: "",
    flowers: ["8 girasoles y 12 rosas", "Globo personalizado"],
    price: 280000,
    image: "/products/product-13.png"
  }
];

interface CollectionCardProps {
  product: Product;
}

const CollectionCard: React.FC<CollectionCardProps> = ({ product }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    const formattedPrice = new Intl.NumberFormat('es-CO').format(product.price);
    const message = `Hola AVA Concierge. Me interesa adquirir el arreglo "${product.name}" (Precio: $${formattedPrice} COP) de la Colección Día de la Mujer. ¿Podrían asistirme?`;
    const url = `https://wa.me/573152838537?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4 }}
      className="relative w-[85vw] md:w-[400px] aspect-[3/4] cursor-pointer perspective-1000 group flex-shrink-0 snap-center md:snap-start"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      {/* Hover Lift Wrapper */}
      <div className="w-full h-full transition-all duration-700 ease-out md:group-hover:-translate-y-3 md:group-hover:scale-[1.02]">
        {/* Container for 3D flip */}
        <div
          className={`w-full h-full transition-transform duration-[1.2s] ease-[cubic-bezier(0.23,1,0.32,1)] transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
        >
          {/* FRONT - Modern Rounded Corners */}
          <div className="absolute inset-0 backface-hidden bg-[#0a0a0a] rounded-3xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-700 md:group-hover:border-white/20 md:group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.8)]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"></div>

            <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col items-center text-center">
              <h3 className="font-serif text-3xl md:text-4xl font-light tracking-wide text-white mb-3">
                {product.name}
              </h3>
              <div className="w-0 group-hover:w-12 h-[1px] bg-white/50 transition-all duration-700 ease-out mb-4"></div>
              <div className="flex items-center gap-2 text-white/50 group-hover:text-white/90 transition-colors duration-500">
                <RotateCw size={10} strokeWidth={1.5} />
                <span className="font-sans text-[9px] uppercase tracking-[0.3em]">
                  Tocar para detalles
                </span>
              </div>
            </div>
          </div>

          {/* BACK - 3D Floating Modal Panel */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl transform-style-3d transition-all duration-700 md:group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.8)]">

            {/* Aesthetic Back Background */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden bg-[#050505] border border-white/10 shadow-2xl transition-all duration-700 md:group-hover:border-white/20">
              <img
                src={product.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-20 blur-2xl scale-125 pointer-events-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/90 pointer-events-none"></div>
              {/* Subtle AVA watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                <span className="font-serif text-8xl tracking-widest">AVA</span>
              </div>
            </div>

            {/* Floating Modal Panel Wrapper */}
            <div
              className="absolute inset-0 transform-style-3d pointer-events-none"
              style={{ transform: 'translateZ(60px)' }}
            >
              <div
                className={`absolute inset-4 md:inset-5 bg-[#0a0a0a]/60 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] p-6 flex flex-col items-center text-center justify-center backface-hidden transition-all duration-1000 pointer-events-auto ${isFlipped ? 'opacity-100 translate-y-0 delay-[400ms] ease-[cubic-bezier(0.23,1,0.32,1)]' : 'opacity-0 translate-y-8'}`}
              >
                <h3 className="font-serif text-3xl md:text-4xl font-light text-white mb-6 tracking-wide mt-4">{product.name}</h3>
                <div className="w-8 h-[1px] bg-white/20 mb-auto"></div>

                <div className="w-full bg-white/[0.02] rounded-2xl p-6 border border-white/5 shadow-inner">
                  <h4 className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-white/50 mb-4">Composición</h4>
                  <ul className="font-sans text-xs md:text-sm text-white/90 space-y-2.5 font-light tracking-wider">
                    {product.flowers.map((flower, idx) => (
                      <li key={idx} className="flex items-center justify-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-white/30"></span>
                        {flower}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto mb-8">
                  <span className="font-sans font-light text-2xl md:text-3xl tracking-widest text-white">${new Intl.NumberFormat('es-CO').format(product.price)}</span>
                  <span className="font-sans text-[10px] text-white/40 ml-2 tracking-widest uppercase">COP</span>
                </div>

                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-white text-black hover:bg-gray-200 font-sans text-[9px] md:text-[10px] uppercase tracking-[0.2em] py-3.5 px-4 rounded-full transition-all duration-500 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] group"
                >
                  <MessageCircle size={14} strokeWidth={1.5} className="group-hover:scale-110 transition-transform duration-500" />
                  <span className="font-medium">Comprar por WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface CategorySectionProps {
  group: {
    category: string;
    items: Product[];
  };
  isLast: boolean;
}

const CategorySection: React.FC<CategorySectionProps> = ({ group, isLast }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;

    let snapWidth = container.clientWidth;
    if (container.children.length > 1) {
      const first = container.children[0] as HTMLElement;
      const second = container.children[1] as HTMLElement;
      snapWidth = second.offsetLeft - first.offsetLeft;
    } else if (container.children.length > 0) {
      snapWidth = (container.children[0] as HTMLElement).clientWidth;
    }

    if (snapWidth > 0) {
      const index = Math.round(scrollLeft / snapWidth);
      setActiveIndex(Math.min(Math.max(index, 0), group.items.length - 1));
    }
  };

  return (
    <section
      id={group.category}
      className={`pt-16 md:pt-32 ${isLast ? 'pb-32' : 'pb-16'}`}
    >
      {/* Section Header */}
      <div className="px-6 md:px-12 mb-10 md:mb-16 flex items-end justify-between">
        <div>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-white/90 tracking-wide">
            {group.category}
          </h2>
          <div className="w-12 h-[1px] bg-white/20 mt-6"></div>
        </div>
        <div className="flex items-center gap-3 text-white/30 pb-2">
          <span className="font-sans text-[8px] md:text-[9px] uppercase tracking-[0.3em] hidden sm:inline">Deslizar para explorar</span>
          <span className="font-sans text-[8px] md:text-[9px] uppercase tracking-[0.3em] sm:hidden">Explorar</span>
          <ArrowRight size={14} strokeWidth={1} />
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory px-6 md:px-12 pb-8 gap-6 md:gap-10"
      >
        <AnimatePresence mode='popLayout'>
          {group.items.map(product => (
            <CollectionCard
              key={product.id}
              product={product}
            />
          ))}
          {group.items.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="w-full py-20 flex flex-col items-center justify-center text-white/40"
            >
              <Filter size={32} className="mb-4 opacity-50" />
              <p className="font-sans text-sm font-light">No encontramos arreglos con estos filtros.</p>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Spacer to ensure the last item doesn't stick to the right edge */}
        <div className="w-2 md:w-12 flex-shrink-0"></div>
      </div>

      {/* Minimalist Pagination Dots */}
      <div className="flex justify-center items-center gap-3 mt-2">
        {group.items.map((_, idx) => (
          <div
            key={idx}
            className={`rounded-full transition-all duration-700 ${idx === activeIndex
              ? 'w-1.5 h-1.5 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]'
              : 'w-1 h-1 bg-white/20'
              }`}
          />
        ))}
      </div>
    </section>
  );
};

const VisitUsSection = () => {
  return (
    <section id="Visítanos" className="pt-16 md:pt-32 pb-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 md:mb-16 flex items-end justify-between">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-white/90 tracking-wide">
              Visítanos
            </h2>
            <div className="w-12 h-[1px] bg-white/20 mt-6"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 bg-[#0a0a0a] rounded-3xl border border-white/5 overflow-hidden shadow-2xl relative">

          {/* Subtle background glow */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none"></div>

          {/* Info Column */}
          <div className="lg:col-span-5 p-10 md:p-16 flex flex-col justify-center relative z-10">
            <h3 className="font-serif text-3xl font-light text-white mb-6">Nuestra Boutique</h3>
            <p className="font-sans text-white/60 text-sm leading-relaxed font-light mb-12">
              Un espacio diseñado para inspirar. Descubre nuestras colecciones en persona y permite que nuestros floristas expertos te asesoren en la creación del arreglo perfecto.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10">
                  <MapPin size={14} className="text-white/70" />
                </div>
                <div>
                  <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2">Ubicación</h4>
                  <p className="font-sans text-sm text-white/80 font-light">AVA Flores<br />Floridablanca, Santander<br />Colombia</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10">
                  <Clock size={14} className="text-white/70" />
                </div>
                <div>
                  <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2">Horario</h4>
                  <p className="font-sans text-sm text-white/80 font-light">Lunes - Sábado: 9:00 AM - 7:00 PM<br />Domingos: Cerrado</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10">
                  <Phone size={14} className="text-white/70" />
                </div>
                <div>
                  <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2">Contacto</h4>
                  <p className="font-sans text-sm text-white/80 font-light">+57 300 000 0000</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Column */}
          <div className="lg:col-span-7 relative min-h-[400px] lg:min-h-full group cursor-pointer overflow-hidden" onClick={() => window.open('https://maps.app.goo.gl/ba4biTpFPPoAypvK6', '_blank')}>
            {/* Map Iframe */}
            <iframe
              src="https://maps.google.com/maps?q=7.0633,-73.0911&t=&z=12&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 w-full h-full pointer-events-none scale-110"
              style={{ filter: 'grayscale(100%) invert(100%) contrast(85%) opacity(0.8)' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Map Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent opacity-80 lg:opacity-100 pointer-events-none z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80 lg:hidden pointer-events-none z-10"></div>

            {/* Dotted Area Overlay */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-20">
              <svg viewBox="0 0 400 400" className="w-[140%] h-[140%] md:w-[120%] md:h-[120%] max-w-none opacity-40">
                <path
                  d="M 200 60 C 320 60, 360 140, 360 200 C 360 280, 280 340, 200 340 C 100 340, 40 280, 40 200 C 40 120, 100 60, 200 60 Z"
                  fill="rgba(255,255,255,0.03)"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeDasharray="4 8"
                />
              </svg>
            </div>

            {/* Area Label */}
            <div className="absolute top-6 right-6 md:top-8 md:right-8 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 pointer-events-none z-20">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full border border-white/50 border-dashed animate-[spin_4s_linear_infinite]"></div>
                <span className="font-sans text-[8px] md:text-[9px] uppercase tracking-widest text-white/80">Cobertura: Bucaramanga, Girón, Piedecuesta</span>
              </div>
            </div>

            {/* Custom Pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none z-30">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.3)] mb-2 relative">
                <div className="absolute inset-0 rounded-full border border-white animate-ping opacity-20"></div>
                <span className="font-serif text-xl text-black">A</span>
              </div>
              <div className="bg-black/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 mt-2">
                <span className="font-sans text-[10px] uppercase tracking-widest text-white">AVA Flores</span>
              </div>
            </div>

            {/* Hover Action */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px] z-40">
              <div className="bg-white text-black px-6 py-3 rounded-full font-sans text-[10px] uppercase tracking-[0.2em] flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-2xl">
                <span>Abrir en Maps</span>
                <ArrowUpRight size={14} strokeWidth={1.5} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const FILTERS = [
  { id: 'rosas', label: '🌹 Rosas', check: (p: Product) => p.name.toLowerCase().includes('rosa') || p.flowers.some(f => f.toLowerCase().includes('rosa')) },
  { id: 'girasoles', label: '🌻 Girasoles', check: (p: Product) => p.name.toLowerCase().includes('girasol') || p.flowers.some(f => f.toLowerCase().includes('girasol')) },
  { id: 'chocolates', label: '🍫 Chocolates', check: (p: Product) => p.name.toLowerCase().includes('chocolate') || p.name.toLowerCase().includes('ferrero') || p.flowers.some(f => f.toLowerCase().includes('ferrero')) },
  { id: 'peluches', label: '🧸 Peluches', check: (p: Product) => p.name.toLowerCase().includes('peluche') || p.flowers.some(f => f.toLowerCase().includes('peluche')) },
  { id: 'menos100', label: '💰 < $100k', check: (p: Product) => p.price < 100000 },
  { id: 'premium', label: '💎 Premium', check: (p: Product) => p.price >= 150000 },
];

export default function App() {
  const [activeSection, setActiveSection] = useState(CATEGORIES[0]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  const toggleFilter = (filterId: string) => {
    setActiveFilters(prev =>
      prev.includes(filterId)
        ? prev.filter(f => f !== filterId)
        : [...prev, filterId]
    );
  };

  // Background Video Carousel Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % BACKGROUND_VIDEOS.length);
    }, 10000); // Change video every 10 seconds
    return () => clearInterval(interval);
  }, []);

  // Group products by category
  const groupedProducts = useMemo(() => {
    // First, filter products based on active filters
    let filteredProducts = products;

    if (activeFilters.length > 0) {
      filteredProducts = products.filter(product => {
        // If multiple filters are active, product must match ALL of them (AND logic)
        // Or you can change to OR logic by using .some()
        return activeFilters.every(filterId => {
          const filterDef = FILTERS.find(f => f.id === filterId);
          return filterDef ? filterDef.check(product) : true;
        });
      });
    }

    return CATEGORIES.map(category => ({
      category,
      items: filteredProducts // ignoring specific category mapping since they are all "Colección Día de la Mujer" but we just want one unified list
    }));
  }, [activeFilters]);

  // Scroll Spy Logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-20% 0px -60% 0px" }
    );

    NAV_LINKS.forEach((category) => {
      const element = document.getElementById(category);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen text-white selection:bg-white/20 font-sans flex flex-col md:flex-row relative">

      {/* BACKGROUND VIDEO CAROUSEL */}
      <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#050505]">
        {BACKGROUND_VIDEOS.map((src, index) => (
          <video
            key={src}
            autoPlay
            loop
            muted
            playsInline
            className={`absolute inset-0 w-full h-full object-cover blur-xl scale-110 transition-opacity duration-[3000ms] ease-in-out ${index === currentVideoIndex ? 'opacity-65' : 'opacity-0'
              }`}
          >
            <source src={src} type="video/mp4" />
          </video>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-[#050505]/90"></div>
      </div>

      {/* MOBILE HEADER (Sticky) */}
      <nav className="md:hidden sticky top-0 z-50 bg-[#050505]/90 backdrop-blur-xl border-b border-white/5 px-6 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="font-serif text-2xl tracking-widest text-white/90">AVA</span>
          <span className="font-sans text-[8px] uppercase tracking-[0.2em] text-white/40 border-l border-white/10 pl-3">Catálogo Día de la Mujer</span>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="text-white/60 hover:text-white p-2 transition-colors"
        >
          <Menu size={24} strokeWidth={1} />
        </button>
      </nav>

      {/* MOBILE FULLSCREEN MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-2xl flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-20 py-5">
              <div className="flex items-center gap-3">
                <span className="font-serif text-2xl tracking-widest text-white/90">AVA</span>
                <span className="font-sans text-[8px] uppercase tracking-[0.2em] text-white/40 border-l border-white/10 pl-3">Catálogo Día de la Mujer</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white/60 hover:text-white p-2"
              >
                <X size={24} strokeWidth={1} />
              </button>
            </div>

            <div className="flex flex-col gap-10 items-center justify-center flex-1 pb-20">
              {NAV_LINKS.map((category) => (
                <button
                  key={category}
                  onClick={() => scrollToSection(category)}
                  className="font-serif text-4xl font-light tracking-wide text-white/70 hover:text-white transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* DESKTOP SIDEBAR (Sticky) */}
      <aside className="hidden md:flex flex-col w-72 lg:w-80 sticky top-0 h-screen border-r border-white/5 p-12 justify-between flex-shrink-0">
        <div>
          <div className="mb-20">
            <h1 className="font-serif text-5xl lg:text-6xl font-light tracking-tight text-white/90 inline-block">
              AVA
            </h1>
            <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-white/40 block mt-4">Catálogo Día de la Mujer</span>
          </div>
          <nav className="flex flex-col gap-2">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => scrollToSection(category)}
                className={`relative group text-left font-sans text-[10px] uppercase tracking-[0.3em] transition-all duration-500 flex items-center w-full py-3.5 px-4 -ml-4 rounded-xl ${activeSection === category
                  ? 'text-white'
                  : 'text-white/40 hover:text-white'
                  }`}
              >
                {/* Hidden Button Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none">
                  {/* Soft glow behind */}
                  <div className="absolute inset-0 bg-white/10 blur-md rounded-xl"></div>
                  {/* Mask / Glass effect */}
                  <div className="absolute inset-0 bg-white/[0.02] border border-white/[0.08] rounded-xl backdrop-blur-[2px]"></div>
                </div>

                <div className={`h-[1px] transition-all duration-500 mr-4 relative z-10 ${activeSection === category ? 'w-6 bg-white' : 'w-0 bg-transparent group-hover:w-3 group-hover:bg-white/30'}`}></div>
                <span className="relative z-10">{category}</span>
              </button>
            ))}

            {/* Visítanos Button */}
            <div className="mt-6 pt-6 border-t border-white/5 -ml-4 pl-4 w-[calc(100%+1rem)]">
              <button
                onClick={() => scrollToSection('Visítanos')}
                className={`relative group text-left font-sans text-[10px] uppercase tracking-[0.3em] transition-all duration-500 flex items-center justify-between w-full py-4 px-5 rounded-xl overflow-hidden ${activeSection === 'Visítanos'
                  ? 'text-black'
                  : 'text-white hover:text-black'
                  }`}
              >
                {/* Background for Visítanos */}
                <div className={`absolute inset-0 transition-all duration-500 ${activeSection === 'Visítanos'
                  ? 'bg-white'
                  : 'bg-white/5 border border-white/10 group-hover:bg-white'
                  }`}></div>

                {/* Glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_30px_rgba(255,255,255,0.2)] pointer-events-none"></div>

                <span className="relative z-10 font-medium">Visítanos</span>
                <MapPin size={14} strokeWidth={1.5} className={`relative z-10 transition-transform duration-500 ${activeSection === 'Visítanos' ? 'scale-110' : 'group-hover:scale-110'}`} />
              </button>
            </div>
          </nav>
        </div>
        <div className="font-sans text-[9px] uppercase tracking-[0.4em] text-white/20">
          Colección Exclusiva<br />© 2026
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 w-full overflow-hidden flex flex-col relative">

        {/* Filter Section (Optimized for Mobile) */}
        <div className="w-full pt-8 md:pt-32 px-6 md:px-12 z-20">

          {/* Desktop Filter Bar (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-3 pb-8">
            <span className="font-sans text-[10px] uppercase tracking-widest text-white/40 mr-2 flex-shrink-0 flex items-center gap-2">
              <Filter size={12} /> Filtros:
            </span>
            {FILTERS.map(filter => {
              const isActive = activeFilters.includes(filter.id);
              return (
                <button
                  key={filter.id}
                  onClick={() => toggleFilter(filter.id)}
                  className={`flex-shrink-0 px-5 py-2.5 rounded-full font-sans text-sm tracking-wide transition-colors duration-200 border ${isActive
                    ? 'bg-white text-black border-white font-medium'
                    : 'bg-white/[0.02] text-white/70 border-white/10 hover:bg-white/5'
                    }`}
                >
                  {filter.label}
                </button>
              );
            })}

            {activeFilters.length > 0 && (
              <button
                onClick={() => setActiveFilters([])}
                className="flex-shrink-0 px-3 py-2 font-sans text-xs text-white/40 hover:text-white transition-colors uppercase tracking-wider"
              >
                Limpiar
              </button>
            )}
          </div>

          {/* Mobile Filter Accordion (Hidden on Desktop) */}
          <div className="md:hidden mb-6">
            <button
              onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
              className="w-full bg-[#111] border border-white/10 rounded-xl px-5 py-4 flex items-center justify-between active:bg-[#1a1a1a] transition-colors"
            >
              <div className="flex items-center gap-3">
                <Filter size={16} className={activeFilters.length > 0 ? "text-white" : "text-white/50"} />
                <span className={`font-sans text-sm tracking-wider ${activeFilters.length > 0 ? "text-white font-medium" : "text-white/70"}`}>
                  {activeFilters.length > 0 ? `Filtros Aplicados (${activeFilters.length})` : "Filtrar Arreglos"}
                </span>
              </div>
              <ChevronDown
                size={16}
                className={`text-white/50 transition-transform duration-300 ${isFilterMenuOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {isFilterMenuOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 grid grid-cols-2 gap-3">
                    {FILTERS.map(filter => {
                      const isActive = activeFilters.includes(filter.id);
                      return (
                        <button
                          key={filter.id}
                          onClick={() => toggleFilter(filter.id)}
                          className={`w-full py-3 px-3 rounded-lg text-left font-sans text-xs tracking-wide transition-colors ${isActive
                            ? 'bg-white text-black font-medium'
                            : 'bg-[#111] text-white/70 border border-white/5 active:bg-[#222]'
                            }`}
                        >
                          {filter.label}
                        </button>
                      );
                    })}
                  </div>
                  {activeFilters.length > 0 && (
                    <button
                      onClick={() => {
                        setActiveFilters([]);
                        setIsFilterMenuOpen(false);
                      }}
                      className="w-full mt-4 py-3 font-sans text-[11px] text-white/50 uppercase tracking-widest active:text-white border border-white/5 rounded-lg active:bg-[#111]"
                    >
                      Limpiar Filtros
                    </button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="flex-1">
          {groupedProducts.map((group, index) => (
            <CategorySection
              key={group.category}
              group={group}
              isLast={false}
            />
          ))}
        </div>

        <VisitUsSection />

        {/* Mobile Footer */}
        <footer className="md:hidden py-12 text-center border-t border-white/5 mx-6">
          <p className="font-sans text-[9px] uppercase tracking-[0.4em] text-white/30">
            AVA Flores © 2026
          </p>
        </footer>
      </main>

      {/* Floating WhatsApp Button */}
      <button
        onClick={() => window.open('https://wa.me/573152838537?text=Hola%20AVA%20Concierge.%20Me%20gustar%C3%ADa%20recibir%20asesor%C3%ADa.', '_blank')}
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 bg-white text-black hover:bg-gray-200 font-sans text-[9px] md:text-[10px] uppercase tracking-[0.2em] py-4 px-6 rounded-full transition-all duration-500 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] group"
      >
        <MessageCircle size={16} strokeWidth={1.5} className="group-hover:scale-110 transition-transform duration-500" />
        <span className="font-medium hidden sm:inline">Comprar por WhatsApp</span>
        <span className="font-medium sm:hidden">WhatsApp</span>
      </button>

    </div>
  );
}
