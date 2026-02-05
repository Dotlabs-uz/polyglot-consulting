"use client";

import React, { useState, useEffect, useRef } from "react";

const HERO_IMAGES = [
	"https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=85",
	"https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=85",
	"https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=85",
	"https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=85",
];
const HERO_INTERVAL_MS = 5500;

type HeroSectionProps = {
	onRegisterClick?: () => void;
};

export function HeroSection({ onRegisterClick }: HeroSectionProps) {
	const [heroIndex, setHeroIndex] = useState(0);
	const [progress, setProgress] = useState(0);
	const startRef = useRef(Date.now());

	useEffect(() => {
		startRef.current = Date.now();
		setProgress(0);
	}, [heroIndex]);

	useEffect(() => {
		const id = setInterval(() => {
			const elapsed = Date.now() - startRef.current;
			if (elapsed >= HERO_INTERVAL_MS) {
				setHeroIndex((i) => (i + 1) % HERO_IMAGES.length);
				startRef.current = Date.now();
				setProgress(0);
			} else {
				setProgress((elapsed / HERO_INTERVAL_MS) * 100);
			}
		}, 80);
		return () => clearInterval(id);
	}, []);

	const goToSlide = (i: number) => {
		setHeroIndex(i);
		startRef.current = Date.now();
		setProgress(0);
	};

	return (
		<section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden bg-[#0c0a14]">
			<div className="relative z-10 flex flex-1 flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-24 pt-28 pb-16 lg:py-0 lg:min-h-screen">
				<div className="max-w-xl">
					<p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-500 mb-8 animate-in fade-in">
						Xalqaro Ta&apos;lim Agentligi
					</p>
					<div className="h-px w-12 bg-[#f57c00] hero-line mb-10" />
					<h1
						className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl text-white leading-[1.08] tracking-tight animate-in fade-in"
						style={{
							animationDelay: "150ms",
							animationFillMode: "backwards",
						}}
					>
						Dunyoning Eng Yaxshi{""}
						<span className="text-[#f57c00] italic">
							Universitetlariga Kirish
						</span>
					</h1>
					<p
						className="mt-8 text-slate-400 text-base sm:text-lg leading-relaxed max-w-md animate-in fade-in"
						style={{
							animationDelay: "300ms",
							animationFillMode: "backwards",
						}}
					>
						600+ nufuzli universitetlar, 10+ davlatlar va 100%
						viza yordami. Sizning talabalik orzuingiz bizning
						ustuvor vazifamizdir.
					</p>
					<div
						className="mt-12 flex flex-wrap items-center gap-6 animate-in fade-in"
						style={{
							animationDelay: "450ms",
							animationFillMode: "backwards",
						}}
					>
						<button
							type="button"
							onClick={() => onRegisterClick?.()}
							className="group inline-flex items-center gap-2 text-white font-semibold text-sm uppercase tracking-widest hover:text-[#f57c00] transition-colors"
						>
							Bepul maslahat
							<span className="inline-block w-8 h-px bg-current group-hover:w-12 transition-all duration-300" />
						</button>
						<span className="text-slate-600 text-sm font-medium">
							1000+ muvaffaqiyatli arizalar
						</span>
					</div>
				</div>
			</div>

			<div className="relative flex-1 min-h-[50vh] lg:min-h-screen">
				{HERO_IMAGES.map((src, i) => (
					<div
						key={src}
						className={`hero-slide absolute inset-0 bg-cover bg-center bg-no-repeat ${i === heroIndex ? "active" : ""}`}
						style={{ backgroundImage: `url('${src}')` }}
						aria-hidden={i !== heroIndex}
					/>
				))}
				<div
					className="absolute inset-0 lg:left-0 lg:w-32 bg-gradient-to-r from-[#0c0a14] to-transparent pointer-events-none"
					aria-hidden
				/>
				<div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 flex flex-col items-end gap-4 z-10">
					<div className="flex items-center gap-2">
						{HERO_IMAGES.map((_, i) => (
							<button
								key={i}
								type="button"
								onClick={() => goToSlide(i)}
								className="group p-1.5 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f57c00]/50"
								aria-label={`Slide ${i + 1}`}
							>
								<span
									className={`block h-1.5 rounded-full transition-all duration-300 ${
										i === heroIndex
											? "bg-[#f57c00] w-4"
											: "w-1.5 bg-white/40 group-hover:bg-white/60"
									}`}
								/>
							</button>
						))}
					</div>
					<div className="w-16 h-px bg-white/20 rounded-full overflow-hidden">
						<div
							className="hero-progress-bar h-full bg-[#f57c00]/90 rounded-full"
							style={{ width: `${progress}%` }}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
