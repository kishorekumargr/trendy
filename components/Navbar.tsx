import Link from "next/link";
import Image from "next/image";
import SearchBar from "./SearchBar";
import { Bell, Home, ShoppingCartIcon } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center pb-4 border-gray-200 border-b w-full">
      <Link href="/" className="flex items-center">
        <Image src="/logo.png" alt="TrendFit" width={36} height={36} className="w-9 h-9" />
        <p className="hidden md:block font-medium text-lg tracking-wider">TRENDFIT</p>
      </Link>
      <div className="flex items-center gap-6">
        <SearchBar />
        <Bell />
        <ShoppingCartIcon />
        <Link href="/login">Sign In</Link>
      </div>
    </nav>
  );
}
