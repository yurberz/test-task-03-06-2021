import { TCountry } from './types'

export interface IDataProps {
    data: TCountry[],
}

export interface ICountriesProps {
    countries: TCountry[],
}

export interface ISearchProps {
    value: string,
    onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void,
}