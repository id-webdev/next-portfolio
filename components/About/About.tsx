import { Waypoint } from 'react-waypoint';
import CloseTag from '../CloseTag/CloseTag';
import OpenTag from '../OpenTag/OpenTag';
import styles from './About.module.scss';

type AboutProps = {
  setCurrentSection: (arg0: string) => void;
};

export default function About({ setCurrentSection }: AboutProps) {
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
                My journey began in the Summer of 2020 when I discovered my
                passion for Web Development. I started by creating landing pages
                using HTML, CSS &#40;SCSS&#41;, JavaScript, jQuery, and
                Bootstrap.
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
                Through freelancing, I gained experience working on medium-scale
                projects in a team environment, which taught me the importance
                of client communication, understanding their requirements, and
                delivering projects on time.
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
                In those projects, I was responsible for converting Figma
                designs into responsive layouts, interfaces, and components
                while keeping performance, reusability, and scalability in mind.
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
                To further improve my development skills, I delved into learning
                JavaScript frameworks. React & Vue have allowed me to make web
                development more efficient and enjoyable, and I continue to
                expand my knowledge of them through daily practice.
              </div>
            </div>

            <div className={`${styles.codeRow} ${styles.tab2}`}>
              <span className={styles.codeLine}>13</span>
              <div className={styles.codeText}>
                <CloseTag tag="p" />
              </div>
            </div>

            <div className={styles.codeRow}>
              <span className={styles.codeLine}>14</span>
              <div className={styles.codeText}>
                <CloseTag tag="section" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Waypoint>
  );
}
