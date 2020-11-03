import { useState } from 'react';

const getToppings = (toppings) => {
    return toppings.map(item => ({name: item, checked: false}))
}

const useToppings = (openItem) => {
    const [toppings, setToppings] = useState(openItem.toppings ? getToppings(openItem.toppings) : []);

    const checkToppings = (index) => {
        if(toppings === []) return;
        setToppings(toppings.map((item,i) => {
            const newItem = item;
            if(i === index){
                newItem.checked = !newItem.checked;
            }
            return newItem;
        }))
    }

    return {toppings, checkToppings}
}

export default useToppings;