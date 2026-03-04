export interface Project {
    id: string;
    year: string;
    title: string;
    location: string;
    category: string;
    description?: string;
    images: string[];

    auftragsart?: string;
    bauherrschaft?: string;
    gebaeudevolumen?: string;
    gebaeudekosten?: string;
    energiestand?: string;
    adresse?: string;
    realisierung?: string;
}

const imageImports = import.meta.glob<{ default: string }>('/src/assets/projects/**/*.{jpg,jpeg,png,webp}', { eager: true });

export const projectData: Record<string, Project> = {
    '013': {
        id: '013',
        year: '2024',
        title: 'Arealentwicklung Wytheid',
        location: 'Erstfeld',
        category: 'WETTBEWEBSBEITRAG (6. PREIS)',
        auftragsart: 'Projektwettbewerb (6.Preis)',
        bauherrschaft: 'Gemeinde Erstfeld, Gotthardstrasse 99, 6472 Erstfeld',
        gebaeudevolumen: '16’054.0 m3',
        energiestand: 'Minergie-P-Eco',
        adresse: 'Areal Wytheid, Schlossbergstrasse 11, 6472 Erstfeld',
        images: [],
    },
    '011': {
        id: '011',
        year: '2024',
        title: 'Erweiterung Primarschule Guthirt',
        location: 'Zug',
        category: 'WETTBEWEBSBEITRAG',
        auftragsart: 'Projektwettbewerb',
        bauherrschaft: 'Baudepartement Stadt Zug, Abteilung Hochbau, Stadthaus Gubelstrasse 22, 6300 Zug',
        gebaeudevolumen: '32’781.0 m3',
        energiestand: 'Minergie-P-Eco',
        adresse: 'Schule Guthirt, Mattenstrasse 2, 6300 Zug',
        images: [],
    },
    '006': {
        id: '006',
        year: '2023',
        title: 'Dreifachsporthalle',
        location: 'Stans',
        category: 'WETTBEWERBSBEITRAG',
        auftragsart: 'Projektwettbewerb',
        bauherrschaft: 'Kanton Nidwalden Baudirektion, Buochserstrasse 1, 6371 Stans',
        gebaeudevolumen: '27’407.5 m3',
        gebaeudekosten: '17.57 M. CHF (Ziel Wbw)',
        energiestand: 'Minergie-P-Eco',
        adresse: 'Kollegium St. Fidelis, Parzelle 570, Mürgstrasse 20, 6370 Stans',
        images: [],
    },
    '005': {
        id: '005',
        year: '2022', // Projektstart
        title: 'Ersatzneubau und Scheunenausbau',
        location: 'Breitfeld',
        category: 'WETTBEWERB (1. PREIS)',
        realisierung: '2022-2024',
        auftragsart: '1. Preis Architekturwettbewerb im selektiven Verfahren, ARGE mit Jäger Charpié Architekten',
        bauherrschaft: 'Jenni Verwaltungs AG, Luzernerstrasse 1, 6343 Risch-Rotkreuz',
        gebaeudevolumen: 'Ersatzneubau 5166.5m3, Scheune 2588.5m3 (SIA 416)',
        energiestand: 'Minergie-P-Eco',
        adresse: 'Breitfeld 1, 6343 Risch-Rotkreutz',
        description: 'Der allseitig orientierte Neubau ist auf die, durch die Strasse akzentuierte, Geländekante gesetzt. Im Vergleich zum Vorgängerbau leicht ausgedreht, folgt das Gebäude den Höhenlinien des Hügels und besetzt die Ecke des Weilers. Diese Orientierung an markanten Geländeformen steht im Sinne der traditionellen Art und Weise wie ein Siedlungsplatz in der Topografie gewählt wird.Der ortsbaulichen Setzung folgend, zeigt sich das Gebäude als allseitig orientiertes Punkthaus. Das einfache Volumen über quadratischem Fussabdruck wird von einem Kreuzgiebel bekrönt. Das über zwei Geschosse reichende Dach bricht das grosse Volumen, zeichnet die beiden Wohngeschosse ab, lässt das öffentliche Erdgeschoss hervortreten und nimmt Bezug zu den mächtigen Dächern der umliegenden Bauernhäuser sowie dem einprägsamen Vorgängerbau.Der punktförmige Neubau bildet zusammen mit der länglichen Scheune ein gehöftartiges Ensemble. Der Grünraum umfliesst die beiden Gebäude und bindet sie in den übergeordneten Landschaftsraum ein.Der Neubau ist mit seinen unterschiedlichen Funktionen über drei Ebenen organisiert. Dies ermöglicht ein Entflechten der Aussenbereiche und Sitzplätze.Die Aufteilung der Aussensitzflächen in kleinere Teile ermöglicht es, dass das Terrain natürlich und mit wenigen Stützmauern geformt werden kann. Das Restaurant als öffentlichste Nutzung befindet sich auf der obersten Ebene - der Ankuftsebene. Der drunterliegende Saal, welcher nur für geladene Gäste gedacht ist, befindet sich auf der zweiten Ebene – der privateren Zwischenebene. Der Kiosk ist auf der unteren Ebene angeordnet und direkt an die Minigolfanlage und die Scheune angeknüpft.\n\nMit dem Ersatzneubau des Gasthofes können alle Nutzungen in einem kompakten Volumen vereint werden. Durch die Anordnung der einzelnen Nutzungen in der Vertikalen werden die einzelnen Nutzergruppen entflochten.Der Neubau greift vorhandene architektonische Elemente auf. Der helle Betonsockel, die Holzfassade und das mächtige Dach nimmt Bezug auf die traditionelle Gliederung und Materialität der ruralen Bauten.Die schaufensterartigen Öffnungen im Erdgeschoss und der fein gegliederte Sockel kennzeichnen die öffentliche Nutzung des Restaurants.Der Neubau ist in hybrider Bauweise geplant: Die öffentlichen Restaurant-Geschosse sowie das Treppenhaus in Beton, die Wohngeschosse als Holzkonstruktion. Beton und Holzkonstruktionen sind besonders effizient in Bezug auf Brandschutz, Akustik und Raumkomfort. Die Langlebigkeit der Materialien macht sich auch langfristig im Unterhalt bezahlt.Der nachhaltigen Bauweise wird auf verschiedenen Ebenen Rechnung getragen:Der Neubau hat eine kompaktes und einfaches Volumen mit kleinem Fussabdruck. Dies reduziert die zu dämmende Aussenhülle.Der Neubau kann auf das bestehende Fundament des Vorgängergebäudes gebaut werden, damit ist kein grosser Mehraushub notwendig. Die Verwendung von Holz als nachwachsender und localer Baustoff und die Verwendung von Recyclingbeton reduziert die Graue Energie. Die Dachflächen können mit PV-Indach Elementen gedeckt werden.Beim Umbau der Scheune wird der Eingriff in die bestehende Struktur minimiert.',
        images: [],
    },
    '003': {
        id: '003',
        year: '2021', // Projektstart
        title: 'Neubau Mehrzweckanlage',
        location: 'Effretikon',
        category: 'WETTBEWEBSBEITRAG (6. PREIS)',
        auftragsart: '6. Preis Architekturwettbewerb im offenen Verfahren (ARGE mit Studio Zrh)',
        bauherrschaft: 'Stadt Illnau-Effretikon, Abteilung Hochbau, Märtplatz 29, 8307 Effretikon',
        gebaeudevolumen: '25’132.5m3 (SIA 416)',
        gebaeudekosten: 'ca. 15 M. CHF (Ziel Wbw)',
        energiestand: 'Minergie-P-Eco',
        adresse: 'Grundstück IE1185, Illnauerstrasse, 8307 Illnau-Effretikon',
        description: 'Die neue Mehrzweckanlage befindet sich am östlichen Ortsrand von Effretikon, in unmittelbarer Nähe zur Schule sowie zum Sportzentrum Eselriet. Dieser Stadtteil ist von vielfältigen gemeinschaftlichen Nutzungen geprägt. Der Standort bildet zudem den Übergangsbereich von der Landwirtschaft hin zur öffentlich genutzten Zone. Hinsichtlich des gegenüberliegenden Waldes, stellt die Mehrzweckanlage den räumlichen Eintritt in die städtische Bebauung dar. Gleichzeitig befindet sich die Mehrzweckanlage direkt an der Illnauer- und Eselrietstrasse. Das Projekt ist, dank der Erschliessung an der Illnauerstrasse, optimal an das örtliche Verkehrsnetz angebunden. Die dicht besiedelten Gebiete können von hier schnell erreicht werden.\n\nDas gesamte Raumprogramm vereint sich in einem kompakten, rechteckigen Baukörper mit einer Fassadenlänge von 54 m zur Illnauerstrasse und 116 m zur Eselrietstrasse. Das langgestreckte und grossformatige Volumen stellt einen gestalterischen Bezug zu den öffentlichen Bauten her und schafft zugleich, als "Eintritt in die Stadt", eine angemessene Akzentuierung.Das Gebäude übernimmt die leichte Neigung des Geländes und bettet sich somit harmonisch in dieses ein. Daraus gehen die drei Höhenversprünge hervor, welche die lange Fassade nicht nur gliedern, sondern das dreigeteilte Raumprogramm (Sicherheit, Tiefbau, Entsorgung) auch nach Aussen vermitteln. Diese Gliederung wird zusätzlich durch den Richtungswechsel des Pultdaches verstärkt.\n\n„Alles unter einem Dach“ – sämtliche räumliche Nutzungen werden in einem Volumen zusammengefasst. Das grosse, rechteckige Gebäude setzt sich aus drei beheizten Riegeln zusammen. Diese verlaufen parallel zueinander und werden durch aufgespannte Zwischenräume voneinander getrennt. In diesen - durch Pultdächer aufgespannten - Räumen ordnen sich die temperierten Einstellhallen an. Betrieblich vorteilhaft werden hier alle Räume durch eine innere Fahrgasse erschlossen. Diese dient bei Bedarf auch als Umschlags- oder winterliche Arbeitsfläche. Ebenfalls ermöglicht sie die konsequente Trennung von Einstellhalle und Diensträumen sowie die Minimalisierung von Eingangssituationen respektive Torbauten.\n\nDas Gebäude verläuft parallel zur Illnauerstrasse und wird über die neu gestaltete Eselrietstrasse erschlossen. Jede Funktion (Sicherheit, Tiefbau, Entsorgung) verfügt über eine eigene Zufahrt, welche direkt zur inneren Fahrgasse führt.Für die ausrückende Feuerwehr ist an der Illnauerstrasse eine separierte Ausfahrt vorgesehen. Dies stellt sicher, dass wegfahrende Feuerwehrfahrzeuge nicht durch einrückende behindert werden.Durch die zentrale Platzierung auf der Parzelle ist das Gebäude allseitig zugänglich und umfahrbar. An die aussenliegende Erschliessung gliedern sich die einzelnen Nutzungen des Werkhofs. Die Parkierungsmöglichkeiten für Besucher und Mitarbeiter finden sich parallel zur Erschliessungsstrasse.\n\nDas Projekt wird als Holzbau ausgeführt. Regionale Gewerbe- und Landwirtschaftsbauten dienen hier als Inspiration. Das Material Holz prägt damit wesentlich das Erscheinungsbild des Gebäudes. Die Fassade wird durch vertikale Holzstäbe gegliedert sowie verfeinert und erhält so eine ausgearbeitete Eleganz.\n\nDie Tragstruktur ist ebenfalls in Holzbauweise erstellt und auf das Optimum reduziert. Sie besteht aus Stützen, Längsbalken und einem Holzdach.Die herkömmliche Holzständerkonstruktion wird soweit wie möglich vorfabriziert und vor Ort aufgerichtet. Die hinterlüftete Fassade ist mit einer Holzschalung verkleidet. Alle Holzteile werden mit einer Mittelschichtlasur in Anthrazit eingefärbt, was dem Projekt eine starke Identität verleiht.Die Bauweise in Holz liefert einen wichtigen Beitrag zur Erreichung der formulierten Kosten- und Nachhaltigkeitsziele. Die Verwendung von heimischen Holzarten in Verbindung mit lokalem Handwerk führt zu einer regionalen Wertschöpfung. Das Untergeschoss wird aufgrund von teuren Aushubarbeiten auf einem Minimum belassen. Die Abgrenzung von beheizten, temperierten und unbeheizten Räumen kann einfach und logisch vollzogen werden.',
        images: [],
    },
    '001': {
        id: '001',
        year: '2019',
        title: 'Dreifamilienhaus',
        location: 'Ebikon',
        category: 'DIREKTAUFTRAG',
        auftragsart: 'Direktauftrag',
        bauherrschaft: 'Privat',
        gebaeudevolumen: '1’820m3 (SIA 416)',
        energiestand: 'Minergie-P-Eco',
        description: 'Die Aufgabe war, ein Einfamilienhaus aus den 1970er durch ein Dreifamilienhaus zu ersetzen als Verdichtungsmassnahme im gewachsenen Quartier. Der Ort ist geprägt durch die umliegenden mehrheitlich verputzten Einfamilienhäuser und die dahinterliegende Landwirtschaftszone. Im Hintergrund ist die Silhouette des Dottebergs präsent. Der mit Erdtönen verputzte Massivbau evoziert durch die verschiedene variierende Putzarten und Friese eine gewisse Leichtigkeit in diesem dichten Umfeld und tritt in einen Dialog mit der vorhandenen Kulisse. Ein grosses Hofartiges Oblicht über der Erschliessung lässt das Licht für das am Hang liegende Gebäude bis in das unterste Wohngeschoss zirkulieren. Die drei unabhängigen Wohneinheiten sind als Geschosswohnungen im Schnitt übereinandergestapelt, wobei bezüglich der Hanglage jede Wohnung von einem grosszügigen Aussenraum profitiert. Die Wohnräume sind südöstlich angeordnet und haben einen Bezug zum jeweiligen Wintergarten, zudem haben alle Zimmer einen direkten Zugang auf eine Terrasse. Der in Minergie- A konzipierte Massivbau entspricht dem neusten Stand der Technik, mit dem ein hohes Komfortniveau bezüglich Luftqualität und thermischer Behaglichkeit erreicht wurde. Durch die starke Nutzung regenerativer Energie, die optimierte Gebäudetechnik und den Einsatz effizienter Geräte resultiert ein minimaler Restenergiebedarf.',
        images: [],
    }
};

Object.keys(imageImports).forEach(path => {
    const match = path.match(/\/projects\/(\d+)\//);
    if (match) {
        const id = match[1];
        if (projectData[id]) {
            // Collect images
            projectData[id].images.push(imageImports[path].default);
        }
    }
});

// Sort array for lists
export const projects = Object.values(projectData).sort((a, b) => b.year.localeCompare(a.year));
