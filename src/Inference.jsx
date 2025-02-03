
export default function getTranslation (inputText, selectedLanguage) {
    const { CohereClientV2 } = require('cohere-ai');
    const key = import.meta.env.VITE_COHERE_API

    const cohere = new CohereClientV2({
    token: key,
    });

    (async () => {
        const response = await cohere.chat({
            model: 'command-r-plus',
            messages: [
            {
                role: 'user',
                content: `
                You are a poem translator. Output only the translated poem, preserving the original meaning and the poet's intent.

                Translate from the original language to the specified target language:  
                Poem to translate: ${inputText}  
                Target language: ${selectedLanguage}  

                If the target language is unknown or the original text is unclear, politely inform the user.

                Format the response in HTML:  
                - Wrap each line in a <p> tag.  
                - Use <br /> for paragraph breaks.  
                - No additional styling is required.
                `,
            },
            ],
        });
    })();
  return response;
}