import Link from "next/link";
import Logo from "@/components/Logo";
import { Arrow } from "@/components/icon/ArrowIcons";

export default function Header() {
  return (
    <header className="Header">
      <Link href="/" className="Navigation-logo">
        <div className="Logo Navigation-logo-letter">
          <Logo />
        </div>
      </Link>
      <button className="NavigationBurger">
        <div className="NavigationBurger-inner">
          <span className="NavigationBurger-background"></span>
          <span className="NavigationBurger-label SmallText-2 --ttu">Menu</span>
        </div>
        <div className="NavigationBurger-circleWrap">
          <span className="NavigationBurger-circle"></span>
          <div className="NavigationBurger-lines">
            <span className="NavigationBurger-line"></span>
            <span className="NavigationBurger-line"></span>
          </div>
        </div>
      </button>
      {/* 전체 메뉴 */}
      <div className="Navigation">
        <div className="Navigation-background"></div>
        <Link href="/" className="Navigation-logo">
          <div className="Logo Navigation-logo-letter">
            <Logo />
          </div>
        </Link>
        <div className="Navigation-langButton">
          <a href="/" className="Navigation-langButton-item SmallText-1 --ttu --active">
            <span>FR</span>
          </a>
          <a href="/" className="Navigation-langButton-item SmallText-1 --ttu">
            <span>EN</span>
          </a>
          <div className="Navigation-langButton-bg"></div>
        </div>
        <div className="Navigation-top">
          <ul className="Navigation-list">
            <li className="Navigation-item">
              <Link href="/project">
                <span className="Navigation-itemArrow">
                  <Arrow size={14} />
                </span>
                <span className="Navigation-itemTitle Text-2">Projects</span>
              </Link>
            </li>
            <li className="Navigation-item">
              <Link href="/project">
                <span className="Navigation-itemArrow">
                  <Arrow size={14} />
                </span>
                <span className="Navigation-itemTitle Text-2">Expertise</span>
              </Link>
            </li>
            <li className="Navigation-item">
              <Link href="/project">
                <span className="Navigation-itemArrow">
                  <Arrow size={14} />
                </span>
                <span className="Navigation-itemTitle Text-2">Agency</span>
              </Link>
            </li>
            <li className="Navigation-item">
              <Link href="/project">
                <span className="Navigation-itemArrow">
                  <Arrow size={14} />
                </span>
                <span className="Navigation-itemTitle Text-2">Contact</span>
              </Link>
            </li>
          </ul>
          <div className="Navigation-contact">
            <div className="Navigation-contact-column --address">
              <a
                className="App-link Navigation-contact-address SmallText-1"
                href="https://www.google.com/maps/search//?api=1&amp;query=Akaru9quaiAndr%C3%A9Lassagne69001LyonFrance"
                target="_blank"
              >
                <div>
                  <p>Akaru</p>
                  <p>9 quai André Lassagne</p>
                  <p>69001 Lyon</p>
                  <p>France</p>
                </div>
              </a>
            </div>
            <div className="Navigation-contact-column --mail">
              <a
                className="App-link Navigation-contact-mail SmallText-1"
                href="mailto:contact@akaru.fr"
                target="_blank"
                rel="noreferrer"
              >
                contact@akaru.fr
              </a>
              <a
                className="App-link Navigation-contact-mail SmallText-1"
                href="mailto:job@akaru.fr"
                target="_blank"
                rel="noreferrer"
              >
                job@akaru.fr
              </a>
            </div>
            <div className="Navigation-contact-column --social">
              <a
                className="App-link Navigation-contact-social SmallText-1"
                href="https://www.instagram.com/akaru_agency/"
                title="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
              <a
                className="App-link Navigation-contact-social SmallText-1"
                href="https://www.instagram.com/akaru_agency/"
                title="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
              <a
                className="App-link Navigation-contact-social SmallText-1"
                href="https://www.instagram.com/akaru_agency/"
                title="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
              <a
                className="App-link Navigation-contact-social SmallText-1"
                href="https://www.instagram.com/akaru_agency/"
                title="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </div>
            <div className="Navigation-contact-column --phone">
              <a
                className="App-link Navigation-contact-phone SmallText-1"
                href="tel:0482338510"
                target="_blank"
                rel="noreferrer"
              >
                04 82 33 85 10
              </a>
            </div>
          </div>
        </div>
        <div className="Navigation-bottom">
          <div className="Navigation-videoContainer">
            <div className="Navigation-videoText">SOON</div>
            <figure className="Navigation-video">
              <video
                className="VideoLoop-video"
                muted
                playsInline
                disablePictureInPicture
                loop
                autoPlay
                preload="metadata"
                width="1280"
                height="720"
                crossOrigin="anonymous"
                src="https://stream.mux.com/pS5Jiva0000DnO00iBUYEr4LmCgLHS3Hd2yMxf55uhE8Ag/high.mp4"
              ></video>
            </figure>
          </div>
          <div className="Logo Navigation-footer-logo">
            <Logo />
          </div>
        </div>
      </div>
    </header>
  );
}
