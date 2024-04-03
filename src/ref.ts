export default function ref(val: {}) {
  const handler = {
    get(target: any, key: string) {
      if (key === 'value') {
        return target.value;
      }
      return target.value[key];
    },
    set(target: any, key: string, value: any) {
      if (key === 'value') {
        target.value = value;
      } else {
        target.value[key] = value;
      }
      return true;
    },
  };
  return new Proxy({ value: val }, handler);
}
