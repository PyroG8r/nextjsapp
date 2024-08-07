import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

const imageScale = 0.55;

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
        
          
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal ${lusitana.className} antialiased first-letter:text-7xl first-letter:-mr-3`}>
            <strong>Welcome to Bemil.se</strong> learn all about Emil{' '}
            <a href="https://bemil.se" className="text-blue-500">
              in this website
            </a>
            , created by Emil
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/Sverigekarta-Landskap-1.png"
            width={578 * imageScale}
            height={1433 * imageScale}
            quality={100}
            className="hidden md:block"
            alt="Sverigkartan"
          />
        </div>
      </div>
    </main>
  );
}
