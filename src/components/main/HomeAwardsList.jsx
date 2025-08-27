"use client";

import { ArrowIcon, SmallArrowIcon } from "../icon";

export default function HomeAwardsList() {
  return (
    <>
      <div className="HomeAwardsList">
      <div className="AwardsTrophy"></div>
      <div className="HomeAwardsList-awardsListContainer">
        <div className="AwardList --first">
          <div className="AwardList-header">
            <div className="AwardList-total">
              <span>(</span>
              <div className="SplitText"></div>
              <span>)</span>
              <div className="AwardList-title">awwwards</div>
            </div>
          </div>
          <div className="AwardList-list">
            <div className="AwardList-line"></div>
            <ul>
              <li className="AwardList-item">
                <a href="https://www.awwwards.com/sites/akaru-2/">
                  <div className="AwardList-title">SiTE OF THE DAY</div>
                  <div className="AwardList-itemWrap">
                    <div className="AwardList-itemTextWrap">
                      <span className="AwardList-itemText">
                        AKARU V4
                      </span>
                    </div>
                  </div>
                  <div className="AwardList-itemLink">
                    <span className="AwardItemArrow">
                      <SmallArrowIcon />
                    </span>
                  </div>
                </a>
              </li>
              <li className="AwardList-item">
                <a href="https://www.awwwards.com/sites/akaru-2/">
                  <div className="AwardList-title">SiTE OF THE DAY</div>
                  <div className="AwardList-itemWrap">
                    <div className="AwardList-itemTextWrap">
                      <span className="AwardList-itemText">
                        AKARU V4
                      </span>
                    </div>
                  </div>
                  <div className="AwardList-itemLink">
                    <span className="AwardItemArrow">
                      <SmallArrowIcon />
                    </span>
                  </div>
                </a>
              </li>
              <li className="AwardList-item">
                <a href="https://www.awwwards.com/sites/akaru-2/">
                  <div className="AwardList-title">SiTE OF THE DAY</div>
                  <div className="AwardList-itemWrap">
                    <div className="AwardList-itemTextWrap">
                      <span className="AwardList-itemText">
                        AKARU V4
                      </span>
                    </div>
                  </div>
                  <div className="AwardList-itemLink">
                    <span className="AwardItemArrow">
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
                <li key={index} className="AwardList-item">
                  <a href="https://www.awwwards.com/sites/akaru-2/">
                    <div className="AwardList-title">SiTE OF THE DAY</div>
                    <div className="AwardList-itemWrap">
                      <div className="AwardList-itemTextWrap">
                        <span className="AwardList-itemText">
                          AKARU V4
                        </span>
                      </div>
                    </div>
                    <div className="AwardList-itemLink">
                      <span className="AwardItemArrow">
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
        <div className="AwardList --second">
          <div className="AwardList-header">
            <div className="AwardList-total">
              <span>(</span>
              <div className="SplitText"></div>
              <span>)</span>
              <div className="AwardList-title">awwwards</div>
            </div>
          </div>
          <div className="AwardList-list">
            <div className="AwardList-line"></div>
            <ul>
              {Array.from({ length: 15 }, (_, index) => (
                <li key={index} className="AwardList-item">
                  <a href="https://www.awwwards.com/sites/akaru-2/">
                    <div className="AwardList-title">SiTE OF THE DAY</div>
                    <div className="AwardList-itemWrap">
                      <div className="AwardList-itemTextWrap">
                        <span className="AwardList-itemText">
                          AKARU V4
                        </span>
                      </div>
                    </div>
                    <div className="AwardList-itemLink">
                      <span className="AwardItemArrow">
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
