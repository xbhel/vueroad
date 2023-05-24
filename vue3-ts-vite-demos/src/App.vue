<script setup lang="ts">
  const datasource = '#ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    .split('')
    .map((symbol, k) => {
      const start = k * 30;
      const data = Array(30)
        .fill(null)
        .map((item, index) => {
          return {
            key: `${start + index}`,
            value: `列表项${start + index}`,
          };
        });
      return { symbol, data };
    });
</script>

<template>
  <div>
    <IndexList :datasource="datasource" />
  </div>
</template>
