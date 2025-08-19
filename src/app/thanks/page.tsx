import Link from "next/link";

export default function Thanks() {
  return (
    <main className="grid min-h-screen place-items-center bg-slate-50 px-6">
      <div className="max-w-md rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <h1 className="text-2xl font-bold">You’re on the list 🎉</h1>
        <p className="mt-2 text-slate-600">
          We’ll notify you when Rivyoo launches in your area.
        </p>
        <Link href="/" className="mt-6 inline-block rounded-md bg-slate-900 px-4 py-2 font-semibold text-white hover:bg-slate-800">
          Back to home
        </Link>
      </div>
    </main>
  );
}


