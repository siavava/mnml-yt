export default function debounce(fun, timeout = 500) {
  // declare (but don't define) the run status.
  // note: this is a closure variable.
  let run = true;
  const debouncedFunction = (...args) => {
    /**
     * if run is true, then run the function.
     * then set run to false, with a timeout to flip it back to true
     * after the timeout has passed.
     */
    if (run) {
      fun.apply(this, args);
      run = false;
      setTimeout(() => { run = true; }, timeout);
    }
  };

  return debouncedFunction;
}
