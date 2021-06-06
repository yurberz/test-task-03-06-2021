import logo from '../../assets/images/logo.png'

const Logo = ({ title }: { title: string }) => {
    return (
        <div className="logoWrapper">
            <img src={logo} width={200} height={200} alt="logo" />
            <h1 className="title">{title}</h1>
        </div>
    );
}

export default Logo;