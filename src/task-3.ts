class MyDictionary<K, V, D> {
  private dictionary: { key: K; value: V; description: D }[] = [];
  constructor() {}

  getValueByKey(key: K): [V, D] | null {
    const entry = this.dictionary.find((item) => item.key === key);
    return entry ? [entry.value, entry.description] : null;
  }

  setValueByKey(key: K, value: V, description: D): void {
    const index = this.dictionary.findIndex((entry) => entry.key === key);
    if (index !== -1) {
      this.dictionary[index].value = value;
    } else {
      this.dictionary.push({
        key,
        value,
        description,
      });
    }
  }
}

const dictionaryValuesString = new MyDictionary<string, string, string>();
dictionaryValuesString.setValueByKey("key1", "value1", "description1");
dictionaryValuesString.setValueByKey("key2", "value2", "description2");
dictionaryValuesString.setValueByKey("key3", "value3", "description3");
dictionaryValuesString.setValueByKey("key4", "value4", "description4");
const valueString = dictionaryValuesString.getValueByKey("key3");
console.log(valueString);

const dictionaryValuesNumber = new MyDictionary<number, string, boolean>();
dictionaryValuesNumber.setValueByKey(1, "value1", true);
dictionaryValuesNumber.setValueByKey(2, "value2", false);
dictionaryValuesNumber.setValueByKey(3, "value3", true);
const valueNumber = dictionaryValuesNumber.getValueByKey(3);
console.log(valueNumber);
