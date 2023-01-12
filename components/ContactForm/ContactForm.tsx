import { ChangeEvent, FocusEvent, FormEvent, useEffect, useState } from 'react';
import styles from './ContactForm.module.scss';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [messageDirty, setMessageDirty] = useState(false);
  const [nameError, setNameError] = useState('Name is required');
  const [emailError, setEmailError] = useState('Email is required');
  const [messageError, setMessageError] = useState('Message is required');
  const [formValid, setFormValid] = useState(false);
  const [isFormSending, setFormSending] = useState(false);

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

    const data = {
      name,
      email,
      message,
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
        setStatusMessage('Your message has been sent successfuly!');
        return;
      }

      setStatusMessage('Something went wrong. Please try again later.');
    });
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formControl}>
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
      {nameDirty && nameError && <p>{nameError}</p>}
      <div className={styles.formControl}>
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
      {emailDirty && emailError && <p>{emailError}</p>}
      <div className={styles.formControl}>
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
      {messageDirty && messageError && <p>{messageError}</p>}
      <div className={styles.formControl}>
        <button type="submit" disabled={!formValid || isFormSending}>
          Submit
        </button>
      </div>
      {statusMessage && <p>{statusMessage}</p>}
    </form>
  );
}
