import mongoose from 'mongoose';
import { Schema, model, Document, Model, models } from 'mongoose';

// ドキュメントのインターフェースを定義
interface IIf extends Document {
  _id: Number;
  id: String;
  type: String;
  func_id: String;
  name: String;
  endpoint: String;
  status: String;
  doc: String;
  description: String;
  misc: String;
}

// スキーマを定義
const IfSchema: Schema = new Schema({
  _id: { type: Number },
  id: { type: String },
  type: { type: String },
  func_id: { type: String },
  name: { type: String },
  endpoint: { type: String },
  status: { type: String },
  doc: { type: String },
  description: { type: String },
  misc: { type: String },
});

interface IfModel extends Model<IIf> {}

// モデルを作成
// const Node = model<INode>('Node', NodeSchema)

// export default mongoose.model<INode, NodeModel>('User', NodeSchema);
export default models.If ? (models.If as IfModel) : mongoose.model<IIf, IfModel>('If', IfSchema);
