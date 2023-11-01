import Link from 'next/link';

export default function Header() {
  return (
    <Link href="/" replace>
      <header className="flex flex-col items-center justify-center border-2 h-32 text-4xl shadow-2xl">
        <h1>thumbthing blog</h1>
      </header>
    </Link>
  );
}
