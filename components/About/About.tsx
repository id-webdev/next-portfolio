import { Waypoint } from 'react-waypoint';
import CloseTag from '../CloseTag/CloseTag';
import OpenTag from '../OpenTag/OpenTag';
import styles from './About.module.scss';

type Props = {
  setCurrentSection: (arg0: string) => void;
};

export default function About({ setCurrentSection }: Props) {
  return (
    <Waypoint
      onEnter={() => setCurrentSection('about')}
      topOffset="45%"
      bottomOffset="45%"
    >
      <section className={styles.about} id="about">
        <div className="container">
          <div className="text-center">
            <h2 className="heading">#about</h2>
          </div>
          <code>
            <div className={styles.code}>
              <div className={styles.codeRow}>
                <span className={styles.codeLine}>1</span>
                <div className={styles.codeText}>
                  <OpenTag tag="section" />
                </div>
              </div>

              <div className={`${styles.codeRow} ${styles.tab2}`}>
                <span className={styles.codeLine}>2</span>
                <div className={styles.codeText}>
                  <OpenTag tag="h2" />
                  <span>About Me</span>
                  <CloseTag tag="h2" />
                </div>
              </div>

              <div className={`${styles.codeRow} ${styles.tab2}`}>
                <span className={styles.codeLine}>3</span>
                <div className={styles.codeText}>
                  <OpenTag tag="p" />
                </div>
              </div>

              <div className={`${styles.codeRow} ${styles.tab4}`}>
                <span className={styles.codeLine}>4</span>
                <div className={styles.codeText}>
                  Since discovering my passion for Web Development in Summer
                  2020, my journey started with developing basic landing pages
                  using HTML5, CSS3, Bootstrap, and jQuery library for
                  JavaScript.
                </div>
              </div>

              <div className={`${styles.codeRow} ${styles.tab2}`}>
                <span className={styles.codeLine}>5</span>
                <div className={styles.codeText}>
                  <CloseTag tag="p" />
                </div>
              </div>

              <div className={`${styles.codeRow} ${styles.tab2}`}>
                <span className={styles.codeLine}>6</span>
                <div className={styles.codeText}>
                  <OpenTag tag="p" />
                </div>
              </div>

              <div className={`${styles.codeRow} ${styles.tab4}`}>
                <span className={styles.codeLine}>7</span>
                <div className={styles.codeText}>
                  Through freelancing, I had an opportunity to collaborate with
                  teams of professional designers and back-end developers on
                  multiple medium-scale projects built on the Laravel PHP
                  framework. This experience exposed me to the nuances of
                  maintaining and working on larger projects, such as using
                  version control, following style guides, working as a team,
                  and more.
                </div>
              </div>

              <div className={`${styles.codeRow} ${styles.tab4}`}>
                <span className={styles.codeLine}>8</span>
                <div className={styles.codeText}>
                  <OpenTag tag="br" />
                </div>
              </div>

              <div className={`${styles.codeRow} ${styles.tab4}`}>
                <span className={styles.codeLine}>9</span>
                <div className={styles.codeText}>
                  In those projects, I was responsible for turning Figma designs
                  into responsive layouts, interfaces, and components with
                  performance, reusability, and scalability in mind.
                </div>
              </div>

              <div className={`${styles.codeRow} ${styles.tab2}`}>
                <span className={styles.codeLine}>10</span>
                <div className={styles.codeText}>
                  <CloseTag tag="p" />
                </div>
              </div>

              <div className={`${styles.codeRow} ${styles.tab2}`}>
                <span className={styles.codeLine}>11</span>
                <div className={styles.codeText}>
                  <OpenTag tag="p" />
                </div>
              </div>

              <div className={`${styles.codeRow} ${styles.tab4}`}>
                <span className={styles.codeLine}>12</span>
                <div className={styles.codeText}>
                  It was only later that I felt I was ready to bring my
                  development skills to the next level, and started to learn
                  about front-end JavaScript frameworks. I have built some small
                  projects using the most popular three - ReactJS, Vue.js, and
                  Angular. I like them all and don&apos;t mind taking on a job
                  that employs any one of them.
                </div>
              </div>

              <div className={`${styles.codeRow} ${styles.tab4}`}>
                <span className={styles.codeLine}>13</span>
                <div className={styles.codeText}>
                  <OpenTag tag="br" />
                </div>
              </div>

              <div className={`${styles.codeRow} ${styles.tab4}`}>
                <span className={styles.codeLine}>14</span>
                <div className={styles.codeText}>
                  Currently, I&apos;m working part-time on an NFT project that
                  uses ReactJS.
                </div>
              </div>

              <div className={`${styles.codeRow} ${styles.tab2}`}>
                <span className={styles.codeLine}>15</span>
                <div className={styles.codeText}>
                  <CloseTag tag="p" />
                </div>
              </div>

              <div className={styles.codeRow}>
                <span className={styles.codeLine}>16</span>
                <div className={styles.codeText}>
                  <CloseTag tag="section" />
                </div>
              </div>
            </div>
          </code>
        </div>
      </section>
    </Waypoint>
  );
}
