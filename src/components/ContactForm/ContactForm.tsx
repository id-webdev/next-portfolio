import {
  ChangeEvent,
  FocusEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useSnackbar } from '../../hooks/useSnackbar';
import Snackbar from '../Snackbar/Snackbar';
import styles from './ContactForm.module.scss';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [messageDirty, setMessageDirty] = useState(false);
  const [nameError, setNameError] = useState('Name is required');
  const [emailError, setEmailError] = useState('Email is required');
  const [messageError, setMessageError] = useState('Message is required');
  const [formValid, setFormValid] = useState(false);
  const [isFormSending, setFormSending] = useState(false);
  const {
    type,
    message: snackbarMessage,
    open,
    showSnackbar,
    hideSnackbar,
  } = useSnackbar();
  const { executeRecaptcha } = useGoogleReCaptcha();

  useEffect(() => {
    if (nameError || emailError || messageError) {
      setFormValid(false);
      return;
    }
    setFormValid(true);
  }, [nameError, emailError, messageError]);

  function handleBlur(e: FocusEvent) {
    switch ((e.target as HTMLInputElement).name) {
      case 'name':
        setNameDirty(true);
        break;
      case 'email':
        setEmailDirty(true);
        break;
      case 'message':
        setMessageDirty(true);
        break;
    }
  }

  function handleName(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);

    if (e.target.value.trim().length === 0) {
      setNameError('Name is required');
      return;
    }

    setNameError('');
  }

  function handleEmail(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);

    const rfc2822 =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    if (!rfc2822.test(String(e.target.value).toLowerCase())) {
      setEmailError('Email is invalid');
      return;
    }

    if (e.target.value.trim().length === 0) {
      setEmailError('Email is required');
      return;
    }

    setEmailError('');
  }

  function handleMessage(e: ChangeEvent<HTMLTextAreaElement>) {
    setMessage(e.target.value);

    if (e.target.value.trim().length === 0) {
      setMessageError('Message is required');
      return;
    }

    setMessageError('');
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormSending(true);

    const token = await handleRecaptchaVerify();

    if (!token) {
      setFormSending(false);
      showSnackbar({
        type: 'error',
        message: 'Google reCaptcha is not ready',
      });
    }

    const data = {
      name,
      email,
      message,
      token,
    };

    await fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      setFormSending(false);
      setFormValid(false);

      if (res.status === 200) {
        setName('');
        setEmail('');
        setMessage('');
        showSnackbar({
          type: 'success',
          message: 'Your message has been sent!',
        });
        return;
      }

      showSnackbar({
        type: 'error',
        message: 'Something went wrong',
      });
    });
  }

  const handleRecaptchaVerify = useCallback(
    async function () {
      if (!executeRecaptcha) {
        return;
      }
      const token = await executeRecaptcha();
      return token;
    },
    [executeRecaptcha]
  );

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formField}>
          <div
            className={`${styles.formInput} ${
              nameDirty && nameError ? styles.formInputError : ''
            }`}
          >
            <input
              type="text"
              id="name"
              name="name"
              placeholder=" "
              onBlur={handleBlur}
              onChange={handleName}
              value={name}
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className={styles.formError}>
            {nameDirty && nameError && <p>{nameError}</p>}
          </div>
        </div>
        <div className={styles.formField}>
          <div
            className={`${styles.formInput} ${
              emailDirty && emailError ? styles.formInputError : ''
            }`}
          >
            <input
              type="email"
              id="email"
              name="email"
              placeholder=" "
              onBlur={handleBlur}
              onChange={handleEmail}
              value={email}
            />
            <label htmlFor="email">E-mail</label>
          </div>
          <div className={styles.formError}>
            {emailDirty && emailError && <p>{emailError}</p>}
          </div>
        </div>
        <div className={styles.formField}>
          <div
            className={`${styles.formInput} ${
              messageDirty && messageError ? styles.formInputError : ''
            }`}
          >
            <textarea
              rows={9}
              id="message"
              name="message"
              placeholder=" "
              onBlur={handleBlur}
              onChange={handleMessage}
              value={message}
            ></textarea>
            <label htmlFor="message">Message</label>
          </div>
          <div className={styles.formError}>
            {messageDirty && messageError && <p>{messageError}</p>}
          </div>
        </div>
        <div className={styles.formInput}>
          <button type="submit" disabled={!formValid || isFormSending}>
            Submit
          </button>
        </div>
      </form>

      {open &&
        createPortal(
          <Snackbar
            type={type}
            message={snackbarMessage}
            hideSnackbar={hideSnackbar}
          />,
          document.getElementsByTagName('main')[0]
        )}
    </>
  );
}
