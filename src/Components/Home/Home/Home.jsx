import React from 'react';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Proejcts from '../Projects/Proejcts';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Header />
            <About path="/about" />
            <Proejcts />
            <Blog />
            <Contact />
        </div>
    );
};

export default Home;