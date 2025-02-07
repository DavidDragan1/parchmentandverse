import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function OutputBox() {
    const [searchParams] = useSearchParams();
    const [translatedText, setTranslatedText] = useState("");

    const placeholder = `
        <h1 className="text-xl">Parchment & Verse: The Alchemy of Translation</h1>

        <p>In the sidebar's glow, a poet's hand,<br>  
        Unfurls their verse on digital sand.<br>  
        They choose a tongue, then press <strong>submit</strong>,<br>  
        And watch the lines transform—yet sit</p>  

        <p>Not bound by chains of word-for-word,<br>  
        But meaning’s breath, the soul conferred.<br>  
        No rigid lattice, syntax tight,<br>  
        But echoes shaped in native light.</p>  

        <p>A sonnet sighs in French refrain,<br>  
        Yet keeps its pulse, its tender pain.<br>  
        A haiku bends in whispered breeze,<br>  
        Yet hums the same in Cantonese.</p>  

        <p>Not just the letters shift and turn,<br>  
        But <strong>rhythm</strong>, <strong>mood</strong>, the <strong>fires that burn</strong>.<br>  
        It weighs intent, the poet’s art,<br>  
        And writes anew—but keeps the heart.</p>  

        <p>Thus <em>Parchment & Verse</em> lets voices roam,<br>  
        Yet every tongue still calls it home.</p>  

    `

    useEffect(() => {
        const newTranslation = searchParams.get("translatedText");
        if (newTranslation) {
            setTranslatedText(newTranslation);
        }
    }, [searchParams]); // This triggers the effect when URL params change

    return (
        <div className="min-h-screen p-5">
            <h2 className="text-md text-thin">Translated Poem:</h2><br/>
            <div dangerouslySetInnerHTML={{ __html: translatedText || placeholder }} />
        </div>
    );
}
