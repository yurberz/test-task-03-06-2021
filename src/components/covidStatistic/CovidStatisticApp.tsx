import { useState, useEffect } from 'react'

import logo from '../../assets/images/logo.png'
import { fetchCountries } from '../../services/api'
import { TCountry } from '../../helpers/types'
import filter from '../../helpers/filter'
import Search from './Search'
import Countries from './Countries'


const CovidStatisticApp = () => {
    const [data, setData] = useState<TCountry[]>([])
    const [value, setValue] = useState('');
    console.log(data, 'DATA');


    const getCountries = async () => {
        try {
            const { Countries } = await fetchCountries()

            setData(Countries)
        }
        catch (err) {
            console.log(err);
            throw err
        }
    }

    const countries = filter(data, value)


    const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setValue(evt.target.value)
    }

    useEffect(() => {
        getCountries();
    }, [])

    return (
        <div className='container'>
            <header className='header'>
                <div className='logoWrapper'>
                    <img src={logo} width={200} height={200} alt="logo" />
                    <p className='title'>STATISTIC</p>
                </div>
                <Search onChange={onChange} value={value} />
            </header>
            <main>
                <Countries countries={countries} />
            </main>
        </div>
    );
}

export default CovidStatisticApp;