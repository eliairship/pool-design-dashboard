import Button from '@/components/Button';
import DashboardLayout from '@/layouts/DashboardLayout';
import Link from 'next/link';
import React from 'react';

const projects = [
  {
    name: 'Alpha Project',
    city: 'Miami, FL',
    labor: 'Non-Prevailing Wage',
    date: '04/20/2023',
  },
  {
    name: 'Beta Project',
    city: 'Miami, FL',
    labor: 'Non-Prevailing Wage',
    date: '04/20/2023',
  },
  {
    name: 'Gamma Project',
    city: 'Miami, FL',
    labor: 'Non-Prevailing Wage',
    date: '04/20/2023',
  },
  {
    name: 'Delta Project',
    city: 'Miami, FL',
    labor: 'Non-Prevailing Wage',
    date: '04/20/2023',
  },
  {
    name: 'Omega Project',
    city: 'Miami, FL',
    labor: 'Non-Prevailing Wage',
    date: '04/20/2023',
  },
];

type Props = {};

const Projects = (props: Props) => {
  return (
    <DashboardLayout>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">
              Projects
            </h1>
            {/* <p className="mt-2 text-sm text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, ex perferendis debitis minima autem dicta natus
              voluptatum nesciunt aut deleniti consequatur qui optio itaque
              reiciendis illo dolore? Atque, soluta minus!
            </p> */}
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <Link href="projects/new">
              <Button>Create new project</Button>
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
                      Project Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Labor
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Location
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
                        {project.labor}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {project.city}
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

export default Projects;
