import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { Experience } from 'typing';
import { sanityClient } from '../../../lib/client';

const query = groq`*[_type == "experience"]`;

type Data = {
  experience: Experience[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const experience: Experience[] = await sanityClient.fetch(query);
  res.status(200).json({ experience });
}
