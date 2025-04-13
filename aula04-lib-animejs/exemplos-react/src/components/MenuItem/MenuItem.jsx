import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { animate, utils } from 'animejs';
import { MenuItemStyled } from './MenuItem.styled'
const $ = utils.$; 

function listLettersAnimation($target,count=10){
    setTimeout(() => {
        animate($target,{
            // Property keyframes
            y: [
                { to: '-2.75rem', ease: 'outExpo', duration: 600 },
                { to: 0, ease: 'outBounce', duration: 800, delay: 10*count }
            ],
            // Property specific parameters
            rotate: {
                from: '-1turn',
                delay: 0
            },
            delay: (_, i) => i * 15, // Function based value
            ease: count%2==0?'outCirc':'inCirc',
            reversed:count%2==0,
            // loopDelay: 1000,
            // loop: true,
            //https://animejs.com/documentation/animation
        });
    }, 100*count);
}


function lettersAnimation($target){
    animate($target,{
        // Property keyframes
        y: [
            { to: '-.25rem', ease: 'outExpo', duration: 600 },
            { to: 0, ease: 'outBounce', duration: 800, delay: 10 }
        ],
        scale: [{
            to: '1',
            duration: 500,
        },
        {
            to: '1.25',
            duration: 500,
        },{
            to: '1',
            duration: 500,
        }],
        delay: (_, i) => i * 25,
        ease: 'inOutCirc',
    });
}


const MenuItem = ({ path, title, index }) => {

    const menuItem = `Exemplo 0${index + 1} - ${(title)}`;
    const contentArray = menuItem.split('');

    useEffect(() => { 
        $('li').forEach((li,index) => {
                listLettersAnimation($(`li:nth-of-type(${index+1}) span`),index+1)
                li.onmouseenter = () => lettersAnimation($(`li:nth-of-type(${index+1}) span`))
            });
    }, []);

    return (
        <MenuItemStyled>
            <Link to={path}>
                <h3>{contentArray.map(letter =>
                        <span>{letter === ' ' ? '\u00A0' : letter}</span>
                    )}
                </h3>
            </Link>
        </MenuItemStyled>
    )
}

export default MenuItem
