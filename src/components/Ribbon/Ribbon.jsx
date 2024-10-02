import React from 'react';
import css from './styles.module.css'
export const Ribbon = () => {
    const handleClick = (event) => {
        const target = event.target.nodeName.toLowerCase();
        if (target !== 'a') {
            window.open(document.querySelector('.r-ribbon_title').href);
        }
    };

    return (
        <div id="circle-r-ribbon" onClick={handleClick} className={css.wrapper}>
            <div className="r-ribbon_ahead r-ribbon_2str">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="160px" height="160px" viewBox="0 0 160 160">
                    <defs>
                        <path id="heading-arc" d="M 30 80 a 50 50 0 1 1 100 0"></path>
                    </defs>
                    <text className="r-ribbon_ahead-heading f14" fill="#000" textAnchor="middle">
                        <textPath startOffset="50%" xlinkHref="#heading-arc">Превосходные</textPath>
                    </text>
                </svg>
            </div>
            <div className="r-ribbon_ahead r-ribbon_2str2">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="160px" height="160px" viewBox="0 0 160 160">
                    <defs>
                        <path id="heading-arc" d="M 30 80 a 50 50 0 1 1 100 0"></path>
                    </defs>
                    <text className="r-ribbon_ahead-heading f14" fill="#000" textAnchor="middle">
                        <textPath startOffset="50%" xlinkHref="#heading-arc">морепродукты</textPath>
                    </text>
                </svg>
            </div>
            <p className="r-ribbon_year">2024</p>
            <a href="https://ru.restaurantguru.com/Address-39-Moscow" className="r-ribbon_title" target="_blank" rel="noopener noreferrer">Адрес 39</a>
            <div className="r-ribbon_ahead r-ribbon_ahead-bottom">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="120px" height="120px" viewBox="0 0 120 120">
                    <defs>
                        <path id="subheading-arc" d="M 12 60 a 48 48 0 0 0 96 0"></path>
                    </defs>
                    <text className="r-ribbon_ahead-subh" fill="#000" textAnchor="middle">
                        <textPath startOffset="50%" xlinkHref="#subheading-arc">
                            <a href="https://restaurantguru.com" target="_blank" rel="noopener noreferrer">Restaurant Guru</a>
                        </textPath>
                    </text>
                </svg>
            </div>
        </div>
    );
};

