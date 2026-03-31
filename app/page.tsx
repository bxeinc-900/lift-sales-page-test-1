"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main style={{ backgroundColor: '#0a0b10', color: '#f0f0f0', minHeight: '100vh', paddingBottom: '100px' }}>
      {/* Background Hero Overlay */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, opacity: 0.15, pointerEvents: 'none' }}>
        <Image src="/images/hero.png" alt="background" fill style={{ objectFit: 'cover' }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '850px', transform: 'translateY(60px)' }}>
        
        {/* --- 1. HEADLINE --- */}
        <header style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div className="badge">PRIVATE BRIEFING</div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', lineHeight: 1.1, marginBottom: '30px' }} className="gold-gradient">
            How Smart Money Uses Indexed Universal Life Differently
          </h1>
          <p style={{ fontSize: '1.5rem', color: 'var(--accent-gold)', fontWeight: 500 }}>
            (To Grow, Protect, and Keep Their Wealth)
          </p>
        </header>

        {/* --- 2. OPENING HOOK --- */}
        <section className="letter-body" style={{ fontSize: '1.25rem', lineHeight: 1.7, color: '#d0d0d0' }}>
          <p style={{ marginBottom: '25px' }}>You’ve worked hard. You’ve saved diligently. You’ve done exactly what the financial system told you to do.</p>
          <p style={{ marginBottom: '25px' }}>You built a massive nest egg, expecting that one day, you could finally stop worrying and just enjoy your life.</p>
          <p style={{ marginBottom: '40px' }}>But as retirement approaches, a quiet, sickening feeling starts to creep in. You look at your statements and realize something terrifying: <strong style={{ color: '#fff' }}>You might not actually be in control of your own money</strong>.</p>
          
          <div className="glass" style={{ padding: '30px', margin: '40px 0', borderLeft: '4px solid var(--accent-gold)' }}>
            <p style={{ margin: 0, color: '#fff', fontSize: '1.4rem' }}>
              What if the retirement rules you followed weren't written to protect your family, but to protect the system?
            </p>
          </div>

          {/* --- 3. PROBLEM AGITATION --- */}
          <h2 style={{ color: '#fff', fontSize: '2.2rem', marginTop: '60px', marginBottom: '30px' }}>Wall Street Sold You an Illusion.</h2>
          <p style={{ marginBottom: '25px' }}>For decades, Wall Street and Washington sold you a story. They told you to defer your taxes, pack your money into a 401(k), and ride the roller coaster of the stock market.</p>
          <p style={{ marginBottom: '25px' }}>But here is the brutal truth they left out: <strong style={{ color: '#ff4d4d' }}>You don&apos;t actually own all that money. You have a joint account with the IRS.</strong></p>
          
          <div style={{ position: 'relative', height: '400px', margin: '40px 0', borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--glass-border)' }}>
            <Image src="/images/tax-trap.png" alt="Tax Trap" fill style={{ objectFit: 'cover' }} />
          </div>

          <p style={{ marginBottom: '25px' }}>And the IRS gets to decide how much they take. With $37 trillion in national debt, do you honestly believe tax rates are going down? When you retire, your biggest deductions vanish. That is when the <strong>&quot;tax torpedo&quot;</strong> hits, draining the wealth you spent a lifetime building.</p>
          <p style={{ marginBottom: '40px' }}>Worse, you are entirely exposed to market crashes. When you are withdrawing income in retirement, a 20% market drop doesn&apos;t just mean your balance goes down. It means you need a 25% gain just to get back to even. Every dollar you lose to the market or pull out to survive is a dollar that stops compounding forever.</p>
          <p style={{ marginBottom: '40px', textAlign: 'center', fontSize: '1.5rem', color: '#fff' }}>
            <em>You spent your whole life building a massive engine, but no one showed you how to ensure a reliable, predictable flow of fuel.</em>
          </p>

          <div style={{ textAlign: 'center', margin: '60px 0' }}>
            <a href="#schedule" className="btn-primary">Schedule Your 20-Minute Strategy Call</a>
          </div>

          {/* --- 4. THE AHA MOMENT --- */}
          <h2 style={{ color: '#fff', fontSize: '2.2rem', marginTop: '60px', marginBottom: '30px' }}>You Need a New Playbook.</h2>
          <p style={{ marginBottom: '25px' }}>The ultra-wealthy don&apos;t retire the way most people do. They realized a long time ago that a big account balance on paper means absolutely nothing.</p>
          <div className="glass g-glow" style={{ padding: '40px', margin: '40px 0', textAlign: 'center', background: 'rgba(212, 175, 55, 0.05)' }}>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--accent-gold)' }}>True retirement security isn&apos;t about how much you accumulate. It&apos;s about your net spendable cash flow.</h3>
          </div>
          <p style={{ marginBottom: '25px' }}>The wealthy don&apos;t just leave their money sitting as a target for taxes and market crashes. They engineer their assets to produce predictable, tax-advantaged income, regardless of what the stock market is doing.</p>

          {/* --- 5. INTRODUCE THE SOLUTION --- */}
          <h2 style={{ color: '#fff', fontSize: '2.5rem', marginTop: '80px', marginBottom: '40px', textAlign: 'center' }}>Introducing <span className="gold-gradient">The LIFT Method</span></h2>
          <p style={{ marginBottom: '25px' }}>LIFT stands for <strong style={{ color: '#fff' }}>Leverage, Indexed Growth, Flexible, Tax-Advantaged Strategy</strong>.</p>
          <p style={{ marginBottom: '25px' }}>It uses specially designed Indexed Universal Life (IUL) not as a traditional insurance policy, but as the underlying infrastructure for your wealth.</p>
          <p style={{ marginBottom: '40px' }}>Traditional IULs are often over-insured, under-funded, and rigid. We flip the script. We minimize the death benefit and maximize your cash value, turning your policy into a highly efficient, private capital system.</p>

          {/* --- 6. BENEFITS STACK --- */}
          <div className="glass" style={{ padding: '50px', margin: '60px 0' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '30px', color: '#fff' }}>When you implement the LIFT Method, you completely change the math:</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '35px', display: 'flex', gap: '20px' }}>
                <span style={{ fontSize: '2rem' }}>🛡️</span>
                <div>
                  <strong style={{ display: 'block', color: 'var(--accent-gold)', fontSize: '1.3rem' }}>The 0% Floor</strong>
                  Your cash value is linked to a market index, but not IN the market. If the market drops 20%, your return is simply zero. <strong style={{ color: '#fff' }}>You never lose a dime of principal to a crash.</strong>
                </div>
              </li>
              <li style={{ marginBottom: '35px', display: 'flex', gap: '20px' }}>
                <span style={{ fontSize: '2rem' }}>💎</span>
                <div>
                  <strong style={{ display: 'block', color: 'var(--accent-gold)', fontSize: '1.3rem' }}>No Miracles Needed</strong>
                  Because you never lose ground during bad years, you don&apos;t need a miracle to recover. You just need one good year of gains to experience dramatic compounding.
                </div>
              </li>
              <li style={{ marginBottom: '35px', display: 'flex', gap: '20px' }}>
                <span style={{ fontSize: '2rem' }}>⚡</span>
                <div>
                  <strong style={{ display: 'block', color: 'var(--accent-gold)', fontSize: '1.3rem' }}>Double-Duty Dollars</strong>
                  Instead of withdrawing money and interrupting your growth, you <em>borrow</em> against your policy. Your full cash value continues to earn returns, while you deploy that borrowed capital elsewhere.
                </div>
              </li>
              <li style={{ marginBottom: '15px', display: 'flex', gap: '20px' }}>
                <span style={{ fontSize: '2rem' }}>💸</span>
                <div>
                  <strong style={{ display: 'block', color: 'var(--accent-gold)', fontSize: '1.3rem' }}>Tax-Advantaged Cash Flow</strong>
                  By utilizing policy loans, you can access your capital and generate spendable income without triggering massive tax bombs.
                </div>
              </li>
            </ul>
          </div>
          
          <div style={{ position: 'relative', height: '400px', margin: '40px 0', borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--glass-border)' }}>
            <Image src="/images/double-duty.png" alt="Double Duty Dollars" fill style={{ objectFit: 'cover' }} />
          </div>

          {/* --- 7. PROOF & CREDIBILITY --- */}
          <h2 style={{ color: '#fff', fontSize: '2.2rem', marginTop: '80px', marginBottom: '30px' }}>Proven, Stress-Tested Framework.</h2>
          <p style={{ marginBottom: '25px' }}>This isn&apos;t theoretical. Our strategies are built on custom-designed Monte Carlo analysis, utilizing 30 years of real historical market data.</p>
          <p style={{ marginBottom: '40px' }}>Over the last 25 years, our firm has successfully guided over 200 clients, with the average client effectively doubling their net spendable retirement income.</p>

          {/* --- 8. OBJECTION HANDLING --- */}
          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '40px', borderRadius: '15px', margin: '60px 0' }}>
            <p style={{ marginBottom: '20px' }}><em>You might be thinking: &quot;Isn&apos;t IUL just expensive life insurance?&quot;</em></p>
            <p style={{ marginBottom: '40px', borderLeft: '3px solid #555', paddingLeft: '20px' }}>If it&apos;s designed the traditional way? Yes. Most policies are built to maximize the death benefit. The LIFT method engineers the policy strictly for efficient cash accumulation and flexibility.</p>
            
            <p style={{ marginBottom: '20px' }}><em>&quot;What if the market stays flat for years?&quot;</em></p>
            <p style={{ margin: 0, borderLeft: '3px solid #555', paddingLeft: '20px' }}>That is exactly why the 0% floor is so powerful. In a traditional portfolio, a flat market destroys your retirement because you are withdrawing funds while the account stagnates. With LIFT, you preserve your capital so it explodes upward the moment the market recovers.</p>
          </div>

          {/* --- 9. THE OFFER & VALUE STACK --- */}
          <section id="schedule" className="glass" style={{ padding: '60px', margin: '100px 0', textAlign: 'center', background: 'linear-gradient(rgba(212, 175, 55, 0.05), transparent)' }}>
            <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '30px' }}>Get Your Personalized LIFT Roadmap.</h2>
            <p style={{ marginBottom: '40px' }}>When you schedule a call with us today, you aren&apos;t getting a sales pitch. You are getting a personalized roadmap:</p>
            
            <div className="grid-2" style={{ textAlign: 'left', marginBottom: '40px' }}>
               <div className="glass" style={{ padding: '20px' }}>
                  <p><strong>✓ 20-Minute Strategy Call</strong>: No pressure evaluation.</p>
               </div>
               <div className="glass" style={{ padding: '20px' }}>
                  <p><strong>✓ Custom Monte Carlo Analysis</strong>: Stress-test against 30 years of data.</p>
               </div>
               <div className="glass" style={{ padding: '20px' }}>
                  <p><strong>✓ Side-by-Side Comparison</strong>: Your current path vs. The LIFT Path.</p>
               </div>
            </div>

            {/* --- 10. URGENCY --- */}
            <div style={{ color: '#ffb300', fontSize: '1.1rem', marginBottom: '40px', fontStyle: 'italic' }}>
              ⚠️ Time is not on your side. The 2017 tax cuts expire in 2026. You cannot afford to wait until the tax torpedo hits.
            </div>

            {/* --- 11. FORM/CTA --- */}
            <form style={{ display: 'grid', gap: '15px', maxWidth: '500px', margin: '0 auto' }} onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Full Name" style={{ padding: '15px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: '#fff' }} />
              <input type="email" placeholder="Work Email" style={{ padding: '15px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: '#fff' }} />
              <button className="btn-primary" style={{ width: '100%' }}>Schedule My Strategy Call Today</button>
            </form>
            
            <p style={{ marginTop: '40px', fontSize: '2rem', color: '#fff', fontFamily: 'cursive' }}>
               The great deception ends the moment you take action.
            </p>
          </section>

        </section>

        <footer style={{ textAlign: 'center', opacity: 0.5, fontSize: '0.8rem', paddingTop: '100px' }}>
          <p>© 2026 THE LIFT METHOD. PRIVATE ASSET MANAGEMENT STRATEGIES.</p>
          <p style={{ marginTop: '10px' }}>Disclaimer: Indexed Universal Life is a financial product with specific rules and costs. Results may vary.</p>
        </footer>
      </div>
    </main>
  );
}
