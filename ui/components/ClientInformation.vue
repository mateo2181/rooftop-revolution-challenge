<template>
    <div class="flex flex-col gap-6">
        <section v-if="client" class="flex flex-col gap-4" title="Client Information">
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
        </section>
        <hr class="border-gray-300">
        <section v-if="supplyPoint" class="flex flex-col gap-4" title="Supply Point Information">
            <h2 class="text-slate-800 text-lg uppercase">{{ $t('supplyPoint') }}</h2>
            <div>
                <p> <strong>{{ $t('supplyPointProduct') }}</strong> </p>
                <p>{{ supplyPoint.tariff }}</p>
            </div>
            <div>
                <p> <strong>{{ $t('supplyPointMonthlyIncome') }}</strong> </p>
                <p>{{ supplyPoint.invoiced_amount }} &#8364; </p>
            </div>
        </section>
        <hr class="border-gray-300">
        <section class="flex flex-col gap-4" title="Offer Information">
            <h2 class="text-slate-800 text-lg uppercase font-semibold">{{ $t('offer') }}</h2>
            <div v-if="offer">
                <p>{{ $t('offerFound', { name: offer.name, discount: offer.discount }) }}</p>
            </div>
            <div test-id="no-offer-found" v-else>
                {{ $t('offerNotFound') }}
            </div>
        </section>
    </div>
</template>
<script setup lang="ts">
import type { SupplyPoint } from '@/core/domain/models/SupplyPoint';
import type { Client } from '@/core/domain/models/Client';
import type { Offer } from '@/core/domain/models/Offer';
import type { PropType } from 'vue';

const props = defineProps({
    client: Object as PropType<Client>,
    supplyPoint: Object as PropType<SupplyPoint>,
    offer: Object as PropType<Offer>
});

</script>