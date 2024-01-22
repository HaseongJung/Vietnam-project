type RestaurantSlugType = {
  id: string;
  countrySlug: string;
  typeSlug: string;
};

export const createRestaurantSlug = ({
  countrySlug,
  typeSlug,
  id,
}: RestaurantSlugType) => {
  return `/${countrySlug}/${typeSlug}/${id}`;
};
