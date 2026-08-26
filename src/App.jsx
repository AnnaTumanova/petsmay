import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'

const PawIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="15.5" r="4.2" />
    <circle cx="5.5" cy="8" r="2" />
    <circle cx="18.5" cy="8" r="2" />
    <circle cx="9" cy="5" r="1.8" />
    <circle cx="15" cy="5" r="1.8" />
  </svg>
)

const makeFrames = (prefix) => {
  const firstHalf = Array.from({ length: 14 }, (_, i) => (
    <div className="frame" key={`${prefix}-a-${i}`}>
      <PawIcon />
    </div>
  ))
  const secondHalf = Array.from({ length: 14 }, (_, i) => (
    <div className="frame" key={`${prefix}-b-${i}`}>
      <PawIcon />
    </div>
  ))
  return [...firstHalf, ...secondHalf]
}

const copy = {
  pl: {
    title: 'PetsMay — Autentyczne wideo UGC dla marek zoologicznych',
    description:
      'PetsMay dostarcza gotowe pakiety wideo UGC od właścicieli psów i kotów. Bez szukania twórców, bez negocjacji — tylko gotowy materiał do reklamy.',
    nav: {
      how: 'Jak to działa',
      pricing: 'Cennik',
      forWhom: 'Dla kogo',
      faq: 'FAQ',
      creator: 'Zostań twórcą',
      cta: 'Zamów pakiet',
    },
    hero: {
      eyebrow: 'Agencja UGC dla marek zoologicznych',
      title: 'Wideo od prawdziwych właścicieli psów i kotów, gotowe do reklamy w 10 dni.',
      sub: 'Dobieramy twórców, koordynujemy nagrania i dostarczamy zmontowany materiał. Ty otrzymujesz gotowe pliki — bez szukania, bez negocjacji, bez zgadywania.',
      ctaPrimary: 'Zamów pierwszy pakiet',
      ctaSecondary: 'Zobacz, jak to działa',
      trust: 'BAZA 40+ ZWERYFIKOWANYCH TWÓRCÓW · PSY I KOTY · CAŁA POLSKA',
    },
    ticket: {
      row: 'Pakiet',
      nr: 'Nr 001',
      title: 'Pakiet Start',
      desc: '5 gotowych nagrań UGC, jeden brief, jedna faktura.',
      films: 'filmów',
      days: 'dni roboczych',
      rights: 'praw do materiału',
    },
    problem: {
      eyebrow: 'Dlaczego UGC',
      title: 'Reklama, która wygląda jak polecenie, nie jak reklama',
      text: 'Klienci ufają nagraniom prawdziwych opiekunów zwierząt bardziej niż profesjonalnym sesjom zdjęciowym. Problem w tym, że dotarcie do dobrych twórców i zorganizowanie nagrań zwykle zajmuje tygodnie.',
      without: 'Bez nas',
      withoutText:
        'Szukasz twórców ręcznie, negocjujesz stawki, piszesz briefy, czekasz na materiał, poprawiasz montaż. Tygodnie pracy zanim reklama w ogóle wystartuje.',
      with: 'Z PetsMay',
      withText:
        'Zamawiasz pakiet, dostajesz gotowe, zmontowane wideo z pełnymi prawami do wykorzystania w reklamach. Jeden kontakt, jedna faktura, jeden termin.',
    },
    process: {
      eyebrow: 'Proces',
      title: 'Jak to działa — cztery ujęcia',
      text: 'Każde zamówienie przechodzi przez ten sam, przewidywalny proces produkcyjny.',
      scenes: [
        {
          num: '01',
          title: 'Wybierasz pakiet i produkt',
          text: 'Mówisz nam, co chcesz pokazać — karmę, przekąskę, akcesorium czy usługę groomerską. Ustalamy ton i kluczowe punkty do przekazania.',
        },
        {
          num: '02',
          title: 'Dobieramy twórców',
          text: 'Z naszej bazy właścicieli psów i kotów proponujemy profile dopasowane do Twojej marki — pod względem rasy, stylu i odbiorców.',
        },
        {
          num: '03',
          title: 'Realizujemy nagrania',
          text: 'Koordynujemy cały proces — od briefu po odbiór materiału. Ty nie musisz pisać ani jednej wiadomości do twórcy.',
        },
        {
          num: '04',
          title: 'Dostarczamy gotowy materiał',
          text: 'Zmontowane pliki wideo, gotowe do wgrania w reklamy płatne i social media, wraz z pełnymi prawami do wykorzystania.',
        },
      ],
    },
    pricing: {
      eyebrow: 'Cennik',
      title: 'Dwa sposoby na start',
      text: 'Zacznij od gotowego materiału, przejdź do pełnej kampanii, kiedy będziesz gotowy.',
      start: {
        tag: 'Bilet 01 — Materiał',
        title: 'Pakiet Start',
        desc: '5 filmów UGC bez publikacji — surowy materiał tylko dla Twojej marki.',
        amount: '1800–2500 zł',
        per: '/ pakiet',
        features: [
          '5 nagrań od różnych twórców',
          'Pełne prawa do reklam płatnych',
          'Realizacja w 7–10 dni roboczych',
          'Jeden brief, jedna faktura',
        ],
        cta: 'Zamów Pakiet Start',
      },
      campaign: {
        tag: 'Bilet 02 — Zasięg',
        title: 'Pakiet Kampania',
        desc: 'Publikacja u 3–10 twórców na ich własnych profilach, z pełną koordynacją.',
        amount: 'Wycena indywidualna',
        features: [
          'Dobór twórców pod zasięg i niszę',
          'Brief, koordynacja, nadzór jakości',
          'Raport z zasięgów i zaangażowania',
          'Możliwość regularnej współpracy',
        ],
        cta: 'Zapytaj o wycenę',
      },
    },
    forWhom: {
      eyebrow: 'Dla kogo',
      title: 'Marki, z którymi najlepiej nam się pracuje',
      tags: [
        'Karmy i przekąski',
        'Suplementy dla zwierząt',
        'Akcesoria i zabawki',
        'Gabinety groomerskie',
        'Sklepy zoologiczne',
        'Subskrypcje pudełek',
        'Usługi dla zwierząt',
      ],
    },
    portfolio: {
      eyebrow: 'Portfolio',
      title: 'Przykładowe formaty UGC',
      text: 'Tak wygląda realny materiał od twórców — wzorce, które marki kupują najchętniej. Każdy format otwiera się od haka, pokazuje szczerą reakcję zwierzaka i mieści się w pionowym klipie do 30 sekund.',
      patterns: [
        {
          title: 'Rozmowa do kamery + reakcja',
          desc: 'Twórca mówi jak do znajomego, pokazuje prawdziwą reakcję psa lub kota na smakołyk, bez scenariusza — celowo surowe i autentyczne.',
        },
        {
          title: 'Hak na początku',
          desc: 'Otwarcie od kontrowersyjnego lub relatable zdania („mój pies nienawidził każdego przysmaku, aż ten...”), potem estetyczne B-roll z produktem w użyciu.',
        },
        {
          title: 'Przed / po',
          desc: 'Szczególnie mocne dla suplementów i produktów funkcjonalnych — starszy pies z problemami stawowymi, niespokojny kot z adopcji, dokumentowanie zmiany.',
        },
        {
          title: 'Unboxing / dzień z życia',
          desc: 'Najprostszy format: szczera pierwsza reakcja na otrzymanie i przetestowanie produktu.',
        },
      ],
      samplesTitle: 'Przykładowe scenariusze',
      samples: [
        {
          product: 'Przysmak',
          hook: '„Mój pies nienawidził każdego przysmaku, aż dostał ten.”',
          shots: [
            '0–3 s: twórca mówi haka prosto do kamery.',
            '3–8 s: pokazanie opakowania i otwarcie.',
            '8–20 s: pies bierze przysmak, żuje, merda ogonem — autentyczna reakcja.',
            '20–28 s: podsumowanie: „Zajmuje mu to dłużej niż zwykle, więc nie żebrze.”',
          ],
        },
        {
          product: 'Zabawka',
          hook: '„Pierwszy raz widziałam, żeby tak długo się nią bawił.”',
          shots: [
            '0–3 s: hak w pionowym formacie.',
            '3–10 s: unboxing — wyciąganie zabawki z pudełka.',
            '10–22 s: pies bawi się zabawką — skoki, bieg, aportowanie.',
            '22–30 s: zwierzak sam wraca do zabawki po zakończeniu nagrania.',
          ],
        },
        {
          product: 'Suplement',
          hook: '„Dwa tygodnie temu wstawał rano z trudem. Teraz zobaczcie sami.”',
          shots: [
            '0–4 s: krótki „przed” — starszy pies powoli wstaje.',
            '4–10 s: pokazanie opakowania suplementu i dozowanie.',
            '10–22 s: codzienna rutyna — jedzenie, spacer, zabawa.',
            '22–30 s: „po” — ten sam pies wstaje energiczniej, biegnie po schodach.',
          ],
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Najczęstsze pytania',
      items: [
        {
          q: 'Czy mogę zobaczyć przykładowe nagrania przed zamówieniem?',
          a: 'Tak — wysyłamy próbki z naszej bazy twórców i możemy zrealizować nagranie testowe przed pełnym zamówieniem.',
        },
        {
          q: 'Czy otrzymuję pełne prawa do materiału?',
          a: 'Tak. Prawa do wykorzystania w reklamach płatnych i mediach społecznościowych są zawarte w cenie każdego pakietu.',
        },
        {
          q: 'Jak długo trwa realizacja?',
          a: 'Standardowy Pakiet Start realizujemy w 7–10 dni roboczych od potwierdzenia briefu.',
        },
        {
          q: 'Czy mogę wybrać konkretnych twórców?',
          a: 'Tak — przed realizacją pokazujemy propozycje profili z naszej bazy, dopasowane do Twojej marki.',
        },
      ],
    },
    contact: {
      title: 'Gotowy na pierwszy pakiet?',
      text: 'Napisz do nas, a w 15 minut rozmowy ustalimy, który pakiet będzie najlepszy dla Twojej marki.',
      email: 'Napisz na hello@petsmay.org',
      call: 'Umów rozmowę',
    },
    creatorSignup: {
      eyebrow: 'Twórcy',
      title: 'Zostań twórcą PetsMay',
      text: 'Masz psa lub kota i lubisz nagrywać? Zapisz się do naszej bazy i bierz udział w kampaniach.',
      form: {
        email: 'E-mail',
        name: 'Imię',
        city: 'Miasto',
        pet: 'Zwierzak',
        petOptions: ['Pies', 'Kot', 'Pies i kot'],
        social: 'Instagram / TikTok',
        about: 'Kilka słów o Tobie i zwierzaku',
        submit: 'Zapisz się',
        sending: 'Wysyłanie...',
        success: 'Dziękujemy! Twoje zgłoszenie zostało zapisane. Odezwiemy się wkrótce.',
        error: 'Coś poszło nie tak. Spróbuj ponownie lub napisz na hello@petsmay.org.',
      },
    },
    footer: 'Agencja UGC dla marek zoologicznych · Polska',
  },
  en: {
    title: 'PetsMay — Authentic UGC videos for pet brands',
    description:
      'PetsMay delivers ready-made UGC video packages from dog and cat owners. No creator hunting, no negotiation — just ready-to-run ad assets.',
    nav: {
      how: 'How it works',
      pricing: 'Pricing',
      forWhom: 'For whom',
      faq: 'FAQ',
      creator: 'Become a creator',
      cta: 'Order a package',
    },
    hero: {
      eyebrow: 'UGC agency for pet brands',
      title: 'Video from real dog and cat owners, ready to advertise in 10 days.',
      sub: 'We match creators, coordinate filming and deliver edited footage. You get ready-to-use files — no searching, no negotiating, no guessing.',
      ctaPrimary: 'Order your first package',
      ctaSecondary: 'See how it works',
      trust: 'BASE OF 40+ VERIFIED CREATORS · DOGS AND CATS · ALL OF POLAND',
    },
    ticket: {
      row: 'Package',
      nr: 'No 001',
      title: 'Start Package',
      desc: '5 ready UGC clips, one brief, one invoice.',
      films: 'videos',
      days: 'business days',
      rights: 'content rights',
    },
    problem: {
      eyebrow: 'Why UGC',
      title: 'Advertising that looks like a recommendation, not an ad',
      text: 'Customers trust real pet parents more than professional photoshoots. The problem: reaching good creators and organizing shoots usually takes weeks.',
      without: 'Without us',
      withoutText:
        'You search creators manually, negotiate rates, write briefs, wait for footage, fix edits. Weeks of work before your ad can start.',
      with: 'With PetsMay',
      withText:
        'You order a package, get edited, ready-to-run videos with full rights to use in ads. One contact, one invoice, one deadline.',
    },
    process: {
      eyebrow: 'Process',
      title: 'How it works — four takes',
      text: 'Every order follows the same, predictable production process.',
      scenes: [
        {
          num: '01',
          title: 'Pick a package and product',
          text: 'Tell us what to show — food, treat, accessory or grooming service. We set the tone and key messages.',
        },
        {
          num: '02',
          title: 'We match creators',
          text: 'From our base of dog and cat owners we propose profiles that fit your brand — by breed, style and audience.',
        },
        {
          num: '03',
          title: 'We run the shoot',
          text: 'We coordinate the whole process — from brief to delivery. You do not write a single message to a creator.',
        },
        {
          num: '04',
          title: 'We deliver ready footage',
          text: 'Edited video files, ready to upload to paid ads and social media, with full rights to use.',
        },
      ],
    },
    pricing: {
      eyebrow: 'Pricing',
      title: 'Two ways to start',
      text: 'Start with ready footage, move to a full campaign when you are ready.',
      start: {
        tag: 'Ticket 01 — Footage',
        title: 'Start Package',
        desc: '5 UGC videos without publishing — raw material for your brand only.',
        amount: '1800–2500 PLN',
        per: '/ package',
        features: [
          '5 clips from different creators',
          'Full rights for paid ads',
          'Delivery in 7–10 business days',
          'One brief, one invoice',
        ],
        cta: 'Order Start Package',
      },
      campaign: {
        tag: 'Ticket 02 — Reach',
        title: 'Campaign Package',
        desc: 'Posting from 3–10 creators on their own profiles, fully coordinated.',
        amount: 'Custom quote',
        features: [
          'Creator selection for reach and niche',
          'Brief, coordination, quality control',
          'Reach and engagement report',
          'Option for recurring collaboration',
        ],
        cta: 'Ask for a quote',
      },
    },
    forWhom: {
      eyebrow: 'For whom',
      title: 'Brands we work best with',
      tags: [
        'Foods and treats',
        'Pet supplements',
        'Accessories and toys',
        'Grooming salons',
        'Pet shops',
        'Subscription boxes',
        'Pet services',
      ],
    },
    portfolio: {
      eyebrow: 'Portfolio',
      title: 'Sample UGC formats',
      text: 'This is what real creator content looks like — the patterns brands buy most. Every format opens with a hook, shows an honest pet reaction, and fits a vertical clip under 30 seconds.',
      patterns: [
        {
          title: 'Talk-to-camera + reaction',
          desc: 'The creator speaks like a friend, shows the dog or cat\'s genuine reaction to a treat, no script — raw and authentic on purpose.',
        },
        {
          title: 'Hook-first',
          desc: 'Opens with a controversial or relatable line ("my dog hated every treat until this one"), then cuts to aesthetic B-roll of the product in use.',
        },
        {
          title: 'Before / after',
          desc: 'Especially strong for supplements and functional products — an older dog with joint issues, an anxious rescue cat, documenting a transformation.',
        },
        {
          title: 'Unboxing / day-in-the-life',
          desc: 'The simplest format: a genuine first reaction to receiving and trying the product.',
        },
      ],
      samplesTitle: 'Sample shot-lists',
      samples: [
        {
          product: 'Treat',
          hook: '"My dog hated every treat until this one."',
          shots: [
            '0–3 s: creator delivers the hook straight to camera.',
            '3–8 s: showing the pack and opening it.',
            '8–20 s: dog takes the treat, chews, wags tail — genuine reaction.',
            '20–28 s: wrap-up: "It keeps him busy longer, so no begging."',
          ],
        },
        {
          product: 'Toy',
          hook: '"First time I\'ve seen him play with one toy for this long."',
          shots: [
            '0–3 s: hook in vertical format.',
            '3–10 s: unboxing — pulling the toy out of the box.',
            '10–22 s: dog plays with the toy — jumping, running, fetching.',
            '22–30 s: the pet goes back to the toy after the clip ends.',
          ],
        },
        {
          product: 'Supplement',
          hook: '"Two weeks ago he struggled to get up in the morning. See for yourself."',
          shots: [
            '0–4 s: short "before" — older dog getting up slowly.',
            '4–10 s: showing the supplement pack and dosing.',
            '10–22 s: daily routine — eating, walking, playing.',
            '22–30 s: "after" — the same dog gets up easier, runs the stairs.',
          ],
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Frequently asked questions',
      items: [
        {
          q: 'Can I see sample clips before ordering?',
          a: 'Yes — we send samples from our creator base and can produce a test clip before the full order.',
        },
        {
          q: 'Do I get full rights to the content?',
          a: 'Yes. Usage rights for paid ads and social media are included in the price of every package.',
        },
        {
          q: 'How long does production take?',
          a: 'Our standard Start Package is delivered within 7–10 business days after the brief is confirmed.',
        },
        {
          q: 'Can I pick specific creators?',
          a: 'Yes — before production we show profile suggestions from our base, matched to your brand.',
        },
      ],
    },
    contact: {
      title: 'Ready for your first package?',
      text: 'Email us, and in a 15-minute call we will decide which package fits your brand best.',
      email: 'Write to hello@petsmay.org',
      call: 'Book a call',
    },
    creatorSignup: {
      eyebrow: 'Creators',
      title: 'Become a PetsMay creator',
      text: 'Have a dog or cat and enjoy filming? Join our creator base and take part in brand campaigns.',
      form: {
        email: 'Email',
        name: 'Name',
        city: 'City',
        pet: 'Pet',
        petOptions: ['Dog', 'Cat', 'Dog and cat'],
        social: 'Instagram / TikTok',
        about: 'A few words about you and your pet',
        submit: 'Sign up',
        sending: 'Sending...',
        success: 'Thanks! Your application was saved. We will get back to you soon.',
        error: 'Something went wrong. Please try again or email hello@petsmay.org.',
      },
    },
    footer: 'UGC agency for pet brands · Poland',
  },
}

const CreatorSignup = ({ c }) => {
  const [form, setForm] = useState({ email: '', name: '', city: '', pet: '', social: '', about: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!supabase) {
      setStatus('error')
      return
    }
    setStatus('loading')
    const { error } = await supabase.from('creator_signups').insert([form])
    if (error) {
      console.error(error)
      setStatus('error')
    } else {
      setStatus('success')
      setForm({ email: '', name: '', city: '', pet: '', social: '', about: '' })
    }
  }

  if (status === 'success') {
    return <div className="signup-success">{c.form.success}</div>
  }

  return (
    <form className="creator-form" onSubmit={handleSubmit}>
      <input
        name="email"
        type="email"
        placeholder={c.form.email}
        value={form.email}
        onChange={handleChange}
        required
      />
      <div className="form-row two-up">
        <input
          name="name"
          type="text"
          placeholder={c.form.name}
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="city"
          type="text"
          placeholder={c.form.city}
          value={form.city}
          onChange={handleChange}
        />
      </div>
      <select name="pet" value={form.pet} onChange={handleChange} required>
        <option value="">{c.form.pet}</option>
        {c.form.petOptions.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
      <input
        name="social"
        type="text"
        placeholder={c.form.social}
        value={form.social}
        onChange={handleChange}
      />
      <textarea
        name="about"
        rows="4"
        placeholder={c.form.about}
        value={form.about}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn-amber" disabled={status === 'loading'}>
        {status === 'loading' ? c.form.sending : c.form.submit}
      </button>
      {status === 'error' && <p className="form-error">{c.form.error}</p>}
    </form>
  )
}

function App() {
  const [lang, setLang] = useState('pl')
  const c = copy[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = c.title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', c.description)
  }, [lang, c])

  return (
    <>
      <header>
        <nav>
          <a href="#" className="logo">PetsMay<span className="dot">.</span></a>
          <div className="navlinks">
            <a href="#jak-to-dziala">{c.nav.how}</a>
            <a href="#cennik">{c.nav.pricing}</a>
            <a href="#dla-kogo">{c.nav.forWhom}</a>
            <a href="#faq">{c.nav.faq}</a>
            <a href="#tworcy">{c.nav.creator}</a>
          </div>
          <div className="nav-right">
            <div className="lang-switch" aria-label="Language">
              <button
                className={lang === 'pl' ? 'active' : ''}
                onClick={() => setLang('pl')}
                aria-pressed={lang === 'pl'}
              >
                PL
              </button>
              <span>/</span>
              <button
                className={lang === 'en' ? 'active' : ''}
                onClick={() => setLang('en')}
                aria-pressed={lang === 'en'}
              >
                EN
              </button>
            </div>
            <a href="#kontakt" className="btn btn-solid nav-cta">{c.nav.cta}</a>
          </div>
        </nav>
      </header>

      <div className="filmstrip" aria-hidden="true">
        <div className="filmstrip-track">{makeFrames('track1')}</div>
      </div>

      <main>
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <span className="eyebrow">{c.hero.eyebrow}</span>
              <h1>{c.hero.title}</h1>
              <p className="hero-sub">{c.hero.sub}</p>
              <div className="hero-actions">
                <a href="#kontakt" className="btn btn-amber">{c.hero.ctaPrimary}</a>
                <a href="#jak-to-dziala" className="btn btn-ghost">{c.hero.ctaSecondary}</a>
              </div>
              <div className="hero-trust">{c.hero.trust}</div>
            </div>

            <div className="ticket">
              <div className="ticket-row"><span>{c.ticket.row}</span><span>{c.ticket.nr}</span></div>
              <h3>{c.ticket.title}</h3>
              <p className="ticket-desc">{c.ticket.desc}</p>
              <hr className="ticket-divider" />
              <div className="ticket-stats">
                <div><b>5</b>{c.ticket.films}</div>
                <div><b>10</b>{c.ticket.days}</div>
                <div><b>100%</b>{c.ticket.rights}</div>
              </div>
            </div>
          </div>
        </section>

        <div className="filmstrip" aria-hidden="true">
          <div className="filmstrip-track reverse">{makeFrames('track2')}</div>
        </div>

        <section id="problem">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">{c.problem.eyebrow}</span>
              <h2>{c.problem.title}</h2>
              <p>{c.problem.text}</p>
            </div>
            <div className="split">
              <div className="card-flat no">
                <h3>{c.problem.without}</h3>
                <p>{c.problem.withoutText}</p>
              </div>
              <div className="card-flat yes">
                <h3>{c.problem.with}</h3>
                <p>{c.problem.withText}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="jak-to-dziala">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">{c.process.eyebrow}</span>
              <h2>{c.process.title}</h2>
              <p>{c.process.text}</p>
            </div>
            <div className="scenes">
              {c.process.scenes.map((scene) => (
                <div className="scene" key={scene.num}>
                  <div className="scene-num">{lang === 'pl' ? 'UJĘCIE' : 'TAKE'}<span>{scene.num}</span></div>
                  <div>
                    <h3>{scene.title}</h3>
                    <p>{scene.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="cennik">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">{c.pricing.eyebrow}</span>
              <h2>{c.pricing.title}</h2>
              <p>{c.pricing.text}</p>
            </div>
            <div className="pricing-grid">
              <div className="price-ticket">
                <div className="price-tag">{c.pricing.start.tag}</div>
                <h3>{c.pricing.start.title}</h3>
                <p className="desc">{c.pricing.start.desc}</p>
                <div className="amount">{c.pricing.start.amount} <small>{c.pricing.start.per}</small></div>
                <hr className="stub-divider" />
                <ul>
                  {c.pricing.start.features.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <a href="#kontakt" className="btn btn-ghost">{c.pricing.start.cta}</a>
              </div>
              <div className="price-ticket featured">
                <div className="price-tag">{c.pricing.campaign.tag}</div>
                <h3>{c.pricing.campaign.title}</h3>
                <p className="desc">{c.pricing.campaign.desc}</p>
                <div className="amount">{c.pricing.campaign.amount}</div>
                <hr className="stub-divider" />
                <ul>
                  {c.pricing.campaign.features.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <a href="#kontakt" className="btn btn-amber">{c.pricing.campaign.cta}</a>
              </div>
            </div>
          </div>
        </section>

        <section id="dla-kogo">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">{c.forWhom.eyebrow}</span>
              <h2>{c.forWhom.title}</h2>
            </div>
            <div className="tags">
              {c.forWhom.tags.map((tag, i) => (
                <span className="tag" key={i}>{tag}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">{c.portfolio.eyebrow}</span>
              <h2>{c.portfolio.title}</h2>
              <p>{c.portfolio.text}</p>
            </div>
            <div className="reel-placeholder">
              {Array.from({ length: 4 }).map((_, i) => (
                <div className="reel-frame" key={i}>
                  <img
                    src={`https://placedog.net/300/400?r=${i + 1}`}
                    alt={lang === 'pl' ? `Przykład ${i + 1}` : `Example ${i + 1}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <div className="pattern-grid">
              {c.portfolio.patterns.map((p, i) => (
                <div className="pattern-card" key={i}>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
            <h3 className="samples-title">{c.portfolio.samplesTitle}</h3>
            <div className="sample-grid">
              {c.portfolio.samples.map((s, i) => (
                <div className="sample-card" key={i}>
                  <div className="sample-tag">{s.product}</div>
                  <p className="sample-hook">{s.hook}</p>
                  <ol>
                    {s.shots.map((shot, j) => (
                      <li key={j}>{shot}</li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">{c.faq.eyebrow}</span>
              <h2>{c.faq.title}</h2>
            </div>
            <div>
              {c.faq.items.map((item, i) => (
                <details className="faq-item" open={i === 0} key={i}>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="tworcy" className="creator-signup">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">{c.creatorSignup.eyebrow}</span>
              <h2>{c.creatorSignup.title}</h2>
              <p>{c.creatorSignup.text}</p>
            </div>
            <CreatorSignup c={c.creatorSignup} />
          </div>
        </section>

        <section id="kontakt">
          <div className="wrap">
            <div className="cta-final">
              <h2>{c.contact.title}</h2>
              <p>{c.contact.text}</p>
              <div className="hero-actions">
                <a href="mailto:hello@petsmay.org" className="btn btn-amber">{c.contact.email}</a>
                <a href="#" className="btn btn-ghost" style={{ borderColor: 'var(--paper)', color: 'var(--paper)' }}>{c.contact.call}</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap foot-row">
          <span>© {new Date().getFullYear()} PetsMay.org</span>
          <span>{c.footer}</span>
        </div>
      </footer>
    </>
  )
}

export default App
