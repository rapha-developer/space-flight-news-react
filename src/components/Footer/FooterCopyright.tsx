
type Props = {
    copyrightText: string
    inspiredUrl: string
    inspiredText: string
}
export const FooterCopyright = ({copyrightText, inspiredUrl, inspiredText}: Props) => {
    return (
    <div className="w-full max-w-xs flex flex-col gap-3 items-center pb-4">
        <hr className="border-dark-200 border-6 w-full" />
        <p className="font-sans text-sm font-medium text-dark-300">{copyrightText}</p>
        <p className="font-sans text-xs font-medium text-dark-300 ">inspired by <a href={inspiredUrl} 
        target="_blank"
        className="text-current hover:underline hover:text-white">{inspiredText}</a></p>
    </div>
    )
}