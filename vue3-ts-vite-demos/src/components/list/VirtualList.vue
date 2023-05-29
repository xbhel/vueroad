<script setup lang="ts">
  defineExpose({
    scrollTo,
    scrollToRow,
  });

  const props = defineProps<{
    rowHeight: number; // 每行列表项的高度
    visibleCount: number; // 可视个数
    data: { key: string; value: unknown }[]; // 数据
  }>();

  const emit = defineEmits<{
    (e: 'clickRow', record: ArrayElementType<typeof props.data>): void;
  }>();

  const containerRef = ref<HTMLDivElement>();
  const state = reactive({
    offset: 0,
    start: 0,
    end: props.visibleCount,
  });

  const containerHeight = computed(() => {
    return props.rowHeight * props.visibleCount;
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

  const onClickRow = (record: ArrayElementType<typeof props.data>) => {
    emit('clickRow', record);
  };

  const onScroll = () => {
    if (containerRef.value) scrollTo();
  };

  function scrollToRow(rowIndex: number) {
    scrollTo(rowIndex * props.rowHeight);
  }

  function scrollTo(offset?: number) {
    window.requestAnimationFrame(() => {
      if (!containerRef.value) return;
      const { rowHeight, visibleCount } = props;
      // set
      if (offset !== undefined) {
        const maxScrollHeight = fillerHeight.value - rowHeight;
        const top = Math.min(offset, maxScrollHeight);
        // 滚动时的动画效果
        containerRef.value.style.scrollBehavior = 'smooth';
        containerRef.value.scrollTop = top;
      }
      // scroll
      const scrollTop = containerRef.value.scrollTop;
      state.start = Math.floor(scrollTop / rowHeight);
      state.end = state.start + visibleCount;
      state.offset = scrollTop - (scrollTop % rowHeight);
    });
  }
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
        v-for="record in buffer"
        :key="record.key"
        :style="{ height: rowHeight + 'px' }"
        @click="onClickRow(record)"
      >
        <slot :record="record">
          {{ record.value }}
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
    overflow: auto;
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
    padding: 0 0.5rem;
  }

  .scroll-list-item {
    color: #555;
    text-align: left;
    box-sizing: border-box;
    border-bottom: 1px solid #e8e8e8;
  }
</style>
