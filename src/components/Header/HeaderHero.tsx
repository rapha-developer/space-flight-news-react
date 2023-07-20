import { HeaderSearchBar } from "./HeaderSearchBar"

type Props = {
    title: string,
    description: string
}
export const HeaderHero = ({title, description}: Props) => {
    return (
        <div className="container mt-20 flex flex-col gap-3 justify-center mx-auto">
            <h1 className="font-mono font-semibold text-3xl text-white text-center">{title}</h1>
            <p className='font-inter font-normal text-base text-white text-center'>
                {description}
            </p>
            <HeaderSearchBar />
        </div>
    )
}