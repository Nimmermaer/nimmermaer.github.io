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
**AWO Kinderhort Moorrüben (Dachau) und Kinderhof am Bichl (Berchtesgaden)** | *September 2002 – September 2010*

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

## Kontakt

<div id="kontakt">
	<p id="contact-hint">Zum Schutz vor Bots werden E-Mail und Telefonnummer erst nach Klick erzeugt.</p>
	<p>
		<button id="reveal-contact" type="button">Kontaktdaten freischalten</button>
	</p>
	<ul id="contact-list" hidden>
		<li><a id="contact-email" rel="nofollow noopener noreferrer">E-Mail senden</a></li>
		<li><a id="contact-phone" rel="nofollow noopener noreferrer">Anrufen</a></li>
	</ul>
	<p id="contact-phone-missing" hidden>Telefonnummer folgt.</p>
</div>

<script>
	(function () {
		function decodeChars(codes) {
			return (codes || []).map(function (c) { return String.fromCharCode(c); }).join("");
		}

		var revealBtn = document.getElementById("reveal-contact");
		if (!revealBtn) return;

		revealBtn.addEventListener("click", function () {
			var email = decodeChars({{ site.contact_email_codes | jsonify }});
			var phone = decodeChars({{ site.contact_phone_codes | jsonify }});

			var emailLink = document.getElementById("contact-email");
			var phoneLink = document.getElementById("contact-phone");
			var phoneMissing = document.getElementById("contact-phone-missing");
			var list = document.getElementById("contact-list");
			var hint = document.getElementById("contact-hint");

			if (email && emailLink) {
				emailLink.href = "mailto:" + email;
				emailLink.textContent = email;
			}

			if (phone && phoneLink) {
				phoneLink.href = "tel:" + phone.replace(/\s+/g, "");
				phoneLink.textContent = phone;
			} else {
				phoneLink.parentElement.hidden = true;
				phoneMissing.hidden = false;
			}

			list.hidden = false;
			hint.textContent = "Kontaktdaten sind jetzt sichtbar.";
			revealBtn.disabled = true;
			revealBtn.textContent = "Kontaktdaten geladen";
		});
	})();
</script>
