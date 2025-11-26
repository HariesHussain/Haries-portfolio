import React from "react";
import { motion } from "framer-motion";
import { FaFilePdf } from "react-icons/fa";
import { config } from "../config.jsx";

const Certificates = () => {
    return (
        <section className="py-20 md:py-32 text-center">
            <motion.h2 
                className="text-3xl sm:text-5xl font-bold text-white mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Certificates
            </motion.h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {config.certificates.map((cert, index) => (
                    <motion.a 
                        key={index}
                        href={cert.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="bg-white/5 border border-white/10 hover:border-white/30 p-6 rounded-xl backdrop-blur-lg transition-all duration-300 flex flex-col gap-3"
                    >
                        <FaFilePdf className="text-red-400 text-4xl mx-auto" />
                        <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                        <p className="text-white/60 text-sm">{cert.issuer} — {cert.year}</p>
                    </motion.a>
                ))}
            </div>
        </section>
    );
};

export default Certificates;
