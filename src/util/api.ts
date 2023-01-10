import axios, { AxiosError } from "axios";
import useSWR from "swr";


export  function useUser(cidade: string) {
	console.log(cidade)
	const { data, error, mutate } = useSWR(`https://api.hgbrasil.com/weather?format=json-cors&key=5c2945bc&city_name=${cidade?.length< 3?'Paracatu' : cidade === undefined?'Paracatu':cidade},MG`, async url => {

		const response = await fetch(url);
		const data = await response.json();

		return data;
	})

	return { data, isLoading: !error && !data, error, mutate };
}
