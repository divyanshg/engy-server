export interface InputData {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  properties: {
    id: string;
    roomId: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    values: {
      id: string;
      propertyId: string;
      value: unknown;
      createdAt: string;
      updatedAt: string;
    }[];
  }[];
}

export interface OutputData {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  properties: {
    time: string;
    [propertyName: string]: string;
  }[];
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-indexed
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${day}-${month}-${year}, ${hours}:${minutes}`;
}

type property = { time: string; [propertyName: string]: string };

export function transformData(inputData: InputData): OutputData {
  const data = inputData;

  const transformedProperties = data.properties.map((property) => {
    const values: property[] = [];

    property.values.forEach((value) => {
      values.push({
        time: formatDate(value.createdAt),
        [property.name]: String(value.value),
      });
    });

    return values;
  });

  return {
    id: data.id,
    name: data.name,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
    properties: transformedProperties.flat(),
  };
}
