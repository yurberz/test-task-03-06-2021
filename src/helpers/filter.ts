import { TCountry } from './types'

const filter = (arr: TCountry[], value: string) => {
    const country = (str: string) => {
        return str.toLowerCase();
    };

    return arr?.filter((data) => {
        let search;

        search = country(data.Country);

        return search.includes(value.toLowerCase());
    });
};

export default filter;