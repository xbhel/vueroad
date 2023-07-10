<template>
  <a-upload
    v-model:file-list="fileList"
    name="file"
    action="http://127.0.0.1:8080/file/upload"
    :headers="headers"
    @change="handleChange"
  >
    <a-button>
      <upload-outlined></upload-outlined>
      Click to Upload
    </a-button>
  </a-upload>
</template>
<script lang="ts">
  import { message } from 'ant-design-vue';
  import { defineComponent, ref } from 'vue';
  import { UploadOutlined } from '@ant-design/icons-vue';
  import type { UploadChangeParam } from 'ant-design-vue';

  export default defineComponent({
    components: {
      UploadOutlined,
    },
    setup() {
      const handleChange = (info: UploadChangeParam) => {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      };

      const fileList = ref([]);
      return {
        fileList,
        headers: {
          authorization: 'authorization-text',
        },
        handleChange,
      };
    },
  });
</script>
