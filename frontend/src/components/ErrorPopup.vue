<template>
  <q-dialog v-model="isVisible" persistent>
    <q-card class="error-popup-card">
      <q-card-section class="bg-negative text-white">
        <div class="row items-center">
          <q-icon name="error" size="2em" class="q-mr-md" />
          <div class="text-h6">Critical Error</div>
        </div>
      </q-card-section>

      <q-card-section class="q-pt-md">
        <div class="text-subtitle2 q-mb-sm">Error Details:</div>
        <div class="error-message">
          <pre>{{ formattedError }}</pre>
        </div>
      </q-card-section>

      <q-card-actions align="right" class="q-pa-md">
        <q-btn
          :label="copyButtonLabel"
          :icon="copyButtonIcon"
          color="primary"
          @click="copyError"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, computed } from 'vue'
import { copyToClipboard } from 'quasar'
import { safeJSONStringify } from '../utils/serializer'

const props = defineProps({
  error: {
    type: [Error, String, Object],
    required: true
  }
})

const isVisible = ref(true)
const copyButtonLabel = ref('Copy Error')
const copyButtonIcon = ref('content_copy')

const formattedError = computed(() => {
  if (typeof props.error === 'string') {
    return props.error
  }
  
  if (props.error instanceof Error) {
    return safeJSONStringify({
      name: props.error.name,
      message: props.error.message,
      code: props.error.code,
      cause: props.error.cause ? String(props.error.cause) : undefined,
      data: props.error.data,
      stack: props.error.stack
    })
  }
  
  // Для других объектов
  return safeJSONStringify(props.error)
})

const copyError = async () => {
  try {
    await copyToClipboard(formattedError.value)
    copyButtonLabel.value = 'Copied!'
    copyButtonIcon.value = 'check'
    
    setTimeout(() => {
      copyButtonLabel.value = 'Copy Error'
      copyButtonIcon.value = 'content_copy'
    }, 2000)
  } catch (err) {
    console.error('Failed to copy error:', err)
    copyButtonLabel.value = 'Failed'
    copyButtonIcon.value = 'close'
    
    setTimeout(() => {
      copyButtonLabel.value = 'Copy Error'
      copyButtonIcon.value = 'content_copy'
    }, 2000)
  }
}
</script>

<style scoped>
.error-popup-card {
  min-width: 500px;
  max-width: 90vw;
}

.error-message {
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 12px;
  max-height: 400px;
  overflow-y: auto;
}

.error-message pre {
  margin: 0;
  white-space: pre-wrap;
  word-wrap: break-word;
  font-family: 'Courier New', monospace;
  font-size: 12px;
  color: #333;
}
</style>
