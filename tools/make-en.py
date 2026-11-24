#!/usr/bin/env python3
"""Erzeugt die englischen Versionen unter /en/ aus den deutschen Apps.
Aufruf im Repo-Ordner: python3 tools/make-en.py
Die Texte übersetzt /i18n-en.js zur Laufzeit; hier werden nur Pfade, Sprache
und einige Texte angepasst, die direkt in Zeichnungen/Werte einfließen."""
import json, os, shutil, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# (deutsch, englisch) direkt im Quelltext – nur eindeutige Stellen
SRC = {
    "studiopro": [
        ('middleText: "Dein Text"', 'middleText: "Your text"'),
        ('"＋ Bogentext " + (which === "top" ? "oben" : "unten")', '"＋ Arc text " + (which === "top" ? "top" : "bottom")'),
        ('`Schnittkante ${cut} mm`', '`Cut line ${cut} mm`'),
        ('"Biegekante", "#d97706"', '"Fold edge", "#d97706"'),
        ('`Sichtbarer Bereich ${finish} mm`', '`Visible area ${finish} mm`'),
        ('ph("＋ Bild antippen"', 'ph("＋ Tap for image"'),
    ],
    "bildstudio": [
    ],
}
COMMON = [
    ('<html lang="de">', '<html lang="en">'),
    ('src="../supabase-config.js"', 'src="../../supabase-config.js"'),
]

def build(app):
    src = open(os.path.join(ROOT, app, "index.html"), encoding="utf-8").read()
    for a, b in COMMON + SRC[app]:
        if a not in src:
            print(f"Hinweis ({app}): Stelle nicht gefunden: {a[:60]}", file=sys.stderr)
        src = src.replace(a, b)
    # Übersetzer möglichst früh laden
    tag = '<script src="../../i18n-en.js"></script>\n'
    src = src.replace("</head>", tag + "</head>", 1) if "</head>" in src else tag + src
    out = os.path.join(ROOT, "en", app); os.makedirs(out, exist_ok=True)
    open(os.path.join(out, "index.html"), "w", encoding="utf-8").write(src)
    for f in ("icon-192.png", "icon-512.png"):
        shutil.copyfile(os.path.join(ROOT, app, f), os.path.join(out, f))
    m = json.load(open(os.path.join(ROOT, app, "manifest.webmanifest"), encoding="utf-8"))
    m["lang"] = "en"
    m["name"] = {"bildstudio": "Button Image Studio", "studiopro": "DIY Button StudioPro"}[app]
    m["short_name"] = {"bildstudio": "Image Studio", "studiopro": "StudioPro"}[app]
    if "description" in m:
        m["description"] = {"bildstudio": "Design button motifs and texts", "studiopro": "Design buttons and print A4 sheets"}[app]
    json.dump(m, open(os.path.join(out, "manifest.webmanifest"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)

for app in ("bildstudio", "studiopro"):
    build(app)
print("en/ aktualisiert")
