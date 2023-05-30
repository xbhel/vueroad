<script setup lang="ts">
  import VirtualList from './VirtualList.vue';
  import useIndexList, { NodeItemType, NodeType } from './useIndexList';

  const props = withDefaults(
    defineProps<{
      rowHeight?: number;
      visibleCount?: number;
      data: NodeType<unknown>[];
    }>(),
    {
      rowHeight: 40,
      visibleCount: 15,
      data: () => [],
    }
  );

  const emit = defineEmits<{
    (e: 'clickRow', record: NodeItemType<unknown>): void;
  }>();

  const virtualListRef = ref() as Ref<InstanceType<typeof VirtualList>>;
  const { _symbols, _datasource, scrollToSymbol, isSymbol } = useIndexList(
    toRef(props, 'data'),
    virtualListRef
  );

  const onClickSymbol = (symbol: string) => {
    scrollToSymbol(symbol);
  };

  const onClickRow = (record: NodeItemType<unknown>) => {
    if (typeof record.value === 'string' && isSymbol(record.value)) return;
    emit('clickRow', record);
  };
</script>

<template>
  <div class="index-list-container">
    <VirtualList
      ref="virtualListRef"
      class="virtual-list"
      :data="_datasource"
      :row-height="rowHeight"
      :visible-count="visibleCount"
      @click-row="onClickRow"
      v-slot="{ record }"
    >
      <div class="list-item-body">
        <slot
          v-if="isSymbol(record.value)"
          name="rowSymbol"
          :symbol="record.value"
        >
          <span class="list-item-body-symbol"> {{ record.value }}</span>
        </slot>
        <slot v-else :record="record">
          <span class="list-item-body-content"> {{ record.value }}</span>
        </slot>
      </div>
    </VirtualList>
    <div class="symbol-list">
      <div
        class="symbol-list-item"
        v-for="symbol in _symbols"
        :key="symbol"
        @click="onClickSymbol(symbol)"
      >
        <slot name="symbol">{{ symbol }}</slot>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .index-list-container {
    box-sizing: border-box;
    background-color: #fff;
    position: relative;
    font-size: 14px;

    // vue3.2 之后推荐使用 :deep 代替 ::v-deep
    .virtual-list :deep(.scroll-list-item) {
      border-bottom: none;
      padding-right: 1.5em;
    }

    .list-item-body {
      height: 100%;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #e8e8e8;
      &-symbol {
        color: #8f97aa;
      }
      &-content {
        color: rgba(0, 0, 0, 0.85);
      }
    }

    .symbol-list {
      position: absolute;
      top: 0;
      right: 20px;
      user-select: none;
      &-item {
        height: 20px;
        line-height: 20px;
        padding: 0 0.25rem;
        text-align: center;
        cursor: pointer;
        color: #999;

        &:hover,
        :focus {
          color: #fff;
          border-radius: 4px;
          background-color: #ccc;
        }
      }
    }
  }
</style>
