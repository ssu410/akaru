"use client";

import { ArrowIcon, SmallArrowIcon } from "../icon";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HomeAwardsList() {
 const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // 씬, 카메라, 렌더러 기본 세팅
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#111318");

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // 조명
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(2, 3, 4);
    scene.add(light);

    // 세로로 긴 직육면체
    const geometry = new THREE.BoxGeometry(1, 3, 1); // 세로로 긴 박스
    const material = new THREE.MeshStandardMaterial({ color: 0x4da6ff });
    const prism = new THREE.Mesh(geometry, material);
    scene.add(prism);

    // 스크롤 -> 회전
    const onScroll = () => {
      const scrollY = window.scrollY;
      prism.rotation.y = scrollY * 0.01; // 스크롤 비례 Y축 회전
      prism.rotation.x = scrollY * 0.005; // 살짝 X축도 기울어짐
    };
    window.addEventListener("scroll", onScroll);

    // 애니메이션 루프
    const animate = () => {
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // 리사이즈 대응
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    // cleanup
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      mountRef.current?.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  

  return (
    <>
      <div className="HomeAwardsList">
        <div ref={mountRef} className="AwardsTrophy"></div>
        <div className="HomeAwardsList-awardsListContainer">
          <div className="AwardList --theme-light HomeAwardsList-awardsList --first --in-view">
            <div className="AwardList-header">
              <div className="AwardList-total">
                <span className="SplitText">(35)</span>
              </div>
              <div className="AwardList-title">awwwards</div>
            </div>
            <div className="AwardList-list">
              <div className="AwardList-line"></div>
              <ul>
                <li className="AwardList-itemWrap">
                  <a
                    className="AwardList-item"
                    href="https://www.awwwards.com/sites/akaru-2/"
                  >
                    <div className="AwardList-itemCol AwardList-itemTextWrap --first">
                      SiTE OF THE DAY
                    </div>
                    <div className="AwardList-itemWrap">
                      <div className="AwardList-itemTextWrap">
                        <span className="AwardList-itemText">AKARU V4</span>
                      </div>
                    </div>
                    <div className="AwardList-itemLink">
                      <span className="AppSvg AwardList-itemArrow --white">
                        <SmallArrowIcon />
                      </span>
                    </div>
                  </a>
                </li>
                <li className="AwardList-itemWrap">
                  <a
                    className="AwardList-item"
                    href="https://www.awwwards.com/sites/akaru-2/"
                  >
                    <div className="AwardList-itemCol AwardList-itemTextWrap --first">
                      SiTE OF THE DAY
                    </div>
                    <div className="AwardList-itemWrap">
                      <div className="AwardList-itemTextWrap">
                        <span className="AwardList-itemText">AKARU V4</span>
                      </div>
                    </div>
                    <div className="AwardList-itemLink">
                      <span className="AppSvg AwardList-itemArrow --white">
                        <SmallArrowIcon />
                      </span>
                    </div>
                  </a>
                </li>
                <li className="AwardList-itemWrap">
                  <a
                    className="AwardList-item"
                    href="https://www.awwwards.com/sites/akaru-2/"
                  >
                    <div className="AwardList-itemCol AwardList-itemTextWrap --first">
                      SiTE OF THE DAY
                    </div>
                    <div className="AwardList-itemWrap">
                      <div className="AwardList-itemTextWrap">
                        <span className="AwardList-itemText">AKARU V4</span>
                      </div>
                    </div>
                    <div className="AwardList-itemLink">
                      <span className="AppSvg AwardList-itemArrow --white">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M0.292893 11.6064C-0.0976311 11.9969 -0.0976311 12.6301 0.292893 13.0206C0.683418 13.4111 1.31658 13.4111 1.70711 13.0206L0.292893 11.6064ZM13.3137 0.999768C13.3137 0.447483 12.866 -0.000232004 12.3137 -0.000232257L3.31371 -0.000231456C2.76142 -0.000231793 2.31371 0.447484 2.31371 0.999768C2.31371 1.55205 2.76142 1.99977 3.31371 1.99977L11.3137 1.99977L11.3137 9.99977C11.3137 10.5521 11.7614 10.9998 12.3137 10.9998C12.866 10.9998 13.3137 10.5521 13.3137 9.99977L13.3137 0.999768ZM1.70711 13.0206L13.0208 1.70688L11.6066 0.292661L0.292893 11.6064L1.70711 13.0206Z"></path>
                        </svg>
                      </span>
                    </div>
                  </a>
                </li>
                {/* 반복되는 아이템들 */}
                {Array.from({ length: 12 }, (_, index) => (
                  <li key={index} className="AwardList-itemWrap">
                    <a
                      className="AwardList-item"
                      href="https://www.awwwards.com/sites/akaru-2/"
                    >
                      <div className="AwardList-itemCol AwardList-itemTextWrap --first">
                        SiTE OF THE DAY
                      </div>
                      <div className="AwardList-itemWrap">
                        <div className="AwardList-itemTextWrap">
                          <span className="AwardList-itemText">AKARU V4</span>
                        </div>
                      </div>
                      <div className="AwardList-itemLink">
                        <span className="AppSvg AwardList-itemArrow --white">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0.292893 11.6064C-0.0976311 11.9969 -0.0976311 12.6301 0.292893 13.0206C0.683418 13.4111 1.31658 13.4111 1.70711 13.0206L0.292893 11.6064ZM13.3137 0.999768C13.3137 0.447483 12.866 -0.000232004 12.3137 -0.000232257L3.31371 -0.000231456C2.76142 -0.000231793 2.31371 0.447484 2.31371 0.999768C2.31371 1.55205 2.76142 1.99977 3.31371 1.99977L11.3137 1.99977L11.3137 9.99977C11.3137 10.5521 11.7614 10.9998 12.3137 10.9998C12.866 10.9998 13.3137 10.5521 13.3137 9.99977L13.3137 0.999768ZM1.70711 13.0206L13.0208 1.70688L11.6066 0.292661L0.292893 11.6064L1.70711 13.0206Z"></path>
                          </svg>
                        </span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="AwardList --theme-light HomeAwardsList-awardsList --second --in-view">
            <div className="AwardList-header">
              <div className="AwardList-total">
                <span className="SplitText">(35)</span>
              </div>
              <div className="AwardList-title">awwwards</div>
            </div>
            <div className="AwardList-list">
              <div className="AwardList-line"></div>
              <ul>
                {Array.from({ length: 15 }, (_, index) => (
                  <li key={index} className="AwardList-itemWrap">
                    <a className="AwardList-item" href="https://www.awwwards.com/sites/akaru-2/">
                      <div className="AwardList-itemCol AwardList-itemTextWrap --first">
                        SiTE OF THE DAY
                      </div>
                      <div className="AwardList-itemWrap">
                        <div className="AwardList-itemTextWrap">
                          <span className="AwardList-itemText">AKARU V4</span>
                        </div>
                      </div>
                      <div className="AwardList-itemLink">
                        <span className="AppSvg AwardList-itemArrow --white">
                          <SmallArrowIcon />
                        </span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
