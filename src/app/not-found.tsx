import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist.',
}; 

export default function NotFound() {
  return (
    <main className="bg-background relative flex min-h-screen flex-col items-center justify-center overflow-hidden text-center">
      <div className="absolute -top-30 -left-30 h-80 w-80 rounded-full bg-blue-500/30 blur-3xl" />

      <div className="absolute -right-30 -bottom-30 h-80 w-80 rounded-full bg-red-500/30 blur-3xl" />

      <div className="relative z-10 space-y-4">
        <h1 className="bg-linear-to-r from-blue-500 to-red-600 bg-clip-text text-6xl font-black text-transparent">
          404
        </h1>

        <p className="text-muted-foreground text-lg">
          The page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="inline-flex rounded-md border border-white/10 bg-white/5 px-5 py-2.5 shadow-lg shadow-blue-500/20 backdrop-blur-sm transition hover:scale-105 hover:border-blue-400/40 hover:shadow-red-500/20"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
