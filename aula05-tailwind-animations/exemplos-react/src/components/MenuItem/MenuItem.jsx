
import { Link } from 'react-router-dom';
import { MenuItemStyled } from './MenuItem.styled'

const MenuItem = ({ path, title, index }) => {

    const menuItem = `Exemplo 0${index + 1} - ${(title)}`;

    return (
        <MenuItemStyled>
            <Link to={path}>
                <h3 className="w-full lg:mb-5! lg:text-3xl duration-5000 
                    hover:bg-primary-500 rounded-2xl hover:duration-1000">
                    {menuItem}
                </h3>
            </Link>
        </MenuItemStyled>
    )
}

export default MenuItem
