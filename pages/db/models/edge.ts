import mongoose from 'mongoose';
import { Schema, model, Document, Model, models } from 'mongoose';

// ドキュメントのインターフェースを定義
interface IEdge extends Document {
  _id: Number;
  id: String;
  code: String;
  subCode: String;
  label: String;
  name: String;
  parent: String;
  type: String;
  description: String;
}

// スキーマを定義
const EdgeSchema: Schema = new Schema({
  _id: {
    type: Number,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  target: {
    type: String,
  },
  src_if_id: {
    type: String,
  },
  dst_if_id: {
    type: String,
  },
  crud: {
    type: String,
  },
  description: {
    type: String,
  },
  when: {
    type: String,
  },
  misc: {
    type: String,
  },
});

interface EdgeModel extends Model<IEdge> {}

// モデルを作成
// const Node = model<INode>('Node', NodeSchema)

// export default mongoose.model<INode, NodeModel>('User', NodeSchema);
export default models.Edge ? (models.Edge as EdgeModel) : mongoose.model<IEdge, EdgeModel>('Edge', EdgeSchema);
