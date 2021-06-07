import { IButton } from '../../helpers/interfaces'

const Button = ({ className = '', title = '', onClick }: IButton) => {
    return (
        <button className={className ? `btn ${className}` : 'btn'} onClick={onClick} type='button' >
            {title}
        </button>
    );
};

export default Button;