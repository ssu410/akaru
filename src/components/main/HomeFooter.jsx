"use client";

import { ArrowIcon } from "../icon";

export default function HomeFooter() {
  return (
    <div className="HomeFooter">
      <div className="HomeFooter-container">
        <div className="SplitText AnimatedSplitText --anim-title HomeFooter-title AppTitle-1 --tac --in-view">
          We challenge you to challenge us.
        </div>
        <a href="" className="AppLink AppButton HomeFooter-button">
          <div className="AppButton-border"></div>
          <div className="AppButton-label">
            <span>Contact us</span>
          </div>
          <div className="AppButton-svgWrap">
            <div className="AppButton-svgWrapDot"></div>
            <div className="AppButton-arrowWrap" data-v-ad9f7f96="">
              <span className="AppSvg AppButton-svg">
                <ArrowIcon />
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
