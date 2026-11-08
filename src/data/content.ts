import type {
  AudienceBenefit,
  FaqItem,
  IconCard,
  LearningStep,
  NavLink,
  ProcessStep,
  SelectOption,
} from '../types'

export const navLinks: NavLink[] = [
  { label: 'Funktionsweise', href: '#funktionsweise' },
  { label: 'Vorteile', href: '#vorteile' },
  { label: 'Sicherheit', href: '#sicherheit' },
  { label: 'Demo', href: '#demo' },
]

export const trustItems: string[] = [
  'Für die Berufsbildung',
  'KI-gestützte Lernwege',
  'Rollenbasierter Zugriff',
  'Nachvollziehbare Lernfortschritte',
]

export const teacherCards: IconCard[] = [
  {
    icon: 'upload',
    title: 'Eigene Lehrmittel hochladen',
    description:
      'Lehrpersonen können eigene Unterlagen und Lerninhalte hochladen und als Grundlage für passende Übungen verwenden.',
  },
  {
    icon: 'clipboard',
    title: 'Tests und Übungen vorbereiten',
    description:
      'Mit KI-Unterstützung lassen sich passende Aufgaben, Übungen und Tests für Klassen oder einzelne Lernende vorbereiten.',
  },
  {
    icon: 'trendUp',
    title: 'Lernfortschritt verfolgen',
    description:
      'Lehrpersonen sehen, wie sich Lernende in den verschiedenen Lern- und Fachbereichen entwickeln.',
  },
  {
    icon: 'search',
    title: 'Wissenslücken erkennen',
    description:
      'Die Plattform zeigt, welche Themen bereits sicher beherrscht werden und wo noch gezielte Unterstützung notwendig ist.',
  },
]

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    icon: 'target',
    title: 'Lernstand erkennen',
    description:
      'Lernende bearbeiten Aufgaben aus ihren Lern- und Fachbereichen. Die KI erkennt dabei individuelle Stärken und Wissenslücken.',
  },
  {
    number: 2,
    icon: 'sliders',
    title: 'Individuell üben',
    description:
      'Die KI richtet die nächsten Übungen an den individuellen Stärken und Wissenslücken der Lernenden aus – mit passenden Erklärungen und angepasstem Schwierigkeitsgrad.',
  },
  {
    number: 3,
    icon: 'trendUp',
    title: 'Gezielt verbessern',
    description:
      'Wiederkehrende Fehler werden erkannt und gezielt aufgegriffen. Lehrpersonen sehen transparent, wo Lernende stehen und wo Unterstützung hilft.',
  },
]

export const audienceBenefits: AudienceBenefit[] = [
  {
    audience: 'Lernende',
    icon: 'graduation',
    tone: 'success',
    intro: 'Üben im eigenen Tempo – mit gezielter Unterstützung, wenn es nötig ist.',
    items: [
      'Individuell angepasste Aufgaben',
      'Passende Erklärungen bei Fehlern',
      'Angepasster Schwierigkeitsgrad',
      'Wiederholung zur richtigen Zeit',
    ],
  },
  {
    audience: 'Lehrpersonen',
    icon: 'users',
    tone: 'accent',
    intro: 'Mehr Überblick über die Klasse und mehr Zeit für individuelle Förderung.',
    items: [
      'Weniger manuelle Vorbereitung',
      'Übersicht über Wissenslücken',
      'Lernfortschritte nachvollziehen',
      'Eigene Lehrmittel optional einbinden',
    ],
  },
  {
    audience: 'Schulen',
    icon: 'school',
    tone: 'primary',
    intro: 'Eine Lernplattform, die zu den Strukturen von Berufsfachschulen passt.',
    items: [
      'Ausgerichtet auf die Berufsbildung',
      'Rollen und Berechtigungen',
      'Getrennte Schuldaten',
      'Skalierbare Plattform',
    ],
  },
]

export const learningSteps: LearningStep[] = [
  {
    kind: 'mistake',
    label: 'Schritt 1',
    title: 'Fehlermuster wird erkannt',
    description:
      'Die Plattform erkennt, dass derselbe Buchungsvorgang wiederholt falsch zugeordnet wurde.',
  },
  {
    kind: 'easier',
    label: 'Schritt 2',
    title: 'Grundlage wird wiederholt',
    description:
      'Die Plattform stellt zunächst einfachere Aufgaben zur Zuordnung von Konten sowie zu Soll und Haben.',
  },
  {
    kind: 'explain',
    label: 'Schritt 3',
    title: 'Buchungsvorgang wird erklärt',
    description:
      'Die KI erklärt verständlich, dass beim Zahlungseingang das Bankguthaben steigt und die offene Forderung gegenüber dem Kunden sinkt.',
  },
  {
    kind: 'practice',
    label: 'Schritt 4',
    title: 'Neue passende Aufgaben',
    description:
      'Anschliessend erhält die lernende Person neue Aufgaben zur Debitorenbuchhaltung mit schrittweise angepasstem Schwierigkeitsgrad.',
  },
]

export const privacyPoints: IconCard[] = [
  {
    icon: 'layers',
    title: 'Getrennte Schuldaten',
    description: 'Daten und Inhalte verschiedener Schulen werden voneinander getrennt behandelt.',
  },
  {
    icon: 'users',
    title: 'Klare Rollen',
    description: 'Eigene Rollen für Schuladministration, Lehrpersonen und Lernende.',
  },
  {
    icon: 'lock',
    title: 'Berechtigter Zugriff',
    description: 'Zugriff auf Inhalte und Lerndaten erhalten nur berechtigte Benutzerinnen und Benutzer.',
  },
  {
    icon: 'target',
    title: 'Gezielte Lernunterstützung',
    description:
      'Die KI erkennt, in welchen Bereichen noch Lernbedarf besteht, und stellt gezielt passende Aufgaben und Erklärungen bereit.',
  },
  {
    icon: 'filter',
    title: 'Datensparsame Verarbeitung',
    description: 'Es werden nur die Informationen verarbeitet, die für eine Aufgabe benötigt werden.',
  },
  {
    icon: 'shield',
    title: 'Erweiterte Isolation',
    description:
      'Für Schulen mit besonderen Anforderungen sind erweiterte Isolationsmöglichkeiten vorgesehen.',
  },
]

export const features: IconCard[] = [
  {
    icon: 'sparkPath',
    title: 'KI-gestützte Lernwege',
    description:
      'Die KI richtet die nächsten Übungen an den Stärken und Wissenslücken der Lernenden aus.',
  },
  {
    icon: 'sliders',
    title: 'Anpassung des Schwierigkeitsgrads',
    description: 'Aufgaben werden schrittweise an den aktuellen Lernstand angepasst.',
  },
  {
    icon: 'search',
    title: 'Erkennung wiederkehrender Fehler',
    description: 'Typische Fehlermuster werden erkannt und gezielt aufgegriffen.',
  },
  {
    icon: 'lightbulb',
    title: 'Passende Erklärungen',
    description: 'Verständliche Erklärungen, abgestimmt auf den konkreten Fehler.',
  },
  {
    icon: 'chart',
    title: 'Lernfortschritt nach Themen',
    description: 'Fortschritte werden pro Lern- und Fachbereich nachvollziehbar dargestellt.',
  },
  {
    icon: 'dashboard',
    title: 'Dashboard für Lehrpersonen',
    description: 'Überblick über Lernstände und Wissenslücken der Klasse.',
  },
  {
    icon: 'upload',
    title: 'Eigene Lehrmittel',
    description: 'Lehrpersonen können optional eigene Unterlagen als Grundlage für Übungen nutzen.',
  },
  {
    icon: 'school',
    title: 'Rollen- und Schulverwaltung',
    description: 'Benutzerinnen und Benutzer, Klassen und Berechtigungen zentral verwalten.',
  },
]

export const roleOptions: SelectOption[] = [
  { value: 'teacher', label: 'Lehrperson' },
  { value: 'school-management', label: 'Schulleitung' },
  { value: 'it', label: 'IT-Verantwortliche/r' },
  { value: 'administration', label: 'Schulverwaltung' },
  { value: 'other', label: 'Andere Funktion' },
]

export const faqItems: FaqItem[] = [
  {
    question: 'Ersetzt die Plattform eine Lehrperson?',
    answer:
      'Nein. Die Plattform ist ein Werkzeug zur Unterstützung des Unterrichts. Lehrpersonen behalten den Überblick über die Lernstände, legen Schwerpunkte fest und entscheiden, wie sie die Ergebnisse im Unterricht nutzen.',
  },
  {
    question: 'Wie setzt die Plattform KI ein?',
    answer:
      'Die KI erkennt, in welchen Bereichen noch Lernbedarf besteht, und stellt gezielt passende Aufgaben und Erklärungen bereit. Die Plattform ist dabei kein allgemeiner Chatbot, sondern ein strukturiertes Lernsystem für die Berufsbildung.',
  },
  {
    question: 'Für welche Ausbildungen ist die Plattform gedacht?',
    answer:
      'Die Plattform richtet sich an Berufsfachschulen, Lehrpersonen und Lernende in der Berufsbildung. Sie ist berufsübergreifend aufgebaut: Aufgaben, Erklärungen und Lernfortschritte orientieren sich an den jeweiligen Lern- und Fachbereichen.',
  },
  {
    question: 'Können eigene Unterrichtsmaterialien verwendet werden?',
    answer:
      'Ja, optional. Lehrpersonen können eigene Unterlagen und Lerninhalte hochladen und als Grundlage für passende Übungen und Tests verwenden. Für die Nutzung der Plattform ist das aber keine Voraussetzung.',
  },
  {
    question: 'Wie werden verschiedene Schulen voneinander getrennt?',
    answer:
      'Daten und Inhalte jeder Schule werden getrennt von denen anderer Schulen behandelt. Über Rollen und Berechtigungen ist geregelt, wer auf welche Inhalte zugreifen kann. Für Schulen mit besonderen Anforderungen sind erweiterte Isolationsmöglichkeiten vorgesehen. Die technischen und organisatorischen Details besprechen wir gerne persönlich mit Ihnen.',
  },
  {
    question: 'Können Lehrpersonen Inhalte kontrollieren?',
    answer:
      'Ja. Lehrpersonen entscheiden, welche eigenen Lehrmittel sie einbinden, und können Aufgaben, Übungen und Tests für ihre Klassen vorbereiten. Zudem sehen sie jederzeit, woran ihre Lernenden arbeiten.',
  },
  {
    question: 'Wie können wir die Plattform kennenlernen?',
    answer:
      'Fragen Sie über das Formular auf dieser Seite eine Demo an. Wir melden uns bei Ihnen, um einen Termin zu vereinbaren und die Plattform anhand konkreter Beispielaufgaben vorzustellen.',
  },
]
