import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function OutputBox() {
    const [searchParams] = useSearchParams();
    const [translatedText, setTranslatedText] = useState("");

    const placeholder = `
        Parchment & Verse: The Alchemy of Translation
        In the sidebar's glow, a poet's hand,
        Unfurls their verse on digital sand.
        They choose a tongue, then press submit,
        And watch the lines transform—yet sit

        Not bound by chains of word-for-word,
        But meaning’s breath, the soul conferred.
        No rigid lattice, syntax tight,
        But echoes shaped in native light.

        A sonnet sighs in French refrain,
        Yet keeps its pulse, its tender pain.
        A haiku bends in whispered breeze,
        Yet hums the same in Cantonese.

        Not just the letters shift and turn,
        But rhythm, mood, the fires that burn.
        It weighs intent, the poet’s art,
        And writes anew—but keeps the heart.

        Thus Parchment & Verse lets voices roam,
        Yet every tongue still calls it home.
    `

    useEffect(() => {
        const newTranslation = searchParams.get("translatedText");
        if (newTranslation) {
            setTranslatedText(newTranslation);
        }
    }, [searchParams]); // This triggers the effect when URL params change

    return (
        <div className="min-h-full">
            <h2 className="text-md text-thin">Translated Poem:</h2><br/>
            <div dangerouslySetInnerHTML={{ __html: translatedText || placeholder }} />
        </div>
    );
}
