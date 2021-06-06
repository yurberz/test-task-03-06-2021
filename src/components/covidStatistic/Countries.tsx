import { useState } from 'react'

import { ICountriesProps } from '../../helpers/interfaces'
import { TCountry } from '../../helpers/types';
import useSort from '../../hooks/useSort'
import Modal from './Modal';
import ContentModal from './ContentModal';

const initialState = {
    ID: '',
    Country: '',
    TotalConfirmed: 0,
    TotalDeaths: 0,
    TotalRecovered: 0,
}

const Countries = ({ countries }: ICountriesProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [country, setCountry] = useState<TCountry>(initialState)


    const { items, sortConfig, requestSort } = useSort(countries)

    const getClassNamesFor = (name: string) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : '';
    };

    const handleClick = (evt: React.MouseEvent<HTMLTableRowElement>) => {
        const id = (evt.currentTarget as HTMLTableRowElement).id;

        setCountry(items.find(item => item.ID === id));

        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <table className='countries-table'>
                <thead>
                    <tr>
                        <th>№</th>
                        <th><button
                            type="button"
                            onClick={() => requestSort('Country')}
                            className={getClassNamesFor('Country')}
                        >
                            Country
                        </button>
                        </th>
                        <th>
                            <button
                                type="button"
                                onClick={() => requestSort('TotalConfirmed')}
                                className={getClassNamesFor('TotalConfirmed')}
                            >
                                Total Confirmed
                        </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {items?.map((item, idx) => (
                        <tr key={item.ID} id={item.ID} onClick={handleClick}>
                            <td>{idx + 1}</td>
                            <td>{item?.Country}</td>
                            <td>{item?.TotalConfirmed}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isOpen && <Modal closeModal={closeModal}><ContentModal data={country} closeModal={closeModal} /></Modal>}
        </>
    );
}

export default Countries;