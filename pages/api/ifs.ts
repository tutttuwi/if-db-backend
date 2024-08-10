import type { NextApiRequest, NextApiResponse } from 'next';
import type { Ifs } from '../../interfaces';
import connectDB from '../db/ifdb';
import If from '../db/models/ifs';
// Fake users data
const users: Ifs[] = [];

export default async function handler(_req: NextApiRequest, res: NextApiResponse<Ifs[]>) {
  // Get data from your database
  await connectDB();
  const ifs: Ifs[] = await If.find();
  console.log(ifs);
  // const nodeRet = await node.create({
  //   _id: '1234564564',
  //   id: 'test',
  // });
  // console.log(nodeRet);
  res
    .setHeader('Access-Control-Allow-Origin', '*')
    .setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    .setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.status(200).json(ifs);
}
