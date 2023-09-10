import styled from "styled-components";
import img from "../../assets/Images/Hero/hero-mobile-people-office.jpg";
import img2 from "../../assets/Images/Hero/hero-mobile-people-office@2x.jpg";
import img3 from "../../assets/Images/Hero/hero-tablet-people-office.jpg";
import img4 from "../../assets/Images/Hero/hero-tablet-people-office@2x.jpg";
import img5 from "../../assets/Images/Hero/hero-desktop-people-office.jpg";
import img6 from "../../assets/Images/Hero/hero-desktop-people-office@2x.jpg";

export const HeroSection = styled.div`
  padding-top: 112px;
  padding-bottom: 112px;
  background-color: #2e2f42;
  background-image: linear-gradient(
      rgba(46, 47, 66, 0.7),
      rgba(46, 47, 66, 0.7)
    ),
    url("${img}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  /* height: 600px; */
  margin: 0 auto;

  @media screen and (min-device-pixel-ratio: 2) and (max-width: 767px),
    screen and (min-resolution: 192dpi) and (max-width: 767px),
    screen and (min-resolution: 2dppx) and (max-width: 767px) {
    background-image: linear-gradient(
        rgba(46, 47, 66, 0.7),
        rgba(46, 47, 66, 0.7)
      ),
      url("${img2}");
  }

  @media screen and (min-width: 768px) {
    padding-bottom: 108px;
    background-image: linear-gradient(
        rgba(46, 47, 66, 0.7),
        rgba(46, 47, 66, 0.7)
      ),
      url("${img3}");
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 768px),
    screen and (min-resolution: 192dpi) and (min-width: 768px),
    screen and (min-resolution: 2dppx) and (min-width: 768px) {
    background-image: linear-gradient(
        rgba(46, 47, 66, 0.7),
        rgba(46, 47, 66, 0.7)
      ),
      url("${img4}");
  }

  @media screen and (min-width: 1200px) {
    padding-top: 188px;
    padding-bottom: 188px;
    background-image: linear-gradient(
        rgba(46, 47, 66, 0.7),
        rgba(46, 47, 66, 0.7)
      ),
      url("${img5}");
  }

  @media screen and (min-device-pixel-ratio: 2) and (min-width: 1200px),
    screen and (min-resolution: 192dpi) and (min-width: 1200px),
    screen and (min-resolution: 2dppx) and (min-width: 1200px) {
    background-image: linear-gradient(
        rgba(46, 47, 66, 0.7),
        rgba(46, 47, 66, 0.7)
      ),
      url("${img6}");
  }

  h1 {
    font-weight: 700;
    font-size: 36px;
    line-height: 1.1;
    text-align: center;
    color: #ffffff;
    max-width: 318px;
    margin: 0 auto;
    margin-bottom: 72px;

    @media screen and (min-width: 768px) {
      max-width: 494px;
      margin-bottom: 40px;
      font-size: 56px;
    }

    @media screen and (min-width: 1200px) {
      margin-bottom: 48px;
    }
  }

  button {
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: 32px;
    padding-right: 32px;
    font-family: inherit;
    font-weight: 700;
    line-height: 1.19;
    display: flex;
    font-size: 16px;
    letter-spacing: 0.04em;
    color: #ffffff;
    background: #4d5ae5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    cursor: pointer;
    align-items: center;
    border: none;
    margin: 0 auto;
    transition-property: background-color, box-shadow;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  button:hover,
  button:focus {
    background-color: #404bbf;
    box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
      0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
  }
`;
