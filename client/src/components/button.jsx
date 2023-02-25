export const Button=({action,func, ...otherprops})=>{


    return(
        <button 
        className={`absolute ${func} rounded-full bg-orange-400 h-[40px] w-[150px] text-white font-bold hover:text-orange-600 hover:bg-white hover:outline outline-1`}
>{action}</button>
    )
}