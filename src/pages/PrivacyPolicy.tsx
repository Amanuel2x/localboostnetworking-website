export default function PrivacyPolicy() {
  return (
    <div style={{ background: '#030712', minHeight: '100vh', color: '#f0f0f5', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '100px 28px 80px' }}>
        <a href="/" style={{ fontSize: '.8rem', color: 'rgba(240,240,245,.4)', textDecoration: 'none', display: 'inline-block', marginBottom: '40px' }}>← Back to Home</a>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '8px', letterSpacing: '-.03em' }}>Privacy Policy</h1>
        <p style={{ color: 'rgba(240,240,245,.3)', fontSize: '.8rem', marginBottom: '48px' }}>Last updated: March 2026</p>

        {[
          { h: 'Information We Collect', p: 'We collect information you provide directly to us, such as your name, email address, phone number, and business information when you fill out a form, book a call, or sign up for VERA. We also collect usage data automatically when you visit our website, including IP address, browser type, pages viewed, and time spent.' },
          { h: 'How We Use Your Information', p: 'We use the information we collect to provide and improve our services, communicate with you about your account and our services, send marketing communications (with your consent), analyze usage patterns to improve our website, and comply with legal obligations.' },
          { h: 'Information Sharing', p: 'We do not sell your personal information. We may share your information with service providers who assist us in operating our business (such as CRM platforms, email services, and payment processors), and when required by law.' },
          { h: 'Data Retention', p: 'We retain your information for as long as necessary to provide our services and comply with legal obligations. You may request deletion of your data at any time by contacting us.' },
          { h: 'Cookies', p: 'We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.' },
          { h: 'Your Rights', p: 'You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time by clicking the unsubscribe link in any email we send.' },
          { h: 'Contact Us', p: 'If you have questions about this Privacy Policy, contact us at contact@localboostnetworking.com or call (415) 906-4200.' },
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
