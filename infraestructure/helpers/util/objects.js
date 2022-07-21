const {
  T,
  identity,
  compose,
  cond,
  fromPairs,
  toPairsIn,
  map,
  o,
  is,
  allPass,
  isNil,
  complement,
  filter,
  last,
  head,
  juxt,
  forEachObjIndexed,
  mapObjIndexed,
  isEmpty
} = require('ramda');

exports.isFunction = is(Function);
exports.isString = is(String);
exports.isObject = is(Object);
exports.isInt = is(Number);
exports.isEmpty = isEmpty;
const recursiveRemove = cond([
  [
    allPass([exports.isObject, complement(isNil), complement(exports.isFunction)]),
    value => exports.removeObjectUndefined(value)
  ],
  [T, identity]
]);

exports.removeObjectUndefined = compose(
  fromPairs,
  filter(o(value => value !== undefined, last)),
  map(juxt([head, o(recursiveRemove, last)])),
  toPairsIn
);
exports.iterateObject = forEachObjIndexed;
exports.mapObject = mapObjIndexed;

/*
 * Deep copy of source object into target object.
 * It does not overwrite properties.
 */
exports.assignObject = (target, source) => {
  if (target && exports.isObject(target) && source && exports.isObject(source)) {
    Object.keys(source).forEach(key => {
      if (!Object.prototype.hasOwnProperty.call(target, key) || target[key] === undefined) {
        target[key] = source[key];
      } else exports.assignObject(target[key], source[key]);
    });
  }
  return target;
};
