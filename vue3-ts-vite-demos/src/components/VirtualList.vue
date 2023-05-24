<script setup lang="ts">
  const props = defineProps<{
    rowHeight: number; // 每行列表项的高度
    visibleSize: number; // 可视个数
    data: { key: string; value: string }[]; // 数据
  }>();

  const containerRef = ref<HTMLDivElement>();
  const state = reactive({
    offset: 0,
    start: 0,
    end: props.visibleSize,
  });

  const containerHeight = computed(() => {
    return props.rowHeight * props.visibleSize;
  });

  const transformStyle = computed(() => {
    return { transform: `translate3d(0,${state.offset}px,0)` };
  });

  const fillerHeight = computed(() => {
    return props.data.length * props.rowHeight;
  });

  const buffer = computed(() => {
    return props.data.slice(state.start, state.end);
  });

  const onScroll = () => {
    if (containerRef.value) scrollTo();
  };

  const scrollTo = (offset?: number) => {
    window.requestAnimationFrame(() => {
      if (!containerRef.value) return;
      const { rowHeight, visibleSize } = props;
      // set
      if (offset !== undefined) {
        const maxScrollHeight = fillerHeight.value - rowHeight;
        const top = Math.min(offset, maxScrollHeight);
        containerRef.value.scrollTop = top;
      }
      // scroll
      const scrollTop = containerRef.value.scrollTop;
      state.start = Math.floor(scrollTop / rowHeight);
      state.end = state.start + visibleSize;
      state.offset = scrollTop - (scrollTop % rowHeight);
    });
  };

  const scrollToRow = (rowIndex: number) => {
    scrollTo(rowIndex * props.rowHeight);
  };

  defineExpose({
    scrollTo,
    scrollToRow,
  });
</script>

<template>
  <div
    ref="containerRef"
    class="scroll-list-container"
    :style="{ height: containerHeight + 'px' }"
    @scroll="onScroll"
  >
    <div class="scroll-list" :style="transformStyle">
      <div
        class="scroll-list-item"
        v-for="item in buffer"
        :key="item.key"
        :style="{ height: rowHeight + 'px' }"
      >
        <slot :item="item">
          {{ item.value }}
        </slot>
      </div>
    </div>
    <div
      class="scroll-list-fill"
      :style="{ height: fillerHeight + 'px' }"
    ></div>
  </div>
</template>

<style scoped>
  .scroll-list-container {
    height: 100%;
    overflow-y: auto;
    position: relative;
  }
  .scroll-list-fill {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    z-index: -1;
  }
  .scroll-list {
    left: 0;
    right: 0;
    top: 0;
    position: absolute;
    text-align: center;
  }

  .scroll-list-item {
    padding: 10px;
    color: #555;
    box-sizing: border-box;
    border-bottom: 1px solid #999;
  }
</style>
