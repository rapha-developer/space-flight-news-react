
import {BriefcaseIcon, EnvelopeIcon, MapPinIcon} from '@heroicons/react/24/solid'

type Props = {
    infoJobTitle: string
    infoJobDescription: string
    infoMailTitle: string
    infoMailDescription: string
    infoMapTitle: string
    infoMapDescription: string
}

export const FooterInformation = ({infoJobTitle, infoJobDescription, infoMailTitle, infoMailDescription, infoMapTitle, infoMapDescription}: Props) => {
    
    return (
        <div className="w-full flex flex-col items-center py-6 md:py-4">
            <ul className="w-full flex flex-col gap-8 md:flex-row md:gap-6 justify-evenly">
                <li className="flex flex-col gap-2 items-center">
                    <BriefcaseIcon className="w-6 h-6 text-dark-300 mb-2" />
                    <h3 className="font-sans font-bold text-base text-gray-400 uppercase">{infoJobTitle}</h3>
                    <p className="font-sans font-medium text-sm text-gray-200 capitalize">{infoJobDescription}</p>
                </li>
                <li className="flex flex-col gap-2 items-center">
                    <EnvelopeIcon className="w-6 h-6 text-dark-300 mb-2" />
                    <h3 className="font-sans font-bold text-base text-gray-400 uppercase">{infoMailTitle}</h3>
                    <p className="font-sans font-medium text-sm text-gray-200">{infoMailDescription}</p>
                </li>
                <li className="flex flex-col gap-2 items-center">
                    <MapPinIcon className="w-6 h-6 text-dark-300 mb-2" />
                    <h3 className="font-sans font-bold text-base text-gray-400 uppercase">{infoMapTitle}</h3>
                    <p className="font-sans font-medium text-sm text-gray-200 capitalize">{infoMapDescription}</p>
                </li>
            </ul>
        </div>
    )
}