export type TCountry = {
    ID: string,
    Country: string,
    CountryCode?: string,
    Slug?: string,
    NewConfirmed?: number,
    TotalConfirmed: number,
    NewDeaths?: number,
    TotalDeaths: number,
    NewRecovered?: number,
    TotalRecovered: number,
    Date?: string,
    Premium?: object,
}