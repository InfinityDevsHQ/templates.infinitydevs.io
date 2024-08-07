import { DataService } from "./data-service";
const API_URL = "https://restcountries.com/v3.1/all";
export async function getAllCountries(): Promise<CountriesData[]> {
  const data = await DataService.get<CountriesData[]>(API_URL);
  return data;
}
