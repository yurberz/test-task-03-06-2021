import { TCountry } from './types'

export interface ICountries {
    data: TCountry[],
}

export interface ISearch {
    value: string,
    onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void,
}

export interface IModal {
    children: React.ReactNode,
    closeModal: () => void,
}

export interface IContentModal {
    data: TCountry,
    closeModal: () => void
}

export interface IButton {
    className?: string,
    title: string,
    onClick: () => void,
}