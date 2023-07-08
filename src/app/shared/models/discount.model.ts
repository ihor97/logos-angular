import { IDiscount } from '../interfaces/discount.interface';

export class Discount implements IDiscount{
    constructor(
                public title: string,
                public text: string,
                public image?: string,
                public id?: number,) {}
}
