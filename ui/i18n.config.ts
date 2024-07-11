export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'es',
    messages: {
      es: {
        searchTitle: 'Busca el cliente usando el CUPS',
        searchInputButton: 'Buscar',
        searchPlaceholder: 'Buscar...',
        searchClientNotFound: 'Cliente no encontrado. Intente con un CUPS diferente',
        searchApiError: 'Hubo un error buscando el cliente.',
        clientInformation: 'Información del cliente',
        clientName: 'Nombre',
        clientAddress: 'Dirección',
        clientBuildingType: 'Tipo de vivienda',
        supplyPoint: 'Punto de suministro',
        supplyPointProduct: 'Producto',
        supplyPointMonthlyIncome: 'Tarifa Mensual',
        offer: 'Oferta',
        offerFound: 'Podemos ofrecer el plan {name} con un descuento del {discount}%.',
        offerNotFound: 'No podemos hacer una oferta al cliente.'
      },
      en: {
        searchTitle: 'Search typing the CUPS',
        searchInputButton: 'Search',
        searchPlaceholder: 'Search...',
        searchClientNotFound: 'Client not found. Try with a different CUPS',
        searchApiError: 'Error searching the client',
        clientInformation: 'Client Information',
        clientName: 'Name',
        clientAddress: 'Address',
        clientBuildingType: 'Building Type',
        supplyPoint: 'Supply point',
        supplyPointProduct: 'Product',
        supplyPointMonthlyIncome: 'Monthly Amount',
        offer: 'Offer',
        offerFound: 'We can offer the {name} plan with a discount of {discount}%.',
        offerNotFound: "We can't send the client an offer."
      }
    }
  }))