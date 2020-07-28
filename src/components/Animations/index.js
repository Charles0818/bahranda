import React, { useRef, useCallback, useEffect, useLayoutEffect, useState } from 'react';
import './animation.scss'
import { Reveal, Tween } from 'react-gsap';

export const FadeIn = ({ children, repeat = true, threshold = 1, duration = 1 }) => {
  return (
    <Reveal repeat={repeat} threshold={threshold}>
      <Tween from={{ opacity: 0 }} duration={duration}>
        {children}
      </Tween>
    </Reveal>
  )
}

export const FadeInLeft = ({ children, repeat = true, threshold = 1, duration = 1 }) => (
  <Reveal repeat={repeat} threshold={threshold} trigger={<div />}>
    <Tween stagger={1}
      from={{ opacity: 0, transform: 'translate3d(-100vw, 0, 0)' }}
      ease="back.out(0.4)" duration={duration}>
      {children}
    </Tween>
  </Reveal>
);


export const FadeInRight = ({ children, repeat = true, threshold = 1, duration = 1 }) => (
  <Reveal repeat={repeat} threshold={threshold} trigger={<div />}>
    <Tween stagger={1}
      from={{ opacity: 0, transform: 'translate3d(100vw, 0, 0)' }}
      ease="back.out(0.4)" duration={duration}>
      {children}
    </Tween>
  </Reveal>
);


export const ScrollToBottom = ({ children, repeat = true, threshold = 1, duration = 1 }) => (
  <Reveal repeat={repeat} threshold={threshold} trigger={<div className="overflow-h" />}>
    <Tween
      from={{opacity: 0, transform: 'translate3d(0, -100px, 0) scale(.9)'}} disabled={true} duration={duration}
      ease="back.in">
        {children}
    </Tween>
  </Reveal>
)

export const ScrollToTop = ({ children, repeat = true, threshold = 1, duration = 1 }) => (
  <Reveal repeat={repeat} threshold={threshold} trigger={<div className="overflow-h" />}>
    <Tween
      from={{opacity: 0, transform: 'translate3d(0, 100px, 0) scale(.9)'}} disabled={true} duration={duration}
      ease="back.in">
        {children}
    </Tween>
  </Reveal>
)
export const Stagger = ({ children, repeat = true, threshold = 1, duration = 1 }) => (
  <Reveal repeat={repeat} threshold={threshold} trigger={<div className="overflow-h" />}>
    <Tween
      from={{opacity: 0, transform: 'translate3d(0, -100px, 35px) scale(1.5)'}} disabled={true} duration={duration}
      ease="back.in">
        {children}
    </Tween>
  </Reveal>
)