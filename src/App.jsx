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

    </>
  )
}

export default App
