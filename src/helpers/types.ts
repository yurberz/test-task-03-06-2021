export type TCountry = {
    ID: string,
    Country: string,
    TotalConfirmed: number,
    TotalDeaths: number,
    TotalRecovered: number,
}

export type TConfig = {
    key: string,
    direction: string,
}

export type TClassName = 'ascending' | 'descending'