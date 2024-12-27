import React from "react";
import { motion } from "framer-motion";
import DottedBackground from "../component/dottedBackground";

export default function footer() {
	return (
		<footer className="relative w-full pt-16 pb-4 bg-[#0F172A] text-white">
            {/* Dotted Background */}
            <DottedBackground />
            
			<div className="container flex flex-col items-center max-w-6xl px-8 mx-auto mb-5 text-center lg:px-20">
				{/* Profile */}
				<div className="mb-2">
					<motion.h2
						className="mb-4 font-extrabold text-[45px] md:text-[60px] lg:text-[80px] xl:text-[100px] text-center transition-all ease-in-out duration-300 md:mb-6"
						initial={{ opacity: 0, y: -50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
					>
						Let's work together
					</motion.h2>
				</div>

				{/* Contact Info */}
				<motion.div 
                    className="flex flex-col items-center w-full px-2 mb-6 md:justify-between md:flex-row"
                    initial={{ opacity: 0, y: 20}}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
                >
					<p className="text-sm text-gray-400">jimmymaulana01@gmail.com</p>
					<p className="text-sm text-gray-400">+62 812 7346 5572</p>
				</motion.div>

				{/* Footer Bottom Info */}
				<div className="flex items-center justify-between w-full px-2 py-4 border-t border-gray-700 md:flex-row">
					<motion.div 
                        className="flex flex-col items-start justify-start gap-6 md:items-center md:justify-center md:flex-row"
                        initial={{ opacity: 0, y: 20 }}
					    whileInView={{ opacity: 1, y: 0 }}
					    transition={{ duration: 1 }}
                    >
						<div className="flex flex-col items-start">
							<h1 className="mb-4">Version</h1>
							<p className="text-gray-400 ">2024 ©Edition</p>
						</div>

						<div className="flex flex-col items-start">
							<h1 className="mb-4">Author</h1>
							<p className="text-gray-400 ">Jimmy Maulana</p>
						</div>
					</motion.div>

					{/* Social Media Links */}
					<div className="flex items-start justify-start md:items-center md:justify-center">
						<motion.div 
                            className="flex flex-col items-end"
                            initial={{ opacity: 0, y: 20 }}
					        whileInView={{ opacity: 1, y: 0 }}
					        transition={{ duration: 1 }}
                        >
							<h1 className="mb-4">Social Media</h1>
							<div className="flex flex-col items-end justify-start space-y-6 md:space-x-6 md:justify-center md:flex-row md:space-y-0">
								<a
									href="https://www.instagram.com/jm__sora/profilecard/?igsh=Yzh1ZDd2cmJhdWNl"
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-400 hover:text-white"
								>
									Instagram
								</a>
								<a
									href="https://github.com/HarukiDev"
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-400 hover:text-white"
								>
									Github
								</a>
								<a
									href="https://www.linkedin.com/in/jimmy-maulana-1622b1270"
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-400 hover:text-white"
								>
									LinkedIn
								</a>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</footer>
	);
}
