import { defineStore } from "pinia"
import type { Client } from "@/core/domain/models/Client";
import type { Offer } from "@/core/domain/models/Offer";
import type { SupplyPoint } from "@/core/domain/models/SupplyPoint";
import { ClientService } from "@/core/domain/services/ClientService";
import { clientRepositoryApi } from "@/core/infrastructure/repositories/ClientRepositoryApi";
import { supplyPointRepositoryApi } from "@/core/infrastructure/repositories/SupplyPointRepositoryApi";

export const useClientStore = defineStore('clients', () => {
  const client = ref<Client>();
  const supplyPoint = ref<SupplyPoint>();
  const offer = ref<Offer | null>();
  const error = ref<string>('');

  const { t } = useI18n();

  const clientRepository = clientRepositoryApi();
  const supplyPointRepository = supplyPointRepositoryApi();

  const clientService = new ClientService(clientRepository, supplyPointRepository);

  async function getClientByCups(cups: number) {
    error.value = '';
    try {
      const data = await clientService.getClientByCUPSAndPossibleOffer(cups);
      if (data.error) {
        error.value = t('searchClientNotFound');
      } else {
        client.value = data.client;
        supplyPoint.value = data.supplyPoint;
        offer.value = data.offer;
      }
    } catch (err) {
      error.value = t('searchApiError');
    }
  }
  return { error, client, supplyPoint, offer, getClientByCups }
})