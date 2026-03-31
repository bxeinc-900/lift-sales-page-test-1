"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* --- HERO SECTION --- */}
      <section className="hero" style={{ 
        position: 'relative', 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        paddingTop: '60px',
        overflow: 'hidden'
      }}>
        {/* Hero Background Image Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}>
          <Image 
            src="/images/hero.png" 
            alt="Wealth growth" 
            fill 
            style={{ objectFit: 'cover', opacity: 0.4 }}
            priority
          />
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at center, transparent 0%, var(--bg-primary) 90%)'
          }}></div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="badge reveal">THE WEALTH SECRETS OF THE ULTRA-RICH</div>
          <h1 className="reveal reveal-delay-1" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '30px', maxWidth: '900px' }}>
            How Smart Money Uses <span className="gold-gradient">The LIFT Method</span> Differently
          </h1>
          <p className="font-heading reveal reveal-delay-2" style={{ color: 'var(--accent-gold)', fontSize: '1.2rem', marginBottom: '40px', maxWidth: '700px' }}>
            Turn Your Retirement Savings Into a Predictable, Tax-Advantaged Cash Flow Engine.
          </p>
          <p className="reveal reveal-delay-3" style={{ maxWidth: '600px', fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '40px' }}>
            You built a massive nest egg, expecting to finally stop worrying. But as retirement approaches, a sickening feeling creeps in: <strong>You don't actually own all that money.</strong> You have a joint account with the IRS.
          </p>
          <div className="reveal reveal-delay-3">
            <a href="#schedule" className="btn-primary">Schedule Your Strategy Call</a>
            <p style={{ marginTop: '20px', fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>
              *Available for individuals with $250k+ in investable assets
            </p>
          </div>
        </div>
      </section>

      {/* --- THE TAX TORPEDO SECTION --- */}
      <section className="problem" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container">
          <div className="grid-2">
            <div className="reveal">
              <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>The IRS Has a <span style={{ color: 'var(--accent-orange)' }}>Target</span> on Your Nest Egg.</h2>
              <div style={{ marginBottom: '30px' }}>
                <p style={{ marginBottom: '20px' }}>With $37 trillion in national debt, do you honestly believe tax rates are going down? When you retire, your biggest deductions vanish. That is when the <strong>&quot;tax torpedo&quot;</strong> hits.</p>
                <p>Worse, you are entirely exposed to market crashes. A 20% market drop means you need a 25% gain just to get back to even. Every dollar you lose is a dollar that stops compounding forever.</p>
              </div>
              <div className="glass" style={{ padding: '24px', borderLeft: '4px solid var(--accent-orange)' }}>
                <p style={{ fontStyle: 'italic', color: 'var(--text-primary)' }}>
                  &quot;True retirement security isn&apos;t about how much you accumulate. It&apos;s about your <strong>net spendable cash flow.</strong>&quot;
                </p>
              </div>
            </div>
            <div className="reveal" style={{ position: 'relative', height: '450px', borderRadius: '30px', overflow: 'hidden' }}>
              <Image 
                src="/images/tax-trap.png" 
                alt="Tax Trap visualization" 
                fill 
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- THE LIFT METHOD SECTION --- */}
      <section id="solution">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="badge reveal">THE PLAYBOOK FLIP</div>
          <h2 className="reveal reveal-delay-1" style={{ fontSize: '3rem', marginBottom: '60px' }}>Engineering <span className="gold-gradient">Financial Infinity</span>.</h2>
          
          <div className="grid-3">
            <div className="glass reveal reveal-delay-1" style={{ padding: '40px', textAlign: 'left' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>🛡️</div>
              <h3 style={{ marginBottom: '15px' }}>The 0% Floor</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>If the market drops 20%, your return is zero. You never lose a dime of principal to a market crash. You stay flat during bad years so you can explode upward when things recover.</p>
            </div>
            <div className="glass reveal reveal-delay-2" style={{ padding: '40px', textAlign: 'left', border: '2px solid var(--accent-gold)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>⚡</div>
              <h3 style={{ marginBottom: '15px' }}>Double-Duty Dollars</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Instead of withdraws that kill compounding, borrow against your policy. Your full value continues to earn returns while that SAME capital is deployed elsewhere.</p>
            </div>
            <div className="glass reveal reveal-delay-3" style={{ padding: '40px', textAlign: 'left' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>💸</div>
              <h3 style={{ marginBottom: '15px' }}>Tax-Free Cash Flow</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Utilize strategic policy loans to access your wealth and generate spendable income without triggering massive tax bombs from the IRS.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- INFOGRAPHIC PREVIEW SECTION --- */}
      <section style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="grid-2">
            <div className="reveal" style={{ borderRadius: '30px', overflow: 'hidden', height: '500px', position: 'relative' }}>
               <Image 
                src="/images/double-duty.png" 
                alt="Double duty dollars" 
                fill 
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="reveal">
              <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>It&apos;s Not Insurance. It&apos;s <span className="gold-gradient">Infrastructure.</span></h2>
              <p style={{ marginBottom: '30px', color: 'var(--text-secondary)' }}>Traditional IULs are often over-insured and rigid. We flip the script. We minimize the death benefit and maximize your cash value, turning your policy into a highly efficient, private capital system.</p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  "No 'Miracles' needed to recover after crashes",
                  "Monte Carlo analysis using 30 years of market data",
                  "Guaranteed net-positive spendable income math",
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ color: 'var(--accent-gold)', marginRight: '12px', fontSize: '1.2rem' }}>✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- FORM SECTION --- */}
      <section id="schedule" style={{ paddingBottom: '140px' }}>
        <div className="container">
          <div className="glass reveal" style={{ maxWidth: '800px', margin: '0 auto', padding: '60px', textAlign: 'center', background: 'linear-gradient(rgba(20,22,30,0.8), rgba(10,11,16,0.9))' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Stop Playing <span style={{ color: '#ff4d4d' }}>Defense</span> With Your Money.</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '40px' }}>
              Schedule a 20-minute no-pressure roadmap call. We will line-by-line evaluate your current path vs what is possible with the LIFT method.
            </p>
            
            <form style={{ display: 'grid', gap: '15px', maxWidth: '500px', margin: '0 auto' }} onSubmit={(e) => e.preventDefault()}>
              <input 
                type="text" 
                placeholder="Full Name" 
                style={{ padding: '15px 20px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: '#fff', fontSize: '1rem' }}
              />
              <input 
                type="email" 
                placeholder="Work Email Address" 
                style={{ padding: '15px 20px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: '#fff', fontSize: '1rem' }}
              />
              <button className="btn-primary" style={{ width: '100%', marginTop: '10px' }}>Schedule My Roadmap Call</button>
            </form>
            
            <div style={{ marginTop: '30px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
               🕒 Next available slots: Today & Tomorrow
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer style={{ padding: '40px 0', borderTop: '1px solid var(--glass-border)', textAlign: 'center', opacity: 0.6, fontSize: '0.8rem' }}>
        <div className="container">
          <p style={{ marginBottom: '15px' }}>© 2026 THE LIFT METHOD. All Rights Reserved.</p>
          <p style={{ maxWidth: '800px', margin: '0 auto' }}>
            Disclaimer: The LIFT Method involves the use of Indexed Universal Life insurance. Past performance is not indicative of future results. No financial advice is given on this page; please consult with a qualified professional before making financial decisions.
          </p>
        </div>
      </footer>
    </main>
  );
}
