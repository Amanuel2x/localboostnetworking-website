import { useEffect, useRef } from 'react';

interface CalendlyEmbedProps {
  url: string;
  height?: number;
}

export function CalendlyEmbed({ url, height = 700 }: CalendlyEmbedProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fullUrl = `${url}?hide_gdpr_banner=1&background_color=05050a&text_color=f0f0f5&primary_color=8b5cf6`;

    const init = () => {
      if ((window as any).Calendly && ref.current) {
        (window as any).Calendly.initInlineWidget({
          url: fullUrl,
          parentElement: ref.current,
        });
      }
    };

    // If script already loaded, init immediately
    if ((window as any).Calendly) {
      init();
      return;
    }

    // Otherwise load script then init
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = init;
    document.head.appendChild(script);
  }, [url]);

  return (
    <div
      ref={ref}
      style={{ minWidth: '320px', height: `${height}px` }}
    />
  );
}
