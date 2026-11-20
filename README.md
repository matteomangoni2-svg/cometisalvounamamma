# Come ti salvo una mamma · sito

La pagina del libro «Come ti salvo una mamma» di Cristina Tosi. Presenta il libro, regala un gioco in cambio dell'email e porta all'acquisto su Amazon.

Indirizzo: https://www.cometisalvounamamma.it/ (dominio su Aruba, pubblicato con GitHub Pages)

## Cosa c'è

| File | A cosa serve |
|---|---|
| `index.html` | La landing page |
| `grazie.html` | La pagina che si vede dopo aver lasciato l'email |
| `email/consegna.html` | Il modello dell'email che manda il gioco: va ricopiato nel servizio di email, non è una pagina del sito |
| `assets/` | Immagini, caratteri e `site.js` |

I caratteri (Be Vietnam Pro e Lato) sono dentro il sito: la pagina non chiede niente a Google Fonts.

## Pubblicazione

GitHub Pages è attivo e pubblica il ramo **gh-pages**. Il file `CNAME` collega il sito al dominio www.cometisalvounamamma.it: non va cancellato. Ogni modifica al sito va caricata sia su `main` sia su `gh-pages`: è quello che arriva online.

Con un account GitHub gratuito la repository deve restare pubblica: tutto quello che c'è dentro si può leggere.

## Da completare prima di far girare la pagina

- **Modulo dell'email:** oggi controlla l'indirizzo e porta a `grazie.html`, ma **non salva niente**. Va collegato a un servizio di email (per esempio MailerLite o Brevo), che manda anche il PDF del gioco.
- **Link:** Amazon, informativa privacy, contatti e social si scrivono in un solo punto, in cima ad `assets/site.js`.
- **Informativa privacy** e **PDF del gioco** da regalare: da preparare.
- **Testimonianze:** la sezione è nascosta finché non ci sono frasi vere, con il consenso scritto delle famiglie. Per mostrarla, in `index.html` togli `hidden` da `<section id="testimonianze" hidden`.

## Data di uscita

Fino al 24 novembre 2026 la pagina dice «Esce su Amazon il 24 novembre». Dal 24 compaiono da soli le frasi e i bottoni per comprarlo. Per vedere le due versioni, aggiungi in fondo all'indirizzo `?fase=prima` oppure `?fase=vendita`.
