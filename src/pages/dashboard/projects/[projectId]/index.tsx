import DashboardLayout from '@/layouts/DashboardLayout';
import React from 'react';

type Props = {};

import { HomeIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import Button from '@/components/Button';

const pages = [
  { name: 'Projects', href: '/dashboard/projects', current: false },
  { name: 'Alpha Project', href: '/dashboard/projects/1', current: true },
];
function ProjectBreadcrumb() {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol
        role="list"
        className="flex space-x-4 rounded-md bg-white px-6 shadow"
      >
        <li className="flex">
          <div className="flex items-center">
            <Link
              href="/dashboard"
              className="text-gray-400 hover:text-gray-500"
            >
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name} className="flex">
            <div className="flex items-center">
              <svg
                className="h-full w-6 flex-shrink-0 text-gray-200"
                viewBox="0 0 24 44"
                preserveAspectRatio="none"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
              </svg>
              <Link
                href={page.href}
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                aria-current={page.current ? 'page' : undefined}
              >
                {page.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}

const projects = [
  {
    name: 'Estimate 1',
    area: '1,830',
    total: '$358,052.67',
    date: '04/20/2023',
  },
  {
    name: 'Estimate 2',
    area: '1,830',
    total: '$358,052.67',
    date: '04/20/2023',
  },
  {
    name: 'Estimate 3',
    area: '1,830',
    total: '$358,052.67',
    date: '04/20/2023',
  },
  {
    name: 'Estimate 4',
    area: '1,830',
    total: '$358,052.67',
    date: '04/20/2023',
  },
  {
    name: 'Estimate 5',
    area: '1,830',
    total: '$358,052.67',
    date: '04/20/2023',
  },
];

const ProjectDetail = (props: Props) => {
  return (
    <DashboardLayout>
      <ProjectBreadcrumb />
      <div className="px-4 sm:px-6 lg:px-8 my-4">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">
              Pool Estimates
            </h1>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <Link href="/dashboard/projects">
              <Button>Create new estimate</Button>
            </Link>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Total
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Area(SF)
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {projects.map((project) => (
                    <tr key={project.name}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                        {project.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {project.total}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {project.area}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {project.date}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-1 pr-1 text-right text-sm font-medium sm:pr-0">
                        <Link
                          href="/dashboard/projects/1"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          View<span className="sr-only">, {project.name}</span>
                        </Link>
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-1 pr-1 text-right text-sm font-medium sm:pr-0">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit<span className="sr-only">, {project.name}</span>
                        </a>
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-1 pr-1 text-right text-sm font-medium sm:pr-0">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Delete
                          <span className="sr-only">, {project.name}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProjectDetail;
