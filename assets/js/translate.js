window.gtranslateSettings = {"default_language":"pt",
"languages":["pt","|","en"],
"wrapper_selector":".gtranslate_wrapper"}

  // Função para configurar um cookie
  function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

// Obtém as configurações de idioma do objeto gtranslateSettings
const defaultLanguage = window.gtranslateSettings.default_language;
const languages = window.gtranslateSettings.languages;

// Converte as configurações em formato JSON e armazena como cookies
setCookie("defaultLanguage", JSON.stringify(defaultLanguage), 30);
setCookie("languages", JSON.stringify(languages), 30);


