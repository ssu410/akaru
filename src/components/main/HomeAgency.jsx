"use client";

import { ArrowIcon } from "../icon";

export default function HomeAgency() {
  return (
    <div className="HomeAgency --dark">
      <div className="HomeAgency-container">
        <div className="HomeAgency-header">
          <div className="HomeAgency-title">
            <h2 className="SplitText AnimatedSplitText --anim-title AppTitle-1 --dark --tac --in-view">Agency</h2>
          </div>
          <div className="HomeAgency-intro">
            <div className="HomeAgency-introTitle AppSmallText-1 --dark">
              <span>Web agency Lyon</span>
            </div>
            <div className="HomeAgency-introText">
              <div className="AppText-2 --dark">
                <p>
                  We love being close to our customers, we cherish the
                  encounters that make us grow and the challenges that
                  make us think.
                </p>
              </div>
            </div>
            <a className="AppLink AppButton --light --is-show HomeAgency-introButton">
              <div className="AppButton-border"></div>
              <div className="AppButton-label SmallText-1">
                <span>Our agency</span>
              </div>
              <div className="AppButton-svgWrap">
                <div className="AppButton-svgWrapDot"></div>
                <div className="AppButton-arrowWarp">
                  <span className="AppSvg AppButton-svg">
                    <ArrowIcon />
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="HomeAgency-gallery">
          <div className="HomeAgency-galleryColLeft">
            <img
              src="https://cdn.sanity.io/images/zvxprgaj/production/fb2aed2cf73d3914a65c1b1281d1ee9351054936-1800x1555.jpg?w=952&h=822&q=80&fit=crop&auto=format"
              alt=""
            />
          </div>
          <div className="HomeAgency-galleryColRight">
            <div className="HomeAgency-imageContainer">
              <img
                src="https://cdn.sanity.io/images/zvxprgaj/production/5529607c9acfa8ed822c573a6b46baaa453d1a30-940x560.jpg?w=492&h=293&q=80&fit=crop&auto=format"
                alt=""
              />
            </div>
            <div className="HomeAgency-imageContainer">
              <img
                src="https://cdn.sanity.io/images/zvxprgaj/production/86242e0cf7dbeae7c382394717a6fc16ab92cc57-940x560.jpg?w=1280&h=762&q=80&fit=crop&auto=format"
                alt=""
              />
            </div>
          </div>
          <div className="HomeAgency-galleryColBottom">
            <div className="HomeAgency-imageContainer">
              <img
                src="https://cdn.sanity.io/images/zvxprgaj/production/93ddd692da680de177281e94024bd12afb6f2f42-816x816.jpg?w=430&h=430&q=80&fit=crop&auto=format"
                alt=""
              />
            </div>
            <div className="HomeAgency-year">
              <p className="SplitText AnimatedSplitText HomeAgency-yearItem">
                2008
              </p>
              <p className="SplitText AnimatedSplitText HomeAgency-yearItem">
                / 2024
              </p>
            </div>
          </div>
        </div>
        <ul className="HomeAgency-list">
          <li className="HomeAgency-listItem">
            <div className="HomeAgency-listTitleWrap">
              <div className="HomeAgency-listTitle">
                <span>We like to keep things simple. </span>
              </div>
              <div className="HomeAgency-listText">
                <div>
                  <p>
                    In an era of excessive protocols, we advocate for
                    normalcy and a certain lightness. Without grand
                    speeches? Without any speeches at all.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="HomeAgency-listItem">
            <div className="HomeAgency-listTitleWrap">
              <div className="HomeAgency-listTitle">
                <span>We like to keep things simple. </span>
              </div>
              <div className="HomeAgency-listText">
                <div>
                  <p>
                    In an era of excessive protocols, we advocate for
                    normalcy and a certain lightness. Without grand
                    speeches? Without any speeches at all.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="HomeAgency-listItem">
            <div className="HomeAgency-listTitleWrap">
              <div className="HomeAgency-listTitle">
                <span>We like to keep things simple. </span>
              </div>
              <div className="HomeAgency-listText">
                <div>
                  <p>
                    In an era of excessive protocols, we advocate for
                    normalcy and a certain lightness. Without grand
                    speeches? Without any speeches at all.
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
