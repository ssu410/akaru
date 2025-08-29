import Link from "next/link";
import { ArrowIcon } from "../icon";
import Logo from "../Logo";
import SplitType from 'split-type'



export default function HomeSticky() {
  return (
    <div className="HomeSticky">
      <div className="HomeSticky-wrap">
        <div className="HomeSticky-wrapInner">
          <div className="HomeSticky-step1">
            <section className="HomeHero">
              <div className="HomeHero-content">
                <div className="HomeHero-contentInner">
                  <nav className="HomeHeroMenu">
                    <ul className="HomeHeroMenu-list">
                      <li className="HomeHeroMenu-item">
                        <a
                          href="projects"
                          className="HomeHeroMenu-itemLink"
                          title="Projects"
                        >
                          <div className="HomeHeroMenu-itemArrow">
                            <span className="AppSvg HomeHeroMenu-itemArrowIcon">
                              <ArrowIcon />
                            </span>
                          </div>
                          <span className="HomeHeroMenu-itemTitle">
                            Projects
                          </span>
                        </a>
                      </li>
                      <li className="HomeHeroMenu-item">
                        <a
                          href="projects"
                          className="HomeHeroMenu-itemLink"
                          title="Projects"
                        >
                          <div className="HomeHeroMenu-itemArrow">
                            <span className="AppSvg HomeHeroMenu-itemArrowIcon">
                              <ArrowIcon />
                            </span>
                          </div>
                          <span className="HomeHeroMenu-itemTitle">
                            Expertise
                          </span>
                        </a>
                      </li>
                      <li className="HomeHeroMenu-item">
                        <a
                          href="projects"
                          className="HomeHeroMenu-itemLink"
                          title="Projects"
                        >
                          <div className="HomeHeroMenu-itemArrow">
                            <span className="AppSvg HomeHeroMenu-itemArrowIcon">
                              <ArrowIcon />
                            </span>
                          </div>
                          <span className="HomeHeroMenu-itemTitle">Agency</span>
                        </a>
                      </li>
                      <li className="HomeHeroMenu-item">
                        <a
                          href="projects"
                          className="HomeHeroMenu-itemLink"
                          title="Projects"
                        >
                          <div className="HomeHeroMenu-itemArrow">
                            <span className="AppSvg HomeHeroMenu-itemArrowIcon">
                              <ArrowIcon />
                            </span>
                          </div>
                          <span className="HomeHeroMenu-itemTitle">
                            Contact
                          </span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <h1 className="HomeHero-title">
                    <div className="HomeLetters">
                      <Logo />
                    </div>
                    <span className="screen-hidden">
                      Akaru, creative web agency-hidden
                    </span>
                  </h1>
                  <div className="HomeHero-text">
                    <div className="HomeHero-textFakeTitle"></div>
                    <p className="SplitText AnimatedSplitText HomeHero-textText">
                      <span>
                        With a focus on precision expertise, our Lyon web agency
                        brings together daring innovation and a meticulous eye
                        for detail to deliver exceptional websites and designs.
                      </span>
                    </p>
                  </div>
                  <div className="HomeHero-footer">
                    <ul className="HomeHero-socials">
                      <li className="HomeHero-social">
                        <Link className="HomeHero-socialLink" href="/">
                          Instagram
                        </Link>
                      </li>
                      <li className="HomeHero-social">
                        <Link className="HomeHero-socialLink" href="/">
                          linkedin
                        </Link>
                      </li>
                      <li className="HomeHero-social">
                        <Link
                          className="HomeHero-socialLink"
                          href="https://www.instagram.com/akaru.agency/"
                        >
                          Twitter
                        </Link>
                      </li>
                      <li className="HomeHero-social">
                        <Link
                          className="HomeHero-socialLink"
                          href="https://www.instagram.com/akaru.agency/"
                        >
                          facebook
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <div className="HomeFeaturedProject">
              <div className="HomeFeaturedProject-items">
                <div className="HomeFeaturedProjects-itemsInner">
                  <div
                    className="HomeFeaturedProjectItem"
                  >
                    <div className="HomeFeaturedProjectItem-inner">
                      <div className="HomeFeaturedProjectItem-background --green"></div>
                      <a className="HomeFeaturedProjectItem-imageContainer">
                        <div className="HomeFeaturedProjectItem-imageContainerInner">
                          <img
                            className="AppImage-image HomeFeaturedProjectItem-image"
                            src="https://cdn.sanity.io/images/zvxprgaj/production/9b542e8283db7dcce8bdb93f088b7c0ab00eb880-3600x1720.jpg?w=1014&h=570&q=80&fit=crop&auto=format"
                            alt=""
                          />
                        </div>
                      </a>
                      <div className="HomeFeaturedProjectItem-content">
                        <div className="HomeFeaturedProjectItem-contentHeader">
                          <div className="HomeFeaturedProjectItem-year AppYear">
                            <span>2025</span>
                          </div>
                          <div className="HomeFeaturedProjectItem-details">
                            <div className="HomeFeaturedProjectItem-detail SmallText-1 --dark --ttu">
                              <span>Art Direction</span>
                            </div>
                            <div className="HomeFeaturedProjectItem-detail SmallText-1 --dark --ttu">
                              <span>Web Design</span>
                            </div>
                          </div>
                        </div>
                        <div className="HomeFeaturedProjectItem-titleContainer">
                          <div className="SplitText AnimatedSplitText HomeFeaturedProjectItem-title AppTitle-1 --dark">
                            Pikko
                          </div>
                        </div>
                        <a
                          href="projects/Pikko"
                          className="HomeFeaturedProjectItem-button AppButton AppLink --ttu"
                        >
                          <div className="AppButton-border"></div>
                          <div className="AppButton-svgWrap">
                            <div className="AppButton-svgWrapDot"></div>
                            <div className="AppButton-arrowWrap">
                              <span className="AppSvg AppButton-svg">
                                <ArrowIcon />
                              </span>
                            </div>
                            <div className="AppButton-arrowWrap --hover">
                              <span className="AppSvg AppButton-svg">
                                <ArrowIcon />
                              </span>
                            </div>
                          </div>
                        </a>
                        <div className="HomeFeaturedProjectItem-index SmallText-1 --dark">
                          01
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="HomeFeaturedProjectItem">
                    <div className="HomeFeaturedProjectItem-inner">
                      <div className="HomeFeaturedProjectItem-background --pink"></div>
                      <a className="HomeFeaturedProjectItem-imageContainer">
                        <div className="HomeFeaturedProjectItem-imageContainerInner">
                          <img
                            className="AppImage-image HomeFeaturedProjectItem-image"
                            src="https://cdn.sanity.io/images/zvxprgaj/production/01706a824075350ebb905e32a43bad86512f4a71-3600x1720.jpg?w=1014&h=570&q=80&fit=crop&auto=format"
                            alt=""
                          />
                        </div>
                      </a>
                      <div className="HomeFeaturedProjectItem-content">
                        <div className="HomeFeaturedProjectItem-contentHeader">
                          <div className="HomeFeaturedProjectItem-year AppYear">
                            <span>2025</span>
                          </div>
                          <div className="HomeFeaturedProjectItem-details">
                            <div className="HomeFeaturedProjectItem-detail SmallText-1 --dark --ttu">
                              <span>Art Direction</span>
                            </div>
                            <div className="HomeFeaturedProjectItem-detail SmallText-1 --dark --ttu">
                              <span>Web Design</span>
                            </div>
                          </div>
                        </div>
                        <div className="HomeFeaturedProjectItem-titleContainer">
                          <div className="SplitText AnimatedSplitText HomeFeaturedProjectItem-title AppTitle-1 --dark">
                            Pikko
                          </div>
                        </div>
                        <a
                          href="projects/Pikko"
                          className="HomeFeaturedProjectItem-button AppButton AppLink --ttu"
                        >
                          <div className="AppButton-border"></div>
                          <div className="AppButton-svgWrap">
                            <div className="AppButton-svgWrapDot"></div>
                            <div className="AppButton-arrowWrap">
                              <span className="AppSvg AppButton-svg">
                                <ArrowIcon />
                              </span>
                            </div>
                            <div className="AppButton-arrowWrap --hover">
                              <span className="AppSvg AppButton-svg">
                                <ArrowIcon />
                              </span>
                            </div>
                          </div>
                        </a>
                        <div className="HomeFeaturedProjectItem-index SmallText-1 --dark">
                          01
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="HomeFeaturedProjectItem">
                    <div className="HomeFeaturedProjectItem-inner">
                      <div className="HomeFeaturedProjectItem-background --blue"></div>
                      <a className="HomeFeaturedProjectItem-imageContainer">
                        <div className="HomeFeaturedProjectItem-imageContainerInner">
                          <img
                            className="AppImage-image HomeFeaturedProjectItem-image"
                            src="https://cdn.sanity.io/images/zvxprgaj/production/46f147c8ec6d7d28b4a64a0eebfe29540f54410f-3600x1720.jpg?w=1014&h=570&q=80&fit=crop&auto=format"
                            alt=""
                          />
                        </div>
                      </a>
                      <div className="HomeFeaturedProjectItem-content">
                        <div className="HomeFeaturedProjectItem-contentHeader">
                          <div className="HomeFeaturedProjectItem-year AppYear">
                            <span>2025</span>
                          </div>
                          <div className="HomeFeaturedProjectItem-details">
                            <div className="HomeFeaturedProjectItem-detail SmallText-1 --dark --ttu">
                              <span>Art Direction</span>
                            </div>
                            <div className="HomeFeaturedProjectItem-detail SmallText-1 --dark --ttu">
                              <span>Web Design</span>
                            </div>
                          </div>
                        </div>
                        <div className="HomeFeaturedProjectItem-titleContainer">
                          <div className="SplitText AnimatedSplitText HomeFeaturedProjectItem-title AppTitle-1 --dark">
                            Pikko
                          </div>
                        </div>
                        <a
                          href="projects/Pikko"
                          className="HomeFeaturedProjectItem-button AppButton AppLink --ttu"
                        >
                          <div className="AppButton-border"></div>
                          <div className="AppButton-svgWrap">
                            <div className="AppButton-svgWrapDot"></div>
                            <div className="AppButton-arrowWrap">
                              <span className="AppSvg AppButton-svg">
                                <ArrowIcon />
                              </span>
                            </div>
                            <div className="AppButton-arrowWrap --hover">
                              <span className="AppSvg AppButton-svg">
                                <ArrowIcon />
                              </span>
                            </div>
                          </div>
                        </a>
                        <div className="HomeFeaturedProjectItem-index SmallText-1 --dark">
                          01
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="HomeSticky-step2 --list">
            <div className="HomeProjects Homepage-projectsList">         
                  <div className="HomeProjects-items">
                    <div className="HomeProjects-item"></div>
                    <div className="HomeProjectItem HomeProjects-item">
                      <a
                        href="projects/moon-studio"
                        className="AppLink HomeProjectItem-inner"
                      >
                        <div className="HomeProjectItem-imageContainer">
                          <div className="AppImage HomeProjectItem-image">
                            <img className="AppImage-image --placeholder --lazy --loaded"
                              src="https://cdn.sanity.io/images/zvxprgaj/production/3f5c4c6b0dd9c8baced3d27dd43a31f6f618f5ed-3600x1720.jpg?w=1280&h=1186&q=80&fit=crop&auto=format"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="HomeProjectItem-hover">
                          <div className="HomeProjectItem-hoverHead">
                            <span className="HomeProjectItem-hoverHeadCat --ttu">
                              Art Direction
                            </span>
                            <span className="HomeProjectItem-hoverHeadYear">
                              2024
                            </span>
                          </div>
                          <div className="HomeProjectItem-hoverContent">
                            <div className="HomeProjectItem-hoverTitle AppTitle-9 --light">
                              <span>Moon studio</span>
                            </div>
                            <div className="HomeProjectItem-hoverButton --in-view">
                              <div
                                href="/projects/moon-studio"
                                className="AppLink AppButton --dark --in-view"
                              >
                                <div className="AppButton-border"></div>
                                <div className="AppButton-svgWrap">
                                  <div className="AppButton-svgWrapDot"></div>
                                  <div className="AppButton-arrowWrap">
                                    <span className="AppSvg AppButton-svg">
                                      <ArrowIcon />
                                    </span>
                                  </div>
                                  <div className="AppButton-arrowWrap --hover">
                                    <span className="AppSvg AppButton-svg">
                                      <ArrowIcon />
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                </div>
                <div className="HomeProjectItem HomeProjects-item">
                      <a
                        href="projects/moon-studio"
                        className="AppLink HomeProjectItem-inner"
                      >
                        <div className="HomeProjectItem-imageContainer">
                          <div className="AppImage HomeProjectItem-image">
                            <img className="AppImage-image --placeholder --lazy --loaded"
                              src="https://cdn.sanity.io/images/zvxprgaj/production/3f5c4c6b0dd9c8baced3d27dd43a31f6f618f5ed-3600x1720.jpg?w=1280&h=1186&q=80&fit=crop&auto=format"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="HomeProjectItem-hover">
                          <div className="HomeProjectItem-hoverHead">
                            <span className="HomeProjectItem-hoverHeadCat --ttu">
                              Art Direction
                            </span>
                            <span className="HomeProjectItem-hoverHeadYear">
                              2024
                            </span>
                          </div>
                          <div className="HomeProjectItem-hoverContent">
                            <div className="HomeProjectItem-hoverTitle AppTitle-9 --light">
                              <span>Moon studio</span>
                            </div>
                            <div className="HomeProjectItem-hoverButton --in-view">
                              <div
                                href="/projects/moon-studio"
                                className="AppLink AppButton --dark --in-view"
                              >
                                <div className="AppButton-border"></div>
                                <div className="AppButton-svgWrap">
                                  <div className="AppButton-svgWrapDot"></div>
                                  <div className="AppButton-arrowWrap">
                                    <span className="AppSvg AppButton-svg">
                                      <ArrowIcon />
                                    </span>
                                  </div>
                                  <div className="AppButton-arrowWrap --hover">
                                    <span className="AppSvg AppButton-svg">
                                      <ArrowIcon />
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                </div>
                <div className="HomeProjectItem HomeProjects-item">
                      <a
                        href="projects/moon-studio"
                        className="AppLink HomeProjectItem-inner"
                      >
                        <div className="HomeProjectItem-imageContainer">
                          <div className="AppImage HomeProjectItem-image">
                            <img className="AppImage-image --placeholder --lazy --loaded"
                              src="https://cdn.sanity.io/images/zvxprgaj/production/3f5c4c6b0dd9c8baced3d27dd43a31f6f618f5ed-3600x1720.jpg?w=1280&h=1186&q=80&fit=crop&auto=format"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="HomeProjectItem-hover">
                          <div className="HomeProjectItem-hoverHead">
                            <span className="HomeProjectItem-hoverHeadCat --ttu">
                              Art Direction
                            </span>
                            <span className="HomeProjectItem-hoverHeadYear">
                              2024
                            </span>
                          </div>
                          <div className="HomeProjectItem-hoverContent">
                            <div className="HomeProjectItem-hoverTitle AppTitle-9 --light">
                              <span>Moon studio</span>
                            </div>
                            <div className="HomeProjectItem-hoverButton --in-view">
                              <div
                                href="/projects/moon-studio"
                                className="AppLink AppButton --dark --in-view"
                              >
                                <div className="AppButton-border"></div>
                                <div className="AppButton-svgWrap">
                                  <div className="AppButton-svgWrapDot"></div>
                                  <div className="AppButton-arrowWrap">
                                    <span className="AppSvg AppButton-svg">
                                      <ArrowIcon />
                                    </span>
                                  </div>
                                  <div className="AppButton-arrowWrap --hover">
                                    <span className="AppSvg AppButton-svg">
                                      <ArrowIcon />
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                </div>
                <div className="HomeProjectItem HomeProjects-item">
                      <a
                        href="projects/moon-studio"
                        className="AppLink HomeProjectItem-inner"
                      >
                        <div className="HomeProjectItem-imageContainer">
                          <div className="AppImage HomeProjectItem-image">
                            <img className="AppImage-image --placeholder --lazy --loaded"
                              src="https://cdn.sanity.io/images/zvxprgaj/production/3f5c4c6b0dd9c8baced3d27dd43a31f6f618f5ed-3600x1720.jpg?w=1280&h=1186&q=80&fit=crop&auto=format"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="HomeProjectItem-hover">
                          <div className="HomeProjectItem-hoverHead">
                            <span className="HomeProjectItem-hoverHeadCat --ttu">
                              Art Direction
                            </span>
                            <span className="HomeProjectItem-hoverHeadYear">
                              2024
                            </span>
                          </div>
                          <div className="HomeProjectItem-hoverContent">
                            <div className="HomeProjectItem-hoverTitle AppTitle-9 --light">
                              <span>Moon studio</span>
                            </div>
                            <div className="HomeProjectItem-hoverButton --in-view">
                              <div
                                href="/projects/moon-studio"
                                className="AppLink AppButton --dark --in-view"
                              >
                                <div className="AppButton-border"></div>
                                <div className="AppButton-svgWrap">
                                  <div className="AppButton-svgWrapDot"></div>
                                  <div className="AppButton-arrowWrap">
                                    <span className="AppSvg AppButton-svg">
                                      <ArrowIcon />
                                    </span>
                                  </div>
                                  <div className="AppButton-arrowWrap --hover">
                                    <span className="AppSvg AppButton-svg">
                                      <ArrowIcon />
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                </div>
                <div className="HomeProjectItem HomeProjects-item">
                      <a
                        href="projects/moon-studio"
                        className="AppLink HomeProjectItem-inner"
                      >
                        <div className="HomeProjectItem-imageContainer">
                          <div className="AppImage HomeProjectItem-image">
                            <img className="AppImage-image --placeholder --lazy --loaded"
                              src="https://cdn.sanity.io/images/zvxprgaj/production/3f5c4c6b0dd9c8baced3d27dd43a31f6f618f5ed-3600x1720.jpg?w=1280&h=1186&q=80&fit=crop&auto=format"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="HomeProjectItem-hover">
                          <div className="HomeProjectItem-hoverHead">
                            <span className="HomeProjectItem-hoverHeadCat --ttu">
                              Art Direction
                            </span>
                            <span className="HomeProjectItem-hoverHeadYear">
                              2024
                            </span>
                          </div>
                          <div className="HomeProjectItem-hoverContent">
                            <div className="HomeProjectItem-hoverTitle AppTitle-9 --light">
                              <span>Moon studio</span>
                            </div>
                            <div className="HomeProjectItem-hoverButton --in-view">
                              <div
                                href="/projects/moon-studio"
                                className="AppLink AppButton --dark --in-view"
                              >
                                <div className="AppButton-border"></div>
                                <div className="AppButton-svgWrap">
                                  <div className="AppButton-svgWrapDot"></div>
                                  <div className="AppButton-arrowWrap">
                                    <span className="AppSvg AppButton-svg">
                                      <ArrowIcon />
                                    </span>
                                  </div>
                                  <div className="AppButton-arrowWrap --hover">
                                    <span className="AppSvg AppButton-svg">
                                      <ArrowIcon />
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                </div>
                <div className="HomeProjectItem HomeProjects-item">
                      <a
                        href="projects/moon-studio"
                        className="AppLink HomeProjectItem-inner"
                      >
                        <div className="HomeProjectItem-imageContainer">
                          <div className="AppImage HomeProjectItem-image">
                            <img className="AppImage-image --placeholder --lazy --loaded"
                              src="https://cdn.sanity.io/images/zvxprgaj/production/3f5c4c6b0dd9c8baced3d27dd43a31f6f618f5ed-3600x1720.jpg?w=1280&h=1186&q=80&fit=crop&auto=format"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="HomeProjectItem-hover">
                          <div className="HomeProjectItem-hoverHead">
                            <span className="HomeProjectItem-hoverHeadCat --ttu">
                              Art Direction
                            </span>
                            <span className="HomeProjectItem-hoverHeadYear">
                              2024
                            </span>
                          </div>
                          <div className="HomeProjectItem-hoverContent">
                            <div className="HomeProjectItem-hoverTitle AppTitle-9 --light">
                              <span>Moon studio</span>
                            </div>
                            <div className="HomeProjectItem-hoverButton --in-view">
                              <div
                                href="/projects/moon-studio"
                                className="AppLink AppButton --dark --in-view"
                              >
                                <div className="AppButton-border"></div>
                                <div className="AppButton-svgWrap">
                                  <div className="AppButton-svgWrapDot"></div>
                                  <div className="AppButton-arrowWrap">
                                    <span className="AppSvg AppButton-svg">
                                      <ArrowIcon />
                                    </span>
                                  </div>
                                  <div className="AppButton-arrowWrap --hover">
                                    <span className="AppSvg AppButton-svg">
                                      <ArrowIcon />
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="HomeProjects-item --button">
                      <div className="HomeProjects-button">
                        <a href="projects" className="AppButton">
                          <div className="AppButton-border"></div>
                          <div className="AppButton-label">
                            <span>See the projects</span>
                          </div>
                          <div className="AppButton-svgWrap">
                            <div className="AppButton-svgWrapDot"></div>
                            <div className="AppButton-arrowWrap">
                              <span className="AppSvg AppButton-svg">
                                <svg
                                  width="19"
                                  height="19"
                                  viewBox="0 0 19 19"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M0.292893 17.2929C-0.0976311 17.6834 -0.0976311 18.3166 0.292893 18.7071C0.683418 19.0976 1.31658 19.0976 1.70711 18.7071L0.292893 17.2929ZM18.9706 1.02944C18.9706 0.477153 18.5228 0.0294373 17.9706 0.029437L8.97056 0.0294378C8.41828 0.0294375 7.97056 0.477153 7.97056 1.02944C7.97056 1.58172 8.41828 2.02944 8.97056 2.02944L16.9706 2.02944L16.9706 10.0294C16.9706 10.5817 17.4183 11.0294 17.9706 11.0294C18.5228 11.0294 18.9706 10.5817 18.9706 10.0294L18.9706 1.02944ZM1.70711 18.7071L18.6777 1.73654L17.2635 0.322331L0.292893 17.2929L1.70711 18.7071Z"
                                    fill="inherit"
                                  ></path>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>              
            </div>
          </div>
          <div className="HomeSticky-step2 --desc">
            <div className="HomeProjectsDesc">
              <div className="HomeProjectsDesc-content">
                <h2 className="SplitText AnimatedSplitText --anim-title HomeProjectsDesc-title AppTitle-1 --tac">
                  Projects
                </h2>
                <ul className="HomeProjectsDesc-skills">
                  <li className="HomeProjectsDesc-skillsItem AppSmallText-1">
                    <div className="HomeProjectsDesc-skillsItemWrap">
                      <span className="--num">00</span>
                      <span className="--text">
                        <a
                          href="/en/expertises/logo-and-graphic-charter/"
                          className="AppLink"
                          data-v-138e99ee=""
                        >
                          Visual identity, graphic charter, logo
                        </a>
                      </span>
                    </div>
                    <div className="HomeProjectsDesc-skillsItemLine"></div>
                  </li>
                  <li className="HomeProjectsDesc-skillsItem AppSmallText-1">
                    <div className="HomeProjectsDesc-skillsItemWrap">
                      <span className="--num">01</span>
                      <span className="--text">
                        <a
                          href="/en/expertises/logo-and-graphic-charter/"
                          className="AppLink"
                          data-v-138e99ee=""
                        >
                          Visual identity, graphic charter, logo
                        </a>
                      </span>
                    </div>
                    <div className="HomeProjectsDesc-skillsItemLine"></div>
                  </li>
                  <li className="HomeProjectsDesc-skillsItem AppSmallText-1">
                    <div className="HomeProjectsDesc-skillsItemWrap">
                      <span className="--num">02</span>
                      <span className="--text">
                        <a
                          href="/en/expertises/logo-and-graphic-charter/"
                          className="AppLink"
                          data-v-138e99ee=""
                        >
                          Visual identity, graphic charter, logo
                        </a>
                      </span>
                    </div>
                    <div className="HomeProjectsDesc-skillsItemLine"></div>
                  </li>
                  <li className="HomeProjectsDesc-skillsItem AppSmallText-1">
                    <div className="HomeProjectsDesc-skillsItemWrap">
                      <span className="--num">03</span>
                      <span className="--text">
                        <a
                          href="/en/expertises/logo-and-graphic-charter/"
                          className="AppLink"
                          data-v-138e99ee=""
                        >
                          Visual identity, graphic charter, logo
                        </a>
                      </span>
                    </div>
                    <div className="HomeProjectsDesc-skillsItemLine"></div>
                  </li>
                </ul>
                <p className="SplitText AnimatedSplitText HomeProjectsDesc-text">
                  Creativity and innovation drive our process, fueled by a
                  commitment to uniqueness and tailor‑made solutions. We
                  joyfully reject the ordinary, the familiar, and the
                  commonplace, always striving to chart new territories in our
                  work.
                </p>
              </div>
            </div>
            <div className="HomeSticky-step3 --desc"></div>
          </div>
          <div className="HomeSticky-step3">
            <div className="HomeAwardsHero">
              <div className="HomeAwardsHero-container">
                <div className="HomeAwardsHero-content">
                  <div className="HomeAwardsHero-contentLeft">
                    <div className="HomeAwardsHero-contentTitle">
                      <h2 className="SplitText AnimatedSplitText">
                        Our Prizes
                      </h2>
                    </div>
                    <div className="HomeAwardsHero-intro">
                      <p className="SplitText AnimatedSplitText">
                        Every project we undertake prioritizes excellence,
                        aiming to captivate your visitors with a compelling and
                        impactful online experience. We firmly believe in the
                        unmatched value of immersive experiences, particularly
                        those crafted uniquely for you.
                      </p>
                      <a
                        href=""
                        className="AppButton HomeAwardsHero-introButton"
                      >
                        <div className="AppButton-border"></div>
                        <div className="AppButton-label">Our profile</div>
                        <div className="AppButton-svgWrap">
                          <div className="AppButton-svgWrapDot"></div>
                          <div className="AppButton-arrowWrap">
                            <span className="AppSvg AppButton-svg">
                              <svg
                                width="19"
                                height="19"
                                viewBox="0 0 19 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              ></svg>
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="HomeAwardsHero-trophee">
                    <div className="HomeAwardsHero-tropheeInner">
                      <div className="HomeAwardsHero-tropheeBackground">
                        <div className="AppImage HomeAwardsHero-tropheeBackgroundImage">
                          <img
                            src="https://cdn.sanity.io/images/zvxprgaj/production/7ae15b0fbe6b20e8fc11b238f06acb47a88e6077-2540x1392.jpg?w=845&h=463&q=80&fit=crop&auto=format"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="HomeAwardsNumbers HomeAwardsHero-numbers">
                    <div className="HomeAwardsNumbers-numbers">
                      <div className="HomeAwardsNumbers-numbersItem">
                        <span>35</span>
                        <span className="--ttu --fwb">awwards</span>
                      </div>
                      <div className="HomeAwardsNumbers-numbersItem">
                        <span>195</span>
                        <span className="--ttu --fwb">FWA</span>
                      </div>
                    </div>
                    <div className="AppText-12">
                      <p>
                        The Awwwards recognize the best web agencies in the
                        world by celebrating the most cutting-edge, creative, or
                        innovative websites and digital experiences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
