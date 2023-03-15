    const products = [
        {
            id: 1,
            name: 'Spokój',
            image: 'https://github.com/Antonio0806/temporary-files/blob/1e65bdddaf4150214e00f7be7e72f27f2ed52581/MarynaSiliakova.jpg?raw=true',
            price: '50 PLN',
            author: 'Maryna Siliakova',
            author_description: 'Urodzona w 1992 roku w Doniecku w Ukrainie, do Polski przeprowadziła się w 2017 roku. Z wykształcenia chemiczka, w Warszawie postanowiła się przekwalifikować - obecnie jest absolwentką projektowania graficznego Społecznej Akademii Nauk. Artystka tworzy zarówno kolaże cyfrowe, jak i analogowe oraz chętnie dzieli się zdobytą wiedzą z otoczeniem. Jej prace były wyróżnianie w wielu konkursach krajowych i międzynarodowych.',
            description: 'Kolaż przedstawia ptaka - łabędzia, żyjącego z kompletami zastawy i obrusami na falach jednego stawu. Jak wszystkie babcie spokojny, słychać nawet tykanie zegara'
        },
        {
            id: 2,
            name: 'Idol',
            image: 'https://github.com/Antonio0806/temporary-files/blob/1e65bdddaf4150214e00f7be7e72f27f2ed52581/Aleksandra%20waliszewska.jpg?raw=true',
            price: '234 PLN',
            author: 'Aleksandra Waliszwska',
            author_description: 'Znana polska malarka, absolwentka Akademii Sztuk Pięknych w Warszawie. Charakterystycznym elementem prac artystki jest mrok i symbolizm, a jej twórczość skradła serca nie tylko Polaków. ',
            description: 'Sygnowana grafika, która została wydrukowana w Anglii przez wydawnictwo My Dance The Scull.'
        },
        {
            id: 3,
            name: 'Impuls',
            image: 'https://github.com/Antonio0806/temporary-files/blob/1e65bdddaf4150214e00f7be7e72f27f2ed52581/impuls.png?raw=true',
            price: '15 PLN',
            author: 'Mariia Yakymenko',
            author_description: 'Urodzona w Ukrainie, obecnie mieszka w Warszawie. Artystka sztuk wizualnych, między innymi - kolaży. Traktuje sztukę w sposób terapeutyczny. Pomaga jej odnaleźć swoje kreatywne strony, a kolaż stanowi dla niej możliwość uwolnienia emocji i sublimacji.',
            description: 'Kolaż, który został stworzony z nadzieją na „coś dobrego”. Nowa historia stworzona ze „starych” części, czyli przeróbka czyichś słów. "Moja interpretacja jest taka, że za każdym razem jak zdarza się coś złego, zawsze człowiek otrzymuje siły nie wiadomo skąd, czyli pojawia się ten „impuls”." - pisze Mariia.',

            
        },
        {
            id: 4,
            name: 'La conversation sans les mot',
            image: 'https://github.com/Antonio0806/temporary-files/blob/ic-portal-aukcyjny/la%20conversation.png?raw=true',
            price: '15 PLN',
            author: 'Mariia Yakymenko',
            author_description: 'Urodzona w Ukrainie, obecnie mieszka w Warszawie. Artystka sztuk wizualnych, między innymi - kolaży. Traktuje sztukę w sposób terapeutyczny. Pomaga jej odnaleźć swoje kreatywne strony, a kolaż stanowi dla niej możliwość uwolnienia emocji i sublimacji.',
            description: '„Konwersacja bez słów”        Kolaż odzwierciedlający niektóre relacje, w których czujemy się spokojnie i na tyle komfortowo, że nie musimy nic mówić.'
        },
        {
            id: 5,
            name: 'Peaceful',
            image: 'https://github.com/Antonio0806/temporary-files/blob/ic-portal-aukcyjny/peaceful.png?raw=true',
            price: '15 PLN',
            author: 'Mariia Yakymenko',
            author_description: 'Urodzona w Ukrainie, obecnie mieszka w Warszawie. Artystka sztuk wizualnych, między innymi - kolaży. Traktuje sztukę w sposób terapeutyczny. Pomaga jej odnaleźć swoje kreatywne strony, a kolaż stanowi dla niej możliwość uwolnienia emocji i sublimacji.',
            description: 'Kolaż stanowiący wejście do innego świata. Do świata marzeń i wyobraźni. Może nawet do świata snów?'
        },
        {
            id: 6,
            name: 'Solitude',
            image: 'https://github.com/Antonio0806/temporary-files/blob/ic-portal-aukcyjny/solitude.png?raw=true',
            price: '15 PLN',
            author: 'Mariia Yakymenko',
            author_description: 'Urodzona w Ukrainie, obecnie mieszka w Warszawie. Artystka sztuk wizualnych, między innymi - kolaży. Traktuje sztukę w sposób terapeutyczny. Pomaga jej odnaleźć swoje kreatywne strony, a kolaż stanowi dla niej możliwość uwolnienia emocji i sublimacji.',
            description: 'Samotność w komfortowym jej przejawie.        Tekst na kolażu jest inspirowany piosenką „Solitude” w wersji Billie Holiday. Postać na grafice tańczy, sam ze sobą, eksponując swoją samotność.'
        },
        {
            id: 7,
            name: 'Pole czerwonych maków',
            image: 'https://github.com/Antonio0806/temporary-files/blob/ic-portal-aukcyjny/Diana%20Dubaidulina.JPG?raw=true',
            price: '40 PLN',
            author: 'Diana Gubaidulina',
            author_description: 'Artystka urodziła się w mieście Zaporoże w Ukrainie w 2005 roku, w 2022 roku przeniosła się przez wojnę do Warszawy. Artystka spełnia się w kilku technikach artystycznych takich jak: rysunek, glina, modelarstwo, tworzenie biżuterii, foto, kolaże. Rysunku i innych rodzajów twórczości nauczyła się w Zaporożu, a techniki i sztukę kolażu zaczęła studiować w Warszawie.',
            description: 'Obrazek przedstawia pole czerwonych maków. Z pola wyczuwa się spokój i wdzięk. Te maki można znaleźć wszędzie, zwłaszcza w domu w Ukrainie.'
        },
        {
            id: 13,
            name: 'Krajobraz wyobraźni',
            image: 'https://github.com/Antonio0806/temporary-files/blob/ic-portal-aukcyjny/1.%20krajobraz-wyobra%C5%BAni_digital-collage_.jpg?raw=true',
            price: '30 PLN',
            author: 'Julia Wakuła vel Drolerie',
            author_description: 'Absolwentka wydziału Grafiki ASP w Warszawie. Stypendystka, laureatka konkursów artystycznych. Zajmuje się szeroko pojętą grafiką artystyczną i projektową. Celem jaki stawia przed swoją sztuką jest swego rodzaju recykling znanych obrazów oraz nadanie ich fragmentom nowego znaczenia poprzez umieszczenie w zupełnie odmiennym nich dotychczas kontekście.',
            description: 'Od autorki: Marzycielski kolaż dla osób lubiących bujać w obłokach.  Praca z serii kolaży nagrodzonych w konkursie "Poużywaj sobie! Konkurs na remiks wolnej kultury" zorganizowanym przez Stowarzyszenie Wikimedia Polska. '
        },
        {
            id: 14,
            name: 'Związek odmienności (30 x 30)',
            image: 'https://github.com/Antonio0806/temporary-files/blob/ic-portal-aukcyjny/2.%20Zwi%C4%85zek_odmienno%C5%9Bci_digital-collage.jpeg?raw=true',
            price: '50 PLN',
            author: 'Julia Wakuła vel Drolerie',
            author_description: 'Absolwentka wydziału Grafiki ASP w Warszawie. Stypendystka, laureatka konkursów artystycznych. Zajmuje się szeroko pojętą grafiką artystyczną i projektową. Celem jaki stawia przed swoją sztuką jest swego rodzaju recykling znanych obrazów oraz nadanie ich fragmentom nowego znaczenia poprzez umieszczenie w zupełnie odmiennym nich dotychczas kontekście.',
            description: 'Od autorki: Kolaż przedstawia parę przeciwieństw, która pomimo różnic tworzy harmonijną relację. Praca z serii kolaży nagrodzonych w konkursie "Poużywaj sobie! Konkurs na remiks wolnej kultury" zorganizowanym przez Stowarzyszenie Wikimedia Polska.'
        },
        {
            id: 15,
            name: 'Związek odmienności (21 x 21)',
            image: 'https://github.com/Antonio0806/temporary-files/blob/ic-portal-aukcyjny/2.%20Zwi%C4%85zek_odmienno%C5%9Bci_digital-collage.jpeg?raw=true',
            price: '30 PLN',
            author: 'Julia Wakuła vel Drolerie',
            author_description: 'Absolwentka wydziału Grafiki ASP w Warszawie. Stypendystka, laureatka konkursów artystycznych. Zajmuje się szeroko pojętą grafiką artystyczną i projektową. Celem jaki stawia przed swoją sztuką jest swego rodzaju recykling znanych obrazów oraz nadanie ich fragmentom nowego znaczenia poprzez umieszczenie w zupełnie odmiennym nich dotychczas kontekście.',
            description: 'Od autorki: Kolaż przedstawia parę przeciwieństw, która pomimo różnic tworzy harmonijną relację. Praca z serii kolaży nagrodzonych w konkursie "Poużywaj sobie! Konkurs na remiks wolnej kultury" zorganizowanym przez Stowarzyszenie Wikimedia Polska.'
        },
        {
            id: 16,
            name: 'Traveler (30 x 30)',
            image: 'https://github.com/Antonio0806/temporary-files/blob/ic-portal-aukcyjny/3.Travel_digital-collage.jpg?raw=true',
            price: '50 PLN',
            author: 'Julia Wakuła vel Drolerie',
            author_description: 'Absolwentka wydziału Grafiki ASP w Warszawie. Stypendystka, laureatka konkursów artystycznych. Zajmuje się szeroko pojętą grafiką artystyczną i projektową. Celem jaki stawia przed swoją sztuką jest swego rodzaju recykling znanych obrazów oraz nadanie ich fragmentom nowego znaczenia poprzez umieszczenie w zupełnie odmiennym nich dotychczas kontekście.',
            description: 'Technika: kolaż cyfrowy, wydruk cyfrowy Od autorki: Kolaż stworzyłam z myślą o odczuciach, które towarzyszą mi podczas tworzenia w tej technice.'
        },
        {
            id: 17,
            name: 'Traveler (21 x 21)',
            image: 'https://github.com/Antonio0806/temporary-files/blob/ic-portal-aukcyjny/3.Travel_digital-collage.jpg?raw=true',
            price: '30 PLN',
            author: 'Julia Wakuła vel Drolerie',
            author_description: 'Absolwentka wydziału Grafiki ASP w Warszawie. Stypendystka, laureatka konkursów artystycznych. Zajmuje się szeroko pojętą grafiką artystyczną i projektową. Celem jaki stawia przed swoją sztuką jest swego rodzaju recykling znanych obrazów oraz nadanie ich fragmentom nowego znaczenia poprzez umieszczenie w zupełnie odmiennym nich dotychczas kontekście.',
            description: 'Technika: kolaż cyfrowy, wydruk cyfrowy Od autorki: Kolaż stworzyłam z myślą o odczuciach, które towarzyszą mi podczas tworzenia w tej technice.'
        },
        {
            id: 18,
            name: 'Girls night (A3)',
            image: 'https://github.com/Antonio0806/temporary-files/blob/ic-portal-aukcyjny/4.%20girls-night_analog_collage.jpg?raw=true',
            price: '50 PLN',
            author: 'Julia Wakuła vel Drolerie',
            author_description: 'Absolwentka wydziału Grafiki ASP w Warszawie. Stypendystka, laureatka konkursów artystycznych. Zajmuje się szeroko pojętą grafiką artystyczną i projektową. Celem jaki stawia przed swoją sztuką jest swego rodzaju recykling znanych obrazów oraz nadanie ich fragmentom nowego znaczenia poprzez umieszczenie w zupełnie odmiennym nich dotychczas kontekście.',
            description: 'Technika: kolaż analogowy, pastele, wydruk cyfrowy Od autorki: Praca idealna na prezent dla najlepszej przyjaciółki, z którą lubimy wyskoczyć na miasto i dobrze się bawić.'
                },
        {
            id: 19,
            name: 'Girls night (A4)',
            image: 'https://github.com/Antonio0806/temporary-files/blob/ic-portal-aukcyjny/4.%20girls-night_analog_collage.jpg?raw=true',
            price: '30 PLN',
            author: 'Julia Wakuła vel Drolerie',
            author_description: 'Absolwentka wydziału Grafiki ASP w Warszawie. Stypendystka, laureatka konkursów artystycznych. Zajmuje się szeroko pojętą grafiką artystyczną i projektową. Celem jaki stawia przed swoją sztuką jest swego rodzaju recykling znanych obrazów oraz nadanie ich fragmentom nowego znaczenia poprzez umieszczenie w zupełnie odmiennym nich dotychczas kontekście.',
            description: 'Technika: kolaż analogowy, pastele, wydruk cyfrowy Od autorki: Praca idealna na prezent dla najlepszej przyjaciółki, z którą lubimy wyskoczyć na miasto i dobrze się bawić.'
        },
        {
            id:20,
            name: 'Tryptyk',
            image: 'https://github.com/Antonio0806/temporary-files/blob/8757418fdb7a0abac542dbac715d847fc67e8cb9/W4III_SEM5_2021_2022_SA%C5%81O_JULIA_109102_ZADANIE2CA%C5%81O%C5%9A%C4%86.png?raw=true',
            price: '80 PLN',
            author: 'Julia Sało',
            author_description: 'Absolwentka Społecznej Akademii Nauk (na kierunku grafika). Na co dzień drużynowa 234 WDW Feniks, zawodowo graficzka. Miłośniczka sztuki nowoczesnej i abstrakcji, a przede wszystkim - kolorów.',
            description: 'Seria plakatów podważających otaczającą nas rzeczywistość.'
        },
        {
            id:21,
            name: 'Czego brakuje',
            image: 'https://github.com/Antonio0806/temporary-files/blob/8757418fdb7a0abac542dbac715d847fc67e8cb9/SylwiaAdamczuk.jpg?raw=true',
            price: '80 PLN',
            author: 'Sylwia Adamczuk',
            author_description: 'Na co dzień prowadzi szkolenia z emisji głosu, świadomego oddechu i pozytywnej komunikacji, a ponadto znajduje przestrzeń do zabawy z kolorami na płótnie. Swoje prace traktuje bardzo osobiście - każdy ma swój numer, certyfikat i historię. Wobec tego, nabywca obrazu będzie poproszony o zrobienie sobie zdjęcia na pamiątkę dla autorki pracy.',
            description: 'Płótno, akryl'
        },
        {
            id:22,
            name: 'Dom jest tam gdzie serce',
            image: 'https://github.com/Antonio0806/temporary-files/blob/8757418fdb7a0abac542dbac715d847fc67e8cb9/olena-kulish.jpeg?raw=true',
            price: '80 PLN',
            author: 'Olena Kulish',
            author_description: 'Olena Kulish jest artystką i ilustratorką z Ukrainy, miasta Dniepr. Obecnie mieszka i zajmuje się sztuką w Warszawie. Działa z różnymi mediami i tematami. Jej prace obejmują malarstwo, sztukę cyfrową i kolaże. Olena ma 4-letnie doświadczenie jako ilustratorka cyfrowa, a teraz zaczyna swoją przygodę jako niezależna artystka. W 2022 roku brała udział w rezydencji artystycznej w Galerii Zahęta, a jedna z jej prac zdobyła nagrodę w konkursie na plakat „Wolność Oczami Artystów” i była prezentowana na wystawie w Bratysławie.',
            description: 'Praca „Dom jest tam, gdzie serce” powstała po to, by dać poczucie ciepła i komfortu komuś, kto tego potrzebuje. Kiedy myślimy o domu, każdy pamięta coś innego. Niekoniecznie jest to miejsce zamieszkania, nie jest to konkretny punkt na mapie, nie mieszkanie czy dom. To raczej zbiór uczuć, emocji, wspomnień. Bycie w domu to uczucie. A to uczucie dają nam ludzie, którzy są w pobliżu, małe rzeczy, które bez szczególnego powodu są drogie naszemu sercu, zapachy, które kojarzą się z czymś przyjemnym, chwile, które na zawsze zostają w duszy. Poczucia domu nie można pomylić z niczym, nie można niczym zastąpić i nigdy nie można o nim zapomnieć. Dom jest tam gdzie serce.'
        },
        {
            id:23,
            name: 'Lipowa cisza',
            price: '80 PLN',
            image: 'https://github.com/Antonio0806/temporary-files/blob/8757418fdb7a0abac542dbac715d847fc67e8cb9/dilia.jpeg?raw=true',
            author: 'Dilia',
            author_description: '"Cześć, mam na imię Dilia! O sobie jako artyście mogę powiedzieć, że kocham rzeczy dziwne i niezwykłe i staram się to przekazać nie tylko w swojej twórczości, ale także w życiu. Lubię robić coś nietypowego, więc na tym zdjęciu połączyłam różne techniki. Staram się, aby wszystkie moje prace były wykonywane w taki sposób (czy to poezja, malarstwo itp.), aby każdy mógł zobaczyć tam coś dla siebie i ta praca nie jest wyjątkiem. Za podstawę tej pracy wzięłam dwie kartki A4 bladozielonej i bladoróżowej, bo te kolory są dla mnie najbardziej kojące."',
            description: 'Obraz 45x55, akryl, kolaż na płótnie'
        },
        {
            id:24,
            name: 'bez tytułu',
            price: '100 PLN',
            image: 'https://github.com/Antonio0806/temporary-files/blob/8757418fdb7a0abac542dbac715d847fc67e8cb9/maggyback.jpg?raw=true',
            author: 'MaggyBack (Magdalena Hasenbeck)',
            author_description: 'Arteterapeutka, artystka kolażu analogowego i instruktorka prowadząca od wielu lat warsztaty kolażu. Obecnie głownie w Warszawie na Ursynowie i online.',
            description: 'Praca wykonana w technice kolażu, stworzona w zeszłym roku krótko po wybuchu wojny na Ukrainie.'
        },
        {
            id:25,
            name: 'Moja dłuższa chwila',
            price: '50',
            image:'',
            author: 'Martyna Bekas',
            author_description: 'Uczennica Państwowego Liceum Sztuk Plastycznych. Interesuję się malarstwem tak naprawdę od najmłodszych lat, już w młodszych klasach podstawówki ciągnęło mnie do malowania. Od zawsze fascynowały mnie barwy mnie otaczające (mimo, że zawsze ubieram się na czarno). ',
            description: 'Od autorki: Obraz przedstawia martwą naturę ułożoną przeze mnie z moich ulubionych przedmiotów do malowania. To co namalowałam nie jest czymś głębokim, nie chcę żeby było. Jednak to czego pragnę to to, żeby odbiorca patrzył na pracę z pewnym spokojem i żeby dostrzegł jaką mi przyjemność sprawiła. Sama czynność malowania jest dla mnie ważna - każde pociągnięcie pędzlem przemyślane a kolor dobrany. Namalowanie mi jej zajęło mi dłuższą chwilę'
        },
        {
            id:26,
            name: 'Dyptyk (nie)czysto emocjonalny',
            price: '80',
            image:'',
            author: 'Agnieszka Odziemkowska',
            author_description: 'Dyplomantka na Wydziale Wzornictwa warszawskiej ASP. Na codzień zajmuje się projektowaniem graficznym i projektowaniem produktu, gdzie najważniejsza jest dla niej radykalna empatia wobec użytkowników i użytkowniczek. Malarstwo traktuje jako bezpieczną przestrzenią, gdzie panuje pełna swoboda i brak projektowej dyscypliny. W swoich pracach balansuje na granicy abstrakcji i realizmu, eksperymentując ze strukturą obrazu i techniką malarską. ',
            description: 'Olej na płótnie, 20x30'
        },
        {
            id:27,
            name: 'Łódź',
            price: '50',
            image:'',
            author: 'Siliakova Maryna',
            author_description: 'Urodzona w 1992 roku w Doniecku w Ukrainie, do Polski przeprowadziła się w 2017 roku. Z wykształcenia chemiczka, w Warszawie postanowiła się przekwalifikować - obecnie jest absolwentką projektowania graficznego Społecznej Akademii Nauk. Artystka tworzy zarówno kolaże cyfrowe, jak i analogowe oraz chętnie dzieli się zdobytą wiedzą z otoczeniem. Jej prace były wyróżnianie w wielu konkursach krajowych i międzynarodowych.',
            description: 'Kolaż przedstawia dziewczynę, która mimo trudnych okoliczności pozostaje sobą. Nawet jeśli wokół ciebie jest bardzo mało wsparcia i wydaje się, że nic cię nie powstrzymuje, nie powinnaś zapominać o sobie i swoich zainteresowaniach. Kolaż dla wsparcia najlepszej przyjaciółki! '
        },
        {
            id:28,
            name: 'Mały Elvis',
            price: '50',
            image:'',
            author: 'Ignacy Kamiński',
            author_description: 'Przyjaciel i entuzjasta działalności harcerskiej.',
            description: 'Wymiary: 18 x 24 cm'
        },
        {
            id:29,
            name: 'Portret charakternego obywatela Warszawy',
            price: '50',
            image:'',
            author: 'Ignacy Kamiński',
            author_description: 'Przyjaciel i entuzjasta działalności harcerskiej.',
            description: 'Wymiary: 18 x 24 cm'
        },
        {
            id:30,
            name: 'Nie ma fal',
            price: '30',
            image:'',
            author: 'Nina Brodowska',
            author_description: 'Uczennica XV Liceum Ogólnokształcącego z Oddziałami Dwujęzycznymi im. Narcyzy Żmichowskiej oraz funkcyjna 234 WDW Feniks. Kocha żaby.',
            description: 'Spoiler alert: są fale'
        },

    ];
