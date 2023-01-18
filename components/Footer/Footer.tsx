import Tooltip from '../Tooltip/Tooltip';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.socials}>
          <Tooltip text="GitHub">
            <a
              href="https://github.com/id-webdev"
              rel="noreferrer"
              target="_blank"
            >
              <svg
                width="22"
                height="22"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 98 96"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                />
              </svg>
            </a>
          </Tooltip>
          <Tooltip text="GitLab">
            <a
              href="https://gitlab.com/id-webdev"
              rel="noreferrer"
              target="_blank"
            >
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.94,13.11L20.89,9.89C20.89,9.86 20.88,9.83 20.87,9.8L18.76,3.32C18.65,3 18.33,2.75 17.96,2.75C17.6,2.75 17.28,3 17.17,3.33L15.17,9.5H8.84L6.83,3.33C6.72,3 6.4,2.75 6.04,2.75H6.04C5.67,2.75 5.35,3 5.24,3.33L3.13,9.82C3.13,9.82 3.13,9.83 3.13,9.83L2.06,13.11C1.9,13.61 2.07,14.15 2.5,14.45L11.72,21.16C11.89,21.28 12.11,21.28 12.28,21.15L21.5,14.45C21.93,14.15 22.1,13.61 21.94,13.11M8.15,10.45L10.72,18.36L4.55,10.45M13.28,18.37L15.75,10.78L15.85,10.45H19.46L13.87,17.61M17.97,3.94L19.78,9.5H16.16M14.86,10.45L13.07,15.96L12,19.24L9.14,10.45M6.03,3.94L7.84,9.5H4.23M3.05,13.69C2.96,13.62 2.92,13.5 2.96,13.4L3.75,10.97L9.57,18.42M20.95,13.69L14.44,18.42L14.46,18.39L20.25,10.97L21.04,13.4C21.08,13.5 21.04,13.62 20.95,13.69" />
              </svg>
            </a>
          </Tooltip>
          <Tooltip text="LinkedIn">
            <a
              href="https://linkedin.com/in/id-webdev"
              rel="noreferrer"
              target="_blank"
            >
              <svg
                width="20"
                height="22"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>
            </a>
          </Tooltip>
        </div>
        <p className={styles.text}>Thanks for visiting!</p>
        <p className={styles.text}>© 2023 Ilya Dyma</p>
      </div>
      <svg
        className={styles.background}
        viewBox="0 0 1920 200"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
      >
        <rect
          fill="var(--dark-blue-900)"
          x="0"
          y="0"
          width="1920"
          height="200"
        ></rect>
        <path
          fill="var(--dark-blue-700)"
          d="M0 31L160 43C320 55 640 79 960 84.3C1280 89.7 1600 76.3 1760 69.7L1920 63L1920 201L1760 201C1600 201 1280 201 960 201C640 201 320 201 160 201L0 201Z"
          strokeLinecap="round"
          strokeLinejoin="miter"
        ></path>
      </svg>
    </footer>
  );
}
