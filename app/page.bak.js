"use client";

import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const galleryImages = [
  "https://picsum.photos/800/400?random=1",
  "https://picsum.photos/800/400?random=2",
  "https://picsum.photos/800/400?random=3",
  "https://picsum.photos/800/400?random=4",
  "https://picsum.photos/800/400?random=5",
  "https://picsum.photos/800/400?random=6",
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [cursorPosition, setCursorPosition] = useState(null);
  const [hoveredSide, setHoveredSide] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = (event) => {
    const { clientX, target } = event;
    const rect = target.getBoundingClientRect();
    const middle = rect.left + rect.width / 2;

    if (clientX < middle - rect.width * 0.2) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
    } else if (clientX > middle + rect.width * 0.2) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    } else {
      setZoom(!zoom);
    }
  };

  const handleMouseMove = (event) => {
    const { clientX, clientY, target } = event;
    const rect = target.getBoundingClientRect();
    const middle = rect.left + rect.width / 2;

    setCursorPosition({ x: clientX, y: clientY });
    if (clientX < middle - rect.width * 0.2) {
      setHoveredSide("left");
    } else if (clientX > middle + rect.width * 0.2) {
      setHoveredSide("right");
    } else {
      setHoveredSide(null);
    }
  };

  return (
    <div className="bg-[#f4f4f4] min-h-screen text-[#20164b] font-sans">
      {/* Hero Section */}
      <div
        className="relative h-screen flex flex-col items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/1200/600?random=7')" }}
      >
        <div className="bg-[#20164b] bg-opacity-80 p-12 rounded-lg shadow-2xl max-w-3xl">
          <h1 className="text-5xl font-extrabold text-white mb-6">Albercas Mar - Transformamos tu espacio con calidad</h1>
          <button className="mt-4 bg-[#08b0dd] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#007994] transition-all shadow-lg">
            Solicita tu cotización gratuita
          </button>
        </div>
      </div>

      {/* About Us */}
      <section className="p-16 text-center bg-white text-[#20164b] shadow-lg rounded-lg mx-8 mt-12">
        <h2 className="text-4xl font-bold mb-6">Sobre Nosotros</h2>
        <p className="text-lg leading-relaxed max-w-4xl mx-auto">
          <strong>Albercas Mar</strong> es una empresa con amplia experiencia en la construcción, remodelación e instalación de equipos para albercas. Dirigida por expertos con años de trayectoria en el sector, nos especializamos en proyectos de alta calidad, garantizando la satisfacción total de nuestros clientes en <strong>León, Guanajuato y alrededores</strong>.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
          <div className="bg-[#08b0dd] p-6 rounded-lg shadow-md text-white">
            <h3 className="text-2xl font-semibold mb-2">Nuestra Misión</h3>
            <p className="text-lg">Ofrecer soluciones innovadoras en la construcción y remodelación de albercas, brindando seguridad, funcionalidad y diseño de primer nivel.</p>
          </div>
          <div className="bg-[#007994] p-6 rounded-lg shadow-md text-white">
            <h3 className="text-2xl font-semibold mb-2">Nuestra Visión</h3>
            <p className="text-lg">Ser reconocidos como la mejor opción en construcción y mantenimiento de albercas en la región, destacando por nuestra calidad y profesionalismo.</p>
          </div>
          <div className="bg-[#4b2dce] p-6 rounded-lg shadow-md text-white">
            <h3 className="text-2xl font-semibold mb-2">Nuestros Valores</h3>
            <ul className="text-lg list-disc list-inside">
              <li>Compromiso con la excelencia</li>
              <li>Honestidad y transparencia</li>
              <li>Atención personalizada</li>
              <li>Innovación en cada proyecto</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="p-16 bg-[#183b87] text-white text-center shadow-lg rounded-lg mx-8 mt-12">
        <h2 className="text-4xl font-bold mb-6">Nuestros Servicios</h2>
        <p className="text-lg max-w-4xl mx-auto mb-6">En Albercas Mar ofrecemos un servicio completo para la construcción, mantenimiento y modernización de piscinas, asegurando calidad y satisfacción.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-[#08b0dd] p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Construcción de Albercas</h3>
            <p className="text-lg">Diseño y construcción de albercas personalizadas con materiales de alta calidad y la mejor tecnología.</p>
          </div>
          <div className="bg-[#007994] p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Remodelación y Modernización</h3>
            <p className="text-lg">Transformamos tu alberca con mejoras estructurales, acabados premium y sistemas de automatización.</p>
          </div>
          <div className="bg-[#4b2dce] p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Mantenimiento Integral</h3>
            <p className="text-lg">Limpieza, tratamientos químicos y revisiones preventivas para que tu alberca siempre esté en perfectas condiciones.</p>
          </div>
          <div className="bg-[#08b0dd] p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Instalación de Equipos</h3>
            <p className="text-lg">Bombas, filtros, iluminación LED, calefacción y automatización para mayor confort y eficiencia.</p>
          </div>
          <div className="bg-[#007994] p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Revestimientos y Acabados</h3>
            <p className="text-lg">Aplicamos materiales de alta calidad como azulejo, cuarzo, pebble tec y otros acabados duraderos y elegantes.</p>
          </div>
          <div className="bg-[#4b2dce] p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Asesoría Personalizada</h3>
            <p className="text-lg">Te acompañamos en la elección del diseño, equipamiento y mantenimiento ideal para tu piscina.</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="p-16 text-center bg-white text-[#20164b] shadow-lg rounded-lg mx-8 mt-12 relative">
        <h2 className="text-4xl font-bold mb-6">Galería de Proyectos</h2>
        <p className="text-lg max-w-4xl mx-auto mb-6">Explora algunos de nuestros proyectos recientes. Nos enorgullecemos de ofrecer calidad en cada construcción y remodelación.</p>
        <div className="relative max-w-4xl mx-auto cursor-pointer" onClick={handleClick} onMouseMove={handleMouseMove}>
          <img
            src={galleryImages[currentIndex]}
            alt="Proyecto"
            className={`rounded-lg shadow-md w-full h-96 object-cover transition-all ${zoom ? "scale-110" : "scale-100"}`}
          />
          {cursorPosition && hoveredSide && (
            <div
              className="absolute text-white text-4xl"
              style={{
                top: cursorPosition.y - 20,
                left: cursorPosition.x - 20,
                pointerEvents: "none",
              }}
            >
              {hoveredSide === "left" ? <FiChevronLeft /> : <FiChevronRight />}
            </div>
          )}
        </div>
      </section>

      {/* Contact */}
      <section className="p-16 bg-[#20164b] text-white text-center shadow-lg rounded-lg mx-8 mt-12">
        <h2 className="text-4xl font-bold mb-6">Contacto</h2>
        <p className="text-lg max-w-3xl mx-auto leading-relaxed">Queremos ayudarte a hacer realidad tu proyecto. Contáctanos a través de nuestras redes o por WhatsApp.</p>
        <div className="flex gap-6 justify-center mt-6">
          <a href="https://wa.me/4791015032" target="_blank" className="bg-[#4dc9eb] text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-[#08b0dd] transition shadow-md">
            <FaWhatsapp size={24} /> WhatsApp
          </a>
          <a href="https://facebook.com/empresa" target="_blank" className="bg-[#183b87] text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-[#4b2dce] transition shadow-md">
            <FaFacebook size={24} /> Facebook
          </a>
          <a href="https://instagram.com/empresa" target="_blank" className="bg-[#4dc9eb] text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-[#08b0dd] transition shadow-md">
            <FaInstagram size={24} /> Instagram
          </a>
        </div>
      </section>
    </div>
  );
}
