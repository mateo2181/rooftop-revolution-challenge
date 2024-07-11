<template>
    <div class="flex flex-col gap-6">
        <div v-if="client" class="flex flex-col gap-4">
            <h2 class="text-slate-800 text-lg uppercase">{{ $t('clientInformation') }}</h2>
            <div>
                <p> <strong>{{ $t('clientName') }}</strong> </p>
                <p>{{ client.full_name }}</p>
            </div>
            <div>
                <p> <strong>{{ $t('clientAddress') }}</strong> </p>
                <p>{{ client.address }}</p>
            </div>
            <div>
                <p> <strong>{{ $t('clientBuildingType') }}</strong> </p>
                <p>{{ client.building_type }}</p>
            </div>
        </div>
        <hr class="border-gray-300">
        <div v-if="supplyPoint" class="flex flex-col gap-4">
            <h2 class="text-slate-800 text-lg uppercase">{{ $t('supplyPoint') }}</h2>
            <div>
                <p> <strong>{{ $t('supplyPointProduct') }}</strong> </p>
                <p>{{ supplyPoint.tariff }}</p>
            </div>
            <div>
                <p> <strong>{{ $t('supplyPointMonthlyIncome') }}</strong> </p>
                <p>{{ supplyPoint.invoiced_amount }} &#8364; </p>
            </div>
        </div>
        <hr class="border-gray-300">
        <div class="flex flex-col gap-4">
            <h2 class="text-slate-800 text-lg uppercase font-semibold">{{ $t('offer') }}</h2>
            <div v-if="offer">
                <p>{{ $t('offerFound', { name: offer.name, discount: offer.discount }) }}</p>
            </div>
            <div v-else>
                {{ $t('offerNotFound') }}
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { SupplyPoint } from '@/core/domain/models/SupplyPoint';
import type { Client } from '@/core/domain/models/Client';
import type { Offer } from '@/core/domain/models/Offer';
import type { PropType } from 'vue';
import { defineProps } from 'vue';
// const {client} = defineProps<{client: Client}>();

const props = defineProps({
    client: Object as PropType<Client>,
    supplyPoint: Object as PropType<SupplyPoint>,
    offer: Object as PropType<Offer>
});

</script>