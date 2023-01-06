import { IProduct, ICartProducts, ICart } from './dataType';

class CartModel {
  products: ICartProducts;
  totalAmount: number;
  totalSum: number;

  constructor() {
    this.products = {
      "iPhone 9": {
        product: {
          "id":1,
          "title":"iPhone 9",
          "description":"An apple mobile which is nothing like apple",
          "price":549,
          "discountPercentage":12.96,
          "rating":4.69,
          "stock":94,
          "brand":"Apple",
          "category":"smartphones",
          "thumbnail":"https://i.dummyjson.com/data/products/1/thumbnail.jpg",
          "images":[
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
          ]
        },
        amount: 12,
      },
      "iPhone X": {
        product: {
          "id":2,
          "title":"iPhone X",
          "description":
            "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
          "price":899,
          "discountPercentage":17.94,
          "rating":4.44,
          "stock":34,
          "brand":"Apple",
          "category":"smartphones",
          "thumbnail":"https://i.dummyjson.com/data/products/2/thumbnail.jpg",
          "images":[
            "https://i.dummyjson.com/data/products/2/1.jpg",
            "https://i.dummyjson.com/data/products/2/2.jpg",
            "https://i.dummyjson.com/data/products/2/3.jpg",
            "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
          ]
        },
        amount: 15,
      },
      "Samsung Universe 9": {
        product: {
          "id":3,
          "title":"Samsung Universe 9",
          "description":"Samsung's new variant which goes beyond Galaxy to the Universe",
          "price":1249,
          "discountPercentage":15.46,
          "rating":4.09,
          "stock":36,
          "brand":"Samsung",
          "category":"smartphones",
          "thumbnail":"https://i.dummyjson.com/data/products/3/thumbnail.jpg",
          "images":[
            "https://i.dummyjson.com/data/products/3/1.jpg"
          ]
        },
        amount: 1,
      },
      "OPPOF19": {
        product: {
          "id":4,
          "title":"OPPOF19",
          "description":"OPPO F19 is officially announced on April 2021.",
          "price":280,
          "discountPercentage":17.91,
          "rating":4.3,
          "stock":123,
          "brand":"OPPO",
          "category":"smartphones",
          "thumbnail":"https://i.dummyjson.com/data/products/4/thumbnail.jpg",
          "images":[
            "https://i.dummyjson.com/data/products/4/1.jpg",
            "https://i.dummyjson.com/data/products/4/2.jpg",
            "https://i.dummyjson.com/data/products/4/3.jpg",
            "https://i.dummyjson.com/data/products/4/4.jpg",
            "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
          ]
        },
        amount: 2,
      },
    };
    this.totalAmount = 0;
    this.totalSum = 0;
  }

  public getCart(): ICart {
    return {
      products: this.products,
      totalAmount: this.totalAmount,
      totalSum: this.totalSum,
    };
  }

  public addProduct(product: IProduct): ICart {
    if (!this.products[product.title]) {
      this.products[product.title] = {
        product,
        amount: 1,
      };
    } else if (this.products[product.title]) {
      this.products[product.title].amount += 1;
    }

    this.totalAmount += 1;
    this.totalSum += product.price;

    return this.getCart();
  }

  public deleteProduct(product: IProduct): void {
    delete this.products?.[product.title];
  }

  public increaseProduct(product: IProduct): ICart {
    this.products[product.title].amount += 1;
    this.totalAmount += 1;
    this.totalSum += product.price;

    return this.getCart();
  }

  public decreaseProduct(product: IProduct): ICart {
    this.products[product.title].amount -= 1;
    this.totalAmount -= 1;
    this.totalSum -= product.price;

    return this.getCart();
  }
}

export const cartModel = new CartModel();