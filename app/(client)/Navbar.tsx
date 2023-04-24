'use client';

import { CheckIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const steps = [
    { name: 'Step 1', href: '#', status: 'complete' },
    { name: 'Step 2', href: '#', status: 'complete' },
    { name: 'Step 3', href: '#', status: 'complete' },
    {
      name: 'Step 4',
      href: '#',
      status: pathname === '/client' ? 'current' : 'complete',
    },
    {
      name: 'Step 5',
      href: '#',
      status: pathname === '/client/summary' ? 'current' : 'upcoming',
    },
  ];
  return (
    <nav aria-label="Progress" className="w-full mt-8">
      <ol role="list" className="flex items-center justify-center">
        {steps.map((step, stepIdx) => (
          <li
            key={step.name}
            className={clsx(
              stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : '',
              'relative'
            )}
          >
            {step.status === 'complete' ? (
              <>
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="h-0.5 w-full bg-indigo-600" />
                </div>
                <a
                  href="#"
                  className="relative flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-900"
                >
                  <CheckIcon
                    className="h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                  <span className="sr-only">{step.name}</span>
                </a>
              </>
            ) : step.status === 'current' ? (
              <>
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <a
                  href="#"
                  className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white"
                  aria-current="step"
                >
                  <span
                    className="h-2.5 w-2.5 rounded-full bg-indigo-600"
                    aria-hidden="true"
                  />
                  <span className="sr-only">{step.name}</span>
                </a>
              </>
            ) : (
              <>
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <a
                  href="#"
                  className="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400"
                >
                  <span
                    className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"
                    aria-hidden="true"
                  />
                  <span className="sr-only">{step.name}</span>
                </a>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
