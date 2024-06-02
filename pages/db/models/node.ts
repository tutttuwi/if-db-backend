import mongoose from 'mongoose';
import { Schema, model, Document, Model, models } from 'mongoose';

// ドキュメントのインターフェースを定義
interface INode extends Document {
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
const NodeSchema: Schema = new Schema({
  _id: {
    type: Number,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  code: {
    type: String,
  },
  subCode: {
    type: String,
  },
  label: {
    type: String,
  },
  name: {
    type: String,
  },
  parent: {
    type: String,
  },
  type: {
    type: String,
  },
  description: {
    type: String,
  },
});

interface NodeModel extends Model<INode> {}

// モデルを作成
// const Node = model<INode>('Node', NodeSchema)

// export default mongoose.model<INode, NodeModel>('User', NodeSchema);
export default models.Node ? (models.Node as NodeModel) : mongoose.model<INode, NodeModel>('Node', NodeSchema);
