
/**
 * Создаёт debounced версию функции
 * @param {Function} fn - Функция для debounce
 * @param {number} delay - Задержка в миллисекундах
 * @returns {Function} Debounced функция
 */
export function debounce( callback, delay ) {
  let timer;

  return( ...args ) => {
    return new Promise( ( resolve, reject ) => {
      clearTimeout(timer);
      timer = setTimeout( async () => {
          try {
            let output = await callback(...args);
            resolve( output );
          } catch ( err ) {
            reject( err );
          }
      }, delay );
    })

  }
}

export  function throttle(fn, interval) {
  const queue = [];
  let timer = null;

  function processNext() {
    if (queue.length === 0) {
      timer = null;
      return;
    }
    const { args, resolve, reject } = queue.shift();
    Promise.resolve()
      .then(() => {
        console.log('throttle', fn, Date.now())
        return fn(...args)
        })
      .then(resolve)
      .catch(reject)
      .finally(() => {
        timer = setTimeout(processNext, interval);
      });
  }

  return function (...args) {
    return new Promise((resolve, reject) => {
      queue.push({ args, resolve, reject });
      if (timer === null) {
        processNext();
      }
    });
  };
}