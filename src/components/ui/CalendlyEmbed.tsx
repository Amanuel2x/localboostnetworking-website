import { useEffect } from 'react';

interface CalendlyEmbedProps {
  url: string;
  height?: number;
}

export function CalendlyEmbed({ url, height = 700 }: CalendlyEmbedProps) {
  useEffect(() => {
    const SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js';
    if (document.querySelector(`script[src="${SCRIPT_SRC}"]`)) return;
    const script = document.createElement('script');
    script.src = SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const fullUrl = `${url}?hide_gdpr_banner=1&background_color=05050a&text_color=f0f0f5&primary_color=1a4fc8`;

  return (
    <div
      className="calendly-inline-widget"
      data-url={fullUrl}
      style={{ minWidth: '320px', height: `${height}px` }}
    />
  );
}
