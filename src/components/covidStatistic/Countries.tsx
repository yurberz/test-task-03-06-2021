import { useState } from 'react'

import { ICountries } from '../../helpers/interfaces'
import { TCountry } from '../../helpers/types';
import useSort from '../../hooks/useSort'
import Button from '../shared/Button';
import Modal from '../shared/Modal';
import ContentModal from './ContentModal';

const initialState = {
    ID: '',
    Country: '',
    TotalConfirmed: 0,
    TotalDeaths: 0,
    TotalRecovered: 0,
}

const Countries = ({ data }: ICountries) => {
    const [isOpen, setIsOpen] = useState(false);
    const [country, setCountry] = useState<TCountry>(initialState)

    const { newArr, sortConfig, requestSort } = useSort(data)

    const getClassNamesFor = (name: string) => {
        if (!sortConfig) {
            return;
        }

        return sortConfig.key === name ? sortConfig.direction : '';
    };

    const handleClick = (evt: React.MouseEvent<HTMLTableRowElement>) => {
        const id = (evt.currentTarget as HTMLTableRowElement).id;

        setCountry(newArr.find(item => item.ID === id));

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
                        <th>
                            <Button
                                className={getClassNamesFor('Country')}
                                title='Country'
                                onClick={() => requestSort('Country')}
                            />
                        </th>
                        <th>
                            <Button
                                className={getClassNamesFor('TotalConfirmed')}
                                title='Total Confirmed'
                                onClick={() => requestSort('TotalConfirmed')}
                            />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {newArr?.map((item, idx) => (
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