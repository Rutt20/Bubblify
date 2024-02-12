import './styles.css';
import { BubblesContext } from '../../context/BubblesContext';
import { BundleList } from '../BundleList/BundleList';
import { useContext } from 'react';


export const Bundles = () => {
    const context = useContext(BubblesContext);
    const allBundles = context.bundles;
    const products = context.products;

    let bundles = [];
    allBundles.forEach(bundle => {
        let bundleObject = {
            id: bundle.id,
            name: bundle.name,
            items: []
        };
        
        let items = []
        bundle.items.forEach(id => {
            let item_details = products.find(p => p.id === id);
            items.push(item_details);
        })

        bundleObject.items = items
        bundles.push(bundleObject);
    });

    return (
        <div className='bundles-container'>
            <BundleList bundles={bundles}/>
        </div>
    );
};