import { useEffect, useState } from "react";

const apiKey = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

export const Convert = ({ text, language }) => {
    const [converted, setConverted] = useState("");
    let timeout = 0;

    useEffect(() => {
        setConverted("");
        timeout = setTimeout(() => {
            const url = new URL("https://translation.googleapis.com/language/translate/v2");
            url.searchParams.append("q", text);
            url.searchParams.append("target", language);
            url.searchParams.append("key", apiKey);

            fetch(url, {
                method: "POST",
            })
                .then((res) => res.json())
                .then((json) => setConverted(json.data?.translations[0]?.translatedText ?? "N/A"))
                .catch((e) => console.log(e));
        }, 500);

        return () => clearTimeout(timeout);
    }, [text, language]);

    return <input value={converted} readOnly />;
};
