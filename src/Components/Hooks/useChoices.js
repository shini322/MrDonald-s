import { useState } from 'react';

const useChoices = () => {
    const [choices, setChoices] = useState();
    const changeChoices = (e) => {
        setChoices(e.target.value);
    }

    return {choices, changeChoices}
}
export default useChoices;