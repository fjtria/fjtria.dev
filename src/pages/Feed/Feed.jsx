import '../../index.css';
import './Feed.css';
import "bsky-embed/dist/bsky-embed.es.js"

export const Feed = () => {
    return (
        <section id='feed'>
            <h2>Feed</h2>
            <bsky-embed
                username='fjtria.dev'
                limit='5'
                link-target='_blank'
            >
            </bsky-embed>
        </section>
    );
}