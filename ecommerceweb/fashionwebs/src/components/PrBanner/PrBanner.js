import React, { useEffect } from 'react';
import './PrBanner.css';

const PrBanner = () => {
  useEffect(() => {
    const fadeInElements = () => {
      const banner1 = document.querySelector('.Banner1');
      const bannerBorder = document.querySelector('.BannerBorder');
      const bannerBorderLine = document.querySelector('.BannerBorderLine');
      const bannerHolder = document.querySelectorAll('.BannerHolder');
      const sales = document.querySelector('.Sales');
      const biggest = document.querySelector('.Biggest');
      const shopNow = document.querySelector('.ShopNow');

      setTimeout(() => {
        banner1.style.display = 'block';
      }, 1000);

      setTimeout(() => {
        bannerBorder.style.display = 'block';
        bannerBorderLine.style.display = 'block';
      }, 1000);

      setTimeout(() => {
        bannerHolder.forEach((element) => {
          element.style.display = 'block';
        });
      }, 2500);

      setTimeout(() => {
        sales.style.display = 'block';
      }, 3500);

      setTimeout(() => {
        biggest.style.display = 'block';
      }, 4500);

      setTimeout(() => {
        shopNow.style.display = 'block';
      }, 5500);
    };

    fadeInElements();
  }, []);

  return (
    <div id="wrapper">
      <svg className="Banner1" height="220" width="450">
        <polygon
          className="BorderAnimationEx1    BannerBorder"
          strokeMiterlimit="10"
          points="30 5, 20 200, 440 170, 440 55"
          style={{ fill: 'none', stroke: '#000', strokeWidth: '5' }}
        />

        <polygon
          className="BannerHolder"
          points="5 31, 5 185, 410 205, 430 10"
          style={{ opacity: '0.2', fill: '#000' }}
        />
        <polygon
          className="BannerHolder"
          points="5 31, 5 180, 410 200, 430 10"
          style={{ opacity: '1', fill: '#fdd808' }}
        />

        <text
          className="Sales"
          x="43"
          y="122"
          fontFamily="Viga"
          fontSize="65"
          opacity="0.8"
          fill="#fff"
        >
          SALES{' '}
          <tspan x="43" y="119" fontFamily="Viga" fontSize="65" fill="#000">
            SALES
          </tspan>
        </text>

        <text
          className="Biggest"
          fontSize="23"
          fill="#000"
          fontWeight="300"
          fontFamily="Viga"
        >
          <tspan x="270" y="70">B I G G E S T</tspan>
          <tspan x="287" y="95">S A L E S</tspan>
          <tspan x="302" y="120">UP TO</tspan>
          <tspan x="313" y="143">70%</tspan>
          <tspan x="314" y="168">OFF</tspan>
        </text>

        <text
          className="ShopNow"
          x="76"
          y="161.5"
          fontFamily="Viga"
          opacity="0.8"
          fontSize="20"
          fill="#fff"
        >
          S H O P&nbsp;&nbsp;N O W
        </text>

        <polyline
          className="BorderAnimationEx1 BannerBorderLine"
          points="30 3, 20 200"
          style={{ fill: 'none', stroke: '#000', strokeWidth: '4.5' }}
        />
      </svg>
    </div>
  );
};

export default PrBanner;
