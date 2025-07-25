// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  pt: {
    translation: {
      "navHome": "Início",
      "navAbout": "Sobre",
      "navMusic": "Música",
      "navTheater": "Teatro",
      "navContact": "Contato",
      "translateToEnglish": "English",
      "translateToPortuguese": "Português",
      "translateToEnglish": "English",
      "translateToPortuguese": "Português",
      "translateToPortugueseShort": "PT",
      "translateToEnglishShort": "EN",

      // --- Traduções para o Componente About ---
      "aboutSectionTitle": "Uma Artista Multifacetada",
      "searchClarissaChaves": "Clique para pesquisar Clarissa Chaves no Google", // Nova chave para o tooltip do ícone
      "aboutHighlightTextSuffix": "é carioca, cantora, compositora e atriz.", // Nova chave com o restante da frase
      "aboutParagraph1": "Mas, desde muito cedo, entrou no mundo das artes, fazendo teatro e cantando, inclusive no Beco das Garrafas, em um projeto de Bossa/MPB. No repertório, MPB, pop e R&B, tendo como principais influências nomes como Gal Costa, Clara Nunes, Djavan, Elis, Marisa Monte, Rihanna, Beyoncé, Ariana Grande e Amy Winehouse, além de suas composições, que a colocam como a nova promessa da música brasileira.",
      "aboutParagraph2": "Clarissa faz sua preparação vocal com a também cantora e compositora da MPB, Andréia Pedroso, criadora do 'Cheia de Bossa', Mestre em Educação Musical pela Escola de Música da UFRJ, Curadora do projeto Preparavoz - Oficina de Canto - realizada no Centro da Música Carioca Artur do Távola.",
      "aboutParagraph3": "Sua fonoaudióloga é a Dra. Cristiane Magacho, precursora em dermatoglifia no Brasil. Além disso, sua carreira tem planejamento de Anita Carvalho (Music Rio Academy), Marina Mattoso (Agência Jangada) e Roberta Senna (Ovo Branding).",
      "aboutImageAlt": "Clariá - imagem {{index}}",


      // --- Traduções para o Componente Hero ---
      "heroLogoAlt": "Logo Clariá",
      "heroDescription": "Cantora, compositora e atriz brasileira, Clariá traz a força do pop e da MPB em uma fusão de liberdade, sofisticação e energia artística. Prepare-se para uma experiência musical inesquecível.",
      "heroButton": "Descubra Minha Música",
      "heroImageAlt": "Clariá em destaque com efeitos de luz neon",

      // --- Traduções para o Componente Music ---
      "musicSectionTitle": "Jornada Musical",
      "musicParagraph1": "Foi convidada para um teste na Rede Record e para Ellis, o Musical. Em 2024, cursou teatro musical no CEFTEM, de Reiner Tenente, participando como a personagem Jerusa, de ‘Gabriela, o Musical’, baseada na obra de Jorge Amado, com direção geral de João Fonseca e Nello Marrese, Direção musical de Tony Lucchesi, Coreografias de Bella Mac, Adaptação e versão de Vitor de Oliveira, músicas originais de João Fonseca e Tony Lucchesi, Coordenação geral de Reiner Tenente e Produção do Ceftem. A temporada de Gabriela, o Musical foi de 22/11 a 08/12/2024, no Teatro Dulcina, RJ. Além disso, passou por cursos livres na CAL. Em junho/julho de 2025 atuou na direção de cena e trilha sonora ao vivo do espetáculo ‘O Gato de Botas’, com adaptação de Maria Clara Machado, no Tablado, RJ.",
      "musicParagraph2": "Em 2023, fez vários shows, em casas como Espaço09, Galeria Café Rio, Sobrado da Cidade, Audio Rebel, Ginger Mamut, no Teatro Cândido Mendes, na Fábrica Bhering e no Centro da Música Carioca Artur da Távola.",
      "musicParagraph3": "Em 2024, dedicou-se à composição e gravação de músicas autorais, que, no segundo semestre, poderão ser ouvidas em shows com novo repertório, e no seu primeiro álbum. Com produção de Luiz Lopez e mixagem/masterização de Diogo Macedo e Tuta Macedo, da Emestudio. Assessoria de imprensa e produção executiva de Paula Ramagem.",
      "musicImageAlt": "Clariá em um show com microfone",
      "musicHighlightText": "A força musical e ao mesmo tempo emocional de Clarissa Chaves chama a atenção de ouvintes de todos os estilos. Participou do concurso da 89 FM A Rádio Rock para abrir o Lollapalooza BR 2024 e para cantar no Universo Spanta 2025. Em maio de 2025, retornou aos palcos como Clariá, em show de abertura do evento B + B no Shopping Cassino Atlântico, RJ, onde apresentou a recém-lançada música ‘21’.",
      "musicListenNowButton": "Ouça '21' Agora",

      // --- Traduções para o Componente Philosophy ---
      "philosophySectionTitle": "A Mensagem por Trás da Música",
      "philosophyParagraph1": "Meu objetivo com a música é que as pessoas se identifiquem de coração comigo. É fazer com que elas se sintam compreendidas e percebam que há pessoas que passam pelo mesmo que elas. Quero que minha música espalhe o amor em todas as suas formas. É o amor que faz morrer, o amor que explode, o amor que dá. O amor que machuca, o amor que aflora, o amor que nasce e o amor que morre. Meu trabalho é diferente, porque carrega cura. Eu coloco as minhas energias e vibrações em cada um que trabalha em cada pessoa de uma maneira e eu uso o elemento do arco-íris. Todo músico está associado a uma cor para expressar um sentimento, um estado de espírito.",
      "philosophyQuote": "“Meu canto é para todos que estejam dispostos a evoluir como pessoa, a se entenderem como seres humanos e respeitarem todas as formas de amor, abraçando todas as experiências que a vida dá.”",
      "philosophyCite": "Clariá",
      "philosophyImageAlt": "Clariá sentada em um vestido elegante",

      // --- Traduções para o Componente Theater ---
      "theaterSectionTitle": "Jornada no Teatro",
      "theaterParagraph1": "Clarissa Chaves fez parte do Musaciateatral de 2022 a 2023, onde atuou como assistente de direção musical e atriz na peça ‘O Nariz', de Gogol’ tendo se apresentado no Festival Nova Cena (Itajaí/SC), no Festival Nacional de Teatro de Duque de Caxias, na Arena Fernando Torres (Parque Madureira), na Sala Baden Powell e na Areninha Hermeto Pascoal (Bangu, RJ). Atuou na companhia também como assistente e dando aula pras crianças.",
      "theaterParagraph2": "Fez parte da direção musical e foi responsável pelo visagismo da peça ‘Lenços e Ventos’, em 2023, no Teatro Solar Meninos de Luz, onde também atuou na peça ‘O renascer da esperança, uma história de luz’. De 2007 a 2011, estudou com Ana Luiza Folly. Em 2011, passou pelo Tablado. Em 2013, participou do curta-metragem ‘Sequestro na Rede Social’. Foi convidada para um teste na Rede Record e para Elis, o Musical.",
      "theaterParagraph3": "Em 2024, cursou teatro musical no CEFTEM, de Reiner Tenente, participando, como a personagem ‘Jerusa', de 'Gabriela, o Musical’, baseada na obra de Jorge Amado, com Direção geral de João Fonseca e Nello Marrese, Direcao musical de Tony Lucchesi, Coreografias de Bella Mac, Adaptação e versão de Vitor de Oliveira, músicas originais de João Fonseca e Tony Lucchesi, Coordenação geral de Reiner Tenente e Produção do Ceftem.",
      "theaterParagraph4": "A temporada de Gabriela, o Musical foi de 22/11 a 08/12/2024, no Teatro Dulcina, RJ. Além disso, passou por cursos livres na CAL. Em junho/julho de 2025 atuou na direção de cena e trilha sonora ao vivo da esquete ‘O Gato de Botas’, com adaptação de Maria Clara Machado, no Tablado, RJ.",
      "theaterImageAlt": "Clariá em um palco de teatro",

      // --- Traduções para o Componente Contact ---
      "contactTitle": "Entre em Contato",
      "contactDescription": "Para shows, parcerias ou mais informações, sinta-se à vontade para entrar em contato:",
      "contactNameLabel": "Nome",
      "contactEmailLabel": "Email",
      "contactMessageLabel": "Mensagem",
      "contactMessagePlaceholder": "Olá, gostaria de fazer uma parceria",
      "contactSubmitButton": "Enviar Mensagem",
      "contactFormSuccess": "Mensagem enviada com sucesso!",
      "contactFollowUs": "Siga Clariá nas redes sociais",
      "contactInstagramAria": "Instagram da Clariá",
      "contactInstagramLabel": "Instagram",
      "contactTiktokAria": "Tiktok da Clariá",
      "contactTiktokLabel": "TikTok",
      "contactEmailAria": "Email da Clariá",
      "contactEmailLabelText": "Email",
      "contactYoutubeAria": "Youtube da Clariá",
      "contactYoutubeLabel": "Youtube",
      "contactSpotifyAria": "Spotify da Clariá",
      "contactSpotifyLabel": "Spotify",
      "contactHyperdditAria": "Hyperddit da Clariá",
      "contactHyperdditLabel": "Hyperddit",
      "contactFormError": "Erro ao enviar mensagem. Tente novamente mais tarde.",

      // --- Traduções para o Componente Footer ---
      "footerRights": "© 2025 Clariá. Todos os direitos reservados.",
      "footerDevelopedBy": "Desenvolvido por {{developer1}} com apoio de {{developer2}}",

      // --- Traduções para o WhatsAppButton ---
      "whatsappButtonText": "Conversar no WhatsApp",
    }
  },
  en: {
    translation: {
      "navHome": "Home",
      "navAbout": "About",
      "navMusic": "Music",
      "navTheater": "Theater",
      "navContact": "Contact",
      "translateToEnglish": "English",
      "translateToPortuguese": "Portuguese",

      "translateToEnglish": "English",
      "translateToPortuguese": "Portuguese",
      "translateToPortugueseShort": "Portuguese",
      "translateToEnglishShort": "English",

      // --- Traduções para o Componente About (em Inglês) ---
      "aboutSectionTitle": "A Multifaceted Artist",
      "aboutHighlightText": "Clarissa Chaves is from Rio de Janeiro, a singer, songwriter, and actress.",
      "aboutParagraph1": "But from a very young age, she entered the world of arts, doing theater and singing, including at Beco das Garrafas, in a Bossa/MPB project. Her repertoire includes MPB, pop, and R&B, with main influences such as Gal Costa, Clara Nunes, Djavan, Elis, Marisa Monte, Rihanna, Beyoncé, Ariana Grande, and Amy Winehouse, in addition to her compositions, which position her as the new promise of Brazilian music.",
      "aboutParagraph2": "Clarissa prepares her vocals with fellow MPB singer and songwriter, Andréia Pedroso, creator of 'Cheia de Bossa', Master in Music Education from UFRJ's School of Music, Curator of the Preparavoz project - Singing Workshop - held at the Artur do Távola Carioca Music Center.",
      "aboutParagraph3": "Her speech therapist is Dr. Cristiane Magacho, a pioneer in dermatoglyphics in Brazil. Furthermore, her career planning is handled by Anita Carvalho (Music Rio Academy), Marina Mattoso (Agência Jangada), and Roberta Senna (Ovo Branding).",
      "aboutImageAlt": "Clariá - image {{index}}",

      // --- Traduções para o Componente Hero (em Inglês) ---
      "heroLogoAlt": "Clariá Logo",
      "heroDescription": "Brazilian singer, songwriter, and actress, Clariá brings the power of pop and MPB in a fusion of freedom, sophistication, and artistic energy. Get ready for an unforgettable musical experience.",
      "heroButton": "Discover My Music",
      "heroImageAlt": "Clariá in highlight with neon light effects",

      // --- Traduções para o Componente Music (em Inglês) ---
      "musicSectionTitle": "Musical Journey",
      "musicParagraph1": "She was invited for an audition at Rede Record and for Ellis, the Musical. In 2024, she studied musical theater at CEFTEM, with Reiner Tenente, participating as the character Jerusa, from ‘Gabriela, the Musical’, based on Jorge Amado's work, with general direction by João Fonseca and Nello Marrese, musical direction by Tony Lucchesi, choreographies by Bella Mac, adaptation and version by Vitor de Oliveira, original songs by João Fonseca and Tony Lucchesi, general coordination by Reiner Tenente, and production by Ceftem. The season of Gabriela, the Musical was from 11/22 to 12/08/2024, at Teatro Dulcina, RJ. Additionally, she took free courses at CAL. In June/July 2025, she worked as stage director and live soundtrack for the play ‘Puss in Boots’, adapted by Maria Clara Machado, at Tablado, RJ.",
      "musicParagraph2": "In 2023, she performed several shows in venues such as Espaço09, Galeria Café Rio, Sobrado da Cidade, Audio Rebel, Ginger Mamut, at Teatro Cândido Mendes, Fábrica Bhering, and Centro da Música Carioca Artur da Távola.",
      "musicParagraph3": "In 2024, she dedicated herself to composing and recording original songs, which, in the second half of the year, can be heard in shows with a new repertoire, and on her first album. Produced by Luiz Lopez and mixed/mastered by Diogo Macedo and Tuta Macedo, from Emestudio. Press office and executive production by Paula Ramagem.",
      "musicImageAlt": "Clariá at a show with a microphone",
      "musicHighlightText": "The musical and emotional strength of Clarissa Chaves captures the attention of listeners of all styles. She participated in the 89 FM A Rádio Rock contest to open Lollapalooza BR 2024 and to sing at Universo Spanta 2025. In May 2025, she returned to the stage as Clariá, in the opening show of the B + B event at Shopping Cassino Atlântico, RJ, where she presented the recently released song ‘21’.",
      "musicListenNowButton": "Listen to '21' Now",

      // --- Traduções para o Componente Philosophy (em Inglês) ---
      "philosophySectionTitle": "The Message Behind the Music",
      "philosophyParagraph1": "My goal with music is for people to truly connect with me. It's to make them feel understood and realize that there are others going through the same things. I want my music to spread love in all its forms. It's the love that makes us die, the love that explodes, the love that gives. The love that hurts, the love that blossoms, the love that is born, and the love that dies. My work is different because it carries healing. I put my energy and vibrations into each person in a unique way, and I use the element of the rainbow. Every musician is associated with a color to express a feeling, a state of mind.",
      "philosophyQuote": "“My singing is for everyone willing to evolve as a person, to understand themselves as human beings, and to respect all forms of love, embracing all the experiences life offers.”",
      "philosophyCite": "Clariá",
      "philosophyImageAlt": "Clariá sitting in an elegant dress",

      // --- Traduções para o Componente Theater (em Inglês) ---
      "theaterSectionTitle": "Journey in Theater",
      "theaterParagraph1": "Clarissa Chaves was part of Musaciateatral from 2022 to 2023, where she worked as a musical direction assistant and actress in the play 'The Nose' by Gogol', having performed at the Nova Cena Festival (Itajaí/SC), the National Theater Festival of Duque de Caxias, Arena Fernando Torres (Parque Madureira), Sala Baden Powell, and Areninha Hermeto Pascoal (Bangu, RJ). She also worked in the company as an assistant and taught children.",
      "theaterParagraph2": "She was part of the musical direction and was responsible for the characterization of the play 'Lenços e Ventos' in 2023, at Teatro Solar Meninos de Luz, where she also acted in the play 'The rebirth of hope, a story of light'. From 2007 to 2011, she studied with Ana Luiza Folly. In 2011, she passed through Tablado. In 2013, she participated in the short film 'Kidnapping on Social Media'. She was invited for an audition at Rede Record and for Elis, the Musical.",
      "theaterParagraph3": "In 2024, she studied musical theater at CEFTEM, with Reiner Tenente, participating as the character 'Jerusa' from 'Gabriela, the Musical', based on Jorge Amado's work, with general direction by João Fonseca and Nello Marrese, musical direction by Tony Lucchesi, choreographies by Bella Mac, adaptation and version by Vitor de Oliveira, original songs by João Fonseca and Tony Lucchesi, general coordination by Reiner Tenente and production by Ceftem.",
      "theaterParagraph4": "The season of Gabriela, the Musical ran from November 22 to December 8, 2024, at Teatro Dulcina, RJ. Additionally, she took free courses at CAL. In June/July 2025, she acted as stage director and live soundtrack for the sketch 'Puss in Boots', adapted by Maria Clara Machado, at Tablado, RJ.",
      "theaterImageAlt": "Clariá on a theater stage",

      // --- Traduções para o Componente Contact (em Inglês) ---
      "contactTitle": "Get in Touch",
      "contactDescription": "For shows, partnerships, or more information, feel free to contact us:",
      "contactNameLabel": "Name",
      "contactEmailLabel": "Email",
      "contactMessageLabel": "Message",
      "contactMessagePlaceholder": "Hello, I would like to propose a partnership",
      "contactSubmitButton": "Send Message",
      "contactFormSuccess": "Message sent successfully!",
      "contactFollowUs": "Follow Clariá on social media",
      "contactInstagramAria": "Clariá's Instagram",
      "contactInstagramLabel": "Instagram",
      "contactTiktokAria": "Clariá's Tiktok",
      "contactTiktokLabel": "TikTok",
      "contactEmailAria": "Clariá's Email",
      "contactEmailLabelText": "Email",
      "contactYoutubeAria": "Clariá's Youtube",
      "contactYoutubeLabel": "Youtube",
      "contactSpotifyAria": "Clariá's Spotify",
      "contactSpotifyLabel": "Spotify",
      "contactHyperdditAria": "Clariá's Hyperddit",
      "contactHyperdditLabel": "Hyperddit",

      // --- Traduções para o Componente Footer ---
      "footerRights": "© 2025 Clariá. All rights reserved.",
      "footerDevelopedBy": "Developed by {{developer1}} with the support of {{developer2}}",

      // --- Traduções para o WhatsAppButton ---
      "whatsappButtonText": "Chat on WhatsApp",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "pt",
    fallbackLng: "pt",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;