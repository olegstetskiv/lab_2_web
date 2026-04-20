import { useEffect, useState } from 'react';

export default function Footer() {
  const [info, setInfo] = useState('');

  useEffect(() => {
    const data = `ОС: ${navigator.platform} | Браузер: ${navigator.userAgent}`;
    localStorage.setItem('react_sys_info', data);
    setInfo(localStorage.getItem('react_sys_info'));
  }, []);

  return (
    <footer className="footer-main">
      <p>© 2026 Cтецьків Олег Андрійович.</p>
      <p className="sys-info-text">{info}</p>
    </footer>
  );
}