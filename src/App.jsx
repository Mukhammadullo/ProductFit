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

      {/* section4 */}
      <section>
        <img src='src/assets/2.jpg ' className='w-[100%] h-[10vh]' />
      </section>

      {/* section5 */}
      <section className='m-[5%]   sm:flex justify-between'>
        <div className='shadow-xl rounded-[14px]  mobile:w-[90%] mobile:h-[50vh] w-[18%] h-[35vh] flex flex-col justify-center items-center'>
          <img src='src/assets/интервью.svg' />
          <p>Проведём интервью</p>
        </div>
        <div className='shadow-xl rounded-[14px]  mobile:w-[90%] mobile:h-[50vh] w-[18%] h-[35vh] flex flex-col justify-center items-center'>
          <img src='src/assets/план.svg' />
          <p >Составим план</p>
        </div>
        <div className='shadow-xl rounded-[14px]  mobile:w-[90%] mobile:h-[50vh] w-[18%] h-[35vh] flex flex-col justify-center items-center'>
          <img src='src/assets/Команда.svg' />
          <p>Соберём команду</p>
        </div>
        <div className='shadow-xl rounded-[14px]  mobile:w-[90%] mobile:h-[50vh] w-[18%] h-[35vh] flex flex-col justify-center items-center'>
          <img src='src/assets/продукт.svg' />
          <p>Разработаем продукт</p>
        </div>
        <div className='shadow-xl rounded-[4px]  mobile:w-[90%] mobile:h-[50vh] w-[18%] h-[35vh] flex flex-col justify-center items-center'>
          <img src='src/assets/метрика.svg' />
          <p>Улучшим метрики</p>
        </div>
      </section>


      {/* section6 */}
      <section className='m-[8%] sm:flex sm:justify-between  items-center'>

        {/* left */}
        <div>
          <img src='src/assets/image 2.png' />
        </div>

        {/* right */}
        <div>
          <h1 className='text-[#1E959B] font-bold text-[50px]'>Проведём интервью<br />
            и подготовим проект<br />
            к разработке</h1>
          <p>Проведём продуктовое интервью онлайн<br />
            и дадим рекомендации по подготовке проекта<br />
            к разработке.Это бесплатно.</p>
          <button className='mobile:w-[220px] mobile:h-[12vh] sm:w-[200px] h-[8vh] bg-[#F05670] rounded-[12px] m-[10px] text-[white] p-[5px] shadow-xl'>Записаться на интервью</button>
        </div>
      </section>

      {/* section7 */}

      <section className='m-[8%]'>
        {/* section7_title */}
        <h1 className='text-[#1E959B] font-bold text-center'>ПРОЕКТЫ командЫ PRODUCTFIT</h1>

        {/* row1 */}
        <div className='sm:flex justify-between'>
          
          <div className='shadow-xl rounded-[12px] p-[5px] sm:w-[30%]'>
            <img src='src/assets/image 19.png' />
            <h1 className='text-[#1E959B] font-bold text-center m-[10px]'>Cabify</h1>
            <p className='m-[8px]'>Кроссплатформенное приложение <br/>
              под Android и iOS разработано на <br/>
              React Native(Python)</p>
          </div>
         
          <div className='shadow-xl rounded-[12px] p-[5px] sm:w-[30%]'>
            <img src='src/assets/image 20.png' />
            <h1 className='text-[#1E959B] font-bold text-center m-[10px]'>Ural Airlaness</h1>
            <p className='m-[8px]'>Кроссплатформенное приложение <br/>
              под Android и iOS разработано на <br/>
              React Native(Python)</p>
          </div>
         
          <div className='shadow-xl rounded-[12px] p-[5px] sm:w-[30%]'>
            <img src='src/assets/image 21.png' />
            <h1 className='text-[#1E959B] font-bold text-center m-[10px]'>OpenGift</h1>
            <p className='m-[8px]'>Кроссплатформенное приложение <br/>
              под Android и iOS разработано на <br/>
              React Native(Python)</p>
          </div>

        </div>

        {/* row2 */}
        <div className='sm:flex justify-between mt-[20px]'>
          
          <div className='shadow-xl rounded-[12px] p-[5px] sm:w-[30%]'>
            <img src='src/assets/image 22.png' />
            <h1 className='text-[#1E959B] font-bold text-center m-[10px]'>PlanDi</h1>
            <p className='m-[8px]'>Кроссплатформенное приложение <br/>
              под Android и iOS разработано на <br/>
              React Native(Python)</p>
          </div>
         
          <div className='shadow-xl rounded-[12px] p-[5px] sm:w-[30%]'>
            <img src='src/assets/image 23.png' />
            <h1 className='text-[#1E959B] font-bold text-center m-[10px]'>Коалиция</h1>
            <p className='m-[8px]'>Кроссплатформенное приложение <br/>
              под Android и iOS разработано на <br/>
              React Native(Python)</p>
          </div>
         
          <div className='shadow-xl rounded-[12px] p-[5px] sm:w-[30%]'>
            <img src='src/assets/image 24.png' />
            <h1 className='text-[#1E959B] font-bold text-center m-[10px]'>Rubetek</h1>
            <p className='m-[8px]'>Кроссплатформенное приложение <br/>
              под Android и iOS разработано на <br/>
              React Native(Python)</p>
          </div>

        </div>


      </section>

    </>
  )
}

export default App
