import { ISearchProps } from '../../helpers/interfaces'
import sprite from '../../assets/images/sprite.svg'

const Search = ({ value, onChange }: ISearchProps) => {
    return (
        <div className='inputContainer'>
            <input className='input' type="text" placeholder='Search...' value={value} onChange={onChange} />
            <svg className='search'>
                <use href={sprite + '#search'}></use>
            </svg>
        </div>
    );
}

export default Search;