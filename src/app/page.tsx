import Link from "next/link";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xqalvzoo"; // <-- paste yours
const REDIRECT_URL = "/thanks";

function Logo({ className = "" }: { className?: string }) {
  // R i v y o o  (last "o" is three concentric circles)
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <span className="font-extrabold tracking-tight text-3xl">Rivy</span>
      <span className="font-extrabold tracking-tight text-3xl">o</span>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        aria-label="Rivyoo logo concentric O"
      >
        <circle cx="14" cy="14" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="14" cy="14" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="14" cy="14" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* Header */}
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <Logo />
        <nav className="text-sm">
          <Link href="#how" className="mx-3 hover:opacity-80">How it works</Link>
          <Link href="#why" className="mx-3 hover:opacity-80">Why Rivyoo</Link>
          <Link href="#join" className="ml-3 rounded-full bg-slate-900 px-4 py-2 font-medium text-white hover:bg-slate-800">
            Join waitlist
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-6 py-14 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
            Buy with <span className="underline decoration-amber-400">trust</span>, not hype.
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Rivyoo shows reviews from people you actually know — friends, classmates, coworkers — right next to global reviews.
          </p>

          {/* Waitlist form */}
          <form
            className="mt-8 flex w-full max-w-lg flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            action={FORMSPREE_ENDPOINT}
            method="POST"
          >
            {/* Formspree redirect */}
            <input type="hidden" name="_redirect" value={REDIRECT_URL} />
            <label className="text-sm font-medium">Email</label>
            <input
              required
              type="email"
              name="email"
              placeholder="you@college.edu"
              className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-slate-900"
            />
            <label className="mt-2 text-sm font-medium">City / College / Company (optional)</label>
            <input
              type="text"
              name="context"
              placeholder="IIT Bombay • Koramangala • Infosys"
              className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:border-slate-900"
            />
            <button
              type="submit"
              className="mt-3 rounded-md bg-slate-900 px-4 py-2 font-semibold text-white hover:bg-slate-800"
            >
              Join the waitlist
            </button>
            <p className="text-xs text-slate-500">No spam. We’ll ping you when we launch in your area.</p>
          </form>
        </div>

        {/* Right column */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-amber-600">Social Proof, Reimagined</p>
          <h3 className="mt-2 text-2xl font-bold">See what your circle actually uses</h3>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li>• “Top rated by your friends” sections</li>
            <li>• Verified reviews via brand → customer invites</li>
            <li>• Private review circles for your campus or team</li>
          </ul>
        </div>
      </section>

      {/* Why */}
      <section id="why" className="mx-auto w-full max-w-6xl px-6 py-10">
        <h2 className="text-2xl font-bold">Why Rivyoo?</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {[
            { t: "Trust First", d: "Friends > strangers. See known voices first." },
            { t: "Faster Decisions", d: "Cut through noise with social-proof filters." },
            { t: "For Brands", d: "Run review campaigns to verified buyers." },
          ].map((x) => (
            <div key={x.t} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-semibold">{x.t}</h3>
              <p className="mt-2 text-slate-600">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How */}
      <section id="how" className="mx-auto w-full max-w-6xl px-6 py-10">
        <h2 className="text-2xl font-bold">How it works</h2>
        <ol className="mt-6 grid gap-5 md:grid-cols-3">
          {[
            { n: "1", d: "Sign up and (optionally) sync contacts." },
            { n: "2", d: "See global reviews + your circle’s opinions." },
            { n: "3", d: "Post your review; invite friends to unlock more." },
          ].map((s) => (
            <li key={s.n} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">{s.n}</span>
              <p className="mt-3 text-slate-700">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Footer */}
      <footer className="mx-auto w-full max-w-6xl px-6 py-10 text-sm text-slate-500">
        © {new Date().getFullYear()} Rivyoo • Built for trustworthy decisions
      </footer>
    </main>
  );
}

