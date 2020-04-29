/* ========= Check variable's type ========== */
import { toString } from './type-conversion';

export function isArray(x: unknown) {
  return Array.isArray(x);
}
// ???
// export function isArray<T>(x: unknown): x is T[] {
//   return Array.isArray(x);
// }

export function isObject(val: unknown) {
  return typeof val === 'object' && val !== null;
}

export function isPlainObject(x: unknown) {
  return toString(x) === '[object Object]';
}
