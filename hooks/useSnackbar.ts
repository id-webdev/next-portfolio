import { useState } from 'react';

export function useSnackbar() {
  const [type, setType] = useState<'success' | 'error'>('success');
  const [message, setMessage] = useState('');
  const [open, setOpen] = useState(false);

  function showSnackbar({
    type,
    message,
  }: {
    type: 'success' | 'error';
    message: string;
  }) {
    setType(type);
    setMessage(message);
    setOpen(true);
  }

  function hideSnackbar() {
    setOpen(false);
  }

  return { type, message, open, showSnackbar, hideSnackbar };
}
