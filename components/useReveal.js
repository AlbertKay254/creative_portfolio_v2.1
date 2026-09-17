'use client';

import { useEffect } from 'react';

/** Fades elements marked with data-reveal in as they enter the viewport. */
export default function useReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('[data-reveal]'));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    nodes.forEach((n) => io.observe(n));

    const bars = Array.from(document.querySelectorAll('[data-bar]'));
    const bio = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.style.width = `${entry.target.getAttribute('data-bar')}%`;
          bio.unobserve(entry.target);
        });
      },
      { threshold: 0.4 }
    );
    bars.forEach((b) => bio.observe(b));

    const parallax = Array.from(document.querySelectorAll('[data-parallax]'));
    const onScroll = () => {
      parallax.forEach((el) => {
        const rect = el.parentElement.getBoundingClientRect();
        const k = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
        el.style.transform = `translate3d(0, ${(-k * 7).toFixed(2)}%, 0)`;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      io.disconnect();
      bio.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
}
