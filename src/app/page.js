"use client";
import { ArrowIcon, SmallArrowIcon } from "@/components/icon";
import "@/styles/main.css";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef, useState, useEffect } from "react";
import SplitType from "split-type";
import HomeSticky from "@/components/main/HomeSticky";
import HomeExpertises from "@/components/main/HomeExpertises";
import HomeAwardsList from "@/components/main/HomeAwardsList";
import HomeAgency from "@/components/main/HomeAgency";
import HomeFooter from "@/components/main/HomeFooter";
import Footer from "@/components/layout/Footer";


export default function Home() {
  const mainTimelineRef = useRef();
  const [isDesktop, setIsDesktop] = useState(false);

  // 데스크톱/모바일 감지
  useEffect(() => {
    const checkDevice = () => {
      const isDesktopDevice = window.innerWidth >= 1024;
      setIsDesktop(isDesktopDevice);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // useGSAP으로 메인 애니메이션 설정
  useGSAP(
    () => {
      if (!isDesktop) return;

      // DOM 요소들이 준비될 때까지 대기
      const timer = setTimeout(() => {
        createMainTimeline();
      }, 100);

      return () => {
        clearTimeout(timer);
      };
    },
    { dependencies: [isDesktop] }
  );

  const createMainTimeline = () => {
    // GSAP 플러그인 등록
    gsap.registerPlugin(ScrollTrigger, SplitType);

    // SplitText 요소들을 두 가지 타입으로 분류하여 처리 (쪼개기만)
    const splitTextElements = document.querySelectorAll(
      ".SplitText.AnimatedSplitText"
    );
    const splitInstances = [];

    splitTextElements.forEach((element) => {
      if (element.textContent.trim()) {
        const isTitle = element.classList.contains("--anim-title");
        const isText = element.classList.contains("--anim-text");

        if (isTitle) {
          // 제목 타입: 문자 단위로 쪼개기
          const splitInstance = new SplitType(element, {
            types: "lines,chars",
            tagName: "div",
          });
          splitInstances.push(splitInstance);

          // 라인에 클래스만 추가
          splitInstance.lines.forEach((line, lineIndex) => {
            line.classList.add("lines", `lines${lineIndex + 1}`);
          });

          // 각 문자를 chars-wrapper로 감싸고 클래스만 추가
          splitInstance.chars.forEach((char, charIndex) => {
            const wrapper = document.createElement("div");
            wrapper.className = "chars-wrapper";

            char.parentNode.insertBefore(wrapper, char);
            wrapper.appendChild(char);

            char.className = `chars chars${charIndex + 1}`;
          });
        } else if (isText) {
          // 텍스트 타입: 라인 단위로 쪼개기
          const splitInstance = new SplitType(element, {
            types: "lines",
            tagName: "div",
          });
          splitInstances.push(splitInstance);

          // 각 라인을 lines-wrapper로 감싸고 클래스만 추가
          splitInstance.lines.forEach((line, lineIndex) => {
            const wrapper = document.createElement("div");
            wrapper.className = "lines-wrapper";

            line.parentNode.insertBefore(wrapper, line);
            wrapper.appendChild(line);

            line.classList.add("lines", `lines${lineIndex + 1}`);
          });
        }
      }
    });

    // 필수 DOM 요소 확인
    const homeStickyStep1 = document.querySelector(".HomeSticky-step1");

    // 메인 타임라인 생성
    mainTimelineRef.current = gsap.timeline({
      defaults: { ease: "none" },
    });

    const tl = mainTimelineRef.current;

    tl.fromTo(
      homeStickyStep1,
      { x: 0 },
      {
        x: () => {
          // 3번째 Featured Project 요소 찾기
          const thirdItem = document.querySelector(
            ".HomeFeaturedProjectItem:nth-child(3)"
          );
          if (thirdItem) {
            const thirdItemLeft = thirdItem.offsetLeft;
            return -thirdItemLeft;
          }
          return -3517; // 폴백 값
        },
        duration: 3,
      }
    );

    const homeFeaturedProjectItemArray = [
      {
        itemX: "0",
        innerY: "3rem",
        innerScale: "0.6",
        imageScale: "1.4",
      },
      {
        itemX: "-31vw",
        innerY: "15rem",
        innerScale: "0.4",
        imageScale: "1.6",
      },
      {
        itemX: "-87vw",
        innerY: "22rem",
        innerScale: "0.2",
        imageScale: "1.8",
      },
    ];

    homeFeaturedProjectItemArray.forEach((itemData, index) => {
      const item = `.HomeFeaturedProjectItem:nth-child(${index + 1})`;
      const imageContainer = `${item} .HomeFeaturedProjectItem-imageContainerInner`;
      const image = `${item} .HomeFeaturedProjectItem-image`;

      tl.fromTo(
        item,
        { x: itemData.itemX },
        {
          x: "0",
          duration: 3,
          ease: "power2.inOut",
        },
        0
      );
      tl.fromTo(
        imageContainer,
        {
          transformOrigin: "left",
          y: itemData.innerY,
          scale: itemData.innerScale,
        },
        {
          y: "0",
          scale: "1",
          duration: 3,
          ease: "none",
        },
        0
      );
      tl.fromTo(
        image,
        {
          transformOrigin: "center center",
          scale: itemData.imageScale,
        },
        {
          scale: "1",
          duration: 3,
          ease: "none",
        },
        0
      );
    });

    const scaleValue = 0.5;
    const featuredProjectItems = homeStickyStep1.querySelectorAll(
      ".HomeFeaturedProjectItem"
    );

    tl.to(
      featuredProjectItems,
      {
        transformOrigin: "top left",
        scale: scaleValue,
        duration: 2,
        ease: "power1.inOut",
      },
      3
    );

    tl.fromTo(
      ".HomeSticky-step2.--desc .HomeProjectsDesc-skillsItemLine",
      {
        width: 0,
      },
      {
        width: "100%",
        duration: 1,
        ease: "power2.out",
        stagger: 0.3,
      },
      "<"
    );

    tl.to(
      ".HomeSticky-step2.--list",
      {
        y: -1200,
        duration: 6,
        ease: "none",
      },
      "<"
    );

    const expertisesTl = gsap.timeline({
      defaults: { ease: "none" },
    });

    expertisesTl
      .fromTo(
        ".HomeExpertisesItem:nth-child(1)",
        {
          xPercent: 0,
        },
        {
          xPercent: -100,
        },
        0
      )
      .fromTo(
        ".--index-first",
        {
          xPercent: 0,
        },
        {
          xPercent: 100,
        },
        0
      )
      .fromTo(
        ".HomeExpertisesItem:nth-child(2)",
        {
          xPercent: 80,
        },
        {
          xPercent: -100,
        },
        "-=0.5"
      )
      .fromTo(
        ".--index-second",
        {
          xPercent: 0,
        },
        {
          xPercent: 100,
        },
        0
      )
      .fromTo(
        ".HomeExpertisesItem:nth-child(3)",
        {
          xPercent: 95,
        },
        {
          xPercent: -100,
        },
        "-=0.5"
      )
      .fromTo(
        ".--index-third",
        {
          xPercent: 0,
        },
        {
          xPercent: 100,
        },
        0
      )
      .fromTo(
        ".HomeExpertisesItem:nth-child(4)",
        {
          xPercent: 100,
        },
        {
          xPercent: -100,
        },
        "-=0.5"
      )
      .fromTo(
        ".--index-fourth",
        {
          xPercent: 0,
        },
        {
          xPercent: 100,
        },
        0
      );

    const homeFooterTl = gsap.timeline({
      defaults: { ease: "none" },
      paused: true
    });

    // HomeFooter의 모든 문자 요소들을 가져오기
    const footerChars = document.querySelectorAll(".HomeFooter-title .chars");
    
    if (footerChars.length > 0) {
      // 각 문자를 순차적으로 애니메이션
      footerChars.forEach((char, index) => {
        homeFooterTl.fromTo(
          char,
          {
            y: 100,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out"
          },
          index * 0.05 // 각 문자마다 0.05초씩 지연
        );
      });
    }

    // ScrollTrigger 설정
    ScrollTrigger.create({
      trigger: ".HomePage",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      animation: tl,
      markers: false,
    });

    ScrollTrigger.create({
      trigger: ".HomeExpertises",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      animation: expertisesTl,
      markers: true,
    });

    ScrollTrigger.create({
      trigger: ".HomeFooter",
      start: "top 80%",
      onEnter: () => homeFooterTl.play(),
      onLeaveBack: () => homeFooterTl.reverse()
    });

    
  };

  return (
    <>
      <main className="Page">
        <div className="Page-inner">
          <div className="HomePage">
            <HomeSticky />
            <HomeAwardsList />
            <HomeExpertises />
            <HomeAgency />
            <HomeFooter />
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}
