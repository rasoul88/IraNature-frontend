import { objectDateToString } from "../utils/functions";
export const createQuery = (filterItems, dataLimits) => {
  let query = "";
  for (let item in filterItems) {
    if (item === "name" && filterItems[item].length > 0)
      query += `name[regex]=${filterItems[item]}&`;

    if (item === "days") {
      if (filterItems[item][0] > dataLimits[item].min)
        query += `duration[gte]=${filterItems[item][0]}&`;
      if (filterItems[item][1] < dataLimits[item].max)
        query += `duration[lte]=${filterItems[item][1]}&`;
    }

    if (item === "price") {
      if (filterItems[item][0] > dataLimits[item].min)
        query += `price[gte]=${filterItems[item][0]}&`;
      if (filterItems[item][1] < dataLimits[item].max)
        query += `price[lte]=${filterItems[item][1]}&`;
    }

    if (
      item === "dateRange" &&
      filterItems[item].from &&
      filterItems[item].to
    ) {
      query += `startDate[gte]=${objectDateToString(filterItems[item].from)}&`;
      query += `startDate[lte]=${objectDateToString(filterItems[item].to)}&`;
    }

    if (item === "startLocation" && filterItems[item] && filterItems[item][0]) {
      query += `startLocation=${filterItems[item][0].name}&`;
    }

    if (
      item === "difficulty" &&
      (filterItems[item].length === 1 || filterItems[item].length === 2)
    ) {
      filterItems[item].forEach((el) => (query += `difficulty=${el}&`));
    }

    if (
      item === "maxParticipants" &&
      filterItems[item][0] < dataLimits[item].max
    ) {
      query += `maxGroupSize[lte]=${filterItems[item][0]}&`;
    }

    if (item === "page") {
      query += `page=${filterItems[item]}&`;
    }
  }

  query = query.slice(0, query.length - 1);

  return query;
};
