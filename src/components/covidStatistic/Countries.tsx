import { ICountriesProps } from '../../helpers/interfaces'

const Countries = ({ countries }: ICountriesProps) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>№</th>
                    <th>Country</th>
                    <th>Total Confirmed</th>
                </tr>
            </thead>
            <tbody>
                {countries?.map((item, idx) => (
                    <tr key={item?.ID}>
                        <td>{idx + 1}</td>
                        <td>{item?.Country}</td>
                        <td>{item?.TotalConfirmed}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Countries;