"use client";

import React, { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { RegistrationForm } from "./Form";
import { HeroSection } from "./HeroSection";
import { COUNTRIES } from "@/constants";
import { CountryData } from "@/types";
import Header from "./header";

export default function HomePage() {
	const [selectedCountry, setSelectedCountry] = useState<CountryData>(
		COUNTRIES[0],
	);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 50);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleSmoothScroll = (
		e: React.MouseEvent<HTMLAnchorElement>,
		targetId: string,
	) => {
		e.preventDefault();
		const element = document.getElementById(targetId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
		setIsMenuOpen(false);
	};

	return (
		<div className="min-h-screen selection:bg-orange-200" id="home">
			<HeroSection
				onRegisterClick={() => {
					document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
					setIsMenuOpen(false);
				}}
			/>
			<div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
				<div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[120px] opacity-30 animate-pulse"></div>
				<div className="absolute bottom-[-5%] right-[-5%] w-[30%] h-[40%] bg-orange-100 rounded-full blur-[100px] opacity-20"></div>
				<div className="noise-bg absolute inset-0"></div>
			</div>

			<Header />

			<section className="relative pt-32 pb-20 lg:pt-52 lg:pb-32 overflow-hidden">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-12 gap-16 items-center">
						<div className="lg:col-span-7 relative z-10">
							<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-[#1a237e] text-sm font-bold mb-8 animate-bounce">
								<span className="relative flex h-2 w-2">
									<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
									<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
								</span>
								Xalqaro Ta&apos;lim Agentligi
							</div>
							<h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-8">
								Global Kelajagingizni{" "}
								<span className="text-gradient">
									Bugun Quring
								</span>
							</h1>
							<p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
								Ushbu yilning eng yuqori reytingiga ega
								universitetlarga kirishga yordam beramiz. Siz
								uchun eng yaxshi tanlovni tanlaydi va barcha
								jarayonni osonlashtira olaman.
							</p>

							<div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
								<a
									href="#countries"
									onClick={(e) =>
										handleSmoothScroll(e, "countries")
									}
									className="w-full sm:w-auto bg-[#f57c00] text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-orange-500/30 hover:bg-[#fb8c00] hover:scale-105 transition-all text-center"
								>
									Davlatlarni ko&apos;rish
								</a>
								<div className="flex items-center gap-4 bg-white/50 px-6 py-4 rounded-2xl border border-white/50 backdrop-blur-sm">
									<div className="flex -space-x-3">
										{[1, 2, 3, 4].map((i) => (
											<img
												key={i}
												className="w-12 h-12 rounded-full border-4 border-white object-cover"
												src={`https://i.pravatar.cc/150?u=${i * 123}`}
												alt="Talaba"
											/>
										))}
									</div>
									<div className="text-left leading-tight">
										<div className="text-[#1a237e] font-black text-xl">
											1000+
										</div>
										<div className="text-slate-500 text-sm font-semibold">
											Muvaffaqiyatli arizalar
										</div>
									</div>
								</div>
							</div>
						</div>

						<div
							id="register"
							className="lg:col-span-5 relative group"
						>
							<div className="absolute -inset-4 bg-gradient-to-tr from-blue-500 to-orange-500 rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
							<div className="relative transform lg:rotate-2 group-hover:rotate-0 transition-transform duration-500">
								<RegistrationForm />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="countries" className="py-32 relative">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
						<div className="max-w-2xl">
							<h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
								Muvaffaqiyatli{" "}
								<span className="text-[#f57c00]">
									Manzillar
								</span>
							</h2>
							<p className="text-lg text-slate-500">
								Dunyodagi eng rivojlangan davlatlarda
								ta&apos;lim oling. Biz har bir yo&apos;nalish
								bo&apos;yicha ekspertmiz.
							</p>
						</div>
						<div className="hidden lg:block">
							<div className="flex gap-4">
								<div className="text-center">
									<div className="text-3xl font-black text-[#1a237e]">
										10+
									</div>
									<div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
										Davlatlar
									</div>
								</div>
								<div className="w-px h-12 bg-slate-200"></div>
								<div className="text-center">
									<div className="text-3xl font-black text-[#1a237e]">
										600+
									</div>
									<div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
										Hamkorlar
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
						{COUNTRIES.map((country) => (
							<button
								key={country.id}
								onClick={() => {
									setSelectedCountry(country);
									const element =
										document.getElementById("universities");
									if (element)
										element.scrollIntoView({
											behavior: "smooth",
										});
								}}
								className={`group relative overflow-hidden p-8 rounded-[2.5rem] border-2 transition-all duration-500 text-left ${
									selectedCountry.id === country.id
										? "border-[#1a237e] bg-[#1a237e] text-white shadow-2xl shadow-blue-900/40"
										: "border-slate-100 bg-white hover:border-orange-100 hover:shadow-xl"
								}`}
							>
								<div className="text-5xl mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12">
									{country.flag}
								</div>
								<h3 className="text-2xl font-bold mb-2 tracking-tight">
									{country.name}
								</h3>
								<p
									className={`text-sm leading-relaxed ${selectedCountry.id === country.id ? "text-blue-100" : "text-slate-500"}`}
								>
									{country.universities.length}ta nufuzli
									universitetlar
								</p>

								<div
									className={`absolute bottom-4 right-6 transition-all duration-300 ${selectedCountry.id === country.id ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
								>
									<svg
										className="w-6 h-6"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="3"
											d="M17 8l4 4m0 0l-4 4m4-4H3"
										></path>
									</svg>
								</div>
							</button>
						))}
					</div>
				</div>
			</section>

			<section
				id="universities"
				className="py-32 bg-slate-900 text-white relative overflow-hidden"
			>
				<div className="noise-bg absolute inset-0 opacity-10"></div>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="mb-20">
						<div className="flex items-center gap-4 mb-6">
							<span className="text-6xl">
								{selectedCountry.flag}
							</span>
							<div>
								<h2 className="text-4xl lg:text-5xl font-black leading-tight">
									{selectedCountry.name}{" "}
									<span className="text-[#f57c00]">
										Tanlovi
									</span>
								</h2>
								<p className="text-slate-400 mt-2 text-lg">
									{selectedCountry.description}
								</p>
							</div>
						</div>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{selectedCountry.universities.map((uni) => (
							<div
								key={uni.id}
								className="group bg-slate-800/50 backdrop-blur-md border border-white/5 p-8 rounded-[2rem] hover:bg-slate-800 transition-all duration-300 flex flex-col justify-between"
							>
								<div>
									<div className="mb-6">
										{uni.rank && (
											<span className="inline-block px-3 py-1 bg-white/10 text-orange-400 text-[10px] font-black uppercase tracking-widest rounded-lg mb-4">
												{uni.rank}
											</span>
										)}
										<h3 className="text-2xl font-bold group-hover:text-orange-400 transition-colors">
											{uni.name}
										</h3>
									</div>
									<ul className="space-y-4 mb-10">
										{uni.advantages.map((adv, idx) => (
											<li
												key={idx}
												className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed"
											>
												<div className="mt-1 w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0"></div>
												{adv}
											</li>
										))}
									</ul>
								</div>
								<a
									href="#register"
									onClick={(e) =>
										handleSmoothScroll(e, "register")
									}
									className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 font-bold hover:bg-white hover:text-slate-900 transition-all text-center block"
								>
									Kurslar va Narxlar
								</a>
							</div>
						))}
					</div>
				</div>
			</section>

			<section id="about" className="py-32">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-20">
						<h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
							Nega{" "}
							<span className="text-[#1a237e]">Polyglot</span> Eng
							Yaxshisi?
						</h2>
						<p className="text-slate-500 text-lg max-w-2xl mx-auto">
							Biz shunchaki agent emasmiz, biz sizning yangi
							hayotingizga yo&apos;lboshchimiz.
						</p>
					</div>

					<div className="grid lg:grid-cols-3 gap-8">
						<div className="lg:col-span-2 bg-slate-50 p-12 rounded-[3rem] relative overflow-hidden group">
							<div className="relative z-10">
								<h4 className="text-3xl font-black mb-4">
									Shaxsiy Strategiya
								</h4>
								<p className="text-slate-600 leading-relaxed mb-8 max-w-md">
									Har bir talaba uchun uning qiziqishlari,
									byudjeti va kelajakdagi maqsadlaridan kelib
									chiqqan holda individual yo&apos;l xaritasi
									tuzamiz.
								</p>
								<div className="flex -space-x-4">
									{[1, 2, 3, 4, 5].map((i) => (
										<div
											key={i}
											className="w-14 h-14 rounded-full border-4 border-slate-50 bg-slate-200"
										></div>
									))}
								</div>
							</div>
							<div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
								<svg
									className="w-48 h-48"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M13 10V3L4 14H11V21L20 10H13Z"></path>
								</svg>
							</div>
						</div>

						<div className="bg-[#1a237e] p-12 rounded-[3rem] text-white flex flex-col justify-between">
							<div>
								<h4 className="text-3xl font-black mb-4">
									Partnershiplar
								</h4>
								<p className="text-blue-100/70 text-sm leading-relaxed">
									Ustuvor vazifamiz - sizning talabalik
									orzuingizni bizning ustuvor vazifamizdir.
								</p>
							</div>
							<div className="mt-12 text-6xl font-black">
								600+
							</div>
						</div>

						<div className="bg-orange-500 p-12 rounded-[3rem] text-white">
							<h4 className="text-3xl font-black mb-4">
								Global Network
							</h4>
							<p className="text-orange-50 text-sm leading-relaxed">
								Bitiruvchilarimiz butun dunyo bo&apos;ylab yirik
								kompaniyalarda faoliyat yuritmoqdalar.
							</p>
						</div>

						<div className="lg:col-span-2 bg-slate-100 p-12 rounded-[3rem] flex items-center justify-between group overflow-hidden">
							<div>
								<h4 className="text-3xl font-black mb-2">
									24/7 Support
								</h4>
								<p className="text-slate-500">
									Siz o&apos;qishga ketganingizdan so&apos;ng
									ham biz yoningizdamiz.
								</p>
							</div>
							<div className="text-8xl transform translate-x-8 translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500">
								💬
							</div>
						</div>
					</div>
				</div>
			</section>

			<footer
				id="contact"
				className="bg-white border-t border-slate-100 pt-32 pb-12"
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-12 gap-16 mb-24">
						<div className="lg:col-span-5">
							<a
								href="#home"
								onClick={(e) => handleSmoothScroll(e, "home")}
								className="hover:opacity-80 transition-opacity inline-block mb-10"
							>
								<Logo />
							</a>
							<p className="text-xl text-slate-500 leading-relaxed mb-10 max-w-sm">
								Sizning xalqaro ta&apos;lim olamingizga ochilgan
								eshigingiz.
							</p>
							<div className="flex gap-4">
								{[
									"Instagram",
									"Telegram",
									"Facebook",
									"LinkedIn",
								].map((social) => (
									<a
										key={social}
										href="#register"
										onClick={(e) =>
											handleSmoothScroll(e, "register")
										}
										className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center hover:bg-[#1a237e] hover:text-white transition-all"
									>
										<span className="sr-only">
											{social}
										</span>
										<div className="w-6 h-6 bg-current opacity-20 rounded-full"></div>
									</a>
								))}
							</div>
						</div>

						<div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
							<div className="space-y-6">
								<h5 className="font-bold text-slate-900 uppercase tracking-widest text-xs">
									Kompaniya
								</h5>
								<ul className="space-y-4 font-semibold text-slate-500 text-sm">
									<li>
										<a
											href="#about"
											onClick={(e) =>
												handleSmoothScroll(e, "about")
											}
											className="hover:text-[#1a237e]"
										>
											Biz haqimizda
										</a>
									</li>
									<li>
										<a
											href="#countries"
											onClick={(e) =>
												handleSmoothScroll(
													e,
													"countries",
												)
											}
											className="hover:text-[#1a237e]"
										>
											Davlatlar
										</a>
									</li>
									<li>
										<a
											href="#universities"
											onClick={(e) =>
												handleSmoothScroll(
													e,
													"universities",
												)
											}
											className="hover:text-[#1a237e]"
										>
											Universitetlar
										</a>
									</li>
									<li>
										<a
											href="#register"
											onClick={(e) =>
												handleSmoothScroll(
													e,
													"register",
												)
											}
											className="hover:text-[#1a237e]"
										>
											Bog&apos;lanish
										</a>
									</li>
								</ul>
							</div>
							<div className="space-y-6">
								<h5 className="font-bold text-slate-900 uppercase tracking-widest text-xs">
									Xizmatlar
								</h5>
								<ul className="space-y-4 font-semibold text-slate-500 text-sm">
									<li>
										<a
											href="#register"
											onClick={(e) =>
												handleSmoothScroll(
													e,
													"register",
												)
											}
											className="hover:text-[#1a237e]"
										>
											FAQ
										</a>
									</li>
									<li>
										<a
											href="#register"
											onClick={(e) =>
												handleSmoothScroll(
													e,
													"register",
												)
											}
											className="hover:text-[#1a237e]"
										>
											Viza maslahatlari
										</a>
									</li>
									<li>
										<a
											href="#register"
											onClick={(e) =>
												handleSmoothScroll(
													e,
													"register",
												)
											}
											className="hover:text-[#1a237e]"
										>
											Hujjatlar ro&apos;yxati
										</a>
									</li>
									<li>
										<a
											href="#register"
											onClick={(e) =>
												handleSmoothScroll(
													e,
													"register",
												)
											}
											className="hover:text-[#1a237e]"
										>
											Ariza berish
										</a>
									</li>
								</ul>
							</div>
							<div className="col-span-2 md:col-span-1 space-y-6">
								<h5 className="font-bold text-slate-900 uppercase tracking-widest text-xs">
									Bog&apos;lanish
								</h5>
								<div className="bg-slate-50 p-6 rounded-[2rem] space-y-4">
									<div className="font-black text-slate-900">
										+998 71 200 00 00
									</div>
									<div className="text-sm font-semibold text-slate-500">
										Toshkent sh., Yunusobod tumani
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-xs font-bold uppercase tracking-widest">
						<p>
							© 2024 Polyglot Consulting. Barcha ma&apos;lumotlar
							ushbu sahifada.
						</p>
						<div className="flex gap-8">
							<a
								href="#home"
								onClick={(e) => handleSmoothScroll(e, "home")}
								className="hover:text-slate-900"
							>
								Privacy Policy
							</a>
							<a
								href="#home"
								onClick={(e) => handleSmoothScroll(e, "home")}
								className="hover:text-slate-900"
							>
								Terms of Service
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
