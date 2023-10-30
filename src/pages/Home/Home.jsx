import { Card } from "../../components/Card/Card"

function Home() {
  return (
    <div className='flex flex-col items-center bg-VeryLightGray min-h-screen  max-h-screen lg:p-12 py-20'>
        <h1 className="text-GrayishBlue font-Poppins font-extralight text-3xl my-1">Reliable, efficient delivery </h1>
        <h1 className="text-VeryDarkBlue font-Poppins text-3xl font-extrabold my-1">Powered by Technology</h1>
        <p className="text-GrayishBlue font-Poppins font-normal text-center lg:text-sm text-lg lg:w-1/3 px-16 lg:px-0 my-3">
        Our Artificial Intelligence powered tools use millions of project data points 
  to ensure that your project is successful
        </p>

        <div className="flex flex-col lg:flex-row w-full h-full gap-10 lg:justify-center items-center mt-10">
          
          <div className="flex flex-col h-full w-full lg:w-1/5 justify-center items-center">
            <Card title="Supervisor" content="Monitors activity to identify project roadblocks" 
            border="border-Cyan" image="assets/icon-supervisor.svg"/>
          </div>

          <div className="flex flex-col h-full w-full lg:w-1/5 justify-center items-center gap-7">
            <Card title="Team Builder" content="Scans our talent network to create the optimal team for your project" 
            border="border-Red" image="assets/icon-team-builder.svg"/>
            <Card title="Karma" content="Regularly evaluates our talent to ensure quality" 
            border="border-Orange" image="assets/icon-karma.svg"/>
          </div>

          <div className="flex flex-col h-full w-full lg:w-1/5 justify-center items-center">
            <Card title="Calculator" content="Uses data from past projects to provide better delivery estimates" 
            border="border-Blue" image="assets/icon-calculator.svg"/>
          </div>

        </div>
       
        <div className="flex flex-col montserrat-500 text-center text-sm text-GrayishBlue mt-5">
                <div>
                    Challenge by <a className="underline text-super-dark-cyan" href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
                </div>
                <div>Coded by <a className="underline italic" href="https://github.com/CalderonCodes">Christopher Calderon</a>.</div>
            </div>

    </div>
  )
}

export default Home