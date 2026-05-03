import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stripe Invoice Dunning Optimizer — Recover More Revenue',
  description: 'Analyze failed Stripe payments and optimize retry timing and messaging to recover more revenue automatically.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="afb6210f-3291-442e-90ec-0fb77eb9102c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
