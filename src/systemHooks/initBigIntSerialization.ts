/* eslint-disable @babel/no-invalid-this */

const initBigIntSerialization = () => {
  // To serialze BigInt as string in json
  if (typeof (BigInt as any).prototype.toJSON !== 'function') {
    // eslint-disable-next-line no-extend-native
    (BigInt as any).prototype.toJSON = function(this: any) {
      return this.toString();
    } as any;
  }
};

export default initBigIntSerialization;
