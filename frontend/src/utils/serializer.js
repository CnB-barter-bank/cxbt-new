/**
 * Утилиты для безопасной сериализации объектов с BigInt
 */

/**
 * Рекурсивно конвертирует BigInt в строки в объекте
 * @param {any} value - Любое значение
 * @returns {any} Значение с BigInt, преобразованными в строки
 */
export const convertBigIntToString = (value) => {
  if (typeof value === 'bigint') {
    return value.toString()
  }
  if (Array.isArray(value)) {
    return value.map(convertBigIntToString)
  }
  if (value !== null && typeof value === 'object') {
    const result = {}
    for (const key in value) {
      if (Object.prototype.hasOwnProperty.call(value, key)) {
        result[key] = convertBigIntToString(value[key])
      }
    }
    return result
  }
  return value
}

/**
 * Безопасно сериализует объект в JSON, конвертируя BigInt в строки
 * @param {any} obj - Любой объект для сериализации
 * @returns {string} JSON строка
 */
export const safeJSONStringify = (obj) => {
  return JSON.stringify(obj, (key, value) => {
    if (typeof value === 'bigint') {
      return value.toString()
    }
    return value
  })
}

/**
 * Безопасно логирует объект ошибки, конвертируя BigInt в строки
 * @param {Error} err - Объект ошибки
 * @returns {Object} Объект для логирования без BigInt
 */
export const safeLogError = (err) => {
  return {
    name: err.name,
    message: err.message,
    code: err.code,
    cause: err.cause ? safeLogError(err.cause) : undefined,
    data: err.data ? convertBigIntToString(err.data) : undefined
  }
}

/**
 * Безопасно логирует любой объект, конвертируя BigInt в строки
 * @param {any} obj - Любой объект для логирования
 * @returns {any} Объект с BigInt, преобразованными в строки
 */
export const safeLogObject = (obj) => {
  return convertBigIntToString(obj)
}

/**
 * Безопасно сериализует массив аргументов для console.log/error/warn
 * @param {Array} args - Массив аргументов
 * @returns {string} JSON строка
 */
export const safeStringifyArgs = (args) => {
  return safeJSONStringify(args)
}
