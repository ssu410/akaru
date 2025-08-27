"use client";
import { ArrowIcon, SmallArrowIcon } from "@/components/icon";
import "@/styles/main.css";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
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

  // 메인 애니메이션 설정
  useEffect(() => {
    if (!isDesktop) return;

    gsap.registerPlugin(ScrollTrigger);

    // DOM 요소들이 준비될 때까지 대기
    const timer = setTimeout(() => {
      createMainTimeline();
    }, 100);

    return () => {
      clearTimeout(timer);
      if (mainTimelineRef.current) {
        mainTimelineRef.current.kill();
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isDesktop]);

  const createMainTimeline = () => {
    // 필수 DOM 요소 확인
    const homeStickyStep1 = document.querySelector(".HomeSticky-step1");
    const homeProjectsList = document.querySelector(".Homepage-ProjectsInner");
    const homeProjectsDesc = document.querySelector(".HomeProjectsDesc");
    const homeAwards = document.querySelector(".HomeSticky-step3");
    const homeFeaturedProjectsInner = document.querySelector(".HomeFeaturedProjects-itemsInner");

    if (!homeStickyStep1 || !homeProjectsList) {
      console.warn("필수 DOM 요소를 찾을 수 없습니다.");
      return;
    }

    // 메인 타임라인 생성
    mainTimelineRef.current = gsap.timeline({
      defaults: { ease: "none" }
    });

    const tl = mainTimelineRef.current;

    // ============================================
    // 💫 1단계: 수평 스크롤 애니메이션 (0-5초)
    // ============================================
    tl.fromTo(
      homeStickyStep1,
      { x: 0 },
      {
        x: () => {
          // 3번째 Featured Project 요소 찾기
          const thirdItem = document.querySelector(".HomeFeaturedProjectItem:nth-child(3)");
          if (thirdItem) {
            // 3번째 요소의 현재 위치 (부모 컨테이너 기준)
            const thirdItemLeft = thirdItem.offsetLeft;
            // 3번째 요소의 좌측 끝이 화면 좌측 끝(0px)과 맞닿도록 하는 이동 거리
            return -thirdItemLeft;
          }
          return -3517; // 폴백 값
        },
        duration: 5,
      }
    )

    // ============================================
    // 💫 1.5단계: Featured Projects 개별 아이템 애니메이션 (0-5초, 수평 스크롤과 정확히 동기화)
    // ============================================
    // Featured Project 아이템 데이터 배열
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

    // 각 아이템별로 개별 애니메이션 추가 (1단계와 정확히 5초 동안 동기화)
    homeFeaturedProjectItemArray.forEach((itemData, index) => {
      const item = `.HomeFeaturedProjectItem:nth-child(${index + 1})`;
      const imageContainer = `${item} .HomeFeaturedProjectItem-imageContainerInner`;
      const image = `${item} .HomeFeaturedProjectItem-image`;

      // 아이템 X축 이동 (고유한 시작점에서 중앙으로) - 정확히 5초 동안
      tl.fromTo(
        item,
        { x: itemData.itemX },
        { 
          x: "0",
          duration: 5, // 수평 스크롤과 동일한 5초
          ease: "power2.inOut" 
        },
        0 // 모든 아이템이 동시에 시작
      );

      // 이미지 컨테이너 Y축 + 스케일 애니메이션 - 정확히 5초 동안
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
          duration: 5, // 수평 스크롤과 동일한 5초
          ease: "power2.inOut" 
        },
        0 // 수평 스크롤과 동시 시작
      );

      // 이미지 스케일 애니메이션 - 정확히 5초 동안
      tl.fromTo(
        image,
        {
          transformOrigin: "center center",
          scale: itemData.imageScale,
        },
        { 
          scale: "1",
          duration: 5, // 수평 스크롤과 동일한 5초
          ease: "power2.inOut" 
        },
        0 // 수평 스크롤과 동시 시작
      );
    });

    // ============================================
    // 💫 2단계: Projects List Y축 등장 (5초)
    // ============================================
    const projectItemInners = homeProjectsList.querySelectorAll(".HomeProjectItem-inner");
    const projectItemImages = homeProjectsList.querySelectorAll(".HomeProjectItem-image");
    
    if (projectItemInners.length > 0) {
      tl.fromTo(
        [projectItemInners[0], projectItemInners[1]],
        { y: 200 },
        { y: 0, duration: 1, ease: "power1.inOut" },
        5
      );

      tl.fromTo(
        [projectItemImages[0], projectItemImages[1]],
        { y: -200 },
        { y: 0, duration: 1, ease: "power1.inOut" },
        5
      );
    }

    // ============================================
    // 💫 3단계: 스케일 축소 애니메이션 (5-8초)
    // ============================================
    const scaleValue = 0.5;
    const featuredProjectItems = homeStickyStep1.querySelectorAll(".HomeFeaturedProjectItem");
    
    if (featuredProjectItems.length > 0) {
      tl.to(
        featuredProjectItems,
        {
          transformOrigin: "top left",
          scale: scaleValue,
          duration: 3,
          ease: "power1.inOut",
        },
        5
      );
    }

    tl.to(
      homeProjectsList,
      {
        transformOrigin: "top left",
        scale: scaleValue,
        duration: 3,
        ease: "power1.inOut",
      },
      5
    );

    // ============================================
    // 💫 4단계: 전체 요소들 위로 이동 (5.5-14초)
    // ============================================
    const moveUpDistance = -(homeProjectsList.getBoundingClientRect().height * scaleValue) + window.innerHeight;

    tl.to(
      [homeStickyStep1, homeProjectsList],
      {
        y: moveUpDistance,
        duration: 8.5,
        ease: "power1.inOut",
      },
      5.5
    );

    // ============================================
    // 💫 5단계: 이미지 패럴랙스 (5.5-14초)
    // ============================================
    const images = homeProjectsList.querySelectorAll("img");
    if (images.length > 0) {
      tl.fromTo(
        images,
        { y: "-17.5rem" },
        { y: "17.5rem", duration: 8.5, ease: "linear" },
        5.5
      );
    }

    // ============================================
    // 💫 6단계: Awards 섹션 등장 (12-17초)
    // ============================================
    if (homeAwards) {
      tl.fromTo(
        homeAwards,
        { x: "100%" },
        { x: 0, duration: 5, ease: "power1.inOut" },
        12
      );
    }

    // ScrollTrigger 설정
    ScrollTrigger.create({
      trigger: ".HomePage",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      pin: true,
      animation: tl,
      markers: false, // 개발 시에는 true로 설정
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
