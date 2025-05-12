import React from "react";
import bitcoin from '../assets/images/bitcoin.webp';
import '../assets/styles/Blog.scss';

function Blog() {
    return(
    <div className="blog-container" id="blog">
        <h1>Personal Blog</h1>
        <div className="blog-grid">
            <div className="blog">
                <a href="https://medium.com/thecapital/digital-cryptocurrency-bitcoin-b3f448264ed1" target="_blank" rel="noreferrer"><img src={bitcoin} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://medium.com/thecapital/digital-cryptocurrency-bitcoin-b3f448264ed1" target="_blank" rel="noreferrer"><h2>Digital Cryptocurrency: Bitcoin</h2></a>
            </div>
        </div>
    </div>
    );
}

export default Blog;