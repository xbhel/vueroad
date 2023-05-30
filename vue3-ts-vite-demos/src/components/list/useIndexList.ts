export type NodeType<T> = {
  symbol: string;
  data: { key: string; value: T }[];
};
export type NodeItemType<T> = {
  key: string;
  value: T | string;
};

export default <T>(
  datasource: Ref<NodeType<T>[]>,
  listRef: Ref<{
    scrollTo(offset?: number): void;
    scrollToRow(rowIndex: number): void;
  }>
) => {
  const _symbols = ref<string[]>([]);
  const _datasource = ref([]) as Ref<NodeItemType<T>[]>;
  const _symbolStateMap = new Map<string, { size: number; position: number }>();

  updateInternalState();

  watch(datasource, () => {
    clearInternalState();
    updateInternalState();
  });

  function updateInternalState() {
    let position = 0;
    datasource.value.forEach(({ symbol, data }) => {
      const size = data.length;
      _symbolStateMap.set(symbol, { size, position });
      _symbols.value.push(symbol);
      _datasource.value.push(
        { key: symbol, value: symbol }, //将 symbol 作为记录添加至数据源
        ...data
      );
      position += size + 1;
    });
  }

  function scrollToSymbol(symbol: string) {
    const state = _symbolStateMap.get(symbol);
    if (state && listRef.value) {
      listRef.value.scrollToRow(state.position);
    }
  }

  function isSymbol(symbol: unknown) {
    return typeof symbol === 'string' && _symbolStateMap.has(symbol);
  }

  function clearInternalState() {
    _symbols.value = [];
    _datasource.value = [];
    _symbolStateMap.clear();
  }

  return { _datasource, _symbols, scrollToSymbol, isSymbol };
};
