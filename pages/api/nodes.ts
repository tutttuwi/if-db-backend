import type { NextApiRequest, NextApiResponse } from 'next';
import type { Node } from '../../interfaces';
import connectDB from '../db/ifdb';
import node from '../db/models/node';
// Fake users data
const users: Node[] = [];

export default async function handler(_req: NextApiRequest, res: NextApiResponse<Node[]>) {
  // Get data from your database
  await connectDB();
  const nodes: Node[] = await node.find();
  console.log(nodes);
  // const nodeRet = await node.create({
  //   _id: '1234564564',
  //   id: 'test',
  // });
  // console.log(nodeRet);
  res
    .setHeader('Access-Control-Allow-Origin', '*')
    .setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    .setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.status(200).json(nodes);
}
