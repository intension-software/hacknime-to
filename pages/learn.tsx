import type { NextPage } from 'next'
import { useState } from 'react'
import Image from 'next/image'
import logo from '../public/images/logoVariant4.svg'
import profile from '../public/images/Profile.svg'
import Question from '../components/Question'

import { useRouter } from 'next/router'

const data: {
    headline: string
    text: string
    firstOption: string
    firstHeadline: string
    secondOption: string
    secondHeadline: string
    thirdOption: string
    thirdHeadline: string
    correctAnswers: ('green' | 'red')[]
}[] = [
  {
    headline: '1. Nová automobilka',
    text: 'Blízko Zvolena by už čoskoro mohla stáť nová fabrika, v ktorej by vyrábali luxusné športové vozy Maserati. Oznámil to minister hospodárstva po stretnutí s výkonným riaditeľom automobilky Emersonom Fitipaldim. „Som nadšený, na Slovensko smeruje piata automobilka,“ povedal minister. Dobrý pocit mal zo stretnutia aj Fitipaldi, ktorý ministrove slová komentoval diplomaticky. „Slovensko sa nám páči, má veľký potenciál,“ povedal Fitipaldi.',
    firstOption: '“Slovensko má na dosah piatu automobilku.”',  
    firstHeadline: '- titulok článku',
    secondOption: '“Pri Zvolene sa začnú vyrábať slávne športiaky Maserati.”',
    secondHeadline: '- titulok článku',
    thirdOption: '“Výkonný riaditeľ z Maserati: Slovensko má veľký potenciál.”',
    thirdHeadline: '- titulok článku',
    correctAnswers: ['red', 'green', 'red']
  },
  {
    headline: '2. Milióny migrantov v pohybe',
    text: 'V utečeneckých táboroch v severnej Afrike a na Blízkom východe sa zhoršuje situácia. Mnoho tamojších obyvateľov sa pripravuje na to, že sa vydá na cestu do krajín Európskej únie. Podľa uniknutej správy nemeckej tajnej služby by ich počet mohol dosiahnuť až šesť miliónov. Polovica z nich sa chce pokúsiť dostať sa do Európskej únie po takzvanej balkánskej trase, ktorú sa členské štáty s pomocou Turecka snažia držať uzavretú.',
    firstOption: '“Najhoršie nás len čaká: Do EÚ príde ďalších šesť miliónov migrantov”',
    firstHeadline: '- titulok článku', 
    secondOption: '“Kríza nekončí, ďalších šesť miliónov migrantov sa pripravuje na cestu”',
    secondHeadline: '- titulok článku',
    thirdOption: '“Uniknutá správa tajných služieb: Ďalšie milióny ľudí chcú do Európy”',
    thirdHeadline: '- titulok článku',
    correctAnswers: ['green', 'red', 'red']
  },
  {
    headline: '3. Angličania vyčíňajú',
    text: 'Mestskí policajti v Košiciach riešili tento týždeň už druhý prípad opitých Angličanov, ktorí rušili nočný pokoj. Štvorčlennú skupinu, ktorá na Slovensku oslavovala rozlúčku so slobodou, nechcela ochranka pustiť do baru v centre, tak na ňu kričali anglické nadávky. Cudzinci sa upokojili až po príchode mestskej polície. Podobný prípad sa odohral aj v pondelok, keď polícia dala pokutu iným dvom mužom z Anglicka, ktorí v nočných hodinách znečistili verejné priestranstvo. ',
    firstOption: '“Angličania sú národom opilcov a výtržníkov, predviedli to v Košiciach”',
    firstHeadline: '- titulok článku', 
    secondOption: '“Hluk a nadávky: štvorica Angličanov vystrájala pred košickým barom”',
    secondHeadline: '- titulok článku',
    thirdOption: '“ Policajti v Košiciach museli opakovane riešiť opitých Angličanov”',
    thirdHeadline: '- titulok článku',
    correctAnswers: ['green', 'red', 'red']
  },
  {
    headline: '4. Opozičný politik vs. starosta',
    text: 'Opozičný politik Anton Strelec podal trestné oznámenie na starostu Bohumila Stejskala pre nedávny predaj mestských pozemkov v blízkosti budovy pošty. Strelec tvrdí, že predaj bol pre radnicu nevýhodný a starosta sa mohol dopustiť trestného činu zneužívania právomoci verejného činiteľa, za ktorý môže byť sadzba až päť rokov. Jeho podnetom sa bude zaoberať vyšetrovateľ.',
    firstOption: '“Strelec sa obrátil na políciu, chce, aby prešetrila predaj pozemkov”',
    firstHeadline: '- titulok článku',
    secondOption: '“Polícia sa chystá vyšetrovať starostu, hrozí mu až päť rokov”',
    secondHeadline: '- titulok článku',
    thirdOption: '“Opozičný politik obviňuje starostu, že nevýhodne predal pozemky”',
    thirdHeadline: '- titulok článku',
    correctAnswers: ['red', 'green', 'red']
  },
  {
    headline: '5. Slovenskí vojaci pod Nemcami',
    text: 'Ministri obrany Slovenska a Nemecka podpísali dohodu o spolupráci. Na základe nej odídu príslušníci slovenských mechanizovaných jednotiek do Nemecka na dvojmesačný výcvik pod dohľadom nemeckých inštruktorov. Minister Marek Pancier si od toho sľubuje väčšie skúsenosti pre slovenských vojakov, ako aj prehĺbenie ich jazykových znalostí.',
    firstOption: '“Slovenskí vojaci budú trénovať pod taktovkou Nemcov ”',
    firstHeadline: '- titulok článku',
    secondOption: '“Minister dúfa, že našim vojakom pomôžu nemeckí inštruktori ”',
    secondHeadline: '- titulok článku',
    thirdOption: '“Ako za Hitlera: slovenskej armáde budú zase veliť Nemci”',
    thirdHeadline: '- titulok článku',
    correctAnswers: ['red', 'red', 'green']
  },
  {
    headline: '6. Prečo sú dané výroky argumentačnými chybami?',
    text: '„Ty si zbabelec a máš zazobaných rodičov, preto presadzuješ hotel!“',
    firstOption: 'A) Osobný útok',  
    firstHeadline: '- argumentačná chyba',
    secondOption: 'B) Emocionálne zafarbený jazyk',
    secondHeadline: '- argumentačná chyba',
    thirdOption: '',
    thirdHeadline: '',
    correctAnswers: ['green', 'red', 'red']
  },
  {
    headline: '7. Prečo sú dané výroky argumentačnými chybami?',
    text: '„Len úplný idiot môže súhlasiť s tým, aby sme bývali na nejakej prašivej lúke plnej kliešťov a komárov”',
    firstOption: 'A) Osobný útok',  
    firstHeadline: '- argumentačná chyba',
    secondOption: 'B) Emocionálne zafarbený jazyk',
    secondHeadline: '- potencionálna argumentačná chyba',
    thirdOption: '',
    thirdHeadline: '',
    correctAnswers: ['red', 'green', 'red']
  },
  {
    headline: '8. Prečo sú dané výroky argumentačnými chybami?',
    text: '„Daj už pokoj s tým hotelom. Minulý rok tam bývali deviataci, a keď sa vrátili, Jano si doma zlomil nohu, Dana prepadla z matiky a ešte sa im aj rozpadla kapela. Chceš, aby sme takto skončili aj my?“ ',
    firstOption: 'A) Zámena korelácie s kauzalitou',  
    firstHeadline: '- potencionálna argumentačná chyba',
    secondOption: 'B) Prehodenie dôkazného bremena',
    secondHeadline: '- potencionálna argumentačná chyba',
    thirdOption: '',
    thirdHeadline: '',
    correctAnswers: ['green', 'red', 'red']
  },
  {
    headline: '9. Prečo sú dané výroky argumentačnými chybami?',
    text: '„Cena jednej izby v tomto hoteli stojí priemerne 100,– eur na noc, to si predsa nemôžeme dovoliť!“',
    firstOption: 'A) Manipulácia štatistík',  
    firstHeadline: '- potencionálna argumentačná chyba',
    secondOption: 'B) Argumentácia v kruhu',
    secondHeadline: '- potencionálna argumentačná chyba',
    thirdOption: '',
    thirdHeadline: '',
    correctAnswers: ['green', 'red', 'red']
  },
  {
    headline: '10. Prečo sú dané výroky argumentačnými chybami?',
    text: 'Ministri obrany Slovenska a Nemecka podpísali dohodu o spolupráci. Na základe nej odídu príslušníci slovenských mechanizovaných jednotiek do Nemecka na dvojmesačný výcvik pod dohľadom nemeckých inštruktorov. Minister Marek Pancier si od toho sľubuje väčšie skúsenosti pre slovenských vojakov, ako aj prehĺbenie ich jazykových znalostí.',
    firstOption: 'A) Zámena korelácie s kauzalitou',  
    firstHeadline: '- potencionálna argumentačná chyba',
    secondOption: 'B) Prehodenie dôkazného bremena',
    secondHeadline: '- potencionálna argumentačná chyba',
    thirdOption: '',
    thirdHeadline: '',
    correctAnswers: ['red', 'green', 'red']
  },
]

const Learn: NextPage = () => {
  const router = useRouter();

  const [index, setIndex] = useState(0)

  const [answers, setAnswers] = useState<("white" | "green" | "red")[]>(["white", "white", "white", "white","white","white", "white", "white", "white","white"])

  const correctAnswers: ("green" | "red")[] = ["red", "red", "green"]

  return (
    <div>
      <header className='pb-12 pt-4 px-8 h-4 bg-white'>
        <div className='flex justify-between items-center'>
          <Image src={logo} alt="logo of InfoMentor" onClick={() => {
            router.push('/dashboard')
          }} />
          <div className='text-red font-bold font-[20px]'>TÝŽDENNÉ VÝZVY</div>
          <Image src={profile} alt="logo of InfoMentor" onClick={() => {
            router.push('/profile')
          }} />
        </div>
      </header>
      <div>
        <Question setAnswers={setAnswers} answers={answers} index={index} setIndex={setIndex} data={data}/>
      </div>
    </div>
  )
}

export default Learn