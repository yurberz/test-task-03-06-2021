import { ISearch } from '../../helpers/interfaces'
import sprite from '../../assets/images/sprite.svg'

const Search = ({ value, onChange }: ISearch) => {
    return (
        <div className='inputContainer'>
            <input className='input' type="text" placeholder='Search country...' value={value} onChange={onChange} />
            <svg className='svg search'>
                <use href={sprite + '#search'}></use>
            </svg>
        </div>
    );
}

export default Search;