import React, { useEffect } from 'react';
import './Carousel.css';

function Carousel() {
    useEffect(() => {
        const wrapper = document.querySelector(".wrapper");
        const carousel = document.querySelector(".carousel");
        const arrowBtns = document.querySelectorAll(".wrapper i");
        const firstCardWidth = carousel.querySelector(".card").offsetWidth;
        const carouselChildrens = Array.from(carousel.children);

        let isDragging = false, startX, startScrollLeft, timeoutId;

        let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

        carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
            carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
        });

        carouselChildrens.slice(0, cardPerView).forEach(card => {
            carousel.insertAdjacentHTML("beforeend", card.outerHTML);
        });

        arrowBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
            });
        });

        const dragStart = (e) => {
            isDragging = true;
            carousel.classList.add("dragging");
            startX = e.pageX;
            startScrollLeft = carousel.scrollLeft;
        }

        const dragStop = () => {
            isDragging = false;
            carousel.classList.remove("dragging");
        }

        const dragging = (e) => {
            if (!isDragging) return;
            carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
        }

        const autoPlay = () => {
            if (window.innerWidth < 800) return;
            timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
        }
        autoPlay();

        const infiniteScroll = () => {
            if (carousel.scrollLeft === 0) {
                carousel.classList.add("no-transition");
                carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
                carousel.classList.remove("no-transition");
            } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
                carousel.classList.add("no-transition");
                carousel.scrollLeft = carousel.offsetWidth;
                carousel.classList.remove("no-transition");
            }

            clearTimeout(timeoutId);
            if (!wrapper.matches(":hover")) autoPlay();
        }

        carousel.addEventListener("mousedown", dragStart);
        document.addEventListener("mouseup", dragStop);
        carousel.addEventListener("mousemove", dragging);
        wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
        wrapper.addEventListener("mouseleave", autoPlay);
        carousel.addEventListener("scroll", infiniteScroll);

        return () => {
            carousel.removeEventListener("mousedown", dragStart);
            document.removeEventListener("mouseup", dragStop);
            carousel.removeEventListener("mousemove", dragging);
            wrapper.removeEventListener("mouseenter", () => clearTimeout(timeoutId));
            wrapper.removeEventListener("mouseleave", autoPlay);
            carousel.removeEventListener("scroll", infiniteScroll);
        };
    }, []);
    return(
        <>
        <div className='card-header'>
            <h1>Quizzes get serious results...</h1>
        </div>
        <div className='card-body'>
            <div className='wrapper'>
             <i id="left" className="fa-solid fa-angle-left"></i>
                <ul className='carousel'>
                    <li className='card'>
                        <div className='card-img'> <img src="Person_one.jpg" alt="Person" draggable="false" /></div>
                        <h2>Blanche Person</h2>
                        <span>Lorem ipsum dolor sit.</span>
                    </li>
                    <li className='card'>
                        <div className='card-img'> <img src="Person_two.jpg" alt="Person" draggable="false" /></div>
                        <h2>Blanche Person</h2>
                        <span>Lorem ipsum dolor sit.</span>
                    </li>
                    <li className='card'>
                        <div className='card-img'> <img src="Person_three.jpg" alt="Person" draggable="false" /></div>
                        <h2>Blanche Person</h2>
                        <span>Lorem ipsum dolor sit.</span>
                    </li>
                    <li className='card'>
                        <div className='card-img'> <img src="Person_four.jpg" alt="Person" draggable="false" /></div>
                        <h2>Blanche Person</h2>
                        <span>Lorem ipsum dolor sit.</span>
                    </li>
                    <li className='card'>
                        <div className='card-img'> <img src="Person_five.jpg" alt="Person" draggable="false" /></div>
                        <h2>Blanche Person</h2>
                        <span>Lorem ipsum dolor sit.</span>
                    </li>
                    <li className='card'>
                        <div className='card-img'> <img src="Person_four.jpg" alt="Person" draggable="false" /></div>
                        <h2>Blanche Person</h2>
                        <span>Lorem ipsum dolor sit.</span>
                    </li>
                </ul>
             <i id="right" className="fa-solid fa-angle-right"></i>
            </div>
        </div>  
        </>
    );
};

export default Carousel;