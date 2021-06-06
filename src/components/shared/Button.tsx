import { IButton } from '../../helpers/interfaces'

const Button = ({ className = '', title = '', onClick }: IButton) => {
    return (
        // eslint-disable-next-line no-useless-concat
        <button className={className ? 'btn' + ' ' + className : 'btn'} onClick={onClick} type='button' >
            {title}
        </button>
    );
};

export default Button;