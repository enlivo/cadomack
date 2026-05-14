import React, { useState } from 'react';
import { ShieldCheck, Award, BadgeCheck, Microscope, CheckCircle2, Trophy, X } from 'lucide-react';
import msmeCertificate from '../assets/msme-certificate.jpeg';

const accreditations = [
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: 'WHO-GMP Certified',
    subtitle: 'Manufacturing Excellence',
    description:
      'Our manufacturing facilities are fully certified under World Health Organization Good Manufacturing Practices, ensuring every product meets stringent international quality benchmarks.',
    color: 'from-emerald-500 to-teal-500',
    bg: 'from-emerald-50 to-teal-50',
    border: 'border-emerald-200',
    badge: 'WHO-GMP',
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'ISO 9001:2015',
    subtitle: 'Quality Management System',
    description:
      'ISO 9001:2015 certification reflects our robust quality management system—spanning procurement, production, and delivery—ensuring consistent, reliable output at every stage.',
    color: 'from-blue-500 to-indigo-500',
    bg: 'from-blue-50 to-indigo-50',
    border: 'border-blue-200',
    badge: 'ISO 9001',
  },
  {
    icon: <BadgeCheck className="w-8 h-8" />,
    title: 'FSSAI Approved',
    subtitle: 'Food Safety & Standards',
    description:
      "FSSAI approval ensures our nutraceutical and supplement range complies with India's food safety and standards regulations, safeguarding consumer health and regulatory compliance.",
    color: 'from-amber-500 to-orange-500',
    bg: 'from-amber-50 to-orange-50',
    border: 'border-amber-200',
    badge: 'FSSAI',
  },
  {
    icon: <Microscope className="w-8 h-8" />,
    title: 'Rigorous QC Protocols',
    subtitle: 'In-House Quality Control',
    description:
      'Every batch undergoes multi-stage in-house quality control testing—from raw material verification to finished-product release—leaving zero room for compromise.',
    color: 'from-purple-500 to-violet-500',
    bg: 'from-purple-50 to-violet-50',
    border: 'border-purple-200',
    badge: 'QC Certified',
  },
];

export default function App() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  

  return (
    <div className="min-h-screen bg-white pt-24 font-sans text-slate-900">
      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setLightboxOpen(false)}
        >
          <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-amber-400 transition-colors p-2"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={msmeCertificate}
              alt="India 5000 Best MSME Awards – Certificate of Nomination"
              className="w-full rounded-lg shadow-2xl border-4 border-white/10"
            />
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-blue-950 to-blue-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-5xl md:text-6xl font-black mb-4">About Cadomack</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Leading the pharmaceutical industry with innovation, quality, and commitment to
            healthcare excellence
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="rounded-2xl shadow-2xl bg-gradient-to-br from-blue-100 via-emerald-100 to-teal-100 p-4 md:p-6 lg:p-8 h-64 md:h-80 lg:h-96 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-10 right-10 w-32 md:w-40 h-32 md:h-40 bg-blue-300 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-32 md:w-40 h-32 md:h-40 bg-emerald-300 rounded-full blur-3xl"></div>
                </div>
                <div className="w-full h-full bg-slate-200 rounded-xl shadow-lg relative z-10 flex items-center justify-center text-slate-400 overflow-hidden">
                   <img 
                    src="src\assets\about.png" 
                    alt="Laboratory" 
                    className="w-full h-full object-cover"
                   />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-black text-blue-950 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                At Cadomack Pharmaceuticals India Pvt Ltd, we are driven by a singular mission: to
                make high-quality healthcare accessible to everyone. We specialize in developing and
                marketing a diverse portfolio of life-saving and life-enhancing medicines.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                With a strong emphasis on formulation development and stringent quality control
                (WHO-GMP standards), our products range from crucial diabetic care to essential
                vitamin supplements and pain management solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-6">

          {/* Section heading */}
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full uppercase tracking-widest mb-4">
              Certified Excellence
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-blue-950 mb-4">
              Our Accreditations
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Every certificate we hold is a promise kept—to patients, healthcare providers, and
              regulators across the globe.
            </p>
          </div>

          {/* Featured certificate + story — two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">

            {/* LEFT — Certificate image card */}
            <div className="relative bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col">
              {/* Decorative top ribbon */}
              <div className="h-3 w-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500" />

              <div className="flex-1 p-6 md:p-8 flex flex-col">
                {/* Card header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center shadow-md flex-shrink-0">
                    <Trophy className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400 font-semibold leading-none mb-0.5">
                      Certificate of Nomination
                    </p>
                    <h3 className="text-base font-black text-blue-950 leading-tight">
                      India 5000 Best MSME Awards
                    </h3>
                  </div>
                </div>

                {/* Certificate image — clickable to enlarge */}
                <button
                  onClick={() => setLightboxOpen(true)}
                  className="group relative flex-1 rounded-2xl overflow-hidden border border-amber-100 shadow-md hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  title="Click to enlarge"
                >
                  <img
                    src={msmeCertificate}
                    alt="India 5000 Best MSME Awards – Certificate of Nomination 2024"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    style={{ minHeight: '320px' }}
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 text-blue-950 text-xs font-bold px-3 py-1.5 rounded-full shadow">
                      Click to enlarge
                    </span>
                  </div>
                </button>

                {/* Badge row */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {['India 5000', 'Best MSME 2024', 'Benchmark Trust', 'BSE Supported'].map((b) => (
                    <span
                      key={b}
                      className="px-3 py-1 bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold rounded-full tracking-wide"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom strip */}
              <div className="px-8 py-4 bg-gradient-to-r from-amber-50 to-yellow-50 border-t border-amber-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">Nomination Phase · 2024</span>
                <CheckCircle2 className="w-5 h-5 text-amber-500" />
              </div>
            </div>

            {/* RIGHT — Story text (Card removed as requested) */}
            <div className="flex flex-col justify-center py-2">
              <div>
                <span className="inline-block px-3 py-1 bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold rounded-full uppercase tracking-widest mb-6">
                  Recognition & Excellence
                </span>
                <h3 className="text-3xl md:text-4xl font-black text-blue-950 mb-6 leading-tight">
                  Recognised Among India's 5000 Best MSMEs for Quality Excellence
                </h3>
                <p className="text-slate-600 leading-relaxed mb-5">
                  Cadomack Pharmaceuticals India Pvt. Ltd. has been formally nominated at the
                  prestigious{' '}
                  <span className="text-blue-900 font-bold">India 5000 Best MSME Awards 2024</span>,
                  organised by Benchmark Trust — a national platform dedicated to identifying and
                  honouring India's most outstanding micro, small, and medium enterprises for
                  quality excellence.
                </p>
                <p className="text-slate-600 leading-relaxed mb-5">
                  This nomination, supported by knowledge partner{' '}
                  <span className="text-blue-900 font-semibold">TQV</span>, supporting partner{' '}
                  <span className="text-blue-900 font-semibold">BSE</span>, and featured in{' '}
                  <span className="text-blue-900 font-semibold">Udyamee Business Magazine</span>,
                  recognises Cadomack's consistent commitment to quality across every aspect of its
                  pharmaceutical operations.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Being selected in this nomination phase at{' '}
                  <span className="text-blue-600 font-semibold underline decoration-blue-200">www.india5000.com</span> is a
                  testament to the trust our partners, healthcare providers, and patients place in
                  us — and further strengthens our resolve to raise the bar for Indian
                  pharmaceutical manufacturing.
                </p>
              </div>

              {/* Stat row */}
              <div className="grid grid-cols-3 gap-8 mt-10 pt-8 border-t border-slate-200">
                {[
                  { value: '5000', label: 'Best MSMEs India' },
                  { value: '2024', label: 'Award Year' },
                  { value: 'BSE', label: 'Supported By' },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl md:text-3xl font-black text-blue-950">{s.value}</p>
                    <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-wider">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom — individual accreditation cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {accreditations.map((acc, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br ${acc.bg} border ${acc.border} rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${acc.color} flex items-center justify-center text-white shadow-md flex-shrink-0`}
                >
                  {acc.icon}
                </div>

                <span
                  className={`self-start px-2.5 py-0.5 bg-white/70 border ${acc.border} text-slate-600 text-xs font-bold rounded-full tracking-wide`}
                >
                  {acc.badge}
                </span>

                <div>
                  <h4 className="text-lg font-black text-blue-950 leading-tight">{acc.title}</h4>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-0.5">
                    {acc.subtitle}
                  </p>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed flex-1">{acc.description}</p>

                <div className="flex items-center gap-1.5 mt-auto pt-2 border-t border-white/50">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span className="text-xs font-semibold text-emerald-600">Verified Active</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}