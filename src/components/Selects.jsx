import React from 'react'

import BG from '../assets/BG.jpg';
import bg2 from '../assets/bg2.jpg';
import bg3 from '../assets/bg3.jpg';
import bg4 from '../assets/bg4.jpg';
import bg5 from '../assets/bg5.jpg';
import bg6 from '../assets/bg6.jpg';
import SelectsCard from './SelectsCard';

const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>

    <SelectsCard bg={BG} text='Budúcnosť kvalitnej vínovej kultúry na Mierovom námestí. 🥂' />
    <SelectsCard bg={bg2} text='Piknik' />
    <SelectsCard bg={bg3} text='Netradičná červená odroda, ktorá stojí za vyskúšanie 😉' />
    <SelectsCard bg={bg4} text='Jedno je málo' />
    <SelectsCard bg={bg5} text='Vínko si ani nevšimne, že je mimo sudov, v ktorých zreje. V týchto tankoch si uchová svoju kvalitu, chuť a čerstvosť. Takže keď vám ho prinesieme, spoznáte, že je priamo od vinára. 🍇' />
    <SelectsCard bg={bg6} text='Čerstvé a kvalitné víno priamo od vinára. A tak to má byť.' />
    
        
    </div>
  )
}

export default Selects