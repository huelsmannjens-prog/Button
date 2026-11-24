/* English interface for the Button apps.
   The English pages under /en/ are copies of the German apps (built by tools/make-en.py).
   This script translates the visible texts at runtime, including texts the apps create later
   (messages, lists, dialogs). Texts that are not listed stay as they are. */
(function () {
  "use strict";
  const D = {
    // ---------- shared ----------
    "Ausgabe": "Output", "Vorschau": "Preview", "Bild": "Image", "Text": "Text", "Texte": "Texts", "Farbe": "Colour",
    "Größe": "Size", "Drehen": "Rotate", "Drehung": "Rotation", "Schrift": "Font", "Schriftart": "Font", "Schriftgröße": "Font size",
    "Rund": "Round", "Eckig": "Square", "rund": "round", "eckig": "square", "Form": "Shape", "Mitte": "Middle",
    "Verlauf": "Gradient", "Endfarbe": "End colour", "Verlaufswinkel": "Gradient angle", "Textfarbe": "Text colour",
    "Textrahmen": "Text frame", "Rahmen": "Frame", "Rahmenbreite": "Frame width", "Rahmenfarbe": "Frame colour",
    "Hintergrundfarbe": "Background colour", "Mit Schnittmarken": "With cut marks", "Schnittmarken": "Cut marks",
    "Schnittkante": "Cut line", "PDF wird erstellt …": "Creating PDF …", "Schließen": "Close", "Suchen": "Search",
    "Hochladen": "Upload", "Button": "Button", "Buttons": "Buttons", "Motiv": "Motif", "Bearbeiten": "Edit",
    "Wähle zuerst links ein Bild.": "Choose an image on the left first.",
    "PDF-Bibliothek konnte nicht geladen werden. Prüfe die Internetverbindung.": "The PDF library could not be loaded. Check your internet connection.",
    "Keine Verbindung zum Dienst. Prüfe die Internetverbindung.": "No connection to the service. Check your internet connection.",

    // ---------- Bildstudio ----------
    "Button-Bildstudio": "Button Image Studio", "Antifa-Button-Generator": "Antifa Button Generator",
    "Antifa-Logo oder eigenes Motiv verwenden, Texte einpassen und als druckfertiges PNG oder A4-PDF speichern.": "Use the antifa logo or your own motif, fit the texts and save a print-ready PNG or A4 PDF.",
    "Logo oder eigenes Motiv gestalten, Texte im Bogen setzen und als druckfertiges PNG mit Beschnittzugabe speichern.": "Design the logo or your own motif, set texts along the arc and save a print-ready PNG with bleed.",
    "Antifa-Flaggen": "Antifa flags", "Logo (2 Flaggen)": "Logo (2 flags)", "Eigenes Bild": "Own image",
    "Button und Motiv": "Button and motif", "Button 25 mm · Zuschnitt 37 mm": "Button 25 mm · cut size 37 mm",
    "🔒 Motiv fixieren (Flaggen und Textfelder bearbeiten)": "🔒 Lock motif (edit flags and text fields only)",
    "🔒 Motiv fixieren (nicht mehr verschieben, zoomen oder drehen)": "🔒 Lock motif (no more moving, zooming or rotating)",
    "Position zurücksetzen": "Reset position", "Spiegeln": "Mirror", "Kreis ums Logo": "Circle around logo",
    "Kreisfüllung": "Circle fill", "Kreislinie": "Circle line", "Ganzes Logo": "Whole logo",
    "Obere Flagge": "Upper flag", "Untere Flagge": "Lower flag", "Obere Flagge (vorn)": "Upper flag (front)", "Untere Flagge (hinten)": "Lower flag (back)",
    "Was bearbeitest du gerade? (oder in der Vorschau auf eine Flagge tippen)": "What are you editing? (or tap a flag in the preview)",
    "Stiel": "Pole", "Rahmen um Flagge und Stiel": "Frame around flag and pole", "Bild wählen": "Choose image",
    "Bild an Rahmen anpassen": "Fit image to frame", "Bild entfernen": "Remove image", "Bildgröße in der Flagge": "Image size in flag",
    "Bild links/rechts": "Image left/right", "Bild hoch/runter": "Image up/down", "Links/rechts": "Left/right", "Hoch/runter": "Up/down",
    "Neigung": "Tilt", "Bildquelle": "Image source", "Bild suchen, erzeugen oder hochladen": "Search, generate or upload an image",
    "KI erzeugen": "AI generate", "Suchbegriff (Englisch liefert meist mehr Treffer)": "Search term",
    "Kommerziell nutzbar": "Commercial use allowed", "Nur quadratisch": "Square only",
    "Quelle: Openverse (Creative-Commons- und gemeinfreie Bilder aus Wikimedia, Flickr und mehr). Lizenz und Urheber stehen unter der Vorschau; bei CC BY bitte nennen.": "Source: Openverse (Creative Commons and public-domain images from Wikimedia, Flickr and more). Licence and author are shown below the preview; please credit CC BY images.",
    "Thema": "Subject", "Stil": "Style", "Keiner": "None", "Flache Vektorgrafik": "Flat vector graphic", "Retro 70er": "Retro 70s",
    "Kawaii-Sticker": "Kawaii sticker", "Aquarell": "Watercolour", "Fotorealistisch": "Photorealistic", "Strichzeichnung s/w": "Line art b/w",
    "Zusatz (optional)": "Extra (optional)", "z. B. Hintergrund hellblau, keine Schrift im Bild": "e.g. light blue background, no lettering in the image",
    "OpenAI-API-Schlüssel": "OpenAI API key", "Schlüssel in diesem Browser merken": "Remember key in this browser", "Bild erzeugen": "Generate image",
    "Das Motiv wird mittig und rund-tauglich angefragt, ohne Text im Bild. Kosten laut OpenAI-Preisliste, grob einige Cent pro Bild. Der Schlüssel geht nur an api.openai.com.": "The motif is requested centred and suitable for a round button, without text in the image. Costs follow the OpenAI price list, roughly a few cents per image. The key is only sent to api.openai.com.",
    "Bild hierher ziehen, einfügen (Strg+V) oder": "Drag an image here, paste it (Ctrl+V) or",
    "Ein hier gewähltes Bild kommt als eigenes Motiv. Für eine Flagge: rechts oben „Obere/Untere Flagge“ wählen oder in der Vorschau auf die Flagge tippen.": "An image chosen here becomes your own motif. For a flag: choose “Upper/Lower flag” at the top right or tap the flag in the preview.",
    "Ein hier gewähltes Bild kommt als eigenes Motiv.": "An image chosen here becomes your own motif.",
    "Ein hier gewähltes Bild kommt in die obere Flagge.": "An image chosen here goes into the upper flag.",
    "Ein hier gewähltes Bild kommt in die untere Flagge.": "An image chosen here goes into the lower flag.",
    "Effekt": "Effect", "Schwarzweiß": "Black & white", "Sepia": "Sepia", "Invertiert": "Inverted",
    "Helligkeit": "Brightness", "Kontrast": "Contrast", "Sättigung": "Saturation",
    "Hintergrund entfernen (KI, kostenlos im Browser)": "Remove background (AI, free, in the browser)",
    "KI-Bearbeitung": "AI editing", "Änderung beschreiben": "Describe the change",
    "z. B. im Comic-Stil, Farben kräftiger, Hintergrund entfernen und Stern hinzufügen": "e.g. comic style, stronger colours, remove background and add a star",
    "Mit KI bearbeiten (OpenAI)": "Edit with AI (OpenAI)",
    "„Mit KI bearbeiten“ nutzt den API-Schlüssel aus dem Bereich „KI erzeugen“.": "“Edit with AI” uses the API key from the “AI generate” section.",
    "Wähle zuerst links ein Bild, dann kannst du es hier bearbeiten.": "Choose an image on the left first, then you can edit it here.",
    "Bearbeitet wird das Bild im Motiv.": "Editing the image in the motif.",
    "Bearbeitet wird das Bild in die obere Flagge.": "Editing the image in the upper flag.",
    "Bearbeitet wird das Bild in die untere Flagge.": "Editing the image in the lower flag.",
    "Tipp auf „Bild wählen“ und such dir links ein Bild aus (Suchen, KI erzeugen oder Hochladen). Danach kannst du das Bild in der Vorschau mit dem Finger verschieben und mit zwei Fingern vergrößern.": "Tap “Choose image” and pick an image on the left (search, AI generate or upload). Then you can move it in the preview with one finger and zoom with two.",
    "Runde Button-Vorschau, mit Finger oder Maus verschiebbar": "Round button preview, movable with finger or mouse",
    "Sichtbare Vorderseite": "Visible front", "Sicherer Bereich für Text": "Safe area for text",
    "🖼 PNG speichern (300 dpi)": "🖼 Save PNG (300 dpi)", "🖨 35 Buttons als PDF speichern": "🖨 Save 35 buttons as PDF",
    "🖨 Buttons als PDF (ganze Seite)": "🖨 Buttons as PDF (full page)", "🏷 Aufkleber-Druckvorlage als PDF speichern": "🏷 Save sticker print sheet as PDF",
    "🏷 Aufkleber-Druckvorlage als PDF (4 × 5)": "🏷 Sticker print sheet as PDF (4 × 5)",
    "Entwurf als Vorlage an StudioPro senden (anonym)": "Send design to StudioPro as a template (anonymous)",
    "➡ Zum kostenlosen DIY-ButtonStudio_1.6.1 Pro wechseln": "➡ Switch to the free DIY-ButtonStudio_1.6.1 Pro", "➡ Zum DIY-Button-StudioPro": "➡ To DIY Button StudioPro",
    "Oben (im Bogen)": "Top (along the arc)", "Unten (im Bogen)": "Bottom (along the arc)", "Laufweite": "Tracking",
    "Bogenlänge": "Arc length", "Abstand zum Rand": "Distance from edge", "Breite": "Width", "Höhe verschieben": "Move up/down",
    "Schriftgröße automatisch an die Bogenlänge anpassen (optional)": "Fit font size to arc length automatically (optional)",
    "Inter fett": "Inter bold", "Suche läuft …": "Searching …",
    "Keine Treffer. Versuch einen anderen oder englischen Begriff.": "No results. Try a different term.",
    "Bitte im Bereich „KI erzeugen“ einen OpenAI-API-Schlüssel eintragen.": "Please enter an OpenAI API key in the “AI generate” section.",
    "Bild wird erzeugt, das dauert meist 10 bis 40 Sekunden …": "Generating image, this usually takes 10 to 40 seconds …",
    "KI-Modell wird geladen (beim ersten Mal ca. 40 MB) …": "Loading AI model (about 40 MB the first time) …",
    "Hintergrund wird entfernt …": "Removing background …", "Beschreibe kurz, was die KI ändern soll.": "Briefly describe what the AI should change.",
    "KI bearbeitet das Bild, das dauert meist 20 bis 60 Sekunden …": "The AI is editing the image, this usually takes 20 to 60 seconds …",
    "Export blockiert: Das Bild stammt von einer Seite ohne Freigabe. Lade es herunter und dann über ‚Hochladen‘ wieder hinein.": "Export blocked: the image comes from a site that does not allow it. Download it and add it again via “Upload”.",
    "Bild ließ sich nicht laden.": "The image could not be loaded.", "Lade Bild …": "Loading image …", "Eingefügtes Bild": "Pasted image",
    "Sonnenblume mit fröhlichem Gesicht": "Sunflower with a happy face",

    // Bildsuche / KI-Bilder (v3)
    "Wonach suchst du? (gern auf Deutsch)": "What are you looking for? (any language)",
    "z. B. Faust mit Blume, Friedenstaube, Regenbogen": "e.g. fist with flower, peace dove, rainbow",
    "KI-Suchhilfe: macht daraus passende englische Suchbegriffe": "AI search help: turns it into good English search terms",
    "Art": "Type", "Grafik & Illustration": "Graphics & illustration", "Alles": "All", "Foto": "Photo", "Lizenz": "Licence",
    "Ohne Namensnennung (CC0/gemeinfrei)": "No attribution (CC0/public domain)", "Alle": "All",
    "Nur quadratische Bilder": "Square images only", "Mehr laden": "Load more", "Alle Begriffe": "All terms",
    "Quelle: Openverse (Creative-Commons- und gemeinfreie Bilder aus Wikimedia, Flickr und mehr). Die Treffer sind nach Eignung für Buttons sortiert (quadratisch, groß genug, Grafik). Lizenz und Urheber stehen unter der Vorschau; bei CC BY bitte nennen.": "Source: Openverse (Creative Commons and public-domain images from Wikimedia, Flickr and more). Results are sorted by suitability for buttons (square, large enough, graphic). Licence and author are shown below the preview; please credit CC BY images.",
    "KI sucht passende Begriffe …": "AI is finding good search terms …",
    "Keine Treffer. Versuch einen anderen Begriff oder andere Filter.": "No results. Try another term or other filters.",
    "Was soll auf dem Button zu sehen sein? (Deutsch)": "What should the button show? (any language)",
    "z. B. Eine Faust, die eine Sonnenblume hält": "e.g. a fist holding a sunflower",
    "Linolschnitt": "Linocut", "Schablone / Stencil": "Stencil", "Pop-Art": "Pop art", "Comic": "Comic", "Sticker": "Sticker", "Kawaii": "Kawaii",
    "Minimal-Icon": "Minimal icon", "Farben": "Colours", "Wenige kräftige Farben": "Few strong colours", "Schwarz, Weiß, Rot": "Black, white, red",
    "Nur Schwarz-Weiß": "Black and white only", "Passend zur Buttonfarbe": "Matching the button colour", "Frei": "Any",
    "Platz für Bogentext oben und unten lassen": "Leave room for arc text at top and bottom",
    "Transparenter Hintergrund (Motiv sitzt direkt auf der Buttonfarbe)": "Transparent background (motif sits directly on the button colour)",
    "z. B. Blick nach links, keine Hände": "e.g. looking left, no hands", "✨ Prompt mit KI ausarbeiten": "✨ Work out prompt with AI",
    "Prompt (Englisch, kannst du ändern – leer = automatisch)": "Prompt (English, editable – empty = automatic)",
    "Varianten": "Variants", "Qualität": "Quality", "Entwurf (günstig)": "Draft (cheap)", "Mittel": "Medium", "Hoch (teurer)": "High (more expensive)",
    "Zuletzt erzeugt (ohne neue Kosten wieder verwenden)": "Recently generated (reuse at no extra cost)",
    "Die KI-Suchhilfe und der Prompt-Assistent kosten nur Bruchteile eines Cents. Der Schlüssel geht nur an api.openai.com.": "The AI search help and the prompt assistant cost only fractions of a cent. The key is only sent to api.openai.com.",
    "Beschreibe zuerst, was auf dem Button zu sehen sein soll.": "First describe what the button should show.",
    "KI schreibt den Prompt …": "AI is writing the prompt …", "Prompt fertig – du kannst ihn noch ändern.": "Prompt ready – you can still change it.",
    "Fertig – tippe auf eine Variante, um sie zu verwenden.": "Done – tap a variant to use it.", "Fertig.": "Done.",
    "Die KI-Antwort war unlesbar.": "The AI answer could not be read.", "Die KI hat keinen Prompt geliefert.": "The AI did not return a prompt.",
    // ---------- StudioPro ----------
    "DIY-Button-StudioPro": "DIY Button StudioPro", "DIY-Button-StudioPro 1.6.1": "DIY Button StudioPro 1.6.1",
    "✨ Auto": "✨ Auto", "Automatischer Button": "Automatic button", "✨ Automatischer Button": "✨ Automatic button", "✨ Auto-Button": "✨ Auto button",
    "Speichern": "Save", "Projekte": "Projects", "Vorlagen": "Templates", "Neu": "New", "drucken": "print", "🖨 PDF": "🖨 PDF",
    "Zwischenspeichern (Strg+S)": "Save (Ctrl+S)", "Gespeicherte Projekte öffnen": "Open saved projects",
    "Eingesandte Vorlagen aus dem Bildstudio abrufen": "Fetch templates sent from the Image Studio", "Neues Design": "New design",
    "Drucken / PDF (Strg+P)": "Print / PDF (Ctrl+P)", "⚙ Einstellungen": "⚙ Settings", "🛠 Tools": "🛠 Tools",
    "1. Button-Größe": "1. Button size", "Fertige Button-Größe": "Finished button size", "Schnittkreis (mit Umschlag)": "Cut circle (with wrap)",
    "Eigener Schnittkreis in mm (leer = Standard)": "Custom cut circle in mm (empty = default)", "z. B. 37": "e.g. 37",
    "2. Hintergrund": "2. Background", "Einfarbig": "Solid", "Linear": "Linear", "Radial": "Radial", "Startfarbe": "Start colour",
    "3. Bild": "3. Image", "Bild auswählen": "Choose image", "Bild auswählen …": "Choose image …", "Bild ersetzen …": "Replace image …",
    "oder hierher ziehen": "or drag it here",
    "Größe, Drehung und Position stellst du direkt im Editor ein (auf das Bild tippen).": "Set size, rotation and position directly in the editor (tap the image).",
    "Druckbogen A4": "Print sheet A4", "Druckbogen": "Print sheet", "➕ Aktuelles Design (5×)": "➕ Current design (5×)",
    "🖨 PDF erstellen": "🖨 Create PDF", "Liste leeren": "Clear list", "Rest auffüllen": "Fill remaining spaces",
    "Noch leer – „Hinzufügen“ drücken": "Still empty – press “Add”",
    "Editor": "Editor", "Rückgängig (Strg+Z)": "Undo (Ctrl+Z)", "Wiederholen (Strg+Y)": "Redo (Ctrl+Y)",
    "Mit Hilfslinien": "With guides", "Fertiger Button": "Finished button", "🖼 Bild": "🖼 Image", "⌒ Oben": "⌒ Top", "T Mitte": "T Middle", "⌣ Unten": "⌣ Bottom",
    "Umschlagkante (ca.)": "Wrap edge (approx.)", "Sichtbarer Bereich": "Visible area", "Biegekante": "Fold edge",
    "Hintergrund und Bild reichen bis zur Schnittkante – kein weißer Rand.": "Background and image reach the cut line – no white edge.",
    "🖼 PNG (300 dpi)": "🖼 PNG (300 dpi)", "🖨 Buttons als PDF": "🖨 Buttons as PDF", "🏷 Aufkleber-PDF (4 × 5)": "🏷 Sticker PDF (4 × 5)",
    "💾 Zwischenspeichern": "💾 Save project", "Aufkleber": "Stickers", "in Datenbank speichern": "save to database",
    "Alle Texte (Voreinstellung)": "All texts (preset)",
    "Gilt für alle drei Textfelder. Danach kannst du jedes Feld unter „Bearbeiten“ einzeln ändern – tippe dazu im Button auf den Text.": "Applies to all three text fields. Afterwards you can change each field separately under “Edit” – just tap the text on the button.",
    "Buchstabenabstand oben": "Letter spacing top", "Buchstabenabstand unten": "Letter spacing bottom",
    "Tippe im Button auf": "On the button, tap", "oder ein": "or a", ", um es auszuwählen.": " to select it.", "Textfeld": "text field",
    "🔒 Gesperrte Elemente lassen sich nicht verschieben – auswählen über die Leiste oben, dort entsperren.": "🔒 Locked elements cannot be moved – select them in the bar above and unlock them there.",
    "Ziehen": "Drag", "= verschieben ·": "= move ·", "■ Eckgriff": "■ Corner handle", "= Größe ·": "= size ·", "● runder Griff": "● Round handle",
    "= drehen · bei Bogentexten:": "= rotate · for arc texts:", "◆ Endgriffe": "◆ End handles", "= Feldbreite.": "= field width.",
    "Zwei Finger": "Two fingers", "auf dem Button: auswähltes Element zoomen und drehen.": "on the button: zoom and rotate the selected element.",
    "Pfeiltasten": "Arrow keys", "= verschieben (mit Umschalt ×10) ·": "= move (with Shift ×10) ·", "Mausrad": "Mouse wheel",
    "Umschalt+Mausrad": "Shift+mouse wheel", "= drehen ·": "= rotate ·", "Entf": "Del", "= Inhalt löschen ·": "= delete content ·",
    "Strg+Z / Strg+Y": "Ctrl+Z / Ctrl+Y", "= rückgängig/wiederholen ·": "= undo/redo ·", "Esc": "Esc", "= Auswahl aufheben ·": "= deselect ·",
    "Strg+V": "Ctrl+V", "= Bild einfügen": "= paste image",
    "Bogentext oben … (Enter = weitere Zeile)": "Arc text top … (Enter = another line)", "Bogentext unten … (Enter = weitere Zeile)": "Arc text bottom … (Enter = another line)",
    "Text in der Mitte … (Enter = neue Zeile)": "Text in the middle … (Enter = new line)",
    "Größe automatisch ans Feld anpassen": "Fit size to field automatically", "Größe automatisch": "Automatic size",
    "Als Binärcode (0/1)": "As binary code (0/1)", "Zentrieren": "Centre", "🔒 Textfeld sperren": "🔒 Lock text field", "🔒 Bild sperren": "🔒 Lock image",
    "lesbar (nicht kopfüber)": "readable (not upside down)", "Wie alle Texte": "Like all texts", "Eigene Gestaltung": "Own style",
    "Dritte Farbe (Mitte des Verlaufs)": "Third colour (middle of gradient)", "Mittelfarbe": "Middle colour",
    "Kontur um die Buchstaben": "Outline around the letters", "Konturfarbe": "Outline colour", "Konturbreite": "Outline width",
    "Hintergrundfarbe hinter dem Text": "Background colour behind the text", "Deckkraft": "Opacity", "Eckenrundung (Mitte)": "Corner rounding (middle)",
    "Einpassen": "Fit", "Fläche füllen": "Fill area", "Bis Biegekante füllen": "Fill to fold edge", "Ganz zeigen": "Show whole",
    "Zurücksetzen": "Reset", "Entfernen": "Remove", "✏️ Bild bearbeiten": "✏️ Edit image", "Bild ändern": "Change image",
    "🖼 Eigenes Bild": "🖼 Own image", "← Text ändern": "← Change text", "↔ Spiegeln": "↔ Mirror", "↕ Spiegeln": "↕ Mirror",
    // automatic button
    "Text eingeben – Farben, Schriften und ein passendes Motiv werden automatisch gewählt.": "Enter text – colours, fonts and a matching motif are chosen automatically.",
    "Texte eingeben – Farben, Schriften und ein passendes Motiv werden automatisch gewählt; danach erscheint eine Vorschau (5 Stück auf dem Bogen).": "Enter texts – colours, fonts and a matching motif are chosen automatically; then a preview appears (5 on the sheet).",
    "Text oben (Bogen, Enter = neue Zeile)": "Text top (arc, Enter = new line)", "Text Mitte": "Text middle",
    "Text unten (Bogen, Enter = neue Zeile)": "Text bottom (arc, Enter = new line)", "z. B. Examen 2026": "e.g. Exams 2026",
    "z. B. Geschafft!": "e.g. Done it!", "z. B. Pflegeschule": "e.g. Nursing school", "Button-Größe": "Button size",
    "Automatisch erkennen": "Detect automatically", "Allgemein / bunt": "General / colourful", "Feier & Geburtstag": "Party & birthday",
    "Liebe & Freundschaft": "Love & friendship", "Musik": "Music", "Natur & Umwelt": "Nature & environment", "Ostern": "Easter",
    "Pflege & Gesundheit": "Care & health", "Schule & Lernen": "School & learning", "Sport & Team": "Sport & team",
    "Technik & Computer": "Technology & computers", "Tiere": "Animals", "Weihnachten & Winter": "Christmas & winter",
    "✨ Button erstellen": "✨ Create button", "Claude (direkt im Tool)": "Claude (directly in the tool)",
    "Stattdessen mit Claude-KI gestalten lassen (Prompt)": "Let Claude AI design it instead (prompt)",
    "Kurz (Skill)": "Short (skill)", "Vollständig": "Complete", "Vollständiger Prompt": "Complete prompt", "📋 Kopieren": "📋 Copy",
    "💬 In Claude öffnen": "💬 Open in Claude", "📋 Prompt mit Platzhaltern kopieren": "📋 Copy prompt with placeholders",
    "Für Chats ohne den Skill „diy-button-generator“ – mit Platzhaltern zum Ausfüllen.": "For chats without the “diy-button-generator” skill – with placeholders to fill in.",
    "Eingabemaske öffnen": "Open input form", "🔄 Andere Variante": "🔄 Other variant", "🎨 Neues Motiv": "🎨 New motif", "🚫 Ohne Bild": "🚫 Without image",
    "✏️ Im Editor anpassen": "✏️ Adjust in editor", "🖨 Drucken (PDF)": "🖨 Print (PDF)", "💾 Projekt speichern (.json)": "💾 Save project (.json)",
    "Verwerfen": "Discard", "Abschluss & Prüfung": "Graduation & exams",
    "So druckst du maßgenau:": "How to print true to size:", "PDF drucken mit Skalierung": "Print the PDF with scaling",
    "100 % / Tatsächliche Größe": "100 % / Actual size", "(nicht „An Seite anpassen“).": "(not “Fit to page”).",
    "Zum Prüfen einen Schnittkreis nachmessen.": "Measure one cut circle to check.",
    "sammeln (je 5 Stück) – ohne Liste wird das aktuelle Design gedruckt.": "collect them (5 each) – without a list the current design is printed.",
    "Designs mit": "Designs with", "„➕ Hinzufügen“": "“➕ Add”", "„🖨 PDF erstellen“": "“🖨 Create PDF”", "– es entsteht ein fertiger A4-Bogen als PDF.": "– you get a finished A4 sheet as a PDF.",
    "➕ Hinzufügen (5 Stück)": "➕ Add (5 pieces)", "Alles zurücksetzen": "Reset everything",
    // image tools
    "🛠 Eingebaut": "🛠 Built-in", "🖌 Externes Tool": "🖌 External tool", "🤖 KI-Tool": "🤖 AI tool", "Farbton": "Hue",
    "Weichzeichnen": "Blur", "Schwarz-Weiß": "Black & white", "Invertieren": "Invert", "⬜ Weiß entfernen": "⬜ Remove white",
    "🎯 Hintergrund entfernen": "🎯 Remove background", "Tippe auf die Farbe, die entfernt werden soll": "Tap the colour you want to remove",
    "Toleranz (Hintergrund)": "Tolerance (background)", "Hintergrund zurück": "Restore background", "⟲ 90°": "⟲ 90°", "⟳ 90°": "⟳ 90°",
    "✔ Übernehmen": "✔ Apply", "🖌 Photopea hier öffnen": "🖌 Open Photopea here", "Photopea im Tool (ähnlich GIMP/Photoshop)": "Photopea in the tool (similar to GIMP/Photoshop)",
    "Öffnet Photopea direkt hier mit deinem Bild. Nach dem Bearbeiten auf „Fertig – übernehmen“ tippen. Benötigt Internet.": "Opens Photopea right here with your image. After editing, tap “Done – apply”. Needs internet.",
    "✔ Fertig – Bild übernehmen": "✔ Done – apply image", "Mit GIMP, Photopea oder einem anderen Programm": "With GIMP, Photopea or another program",
    "GIMP ist ein Desktop-Programm und lässt sich nicht direkt in eine Webseite einbauen.": "GIMP is a desktop program and cannot be built into a web page.",
    "💾 Bild exportieren (PNG)": "💾 Export image (PNG)", "Im Programm bearbeiten, z. B.": "Edit it in the program, e.g.",
    "(am PC) oder": "(on a PC) or", "(im Browser, auch am Handy) – als PNG oder JPG speichern.": "(in the browser, also on a phone) – save as PNG or JPG.",
    "🖼 Bearbeitetes Bild einfügen": "🖼 Insert edited image", "– Position und Größe bleiben erhalten.": "– position and size are kept.",
    "🤖 Bild als Grafik nachzeichnen": "🤖 Trace image as graphic", "🤖 KI-Motiv": "🤖 AI motif", "🤖 Neues KI-Motiv zum Text": "🤖 New AI motif for the text",
    "„Nachzeichnen“ macht aus deinem Foto eine klare Vektor-Grafik – gut lesbar auf kleinen Buttons.": "“Trace” turns your photo into a clear vector graphic – easy to read on small buttons.",
    "„KI-Motiv“ lässt Claude ein passendes Motiv zeichnen (nur in der Online-Ansicht verfügbar).": "“AI motif” lets Claude draw a matching motif (only available in the online view).",
    "Die eingebauten KI-Funktionen gibt es nur in der Online-Ansicht (über deine Verknüpfung).": "The built-in AI functions are only available in the online view (via your shortcut).",
    "Externe KI-Werkzeuge": "External AI tools", "Bearbeiten, z. B. Hintergrund freistellen mit": "Edit it, e.g. remove the background with",
    "oder": "or", "🖼 Ergebnis einfügen": "🖼 Insert result", "🤖 Zeichne …": "🤖 Drawing …",
    // templates / projects
    "📥 Eingesandte Vorlagen": "📥 Submitted templates",
    "Entwürfe, die im Bildstudio anonym gesendet wurden. Beim Abrufen kommt jede Vorlage 5× auf die Druckbogen-Liste und wird danach aus der Sammelstelle gelöscht.": "Designs sent anonymously from the Image Studio. When fetched, each template is added 5× to the print sheet list and then deleted from the collection point.",
    "E-Mail": "Email", "Passwort": "Password", "Vorlagen abrufen": "Fetch templates", "Du bist angemeldet.": "You are logged in.",
    "Melde dich mit deinem Supabase-Konto an.": "Log in with your Supabase account.", "Die Sammelstelle ist noch nicht eingerichtet.": "The collection point is not set up yet.",
    "Anmeldung …": "Logging in …", "Vorlagen werden geladen …": "Loading templates …", "Keine neuen Vorlagen.": "No new templates.",
    "Laden fehlgeschlagen.": "Loading failed.", "💾 Projekte": "💾 Projects", "Name des Projekts": "Project name", "Zwischenspeichern": "Save project",
    "Gespeichert wird in der Datenbank (auf Handy und Notebook abrufbar) und zusätzlich auf diesem Gerät. Für die Datenbank musst du angemeldet sein.": "Projects are saved in the database (available on phone and notebook) and also on this device. You need to be logged in for the database.",
    "Anmelden (Supabase-Konto)": "Log in (Supabase account)", "Anmelden": "Log in", "Abmelden": "Log out", "Angemeldet.": "Logged in.",
    "⬇ Als Datei (.json)": "⬇ As file (.json)", "⬆ Datei öffnen": "⬆ Open file", "Öffnen": "Open", "Löschen": "Delete",
    "Letzter Stand (automatisch)": "Last state (automatic)", "vor dem letzten Neustart bzw. „Neu“": "before the last restart or “New”",
    "Noch keine gespeicherten Projekte.": "No saved projects yet.", "Speichern …": "Saving …", "Wird geladen …": "Loading …",
    "Projekt konnte nicht geladen werden.": "The project could not be loaded.", "Die Tabelle „projects“ fehlt noch in der Datenbank.": "The “projects” table is still missing in the database.",
    "Datenbank-Liste konnte nicht geladen werden.": "The database list could not be loaded.", "Bitte zuerst anmelden.": "Please log in first.",
    "Anmeldung abgelaufen – bitte neu anmelden.": "Login expired – please log in again.", "Die Datenbank ist noch nicht eingerichtet.": "The database is not set up yet.",
    "Letzter Stand geöffnet": "Last state opened", "Projekt geladen": "Project loaded", "Neues Projekt begonnen": "New project started",
    "PNG wird erstellt …": "Creating PNG …", "PDF konnte nicht erstellt werden.": "The PDF could not be created.",
    "PDF gespeichert": "PDF saved", "PNG gespeichert": "PNG saved", "Aufkleber-PDF gespeichert": "Sticker PDF saved", "Projekt gespeichert": "Project saved",
    "Speichern abgebrochen": "Saving cancelled", "PDF konnte nicht erstellt werden – öffne den Druckdialog …": "The PDF could not be created – opening the print dialog …",
    // messages
    "Bild füllt jetzt den Button bis über die Biegekante": "The image now fills the button beyond the fold edge",
    "🔒 Gesperrt – zum Bearbeiten erst entsperren": "🔒 Locked – unlock it first to edit", "Bild wird geladen …": "Loading image …",
    "Die Datei konnte nicht gelesen werden.": "The file could not be read.", "Bearbeitetes Bild eingefügt": "Edited image inserted",
    "Eigenes Bild eingefügt": "Own image inserted", "Bild eingefügt – ziehen, skalieren oder drehen": "Image inserted – drag, scale or rotate",
    "Dieses Bildformat kann der Browser nicht anzeigen (z. B. HEIC). Bitte als JPG oder PNG speichern.": "The browser cannot display this image format (e.g. HEIC). Please save it as JPG or PNG.",
    "In der Zwischenablage ist kein Bild.": "There is no image on the clipboard.", "Erst ein Bild einfügen": "Insert an image first",
    "Bild konnte nicht geladen werden": "The image could not be loaded", "Bild bearbeitet": "Image edited", "Bild aus Photopea übernommen": "Image taken from Photopea",
    "Photopea lädt noch …": "Photopea is still loading …", "🤖 Grafik eingefügt": "🤖 Graphic inserted", "Bitte mindestens einen Text eingeben": "Please enter at least one text",
    "🤖 Claude zeichnet ein Motiv …": "🤖 Claude is drawing a motif …", "🤖 KI-Motiv eingefügt": "🤖 AI motif inserted", "KI-Motiv nicht freigegeben": "AI motif not approved",
    "Kopieren nicht möglich – Text bitte markieren und kopieren": "Copying not possible – please select and copy the text", "Kopiert": "Copied", "Prompt kopiert": "Prompt copied",
    "Vorlage aus dem Bildstudio übernommen – 5 Buttons auf dem Bogen": "Template taken from the Image Studio – 5 buttons on the sheet",
    "Neues Design begonnen": "New design started"
  };
  // Texts with numbers or names: [pattern, replacement]
  const R = [
    [/^Projekt „(.*)“ löschen\?$/, "Delete project “$1”?"],
    [/^„(.*)“ geöffnet$/, "“$1” opened"],
    [/^„(.*)“ gespeichert: (.*)$/, (m, n, rest) => "“" + n + "” saved: " + rest
      .replace("in der Datenbank", "in the database").replace(/nicht in der Datenbank \(nicht angemeldet\)/, "not in the database (not logged in)")
      .replace(/nicht in der Datenbank \((.*?)\)/, "not in the database ($1)").replace("Tabelle „projects“ fehlt noch", "table “projects” is missing")
      .replace(", auf diesem Gerät kein Platz mehr", ", no space left on this device").replace(", auf diesem Gerät", ", on this device")],
    [/ · „(.*)“ gespeichert: /, (m, n) => " · “" + n + "” saved: "],
    [/nicht in der Datenbank/g, "not in the database"], [/in der Datenbank/g, "in the database"], [/nicht angemeldet/g, "not logged in"], [/, auf diesem Gerät\./g, ", on this device."],
    [/^PDF mit allen Buttons des Druckbogens erstellt \(fortlaufende Seiten\)\. Mit 100 % drucken\./, "PDF with all buttons of the print sheet created (continuous pages). Print at 100 %."],
    [/^Aufkleber-PDF: 20 Stück à ([\d,.]+) mm, (rund|eckig), Rand 10 mm, 1 pt Abstand\./, (m, s, f) => `Sticker PDF: 20 pieces of ${s} mm, ${f === "rund" ? "round" : "square"}, 10 mm margin, 1 pt gap.`],
    [/^PDF mit (\d+) Buttons \((\d+) × (\d+), Zuschnitt (\d+) mm\)\. Mit 100 % \/ „Tatsächliche Größe“ drucken\./, "PDF with $1 buttons ($2 × $3, cut size $4 mm). Print at 100 % / “Actual size”."],
    [/^(\d+) Buttons à (\d+) mm \(Schnitt (\d+) mm\) auf A4 \((\d+) × (\d+)\)$/, "$1 buttons of $2 mm (cut $3 mm) on A4 ($4 × $5)"],
    [/^à (\d+) mm \(Schnitt (\d+) mm\) auf A4 \((\d+) × (\d+)\)$/, "of $1 mm (cut $2 mm) on A4 ($3 × $4)"],
    [/^Gedruckt wird die$/, "Printed is the"], [/^Druckbogen-Liste$/, "print sheet list"],
    [/^\(siehe Druckbogen\)\. Ohne Liste: (\d+) × aktuelles Design\.$/, "(see print sheet). Without a list: $1 × current design."],
    [/^(\d+) Design\(s\) · (\d+) Buttons · (\d+) Seiten? \(je (\d+) Plätze\)( · Vorschau zeigt die letzte Seite)?$/, (m, a, b, c, d, e) => `${a} design(s) · ${b} buttons · ${c} page${c > 1 ? "s" : ""} (${d} spaces each)` + (e ? " · preview shows the last page" : "")],
    [/^(\d+) Buttons · Seite (\d+) von (\d+): (\d+) \/ (\d+)$/, "$1 buttons · page $2 of $3: $4 / $5"],
    [/^➕ (\d+) Stück hinzugefügt – (\d+) Buttons auf (\d+) Seiten?$/, (m, a, b, c) => `➕ ${a} added – ${b} buttons on ${c} page${c > 1 ? "s" : ""}`],
    [/^Auf dem Bogen sind (\d+)-mm-Buttons – bitte gleiche Größe wählen oder Liste leeren\.$/, "The sheet has $1 mm buttons – please choose the same size or clear the list."],
    [/^(\d+) Vorlage\(n\) je 5× auf den Druckbogen gelegt(.*)$/, (m, a, rest) => `${a} template(s) added 5× each to the print sheet` + rest.replace(/^, (\d+) hatten eine andere Buttongröße\.$/, ", $1 had a different button size.")],
    [/^➕ (\d+) Vorlage\(n\) aus dem Bildstudio je 5× auf den Druckbogen gelegt(?: \((\d+) mit anderer Buttongröße übersprungen\))?$/, (m, a, b) => `➕ ${a} template(s) from the Image Studio added 5× each to the print sheet` + (b ? ` (${b} skipped, different button size)` : "")],
    [/^Anmeldung fehlgeschlagen: (.*)$/, "Login failed: $1"],
    [/^Thema: (.*) · (\d+) mm$/, "Subject: $1 · $2 mm"],
    [/^KI-Nachzeichnen fehlgeschlagen: (.*)$/, "AI tracing failed: $1"], [/^KI-Motiv fehlgeschlagen: (.*)$/, "AI motif failed: $1"],
    [/^Hintergrund entfernen ging nicht: (.*)$/, "Removing the background failed: $1"],
    [/^(\d+) Bilder angezeigt, nach Button-Eignung sortiert\.$/, "$1 images shown, sorted by button suitability."],
    [/^Kosten ca\. ([\d,]+) \$ für (\d+) Bilde?r? \(laut OpenAI-Preisliste, Stand 2025\)\.$/, (m, c, n) => `Cost approx. $${c.replace(",", ".")} for ${n} image${n > 1 ? "s" : ""} (OpenAI price list, 2025).`],
    [/^(\d+) Bilder? (?:werden|wird) erzeugt, das dauert meist 20 bis 60 Sekunden …$/, (m, n) => `Generating ${n} image${n > 1 ? "s" : ""}, this usually takes 20 to 60 seconds …`],
    [/^Openverse antwortet mit Status (\d+)\.$/, "Openverse answered with status $1."],
    [/^(\d+) Treffer, (\d+) angezeigt\.$/, "$1 results, $2 shown."],
    [/^Eigenes Bild: (.*)$/, "Own image: $1"], [/^KI-generiert mit OpenAI gpt-image-1: „(.*)$/, "AI-generated with OpenAI gpt-image-1: “$1"],
    [/^„(.*)“ von (.*), (.*) · $/, (m, t, c, l) => `“${t === "Ohne Titel" ? "Untitled" : t}” by ${c === "unbekannt" ? "unknown" : c}, ${l} · `],
    [/^Quelle$/, "Source"],
    [/^Schnittkante (\d+) mm$/, "Cut line $1 mm"], [/^Sichtbarer Bereich (\d+) mm$/, "Visible area $1 mm"],
    [/^(\d+(?:,\d+)?) mm Button$/, "$1 mm button"],
    [/^Seite (\d+)\/(\d+)$/, "Page $1/$2"]
  ];
  function tr(s) {
    if (!s) return s;
    const t = s.trim(); if (!t) return s;
    let out = D[t];
    if (out === undefined) {
      const c = t.replace(/\s+/g, " "); out = D[c];
      if (out === undefined) {
        let r = c;
        for (const [re, rep] of R) if (rep !== null && re.test(r)) { re.lastIndex = 0; r = r.replace(re, rep); }
        if (r === c) return s;
        out = r;
      }
    }
    const lead = s.match(/^\s*/)[0], trail = s.match(/\s*$/)[0];
    return lead + out + trail;
  }
  const ATTRS = ["placeholder", "title", "aria-label", "alt"];
  function doNode(n) {
    if (n.nodeType === 3) {
      const p = n.parentNode; if (!p || p.nodeName === "SCRIPT" || p.nodeName === "STYLE" || p.nodeName === "TEXTAREA") return;
      const v = tr(n.nodeValue); if (v !== n.nodeValue) n.nodeValue = v;
    } else if (n.nodeType === 1) {
      if (n.nodeName === "SCRIPT" || n.nodeName === "STYLE") return;
      for (const a of ATTRS) if (n.hasAttribute(a)) { const o = n.getAttribute(a), v = tr(o); if (v !== o) n.setAttribute(a, v); }
      for (let c = n.firstChild; c; c = c.nextSibling) doNode(c);
    }
  }
  function run() {
    doNode(document.body); document.title = tr(document.title);
    new MutationObserver(ms => {
      for (const m of ms) {
        if (m.type === "characterData") doNode(m.target);
        else if (m.type === "attributes") doNode(m.target);
        else m.addedNodes.forEach(doNode);
      }
    }).observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ATTRS });
    new MutationObserver(() => { const t = tr(document.title); if (t !== document.title) document.title = t; })
      .observe(document.querySelector("title") || document.head, { childList: true, characterData: true, subtree: true });
  }
  const _confirm = window.confirm.bind(window), _alert = window.alert.bind(window);
  window.confirm = m => _confirm(tr(String(m))); window.alert = m => _alert(tr(String(m)));
  window.trEN = tr;
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run); else run();
})();
