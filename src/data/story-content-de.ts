// German story content — all 22 scenes from the client's PDF
// Source: 2026.04.05 Salomon Tempel für Website DIE GESCHICHTE.pdf

export interface Scene {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  body: string[];
}

export interface StoryContent {
  title: string;
  hebrew: string;
  subtitle: string;
  scenes: Scene[];
  sources: {
    title: string;
    intro: string;
    total: string;
    groups: { heading: string; items: string[] }[];
  };
  closing: string;
  closingHebrew: string;
  closingTranslation: string;
}

const storyContentDE: StoryContent = {
  title: "Salomons Tempel",
  hebrew: "\u05d1\u05b5\u05bc\u05d9\u05ea \u05d4\u05b7\u05de\u05b4\u05bc\u05e7\u05b0\u05d3\u05b8\u05bc\u05e9\u05c1",
  subtitle: "22 Szenen durch das heiligste Bauwerk der Antike \u2014 von den Vorh\u00f6fen bis zum Allerheiligsten",
  scenes: [
    {
      id: "s1",
      num: "Szene 01",
      title: "Jerusalem heute / Berg Morija \u2013 Der Ort des Heiligtums",
      subtitle: "Even haSchetijah",
      body: [
        "In Bereschit \u2013 Kapitel 22, Verse 1\u20132 steht: \u201eUnd es geschah nach diesen Dingen, dass G\u2019tt \u2013 HaSchem \u2013 Abraham pr\u00fcfte und zu ihm sprach: \u201aNimm deinen Sohn, deinen einzigen, den du liebst, Jitzchak, und geh in das Land Morija und bringe ihn dort als Brandopfer dar auf einem der Berge, den ich dir nennen werde.\u2018\u201c Dieser Berg wird im Vers 14 \u201aAdonai jireh\u2018 genannt \u2013 \u201aHaSchem wird sehen\u2018 \u2013, was auf die k\u00fcnftige Offenbarung der g\u2019ttlichen Gegenwart hinweist. Nach der \u00dcberlieferung war dies derselbe Ort, auf dem sp\u00e4ter der Tempel errichtet wurde.",
        "In Divrej haJamim Bet \u2013 Kapitel 3, Vers 1 steht: \u201eUnd Schlomo begann, das Haus des Ewigen zu bauen in Jerusalem auf dem Berg Morija, wo der Ewige seinem Vater David erschienen war, an der St\u00e4tte, die David auf der Tenne Ornans, des Jebusiters, bereitet hatte.\u201c",
        "Die Verbindung zu David wird in Schmu\u2019el Bet \u2013 Kapitel 24, Verse 18\u201325 beschrieben: Der Prophet Gad befahl David, auf der Tenne des Jebusiters Aravna (auch Ornan genannt) einen Altar f\u00fcr HaSchem zu errichten. David kaufte diesen Platz f\u00fcr f\u00fcnfzig Schekel Silber und opferte dort Brand- und Heilsopfer. Diese Tenne wurde sp\u00e4ter zum Standort des Altars im Tempel.",
        "In Melachim Alef \u2013 Kapitel 6, Vers 1 wird berichtet, dass Schlomo den Bau des Hauses HaSchem im vierten Jahr seiner Herrschaft begann. Die Wahl dieses Ortes ist also sowohl geschichtlich als auch geistlich begr\u00fcndet: der Platz, an dem Abraham gepr\u00fcft wurde und Jitzchak opfern wollte, wurde zum Zentrum des g\u2019ttlichen Dienstes Israels.",
        "Nach dem Midrasch Bereschit Rabbah Kapitel 12 Vers 9 begann die Sch\u00f6pfung der Welt von diesem Punkt aus: \u201eVon Zion aus wurde die Welt gegr\u00fcndet.\u201c \u2013 denn der Stein, den HaSchem als ersten erschuf, ist der Even haSchetijah \u2013 der \u201aGrundstein\u2018.",
        "Im Talmud \u2013 Joma 54b wird erkl\u00e4rt: \u201eVon dem Ort des Altars wurde die Welt erschaffen.\u201c Der Felsen, auf dem der Altar stand, gilt daher als der Punkt, an dem Himmel und Erde sich ber\u00fchren \u2013 Makom haMizbeach.",
        "Schliesslich fasst der Rambam \u2013 Hilchot Beith haBechira Kapitel 2 Vers 1\u20132 zusammen: \u201eDer Ort, an dem David und Schlomo den Altar errichteten, ist der Ort, an dem Abraham den Altar f\u00fcr Jitzchak baute, an dem Noach opferte nach dem er aus der Arche kam, wo Kain und Hevel opferten, und wo Adam selbst ein Opfer darbrachte, als er erschaffen wurde, von dort wurde die Welt erschaffen.\u201c",
        "Daraus folgt, dass der Berg Morija seit der Erschaffung der Welt der zentrale Ort des g\u2019ttlichen Dienstes war.",
      ],
    },
    {
      id: "s2",
      num: "Szene 02",
      title: "Der damalige Salomon Tempel",
      subtitle: "Beit HaMikdasch",
      body: [
        "In Melachim Alef \u2013 Kapitel 6, Vers 1 steht: \u201eIm vierhundertachtzigsten Jahr nach dem Auszug der Kinder Israel aus dem Land Mizrajim \u2013 \u00c4gypten \u2013, im vierten Jahr der Regierung Schlomos \u00fcber Israel, im Monat Siw, begann er, das Haus des Ewigen zu bauen.\u201c",
        "Dieses Ereignis fand nach j\u00fcdischer \u00dcberlieferung im Jahr 2928 nach der Sch\u00f6pfung statt, was etwa 900 Jahre vor unserer Zeitrechnung entspricht. Der im Vers erw\u00e4hnte Monat Siw (hebr\u00e4isch: Ziw) ist heute unter dem Namen Ijar bekannt \u2013 der zweite Monat des biblischen Kalenders, der auf den Monat Nissan folgt. Der Name \u201aSiw\u2018 bedeutet \u201aGlanz\u2018 oder \u201aLeuchten\u2018 und verweist auf die Jahreszeit, in der das Land Israel in Bl\u00fcte steht. Der Monat Ijar f\u00e4llt im heutigen Kalender ungef\u00e4hr auf die Zeit von April bis Mai.",
        "Die Grundlage f\u00fcr den Tempelbau liegt bereits in der Tora Schemot (Exodus) Kapitel 25, Vers 8: \u201eUnd sie sollen mir ein Heiligtum machen, damit ich unter ihnen wohne.\u201c Dieses Gebot an Mosche diente als geistiges Vorbild f\u00fcr den sp\u00e4teren Bau des Beit haMikdash \u2013 Hauses der Heiligkeit.",
        "In Schmu\u2019el Bet \u2013 Kapitel 7, Verse 12\u201313 sprach HaSchem zu David: \u201eWenn deine Tage erf\u00fcllt sind \u2026 werde ich deinen Sohn nach dir erwecken, und er wird meinem Namen ein Haus bauen.\u201c Damit war festgelegt, dass Schlomo haMelech \u2013 K\u00f6nig Schlomo \u2013 den Auftrag erf\u00fcllen w\u00fcrde, den Tempel zu errichten.",
        "In Melachim Alef \u2013 Kapitel 5, Verse 15\u201326 wird berichtet, dass Schlomo Gesandte zu Chiram Melech Zor \u2013 dem K\u00f6nig von Tyrus \u2013 sandte, um Zedernholz aus dem Libanon zu erhalten. Tausende Holzf\u00e4ller, Steinmetze und Tr\u00e4ger arbeiteten gemeinsam daran, das Material vorzubereiten. Vers 18 beschreibt, dass \u201edie Bauleute Schlomos, die Bauleute Chirams und die Gibli die Steine behauten, um das Haus zu bauen.\u201c",
        "Im selben Kapitel, Vers 7, heisst es: \u201eBeim Bau des Hauses wurde kein Hammer, keine Axt und kein eisernes Werkzeug geh\u00f6rt; denn die Steine waren bereits im Steinbruch fertig behauen.\u201c",
        "Der Talmud \u2013 Sanhedrin 20b \u2013 erkl\u00e4rt, dass kein Eisen auf dem Tempelberg verwendet wurde, weil Eisen Waffen symbolisiert, w\u00e4hrend der Tempel Frieden bringt. Der Rambam \u2013 Hilchot Beit haBechira 1:7 fasst zusammen, dass die Steine ausserhalb des heiligen Bereichs vorbereitet wurden, damit der Tempelberg selbst frei von profanem L\u00e4rm blieb.",
        "Nach Melachim Alef Kapitel 6, Vers 38 dauerte der Bau sieben Jahre: \u201eIm elften Regierungsjahr Schlomos, im Monat Bul, \u2013 dem achten Monat, der heute Cheschwan genannt wird \u2013 wurde das Haus vollendet in allen seinen Teilen.\u201c",
        "Damit wurde das Beit haMikdash haRischon \u2013 der Erste Tempel \u2013 nach sieben Jahren im Jahr 2935 vollendet: ein Haus des Friedens, errichtet in Stille, in dem die Schechina \u2013 die g\u2019ttliche Gegenwart \u2013 wohnte.",
      ],
    },
    {
      id: "s3",
      num: "Szene 03",
      title: "Das erste Tor zum \u00e4usseren Hof",
      subtitle: "Schaar haChitzon",
      body: [
        "In Divrej haJamim Bet \u2013 Kapitel 4, Vers 9 steht: \u201eUnd Schlomo machte den grossen \u00e4usseren Vorhof und den Vorhof des Hauses Chatzer haChitzon, und die Tore zu ihnen \u00fcberzog er mit Bronze.\u201c",
        "Dieser Vers beschreibt die \u00e4usseren Toranlagen und Vorh\u00f6fe des Tempelkomplexes, die K\u00f6nig Schlomo im Rahmen des Ersten Tempels errichten liess. Sie umschlossen das eigentliche Heiligtum und trennten die heiligen Bereiche in abgestufter Form: den \u00e4usseren Hof (Chatzer haChitzon) \u2013 den Bereich, in den das Volk Israel eintreten durfte; den inneren Hof (Chatzer haKohanim) \u2013 den Bereich der Priester; und das eigentliche Haus HaSchems (Beit haMikdash) \u2013 das Heiligtum mit Hechal und Dvir.",
        "Das Dvir \u2013 so wird es im Buch der K\u00f6nige als das Allerheiligste \u2013 Kodesh haKodaschim \u2013 genannt.",
        "Die \u00e4usserste Umfassungsmauer mit ihren beiden Toren diente als \u00dcbergang vom profanen Raum Jerusalems in den heiligen Bezirk des Tempelareals. Diese Tore werden in der \u00dcberlieferung Schaarei haChatzer und Schaarei haChitzon genannt. Sie f\u00fchrten zun\u00e4chst in einen ersten Vorhof \u2013 eine Art Zugangshof f\u00fcr das Volk \u2013, und von dort gelangte man durch ein zweites Tor in den Hof des Tempels, den Chatzer haBait.",
        "Die Masse der Mauer und den Toren sind: Mauer H\u00f6he: ca. 20\u201322 Ellen, 10.5\u201311.55 m. Tor H\u00f6he: 20 Ellen, 10.5 m. Tor Breite: 10 Ellen, 5.25 m. Diese Masse stammen aus der \u00dcberlieferung zum Zweiten Tempel und werden traditionell als Fortsetzung verstanden.",
        "Nach Divrej haJamim Bet 4:9 waren diese Tore aus Zedernholz gefertigt und mit Bronze \u2013 Nechoschet \u2013 \u00fcberzogen. Bronze wurde bereits in Schemot Kapitel 27, Verse 1\u20132 \u2013 f\u00fcr den Brandopferaltar der Stiftsh\u00fctte \u2013 Mischkan \u2013 verwendet, wodurch eine bewusste Verbindung zwischen dem Mischkan in der W\u00fcste und dem Tempel Schlomos hergestellt wurde.",
      ],
    },
    {
      id: "s4",
      num: "Szene 04",
      title: "Die Mauer des Vorhofs",
      subtitle: "Chomat haAzara",
      body: [
        "In Melachim Alef \u2013 Kapitel 6, Vers 36 heisst es: \u201eUnd er baute den inneren Hof mit drei Lagen behauener Steine und einer Lage Zedernbalken.\u201c",
        "Diese Beschreibung bezieht sich auf die Umfassungsmauer der Azara \u2013 Chomat haAzara \u2013, die K\u00f6nig Schlomo um den inneren Tempelhof errichten liess. Sie trennte den \u00e4usseren Hof \u2013 Chatzer haChitzon \u2013, in dem das Volk stand, vom inneren Hof \u2013 Azara oder Chatzer haKohanim \u2013, wo die Priester den Dienst versahen und die Opfer darbrachten.",
        "Die Mischna \u2013 Middot Kapitel 2 Vers 3 \u00fcberliefert zur sp\u00e4teren Zeit des Zweiten Tempels: \u201eDie Mauer der Azara war vierzig Ellen \u2013 21 Meter \u2013 hoch, und es gab drei Tore in der Azara \u2013 eines im S\u00fcden, eines im Norden und eines im Osten \u2013 und \u00fcber ihnen neun Kammern.\u201c Obwohl sich diese Angabe auf den Zweiten Tempel bezieht, wird sie in der Tradition als Fortf\u00fchrung der Masse verstanden, die schon K\u00f6nig Schlomo eingef\u00fchrt hatte.",
        "Je drei Tore gem\u00e4ss Mischna Middot Kapitel 1 Vers 4 der Azara waren nach den Himmelsrichtungen angeordnet: Schaar haMizrach \u2013 das Osttor \u2013 das Nikanor Tor; Schaar haDarom \u2013 das S\u00fcdtor \u2013 des Brennstoffs, das Tor der Erstlinge, das Wasser-Tor; Schaar haZafon \u2013 das Nordtor \u2013 das Tor Jechonja, das Opfer-Tor, das Frauen-Tor.",
        "Der Talmud \u2013 Tamid 30b beschreibt, dass der erste Sonnenstrahl des Morgens \u00fcber das Osttor fiel und den Altar erhellte. Dies diente den Priestern als Zeichen f\u00fcr den Beginn des t\u00e4glichen Opferdienstes \u2013 Korban Tamid shel Schachar.",
        "Der Rambam \u2013 Hilchot Beit haBechira 5:5\u20136 erkl\u00e4rt, dass der innere Hof \u2013 Azara \u2013 den zentralen Ort des Opferdienstes bildete und durch eine Mauer klar vom \u00e4usseren Bereich getrennt war. Nur Priester und bestimmte Leviten durften innerhalb der Azara stehen, w\u00e4hrend das Volk im \u00e4usseren Hof blieb.",
        "So diente die Mauer der Azara zugleich als architektonische Grenze und als Symbol des \u00dcbergangs \u2013 vom \u00e4usseren Bereich der Welt in die N\u00e4he des Ewigen, wo Himmel und Erde sich ber\u00fchren.",
      ],
    },
    {
      id: "s5",
      num: "Szene 05",
      title: "Das zweite Tor zum Priesterhof",
      subtitle: "Azara",
      body: [
        "In Divrej haJamim Bet \u2013 Kapitel 4, Vers 9 steht: \u201eUnd er machte den inneren Hof der Priester und den grossen Hof und die Torfl\u00fcgel, und er \u00fcberzog sie mit Bronze.\u201c",
        "Dieser innere Hof wird in der rabbinischen Literatur Azara genannt. Er bildete das Zentrum des gesamten Tempelkomplexes, den Bereich, in dem die Kohanim \u2013 Priester den t\u00e4glichen Dienst verrichteten und die Opfer darbrachten. Der Name Azara wird im Talmud (Erchin 11a) vom hebr\u00e4ischen Wort Ezra \u2013 Hilfe \u2013 abgeleitet, weil derjenige, der in diesen Hof trat, geistige Hilfe und L\u00e4uterung fand.",
        "Die Mischna \u2013 Middot 2:6 gibt die Masse der Azara an: L\u00e4nge: 187 Ellen, 98 m. Breite: 135 Ellen, 71 m. Diese Angaben beziehen sich auf den Zweiten Tempel, gehen aber \u2013 wie die Kommentatoren betonen \u2013 auf die Masse des Ersten Tempels unter K\u00f6nig Schlomo zur\u00fcck.",
        "Im \u00f6stlichen Teil der Azara stand der Brandopferaltar \u2013 Mizbach haOlah, auf dem die t\u00e4glichen Opfer, das Korban Tamid shel Schachar und shel Ben haArbaim (das Morgen- und das Abendopfer), dargebracht wurden. Diese Regelung geht auf die Tora zur\u00fcck: Schemot 29, Verse 38\u201342 und Bamidbar 28, Verse 3\u20134, wo das t\u00e4gliche Opfergesetz festgelegt ist.",
        "Der Altar \u2013 Mizbach haOlah \u2013 war nach Rambam \u2013 Hilchot Beit haBechira 2:14 das Zentrum des Dienstes und wurde nach genauen Masseinheiten erbaut.",
        "Neben dem Altar \u2013 Mizbach haOlah \u2013 befand sich das Jam haNechoschet \u2013 das Bronzene Meer, ein grosses Wasserbecken auf zw\u00f6lf bronzenen Rindern, wie in Melachim Alef 7, Verse 23\u201326 beschrieben. Es diente den Priestern zur rituellen Waschung vor dem Dienst.",
        "Zus\u00e4tzlich standen dort die zehn Waschbecken \u2013 Kiyorim \u2013, auf kunstvoll gearbeiteten Wagen, erw\u00e4hnt in Melachim Alef 7, Vers 27 ff. Der Rambam \u2013 Hilchot Klei haMikdash 5:15\u201317 beschreibt deren Nutzung f\u00fcr die rituelle Reinigung der Opferteile und Ger\u00e4te.",
      ],
    },
    {
      id: "s6",
      num: "Szene 06",
      title: "Die Gesamtanlage des Tempels",
      subtitle: "Beit haMikdash \u2013 Haus der Heiligkeit",
      body: [
        "In Melachim Alef \u2013 Kapitel 6, Verse 2\u20133 steht: \u201eDas Haus, das Schlomo f\u00fcr den Ewigen baute, war sechzig Ellen lang, zwanzig Ellen breit und dreissig Ellen hoch. Die Vorhalle \u2013 Ulam \u2013 vor dem Haus war zwanzig Ellen lang vor der Breite des Hauses und zehn Ellen tief vor dem Haus.\u201c",
        "Gem\u00e4ss Melachim Alef Kapitel 7 Vers 48\u201349 stand im Heiligtum \u2013 Heichal, die goldenen Leuchter \u2013 Menorot \u2013, der Schaubrottisch \u2013 Schulchan haPanim \u2013 und der goldene R\u00e4ucheraltar \u2013 Mizbach haKetoret.",
        "Gem\u00e4ss Melachim Alef Kapitel 6 Vers 19\u201328 stand im Allerheiligsten \u2013 Kodesch haKodaschim die Bundeslade \u2013 Aron haBrit \u2013, \u00fcber der sich die Fl\u00fcgel der Engel \u2013 Cherubim \u2013 ausbreiteten.",
        "In Divrej haJamim Bet \u2013 Kapitel 3, Verse 4 und 6\u20139 heisst es: \u201eDie Vorhalle an der Vorderseite war zwanzig Ellen lang und ihre H\u00f6he hundertundzwanzig Ellen; und er \u00fcberzog sie innen mit reinem Gold \u2026 und den Boden des Hauses \u00fcberzog er mit Gold.\u201c In Divrej haJamim Bet Kapitel 3 Vers 7 steht: \u201eDie W\u00e4nde, Decke und der Boden waren mit feinstem Gold \u00fcberzogen und mit Schnitzereien von Cherubim, Palmen und Blumenmustern verziert.\u201c",
        "Beth HaMikdasch: L\u00e4nge 60 Ellen, 31.5 m; Breite 30 Ellen, 15.75 m; H\u00f6he 30 Ellen, 15.75 m. Vorhalle \u2013 Ulam \u2013 vom Beth HaMikdasch: L\u00e4nge 20 Ellen, 10.5 m; Tiefe 10 Ellen, 5.25 m; H\u00f6he 120 Ellen, 63 m.",
        "Die gesamte Ausrichtung des Tempels verlief von Ost nach West, wie die Tora es f\u00fcr das Mischkan vorschreibt, in Schemot Kapitel 26, Verse 22 ff.",
        "Nach dem Midrasch Tanchuma \u2013 Pekudei 2 wurde der Tempel als Abbild des himmlischen Heiligtums erschaffen: \u201eWie oben, so unten \u2013 ein Haus f\u00fcr den K\u00f6nig in den H\u00f6hen und ein Haus f\u00fcr den K\u00f6nig auf Erden.\u201c",
        "Der Midrasch Schemot Rabbah 33:6 sagt: \u201eAlles, was HaSchem im Himmel hat, machte Er auch auf Erden: einen Thron oben und einen Thron unten, eine Wohnst\u00e4tte oben und eine Wohnst\u00e4tte unten.\u201c",
        "Die Richtung nach Westen war von zentraler Bedeutung. Der Talmud \u2013 Bava Batra 25a lehrt, dass die Schechina im Westen wohnt, weshalb das Allerheiligste im westlichen Teil des Tempels lag. Der Eintritt von Ost nach West symbolisierte den Weg des Menschen vom Licht der Welt zum innersten Licht der Gegenwart G\u2019ttes.",
      ],
    },
    {
      id: "s7",
      num: "Szene 07",
      title: "Der Brandopferaltar",
      subtitle: "Mizbach haOlah",
      body: [
        "Der Brandopferaltar \u2013 Mizbach haOlah \u2013 stand im \u00f6stlichen Bereich des inneren Hofes der Azara. Sein Aufbau folgte der Anweisung, die HaSchem Mosche f\u00fcr den Altar des Mischkan gegeben hatte, in Schemot Kapitel 27, Verse 1\u20138 steht: \u201eDu sollst einen Altar aus Akazienholz machen \u2026 f\u00fcnf Ellen lang und f\u00fcnf Ellen breit \u2026 und ihn mit Bronze \u00fcberziehen.\u201c",
        "K\u00f6nig Schlomo \u00fcbernahm dieses Vorbild, vergr\u00f6sserte jedoch die Masse und machte den Altar dauerhaft aus Stein und Bronze, wie es im Divrej haJamim Bet Kapitel 4 Vers 1 beschrieben ist: \u201eUnd er machte den Altar aus Bronze, zwanzig Ellen lang, zwanzig Ellen breit und zehn Ellen hoch.\u201c",
        "Der Kern des Altars bestand nach der \u00dcberlieferung aus Steinen und Erdschichten, seine Aussenfl\u00e4chen waren mit Bronze \u2013 Nechoschet \u2013 \u00fcberzogen. Der Rambam \u2013 Hilchot Beit haBechira 2:14\u201315 erkl\u00e4rt, dass der Altar so gebaut war, dass er vollst\u00e4ndig fest auf der Erde stand, ohne Hohlraum darunter, denn das Gesetz verlangte: \u201eDer Altar soll auf der Erde gebaut werden\u201c (Schemot Kapitel 20, Vers 21).",
        "An den vier Ecken des Altars befanden sich H\u00f6rner \u2013 Keranot, die aus dem Material des Altars selbst gefertigt waren (Schemot Kapitel 27, Vers 2). Sie wurden mit dem Blut der Opfer bestrichen, wie in Wajikra Kapitel 4, Vers 7 geboten, und galten als Zeichen der S\u00fchne f\u00fcr ganz Israel.",
        "In Schemot 20, Vers 23 steht: \u201eDu sollst meine Stufen nicht hinaufsteigen, damit deine Bl\u00f6sse nicht enth\u00fcllt werde.\u201c Deshalb gab es keine Treppen, sondern einen glatten Aufgang; Rampe \u2013 Kevesch, den die Priester hinaufgingen, um die Opfer darzubringen.",
        "Brandopferaltar (Mizbach haOlah): L\u00e4nge 20 Ellen, 10.5 m; H\u00f6he 10 Ellen, 5.25 m; Rampe (Kevesch) 32 Ellen, 16,8 m lang; H\u00f6rner (Keranot) 1 Elle, 0.52 m hoch; Plattform (Sovev) 20\u00d720 Ellen, 10.5\u00d710.5 m; Unterbau (Yesod) 1 Elle, 0.52 m hoch.",
        "Die Mischna Middot 5:1 nennt den Abstand vom Brandopferaltar bis zur Ulam mit 22 Ellen, 11.55 Metern.",
        "Der t\u00e4gliche Opferdienst \u2013 Korban Tamid shel Schachar (Morgenopfer) und Korban Tamid shel Ben haArbaim (Abendopfer) \u2013 ist in Schemot Kapitel 29, Verse 38 bis 42 und in Bamidbar Kapitel 28, Verse 3 bis 4 festgelegt. Die Opfer wurden auf dem Mizbach haOlah dargebracht und wurden von Mehl, \u00d6l und Wein begleitet.",
        "In Wajikra \u2013 Kapitel 6, Vers 6 heisst es: \u201eEin ewiges Feuer soll auf dem Altar brennen; es soll nicht erl\u00f6schen.\u201c Dies war das Gebot des Esch Tamid \u2013 des ewigen Feuers \u2013 das st\u00e4ndig auf dem Brandopferaltar zu unterhalten war.",
        "Der Talmud \u2013 Joma 21a z\u00e4hlt den aufsteigenden Rauch des Altars zu den zehn dauerhaften Wundern des Tempels: \u201eDer Rauch des Altars stieg gerade auf zum Himmel, selbst wenn starker Wind wehte.\u201c",
      ],
    },
    {
      id: "s8",
      num: "Szene 08",
      title: "Die zehn Waschbecken auf den Bronzewagen",
      subtitle: "haKiyorim al haMechonot",
      body: [
        "In Melachim Alef \u2013 Kapitel 7, Verse 27\u201330 heisst es: \u201eUnd er machte zehn Gestelle aus Bronze, vier Ellen lang, vier Ellen breit und drei Ellen hoch. Und auf den Gestellen waren Verzierungen von L\u00f6wen, Ochsen und Cherubim.\u201c",
        "In Divrej haJamim Bet \u2013 Kapitel 4, Vers 6 steht: \u201eUnd er machte zehn Becken, f\u00fcnf auf der rechten Seite (S\u00fcd-)Seite und f\u00fcnf auf der linken Seite (Nord-)Seite des Schlomo Tempels im Priesterhof \u2013 Azarat haKohanim, zum Absp\u00fclen der Opferst\u00fccke (Eivarim); das grosse Meer aber war f\u00fcr die Priester, um sich zu waschen.\u201c",
        "Gestelle (Mechonot): L\u00e4nge 4 Ellen, 2.1 m; Breite 4 Ellen, 2.1 m; H\u00f6he 3 Ellen, 1.6 m. R\u00e4der der Gestelle: Durchmesser 1.5 Ellen, 0.79 m nach Melachim Alef Kapitel 7 Vers 33. Becken (Kiyor): Fassungsverm\u00f6gen 40 Bat, ca. 450\u2013500 Liter.",
        "Sie wurden von Chiram ben Isha Almana gefertigt \u2013 Chiram, dem Sohn einer Witwe aus dem Stamm Naftali, dessen Vater aus Tyrus stammte (Melachim Alef Kapitel 7 Vers 13\u201314). Er war der Hauptmeister des Bronzegusses und schuf alle grossen Ger\u00e4te des Tempels.",
      ],
    },
    {
      id: "s9",
      num: "Szene 09",
      title: "Das grosse Bronzemeer",
      subtitle: "Jam haNechoschet",
      body: [
        "In Melachim Alef \u2013 Kapitel 7, Verse 23\u201326 wird dasselbe Werk beschrieben: \u201eUnd er machte das Meer \u2013 gegossen aus Bronze \u2013 zehn Ellen von Rand zu Rand, rund ringsum, f\u00fcnf Ellen hoch und eine Schnur von dreissig Ellen umgab es ringsum. Und es stand auf zw\u00f6lf Rindern, drei nach Norden, drei nach Westen, drei nach S\u00fcden und drei nach Osten.\u201c",
        "In Melachim Alef \u2013 Kapitel 7 Vers 39 steht: \u201eDie zehn Waschbecken stellte er f\u00fcnf an die rechte Seite des Hauses und f\u00fcnf an die linke Seite \u2026 Das Meer aber stellte er auf die rechte Seite des Hauses (vom Tempel ausgesehen), im Osten, gegen S\u00fcden.\u201c",
        "In Divre haJamim Bet \u2013 Kapitel 4 Vers 10 steht: \u201eEr stellte das Meer auf die rechte Seite, \u00f6stlich, gegen S\u00fcden.\u201c",
        "In Divrej haJamim Bet \u2013 Kapitel 4, Verse 2\u20135 steht: \u201eEr machte das gegossene Meer, zehn Ellen vom Rand zum Rand, rund ringsum, f\u00fcnf Ellen hoch, und eine Schnur von dreissig Ellen umgab es ringsum. Es stand auf zw\u00f6lf Rindern \u2026 und es fasste dreitausend Bat Wasser.\u201c",
        "In Melachim Alef Kapitel 7, Vers 25 steht: \u201eDas Becken ruhte auf zw\u00f6lf bronzenen Rindern \u2013 Bakarim \u2013, je drei nach jeder Himmelsrichtung gewandt.\u201c Diese Anordnung symbolisierte die zw\u00f6lf St\u00e4mme Israels, die gemeinsam das Haus HaSchems tragen.",
        "Bronzenmeer (Jam haNechoschet): Durchmesser 10 Ellen, 5.25 m; H\u00f6he 5 Ellen, 2.6 m; Umfang 30 Ellen, 15.75 m; Fassungsverm\u00f6gen 3\u2019000 Bat, ca. 60\u2019000 Liter Wasser. Rinder (Bakarim): H\u00f6he 4 Ellen, ca. 2.1 Meter.",
        "Der Zweck dieses Beckens war die rituelle Waschung der Kohanim \u2013 Priester, wie Schemot \u2013 Kapitel 30, Verse 18\u201321 vorschreibt: \u201eDu sollst auch ein Becken aus Bronze machen \u2026 damit Aharon und seine S\u00f6hne daraus ihre H\u00e4nde und F\u00fcsse waschen, wenn sie zum Dienst herantreten, damit sie nicht sterben.\u201c",
        "Das Jam haNechoschet diente also der Einhaltung dieser g\u2019ttlichen Vorschrift. Der Rambam Hilchot Beit haBechira 3:3\u20134 beschreibt, dass das Bronzemeer oberhalb des Bodenniveaus aufgestellt war und sein Wasser durch Ventile und Kan\u00e4le verteilt wurde.",
      ],
    },
    {
      id: "s10",
      num: "Szene 10",
      title: "Die beiden S\u00e4ulen Jachin und Boaz",
      subtitle: "Amudej Jachin u Boaz",
      body: [
        "In Melachim Alef \u2013 Kapitel 7, Verse 15 bis 22 steht: \u201eUnd er goss zwei S\u00e4ulen aus Bronze, achtzehn Ellen hoch, und ein Kapitell aus Bronze auf jeder S\u00e4ule, f\u00fcnf Ellen hoch. Und er machte Netze von Geflechten und Ketten, und auf den Kapitellen waren hundert Granat\u00e4pfel ringsum. Und er richtete die rechte S\u00e4ule auf und nannte sie Jachin \u2013 Er wird festigen \u2013, und er richtete die linke S\u00e4ule auf und nannte sie Boas \u2013 in ihm ist St\u00e4rke.\u201c",
        "Die Massangaben sind gem\u00e4ss Melachim Alef Kapitel 7 Vers 15\u201322: S\u00e4ulen (ha-amudim): S\u00e4ulenh\u00f6he 18 Ellen, 9.45 m; Kapitellh\u00f6he 5 Ellen, 2.63 m; Gesamth\u00f6he 23 Ellen, 12.08 m; Umfang S\u00e4ule 12 Ellen, 6.3 m; Durchmesser S\u00e4ule 4 Ellen, 2.1 m.",
        "Der K\u00fcnstler war Chiram, der Sohn einer Witwe aus dem Stamm Naftali, dessen Vater aus Tyrus stammte. Er war der Meister des Bronzegusses (Melachim Alef Kapitel 7 Vers 13\u201314).",
        "Die Bedeutung der Ornamente ist in der Schrift selbst nicht ausgelegt, doch der Midrasch Schemot Rabbah 35:5 deutet den Granatapfel \u2013 Rimonim und Lilien \u2013 Schuschannim \u2013 als Symbol f\u00fcr die F\u00fclle der Mizwot: \u201eWie der Granatapfel voll Samen ist, so ist Israel voller Gebote.\u201c",
        "Die Namen Jachin und Boaz werden im Text nicht erkl\u00e4rt. Ihre Deutungen \u2013 \u201aEr wird festigen\u2018 und \u201aIn Ihm ist St\u00e4rke\u2018 \u2013 folgen der hebr\u00e4ischen Wurzel, wie sie in klassischen Kommentaren wie Radak und Ralbag zu Melachim Alef Kapitel 7 Vers 21 verstanden wird.",
        "Die S\u00e4ulen waren nicht tragend gem\u00e4ss Melachim Alef Kapitel 7 Vers 21: \u201eSie trugen weder das Dach noch die Vorhalle, sondern standen frei.\u201c Sie waren rein symbolisch als markierende Schwelle vor dem Tempel.",
        "Ihre Funktion war symbolisch und repr\u00e4sentativ, so wie es der Text selbst nahelegt: Sie stehen \u201avor dem Haus\u2018 und markieren den \u00dcbergang vom \u00c4usseren in den Bereich des Hechal.",
      ],
    },
    {
      id: "s11",
      num: "Szene 11",
      title: "Das Tor zur Vorhalle",
      subtitle: "Schaar haUlam",
      body: [
        "Der Text erw\u00e4hnt keine Stufen zum Tempel. Der Zugang zum Ulam wird im Tanach ohne H\u00f6henangaben beschrieben, und alle bekannten Stufen stammen aus der Mischna und geh\u00f6ren zum Zweiten Tempel. Melachim Alef Kapitel 6 beschreibt den Ulam und seine T\u00fcren detailliert, nennt jedoch keine Treppe oder Stufen.",
        "Die einzigen \u00fcberlieferten Stufen im Tempelbezirk stehen in der Mischna Middot 2:6 und Middot 3:6, und beide beziehen sich ausdr\u00fccklich auf den Zweiten Tempel \u2013 nicht auf den Bau Schlomos. Da der Tempel auf dem Berg Morija stand, wie Divrej haJamim Bet Kapitel 3 Vers 1 berichtet, und der Bereich nachweislich H\u00f6hendifferenzen aufwies, wird daraus architektonisch abgeleitet, dass ein ansteigender Zugang \u2013 wahrscheinlich in Form von Stufen oder einer Rampe \u2013 notwendig gewesen sein k\u00f6nnte, auch wenn der Tanach keine solche Konstruktion erw\u00e4hnt.",
        "In Melachim Alef \u2013 Kapitel 6, Vers 33 heisst es: \u201eUnd er machte f\u00fcr den Eingang zur Vorhalle des Hauses T\u00fcrrahmen aus Olivenholz, viereckig gestaltet.\u201c",
        "Diese T\u00fcren f\u00fchrten vom Priesterhof in den Ulam \u2013 Schaar haUlam \u2013 die goldene Vorhalle des Tempels. Die T\u00fcren waren aus massivem Olivenholz gefertigt, \u00fcberzogen mit feinem Blattgold, in das kunstvolle Ornamente aus Palmen, Bl\u00fcten und Engelgestalten \u2013 Cherubim \u2013 eingraviert waren.",
        "In Melachim Alef \u2013 Kapitel 6, Vers 3 heisst es: \u201eUnd die Halle vor dem Tempel des Hauses war zwanzig Ellen lang nach der Breite des Hauses, und ihre Breite war zehn Ellen vor dem Haus.\u201c",
        "Radak (Rabbi David Kimchi) zu Melachim Alef Kapitel 6 Vers 3 erkl\u00e4rt, dass das Tor selbst diese Dimensionen hatte, weil die gesamte Front offenstand. Somit war das Tor \u00fcber 20 Ellen oder 10,5 Meter hoch und mehr als 10 Meter breit \u2013 ein Werk von \u00fcberw\u00e4ltigender Gr\u00f6sse und Sch\u00f6nheit.",
      ],
    },
    {
      id: "s12",
      num: "Szene 12",
      title: "Die Vorhalle",
      subtitle: "Ulam",
      body: [
        "In Melachim Alef \u2013 Kapitel 6, Vers 3 steht geschrieben: \u201eUnd die Halle vor dem Tempelhaus war zwanzig Ellen lang, vor der Breite des Hauses, und zehn Ellen tief vor dem Haus.\u201c",
        "In Divrej haJamim Bet \u2013 Kapitel 3, Vers 4 heisst es: \u201eDie Vorhalle an der Vorderseite des Hauses war zwanzig Ellen lang und ihre H\u00f6he hundertundzwanzig Ellen (wird jedoch von einigen Kommentatoren als nicht w\u00f6rtlich verstanden), und er \u00fcberzog sie innen mit reinem Gold.\u201c",
        "Vorhalle (Ulam): L\u00e4nge 20 Ellen, 10,5 m; Tiefe 10 Ellen, 5,25 m; H\u00f6he 120 Ellen, 63 m.",
        "Wir treten ein in den Ulam haBayit \u2013 die goldene Vorhalle des Tempels. Dieser Raum war der \u00dcbergang zwischen dem Priesterhof und dem inneren Heiligtum \u2013 ein Ort aus Gold, Zedernholz und Licht.",
        "Die Innenw\u00e4nde waren vollst\u00e4ndig mit Gold \u00fcberzogen, geschm\u00fcckt mit Cherubim \u2013 Engeln \u2013, Palmen und ge\u00f6ffneten Bl\u00fcten, wie es in Melachim Alef Kapitel 6 Vers 29 beschrieben wird: \u201eUnd an allen W\u00e4nden des Hauses ringsum liess er Schnitzwerk von Cherubim, Palmen und offenen Blumen anbringen, innen und aussen.\u201c",
        "Der Boden des Vorhofs \u2013 Ulam \u2013 war ebenfalls mit Gold bedeckt (Divrej haJamim Bet Kapitel 3 Vers 6), sodass der Raum im Sonnenlicht schimmerte wie ein goldener Strom. Wenn die Morgensonne auf die W\u00e4nde fiel, spiegelte sich das Licht in allen Richtungen \u2013 und der Tempel begann zu leuchten.",
        "Der Ulam war der Ort, an dem sich der Kohen Gadol \u2013 Hohepriester \u2013 sammelte und auf seinen Eintritt in das Heiligtum vorbereitete. Sie war kein Raum des Opfers, sondern der inneren Sammlung und Heiligung.",
        "In Hilchot Beit haBechira 6:3 schreibt der Rambam, dass der Zweite Tempel \u201ein derselben Ordnung und mit derselben Heiligkeit\u201c errichtet wurde wie das Haus, das Schlomo baute.",
      ],
    },
    {
      id: "s13",
      num: "Szene 13",
      title: "Das Heiligtum",
      subtitle: "Heichal",
      body: [
        "In Melachim Alef \u2013 Kapitel 6, Vers 2 steht geschrieben: \u201eDas Haus, das K\u00f6nig Schlomo dem Ewigen baute, war sechzig Ellen lang, zwanzig Ellen breit und dreissig Ellen hoch.\u201c",
        "In Melachim Alef \u2013 Kapitel 6, Vers 17 steht: \u201eUnd vierzig Ellen betrug das Haus, n\u00e4mlich der Heichal, der vor dem Allerheiligsten lag.\u201c",
        "Heiligtum (Heichal): Lang 40 Ellen, 20.8 m; Breit 20 Ellen, 10.5 m; Hoch 30 Ellen, 15.75 m.",
        "In Divrej haJamim Bet \u2013 Kapitel 3, Verse 5 bis 7 heisst es: \u201eUnd das grosse Haus, das er baute, \u00fcberzog er mit Zedernholz, und er \u00fcberzog es innen mit reinem Gold, und er machte Palmen und Ketten darauf. Und er schm\u00fcckte das Haus mit kostbaren Steinen zum Glanz. Und das Gold war Gold aus Parwaim. Und er \u00fcberzog das ganze Haus mit Gold \u2013 bis das ganze Haus vollendet war.\u201c",
        "Die W\u00e4nde waren aus Zedernholz, vollst\u00e4ndig mit reinem Gold \u00fcberzogen, verziert mit Cherubim, Palmen und offenen Bl\u00fcten, wie in Melachim Alef Kapitel 6 Vers 29 steht: \u201eUnd an allen W\u00e4nden des Hauses ringsum liess er Schnitzwerk von Cherubim, Palmen und offenen Blumen anbringen, innen und aussen.\u201c",
        "Der Boden bestand ebenfalls aus Gold (Divrej haJamim Bet Kapitel 3 Vers 6), und wenn die Lampen der Menora brannten, reflektierte das Metall ihr Licht, sodass der ganze Raum in goldenem Glanz erstrahlte. Das Gold stammte aus Parwaim, dem feinsten und hellsten Gold der bekannten Welt \u2013 so rein, dass es das Licht wie Feuer zur\u00fcckwarf.",
        "Im Heichal standen die heiligen Ger\u00e4te des t\u00e4glichen Dienstes; die goldenen Leuchter \u2013 Menorot, die Tische der Schaubrote \u2013 Schulchanot Lechem haPanim \u2013, und der R\u00e4ucheraltar aus reinem Gold \u2013 Mizbach haKetoret. Hier stieg der Duft des Ketoret \u2013 des heiligen R\u00e4ucherwerks \u2013 empor, wie in Schemot Kapitel 30 Vers 7\u20138 geboten: \u201eAharon soll darauf wohlriechendes R\u00e4ucherwerk verbrennen \u2013 ein best\u00e4ndiges R\u00e4ucherwerk vor dem Ewigen.\u201c",
        "Der Midrasch erkl\u00e4rt zu Melachim Alef Kapitel 6 Vers 4, dass die Fenster des Tempels \u201aschmal nach innen, weit nach aussen\u2018 waren, damit das Licht hinausstr\u00f6me \u2013 nicht hinein. Denn das Licht Israels sollte die Welt erhellen, nicht sich selbst.",
        "So war der Heichal mehr als ein Raum aus Gold und Zedernholz: Er war das Herz des g\u2019ttlichen Dienstes, die Wohnung des Lichts, in der Himmel und Erde in stiller Heiligkeit zusammentrafen.",
      ],
    },
    {
      id: "s14",
      num: "Szene 14",
      title: "Die goldenen Leuchter",
      subtitle: "Menorot",
      body: [
        "In Melachim Alef \u2013 Kapitel 7, Vers 49 heisst es: \u201eUnd die Leuchter aus reinem Gold standen vor dem inneren Heiligtum, f\u00fcnf zur Rechten und f\u00fcnf zur Linken.\u201c",
        "Gem\u00e4ss Talmud Bavli, Menachot 98b liess K\u00f6nig Schlomo zehn goldene Leuchter anfertigen, f\u00fcnf auf der rechten und f\u00fcnf auf der linken Seite der S\u00fcdseite des Heiligtums.",
        "Nach dem Talmud \u2013 Menachot 98b und dem Rambam \u2013 Hilchot Beit haBechira, Kapitel 3, Halacha 7\u20138, stand zus\u00e4tzlich in der Mitte die urspr\u00fcngliche Menora des Mosche aus dem Mischkan. So befanden sich insgesamt elf Menorot im Heichal \u2013 zehn, die K\u00f6nig Schlomo fertigen liess, und eine, die aus dem Heiligtum der W\u00fcste \u00fcberliefert war.",
        "Der Rambam schreibt: \u201eSchlomo machte zehn Menorot, alle zur Zierde; doch die Menora Mosches allein brannte st\u00e4ndig.\u201c (Hilchot Beit haBechira 3:7)",
        "Nach der arch\u00e4ologischen oder k\u00fcnstlerischen Spekulation war jede Menora etwa 3.5 Ellen = 1.8 Meter hoch, aus einem einzigen St\u00fcck reinen Goldes gefertigt \u2013 Mikschah Achat \u2013 und besass sieben Arme, verziert mit Kelchen, Kn\u00e4ufen und Bl\u00fcten (Schemot Kapitel 25 Vers 31\u201336).",
        "Ihre Gestaltung folgte exakt dem Vorbild, das HaSchem Mosche am Sinai gezeigt hatte: Das Licht der Menora erf\u00fcllte den Heichal mit goldenem Schein. Das \u00d6l, das darin brannte, war das reinste Oliven\u00f6l \u2013 Schemen Sait Zach Katit laMa\u2019or \u2013 \u201azerdr\u00fcckt f\u00fcr das Licht\u2018 (Schemot Kapitel 27 Vers 20). Jede Flamme brannte ruhig, klar, ohne Rauch \u2013 ein Zeichen vollkommener Reinheit.",
        "Raschi erkl\u00e4rt zu Schemot Kapitel 27 Vers 21, dass die westliche Flamme der Menora die Flamme war, aus der die \u00fcbrigen Lichter entz\u00fcndet wurden und die auf besondere Weise l\u00e4nger brannte als alle anderen. Der Talmud \u2013 Menachot 86b \u2013 sagt, dass ihre best\u00e4ndige Dauer ein Zeichen daf\u00fcr war, dass die Schechina in Israel ruhte.",
        "Das Licht der Menora spiegelte sich in den goldenen W\u00e4nden des Heichal wider, und der ganze Raum gl\u00fchte in warmem, lebendigem Licht. Der Midrasch \u2013 Tanchuma Beha\u2019alotecha sagt: \u201eNicht das Licht brauche, sondern das Licht der Menorah ist f\u00fcr euch.\u201c",
        "Die Menora war mehr als ein Leuchter \u2013 sie war das Symbol g\u2019ttlicher Weisheit. Wie das Licht sich in sieben Arme verzweigt, aber aus einer Quelle stammt, so gehen alle Erkenntnisse aus der Tora hervor.",
      ],
    },
    {
      id: "s15",
      num: "Szene 15",
      title: "Die Schaubrottische",
      subtitle: "Schulchanot Lechem haPanim",
      body: [
        "In Divrej haJamim Bet \u2013 Kapitel 4, Vers 8 steht: \u201eEr machte zehn Tische und stellte sie in den Tempel, f\u00fcnf auf der rechten Seite und f\u00fcnf auf der linken Seite.\u201c",
        "Im Talmud \u2013 Menachot 98b \u2013 heisst es: \u201eSchlomo machte zehn Tische \u2026 f\u00fcnf rechts und f\u00fcnf links. Und der Tisch, den Mosche gemacht hatte, stand in der Mitte, und auf ihm wurden die Schaubrote gelegt.\u201c",
        "Diese elf Tische standen im Heichal \u2013 zehn Tische Schlomos zu beiden Seiten, und in ihrer Mitte der Tisch Mosches, der allein f\u00fcr das Lechem haPanim bestimmt war.",
        "Es gibt keine Masse f\u00fcr die Schaubrottische: Der Tanach nennt nur die Existenz, nicht die Dimensionen. Melachim Alef 7:48 erw\u00e4hnt die Tische. Divrej haJamim Bet 4:8 erw\u00e4hnt zehn Tische. Keine Textstelle gibt L\u00e4ngen, Breiten oder H\u00f6hen an.",
        "Die zw\u00f6lf Brote lagen in zwei Reihen zu je sechs, wie in Wajikra Kapitel 24 Vers 5\u20136 beschrieben. Wajikra Kapitel 24 Vers 8 bestimmt, dass sie jeden Schabbat erneuert wurden.",
        "Die Brote wogen 2/10 Efa \u2013 das ist ein halachisches Mass und variiert je nach halachischer Berechnung zwischen 1.6 und 4.9 kg pro Brot.",
        "\u00dcber ihr Wunder sagt der Talmud \u2013 Menachot 96b: \u201eAls man die Brote nach sieben Tagen abnahm, waren sie ebenso frisch wie beim Auflegen.\u201c",
        "Der Midrasch \u2013 Wajikra Rabbah Kapitel 21 Vers 2 \u2013 spricht von der besonderen St\u00e4rke, die denen verliehen wurde, die vom Lechem haPanim assen.",
        "Der Tisch stand im Norden, entsprechend Schemot Kapitel 26 Vers 35 und Rambam, Hilchot Beit haBechira 3:12\u201313, w\u00e4hrend die Menora im S\u00fcden stand. Diese Gegen\u00fcberstellung wird von den Weisen als symbolische Verbindung von materiellem Segen und geistigem Licht beschrieben.",
      ],
    },
    {
      id: "s16",
      num: "Szene 16",
      title: "Der goldene R\u00e4ucheraltar",
      subtitle: "Mizbach haKetoret",
      body: [
        "In Melachim Alef \u2013 Kapitel 7, Vers 48 wird erg\u00e4nzt: \u201eUnd Schlomo machte alle Ger\u00e4te des Hauses des Ewigen: den goldenen Altar, den Tisch f\u00fcr das Schaubrot und die goldenen Leuchter.\u201c",
        "In Schemot \u2013 Kapitel 30, Verse 1 bis 10 heisst es: \u201eUnd du sollst einen Altar machen, um R\u00e4ucherwerk darauf zu verbrennen, aus Akazienholz sollst du ihn machen. Eine Elle lang und eine Elle breit, viereckig soll er sein, und zwei Ellen hoch; und du sollst ihn mit reinem Gold \u00fcberziehen. Und Aharon soll wohlriechendes R\u00e4ucherwerk darauf verbrennen \u2013 jeden Morgen, wenn er die Menora zurichtet, und zwischen den Abenden, wenn er die Menora anz\u00fcndet \u2013 ein best\u00e4ndiges R\u00e4ucherwerk vor dem Ewigen f\u00fcr alle Generationen.\u201c",
        "R\u00e4ucherwerk Altar (Mizbach haKetoret): L\u00e4nge 1 Elle, 0.52 m; Breite 1 Elle, 0.52 m; H\u00f6he 2 Ellen, 1.05 m.",
        "Der Altar des R\u00e4ucherwerks \u2013 Mizbach haKetoret \u2013 stand in der Mitte des Heiligtums \u2013 Heichal \u2013, direkt vor dem Allerheiligsten, zentral nach Osten ausgerichtet. Er war aus Akazienholz \u2013 Azei Schittim \u2013 gefertigt, mit reinem Gold \u00fcberzogen. Die Ecken waren mit vier kleinen H\u00f6rnern \u2013 Keranot \u2013 versehen, und ringsum lief eine goldene Zierleiste \u2013 Zer Zahav.",
        "Zweimal t\u00e4glich, morgens und abends, brachte der Priester \u2013 Kohen \u2013 das heilige R\u00e4ucherwerk \u2013 Ketoret \u2013 dar, wie es in Schemot Kapitel 30 Vers 7\u20138 geboten ist: \u201eAharon soll darauf wohlriechendes R\u00e4ucherwerk verbrennen, jeden Morgen, wenn er die Lampen zurichtet, und zwischen den Abenden, wenn er die Lampen anz\u00fcndet \u2013 ein best\u00e4ndiges R\u00e4ucherwerk vor HaSchem.\u201c",
        "Das Ketoret bestand aus elf geheimen Zutaten, deren genaue Mischung nur die Familie Avtinas kannte. Der Talmud \u2013 Keritot 6a nennt sie: Balsam, Onycha, Galbanum, Weihrauch, Myrrhe, Cassia, Spikenard, Safran, Costus, Zimt und Zuckerkraut (Kilufa eine Art Zimtrinde).",
        "Diese elf D\u00fcfte, einzeln kaum wohlriechend, verbanden sich gemeinsam zu einem vollkommenen und heiligen Duft. Der Rauch des Ketoret stieg in einer vollkommen geraden S\u00e4ule zum Himmel auf \u2013 ohne sich zu neigen oder zu brechen.",
        "Wenn der Hohepriester \u2013 Kohen Gadol \u2013 das Ketoret entz\u00fcndete, stand er in stiller Andacht. Sein Herz erhob sich mit dem Rauch zum Himmel, denn \u2013 wie der Midrasch \u2013 Tanchuma, Tetzave 14 sagt: \u201eDas Ketoret vers\u00f6hnt Himmel und Erde; sein Rauch tr\u00e4gt die Gebete Israels nach oben.\u201c",
        "Die Mischna \u2013 Yoma 4:5 betont, dass das Ketoret das Opfer war, das \u201aHaSchem am liebsten ist\u2018, weil es nicht der Ern\u00e4hrung, sondern dem Geist diente.",
        "So verband der goldene Altar \u2013 Mizbach haKetoret \u2013 die Welt des Menschen mit der Welt des Geistes. Sein Duft erf\u00fcllte das Heiligste aller R\u00e4ume, und inmitten des goldenen Heichal stand er als stiller Zeuge \u2013 ein Symbol f\u00fcr Reinheit, Gebet und den Duft der g\u2019ttlichen Gegenwart.",
      ],
    },
    {
      id: "s17",
      num: "Szene 17",
      title: "Die goldene T\u00fcr zum Allerheiligsten",
      subtitle: "Schaar Kodesh haKodaschim",
      body: [
        "In Melachim Alef \u2013 Kapitel 6, Verse 31\u201332 steht geschrieben: \u201eUnd er machte f\u00fcr den Eingang zum inneren Heiligtum T\u00fcren aus Olivenholz; der T\u00fcrrahmen war f\u00fcnfeckig. Und er schnitzte auf ihnen Cherubim, Palmen und offene Blumen und \u00fcberzog sie mit Gold, und er breitete Gold \u00fcber die Cherubim und \u00fcber die Palmen.\u201c",
        "Dieses Tor \u2013 das Tor zum Allerheiligsten \u2013 Schaar Kodesh haKodaschim \u2013 f\u00fchrte vom goldenen Heiligtum \u2013 Heichal \u2013 direkt in das Kodesh haKodaschim, den heiligsten Raum des gesamten Tempels. Die T\u00fcrfl\u00fcgel waren aus Olivenholz \u2013 Etz Sajit \u2013 gefertigt, dem Holz des Friedens, und vollst\u00e4ndig mit reinem Gold \u2013 Zahav Tahor \u2013 \u00fcberzogen.",
        "Auf dem Tor waren Cherubim, Palmen und offene Bl\u00fcten eingeschnitzt \u2013 kunstvoll vergoldet, sodass das Licht der Menorot sich darin spiegelte. Im Halbdunkel des Heichal gl\u00fchte das Gold in warmem Schimmer \u2013 ein Vorzeichen der g\u2019ttlichen Gegenwart hinter dem Tor.",
        "Hinter diesen T\u00fcren hing der Vorhang \u2013 die Parochet \u2013, der das Allerheiligste vom Heiligtum trennte.",
        "Nur der Kohen Gadol \u2013 Hohepriester \u2013 durfte sie einmal im Jahr, am Jom Kippur, durchschreiten \u2013 nachdem er sich rituell gereinigt, seine Opfer dargebracht und das Blut des S\u00fcndopfers in goldenen Schalen empfangen hatte (Wajikra Kapitel 16). Er trat leise, barfuss und allein hindurch \u2013 mit gesenktem Haupt, in Ehrfurcht vor der Schechina, der g\u2019ttlichen Gegenwart.",
      ],
    },
    {
      id: "s18",
      num: "Szene 18",
      title: "Der Vorhang",
      subtitle: "Parochet",
      body: [
        "In Divrej haJamim Bet \u2013 Kapitel 3, Vers 14 heisst es: \u201eUnd er (Schlomo) machte den Vorhang aus blauem Purpur, rotem Purpur, Karmesin und feinem Leinen; und er machte darauf Cherubim.\u201c",
        "In Schemot \u2013 Kapitel 26, Verse 31\u201333 heisst es: \u201eUnd du sollst einen Vorhang machen aus blauem, rotem und karmesinfarbenem Purpur und gezwirntem Leinen; Cherubim, kunstvoll gearbeitet, sollen darauf sein. Und du sollst den Vorhang unter die Haken h\u00e4ngen und die Lade des Zeugnisses hinter den Vorhang bringen. Und der Vorhang soll euch scheiden zwischen dem Heiligen und dem Allerheiligsten.\u201c",
        "Vor uns h\u00e4ngt die Parochet \u2013 der heilige Vorhang. Er trennte das Heichal vom Kodesh haKodaschim, dem innersten Raum des Tempels, in dem die Bundeslade \u2013 Aron haBrit \u2013 stand.",
        "In Schemot \u2013 Kapitel 26, Vers 1 und Vers 31 steht, dass im Mischkan die Parochet 20 Ellen hoch und 10 Ellen breit war. F\u00fcr den Salomon Tempel gab es keine genauen Angaben.",
        "Vorhang (Parochet): H\u00f6he 20 Ellen, 10.5 m; Breite 10 Ellen, 5.25 m.",
        "Die Parochet war gewebt aus vier heiligen Farben \u2013 jede mit tiefem Sinn: Techelet \u2013 himmelblau, Symbol f\u00fcr den Himmel und die g\u2019ttliche Gegenwart; Argaman \u2013 Purpur, Zeichen k\u00f6niglicher W\u00fcrde; Tola\u2019at Schani \u2013 Karmesinrot, Sinnbild f\u00fcr Opfer und L\u00e4uterung; Schesch Meschusar \u2013 weisses gezwirntes Leinen, Symbol f\u00fcr Reinheit und Licht.",
        "Die Webart selbst war ein Werk h\u00f6chster Kunst: Er bestand aus 72 geflochtenen Str\u00e4ngen, und jeder Strang war aus 24 Einzelf\u00e4den gedreht (Talmud \u2013 Chagiga 13b; Joma 54a). So dicht war der Stoff, dass kein Licht hindurchdrang, und doch, wenn die goldenen Leuchter des Heichal auf ihn schienen, flimmerte er im Glanz des Goldes \u2013 als w\u00e4re er von innen lebendig.",
        "Auf der Oberfl\u00e4che der Parochet waren Cherubim kunstvoll eingewoben.",
        "Hinter ihr ruhte die Bundeslade \u2013 Aron haBrit \u2013 mit den Tafeln des Bundes \u2013 Luchot haBrit \u2013 und den beiden Cherubim aus reinem Gold, deren Fl\u00fcgel einander ber\u00fchrten (Schemot Kapitel 25 Vers 18\u201322).",
        "Der Kohen Gadol \u2013 Hohepriester \u2013 durfte den Vorhang \u2013 die Parochet \u2013 nur einmal im Jahr, am Jom Kippur, durchschreiten. Wie in Wajikra Kapitel 16 Vers 12\u201313 geboten, nahm er \u201aeine Pfanne voller gl\u00fchender Kohlen vom Altar und zwei H\u00e4nde voll feinen R\u00e4ucherwerks\u2018 und brachte sie \u201ahinter den Vorhang\u2018. Er verschwand in die Wolke des Ketoret, die den Raum erf\u00fcllte und das Unsichtbare verh\u00fcllte.",
      ],
    },
    {
      id: "s19",
      num: "Szene 19",
      title: "Das Allerheiligste",
      subtitle: "Kodesh haKodaschim",
      body: [
        "In Melachim Alef \u2013 Kapitel 6, Verse 16\u201320 steht geschrieben: \u201eUnd er baute zwanzig Ellen an der hinteren Seite des Hauses mit Zedernbrettern, vom Boden bis zu den Balken, und baute sie f\u00fcr das Hinterzimmer, das Allerheiligste. Und das innere Heiligtum war zwanzig Ellen lang, zwanzig Ellen breit und zwanzig Ellen hoch, und er \u00fcberzog es mit reinem Gold.\u201c",
        "In Divrej haJamim Bet \u2013 Kapitel 3, Verse 8\u201310 heisst es: \u201eUnd er machte das Allerheiligste, zwanzig Ellen lang und zwanzig Ellen breit, und \u00fcberzog es mit sechshundert Talenten reinem Gold. Und das Gewicht der N\u00e4gel war f\u00fcnfzig Schekel Gold, und auch die Obergem\u00e4cher \u00fcberzog er mit Gold. Und er machte im Allerheiligsten zwei Cherubim aus geschnitztem Holz und \u00fcberzog sie mit Gold.\u201c",
        "Allerheiligste (Kodesch haKodaschim): L\u00e4nge 20 Ellen, 10.5 m; Breite 20 Ellen, 10.5 m; H\u00f6he 20 Ellen, 10.5 m. Ein Raum von vollkommener Symmetrie.",
        "Radak zu Melachim Alef Kapitel 6 Vers 4 erkl\u00e4rt, dass die Fenster nur im Heichal waren. Das Allerheiligste hatte daher keine Fenster und kein irdisches Licht. Die rabbinische \u00dcberlieferung beschreibt, dass der Raum von der Schechina erf\u00fcllt war \u2013 dem Or haSchechina \u2013, dem Licht der g\u00f6ttlichen Gegenwart.",
        "Die W\u00e4nde des Allerheiligsten waren vollst\u00e4ndig mit reinem Gold \u00fcberzogen, wie Melachim Alef Kapitel 6 Vers 20\u201322 berichtet. Nach Divrej haJamim Bet Kapitel 3 Vers 6 war auch der Boden des Hauses mit Gold bedeckt. Die rabbinische Tradition versteht den Raum als vollst\u00e4ndig vergoldet, doch die Schrift nennt keine genaue Angabe zur Decke. Selbst die N\u00e4gel bestanden aus Gold.",
        "Inmitten des Raumes stand die Bundeslade \u2013 Aron haBrit \u2013, auf ihr die goldene Deckplatte \u2013 die Kaporet \u2013, und darauf die beiden Engel \u2013 Cherubim \u2013, aus einem einzigen St\u00fcck Gold gefertigt (Schemot Kapitel 25 Vers 18\u201322). Ihre Fl\u00fcgel breiteten sich \u00fcber die ganze Breite des Raumes aus \u2013 je zehn Ellen, bis sie sich in der Mitte ber\u00fchrten (Divrej haJamim Bet Kapitel 3 Vers 11\u201313). Zwischen diesen Fl\u00fcgeln offenbarte sich die Schechina \u2013 die g\u2019ttliche Gegenwart.",
        "Der Talmud \u2013 Yoma 21b lehrt ein Geheimnis \u00fcber diesen Ort: \u201eDie Lade nahm keinen Raum ein. Obwohl sie im Allerheiligsten stand, verringerte sie nicht dessen Masse.\u201c Das heisst: Die g\u2019ttliche Gegenwart war \u00fcber der Natur, und dieser Raum war der Schnittpunkt zwischen Materie und Geist \u2013 ein Ort, an dem die Welt ihre Grenzen verliert.",
        "Nach der rabbinischen \u00dcberlieferung lag im Kodesh haKodaschim der Even haSchetijah, der Grundstein der Welt. Die Mischna Yoma 5:2 erw\u00e4hnt den Stein, der im Allerheiligsten stand und seit den Tagen der fr\u00fchen Propheten erhalten war. Der Talmud Yoma 54b lehrt, dass von diesem Stein aus die Welt gegr\u00fcndet wurde. Damit war der Standort des Allerheiligsten nicht nur der Mittelpunkt des Tempels, sondern der Ausgangspunkt der Sch\u00f6pfung und der zentrale Ort, an dem die Gegenwart HaSchems auf der Erde ruhte.",
      ],
    },
    {
      id: "s20",
      num: "Szene 20",
      title: "Die beiden grossen goldenen Engel",
      subtitle: "Cherubim",
      body: [
        "In Melachim Alef 6 Vers 23\u201328 steht: \u201eEr machte zwei Cherubim aus Olivenholz \u2013 Etz Sajit \u2013, zehn Ellen hoch; ein Fl\u00fcgel des Cherubs war f\u00fcnf Ellen und der andere Fl\u00fcgel des Cherubs f\u00fcnf Ellen \u2026 und er \u00fcberzog die Cherubim mit Gold.\u201c",
        "In Melachim Alef Kapitel 6 Vers 27 steht: \u201eEr stellte die Cherubim in das innere Haus. Die Fl\u00fcgel des einen Cherub ber\u00fchrten die eine Wand, und die Fl\u00fcgel des anderen Cherubs ber\u00fchrten die andere Wand. In der Mitte des Hauses ber\u00fchrten sich ihre Fl\u00fcgel.\u201c",
        "Divrej haJamim Bet 3,10\u201313 best\u00e4tigt: Die Cherubim standen aufrecht, ihre Gesichter waren nach innen gerichtet \u2013 zum Ort der Bundeslade.",
        "Engel (Cherubim): H\u00f6he 10 Ellen, 5.25 m; Fl\u00fcgell\u00e4nge 5 Ellen, 2.6 m; Fl\u00fcgelspannweite 20 Ellen, 10.5 m.",
        "Die Weisen erkl\u00e4ren zur Form der Cherubim der Bundeslade (Chagiga 13b; Raschi zu Schemot 25,18), dass die Cherubim \u201aGesichter wie Kinder\u2018 hatten \u2013 panim shel tinok \u2013 ein Bild reiner Liebe und N\u00e4he. Dieses Verst\u00e4ndnis wurde auch auf die grossen Cherubim des Tempels \u00fcbertragen: Sie standen als Sinnbild der innigen Beziehung zwischen HaSchem und Israel.",
        "Der Talmud \u2013 Bava Batra 99a \u2013 lehrt \u00fcber die Cherubim der Lade: \u201eWenn Israel den Willen G\u2019ttes tat, wandten sie sich einander zu; wenn nicht, wandten sie sich ab.\u201c Die Ausleger wenden dieses Prinzip auf die Cherubim des Tempels an: Sie spiegelten den Zustand der Beziehung zwischen Israel und seinem G\u2019tt.",
        "Die himmlische Vision des Propheten Jecheskel (Kapitel 1) beschreibt die archetypischen Cherubim: vierfache Gestalten \u2013 Mensch, L\u00f6we, Ochse und Adler. Diese Vision zeigt den \u00fcberirdischen Ursprung der Cherubim: Kr\u00e4fte der Weisheit, Macht, Dienst und Erhabenheit. Die irdischen Cherubim im Tempel standen als Abbild dieser himmlischen Erscheinung.",
      ],
    },
    {
      id: "s21",
      num: "Szene 21",
      title: "Die Bundeslade",
      subtitle: "Aron haBrit",
      body: [
        "In Schemot Kapitel 25 Vers 10\u201322 wird festgelegt, dass die Bundeslade \u2013 Aron haBrit \u2013 aus Akazienholz \u2013 Azei Schittim \u2013 gefertigt wurde. Die Lade war innen und aussen vollst\u00e4ndig mit reinem Gold \u00fcberzogen und von einem goldenen Kranz \u2013 Zer Zahav Saviv \u2013 eingefasst. \u00dcber ihr lag die goldene Deckplatte \u2013 Kaporet \u2013 aus einem einzigen St\u00fcck Gold. Auf dieser standen zwei Cherubim, deren Fl\u00fcgel sich nach oben ausbreiteten und die Deckplatte \u00fcberspannten. Die Gesichter der Cherubim waren einander zugewandt und blickten nach unten, auf den Ort, von dem aus \u2013 wie die Tora sagt \u2013 HaSchem zu Mosche sprach: \u201eVon dort werde ich mit dir reden, von zwischen den beiden Cherubim\u201c (Schemot 25,22).",
        "Bundeslade (Aron haBrit): L\u00e4nge 2.5 Ellen, 1.31 m; Breite 1.5 Ellen, 0.79 m; H\u00f6he 1.5 Ellen, 0.79 m; Transportstangen 2.5 Ellen, 1.3 m lang. Die Transportstangen ragten sichtbar bis in den Heichal hinein (Melachim Alef Kapitel 8 Vers 8).",
        "Melachim Alef 8,6\u201310 berichtet, dass die Priester die Lade in das Allerheiligste \u2013 Kodesh haKodaschim \u2013 setzten, unter die Fl\u00fcgel der grossen Cherubim. Als sie den Raum verliessen, erf\u00fcllte eine Wolke das Haus des Ewigen \u2013 die Offenbarung der Schechina, der g\u2019ttlichen Gegenwart.",
        "Was sich in und neben der Lade befand, wird im Talmud beschrieben. Bava Batra 14b nennt in der Lade die Tafeln des Bundes \u2013 Luchot haBrit. Neben der Lade standen der Krug mit Manna (Schemot Kapitel 16 Vers 33), der Stab Aharons, der gebl\u00fcht hatte (Bamidbar Kapitel 17 Vers 23), und das heilige Salb\u00f6l (Schemot Kapitel 30 Vers 25).",
        "Die Schrift der Tafeln war kein gew\u00f6hnlicher Text; der Midrasch \u2013 Schemot Rabbah Kapitel 47 Vers 4 \u2013 \u00fcberliefert, dass die Gravur \u201adurchbrochen von Licht\u2018 war, sodass selbst die inneren \u00d6ffnungen der Buchstaben wundersam schwebten.",
        "Der Talmud \u2013 Yoma 53b \u2013 lehrt, dass die Stimme G\u2019ttes vom Himmel kam und zwischen den Cherubim \u00fcber der Deckplatte ert\u00f6nte. Dieser Ort war nicht nur ein Beh\u00e4lter f\u00fcr die Tafeln, sondern der Punkt der Offenbarung selbst.",
        "Ein weiteres Wunder nennt Yoma 21a: Die Lade nahm keinen Raum ein. Obwohl sie im Allerheiligsten stand, blieb die gemessene Breite des Raumes unver\u00e4ndert \u2013 ein Hinweis darauf, dass die g\u00f6ttliche Gegenwart jenseits physischer Dimensionen wirkt.",
        "Unter der Lade befand sich nach Yoma 54b der Even haSchetijah, der Fundamentstein. Der Talmud sagt: \u201eVon ihm aus wurde die Welt gegr\u00fcndet.\u201c",
        "Der Midrasch \u2013 Bereschit Rabbah 12,9 \u2013 beschreibt denselben Gedanken: Die Sch\u00f6pfung begann von einem einzigen Punkt aus, von dem HaSchem die Welt ausspannte. Im Ersten Tempel stand die Bundeslade genau \u00fcber diesem Stein. Dadurch wurde das Allerheiligste zum Mittelpunkt der Welt.",
        "So war der Aron haBrit das Herz des Tempels und der Mittelpunkt der Welt: der Ort der Tora, der Ort der Offenbarung, der Platz der Schechina, der Punkt, an dem Himmel und Erde sich ber\u00fchren. Sie ruhte dort \u2013 verborgen und doch gegenw\u00e4rtig \u2013 als der Ursprung der Heiligkeit und der Brennpunkt der Sch\u00f6pfung.",
      ],
    },
    {
      id: "s22",
      num: "Szene 22",
      title: "Die Zerst\u00f6rung und das Schweigen der Schechina",
      subtitle: "Churban Beit haMikdasch",
      body: [
        "Im Jahr 3338 nach der Sch\u00f6pfung \u2013 das entspricht dem Jahr 586 vor der Zeitrechnung \u2013 fiel Jeruschalajim \u2013 Jerusalem, die Stadt des Ewigen, in die H\u00e4nde Babylons.",
        "In Melachim Bet \u2013 Kapitel 25, Verse 8\u20139 steht geschrieben: \u201eUnd Nebusaradan, der Oberste der Leibwache, kam im f\u00fcnften Monat, am siebten Tag des Monats \u2013 im neunzehnten Jahr des K\u00f6nigs Nebukadnezar \u2013 nach Jerusalem. Und er verbrannte das Haus des Ewigen, das Haus des K\u00f6nigs und alle H\u00e4user Jerusalems; jedes grosse Haus verbrannte er mit Feuer.\u201c",
        "Der f\u00fcnfte Monat war der Monat Aw; am 7. Aw begann das Feuer zu brennen, und am 9. Aw stand der Tempel in Flammen \u2013 der Tag, an dem Israel bis heute Tischa beAw, den Gedenktag der Zerst\u00f6rung, begeht. Feuer verschlang den Beit haMikdasch, Gold schmolz an den W\u00e4nden, und der Gesang der Leviten verstummte. Der Wind trug den Rauch \u00fcber die H\u00fcgel Zions \u2013 und der Tempel, das Herz der Welt, lag in Asche.",
        "Doch bevor das Feuer den heiligsten Ort erreichte, war der Aron haBrit \u2013 Bundeslade \u2013 bereits verschwunden. Der Talmud \u2013 Yoma 53b \u2013 erz\u00e4hlt: \u201eK\u00f6nig Joschijahu verbarg die Lade, bevor der Tempel zerst\u00f6rt wurde, zusammen mit der Menora, dem goldenen Tisch und dem Krug mit Manna.\u201c Nach rabbinischer \u00dcberlieferung liess Joschijahu sie in verborgenen Kammern unter dem Tempelberg einschliessen \u2013 nicht zerst\u00f6rt, sondern verborgen, bis der Dritte Tempel errichtet wird.",
        "Der Prophet Jecheskel sah in einer Vision, wie die Schechina \u2013 die g\u2019ttliche Gegenwart \u2013 den Tempel verliess, schrittweise und traurig, bis sie auf dem \u00d6lberg verweilte: \u201eUnd die Herrlichkeit des Ewigen hob sich auf aus der Mitte der Stadt und stand auf dem Berg \u00f6stlich der Stadt.\u201c (Jecheskel 11:23)",
        "HaSchem verliess den Tempel nicht, um Israel zu verlassen, sondern um Israel ins Exil zu begleiten. Als die Feinde das Heiligtum betraten, sahen sie die Cherubim noch immer einander zugewandt. Sie lachten \u2013 doch sie verstanden nicht, dass sie Zeugen des letzten Zeichens g\u2019ttlicher Liebe wurden. Denn die Schechina wich nicht, sie verbarg sich \u2013 wie die Lade, wie das Licht, wie die Hoffnung. So begann die lange Nacht des Exils, doch in der Dunkelheit blieb eine Verheissung.",
        "Die Prophezeiung der Erl\u00f6sung ist im Buch Jeschajahu zu finden: \u201eSteh auf, werde Licht, denn dein Licht kommt, und die Herrlichkeit des Ewigen erstrahlt \u00fcber dir.\u201c (Jeschajahu 60,1) \u2013 die Erl\u00f6sung Israels wird durch Licht kommen, das Licht der Schechina.",
        "Und Maimonides \u2013 Rambam \u2013 schreibt in den Hilchot Melachim 11:1: \u201eDer K\u00f6nig Maschiach wird aufstehen und das K\u00f6nigreich Davids in seiner fr\u00fcheren Herrlichkeit wiederherstellen. Er wird den Tempel bauen und die Zerstreuten Israels sammeln.\u201c",
        "So endet die Geschichte des Ersten Tempels \u2013 nicht mit dem Klang des Untergangs, sondern mit dem Echo einer Verheissung: Dass der Ort, an dem die Schechina einst wohnte, wieder erstrahlen wird \u2013 und dass aus der Asche von Zion erneut, das Licht des Ewigen aufgehen wird.",
      ],
    },
  ],
  sources: {
    title: "Quellenangaben",
    intro: "F\u00fcr die Bearbeitung dieses Films \u00abder Salomonische Tempel\u00bb wurden 42 Quellen herangezogen.",
    total: "Diese Arbeit enth\u00e4lt insgesamt 246 einzelne Quellenverweise.",
    groups: [
      {
        heading: "TANACH",
        items: ["Bereschit", "Schemot", "Wajikra", "Bamidbar", "Dewarim", "Jehoschua", "Schofetim", "Schmu\u2019el Alef", "Schmu\u2019el Bet", "Melachim Alef", "Melachim Bet", "Jeschajahu", "Jecheskel", "Trei Assar", "Tehillim", "Mischlei", "Divrej haJamim Alef", "Divrej haJamim Bet"],
      },
      {
        heading: "MISCHNA",
        items: ["Middot", "Yoma", "Tamid", "Kelim", "Shekalim", "Berachot"],
      },
      {
        heading: "TALMUD",
        items: ["Bavli, Berachot", "Bavli, Yoma", "Bavli, Bava Batra", "Bavli, Sanhedrin", "Bavli, Menachot", "Bavli, Keritot", "Bavli, Tamid", "Bavli, Sukkah", "Bavli, Chagiga", "Bavli, Arachin"],
      },
      {
        heading: "MIDRASCHIM",
        items: ["Bereschit Rabbah", "Schemot Rabbah", "Wajikra Rabbah", "Bamidbar Rabbah", "Tanchuma (Pekudei, Beha\u2019alotecha, Tetzave usw.)", "Eicha Rabbah"],
      },
      {
        heading: "HALACHISCHE QUELLEN",
        items: ["Rambam \u2013 Hilchot Beit haBechira", "Rambam \u2013 Hilchot Melachim", "Rambam \u2013 Hilchot Klei haMikdash"],
      },
      {
        heading: "SONSTIGE QUELLEN",
        items: ["Radak (Rabbi David Kimchi)", "Raschi (Rabbi Schlomo ben Jizchak)", "Ralbag (Rabbi Levi ben Gershon)"],
      },
    ],
  },
  closing: "Der Tempel wurde zerst\u00f6rt, doch seine Erinnerung wurde nie ausgel\u00f6scht. Jedes Jahr wenden sich Juden auf der ganzen Welt nach Jerusalem und fl\u00fcstern dieselbe uralte Hoffnung:",
  closingHebrew: "l\u2019schana ha-ba\u2019a bi\u2019Jeruschalajim",
  closingTranslation: "\u201eN\u00e4chstes Jahr in Jerusalem.\u201c",
};

export default storyContentDE;
