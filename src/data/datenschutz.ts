/**
 * Inhalte der Datenschutzerklärung.
 *
 * Ein Abschnitt besteht aus Blöcken:
 * - string               → Absatz
 * - { heading }          → Zwischenüberschrift
 * - { list }             → Aufzählung
 * - { contact: true }    → Kontaktblock (Daten aus impressum.ts)
 */
export type PrivacyBlock = string | { heading: string } | { list: string[] } | { contact: true }

export type PrivacySection = {
  title: string
  blocks: PrivacyBlock[]
}

export const datenschutz = {
  updatedAt: '7. November 2026',
  sections: [
    {
      title: '1. Allgemeine Informationen',
      blocks: [
        'Der Schutz personenbezogener Daten und die vertrauliche Behandlung schulischer Informationen sind für Edugo-Learn von besonderer Bedeutung.',
        'Diese Datenschutzerklärung informiert darüber, wie im Zusammenhang mit der Website https://edugo-learn.ch/, der Lernplattform, den angebotenen Anwendungen sowie der Kommunikation mit Edugo-Learn Personendaten bearbeitet werden.',
        'Die Bearbeitung von Personendaten richtet sich insbesondere nach dem Schweizer Bundesgesetz über den Datenschutz (DSG) und der Datenschutzverordnung (DSV). Soweit weitere Datenschutzvorschriften, insbesondere kantonale Datenschutzgesetze oder die europäische Datenschutz-Grundverordnung (DSGVO), anwendbar sind, werden diese zusätzlich berücksichtigt.',
        'Personendaten sind alle Angaben, die sich auf eine bestimmte oder bestimmbare natürliche Person beziehen.',
        'Edugo-Learn verfolgt das Ziel, nur diejenigen Personendaten zu bearbeiten, die für die Bereitstellung, Verwaltung, Sicherheit und Weiterentwicklung der angebotenen Dienstleistungen erforderlich sind.',
      ],
    },
    {
      title: '2. Verantwortliche Stelle',
      blocks: [
        'Verantwortlich für die Datenbearbeitung im eigenen Verantwortungsbereich sind die Betreiber von Edugo-Learn:',
        { contact: true },
        'Edugo-Learn befindet sich in der Gründungsphase. Die Eintragung als Kollektivgesellschaft in das Schweizer Handelsregister ist vorgesehen.',
        'Bei Fragen zum Datenschutz oder zur Ausübung datenschutzrechtlicher Ansprüche können sich betroffene Personen an die oben genannte Kontaktadresse wenden.',
      ],
    },
    {
      title: '3. Erhebung und Bearbeitung von Personendaten',
      blocks: [
        'Abhängig von der Nutzung unserer Website und Anwendungen können folgende Kategorien von Personendaten bearbeitet werden:',
        { heading: 'a) Technische Zugriffsdaten' },
        'Beim Besuch der Website oder bei der Nutzung unserer Anwendungen können technische Informationen anfallen. Dazu gehören insbesondere:',
        {
          list: [
            'IP-Adresse',
            'Datum und Uhrzeit des Zugriffs',
            'Aufgerufene Seiten und Funktionen',
            'Browsertyp und Browserversion',
            'Betriebssystem und Gerätetyp',
            'Technische Fehler- und Sicherheitsinformationen',
          ],
        },
        'Diese Daten dienen insbesondere dem Betrieb, der Stabilität, der Fehlerbehebung und der Sicherheit unserer Systeme.',
        { heading: 'b) Kontakt- und Kommunikationsdaten' },
        'Bei einer Kontaktaufnahme per E-Mail, Telefon oder über gegebenenfalls bereitgestellte Kontaktformulare bearbeiten wir die übermittelten Angaben, insbesondere Namen, E-Mail-Adressen, Telefonnummern und Nachrichteninhalte.',
        'Diese Daten verwenden wir zur Bearbeitung der jeweiligen Anfrage und für die damit zusammenhängende Kommunikation.',
        { heading: 'c) Benutzer- und Kontodaten' },
        'Soweit für die Nutzung unserer Lernplattform Benutzerkonten erforderlich sind, können insbesondere folgende Informationen bearbeitet werden:',
        {
          list: [
            'Name oder Benutzerkennung',
            'E-Mail-Adresse',
            'Zugehörigkeit zu einer Schule oder Bildungseinrichtung',
            'Benutzerrolle und Zugriffsberechtigungen',
            'Für die Anmeldung notwendige Authentifizierungsdaten',
            'Technische Konto- und Sitzungsinformationen',
          ],
        },
        { heading: 'd) Lern- und Nutzungsdaten' },
        'Bei der Verwendung entsprechender Lernfunktionen können beispielsweise Lernaktivitäten, bearbeitete Aufgaben, Eingaben, Antworten, Lernfortschritte und andere nutzungsbezogene Informationen anfallen.',
        'Der Umfang der Bearbeitung richtet sich nach den tatsächlich verwendeten Funktionen und den mit den beteiligten Schulen vereinbarten Leistungen.',
      ],
    },
    {
      title: '4. Zwecke der Datenbearbeitung',
      blocks: [
        'Personendaten werden im Rahmen der anwendbaren gesetzlichen Bestimmungen insbesondere zu folgenden Zwecken bearbeitet:',
        {
          list: [
            'Bereitstellung und Betrieb unserer Website und Lernanwendungen',
            'Verwaltung von Benutzerkonten und Zugriffsberechtigungen',
            'Bereitstellung digitaler Lerninhalte und Lernfunktionen',
            'Bearbeitung von Anfragen und Kommunikation mit Bildungseinrichtungen',
            'Durchführung und Verwaltung vertraglich vereinbarter Dienstleistungen',
            'Gewährleistung der technischen Sicherheit und Fehlerbehebung',
            'Verbesserung der Funktionalität und Benutzerfreundlichkeit unserer Angebote',
            'Erfüllung gesetzlicher Verpflichtungen',
            'Wahrung und Durchsetzung berechtigter rechtlicher Ansprüche',
          ],
        },
        'Eine Bearbeitung personenbezogener Daten erfolgt nur im Rahmen der jeweils anwendbaren rechtlichen Voraussetzungen.',
      ],
    },
    {
      title: '5. Zusammenarbeit mit Schulen und Bildungseinrichtungen',
      blocks: [
        'Edugo-Learn entwickelt und betreibt digitale Lernangebote zur Unterstützung der schulischen und beruflichen Ausbildung.',
        'Bei der Zusammenarbeit mit Schulen und anderen Bildungseinrichtungen gelten folgende Grundsätze:',
        { heading: 'Verwendung von schulischen Informationen' },
        'Schulische Informationen und Unterlagen, die nicht frei verwendet werden dürfen, werden nur auf Grundlage einer entsprechenden Berechtigung oder Genehmigung verwendet.',
        { heading: 'Verarbeitung personenbezogener Schülerdaten' },
        'Werden Edugo-Learn durch eine Schule Personendaten von Lernenden, Lehrpersonen oder anderen Schulangehörigen zur Verfügung gestellt, setzt deren Bearbeitung eine ausreichende rechtliche Grundlage und die erforderliche Berechtigung der Schule voraus.',
        { heading: 'Zweckgebundene Verwendung' },
        'Daten, die von Schulen im Rahmen einer vereinbarten Nutzung bereitgestellt werden, dürfen ausschliesslich für die vereinbarten schulischen und technischen Zwecke bearbeitet werden. Eine darüber hinausgehende Nutzung bedarf einer eigenständigen rechtlichen Grundlage.',
        { heading: 'Datenschutzrechtliche Verantwortlichkeit' },
        'Soweit eine Schule über Zwecke und wesentliche Mittel der Bearbeitung von Personendaten entscheidet, bleibt sie im Rahmen der anwendbaren Datenschutzvorschriften für diese Bearbeitung verantwortlich.',
        'Edugo-Learn bearbeitet solche Daten im vereinbarten Umfang als Auftragsbearbeiter. Die entsprechenden Rechte, Pflichten, Sicherheitsanforderungen und Weisungsbefugnisse sind vertraglich festzulegen.',
        'Für Datenbearbeitungen, deren Zwecke und Mittel Edugo-Learn selbst bestimmt, bleibt Edugo-Learn eigenständig verantwortlich.',
        'Die Zusammenarbeit mit einer Schule entbindet keine der beteiligten Parteien von ihren jeweiligen gesetzlichen Verpflichtungen.',
      ],
    },
    {
      title: '6. Schutz von Daten minderjähriger Personen',
      blocks: [
        'Bei der Entwicklung und Bereitstellung digitaler Lernangebote wird berücksichtigt, dass die Anwendungen auch von minderjährigen Personen verwendet werden können.',
        'Personendaten von Minderjährigen sind besonders sorgfältig zu behandeln.',
        'Bei schulisch organisierten Zugängen hat die zuständige Bildungseinrichtung sicherzustellen, dass für die vorgesehene Datenbearbeitung eine ausreichende Rechtsgrundlage besteht und die erforderlichen Informationen gegenüber den betroffenen Personen beziehungsweise deren gesetzlichen Vertretungen bereitgestellt werden.',
        'Soweit eine Einwilligung rechtlich erforderlich ist, muss diese von der entsprechend berechtigten Person eingeholt werden.',
        'Edugo-Learn beschränkt die Bearbeitung solcher Daten auf die für die jeweilige Leistung erforderlichen Zwecke.',
        'Besonders schützenswerte Personendaten sollen nicht ohne entsprechende Notwendigkeit und geeignete rechtliche und technische Schutzmassnahmen in die Lernanwendung eingegeben werden.',
      ],
    },
    {
      title: '7. Einsatz künstlicher Intelligenz',
      blocks: [
        'Edugo-Learn bietet KI-gestützte Lernmöglichkeiten zur Unterstützung des Lernprozesses an.',
        'Bei der Nutzung solcher Funktionen können eingegebene Fragen, Texte, Aufgabenstellungen, bereitgestellte Lerninhalte und erforderliche technische Informationen automatisiert verarbeitet werden.',
        'Soweit für die Bereitstellung einer KI-Funktion externe Technologieanbieter erforderlich sind, kann eine technische Übermittlung von Eingaben oder Lerninhalten an diese Anbieter notwendig sein.',
        'Eine solche Bearbeitung muss auf die jeweilige Funktion beschränkt sein und die anwendbaren datenschutzrechtlichen Anforderungen erfüllen.',
        'Die Verwendung von Schulunterlagen oder personenbezogenen Daten zum allgemeinen Training oder zur Weiterentwicklung fremder KI-Modelle ist nicht bereits durch die Zustimmung zur schulischen Nutzung gedeckt. Eine solche Verwendung setzt die hierfür erforderlichen Rechte und datenschutzrechtlichen Voraussetzungen gesondert voraus.',
        'Nutzende sollen keine vertraulichen, besonders schützenswerten oder nicht erforderlichen personenbezogenen Informationen in KI-Eingabefelder eingeben.',
        'KI-generierte Ergebnisse können fachlich unvollständig oder fehlerhaft sein. Sie dienen als Hilfsmittel für den Lernprozess und ersetzen weder anerkannte Unterrichtsmaterialien noch die fachliche Beurteilung durch Lehrpersonen.',
        'Für die Bewertung schulischer Leistungen und verbindliche schulische Entscheidungen bleiben die dafür zuständigen Personen und Institutionen im Rahmen ihrer jeweiligen gesetzlichen Zuständigkeiten verantwortlich.',
      ],
    },
    {
      title: '8. Verwendung von Lernmaterialien und urheberrechtlich geschützten Unterlagen',
      blocks: [
        'Edugo-Learn verwendet schulische Lehrmittel, Lernunterlagen, Aufgaben, Dokumente und weitere geschützte Inhalte nur, soweit eine entsprechende Nutzungsberechtigung besteht.',
        'Werden solche Inhalte durch Schulen oder andere Bildungseinrichtungen zur Verfügung gestellt, muss die Bereitstellung und vorgesehene Verwendung rechtlich zulässig sein.',
        'Dabei sind insbesondere bestehende Urheberrechte, Lizenzbedingungen, vertragliche Vereinbarungen und allfällige Rechte Dritter zu berücksichtigen.',
        'Eine Zustimmung einer Schule ersetzt nicht automatisch die Rechte weiterer Rechteinhaber.',
        'Die Verwendung bereitgestellter Inhalte für zusätzliche, nicht vereinbarte Zwecke, insbesondere eine Weitergabe, öffentliche Veröffentlichung oder Nutzung zum KI-Training, setzt eine entsprechende rechtliche Berechtigung voraus.',
        'Schulen und andere Berechtigte können sich bei Fragen zur Verwendung ihrer Unterlagen an info@edugo-learn.ch wenden.',
      ],
    },
    {
      title: '9. Weitergabe von Personendaten an Dritte',
      blocks: [
        'Personendaten dürfen nur im Rahmen der anwendbaren gesetzlichen Voraussetzungen und soweit für die vorgesehenen Zwecke erforderlich an Dritte weitergegeben werden.',
        'Als Empfänger kommen insbesondere folgende Kategorien infrage:',
        {
          list: [
            'Anbieter von Webhosting und technischer Infrastruktur',
            'Anbieter von Datenbank- und Cloud-Dienstleistungen',
            'Technische Dienstleister für den Betrieb der Lernplattform',
            'Anbieter von Authentifizierungs- und Sicherheitsdiensten',
            'Anbieter von KI-Dienstleistungen, soweit diese für die genutzten Funktionen eingesetzt werden',
            'Kommunikations- und E-Mail-Dienstleister',
            'Behörden oder andere berechtigte Stellen, sofern eine entsprechende gesetzliche Verpflichtung oder Berechtigung besteht',
          ],
        },
        'Soweit externe Anbieter Personendaten im Auftrag von Edugo-Learn bearbeiten, sind die hierfür erforderlichen vertraglichen und datenschutzrechtlichen Schutzvorkehrungen zu treffen.',
        'Eine Weitergabe personenbezogener Schülerdaten zu eigenständigen Werbezwecken Dritter ist nicht Bestandteil des beschriebenen schulischen Nutzungszwecks.',
      ],
    },
    {
      title: '10. Bearbeitung von Daten im Ausland',
      blocks: [
        'Bei der Verwendung externer Hosting-, Cloud-, Kommunikations- oder KI-Dienstleistungen kann eine Bearbeitung von Personendaten ausserhalb der Schweiz relevant werden.',
        'Eine Bekanntgabe personenbezogener Daten ins Ausland darf nur erfolgen, wenn die gesetzlichen Voraussetzungen erfüllt sind.',
        'Insbesondere ist zu prüfen, ob im betreffenden Staat ein angemessenes Datenschutzniveau gewährleistet ist oder geeignete Garantien bestehen, beispielsweise anerkannte Standarddatenschutzklauseln.',
        'Soweit Personendaten im Auftrag von Schulen bearbeitet werden, sind zusätzliche Anforderungen aus den betreffenden Verträgen und gegebenenfalls aus kantonalen Datenschutzvorschriften zu beachten.',
      ],
    },
    {
      title: '11. Cookies und vergleichbare Technologien',
      blocks: [
        'Unsere Website und unsere digitalen Anwendungen können Cookies oder vergleichbare Technologien einsetzen.',
        'Cookies sind kleine Informationen, die im Browser beziehungsweise auf dem verwendeten Endgerät gespeichert werden.',
        'Technisch notwendige Cookies können insbesondere dazu dienen, die Funktionsfähigkeit der Website, die Anmeldung, die Sitzungsverwaltung oder sicherheitsrelevante Funktionen sicherzustellen.',
        'Soweit zusätzliche Technologien zur Reichweitenmessung, Analyse oder Einbindung externer Inhalte eingesetzt werden, sind die Nutzenden über deren Verwendung und Zweck zu informieren. Erforderliche Einwilligungen werden vorgängig eingeholt, und gesetzlich vorgeschriebene Widerspruchsmöglichkeiten werden gewährleistet.',
        'Nutzende können Cookies zudem über die Einstellungen ihres Browsers verwalten oder löschen. Die Einschränkung technisch notwendiger Cookies kann die Funktionsfähigkeit einzelner Bereiche beeinträchtigen.',
      ],
    },
    {
      title: '12. Datensicherheit',
      blocks: [
        'Edugo-Learn ist verpflichtet, angemessene technische und organisatorische Massnahmen zum Schutz bearbeiteter Personendaten zu treffen.',
        'Diese Massnahmen richten sich nach dem Schutzbedarf der betreffenden Informationen und den mit der Datenbearbeitung verbundenen Risiken.',
        'Zu den relevanten Sicherheitsmassnahmen gehören insbesondere:',
        {
          list: [
            'Schutz vor unberechtigten Zugriffen',
            'Sichere Verwaltung von Benutzerkonten und Berechtigungen',
            'Angemessene Verschlüsselung bei der Datenübertragung und Speicherung',
            'Schutz von Zugangsdaten und Authentifizierungsinformationen',
            'Regelmässige Überprüfung sicherheitsrelevanter Systeme',
            'Schutz vor unberechtigtem Datenverlust oder ungewollter Veränderung',
            'Geregelter Umgang mit Sicherheitsvorfällen',
          ],
        },
        'Trotz angemessener Sicherheitsmassnahmen kann bei der Nutzung von Internetdiensten keine absolute Sicherheit gewährleistet werden.',
        'Gesetzliche Pflichten zur Datensicherheit sowie zur Meldung relevanter Datenschutzverletzungen bleiben vorbehalten.',
      ],
    },
    {
      title: '13. Aufbewahrung und Löschung von Personendaten',
      blocks: [
        'Personendaten dürfen nur so lange aufbewahrt werden, wie dies für den jeweiligen Bearbeitungszweck erforderlich ist oder gesetzliche beziehungsweise vertragliche Aufbewahrungspflichten bestehen.',
        'Die konkrete Aufbewahrungsdauer richtet sich nach der Datenart, dem Bearbeitungszweck und den anwendbaren gesetzlichen und vertraglichen Vorgaben.',
        'Für Daten, die Edugo-Learn im Auftrag einer Schule bearbeitet, gelten zusätzlich die vereinbarten Lösch- und Rückgaberegelungen.',
        'Nach Wegfall des Bearbeitungszwecks werden Daten gelöscht oder anonymisiert, soweit keine rechtliche Grundlage für eine weitere Aufbewahrung besteht.',
        'Gesetzlich erforderliche Geschäfts- und Buchhaltungsunterlagen können auch nach Beendigung einer Geschäftsbeziehung aufzubewahren sein.',
      ],
    },
    {
      title: '14. Rechte betroffener Personen',
      blocks: [
        'Betroffene Personen verfügen im Rahmen des anwendbaren Datenschutzrechts über verschiedene Rechte.',
        'Dazu gehören insbesondere:',
        {
          list: [
            'Auskunft über die Bearbeitung eigener Personendaten',
            'Berichtigung unrichtiger Personendaten',
            'Löschung von Daten, sofern die gesetzlichen Voraussetzungen erfüllt sind',
            'Widerspruch gegen bestimmte Datenbearbeitungen',
            'Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft',
            'Herausgabe oder Übertragung bestimmter Personendaten, sofern die gesetzlichen Voraussetzungen erfüllt sind',
          ],
        },
        'Zur Ausübung dieser Rechte können betroffene Personen eine Anfrage an info@edugo-learn.ch richten.',
        'Soweit Edugo-Learn Daten ausschliesslich im Auftrag einer Schule bearbeitet, kann es erforderlich sein, dass entsprechende Anliegen über die zuständige Schule bearbeitet werden.',
        'Zur Verhinderung unberechtigter Auskünfte kann eine angemessene Identitätsprüfung erforderlich sein.',
        'Gesetzliche Ausnahmen und Einschränkungen bleiben vorbehalten.',
      ],
    },
    {
      title: '15. Haftung und Verantwortung für Lerninhalte',
      blocks: [
        'Edugo-Learn stellt digitale Lernangebote zur Unterstützung des schulischen und beruflichen Lernprozesses bereit.',
        'Die angebotenen Inhalte und KI-generierten Ergebnisse können Fehler, Ungenauigkeiten oder unvollständige Informationen enthalten.',
        'Die fachliche Überprüfung und schulische Verwendung solcher Ergebnisse liegt im Zuständigkeitsbereich der jeweiligen Nutzenden beziehungsweise der verantwortlichen Bildungseinrichtungen.',
        'Soweit gesetzlich zulässig, übernimmt Edugo-Learn keine Gewähr für die jederzeitige Verfügbarkeit, Vollständigkeit, Aktualität oder fachliche Fehlerfreiheit der angebotenen Lerninhalte.',
        'Die Haftung für Schäden wird im gesetzlich zulässigen Umfang beschränkt.',
        'Zwingende gesetzliche Haftungsvorschriften sowie Ansprüche, deren Ausschluss rechtlich unzulässig ist, bleiben ausdrücklich vorbehalten.',
      ],
    },
    {
      title: '16. Änderungen dieser Datenschutzerklärung',
      blocks: [
        'Edugo-Learn kann diese Datenschutzerklärung anpassen, insbesondere wenn sich gesetzliche Anforderungen, technische Funktionen, eingesetzte Dienstleister oder die Art der Datenbearbeitung verändern.',
        'Die jeweils aktuelle Fassung wird auf https://edugo-learn.ch/ veröffentlicht.',
        'Soweit gesetzlich vorgeschrieben, werden betroffene Personen über wesentliche Änderungen zusätzlich informiert.',
      ],
    },
    {
      title: '17. Kontakt für Datenschutzanliegen',
      blocks: [
        'Bei Fragen zum Datenschutz, zur Verwendung schulischer Unterlagen oder zur Bearbeitung personenbezogener Daten können Sie sich jederzeit an uns wenden.',
        { contact: true },
      ],
    },
  ] satisfies PrivacySection[],
}
