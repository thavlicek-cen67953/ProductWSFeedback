// ======================================================================
// SOUBOR S OTÁZKAMI DOTAZNÍKU – TENTO SOUBOR UPRAVUJETE
// ======================================================================
// Otázky se píšou jako obyčejný text, podobně jako byste je psali
// do Wordu: nejdřív text otázky, pod ní odrážkami možnosti odpovědí.
// Podrobný návod (jak přidat otázku, možnost, nadpis sekce, poznámku
// apod.) najdete v souboru "kompas_workshop_research_2027_CZ_EN.html",
// hned na jeho úplném začátku.
//
// DŮLEŽITÉ – tento soubor musí zůstat ve STEJNÉ SLOŽCE jako soubor
// "kompas_workshop_research_2027_CZ_EN.html" (ten se dívá do tohoto
// souboru a vykresluje podle něj vzhled dotazníku). Soubory tedy vždy
// kopírujte/přesouvejte/stahujte společně.
//
// Tento soubor NEOTVÍREJTE přímo v prohlížeči (dvojklikem) – pro náhled
// dotazníku otevírejte "kompas_workshop_research_2027_CZ_EN.html".
//
// JEDINÉ DVA ŘÁDKY, KTERÉ NEMAŽTE A NEUPRAVUJTE, jsou řádky se slovy
// "window.OTAZKY_CZ = `" a "window.OTAZKY_EN = `" a uzavírací "`;" pod
// každým blokem – otevírají a zavírají text otázek. VŠECHNO MEZI NIMI
// upravujte volně jako běžný text.
//
// JEDNO TECHNICKÉ OMEZENÍ: v textu otázek, možností ani poznámek
// nepoužívejte znak zpětný apostrof (`) ani sekvenci dolar + složená
// závorka "${" – jde o speciální znaky, které tento soubor potřebuje.
// V běžné češtině/angličtině je prakticky nikdy nepotřebujete.
// ======================================================================

window.OTAZKY_CZ = `
// ====================================================================
// PŘÍKLAD OTÁZKY (tyto řádky s "//" jsou jen poznámka, nic nedělají):
//
// 1) Text otázky, kterou uvidí respondent
// Typ: jedna možnost | Povinná: ano
// - První možnost odpovědi
// - Druhá možnost odpovědi
//
// Tečka za číslem nebo závorka ("1." i "1)") funguje stejně a číslo
// slouží jen pro orientaci – dotazník si otázky i progress bar
// přepočítá sám, i když číslování nebude navazovat.
// ====================================================================

## 01 · Vaše účast

1) Jaká byla vaše role při workshopech?
Typ: jedna možnost | Povinná: ano
- Product Manager / Product Owner
- Domain / Tribe / People Lead
- Člen/ka produktového týmu (design, engineering, business, další)
- Jiná role

2) Kterých aktivit jste se účastnil/a?
Typ: více možností | Povinná: ano
- Workshopy k doménové / produktové vizi a strategii
- Tvorba nebo práce s Kompasem
- Edukace k Opportunity Solution Tree (OST)
- Edukace k Service Blueprintu / zákaznické cestě
- Další produktová edukace nebo workshop
- Nevím / nepamatuji si přesně

## 02 · Co vám přinesly workshopy a edukace

3) Jak užitečné pro vaši práci byly workshopy a edukace, kterých jste se účastnil/a?
Typ: hodnocení 1-5 | Povinná: ano
- Vůbec
- Spíše ne
- Částečně
- Spíše ano
- Velmi

4) Co pro vás bylo nejpřínosnější?
Typ: více možností (max 2) | Povinná: ano
- Ujasnění produktové / doménové vize a směru
- Lepší pochopení produktové strategie a priorit
- Propojení cílů, metrik a rozhodování (např. v Kompasu)
- Praktické metody (např. OST, service blueprint)
- Společná diskuse a sladění týmu / leadershipu
- Konkrétní výstupy, šablony a materiály
- Zatím nic výrazně přínosného
- Jiné (upřesněte v komentáři níže)

5) Co jste díky workshopům nebo edukaci konkrétně začali dělat jinak?
Typ: volný text | Povinná: ano
Nápověda: Například změna v prioritizaci, rozhodování, práci se zákaznickými potřebami či používání Kompasu. Pokud se zatím nic nezměnilo, napište to prosím také.
Placeholder: Vaše odpověď…

6) Co bylo méně užitečné nebo co bychom měli na workshopech či edukaci zlepšit?
Typ: volný text | Povinná: ano
Placeholder: Vaše odpověď…

## 03 · Potřeby a podpora pro rok 2027

7) Co vám dnes nejvíce brání v efektivnější produktové práci?
Typ: více možností (max 3) | Povinná: ano
- Nedostatek času / převaha operativní práce
- Nejasná strategie, priority nebo očekávané výsledky
- Nejasné kompetence a rozhodovací pravomoci
- Nedostatek zákaznických poznatků / discovery
- Nedostatek potřebných dovedností nebo zkušeností
- Závislosti na jiných týmech / složitá spolupráce
- Nedostatečné sladění s leadershipem či stakeholdery
- Nemáme zásadní překážky
- Jiné (upřesněte níže)

8) V jakých oblastech by váš tým nejvíce ocenil další rozvoj?
Typ: více možností (max 3) | Povinná: ano
- Produktová strategie a její použití v praxi
- Definice outcomes a měření dopadu
- Discovery a validace zákaznických potřeb
- Prioritizace a produktové rozhodování
- Práce s Kompasem jako nástrojem pro řízení produktu
- Stakeholder management a spolupráce s leadershipem
- Návrh zákaznických cest / service blueprint
- Produktové fungování a spolupráce v týmu
- Jiná oblast (upřesněte níže)

9) Jakou formu podpory od CoE Product Management byste v roce 2027 preferovali?
Typ: více možností (max 2) | Povinná: ano
- Praktický coaching přímo s týmem
- Cílené workshopy na konkrétní problém
- Krátké vzdělávací bloky / příklady z praxe
- Šablony, návody a playbooky
- Pomoc se sladěním leadershipu a stakeholderů
- Sdílení zkušeností mezi týmy / komunita
- Aktuálně další podporu nepotřebujeme

10) Pokud bychom vašemu týmu v roce 2027 pomohli vyřešit jednu věc, co by to mělo být?
Typ: volný text | Povinná: ano
Nápověda: Zkuste popsat konkrétní problém, ne pouze název školení.
Placeholder: Nejdůležitější problém nebo potřeba vašeho týmu…
`;

window.OTAZKY_EN = `
## 01 · Your participation

1) What was your role during the workshops?
Typ: jedna možnost | Povinná: ano
- Product Manager / Product Owner
- Domain / Tribe / People Lead
- Product team member (design, engineering, business, other)
- Other role

2) Which activities did you participate in?
Typ: více možností | Povinná: ano
- Domain / product vision and strategy workshops
- Creating or working with Kompas
- Opportunity Solution Tree (OST) learning
- Service Blueprint / customer journey learning
- Other product learning activities or workshops
- Not sure / I don’t remember exactly

## 02 · Value of workshops and learning

3) How useful were the workshops and learning activities you attended for your actual work?
Typ: hodnocení 1-5 | Povinná: ano
- Not at all
- Slightly
- Somewhat
- Quite
- Extremely

4) What did you find most valuable?
Typ: více možností (max 2) | Povinná: ano
- Clarifying the product / domain vision and direction
- Better understanding of product strategy and priorities
- Connecting goals, metrics and decisions (e.g. in Kompas)
- Practical methods (e.g. OST, service blueprint)
- Discussion and alignment within the team / leadership
- Tangible outputs, templates and materials
- Nothing particularly valuable so far
- Other (please elaborate below)

5) What have you actually started doing differently as a result of the workshops or learning activities?
Typ: volný text | Povinná: ano
Nápověda: For example, changes in prioritization, decision-making, customer discovery or use of Kompas. If nothing has changed yet, please feel free to say so.
Placeholder: Your answer…

6) What was less useful, or what should we improve in the workshops or learning activities?
Typ: volný text | Povinná: ano
Placeholder: Your answer…

## 03 · Needs and support for 2027

7) What currently prevents your team from working more effectively as a product team?
Typ: více možností (max 3) | Povinná: ano
- Limited time / operational workload
- Unclear strategy, priorities or expected outcomes
- Unclear roles and decision rights
- Limited customer insights / discovery
- Missing capabilities or experience
- Cross-team dependencies / difficult collaboration
- Insufficient alignment with leadership or stakeholders
- No significant barriers
- Other (please specify below)

8) In which areas would your team benefit most from further development?
Typ: více možností (max 3) | Povinná: ano
- Product strategy and applying it in practice
- Defining outcomes and measuring impact
- Customer discovery and validation
- Prioritization and product decision-making
- Using Kompas to guide product management
- Stakeholder management and leadership alignment
- Customer journeys / service blueprint
- Product team collaboration and ways of working
- Other area (please specify below)

9) What type of support from CoE Product Management would you prefer in 2027?
Typ: více možností (max 2) | Povinná: ano
- Hands-on coaching with our team
- Focused workshops on a specific challenge
- Short learning sessions / practical case studies
- Templates, guides and playbooks
- Support with leadership / stakeholder alignment
- Peer learning / product community
- We do not need additional support right now

10) If we could help your team solve just one challenge in 2027, what should it be?
Typ: volný text | Povinná: ano
Nápověda: Please describe a concrete problem rather than simply naming a training course.
Placeholder: Your team’s most important challenge or need…
`;
