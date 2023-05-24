<script setup lang="ts">
  import useIndexList, { DataType, VirtualListType } from './useIndexList';

  const props = defineProps<{
    datasource: DataType<string>[];
  }>();

  const virtualListRef = ref() as Ref<VirtualListType>;

  const { _symbols, _datasource, scrollToSymbol } = useIndexList(
    toRef(props, 'datasource'),
    virtualListRef
  );

  const onClickSymbol = (symbol: string) => {
    scrollToSymbol(symbol);
  };
</script>

<template>
  <div class="index-list-container">
    <VirtualList
      :data="_datasource"
      ref="virtualListRef"
      :row-height="40"
      :visible-size="15"
    />
    <div class="symbol-list">
      <div
        class="symbol-list-item"
        v-for="symbol in _symbols"
        :key="symbol"
        @click="onClickSymbol(symbol)"
      >
        {{ symbol }}
      </div>
    </div>
  </div>
</template>

<style scoped>
  .index-list-container {
    box-sizing: border-box;
    background-color: #fff;
    position: relative;
  }
  .symbol-list {
    position: absolute;
    top: 0;
    right: 20px;
  }

  .symbol-list-item {
    width: 20px;
    height: 20px;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    cursor: pointer;
    color: #999;
  }
  .symbol-list-item:hover,
  :focus {
    color: #fff;
    border-radius: 4px;
    background-color: #ccc;
  }
</style>
