import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function OutputBox() {
    const [searchParams] = useSearchParams();
    const [translatedText, setTranslatedText] = useState("");

    useEffect(() => {
        const newTranslation = searchParams.get("translatedText");
        if (newTranslation) {
            setTranslatedText(newTranslation);
        }
    }, [searchParams]); // This triggers the effect when URL params change

    return (
        <>
            <h2 className="text-md text-thin">Translated Poem:</h2><br/>
            <div dangerouslySetInnerHTML={{ __html: translatedText || "Your translation will appear here..." }} />
        </>
    );
}
