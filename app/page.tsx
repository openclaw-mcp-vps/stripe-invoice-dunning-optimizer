export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For SaaS Founders &amp; Finance Teams
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Optimize Failed Payment<br />
          <span className="text-[#58a6ff]">Recovery Sequences</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your Stripe account, analyze failed payment patterns, and get ML-powered retry timing and dunning message recommendations that recover more revenue — automatically.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Recovering Revenue — $19/mo
        </a>
        <p className="text-xs text-[#484f58] mt-3">Cancel anytime. No credit card required to try.</p>
      </section>

      {/* Stats row */}
      <section className="grid grid-cols-3 gap-4 mb-20 text-center">
        {[
          { value: '23%', label: 'Avg. revenue recovered' },
          { value: '4x', label: 'Faster retry optimization' },
          { value: '< 5min', label: 'Setup time' },
        ].map((s) => (
          <div key={s.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff]">{s.value}</div>
            <div className="text-xs text-[#8b949e] mt-1">{s.label}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] text-sm mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Stripe webhook integration',
              'ML-powered retry timing',
              'Dunning message templates',
              'Failed payment analytics',
              'Email recovery sequences',
              'Priority support',
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does it connect to Stripe?',
              a: 'You register a webhook endpoint in your Stripe dashboard. We listen for payment failure events and begin analyzing patterns immediately — no API keys stored.',
            },
            {
              q: 'What does the ML optimization actually do?',
              a: 'It analyzes historical retry success rates by time-of-day, day-of-week, and failure reason to recommend the highest-probability retry windows for each customer segment.',
            },
            {
              q: 'Can I cancel anytime?',
              a: 'Yes. Cancel from your billing portal at any time. Your data is retained for 30 days after cancellation so you can export it.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-sm text-[#8b949e]">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58]">
        &copy; {new Date().getFullYear()} Dunning Optimizer. All rights reserved.
      </footer>
    </main>
  )
}
