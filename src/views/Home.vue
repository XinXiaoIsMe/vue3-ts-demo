<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })
</script>

<template>
<div>{{ t('app.home') }}</div>
</template>

<style>

</style>
