---
layout: page
title: Michael Blunck
---

Web Developer und Fachinformatiker aus Köln mit starker Kombination aus technischer Tiefe, Führungserfahrung und adressatengerechter Kommunikation.

📍 Köln, Deutschland · 💻 [github.com/nimmermaer](https://github.com/nimmermaer)

<p>
	<a href="#kontakt">Kontakt anzeigen</a> · <a href="https://github.com/nimmermaer" rel="noopener noreferrer">GitHub-Profil</a>
</p>

---

## Kurzprofil

Entwicklerprofil mit Schwerpunkt TYPO3, PHP und nachhaltiger Web-Architektur. Mehrjährige Führungserfahrung in interdisziplinären Teams mit klarem Fokus auf Kommunikation, Qualität und verlässliche Delivery.

## Profil

Kombination aus fundierter IT-Fachkompetenz und langjähriger pädagogischer Führungserfahrung. Fokus auf komplexe Web-Architekturen (insbesondere TYPO3 und PHP), Teamleitung sowie den Brückenschlag zwischen Technik und fachfremden Stakeholdern.

## Kernkompetenzen

### Tech-Skills

- TYPO3 Extension-Entwicklung
- PHP, JavaScript, HTML, CSS
- Git-Workflows (GitLab, GitHub, Bitbucket)
- CI/CD und Deployment-Prozesse
- Server-Infrastrukturen (Apache, IIS)
- E-Commerce-Systeme (OsCommerce, XTCommerce)

### Führungs- und Kommunikationskompetenzen

- Teamführung (agil und klassisch)
- Mentoring und Code-Review-Kultur
- Konfliktmanagement und Moderation
- Stakeholder-Kommunikation zwischen Technik und Fachbereich
- Medienpädagogik und Wissensvermittlung

## Berufserfahrung

### Webentwickler
**Webicorns GmbH, Köln** | *April 2023 – heute*

- Konzeption und Umsetzung diverser Webprojekte für NGOs sowie kleine und mittelständische Unternehmen.
- Enge Abstimmung mit Kunden aus dem Non-Profit-Sektor.
- Übersetzung komplexer technischer Anforderungen in verständliche, umsetzbare Lösungen.

### Teamleiter Programmierung
**IW Medien GmbH, Köln** | *Januar 2020 – April 2023*

- Disziplinarische und fachliche Leitung eines sechsköpfigen Entwicklerteams.
- Aufbau und Stärkung der Teamkollaboration durch klare Entwicklungsprozesse.
- Durchführung von Code-Reviews als Mentoring-Instrument.
- Ressourcenplanung und agiles Konfliktmanagement an der Schnittstelle zwischen Projektmanagement und Entwicklung.

### Webentwickler
**PHTH, Köln** | *September 2014 – Januar 2020*

- Full-Stack-Entwicklung und Betreuung anspruchsvoller Webprojekte für KMUs.
- Eigenverantwortliche Kundenberatung und Begleitung des gesamten Projektlebenszyklus.

### E-Commerce-Betreuung (Familienbetrieb)
**Aba-Angelshop, Laufen / Obb.** | *August 2010 – August 2012*

- Technische und administrative Betreuung von E-Commerce-Plattformen.
- Betrieb und Weiterentwicklung auf Basis von OsCommerce und XTCommerce.
- Bewusste berufliche Auszeit aus dem pädagogischen Bereich mit Fokus auf den Familienbetrieb.

## Fundierung der Führungskompetenz

### Gruppenleiter und stellvertretender Leiter
**Kinderhof am Bichl (Berchtesgaden)** | *September 2002 – September 2010*

- Verantwortung für Teile der Einrichtungsleitung und Personalorganisation.
- Langjährige Praxis in Kommunikation, Gruppendynamik und Konfliktlösung.
- Frühzeitige Initiierung medienpädagogischer Projekte mit Open-Source-Technologien (u. a. Linux/Edubuntu), um technisches Verständnis partizipativ zu vermitteln.

## Zertifizierungen und Qualifikationen

- **TYPO3 CMS Certified Developer**
- **TYPO3 CMS Certified Integrator**
- **Fachinformatiker für Anwendungsentwicklung (IHK)** | *WBS Training AG, Köln (2012-2014)*
- **Staatlich geprüfter Erzieher** | *Fachschule für Sozialpädagogik, Mölln (1999-2002)*

## Arbeitsweise

- Verbindet technische Tiefe mit klarer, adressatengerechter Kommunikation.
- Führt Teams strukturiert durch anspruchsvolle Projektphasen.
- Richtet Entwicklung auf nachhaltige Wartbarkeit und nachvollziehbare Qualität aus.

## Netzwerke

<p>
	<a href="https://www.linkedin.com/in/michael-blunck-06843079/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
	· <a href="https://www.xing.com/profile/Michael_Blunck4/" target="_blank" rel="noopener noreferrer">XING</a>
	· <button id="share-page" type="button">Seite teilen</button>
</p>

## Kontakt

<div id="kontakt">
	<p>
		<a
			href="#kontakt"
			data-mailto-token="{{ site.contact_email_token }}"
			data-mailto-vector="{{ site.contact_email_vector }}"
			rel="nofollow noopener noreferrer"
		>
			mi&#64;blunck.com
		</a>
	</p>
</div>

<script>
	(function () {
		var shareButton = document.getElementById("share-page");
		if (!shareButton) {
			return;
		}

		shareButton.addEventListener("click", async function () {
			var shareData = {
				title: document.title,
				text: "Vita und Kontakt von Michael Blunck",
				url: window.location.href
			};

			if (navigator.share) {
				try {
					await navigator.share(shareData);
				} catch (error) {
					if (error && error.name !== "AbortError") {
						window.prompt("Link kopieren:", window.location.href);
					}
				}
				return;
			}

			window.prompt("Link kopieren:", window.location.href);
		});
	})();
</script>
