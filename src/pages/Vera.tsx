import { useState } from 'react';
import { CountdownBanner } from '../components/ui/the-future-arrives-soon-cta';
import VeraFull from './VeraFull';

const ADMIN_PASSWORD = 'Amanuel@Lidia';
const SESSION_KEY = 'vera_admin_preview';

export default function Vera() {
  const [preview, setPreview] = useState(
    () => sessionStorage.getItem(SESSION_KEY) === '1'
  );

  function handleAdminUnlock() {
    const pw = window.prompt('Admin password');
    if (pw === ADMIN_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, '1');
      setPreview(true);
    } else if (pw !== null) {
      alert('Incorrect password');
    }
  }

  if (preview) return <VeraFull />;

  return <CountdownBanner onAdminClick={handleAdminUnlock} />;
}
