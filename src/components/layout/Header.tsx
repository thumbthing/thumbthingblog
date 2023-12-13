import Link from 'next/link';

export default function Header() {
  return (
    <Link href="/" replace>
      <header className="flex flex-col items-center justify-center border-2 h-32 text-4xl shadow-2xl bg-gray-100 dark:bg-slate-700">
        <h1 className="decoration-slate-900 dark:decoration-slate-50">thumbthing blog</h1>
      </header>
    </Link>
  );
}
