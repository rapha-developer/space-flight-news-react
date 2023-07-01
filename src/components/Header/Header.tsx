import { HeaderLogo } from './HeaderLogo'
import { HeaderSearchBar } from './HeaderSearchBar'

export const Header = () => {
    return (
        <header className='bg-gray-800'>
            <div className="container flex gap-4 mx-auto px-4 py-2">
                <HeaderLogo />
                <HeaderSearchBar />
            </div>
        </header>
    )
}