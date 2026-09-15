import './item.css';

type CardItemProps = {
  title: string;
  img: string;
  paragrafo: string;
  onClick: () => void;
}

const Item = ({ title, paragrafo, img, onClick }: CardItemProps) => {
  return (
    <div className="caixa">
      <h4 className='title'>{title}</h4>
      <img className='img' src={img} alt={title} />
      <p className='paragrafo'>{paragrafo}</p>

      <button className='btn' onClick={onClick}>view</button>
    </div>
  );
}

export default Item;
