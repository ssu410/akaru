import Logo from "../Logo";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
export default function Footer() {

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);


    const timer = setTimeout(() => {
      const svgElements = document.querySelectorAll('.TheFooter-letters svg');
      
      if (svgElements.length > 0) {
       
        gsap.set(svgElements, {
          y: '38rem',
          skewY: '38deg',
          scale: 0.1,
        });

        ScrollTrigger.create({
          trigger: ".TheFooterBloc",
          start: "top-=10% 80%",
          onEnter: () => {
            gsap.to(svgElements, {
              y: 0,
              skewY: 0,
              scale: 1,
              duration: 2,
              ease: "power2.out",
              stagger: 0.1
            });
          }
        });
      }
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <footer className="TheFooterBloc">
      <div className="TheFooterBloc-wrap">
        <div className="TheFooter --white">
          <div className="TheFooter-container">
            <div className="InfosContact TheFooter-infosContact">
              <div className="InfosContact-col --address">
                <a
                  className="AppLink InfosContact-address AppSmallText-1 InfosContact-text"
                  href="https://www.google.com/maps/search//?api=1&query=Akaru9quaiAndr%C3%A9Lassagne69001LyonFrance"
                >
                  <p>Akaru</p>
                  <p>9 quai André Lassagne</p>
                  <p>France</p>
                  <p>France</p>
                </a>
              </div>
              <div className="InfosContact-col --mails InfosContact-text">
                <a
                  className="AppLink InfosContact-phone AppSmallText-1 --white"
                  href="mailto:contact@akaru.fr"
                  target="_blank"
                  rel="noreferrer"
                >
                  contact@akaru.fr
                </a>
                <a
                  className="AppLink InfosContact-phone AppSmallText-1 --white"
                  href="mailto:job@akaru.fr"
                  target="_blank"
                  rel="noreferrer"
                >
                  job@akaru.fr
                </a>
                <div className="InfosContact-phones InfosContact-text">
                  <a
                    className="AppLink InfosContact-phone AppSmallText-1 --white"
                    href="tel:0482338510"
                    target="_blank"
                    rel="noreferrer"
                  >
                    04 82 33 85 10
                  </a>
                </div>
              </div>
              <div className="InfosContact-col --socials InfosContact-text">
                <a
                  className="AppLink InfosContact-social AppSmallText-1 --tar --white"
                  href="https://www.instagram.com/akaru_agency/"
                  title="Instagram"
                  target="_blank"
                  rel="noreferrer"
                  linktype="externalLink"
                >
                  Instagram
                </a>
                <a
                  className="AppLink InfosContact-social AppSmallText-1 --tar --white"
                  href="https://www.linkedin.com/company/agence-akaru/"
                  title="linkedin"
                  target="_blank"
                  rel="noreferrer"
                  linktype="externalLink"
                >
                  linkedin
                </a>
                <a
                  className="AppLink InfosContact-social AppSmallText-1 --tar --white"
                  href="https://twitter.com/Akaru_agency/"
                  title="Twitter"
                  target="_blank"
                  rel="noreferrer"
                  linktype="externalLink"
                >
                  Twitter
                </a>
                <a
                  className="AppLink InfosContact-social AppSmallText-1 --tar --white"
                  href="https://www.facebook.com/akaru.agency/"
                  title="facebook"
                  target="_blank"
                  rel="noreferrer"
                  linktype="externalLink"
                >
                  facebook
                </a>
              </div>
            </div>
            <div className="TheFooter-bottom">
              <div className="Letters --white TheFooter-letters">
              <Logo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
