<template>
  <div>
     <pre>{{ pending ? 'loading' : data }}</pre>
  </div>
</template>

<script setup lang="ts">
import authHeader from '~/services/authHeader';

const { data, pending, error } = useApiCall('/admin/payments', {
  headers: authHeader()
})
</script>

<style scoped></style>