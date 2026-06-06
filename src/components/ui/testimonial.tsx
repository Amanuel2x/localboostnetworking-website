import * as React from 'react';
import { cn } from '@/lib/utils';

interface TestimonialProps extends React.HTMLAttributes<HTMLDivElement> {
  companyLogo?: string;
  quote: string;
  authorName: string;
  authorPosition: string;
  authorImage?: string;
  highlightedText?: string;
}

export const Testimonial = React.forwardRef<HTMLDivElement, TestimonialProps>(
  (
    {
      className,
      companyLogo,
      quote,
      authorName,
      authorPosition,
      authorImage,
      highlightedText,
      ...props
    },
    ref,
  ) => {
    const formattedQuote = highlightedText
      ? quote.replace(
          highlightedText,
          `<strong class="font-semibold">${highlightedText}</strong>`,
        )
      : quote;

    return (
      <div ref={ref} className={cn('py-10', className)} {...props}>
        <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col items-center">
            {companyLogo && (
              <div className="mb-7 relative h-12 w-32">
                <img src={companyLogo} alt="Local Boost Networking" className="h-full w-full object-contain" />
              </div>
            )}
            <p
              className="max-w-xl text-balance text-center text-xl sm:text-2xl"
              style={{ color: '#f0f0f5' }}
              dangerouslySetInnerHTML={{ __html: `"${formattedQuote}"` }}
            />
            <h5 className="mt-5 font-medium" style={{ color: 'rgba(240,240,245,.65)' }}>
              {authorName}
            </h5>
            <h5 className="mt-1.5 font-medium" style={{ color: 'rgba(240,240,245,.40)' }}>
              {authorPosition}
            </h5>
            {authorImage && (
              <div className="mt-5 relative rounded-full overflow-hidden" style={{ width: '4.55rem', height: '4.55rem', background: 'rgba(255,255,255,.06)' }}>
                <img src={authorImage} alt={authorName} className="h-full w-full object-cover" />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  },
);

Testimonial.displayName = 'Testimonial';
