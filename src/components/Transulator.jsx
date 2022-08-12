import { useEffect } from "react";
export const Transulator = () =>{
    const googleTranslate = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            autoDisplay: false
          },
          "translate"
        );
      };
      useEffect(() => {
        var addScript = document.createElement("script");
        addScript.setAttribute(
          "src",
          "//translate.google.com/translate_a/element.js?cb=googleTranslate"
        );
        document.body.appendChild(addScript);
        window.googleTranslate = googleTranslate;
      }, []);
      return (
        <>
          <div id="translate"></div>         
        </>
      );
}