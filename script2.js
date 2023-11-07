const data = {
  id: 'b34d3051-ab8b-42ce-b7a6-6f904d6ddf90',
  collectionProperties: [
    {
      id: '1c00c396-9888-42cd-b651-8b0aa5562412',
      name: 'ali',
      nftId: '5e76f023-12c6-4755-81c5-3e1c276ca00a',
      collectionId: 'b34d3051-ab8b-42ce-b7a6-6f904d6ddf90',
      quantityCount: 1,
      insertedDate: '2023-10-31T09:51:36.851Z',
      updatedDate: '2023-10-31T09:51:36.851Z',
      propertyValues: [
        {
          id: '7373d6b9-cafc-4f41-9e2c-7d8240d15662',
          nftPropertyValueId: '1c00c396-9888-42cd-b651-8b0aa5562412',
          quantity: 1,
          value: 'ali',
          insertedDate: '2023-10-31T09:51:38.940Z',
          updatedDate: '2023-10-31T09:51:38.940Z',
        },
        {
          id: '746519e2-f712-492f-b818-49854dfe815b',
          nftPropertyValueId: '1c00c396-9888-42cd-b651-8b0aa5562412',
          quantity: 1,
          value: 'ali',
          insertedDate: '2023-10-31T09:51:38.947Z',
          updatedDate: '2023-10-31T09:51:38.947Z',
        },
        {
          id: '7373d6b9-cafc-4f41-9e2c-7d8240d15662',
          nftPropertyValueId: '1c00c396-9888-42cd-b651-67890',
          quantity: 1,
          value: 'ali',
          insertedDate: '2023-10-31T09:51:38.940Z',
          updatedDate: '2023-10-31T09:51:38.940Z',
        },
      ],
    },
  ],
};

const reducedPropertyValues = (data) => {
  const reducedData = { ...data }; // Creating a copy to avoid modifying the original object

  reducedData.collectionProperties = reducedData.collectionProperties.map(
    (property) => {
      const valuesMatch = property.propertyValues.every((val, index, arr) => {
        const nextVal = arr[index + 1];
        return (
          nextVal &&
          val.value === nextVal.value &&
          val.nftPropertyValueId === nextVal.nftPropertyValueId
        );
      });

      if (
        valuesMatch &&
        property.propertyValues.every(
          (val) => val.nftPropertyValueId === property.id,
        )
      ) {
        const totalQuantity = property.propertyValues.reduce(
          (acc, val) => acc + val.quantity,
          0,
        );

        property.propertyValues = [
          {
            ...property.propertyValues[0], // Take any element from propertyValues array as the reduced object
            quantity: totalQuantity,
          },
        ];
      }

      return property;
    },
  );

  return reducedData;
};

const result = reducedPropertyValues(data);
console.log(result.collectionProperties[0].propertyValues);
