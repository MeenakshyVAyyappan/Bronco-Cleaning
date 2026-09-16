export interface Product {
  id: string | number;
  title: string;
  price: number;
  qty?: number;
  sale?: boolean;
  category?: string;
  colors?: string[];
  size?: string[];
}

export interface CartItem {
  id: string | number;
  title: string;
  price: number;
  qty: number;
}

/* ---------------- Flash Products ---------------- */

export function getFlashProducts(products: Product[]): Product[] {
  return products.filter((item) => item.sale === true).slice(0, 8);
}

/* ---------------- Featured Products ---------------- */

export function getFeaturedProducts(products: Product[]): Product[] {
  return products.filter((item) => item.sale === true).slice(0, 12);
}

/* ---------------- Total Price ---------------- */

export function totalPrice(items: CartItem[]): number {
  return items.reduce((acc, item) => {
    return acc + item.price * item.qty;
  }, 0);
}

/* ---------------- Wishlist ---------------- */

export function isWishListed(
  productId: string | number,
  wishList: Product[]
): boolean {
  return wishList.findIndex((product) => product.id === productId) !== -1;
}

/* ---------------- Compare List ---------------- */

export function getCompareList(items: Product[]): Product[] {
  return items.slice(0, 4);
}

/* ---------------- Search Filter ---------------- */

export function searchFilter(row: Product, search: string): boolean {
  return row.title.toLowerCase().includes(search.toLowerCase()) || !search;
}

/* ---------------- Helper Functions ---------------- */

export function checkLengNull(data: any): boolean {
  if (data !== null) {
    return data.length > 0;
  }
  return false;
}

export function isEquals(a: string | null, b: string | null): boolean {
  if (a !== null && b !== null) {
    return a.toLowerCase() === b.toLowerCase();
  }
  return a === b;
}

export function minValueOne(qty: number): number {
  if (qty < 1) {
    return 1;
  }
  return qty;
}

/* ---------------- Filters ---------------- */

export function filterProductByCategory(
  product: Product,
  selected_category: string
): boolean {
  if (checkLengNull(selected_category)) {
    return product.category?.toLowerCase() === selected_category.toLowerCase();
  }
  return true;
}

export function filterProductByPrice(
  product: Product,
  price: number[]
): boolean {
  if (checkLengNull(price)) {
    return product.price >= price[0] && product.price <= price[1];
  }
  return true;
}

export function filterProductByColor(
  product: Product,
  color: string
): boolean {
  if (checkLengNull(color) && product.colors) {
    for (let i = 0; i < product.colors.length; i++) {
      if (product.colors[i].toLowerCase() === color.toLowerCase()) {
        return true;
      }
    }
    return false;
  }
  return true;
}

export function filterProductBySize(
  product: Product,
  size: string
): boolean {
  if (checkLengNull(size) && product.size) {
    for (let i = 0; i < product.size.length; i++) {
      if (product.size[i].toLowerCase() === size.toLowerCase()) {
        return true;
      }
    }
    return false;
  }
  return true;
}
