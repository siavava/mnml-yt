/**
 * @param {Function} fun - The function to debounce
 * @param {number} delay - The delay in milliseconds
 * @returns {Function} - The debounced function
 */
export default function debounce(fun: Function, delay: number = 500): Function {
  // this timeout is closed into the returned function.
  // it acts as a way for subsequent calls to cancel
  // the previous call AND set up a timeout for the new call.
  let timeout: NodeJS.Timeout | undefined;

  // note: need to use ...args for variadic behavior to work.
  return (...args: any) => {
    // clearTimeout works even if timeout is null
    clearTimeout(timeout);

    // using apply to preserve "this" context
    // @ts-ignore
    timeout = setTimeout(() => fun.apply(this, args), delay);
  };
}
