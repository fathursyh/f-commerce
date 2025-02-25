import { actions } from 'astro:actions';
import { atom } from 'nanostores'
import type { CartType } from 'src/models/productType';

export const $cart = atom<CartType[]>([]);

export const fetchCart = async() => {
 const {data} =  await actions.cart.getCartData({});
 $cart.set(data!);
 return data;
}

export const insertProduct = async(item : CartType) => {
  const {error} = await actions.cart.insertCart(item);
  if(error) console.log(error);
};


