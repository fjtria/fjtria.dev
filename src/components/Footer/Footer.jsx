import React, { useState } from 'react';
import '../../index.css';
import './Footer.css';
import { motion } from 'motion/react';

export const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "linear" }}
        >
            <hr></hr>
            <p>Produced 2025 by @fjtria.dev</p>
        </motion.footer>
    );
}