"use client";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Image from "next/image";
import { useState } from "react";
export default function Article() {
  const [showVideo, setShowVideo] = useState(false);
    return (<>
            {/* Hero Section with Background Image */}
            <div className="relative min-h-25vh flex flex-col justify-center px-6 overflow-hidden">
                <title>
                    Laksana Business Park - Solusi Gudang & Properti Strategis
                </title>
                {/* Background Video (fixed) */}
                <div className="absolute inset-0 z-0">
                    <Image
                        className="w-full h-full object-cover"
                        src="/images/bg-produk.png"
                        alt="Background Image"
                        width={1400}
                        height={400}
                    />
                    {/* Gradient overlay from top to bottom - 50% black to transparent */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent" />
                    {/* Left-right gradient overlay for additional text readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto w-full pt-20 md:pt-15 lg:pt-50">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
                        {/* Left side - Title and description */}
                        <div className="lg:flex-1 fade-in-up mb-[10%] mt-[10%] justify-center text-center">
                            <h1 className="text-4xl md:text-5xl sm:text-4xl font-medium tracking-tight text-white mb-4 leading-[0.95] brand-font">
                                <span className="text-white bg-clip-text uppercase">
                                    Tentang Perusahaan
                                </span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
<section className="w-full mt-[8%] mb-[5%] border-y border-white/5">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-5xl tracking-tight mb-6">
      Perjalanan Agung Intiland Dimulai 2010
    </h2>
    <div className="text-md text-slate-600 text-justify">
    <p className="mb-4">
        Sejak itu, Agung Intiland telah berkembang menjadi pengembang kawasan industri terbesar di Tangerang Utara, dengan komitmen untuk menciptakan ekosistem produktif yang mendorong pertumbuhan bisnis berkelanjutan. Dimulai dari pengembangan Laksana Business Park, kini kami telah menjadi tolok ukur kawasan industri dan komersial terintegrasi di wilayah ini.
    </p>
    <p className="mb-4">
                Setiap proyek yang kami hadirkan dibangun di atas dasar perencanaan matang, infrastruktur andal, serta fasilitas lengkap yang menunjang kebutuhan bisnis modern. Laksana Business Park, sebagai tonggak pertama kami, telah berkembang menjadi pusat industri dan komersial yang dinamis, didukung oleh komunitas yang dirancang untuk meningkatkan efisiensi sekaligus pertumbuhan.
    </p>
        <p className="mb-4">
        Dengan dedikasi lebih dari 300 profesional, Agung Intiland terus memperkuat reputasinya melalui konsistensi, inovasi, dan praktik berkelanjutan. Ke depan, kami bersiap untuk mengembangkan proyek residensial, melengkapi visi kami dalam menciptakan kawasan terintegrasi yang menyatukan bisnis dan kehidupan secara harmonis.
    </p>
    </div>
  </div>
</section>
<section className="thumbnail-iframe w-full mb-14 border-y border-white/5">
<div className="max-w-[86%] mx-auto relative group">
  <div className="absolute -inset-1 bg-gradient-to-b from-[#00ffc4]/20 to-transparent rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
  <div className="relative border border-slate-900 overflow-hidden shadow-3xl border border-white/10 bg-neutral-900 aspect-video ring-1 ring-black/5">
    {showVideo ? (
        <iframe
            className="w-full h-full aspect-video"
            src="https://www.youtube.com/embed/aIA9kDBlJDc?start=1&autoplay=1"
            title="Company Profile Laksana Business Park"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        ></iframe>
    ) : (
        <>
            <img
                src="https://agungintiland.com/assets/source/assets/thumbs/images/cover_1280_700_laksana-business-park---view-semi-bev-05.png.webp"
                alt="thumbnail-photo"
                className="w-full h-full object-cover group-hover:opacity-40 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/40" />
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                </div>
                <div onClick={() => setShowVideo(true)} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <div className="w-24 h-24 bg-white/5 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center shadow-[0_0_40px_rgba(0,255,196,0.1)] group-hover:shadow-[0_0_60px_rgba(0,255,196,0.2)] transition-shadow">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            data-lucide="play"
                            className="lucide lucide-play w-10 h-10 text-white fill-white ml-1"
                        >
                            <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )}
</div>
</div>
</section>

<section id="profile" className="py-24 px-6 relative">
  <div className="max-w-7xl mx-auto">
    <div className="mb-16 text-center">
      <h2 className="text-4xl md:text-5xl font-medium mb-4 tracking-tight">Pimpinan Perusahaan</h2>
      <p className="text-md text-slate-600 max-w-xl mx-auto">
        Tim manajemen yang terdiri dari para profesional dengan pengalaman luas di berbagai bidang.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Profile 1 */}
      <div className="group relative bg-[#0A0A0A] border border-white/50 hover:border-[#F7D300] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
        <div className="aspect-[2/3] overflow-hidden">
          <Image
            src="/images/pimpinan/pimpinan1.png"
            className="w-full h-full object-cover group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
            alt="Pimpinan"
            width={400}
            height={600}
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-1">Francis Cahyadi</h3>
          <p className="text-[#F7D300] text-sm font-medium mb-3">
            Komisaris Utama
          </p>
        </div>
      </div>
      {/* Profile 2 */}
      <div className="group relative bg-[#0A0A0A] border border-white/50 hover:border-[#F7D300] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
        <div className="aspect-[2/3] overflow-hidden">
          <Image
            src="/images/pimpinan/pimpinan2.png"
            className="w-full h-full object-cover group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
            alt="Pimpinan"
            width={400}
            height={600}
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-1">Jimmy Widjaja</h3>
          <p className="text-[#F7D300] text-sm font-medium mb-3">
            Komisaris
          </p>
        </div>
      </div>
      {/* Profile 3 */}
      <div className="group relative bg-[#0A0A0A] border border-white/50 hover:border-[#F7D300] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
        <div className="aspect-[2/3] overflow-hidden">
          <Image
            src="/images/pimpinan/pimpinan3.png"
            className="w-full h-full object-cover group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
            alt="Pimpinan"
            width={400}
            height={600}
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-1">Paberd Leonard Hutagaol</h3>
          <p className="text-[#F7D300] text-sm font-medium mb-3">
            Direktur Utama
          </p>
        </div>
      </div>
      {/* Profile 4 */}
      <div className="group relative bg-[#0A0A0A] border border-white/50 hover:border-[#F7D300] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
        <div className="aspect-[2/3] overflow-hidden">
          <Image
            src="/images/pimpinan/pimpinan3.png"
            className="w-full h-full object-cover group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
            alt="Pimpinan"
            width={400}
            height={600}
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-1">Netty Rusli</h3>
          <p className="text-[#F7D300] text-sm font-medium mb-3">
            Direktur Keuangan
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section
  id="process"
  className="max-w-7xl sm:px-6 scroll-reveal visible mr-auto ml-auto pt-20 pr-4 pb-20 pl-4"
>
    <h2 className="text-3xl lg:text-4xl font-medium tracking-tight border-l-4 border-[#facc15] pl-6 mb-16">
       Perjalanan Kami
    </h2>
  <div className="relative" id="timeline-container">
    {/* Enhanced Progress Line */}
    <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-slate-200 hidden lg:block rounded-full overflow-hidden">
      <div
        id="progress-line"
        className="w-full progress-line rounded-full"
        style={{
          height: "100%",
          background: "linear-gradient(rgb(71, 85, 105), rgb(100, 116, 139))",
          transition: "height 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          boxShadow: "rgba(71, 85, 105, 0.3) 0px 0px 10px"
        }}
      />
    </div>
    <div className="space-y-20" id="timeline-steps">
      {/* Step 1 */}
      <div
        className="flex flex-col lg:flex-row gap-12 items-center timeline-step animate-in"
        data-step={1}
        style={{
          opacity: 1,
          transform: "translateY(0px)",
          transition: "0.8s cubic-bezier(0.16, 1, 0.3, 1)"
        }}
      >
        <div className="flex-1 lg:text-right lg:pr-12">
          <div className="glass hover-lift bg-white/80 border-slate-200/60 border pt-8 pr-8 pb-8 pl-8 transform transition-all duration-500">
            <div className="flex gap-4 lg:justify-end mb-6 items-center">
              <span className="uppercase text-sm font-medium text-slate-600 tracking-wider">
                Tahun 2010
              </span>
            </div>
            <h3 className="text-3xl font-light font-playfair mb-4 text-slate-800">
              Agung Intiland Didirikan
            </h3>
          </div>
              <img
               src="/images/timeline/tl-1.png"
               className="object-cover"
               alt="Timeline 1"
               />
        </div>
        <div
          className="w-6 h-6 z-10 flex-shrink-0 rounded-full shadow-lg timeline-dot active"
          data-dot={1}
          style={{
            background: "rgb(71, 85, 105)",
            transform: "scale(1)",
            opacity: 1,
            transition: "0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            boxShadow: "rgba(71, 85, 105, 0.4) 0px 0px 20px"
          }}
        />
        <div className="flex-1 lg:pl-12" />
      </div>
      {/* Step 2 */}
      <div
        className="flex flex-col lg:flex-row items-center gap-12 timeline-step animate-in"
        data-step={2}
        style={{
          opacity: 1,
          transform: "translateY(0px)",
          transition: "0.8s cubic-bezier(0.16, 1, 0.3, 1)"
        }}
      >
        <div className="flex-1 lg:pr-12" />
        <div
          className="w-6 h-6 z-10 flex-shrink-0 rounded-full shadow-lg timeline-dot active"
          data-dot={2}
          style={{
            background: "rgb(71, 85, 105)",
            transform: "scale(1)",
            opacity: 1,
            transition: "0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            boxShadow: "rgba(71, 85, 105, 0.4) 0px 0px 20px"
          }}
        />
        <div className="flex-1 lg:pl-12">
          <div className="glass hover-lift bg-white/80 border-slate-200/60 border rounded-3xl pt-8 pr-8 pb-8 pl-8 transform transition-all duration-500">
            <div className="flex gap-4 mb-6 items-center">
              <span className="uppercase text-sm font-medium text-slate-600 tracking-wider">
                Step 02
              </span>
            </div>
            <h3 className="text-3xl font-light font-playfair mb-4 text-slate-800">
              Design &amp; Sketching
            </h3>
            <p className="leading-relaxed text-slate-600 mb-6">
              Our designers create detailed sketches and color palettes based on
              your requirements and personal aesthetic. We'll present multiple
              concepts for your consideration.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className=""
              >
                <circle cx={12} cy={12} r={10} className="" />
                <polyline points="12,6 12,12 16,14" className="" />
              </svg>
              <span>Duration: 3-5 days</span>
            </div>
          </div>
        </div>
      </div>
      {/* Step 3 */}
      <div
        className="flex flex-col lg:flex-row items-center gap-12 timeline-step"
        data-step={3}
        style={{
          opacity: 1,
          transform: "translateY(0px)",
          transition: "0.8s cubic-bezier(0.16, 1, 0.3, 1)"
        }}
      >
        <div className="flex-1 lg:text-right lg:pr-12">
          <div className="glass border rounded-3xl p-8 hover-lift bg-white/80 border-slate-200/60 transform transition-all duration-500">
            <div className="flex items-center gap-4 lg:justify-end mb-6">
              <span className="uppercase text-sm font-medium text-slate-600 tracking-wider">
                Step 03
              </span>
            </div>
            <h3 className="text-3xl font-light font-playfair mb-4 text-slate-800">
              Measurements &amp; Fitting
            </h3>
            <p className="leading-relaxed text-slate-600 mb-6">
              Precise measurements are taken and a fitting schedule is
              established to ensure the perfect fit. We create a custom pattern
              specifically for your body.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className=""
              >
                <circle cx={12} cy={12} r={10} className="" />
                <polyline points="12,6 12,12 16,14" className="" />
              </svg>
              <span>Duration: 45-60 minutes</span>
            </div>
          </div>
        </div>
        <div
          className="w-6 h-6 z-10 flex-shrink-0 rounded-full shadow-lg timeline-dot"
          data-dot={3}
          style={{
            background: "rgb(71, 85, 105)",
            transform: "scale(1)",
            opacity: 1,
            transition: "0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            boxShadow: "rgba(71, 85, 105, 0.4) 0px 0px 20px"
          }}
        />
        <div className="flex-1 lg:pl-12" />
      </div>
      {/* Step 4 */}
      <div
        className="flex flex-col lg:flex-row items-center gap-12 timeline-step"
        data-step={4}
        style={{
          opacity: 1,
          transform: "translateY(0px)",
          transition: "0.8s cubic-bezier(0.16, 1, 0.3, 1)"
        }}
      >
        <div className="flex-1 lg:pr-12" />
        <div
          className="w-6 h-6 z-10 flex-shrink-0 rounded-full shadow-lg timeline-dot"
          data-dot={4}
          style={{
            background: "rgb(71, 85, 105)",
            transform: "scale(1)",
            opacity: 1,
            transition: "0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            boxShadow: "rgba(71, 85, 105, 0.4) 0px 0px 20px"
          }}
        />
        <div className="flex-1 lg:pl-12">
          <div className="glass border rounded-3xl p-8 hover-lift bg-white/80 border-slate-200/60 transform transition-all duration-500">
            <div className="flex items-center gap-4 mb-6">
              <span className="uppercase text-sm font-medium text-slate-600 tracking-wider">
                Step 04
              </span>
            </div>
            <h3 className="text-3xl font-light font-playfair mb-4 text-slate-800">
              Final Creation
            </h3>
            <p className="leading-relaxed text-slate-600 mb-6">
              Your masterpiece is carefully crafted by our skilled artisans with
              meticulous attention to every detail. Quality checks ensure
              perfection at every stage.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className=""
              >
                <circle cx={12} cy={12} r={10} className="" />
                <polyline points="12,6 12,12 16,14" className="" />
              </svg>
              <span>Duration: 4-6 weeks</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




  <Form />
  <Footer />
  </>
    );
}