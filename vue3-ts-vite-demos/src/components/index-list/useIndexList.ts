import VirtualList from '../VirtualList.vue';
export type VirtualListType = InstanceType<typeof VirtualList>;

export type DataType<T> = {
  symbol: string;
  data: { key: string; value: T }[];
};

export type InnerDataType<T> = {
  symbol: string;
  key: string;
  // 将 symbol 作为一条数据填入
  value: T | string;
};

export default <T>(
  datasource: Ref<DataType<T>[]>,
  listRef?: Ref<VirtualListType>
) => {
  const _symbols = ref<string[]>([]);
  const _datasource = ref([]) as Ref<InnerDataType<T>[]>;
  const _symbolStateMap = new Map<string, { size: number; position: number }>();

  updateInternalState();

  watch(datasource, () => {
    updateInternalState();
  });

  function updateInternalState() {
    let position = 0;
    datasource.value.forEach(({ symbol, data }) => {
      const size = data.length;
      _symbolStateMap.set(symbol, { size, position });
      _symbols.value.push(symbol);
      _datasource.value.push(
        { key: symbol, symbol, value: symbol }, // 填充一条 symbol
        ...data.map((item) => ({ ...item, symbol }))
      );
      position += size + 1;
    });
  }

  function scrollToSymbol(symbol: string) {
    const state = _symbolStateMap.get(symbol);
    if (state) {
      listRef?.value.scrollToRow(state.position);
    }
  }

  return { _datasource, _symbols, scrollToSymbol };
};
