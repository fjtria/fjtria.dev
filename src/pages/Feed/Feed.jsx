import '../../index.css';
import './Feed.css';
import "bsky-embed/dist/bsky-embed.es.js"
import { motion } from 'motion/react';

export const Feed = () => {
    return (
        <motion.section id='feed'
            animate={{
                opacity: [0, 1],
                x: [100, 0]
            }}
            transition={{
                type: "linear",
            }}
        >
            <h2>Feed</h2>
            <bsky-embed
                username='fjtria.dev'
                limit='5'
                link-target='_blank'
            >
            </bsky-embed>
        </motion.section>
    );
}