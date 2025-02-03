import { useState } from 'react';
import './index.css';
// import getTranslation from './Inference';

function DrawerInner() {
    const [inputText, setInputText] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('');

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleLanguageChange = (e) => {
        setSelectedLanguage(e.target.value);
    };

    const handlesubmit = (x, y) => {
        console.log(x, y);
    };


    return (
        <div className='p-4 h-full'>
            <h1 className='text-4xl text-stone-100 py-4 text-center flex justify-between'>
                <div className='text-left w-1/5'>&#9884;</div>
                <div className='w-3/5'>Poem Translator</div>
                <div className='text-right w-1/5'>&#9884;</div>
            </h1>
            <textarea
                value={inputText}
                onChange={handleInputChange}
                placeholder="Paste your poem here..."
                className="bg-none w-full h-1/2 p-2 text-stone-300 border border-stone-300 rounded-lg" />
            <div className='flex justify-between gap-2'>
                <select
                    value={selectedLanguage}
                    onChange={handleLanguageChange}
                    className="w-2/3 bg-stone-700 p-2 mt-2 text-stone-300 border border-stone-300 rounded-lg"
                >
                    <option value="" disabled>Translate to:</option>
                    <option value="English">English</option>
                    <option value="Mandarin Chinese">Mandarin Chinese</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="Standard Arabic">Standard Arabic</option>
                    <option value="Bengali">Bengali</option>
                    <option value="Russian">Russian</option>
                    <option value="Portuguese">Portuguese</option>
                    <option value="Indonesian">Indonesian</option>
                </select>
                <button onClick={handlesubmit(inputText, selectedLanguage)} className="w-1/3 p-2 mt-2 border border-stone-300 rounded-lg text-stone-200 bg-gradient-to-br from-stone-800 via-stone-700 to-stone-900 hover:text-stone-100 hover:bg-gradient-to-br hover:from-stone-700 hover:via-stone-600 hover:to-stone-800">Submit</button>
            </div>
        </div>
    );
}

export default DrawerInner;