import { Injectable } from '@angular/core';
import { Cart } from '../models/Cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../models/Food';
import { CartItem } from '../models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  constructor() { }

  addToCart(food: Food): void {
    let cartItem = this.cart.items.find(item => item.food.id === food.id)
    if (cartItem)
      return;

    this.cart.items.push(new CartItem(food))
    this.setCartToLocalStorage();
  }

  removeFromCart(foodId: string): void {
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId);
    this.setCartToLocalStorage();
  }

  changeQuantity(foodId: string, quantity: number) {
    let cartItem = this.cart.items.find(item => item.food.id === foodId)
    if (!cartItem)
      return;

    cartItem.quantity = quantity;
    cartItem.quantity * cartItem.food.price;
    this.setCartToLocalStorage();
  }

  clearCart() {
    this.cart = new Cart()
    this.setCartToLocalStorage();
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  private setCartToLocalStorage(): void {
    this.cart.totalPrice = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.price, 0)
    /*  will start to call this method based on number of items that you have inside your item for example if you have two items this function will be called two times to start from the first one the previous sum is zero so we set the initial value to zero so the previous sum for the first run is zero and we have the current item of type cart item so we make zero plus the price of the first item for example if it is 20 the result of this function will be 20 and the 20 will be the previous sum for the next item inside the card so assume we are on the next run previous sum is 20 and the current item has a 
    price of 40. previous sum plus 40 will be 60 okay so 60 will return from the radius and will be the total price we need to do the same thing with the total count*/

    this.cart.totalCount = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0)


    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);

  }


  private getCartFromLocalStorage(): Cart {
    const cartJson = localStorage.getItem('Cart');
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }
}
