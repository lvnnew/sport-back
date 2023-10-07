/* eslint-disable @babel/no-invalid-this */
import LRUCache from 'lru-cache';
import log from '../log';

const opt = {
  max: 500,
  ttl: 1000 * 60, // 1 min
};

const methodsCache = new LRUCache(opt);

function Cacheable() {
  return function(
    target: any,
    propertyKey: string,
    propertyDescriptor: PropertyDescriptor,
  ) {
    const oldMethod = propertyDescriptor.value;

    if (propertyDescriptor && propertyDescriptor.value) {
      const cacheHasher = (parameters: Array<any>) => JSON.stringify(parameters);

      /* use function instead of an arrow function to keep context of invocation */
      (propertyDescriptor.value as any) = function(...parameters: Array<any>) {
        const cacheParameters = cacheHasher(parameters);

        const cacheKey = target.constructor.name + '#' + propertyKey + '@' + cacheParameters;

        log.info(`cacheKey: ${cacheKey}`);

        // if (methodsCache.has(cacheKey)) {
        //   log.info(`cache hit with key: ${cacheKey}`);
        // }

        if (!methodsCache.has(cacheKey)) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          const response = (oldMethod.call(this, ...parameters));

          methodsCache.set(cacheKey, response);
        }

        return methodsCache.get(cacheKey);
      };
    }

    return propertyDescriptor;
  };
}

export default Cacheable;
