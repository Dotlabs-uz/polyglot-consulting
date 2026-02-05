import React, { useEffect, useState } from "react";
import { Logo } from "./Logo";

interface headerProps {}

const Header: React.FC<headerProps> = () => {
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
		<nav
			className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? "py-3 glass shadow-sm border-b border-white/20" : "py-6"}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center">
					<a
						href="#home"
						onClick={(e) => handleSmoothScroll(e, "home")}
						className="hover:opacity-80 transition-opacity"
					>
						<Logo />
					</a>

					<div className="hidden md:flex items-center space-x-1">
						<a
							href="#about"
							onClick={(e) => handleSmoothScroll(e, "about")}
							className={`px-5 py-2 text-sm font-semibold transition-colors ${scrolled ? "text-slate-700 hover:text-[#1a237e]" : "text-white/90 hover:text-white"}`}
						>
							Biz haqimizda
						</a>
						<a
							href="#countries"
							onClick={(e) => handleSmoothScroll(e, "countries")}
							className={`px-5 py-2 text-sm font-semibold transition-colors ${scrolled ? "text-slate-700 hover:text-[#1a237e]" : "text-white/90 hover:text-white"}`}
						>
							Davlatlar
						</a>
						<a
							href="#universities"
							onClick={(e) =>
								handleSmoothScroll(e, "universities")
							}
							className={`px-5 py-2 text-sm font-semibold transition-colors ${scrolled ? "text-slate-700 hover:text-[#1a237e]" : "text-white/90 hover:text-white"}`}
						>
							Universitetlar
						</a>
						<div
							className={`w-px h-6 mx-4 ${scrolled ? "bg-slate-200" : "bg-white/30"}`}
						/>
						<a
							href="#register"
							onClick={(e) => handleSmoothScroll(e, "register")}
							className={`px-7 py-3 rounded-full font-bold transition-all ${scrolled ? "bg-[#1a237e] text-white shadow-lg shadow-blue-900/10 hover:bg-[#283593] hover:shadow-xl" : "bg-white/15 text-white border border-white/30 hover:bg-white/25"}`}
						>
							Bepul maslahat
						</a>
					</div>

					<button
						className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 border border-slate-200"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						<svg
							className="w-6 h-6 text-slate-800"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d={
									isMenuOpen
										? "M6 18L18 6M6 6l12 12"
										: "M4 6h16M4 12h16M4 18h16"
								}
							></path>
						</svg>
					</button>
				</div>
			</div>

			{isMenuOpen && (
				<div className="md:hidden glass border-t border-white/20 p-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
					<a
						href="#about"
						onClick={(e) => handleSmoothScroll(e, "about")}
						className="block text-lg font-bold text-slate-800"
					>
						Biz haqimizda
					</a>
					<a
						href="#countries"
						onClick={(e) => handleSmoothScroll(e, "countries")}
						className="block text-lg font-bold text-slate-800"
					>
						Davlatlar
					</a>
					<a
						href="#universities"
						onClick={(e) => handleSmoothScroll(e, "universities")}
						className="block text-lg font-bold text-slate-800"
					>
						Universitetlar
					</a>
					<a
						href="#register"
						onClick={(e) => handleSmoothScroll(e, "register")}
						className="block bg-[#1a237e] text-white text-center py-4 rounded-2xl font-bold"
					>
						Konsultatsiya
					</a>
				</div>
			)}
		</nav>
	);
};

export default Header;
