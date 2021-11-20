export const bigIntToJSON = function (this: BigInt) {
  // eslint-disable-next-line babel/no-invalid-this
  return this.toString();
};

if (typeof BigInt.prototype.toJSON !== 'function') {
  // eslint-disable-next-line no-extend-native
  BigInt.prototype.toJSON = bigIntToJSON as any;
}
