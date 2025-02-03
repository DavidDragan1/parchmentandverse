import OpenAI from "openai";
import OutputBox from "./OutputBox";

const openai = new OpenAI();

export default async function getTranslation (poem, tLang) {
    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                { role: "developer", content: "You are a poem translator. Output only the translated poem, preserving the original meaning and the poet's intent." },
                {
                    role: "user",
                    content: `
                        Translate from the original language to the specified target language:  
                        Poem to translate: ${poem}  
                        Target language: ${tLang}  
    
                        If the target language is unknown or the original text is unclear, politely inform the user.
    
                        Format the response in HTML:  
                        - Wrap the title in a <h1> tag.  
                        - Wrap each line in a <p> tag.  
                        - Use <br /> for paragraph breaks.  
                        - Wrap author name in <em> tag at the end, separated from the main poem with a <br/ >.
                        - No additional styling is required.  
                    `,
                },
            ],
            store: true,
        });
    
        const res = completion.choices[0].message;
        return (OutputBox(res));
        
    } catch (error) {
        console.error('Error fetching translation:', error);
        return 'Error fetching translation';
    }
}
