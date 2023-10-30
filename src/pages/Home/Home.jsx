import { Card } from "../../components/Card/Card"

function Home() {
  return (
    <div className='flex flex-col items-center bg-VeryLightGray max-w-screen h-screen p-12'>
        <h1 className="text-GrayishBlue font-Poppins font-extralight text-3xl my-1">Reliable, efficient delivery </h1>
        <h1 className="text-VeryDarkBlue font-Poppins text-3xl font-extrabold my-1">Powered by Technology</h1>
        <p className="text-GrayishBlue font-Poppins font-normal text-center text-sm w-1/3 my-3">
        Our Artificial Intelligence powered tools use millions of project data points 
  to ensure that your project is successful
        </p>

        <div className="flex w-full h-full gap-10 justify-center mt-10">
          <div className="flex flex-col h-full justify-center">
            <Card title="Supervisor" content="Monitors activity to identify project roadblocks" 
            border="border-Cyan" image="/src/assets/icon-supervisor.svg"/>
          </div>
          <div className="flex flex-col h-full justify-center gap-7">
            <Card title="Team Builder" content="Scans our talent network to create the optimal team for your project" 
            border="border-Red" image="/src/assets/icon-team-builder.svg"/>
            <Card title="Karma" content="Regularly evaluates our talent to ensure quality" 
            border="border-Orange" image="/src/assets/icon-karma.svg"/>
          </div>
          <div className="flex flex-col h-full justify-center">
          
            <Card title="Calculator" content="Uses data from past projects to provide better delivery estimates" 
            border="border-Blue" image="/src/assets/icon-calculator.svg"/>
          </div>

        </div>
       
    </div>
  )
}

export default Home