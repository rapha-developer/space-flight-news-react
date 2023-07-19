import { FooterSocialList } from "./FooterSocialList"
import { FooterInformation } from './FooterInformation';
import { FooterCopyright } from "./FooterCopyright";
import { footerAboutSection, 
        footerFollowSection, 
        footerInspiredSection,
        footerInformationSection } from './data/FooterData'
export const Footer = () => {
    return (
        <footer className="w-full bg-current relative">
            <img src="/footer.jpg" 
                alt="plano de fundo da via láctea (space background)"
                width="1440"
                height="442"
                className="w-full h-[442px] object-none lg:object-cover -z-10"
            />
            <div className="absolute top-0 left-0 w-full z-10 pt-4">
                <div className="container mx-auto flex flex-wrap flex-col gap-4 justify-items-center items-center">
                    <div className="w-full flex flex-col gap-6 items-center">
                        <img 
                            src="/logo.svg" 
                            alt="Lorem ipsum icon" 
                            className="w-[171px] h-11 aspect-auto"
                            width="171"
                            height="44"
                        />
                        <p className="font-sans font-medium text-dark-300 text-base max-w-xs text-center">
                            {footerAboutSection.about}
                        </p>
                    </div>
                    <hr className="border-dark-200 border-6 w-full my-2" />
                    <FooterInformation 
                        infoJobTitle={footerInformationSection.job.title}
                        infoJobDescription={footerInformationSection.job.description}
                        infoMailTitle={footerInformationSection.mail.title}
                        infoMailDescription={footerInformationSection.mail.description}
                        infoMapTitle={footerInformationSection.map.title}
                        infoMapDescription={footerInformationSection.map.description}
                    />
                    <div className="flex flex-col gap-3 my-4">
                        <h3 className="font-mono font-semibold text-2xl text-white uppercase text-center">{footerFollowSection.title}</h3>
                        <div className="flex flex-wrap flex-row">
                            <FooterSocialList />
                        </div>
                    </div>
                    <FooterCopyright 
                        copyrightText="copyright © 2023 All rights reserved."
                        inspiredUrl={footerInspiredSection.url}
                        inspiredText={footerInspiredSection.label}
                    />
                </div>
            </div>
        </footer>
    )
}