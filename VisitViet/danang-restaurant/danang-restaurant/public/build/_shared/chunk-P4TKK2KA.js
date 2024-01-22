import {
  createHotContext
} from "/build/_shared/chunk-2IE37JYB.js";

// app/helpers/slug.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\helpers\\slug.ts"
  );
  import.meta.hot.lastModified = "1691072469000";
}
var createRestaurantSlug = ({
  countrySlug,
  typeSlug,
  id
}) => {
  return `/${countrySlug}/${typeSlug}/${id}`;
};

export {
  createRestaurantSlug
};
//# sourceMappingURL=/build/_shared/chunk-P4TKK2KA.js.map
