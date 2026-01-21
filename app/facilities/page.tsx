"use client";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Image from "next/image";
import { useState } from "react";
import Timeline from "../components/TimeLine";
import FacilityCard from "../components/FacilityCard";
export default function Facilities() {
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
                                    Fasilitas Kami
                                </span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
<section className="w-full mt-[5%] mb-[5%] border-y border-white/5">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-5xl tracking-tight mb-6">
      Nilai-Nilai Perusahaan Kami
    </h2>
    <div className="text-md text-slate-600 text-justify">
    <p className="mb-4">
        Sebagai perusahaan properti yang berkomitmen menghadirkan kawasan terbaik bagi mitra bisnis maupun penghuni, kami menjunjung tinggi nilai-nilai yang menjadi fondasi dalam setiap pengembangan semua kawasan kami. Nilai-nilai ini kami terapkan secara konsisten untuk memastikan kenyamanan, keamanan, dan keberlanjutan kawasan yang kami bangun.
    </p>
    <p className="mb-4">
        Setiap proyek yang kami hadirkan dibangun di atas dasar perencanaan matang, infrastruktur andal, serta fasilitas lengkap yang menunjang kebutuhan bisnis modern. Laksana Business Park, sebagai tonggak pertama kami, telah berkembang menjadi pusat industri dan komersial yang dinamis, didukung oleh komunitas yang dirancang untuk meningkatkan efisiensi sekaligus pertumbuhan.
    </p>
    </div>

  <div className="card-facilities mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <FacilityCard
      title="Enterprise Security"
      description="Row jalan Lebar untuk Kenyamanan Akses Operasional"
      imageSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
      imageAlt="security dashboard"
    />
    <FacilityCard
      title="Enterprise Security"
      description="Keamanan yang Terjamin dengan Sistem Pengawasan Security 24 Jam"
      imageSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
      imageAlt="security dashboard"
    />
    <FacilityCard
      title="Enterprise Security"
      description="Underground Utility System yang menciptakan kawasan Rapih, Bersih, dan Elegan"
      imageSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
      imageAlt="security dashboard"
    />
  </div>


  </div>
</section>
<div className="sm:pl-6 sm:pr-6 lg:pl-8 lg:pr-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
  <div className="mb-16 grid lg:grid-cols-2 gap-8 items-start">
    <h2 className="text-3xl md:text-5xl border-l-4 border-[#1d2088] pl-6 tracking-tight text-black">
      Fasilitas Utama Kami
    </h2>
    <div className="flex flex-col items-start lg:items-end gap-6">
      <p className="text-lg max-w-xl text-left lg:text-right text-neutral-700">
        Semua solusi dari kami dirancang untuk memberikan pengalaman terbaik bagi pemilik bisnis dan penghuni kami
      </p>
    </div>
  </div>
  <div className="flex flex-col lg:flex-row gap-0 border-t border-black/10">
    {/* Service 1 */}
    <div className="divide-y lg:border-r divide-black/10 border-black/10">
      <div className="p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-black/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-black"
            >
              <rect width={18} height={18} x={3} y={3} rx={2} className="" />
              <path d="M9 9h6v6H9z" className="" />
            </svg>
          </div>
          <div className="">
            <div className="font-medium text-black">UI/UX Design</div>
            <div className="text-sm text-neutral-600">User-centered design</div>
          </div>
        </div>
        <p className="leading-relaxed text-neutral-700">
          Crafting intuitive and beautiful user interfaces that prioritize user
          experience. From wireframing to high-fidelity prototypes, I ensure
          every interaction is efficient.
        </p>
      </div>
      <div className="p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-black/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-black"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" className="" />
              <path d="m2 17 10 5 10-5" className="" />
              <path d="m2 12 10 5 10-5" className="" />
            </svg>
          </div>
          <div className="">
            <div className="font-medium text-black">Brand Identity</div>
            <div className="text-sm text-neutral-600">Visual storytelling</div>
          </div>
        </div>
        <p className="leading-relaxed text-neutral-700">
          Developing comprehensive brand identities that capture your essence.
          Logo design, color palettes, typography, and brand guidelines that
          resonate with your audience.
        </p>
      </div>
    </div>
    {/* Service 2 */}
    <div className="divide-y lg:border-r divide-black/10 border-black/10">
      <div className="p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-black/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-black"
            >
              <rect width={20} height={14} x={2} y={5} rx={2} className="" />
              <line x1={2} x2={22} y1={10} y2={10} className="" />
            </svg>
          </div>
          <div className="">
            <div className="font-medium text-black">Web Design</div>
            <div className="text-sm text-neutral-600">
              Responsive experiences
            </div>
          </div>
        </div>
        <p className="leading-relaxed text-neutral-700">
          Creating modern, responsive websites that perform beautifully across
          all devices. From landing pages to complex web applications, built
          with user experience at the forefront.
        </p>
      </div>
      <div className="p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-black/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-black"
            >
              <rect
                width={14}
                height={20}
                x={5}
                y={2}
                rx={2}
                ry={2}
                className=""
              />
              <path d="M12 18h.01" className="" />
            </svg>
          </div>
          <div className="">
            <div className="font-medium text-black">Mobile App Design</div>
            <div className="text-sm text-neutral-600">iOS &amp; Android</div>
          </div>
        </div>
        <p className="leading-relaxed text-neutral-700">
          Designing native mobile experiences that feel natural and engaging.
          Focus on platform conventions while maintaining your unique brand
          personality.
        </p>
      </div>
    </div>
    {/* Service 3 */}
    <div className="divide-y divide-black/10">
      <div className="p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-black/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-black"
            >
              <path
                d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
                className=""
              />
            </svg>
          </div>
          <div className="">
            <div className="font-medium text-black">Design Systems</div>
            <div className="text-sm text-neutral-600">Scalable solutions</div>
          </div>
        </div>
        <p className="leading-relaxed text-neutral-700">
          Building comprehensive design systems that ensure consistency across
          all digital touchpoints. Component libraries, style guides, and design
          tokens for growth.
        </p>
      </div>
      <div className="p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-black/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-black"
            >
              <path d="M9 12l2 2 4-4" className="" />
              <path
                d="M21 12c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v6c0 .552.448 1 1 1"
                className=""
              />
              <path
                d="M3 10v6c0 .552.448 1 1 1h16c.552 0 1-.448 1-1v-6"
                className=""
              />
            </svg>
          </div>
          <div>
            <div className="font-medium text-black">Consultation</div>
            <div className="text-sm text-neutral-600">Strategic guidance</div>
          </div>
        </div>
        <p className="leading-relaxed text-neutral-700">
          Strategic design consultation to help you make informed decisions
          about your digital presence. UX audits, design strategy, and
          optimization recommendations.
        </p>
      </div>
    </div>
  </div>
</div>

  <Form />
  <Footer />
  </>
    );
}