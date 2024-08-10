import type { NextApiRequest, NextApiResponse } from 'next';
import type { Edge } from '../../interfaces';
import connectDB from '../db/ifdb';
import edge from '../db/models/edge';
// Fake users data
const users: Edge[] = [];

export default async function handler(_req: NextApiRequest, res: NextApiResponse<Edge[]>) {
  // Get data from your database
  await connectDB();
  const edges: Edge[] = await edge.find();
  console.log(edges);
  // const nodeRet = await node.create({
  //   _id: '1234564564',
  //   id: 'test',
  // });
  // console.log(nodeRet);
  res
    .setHeader('Access-Control-Allow-Origin', '*')
    .setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    .setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.status(200).json(edges);
}
