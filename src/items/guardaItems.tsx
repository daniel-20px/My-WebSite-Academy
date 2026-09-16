import { useState } from 'react';
import Item from './item';
import './guardaItems.css';
import './item.css';

const infoTecnologias = {
    React: "React is a JavaScript library focused on creating user interfaces based on reusable components.",
    JavaScript: "JavaScript is the programming language that brings life and interactivity to web pages on the internet.",
    TypeScript: "TypeScript is a JavaScript superset that adds static typing, helping to prevent errors during coding.",
    CSS: "CSS is the style sheet language used to define the design, colors, layouts, and animations of a website.",
    HTML: "HTML is the markup language that defines the structure of blocks, texts, and elements of a web page."
};



type NomeTecnologia = 'React' | 'JavaScript' | 'TypeScript' | 'CSS' | 'HTML';

function Items() {

    const [tecnologiaAtiva, setTecnologiaAtiva] = useState<NomeTecnologia | null>(null);

    return (<div id="center-card">
        <div className='center'>
            <div className="conteiner">

                <Item
                    title="React"
                    img="/logo-react-256.png"
                    paragrafo="Learn more"
                    onClick={() => setTecnologiaAtiva('React')}
                />

                <Item
                    title="JavaScript"
                    img="/logo-javascript-256.png"
                    paragrafo="Learn more"
                    onClick={() => setTecnologiaAtiva('JavaScript')}
                />

                <Item
                    title="TypeScript"
                    img="/typescript-256.png"
                    paragrafo="Learn more"
                    onClick={() => setTecnologiaAtiva('TypeScript')}
                />

                <Item
                    title="CSS"
                    img="/5b29d22ed1933-5ab8d0f3324cd44fb7cd61f5ac7ab341.png"
                    paragrafo="Learn more"
                    onClick={() => setTecnologiaAtiva('CSS')}
                />

                <Item
                    title="HTML"
                    img="/web-development-html-logo-world-wide-web-consortium-create-html-signature-64bbcda93e8a4a2805240f4c06c8870d.png"
                    paragrafo="Learn more"
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
                                Close
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