import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 text-center text-sm border-t border-gray-200 dark:border-gray-700 bg-background dark:bg-background-dark text-textcolor dark:text-textcolor-dark">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
        <Link href="/terms" className="hover:underline">Terms of Use</Link>
        <span>Contact: team@mymemoirai.com</span>
      </div>
    </footer>
  );
}
