import './App.css'

function App() {

  return (
    <>

      {/*header  */}
      <header className='flex justify-between m-[30px]'>

        {/* left */}
        <div className='mobile:ml-[20%] sm:ml-0'>
          <img src='src/assets/Logo.svg' />
        </div>

        {/* right */}
        <div className='mobile:hidden sm:flex w-[50%] justify-between '>
          <img className=' w-[50px]' src='src/assets/svg-editor-image-7.svg' />
          <img className=' w-[50px]' src='src/assets/svg-editor-image-6.svg' />
          <div className='flex'>
            <img src='src/assets/Group.svg' />
            <p>+7 800 301-79-27</p>

          </div>
          <button className='w-[180px] h-[50px] rounded-[12px] text-[white] bg-[#F05670]'>НАЧАТЬ ПРОЕКТ</button>
        </div>

      </header>

      {/* sectino1 */}
      <section className='m-[5%] sm:flex  sm:justify-between'>
        {/* left */}
        <div>
          <h1 className='text-[#1E959B] font-bold text-[32px] m-[10px]'>Разработка <br />
            IT‑продуктов</h1>

          <p className='text-[#3C3C3C] font-medium m-[10px]'>Разработаем проект с нуля, <br />
            доработаем текущий проект или усилим вашу <br />
            ИТ-команду лучшими разработчиками на рынке</p>
          <button className='w-[220px] h-[50px] rounded-[12px] m-[10px] text-[white] bg-[#F05670]'>НАЧАТЬ НОВЫЙ ПРОЕКТ</button>
        </div>

        {/* right */}

        <div>
          <img src='src/assets/photo_2023-12-16_07-36-34.jpg' />
        </div>
      </section>

    </>
  )
}

export default App
