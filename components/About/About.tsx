import { Waypoint } from 'react-waypoint';
import CloseTag from '../Tags/CloseTag';
import OpenTag from '../Tags/OpenTag';
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
                <OpenTag tag="section" id="about" />
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
        <div className={styles.background}>
          <svg
            viewBox="0 0 1000 400"
            width="1000"
            height="400"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <rect
              fill="var(--dark-blue-700)"
              x="0"
              y="0"
              width="1000"
              height="400"
            ></rect>
            <path
              fill="var(--dark-blue-400)"
              d="M0 356L55.5 357.2C111 358.3 222 360.7 333.2 349.8C444.3 339 555.7 315 666.8 306.2C778 297.3 889 303.7 944.5 306.8L1000 310L1000 0L944.5 0C889 0 778 0 666.8 0C555.7 0 444.3 0 333.2 0C222 0 111 0 55.5 0L0 0Z"
            ></path>
            <path
              fill="var(--dark-blue-500)"
              d="M0 333L55.5 328.2C111 323.3 222 313.7 333.2 308C444.3 302.3 555.7 300.7 666.8 291.3C778 282 889 265 944.5 256.5L1000 248L1000 0L944.5 0C889 0 778 0 666.8 0C555.7 0 444.3 0 333.2 0C222 0 111 0 55.5 0L0 0Z"
            ></path>
            <path
              fill="var(--dark-blue-600)"
              d="M0 215L55.5 218C111 221 222 227 333.2 222.7C444.3 218.3 555.7 203.7 666.8 195.7C778 187.7 889 186.3 944.5 185.7L1000 185L1000 0L944.5 0C889 0 778 0 666.8 0C555.7 0 444.3 0 333.2 0C222 0 111 0 55.5 0L0 0Z"
            ></path>
            <path
              fill="var(--dark-blue-700)"
              d="M0 191L55.5 197.7C111 204.3 222 217.7 333.2 210.5C444.3 203.3 555.7 175.7 666.8 169.8C778 164 889 180 944.5 188L1000 196L1000 0L944.5 0C889 0 778 0 666.8 0C555.7 0 444.3 0 333.2 0C222 0 111 0 55.5 0L0 0Z"
            ></path>
            <path
              fill="var(--dark-blue-800)"
              d="M0 130L55.5 127.8C111 125.7 222 121.3 333.2 125.5C444.3 129.7 555.7 142.3 666.8 152.8C778 163.3 889 171.7 944.5 175.8L1000 180L1000 0L944.5 0C889 0 778 0 666.8 0C555.7 0 444.3 0 333.2 0C222 0 111 0 55.5 0L0 0Z"
            ></path>
            <path
              fill="var(--dark-blue-900)"
              d="M0 64L55.5 75.8C111 87.7 222 111.3 333.2 111.2C444.3 111 555.7 87 666.8 86.3C778 85.7 889 108.3 944.5 119.7L1000 131L1000 0L944.5 0C889 0 778 0 666.8 0C555.7 0 444.3 0 333.2 0C222 0 111 0 55.5 0L0 0Z"
            ></path>
            <path
              fill="var(--black)"
              d="M0 86L55.5 78.2C111 70.3 222 54.7 333.2 50.3C444.3 46 555.7 53 666.8 54.5C778 56 889 52 944.5 50L1000 48L1000 0L944.5 0C889 0 778 0 666.8 0C555.7 0 444.3 0 333.2 0C222 0 111 0 55.5 0L0 0Z"
            ></path>
          </svg>
        </div>
      </section>
    </Waypoint>
  );
}
