import { TCountry } from './types'

export interface ICountriesProps {
    countries: TCountry[],
}

export interface ISearchProps {
    value: string,
    onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void,
}

export interface IModalProps {
    children: React.ReactNode,
    closeModal: () => void,
}