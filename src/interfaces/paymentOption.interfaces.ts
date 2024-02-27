
export interface ImageSchema extends Document{
    url: string,
    id: string
  }

export interface IPaymentOptions extends Document {
    name: string,
    files: [ImageSchema],
}
