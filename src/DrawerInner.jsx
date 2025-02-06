import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const sesame = import.meta.env.VITE_API_KEY;

function DrawerInner() {
    const [inputText, setInputText] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleLanguageChange = (e) => {
        setSelectedLanguage(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const translation = await req(inputText, selectedLanguage);
    
        // Update the URL with the translated text
        const encodedTranslation = encodeURIComponent(translation);
        navigate(`?translatedText=${encodedTranslation}`, { replace: true });
    
        // Force page reload to reflect changes in OutputBox
        window.location.reload();
    };
    

    return (
        <form id="tPoem" className="p-4 h-full" onSubmit={handleSubmit}>
            <h1 className="text-4xl text-stone-100 py-4 text-center flex justify-between">
                <div className="text-left w-1/5">&#9884;</div>
                <div className="w-3/5">Poem Translator</div>
                <div className="text-right w-1/5">&#9884;</div>
            </h1>
            <textarea
                value={inputText}
                onChange={handleInputChange}
                placeholder="Paste your poem here..."
                className="bg-none w-full h-1/2 p-2 text-stone-300 border border-stone-300 rounded-lg"
            />
            <div className="flex justify-between gap-2">
                <select
                    value={selectedLanguage}
                    onChange={handleLanguageChange}
                    className="w-2/3 bg-stone-700 p-2 mt-2 text-stone-300 border border-stone-300 rounded-lg"
                >
                    <option value="" disabled>
                        Translate to:
                    </option>
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
                <button
                    type="submit"
                    className="w-1/3 p-2 mt-2 border border-stone-300 rounded-lg text-stone-200 bg-gradient-to-br from-stone-800 via-stone-700 to-stone-900 hover:text-stone-100 hover:bg-gradient-to-br hover:from-stone-700 hover:via-stone-600 hover:to-stone-800"
                >
                    Submit
                </button>
            </div>
        </form>
    );
}

async function req(poem, tLang) {
    const response = await fetch('https://api.cohere.ai/generate', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${sesame}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            model: 'command-r-08-2024',
            prompt: `
                Translate from the original language to the specified target language:  
                Poem to translate: ${poem}.  
                Target language: ${tLang}.  

                If the target language is unknown or the original text is unclear, politely inform the user.

                Format the response in HTML:  
                - Wrap the title in a <h2 class="text-xl"> tag.  
                - Wrap each line in a <p> tag.  
                - Use <br /> for paragraph breaks.  
                - Wrap author name in <em> tag at the end, separated from the main poem with a <br />.
                - No additional styling is required.
            `,
            preamble: "You are a poem translator. Output only the translated poem, preserving the original meaning and the poet's intent.",
            max_tokens: 1500
        })
    });
    const data = await response.json();
    return data.text;
}

export default DrawerInner;
