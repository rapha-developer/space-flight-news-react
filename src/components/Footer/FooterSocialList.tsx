
import { BehanceIcon, CodepenIcon, GithubIcon, IconLinks } from './FooterIcons';

export const FooterSocialList = () => {
    return (
        <ul className="flex flex-wrap flex-row gap-4">
            <li className="">
                <a href={IconLinks.behance.url} 
                    target='_blank'
                    aria-label='Read more about my projects on Behance'
                    className="border-2 border-dark-300 block p-2 rounded-full group hover:border-white transition-colors duration-200 ease-in">
                        <BehanceIcon 
                            width="24"
                            height="24"
                            classNames="w-6 h-6 text-dark-300 group-hover:text-white"
                        />
                </a>
            </li>
            <li className="">
                <a href={IconLinks.codepen.url}
                    target='_blank'
                    aria-label='Read more about my projects on Codepen'
                    className="border-2 border-dark-300 block p-2 rounded-full group hover:border-white transition-colors duration-200 ease-in">
                        <CodepenIcon 
                            width="24"
                            height="24"
                            classNames="w-6 h-6 text-dark-300 group-hover:text-white"
                        />
                </a>
            </li>
            <li className="">
                <a href={IconLinks.github.url}
                    target='_blank'
                    aria-label='Read more about my projects on Github'
                    className="border-2 border-dark-300 block p-2 rounded-full group hover:border-white transition-colors duration-200 ease-in">
                        <GithubIcon 
                            width="24"
                            height="24"
                            classNames="w-6 h-6 text-dark-300 group-hover:text-white"
                        />
                </a>
            </li>
        </ul>
    )
} 