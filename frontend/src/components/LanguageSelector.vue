<script setup>
import { computed } from 'vue'
import { useI18nStore } from 'src/stores/i18n'

const i18nStore = useI18nStore()

const availableLanguages = computed(() => i18nStore.availableLanguages)
const currentLocale = computed(() => i18nStore.currentLocale)
const currentLanguage = computed(() => i18nStore.currentLanguage)

const changeLanguage = localeCode => {
  i18nStore.setLocale(localeCode)
}
</script>

<template>
  <QBtnDropdown
    flat
    dense
    noCaps
    :label="currentLanguage?.flag + ' ' + currentLanguage?.name"
    icon="language"
  >
    <QList>
      <QItem
        v-for="lang in availableLanguages"
        :key="lang.code"
        v-close-popup
        clickable
        :active="currentLocale === lang.code"
        @click="changeLanguage(lang.code)"
      >
        <QItemSection avatar>
          <span class="text-h6">{{ lang.flag }}</span>
        </QItemSection>
        <QItemSection>
          <QItemLabel>{{ lang.name }}</QItemLabel>
        </QItemSection>
        <QItemSection v-if="currentLocale === lang.code" side>
          <QIcon name="check" color="primary" />
        </QItemSection>
      </QItem>
    </QList>
  </QBtnDropdown>
</template>

<style scoped>
.q-item--active {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
