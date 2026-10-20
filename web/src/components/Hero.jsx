import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { siteConfig } from '../config/siteConfig'
import { Sparkles, Play, Award, Users, Star, ArrowRight, CheckCircle2 } from 'lucide-react'

const Hero = ({ isLoaded = true }) => {
  const containerRef = useRef(null)
  const contentRef = useRef(null)
  const badgeRef = useRef(null)
  const headlineRef = useRef(null)
  const subheadlineRef = useRef(null)
  const ctaRef = useRef(null)
  const statsRef = useRef(null)
  const cardRef = useRef(null)

  useEffect(() => {
    if (isLoaded === false) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ 
        defaults: { ease: 'power3.out', duration: 1.1 }
      })

      tl.fromTo(badgeRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      )
      .fromTo(headlineRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9 },
        '-=0.3'
      )
      .fromTo(subheadlineRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        '-=0.5'
      )
      .fromTo(ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        '-=0.4'
      )
      .fromTo(cardRef.current,
        { scale: 0.92, opacity: 0, y: 30 },
        { scale: 1, opacity: 1, y: 0, duration: 1.2, ease: 'expo.out' },
        '-=0.8'
      )
      .fromTo(statsRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.5'
      )
    }, containerRef)

    return () => ctx.revert()
  }, [isLoaded])

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[90vh] lg:min-h-[820px] pt-32 pb-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white flex flex-col justify-center overflow-hidden"
    >
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-accent/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -left-40 w-[450px] h-[450px] bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-purple-500/15 rounded-full blur-[130px] pointer-events-none" />

      {/* Subtle Mesh Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div ref={contentRef} className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Top Badge */}
            <div 
              ref={badgeRef}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs font-semibold tracking-wide text-cyan-300 mb-6 shadow-inner"
            >
              <Sparkles size={14} className="text-amber-400 animate-pulse" />
              <span>{siteConfig.tagline}</span>
            </div>

            {/* Main Headline */}
            <h1 
              ref={headlineRef}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] mb-6 font-montserrat"
            >
              <span>{siteConfig.headline}</span>
            </h1>

            {/* Subheadline */}
            <p 
              ref={subheadlineRef}
              className="text-base sm:text-lg text-slate-300 max-w-2xl mb-8 leading-relaxed font-normal"
            >
              {siteConfig.subheadline}
            </p>

            {/* Call To Action Buttons */}
            <div 
              ref={ctaRef}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10"
            >
              <Link
                to="/courses"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-accent hover:brightness-110 text-white font-bold text-sm tracking-wide transition-all shadow-[0_10px_25px_-5px_var(--color-accent)] hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
              >
                <span>Explore All Courses</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/dashboard"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-bold text-sm tracking-wide transition-all backdrop-blur-md hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                <Play size={15} className="fill-current text-cyan-400" />
                <span>Student Portal</span>
              </Link>
            </div>

            {/* Guarantee / Micro-proof */}
            <div className="flex items-center gap-6 text-xs text-slate-400 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-emerald-400" />
                <span>Self-Paced Learning</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award size={15} className="text-amber-400" />
                <span>Accredited Credentials</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users size={15} className="text-cyan-400" />
                <span>Live Mentor Support</span>
              </div>
            </div>

          </div>

          {/* Right Column: Sleek Modern Learning Platform Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div 
              ref={cardRef}
              className="w-full max-w-md bg-slate-900/80 border border-white/15 rounded-2xl p-6 shadow-2xl backdrop-blur-xl relative overflow-hidden group hover:border-accent/40 transition-all duration-500"
            >
              {/* Corner Ambient Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-2xl pointer-events-none" />

              {/* Mockup Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-xs font-mono text-slate-400 ml-2">player://preview</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  LIVE SESSION
                </span>
              </div>

              {/* Video Player Preview Window */}
              <div className="relative aspect-video rounded-xl bg-gradient-to-tr from-slate-950 via-slate-900 to-indigo-950 border border-white/10 flex flex-col items-center justify-center overflow-hidden mb-5 group/player">
                <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop')" }} />
                <div className="w-14 h-14 rounded-full bg-accent/90 text-white flex items-center justify-center shadow-lg group-hover/player:scale-110 transition-transform cursor-pointer relative z-10">
                  <Play size={22} className="fill-current translate-x-0.5" />
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-slate-300 bg-black/60 px-3 py-1.5 rounded-lg backdrop-blur-md">
                  <span>Module 01: Core Architecture</span>
                  <span className="text-accent font-bold">18:42 / 45:00</span>
                </div>
              </div>

              {/* Lesson Metadata */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm text-white">Full-Stack System Engineering</h4>
                  <span className="text-xs font-semibold text-amber-400 flex items-center gap-1">
                    <Star size={13} className="fill-current text-amber-400" />
                    4.9 (1.2k)
                  </span>
                </div>

                {/* Progress bar */}
                <div>
                  <div className="flex justify-between text-xs text-slate-400 mb-1">
                    <span>Course Progress</span>
                    <span className="text-cyan-400 font-bold">78% Complete</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-accent to-cyan-400 rounded-full w-[78%]" />
                  </div>
                </div>

                {/* Micro Certificate Badge */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                    <Award size={14} className="text-amber-400" />
                    Credential Ready
                  </span>
                  <Link to="/courses" className="text-accent hover:underline text-xs font-semibold">
                    View Course Details →
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Global Statistics Bar */}
        <div 
          ref={statsRef}
          className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {siteConfig.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center lg:items-start">
              <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-300 font-montserrat">
                {stat.value}
              </span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-medium mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Hero