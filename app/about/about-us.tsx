import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
    return (
        <section className="bg-gray-100 pt-8" id="about-us">
            <div className="container mx-auto px-6 lg:px-20">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-6">About Nkosiyazi</h2>
                    <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
                        At Nkosiyazi, we bring a seamless blend of expertise, creativity, and professionalism
                        to every project we undertake. Specializing in painting, tiling, carpentry, plumbing, and
                        kitchen remodeling, we pride ourselves on delivering impeccable craftsmanship that
                        transforms spaces into works of art.
                    </p>
                </motion.div>


            </div>
        </section>
    );
};

const services = [
    {
        title: "Painting",
        description: "Enhance your space with vibrant, long-lasting colors and precision finishes."
    },
    {
        title: "Tiling",
        description: "Expertly laid tiles to create durable and stylish surfaces for any room."
    },
    {
        title: "Carpentry",
        description: "Custom woodwork that adds functionality and elegance to your home."
    },
    {
        title: "Plumbing",
        description: "Reliable plumbing solutions for every need, from repairs to installations."
    },
    {
        title: "Kitchen Remodeling",
        description: "Transform your kitchen into a modern, functional, and aesthetic masterpiece."
    }
];

export default AboutUs;