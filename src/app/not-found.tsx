import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy flex items-center justify-center px-6">
      <div className="text-center">
        <div className="text-gold text-[12rem] font-bold leading-none mb-4 opacity-20 select-none"
          style={{ fontFamily: "var(--font-playfair)" }}>
          404
        </div>
        <h1 className="text-white text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
          Page Not Found
        </h1>
        <p className="text-white/60 mb-10 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist. It may have been moved or deleted.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            <Home size={16} /> Go Home
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
