<script setup lang="ts">
  import {
    ChangeEvent,
    CheckboxChangeEvent,
  } from 'ant-design-vue/es/_util/EventInterface';
  import { NodeType } from './useIndexList';

  const props = defineProps<{
    modelValue: string[]; // for v-model
    data: NodeType<unknown>[];
    limit?: number; // 限制 checkbox 选中的数量, 负数表示不可选, 0 表示不限制
  }>();

  const emit = defineEmits<{
    (e: 'input', value: string[]): void;
  }>();

  const checkedValues = ref(props.modelValue || []);

  const onChange = (e: CheckboxChangeEvent & ChangeEvent) => {
    const { value, checked } = e.target;
    if (checked) {
      value && checkedValues.value.push(value);
    } else {
      // remove
      const index = checkedValues.value.findIndex((v) => v === value);
      checkedValues.value.splice(index, 1);
    }
    emit('input', checkedValues.value);
  };

  const isChecked = (value: string) => {
    return checkedValues.value.includes(value);
  };

  const disabled = computed((value: string) => {
    const { limit } = props;
    return limit && checkedValues.value.length >= limit;
  });
</script>

<template>
  <IndexList :data="data">
    <template v-slot="{ record }">
      <div>
        <a-checkbox
          :value="record.key"
          @change="onChange"
          :checked="isChecked(record.key)"
          :disabled="!isChecked(record.key) && disabled"
          >{{ record.value }}</a-checkbox
        >
        <slot name="extra" :record="record" />
      </div>
    </template>
  </IndexList>
</template>
