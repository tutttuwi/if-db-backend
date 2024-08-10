import { ObjectId } from 'mongoose';
export type User = {
  id: number;
  name?: string;
};

export type Node = {
  _id: ObjectId;
  id: String;
  code: String;
  subCode: String;
  label: String;
  name: String;
  parent: String;
  type: String;
  description: String;
};

export type Edge = {
  id: ObjectId;
  source: String;
  target: String;
  src_if_id: String;
  dst_if_id: String;
  crud: String;
  description: String;
  when: String;
  misc: String;
};

export type Ifs = {
  _id: ObjectId;
  id: String;
  type: String;
  name_id: String;
  name: String;
  endpoint: String;
  status: String;
  doc: String;
  description: String;
  misc: String;
};
