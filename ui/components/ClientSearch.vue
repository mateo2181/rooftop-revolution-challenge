<template>
    <div class="my-12 flex flex-col items-center gap-12 max-w-xl mx-auto">
        <h1 class="text-xl md:text-3xl font-semibold">
            {{ $t('searchTitle') }}
        </h1>
        <InputSearch class="w-full" @search="searchClientByCups" :placeholder="$t('searchPlaceholder')" />
        <div v-if="errorFetchingClient">
            {{ errorFetchingClient }}
        </div>
        <ClientInformation v-else-if="client" class="w-full" :client="client" :supplyPoint="supplyPoint" :offer="offer" />
    </div>
</template>
<script setup>
import { useClientStore } from '~/stores/client';

const store = useClientStore();
const client = computed(() => store.client);
const supplyPoint = computed(() => store.supplyPoint);
const offer = computed(() => store.offer);
const errorFetchingClient = computed(() => store.error);
const { getClientByCups } = store;

function searchClientByCups(cups) {
    getClientByCups(Number(cups));
}

</script>