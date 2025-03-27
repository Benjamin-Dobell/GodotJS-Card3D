import { GArray, GDictionary, GDictionaryProxy } from 'godot';

const g_dict = new GDictionary<{ typed: string, now: number }>();
const dict_proxy = g_dict.proxy();

const b: GDictionaryProxy<{ typed: string, now: number }> = { ...dict_proxy };

dict_proxy.typed = 'thing';
dict_proxy.now = 2;

for (const [key, value] of Object.entries(dict_proxy)) {
  console.log(`Dictionary iterated  key: ${key}, value: ${value}`);
}

console.log(`dict_proxy.toString(): ${dict_proxy.toString()}`);

const g_arr = new GArray<number | string | GArray>();

g_arr.pushBack(1);
g_arr.pushBack('hi');
g_arr.pushBack('3');

const arr_proxy = g_arr.proxy();

console.log(JSON.stringify({
  length: arr_proxy.length,
  includesHi: arr_proxy.includes('hi'),
  includesBye: arr_proxy.includes('bye'),
  indexOfHi: arr_proxy.indexOf('hi'),
  indexOfBye: arr_proxy.indexOf('bye'),
  arr_proxy: arr_proxy,
}, null, 2));

const nested_arr = new GArray().proxy();

arr_proxy.pop();
arr_proxy.push('3 no  more');
arr_proxy.push(nested_arr, 5);

nested_arr.push(4);
nested_arr.push('four');
nested_arr.push(new GDictionary<{}>());

arr_proxy[1] = 'bye';

console.log(JSON.stringify({
  length: arr_proxy.length,
  includesHi: arr_proxy.includes('hi'),
  includesBye: arr_proxy.includes('bye'),
  indexOfHi: arr_proxy.indexOf('hi'),
  indexOfBye: arr_proxy.indexOf('bye'),
  arr_proxy: arr_proxy,
}, null, 2));

for (const entry of arr_proxy) {
  console.log(`Array iterated value: ${entry}`);
}

const regular_object = { ...dict_proxy };

console.log(JSON.stringify(regular_object));

console.log(`JSON.stringify([...g_arr]): ${JSON.stringify([...g_arr])}`);
console.log(`JSON.stringify([...g_arr.proxy()]): ${JSON.stringify([...g_arr.proxy()])}`);
