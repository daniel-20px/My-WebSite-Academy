import { useState } from 'react';
import Item from './item';
import './guardaItems.css';
import './item.css';

const infoTecnologias = {
    React: "React é uma biblioteca JavaScript focada na criação de interfaces de usuário baseadas em componentes reutilizáveis.",
    JavaScript: "JavaScript é a linguagem de programação que traz vida e interatividade às páginas web na internet.",
    TypeScript: "TypeScript é um superconjunto do JavaScript que adiciona tipagem estática, ajudando a evitar erros durante a codificação.",
    CSS: "CSS é a linguagem de folhas de estilo usada para definir o design, cores, layouts e animações de um site.",
    HTML: "HTML é a linguagem de marcação que define a estrutura de blocos, textos e elementos de uma página web."
};

type NomeTecnologia = 'React' | 'JavaScript' | 'TypeScript' | 'CSS' | 'HTML';

function Items() {

    const [tecnologiaAtiva, setTecnologiaAtiva] = useState<NomeTecnologia | null>(null);

    return (
        <div id="center-card">
            <div className='center'>
                <div className="conteiner">

                    <Item
                        title="React"
                        img="/logo-react-256.png"
                        paragrafo="Saiba mais"
                        onClick={() => setTecnologiaAtiva('React')}
                    />

                    <Item
                        title="JavaScript"
                        img="/logo-javascript-256.png"
                        paragrafo="Saiba mais"
                        onClick={() => setTecnologiaAtiva('JavaScript')}
                    />

                    <Item
                        title="TypeScript"
                        img="/typescript-256.png"
                        paragrafo="Saiba mais"
                        onClick={() => setTecnologiaAtiva('TypeScript')}
                    />

                    <Item
                        title="CSS"
                        img="/5b29d22ed1933-5ab8d0f3324cd44fb7cd61f5ac7ab341.png"
                        paragrafo="Saiba mais"
                        onClick={() => setTecnologiaAtiva('CSS')}
                    />

                    <Item
                        title="HTML"
                        img="/web-development-html-logo-world-wide-web-consortium-create-html-signature-64bbcda93e8a4a2805240f4c06c8870d.png"
                        paragrafo="Saiba mais"
                        onClick={() => setTecnologiaAtiva('HTML')}
                    />
                </div>

                {tecnologiaAtiva && (
                    <div className="modalOverlay" onClick={() => setTecnologiaAtiva(null)}>
                        <div className="modalContent" onClick={(e) => e.stopPropagation()}>
                            <h3 className="modalTitle">{tecnologiaAtiva}</h3>

                            <p className="modalText">{infoTecnologias[tecnologiaAtiva]}</p>

                            <div className="modalActions">
                                <button className="btnClose" onClick={() => setTecnologiaAtiva(null)}>
                                    Fechar
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Items;
