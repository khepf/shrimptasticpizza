import React from 'react';
import styled from 'styled-components';
import stripes from '../assets/images/stripes.svg';

const LogoStyles = styled.div`
  /* This value controls the entire size of the logo*/
  font-size: 6px;
  font-size: clamp(1px, 0.65vw, 8px);
  width: 30em;
  height: 30em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  margin: 0;
  --borderSize: 1em;
  background: white url(${stripes});
  background-size: 150em;
  border: var(--borderSize) solid white;
  display: flex;
  .inner {
    margin: var(--borderSize);
    flex: 1;
    background: white;
    display: grid;
    grid-template-rows: 20% 1fr 1fr;
    align-content: center;
  }
  .est {
    font-size: 1.5em;
    align-self: center;
  }
  h1 {
    display: grid;
    grid-template-rows: 8fr 2fr;
    align-items: center;
    margin: 0;
    grid-row: 2 / span 2;
    grid-gap: 2em;
    transform: translateY(-0.7em);
  }

  .slices {
    font-size: 3.2em;
    letter-spacing: 0.2em;
    transform: translateY(-0.15em);
  }
  .slicks {
    transform: scale(1.4);
    display: block;
    text-shadow: 0.18em 0.18em 0 rgba(0, 0, 0, 0.05);
    perspective: 100px;
  }
  .letter {
    font-size: 2em;
    color: var(--red);
    --scale: 1;
    --rotate: -10deg;
    --translateX: 0;
    --translateY: 0;
    --rotateX: 0deg;
    transform: scale(var(--scale)) rotate(var(--rotate))
      translateX(var(--translateX)) translateY(var(--translateY))
      rotateX(var(--rotateX));
    display: inline-block;
    line-height: 1;
    transition: transform 0.3s;
    &.s {
      --translateX: -0.05;
    }
    &.h {
      --rotate: 2deg;
      --translateX: 0.05em;
      --translateY: -0.05em;
      --scale: 0.8;
    }
    &.r {
      --scale: 0.8;
      --translateY: -0.1em;
      --translateX: 0.1em;
    }
    &.i {
      --rotate: 3deg;
      --scale: 0.8;
      --translateX: 0.1em;
    }
    &.m {
      --rotate: -12deg;
      --scale: 0.8;
      --translateX: 0.06em;
    }
    &.p {
      --rotate: -12deg;
      --scale: 0.8;
      --translateX: 0.06em;
    }
    &.t {
      --translateX: -0.05;
    }
    &.a {
      --scale: 0.8;
      --rotate: 2deg;
      --translateX: 0.05em;
      --translateY: -0.05em;
    }
    &.s2 {
      --scale: 0.8;
      --translateY: -0.1em;
      --translateX: 0.1em;
    }
    &.t2 {
      --rotate: 3deg;
      --scale: 0.8;
      --translateX: 0.1em;
      --translateY: 0.23em;
    }
    &.i2 {
      --rotate: -12deg;
      --scale: 0.8;
      --translateX: 0.06em;
    }
    &.c {
      --rotate: -12deg;
      --translateX: 0.06em;
    }
  }
`;

export default function Logo() {
  return (
    <LogoStyles className="logo">
      <div className="inner">
        <span className="est">EST 1975</span>
        <h1>
          <span className="slicks">
            <span className="letter s">S</span>
            <span className="letter h">h</span>
            <span className="letter r">r</span>
            <span className="letter i">i</span>
            <span className="letter m">m</span>
            <span className="letter p">p</span>
            <span className="letter t">t</span>
            <span className="letter a">a</span>
            <span className="letter s2">s</span>
            <span className="letter t2">t</span>
            <span className="letter i2">i</span>
            <span className="letter c">c</span>
          </span>
          <span className="slices">pizza</span>
        </h1>
      </div>
    </LogoStyles>
  );
}
