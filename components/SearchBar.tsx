import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="hidden md:flex items-center gap-2 shadow-md px-2 py-2 rounded-md ring-1 ring-gray-200 w-80">
      <Search className="w-6 h-6 text-gray-500" />
      <input id="search" placeholder="Search" className="outline-0" />
    </div>
  );
}
