export class ProductModel {
  constructor(
    public id: number = 0,
    public source = '',
    public title: string = '',
    public price: number = 0,
    public description: string = '',
    public category: string = '',
    public image: string = '',
    public rating: string = ''
  ) {}
}
