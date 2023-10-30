
export const Card = ({ title = "Default", content = "0000000000", border = "border-green-500", image = "default.jpg"}) => {
  const borderClass = `${border}`;
return (
  <div className={`card w-72 h-52 bg-base-100 rounded-md border-t-4 ${borderClass} shadow-2xl shadow-GrayishBlue p-0 flex`}>
   <div className="card-body p-7">
       <h2 className="card-title text-VeryDarkBlue font-Poppins font-bold">{title}</h2>
       <p className='text-GrayishBlue font-Poppins font-normal text-xs'>{content}</p>
       <div className="card-actions justify-end">
       <img src={image} alt="playlist" />
  </div>
</div>
</div>
)
}