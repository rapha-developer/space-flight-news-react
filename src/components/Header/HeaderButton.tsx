
type textButton = {
    text: string
}
export const HeaderButton = ({text}: textButton) => {
    
    return (
        <button className='font-mono font-semibold text-sm sm:text-base text-white border-2 border-white rounded-[5em] pt-[7px] px-[1.5em] pb-[11px] capitalize transition-[color] duration-700 ease-out hover:bg-white hover:ease-linear hover:text-dark-100'>
            <span className='font-mono font-semibold hidden sm:inline-block sm:mr-1'>Check</span>
            {text}
        </button>
    )
}