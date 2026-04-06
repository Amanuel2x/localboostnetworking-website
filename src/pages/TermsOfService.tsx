export default function TermsOfService() {
  return (
    <div style={{ background: '#030712', minHeight: '100vh', color: '#f0f0f5', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '100px 28px 80px' }}>
        <a href="/" style={{ fontSize: '.8rem', color: 'rgba(240,240,245,.4)', textDecoration: 'none', display: 'inline-block', marginBottom: '40px' }}>← Back to Home</a>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '8px', letterSpacing: '-.03em' }}>Terms of Service</h1>
        <p style={{ color: 'rgba(240,240,245,.3)', fontSize: '.8rem', marginBottom: '48px' }}>Last updated: March 2026</p>

        {[
          { h: 'Acceptance of Terms', p: 'By accessing or using the Local Boost Networking website or VERA platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.' },
          { h: 'Services', p: 'Local Boost Networking provides digital marketing services including Google Ads management, Meta Ads management, local SEO, CRM automation, pay-per-call systems, and the VERA AI marketing platform. Service details and scope are defined in individual client agreements.' },
          { h: 'VERA Platform', p: 'Access to the VERA platform is provided on a subscription basis. Your subscription includes the features described at the time of purchase. We reserve the right to update features with reasonable notice. Subscription fees are billed monthly and are non-refundable except where required by law.' },
          { h: '60-Day Results Guarantee', p: 'Our 60-day guarantee applies to clients who have signed a service agreement, provided all required account access, and maintained an adequate advertising budget as agreed. If qualifying conditions are not met within 60 days, we will continue working at no additional charge until they are. Specific terms are outlined in your client agreement.' },
          { h: 'User Responsibilities', p: 'You agree to provide accurate information, maintain the security of your account credentials, use our services only for lawful purposes, and not attempt to interfere with or disrupt our services or servers.' },
          { h: 'Intellectual Property', p: 'All content, features, and functionality of our website and the VERA platform are owned by Local Boost Networking LLC and are protected by applicable intellectual property laws. You may not copy, modify, or distribute our content without express written permission.' },
          { h: 'Limitation of Liability', p: 'To the maximum extent permitted by law, Local Boost Networking shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services, even if we have been advised of the possibility of such damages.' },
          { h: 'Termination', p: 'Either party may terminate services with 30 days written notice. We reserve the right to suspend or terminate access to VERA immediately for violation of these terms.' },
          { h: 'Governing Law', p: 'These terms are governed by the laws of the State of California. Any disputes shall be resolved in the courts of San Francisco County, California.' },
          { h: 'Contact', p: 'Questions about these Terms? Contact us at contact@localboostnetworking.com or (415) 906-4200.' },
        ].map(({ h, p }) => (
          <div key={h} style={{ marginBottom: '36px' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '10px', color: '#f0f0f5' }}>{h}</h2>
            <p style={{ color: 'rgba(240,240,245,.55)', lineHeight: 1.8, fontSize: '.92rem' }}>{p}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
