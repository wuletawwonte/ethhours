export default function ref(val: {}) {
  return new Proxy({ value: val }, {});
}
