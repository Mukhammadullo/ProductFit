import './App.css'
import Card1 from './components/Card1'

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
        <div className='shadow-xl rounded-[14px]  m-[10px] mobile:w-[90%] mobile:h-[50vh] w-[18%] h-[35vh] flex flex-col justify-center items-center'>
          <img src='src/assets/интервью.svg' />
          <p>Проведём интервью</p>
        </div>
        <div className='shadow-xl rounded-[14px]  m-[10px] mobile:w-[90%] mobile:h-[50vh] w-[18%] h-[35vh] flex flex-col justify-center items-center'>
          <img src='src/assets/план.svg' />
          <p >Составим план</p>
        </div>
        <div className='shadow-xl rounded-[14px]  m-[10px] mobile:w-[90%] mobile:h-[50vh] w-[18%] h-[35vh] flex flex-col justify-center items-center'>
          <img src='src/assets/Команда.svg' />
          <p>Соберём команду</p>
        </div>
        <div className='shadow-xl rounded-[14px] m-[10px] mobile:w-[90%] mobile:h-[50vh] w-[18%] h-[35vh] flex flex-col justify-center items-center'>
          <img src='src/assets/продукт.svg' />
          <p>Разработаем продукт</p>
        </div>
        <div className='shadow-xl rounded-[4px] m-[10px] mobile:w-[90%] mobile:h-[50vh] w-[18%] h-[35vh] flex flex-col justify-center items-center'>
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
            <p className='m-[8px]'>Кроссплатформенное приложение <br />
              под Android и iOS разработано на <br />
              React Native(Python)</p>
          </div>

          <div className='shadow-xl rounded-[12px] p-[5px] sm:w-[30%]'>
            <img src='src/assets/image 20.png' />
            <h1 className='text-[#1E959B] font-bold text-center m-[10px]'>Ural Airlaness</h1>
            <p className='m-[8px]'>Кроссплатформенное приложение <br />
              под Android и iOS разработано на <br />
              React Native(Python)</p>
          </div>

          <div className='shadow-xl rounded-[12px] p-[5px] sm:w-[30%]'>
            <img src='src/assets/image 21.png' />
            <h1 className='text-[#1E959B] font-bold text-center m-[10px]'>OpenGift</h1>
            <p className='m-[8px]'>Кроссплатформенное приложение <br />
              под Android и iOS разработано на <br />
              React Native(Python)</p>
          </div>

        </div>

        {/* row2 */}
        <div className='sm:flex justify-between mt-[20px]'>

          <div className='shadow-xl rounded-[12px] p-[5px] sm:w-[30%]'>
            <img src='src/assets/image 22.png' />
            <h1 className='text-[#1E959B] font-bold text-center m-[10px]'>PlanDi</h1>
            <p className='m-[8px]'>Кроссплатформенное приложение <br />
              под Android и iOS разработано на <br />
              React Native(Python)</p>
          </div>

          <div className='shadow-xl rounded-[12px] p-[5px] sm:w-[30%]'>
            <img src='src/assets/image 23.png' />
            <h1 className='text-[#1E959B] font-bold text-center m-[10px]'>Коалиция</h1>
            <p className='m-[8px]'>Кроссплатформенное приложение <br />
              под Android и iOS разработано на <br />
              React Native(Python)</p>
          </div>

          <div className='shadow-xl rounded-[12px] p-[5px] sm:w-[30%]'>
            <img src='src/assets/image 24.png' />
            <h1 className='text-[#1E959B] font-bold text-center m-[10px]'>Rubetek</h1>
            <p className='m-[8px]'>Кроссплатформенное приложение <br />
              под Android и iOS разработано на <br />
              React Native(Python)</p>
          </div>

        </div>

        <div className='flex justify-center'>
          <button className='w-[250px]  h-[10vh] mt-[30px]  border-solid  border-[#1E959B] border-[2px] rounded-[12px]  text-[#1E959B]'>Все проекты</button>
        </div>
      </section>


      {/* section8 */}
      <section className='m-[8%] sm:flex justify-between items-center'>
        {/* left */}
        <div>
          <p className='text-[18px] font-bold  m-[10px] text-red-500'>09 Августа 2021</p>
          <h2 className='sm:text-[28px] m-[10px] font-bold text-[#1E959B]'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut <br /> labore et dolore magna aliquax</h2>
        </div>

        {/* right */}
        <div>
          <img src='src/assets/3.jpg' />
        </div>

      </section>



      {/* section9 */}
      <section className='m-[5%]'>

        {/* row1 */}
        <div >
          <div className=' sm:flex justify-between'>
            <Card1 img={'src/assets/Group.png'} title={'Ecommerce'} />
            <Card1 img={'src/assets/Out line.png'} title={'Ecommerce'} />
            <Card1 img={'src/assets/Group 5.png'} title={'Ecommerce'} />
            <Card1 img={'src/assets/Outline.png'} title={'Ecommerce'} />
          </div>
        </div>

        {/* row2 */}

        <div >
          <div className=' sm:flex justify-between'>
            <Card1 img={'src/assets/Page-1.png'} title={'Ecommerce'} />
            <Card1 img={'src/assets/Слой 2.png'} title={'Ecommerce'} />
            <Card1 img={'src/assets/Group.png'} title={'Ecommerce'} />
            <Card1 img={'src/assets/Group 185.png'} title={'Ecommerce'} />
          </div>
        </div>

      </section>


      {/* section9 */}
      <section className='sm:flex sm:justify-center items-center m-[8%] '>

        {/* left */}
        <div>
          <img src='src/assets/Group (1).png' />
        </div>

        {/* right */}
        <div>
          <button className='w-[250px] h-[60px] bg-[#F05670] rounded-[12px] text-[18px]  text-[white]'>ОСТАВИТЬ ЗАЯВКУ</button>
        </div>

      </section>



      {/* footer */}
      <footer className='m-[3%] flex justify-evenly items-center'>
        {/* left */}
        <div className='mobile:ml-[20%] sm:ml-0'>
          <img src='src/assets/Logo.svg' />
        </div>

        {/* right */}
        <div className='mobile:hidden sm:flex w-[50%] justify-between '>
          <img className=' w-[50px]' src='src/assets/svg-editor-image-7.svg' />
          <img className=' w-[50px]' src='src/assets/svg-editor-image-6.svg' />
          
          <div className='flex items-center'>
            <img src='src/assets/Group.svg' />
            <p>+7 800 301-79-27</p>

          </div>

          {/* <button className='w-[180px] h-[50px] rounded-[12px] text-[white] bg-[#F05670]'>НАЧАТЬ ПРОЕКТ</button> */}

          <p className='m-[20px] text-[#3C3C3C]'>
            Индивидуальный предприниматель <br />
            Степанов Георгий Константинович <br />
            Адрес: г. Обнинск, ул. Белкинская. 19, <br />
            136 ОГРНИП 318402700019269 ИНН <br />
            402571298900 Банк МОСКОВСКИЙ ФИЛИАЛ <br />
            АО КБ "МОДУЛЬБАНК" <br />
            БИК 044525092 К/c 30101810645250000092<br />
            Счет 40802810970010085488
          </p>

        </div>
      </footer>

    </>
  )
}

export default App
