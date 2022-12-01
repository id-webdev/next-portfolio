import Image from 'next/image';
import CloseTag from './Tags/CloseTag';
import OpenTag from './Tags/OpenTag';

import waveSVG from '../public/wave.svg';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <code>
          <div className="code">
            <div className="code__row">
              <span className="code__line">1</span>
              <div className="code__text">
                <OpenTag tag="section" id="about" />
              </div>
            </div>

            <div className="code__row tab--2">
              <span className="code__line">2</span>
              <div className="code__text">
                <OpenTag tag="h2" />
                <span>About Me</span>
                <CloseTag tag="h2" />
              </div>
            </div>

            <div className="code__row tab--2">
              <span className="code__line">3</span>
              <div className="code__text">
                <OpenTag tag="p" />
              </div>
            </div>

            <div className="code__row tab--4">
              <span className="code__line">4</span>
              <div className="code__text">
                Since discovering my passion for Web Development in Summer 2020,
                my journey started with developing basic landing pages using
                HTML5, CSS3, Bootstrap, and jQuery library for JavaScript.
              </div>
            </div>

            <div className="code__row tab--2">
              <span className="code__line">5</span>
              <div className="code__text">
                <CloseTag tag="p" />
              </div>
            </div>

            <div className="code__row tab--2">
              <span className="code__line">6</span>
              <div className="code__text">
                <OpenTag tag="p" />
              </div>
            </div>

            <div className="code__row tab--4">
              <span className="code__line">7</span>
              <div className="code__text">
                Through freelancing, I had an opportunity to collaborate with
                teams of professional designers and back-end developers on
                multiple medium-scale projects built on the Laravel PHP
                framework. This experience exposed me to the nuances of
                maintaining and working on larger projects, such as using
                version control, following style guides, working as a team, and
                more.
              </div>
            </div>

            <div className="code__row tab--4">
              <span className="code__line">8</span>
              <div className="code__text">
                <OpenTag tag="br" />
              </div>
            </div>

            <div className="code__row tab--4">
              <span className="code__line">9</span>
              <div className="code__text">
                In those projects, I was responsible for turning Figma designs
                into responsive layouts, interfaces, and components with
                performance, reusability, and scalability in mind.
              </div>
            </div>

            <div className="code__row tab--2">
              <span className="code__line">10</span>
              <div className="code__text">
                <CloseTag tag="p" />
              </div>
            </div>

            <div className="code__row tab--2">
              <span className="code__line">11</span>
              <div className="code__text">
                <OpenTag tag="p" />
              </div>
            </div>

            <div className="code__row tab--4">
              <span className="code__line">12</span>
              <div className="code__text">
                It was only later that I felt I was ready to bring my
                development skills to the next level, and started to learn about
                front-end JavaScript frameworks. I have built some small
                projects using the most popular three - ReactJS, Vue.js, and
                Angular. I like them all and don&apos;t mind taking on a job
                that employs any one of them.
              </div>
            </div>

            <div className="code__row tab--4">
              <span className="code__line">13</span>
              <div className="code__text">
                <OpenTag tag="br" />
              </div>
            </div>

            <div className="code__row tab--4">
              <span className="code__line">14</span>
              <div className="code__text">
                Currently, I&apos;m working part-time on an NFT project that
                uses ReactJS.
              </div>
            </div>

            <div className="code__row tab--2">
              <span className="code__line">15</span>
              <div className="code__text">
                <CloseTag tag="p" />
              </div>
            </div>

            <div className="code__row">
              <span className="code__line">16</span>
              <div className="code__text">
                <CloseTag tag="section" />
              </div>
            </div>
          </div>
        </code>
      </div>

      <div className="section-transition">
        <Image src={waveSVG} alt="Section Transition Wave" fill />
      </div>
    </section>
  );
}
