import { useEffect, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// 서버 사이드에서는 useLayoutEffect 대신 useEffect 사용
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * GSAP 애니메이션을 위한 커스텀 훅
 * @param {Function} animationFunction - 애니메이션 함수
 * @param {Array} dependencies - 의존성 배열
 */
export const useGSAP = (animationFunction, dependencies = []) => {
  const containerRef = useRef();

  useIsomorphicLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      animationFunction();
    }, containerRef);

    return () => ctx.revert(); // 컴포넌트 언마운트 시 애니메이션 정리
  }, dependencies);

  return containerRef;
};

/**
 * 스크롤 트리거 애니메이션을 위한 커스텀 훅
 * @param {Function} animationFunction - 애니메이션 함수
 * @param {Object} options - ScrollTrigger 옵션
 * @param {Array} dependencies - 의존성 배열
 */
export const useScrollTrigger = (animationFunction, options = {}, dependencies = []) => {
  const triggerRef = useRef();

  useIsomorphicLayoutEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const element = triggerRef.current;
    if (!element) return;

    const scrollTrigger = ScrollTrigger.create({
      trigger: element,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
      ...options,
      animation: animationFunction(element),
    });

    return () => scrollTrigger.kill();
  }, dependencies);

  return triggerRef;
};

/**
 * 페이드 인 애니메이션을 위한 커스텀 훅
 * @param {Object} options - 애니메이션 옵션
 * @param {Array} dependencies - 의존성 배열
 */
export const useFadeIn = (options = {}, dependencies = []) => {
  const elementRef = useRef();

  useIsomorphicLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const element = elementRef.current;
    if (!element) return;

    const {
      duration = 0.8,
      ease = "power2.out",
      delay = 0,
      y = 30,
      trigger = true,
      ...props
    } = options;

    if (trigger) {
      gsap.registerPlugin(ScrollTrigger);
      
      const animation = gsap.fromTo(
        element,
        { opacity: 0, y },
        { opacity: 1, y: 0, duration, ease, delay, ...props }
      );

      const scrollTrigger = ScrollTrigger.create({
        trigger: element,
        start: "top 80%",
        animation,
        toggleActions: "play none none reverse",
      });

      return () => scrollTrigger.kill();
    } else {
      const animation = gsap.fromTo(
        element,
        { opacity: 0, y },
        { opacity: 1, y: 0, duration, ease, delay, ...props }
      );

      return () => animation.kill();
    }
  }, dependencies);

  return elementRef;
};

/**
 * 슬라이드 인 애니메이션을 위한 커스텀 훅
 * @param {Object} options - 애니메이션 옵션
 * @param {Array} dependencies - 의존성 배열
 */
export const useSlideIn = (options = {}, dependencies = []) => {
  const elementRef = useRef();

  useIsomorphicLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const element = elementRef.current;
    if (!element) return;

    const {
      duration = 0.8,
      ease = "power2.out",
      delay = 0,
      direction = "left",
      distance = 100,
      trigger = true,
      ...props
    } = options;

    const initialProps = { opacity: 0 };
    const animateProps = { opacity: 1, duration, ease, delay, ...props };

    switch (direction) {
      case "left":
        initialProps.x = -distance;
        animateProps.x = 0;
        break;
      case "right":
        initialProps.x = distance;
        animateProps.x = 0;
        break;
      case "up":
        initialProps.y = distance;
        animateProps.y = 0;
        break;
      case "down":
        initialProps.y = -distance;
        animateProps.y = 0;
        break;
    }

    if (trigger) {
      gsap.registerPlugin(ScrollTrigger);
      
      const animation = gsap.fromTo(element, initialProps, animateProps);

      const scrollTrigger = ScrollTrigger.create({
        trigger: element,
        start: "top 80%",
        animation,
        toggleActions: "play none none reverse",
      });

      return () => scrollTrigger.kill();
    } else {
      const animation = gsap.fromTo(element, initialProps, animateProps);
      return () => animation.kill();
    }
  }, dependencies);

  return elementRef;
};

/**
 * 호버 애니메이션을 위한 커스텀 훅
 * @param {Object} options - 애니메이션 옵션
 */
export const useHoverAnimation = (options = {}) => {
  const elementRef = useRef();

  useIsomorphicLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const element = elementRef.current;
    if (!element) return;

    const {
      scale = 1.05,
      duration = 0.3,
      ease = "power2.out",
      ...props
    } = options;

    const hoverIn = () => {
      gsap.to(element, { scale, duration, ease, ...props });
    };

    const hoverOut = () => {
      gsap.to(element, { scale: 1, duration, ease, ...props });
    };

    element.addEventListener("mouseenter", hoverIn);
    element.addEventListener("mouseleave", hoverOut);

    return () => {
      element.removeEventListener("mouseenter", hoverIn);
      element.removeEventListener("mouseleave", hoverOut);
    };
  }, []);

  return elementRef;
};

/**
 * 스태거 애니메이션을 위한 커스텀 훅
 * @param {Object} options - 애니메이션 옵션
 * @param {Array} dependencies - 의존성 배열
 */
export const useStaggerAnimation = (options = {}, dependencies = []) => {
  const containerRef = useRef();

  useIsomorphicLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const container = containerRef.current;
    if (!container) return;

    const {
      selector = ".stagger-item",
      duration = 0.8,
      ease = "power2.out",
      stagger = 0.1,
      y = 30,
      trigger = true,
      ...props
    } = options;

    const elements = container.querySelectorAll(selector);
    if (elements.length === 0) return;

    if (trigger) {
      gsap.registerPlugin(ScrollTrigger);
      
      const animation = gsap.fromTo(
        elements,
        { opacity: 0, y },
        { opacity: 1, y: 0, duration, ease, stagger, ...props }
      );

      const scrollTrigger = ScrollTrigger.create({
        trigger: container,
        start: "top 80%",
        animation,
        toggleActions: "play none none reverse",
      });

      return () => scrollTrigger.kill();
    } else {
      const animation = gsap.fromTo(
        elements,
        { opacity: 0, y },
        { opacity: 1, y: 0, duration, ease, stagger, ...props }
      );

      return () => animation.kill();
    }
  }, dependencies);

  return containerRef;
};

/**
 * 텍스트 애니메이션을 위한 커스텀 훅
 * @param {Object} options - 애니메이션 옵션
 * @param {Array} dependencies - 의존성 배열
 */
export const useTextAnimation = (options = {}, dependencies = []) => {
  const textRef = useRef();

  useIsomorphicLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const element = textRef.current;
    if (!element) return;

    const {
      duration = 0.6,
      ease = "power2.out",
      delay = 0,
      stagger = 0.05,
      y = 50,
      trigger = true,
      splitBy = "words", // 'words' or 'chars'
      ...props
    } = options;

    const text = element.textContent;
    let splitElements;

    if (splitBy === "words") {
      const words = text.split(" ");
      element.innerHTML = words
        .map(word => `<span class="split-word">${word}</span>`)
        .join(" ");
      splitElements = element.querySelectorAll(".split-word");
    } else {
      const chars = text.split("");
      element.innerHTML = chars
        .map(char => `<span class="split-char">${char === " " ? "&nbsp;" : char}</span>`)
        .join("");
      splitElements = element.querySelectorAll(".split-char");
    }

    if (trigger) {
      gsap.registerPlugin(ScrollTrigger);
      
      const animation = gsap.fromTo(
        splitElements,
        { opacity: 0, y },
        { opacity: 1, y: 0, duration, ease, delay, stagger, ...props }
      );

      const scrollTrigger = ScrollTrigger.create({
        trigger: element,
        start: "top 80%",
        animation,
        toggleActions: "play none none reverse",
      });

      return () => scrollTrigger.kill();
    } else {
      const animation = gsap.fromTo(
        splitElements,
        { opacity: 0, y },
        { opacity: 1, y: 0, duration, ease, delay, stagger, ...props }
      );

      return () => animation.kill();
    }
  }, dependencies);

  return textRef;
};

/**
 * 타임라인 애니메이션을 위한 커스텀 훅
 * @param {Function} timelineFunction - 타임라인 생성 함수
 * @param {Array} dependencies - 의존성 배열
 */
export const useTimeline = (timelineFunction, dependencies = []) => {
  const containerRef = useRef();
  const timelineRef = useRef();

  useIsomorphicLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      timelineRef.current = timelineFunction();
    }, container);

    return () => ctx.revert();
  }, dependencies);

  return { containerRef, timeline: timelineRef.current };
};

export default useGSAP;