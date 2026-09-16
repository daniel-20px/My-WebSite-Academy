import { useEffect, useState } from 'react';
import './style.css';

function Menu_responsivo() {
    const [navopen, setnavopen] = useState<boolean>(false);

    useEffect(() => {
        const body = document.body;
        if (navopen) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'unset';
        }

        return () => {
            body.style.overflow = 'unset';
        };
    }, [navopen]);

    function menu() {
        setnavopen(!navopen);
    }

    return (<div className='overflow'>
        <div className='paimenu'>
            <div className='menu-top'>
                <button className={` btn-hamburger ${navopen ? 'active' : ''}`} onClick={menu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            <nav className={`navbar ${navopen ? 'open' : ''}`}>
                <ul className='menuul'>
                    <li><a className={`a-menu ${navopen ? 'opacity' : ''}`} href='#'>Início</a></li>
                    <li><a className={`a-menu ${navopen ? 'opacity' : ''}`} href='#'>Serviços</a></li>
                    <li><a className={`a-menu ${navopen ? 'opacity' : ''}`} href='#'>Ajuda</a></li>
                    <li><a className={`a-menu ${navopen ? 'opacity' : ''}`} href='#'>Atendimento</a></li>
                </ul>
            </nav>
        </div>
    </div>
    );
}

export default Menu_responsivo;
