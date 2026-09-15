import ChatDev from './ia/ia';
import Items from './items/guardaItems';
import Menu_responsivo from './Menu/Menu';
import Title from './Title_main/Title';
import Aviso from './aviso/aviso'
function App() {


     return(
     <>
     <Menu_responsivo />
     <Title />
     <Items />
     <Aviso />
     <ChatDev />
     
     </>
     )
}

export default App;