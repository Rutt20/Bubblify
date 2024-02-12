import './styles.css';
import { useEffect,useState,useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BubblesContext } from '../../context/BubblesContext';
import { CartButtons } from '../CartButtons/CartButtons';
import { BundleProduct } from '../BundleProduct/BundleProduct';
import { Orders } from '../Orders/Orders';
import { Link } from 'react-router-dom';


export const BundleItemDetails = () => {
    const { bundleItemId } = useParams();
    const {products, oneBundle} = useContext(BubblesContext);
    const [ bundleItem,setbundleItem ] = useState([]);
    const [ bundle, setBundle ] = useState({})
    const [ sum, setSum ] = useState(0);

    useEffect(() => {
        async function getBundle() {
            const data = await oneBundle(bundleItemId);
            let curr_items = products.filter((p) => data.items.includes(p.id));
            calculateSum(curr_items);
            setbundleItem(curr_items);
            setBundle(data);
        }

        function calculateSum(curr_items) {
            let sum = 0;
            for(let i = 0; i < curr_items.length; i++) {
                sum +=  curr_items[i].price;
            }
            setSum(sum);
        }

        getBundle();
    },[products]);
    

    return (
        <div className='detail-item-wrapper'>
            <div className='detail-item-header'>
                <button className='detail-item-header-button'>
                    <Link to="/bundles">
                        Back
                    </Link>
                </button>
                <h1 className='detail-item-title'>{bundle.name}</h1>
            </div>
            <div className='detail-item-container'>
                <div className='product-container'>
                    {bundleItem.map(p => <BundleProduct 
                        key={p.id}
                        img={p.image}
                        name={p.name}
                        description={p.description}
                    />)}
                </div>
                <div className='info-container'>
                    <h1 className='info-price'>{sum} ISK</h1>
                    { bundle.id && (
                        <CartButtons 
                        item={{
                            id: bundle.id,
                            name: bundle.name,
                            products: bundleItem
                        }} 
                        type='bundle'/>
                    )}
                    
                    <Orders />
                </div>
            </div>
        </div>
    );
};