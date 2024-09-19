import { executeQuery, ExecuteQueryOptions } from '@datocms/cda-client';
import { cache } from 'react';

export const cacheTag = `datocms${new Date().getTime()}`;

const dedupedPerformRequest = cache(async (serializedArgs: string) => {
  //@ts-expect-error
  return executeQuery(...JSON.parse(serializedArgs));
});

export const performRequest = <T>(
  query: string,
  options?: ExecuteQueryOptions,
) =>
  dedupedPerformRequest(
    JSON.stringify([
      query,
      {
        ...options,
        token: process.env.DATOCMS_API_TOKEN || '',
        environment: process.env.DATOCMS_ENVIRONMENT || '',
        requestInitOptions: {
          cache: 'no-cache',
        },
      } as ExecuteQueryOptions,
    ]),
  ) as Promise<T>;

export const fetchProjects = async (count?: number) =>
  await performRequest<{ allProjects: CMS.Project[] }>(`
  {
    allProjects(orderBy: _updatedAt_DESC first: ${count || 100}) {
      id
      title
      description
      technologies {
        name
      }
      url
      thumbnail {
        alt
        url
        width
        height
        blurUpThumb
      }
    }
  }
`);

export declare namespace CMS {
  type Image = {
    alt: string | null;
    url: string;
    width: number;
    height: number;
    blurUpThumb: string;
  };

  type Project = {
    id: string;
    title: string;
    description: string;
    technologies: { name: string }[];
    url: string;
    thumbnail: Image;
  };
}
