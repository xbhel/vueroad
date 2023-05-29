<script setup lang="ts">
  import useForm from './useForm';
  const { formItems, mockToNodes } = useForm();

  const mockReqData = '#ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    .split('')
    .map((symbol, k) => {
      const start = k * 30;
      return Array(30)
        .fill(null)
        .map((item, index) => {
          return {
            symbol,
            key: `${start + index}`,
            value: `${symbol} 测试商品列表项 ${start + index}`,
          };
        });
    })
    .flat();

  const datasource = ref(mockToNodes());
  const chekedValues = ref<string[]>([]);
</script>

<template>
  <div class="form-container">
    <a-row :gutter="24">
      <a-col :span="8" v-for="{ label, options } in formItems">
        <label style="line-height: 30px"> {{ label }} </label>
        <a-select style="width: 100%" :options="options" />
      </a-col>
    </a-row>

    <div class="selected">
      <label style="line-height: 30px"> 已选择列表</label>
      <div class="selected-content"> </div>
    </div>

    <a-auto-complete
      style="width: 100%; margin-bottom: 1rem"
      placeholder="请输入商品名称"
    />

    <IndexListPicker v-model="chekedValues" :data="datasource" />
  </div>
</template>

<style lang="less" scoped>
  .selected {
    padding: 25px 0;
    &-content {
      display: flex;
      min-height: 86px;
      background-color: #eaedf4;
      border-radius: 8px;
      padding: 1rem;
      flex-wrap: wrap;
    }
  }

  ::v-deep {
    .scroll-list {
      padding: 0;
    }
    .list-item-body {
      border-bottom: none !important;
    }
  }
</style>
