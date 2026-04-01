import Link from 'next/link';

export default function NotFound() {
  return (
    <main style={{ 
      backgroundColor: '#0a0b10', 
      color: '#f0f0f0', 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      textAlign: 'center',
      padding: '20px'
    }}>
      <div className="glass" style={{ padding: '60px', maxWidth: '600px' }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '20px' }} className="gold-gradient">404</h1>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '30px' }}>Secure Page Not Found</h2>
        <p style={{ fontSize: '1.2rem', color: '#d0d0d0', marginBottom: '40px' }}>
          The path to your retirement security was not found. Please return to the LIFT Method overview to continue.
        </p>
        <Link href="/" className="btn-primary" style={{ textDecoration: 'none' }}>
          Return to Overview
        </Link>
      </div>
    </main>
  );
}
