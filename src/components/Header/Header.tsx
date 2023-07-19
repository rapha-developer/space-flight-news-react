import { Link, useLocation } from 'react-router-dom'
import { HeaderLogo } from './HeaderLogo'
import { HeaderButton } from './HeaderButton'
import { HeaderHero } from './HeaderHero'

export const Header = () => {
    const location = useLocation()
    const githubProfile = new URL(`https://github.com/rapha-developer`)
    return (
        <header className='bg-current relative min-h-[400px]'>
            <img src="/earth_on_top.jpg" 
                className='w-full object-none lg:object-cover h-[483px] -z-10'
                alt="Photo of planet earth" 
            />
            <div className="absolute top-0 left-0 w-full z-10 pt-4">
                <div className="container flex justify-between gap-4 mx-auto px-4 py-2">
                    <Link className='self-center' to='/'>
                        <HeaderLogo />
                    </Link>
                    <Link className='self-center' to={githubProfile.href} target='_blank'>
                        <HeaderButton 
                            text='my github'
                        />
                    </Link>
                </div>
                {location.pathname === '/' && 
                <HeaderHero  
                    title='Space Flight News with React'
                    description='Search any news from latest Space  Flight news API.'
                />}
            </div>
        </header>
    )
}