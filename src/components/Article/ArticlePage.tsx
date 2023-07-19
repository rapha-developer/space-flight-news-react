import { RocketLaunchIcon, ArrowLeftIcon } from '@heroicons/react/24/solid'
import { Link, useParams } from 'react-router-dom'
import { useMemo } from 'react'
import type { Article } from '../../types/article'
import { useFetch } from '../../hooks/useFetch'

export const ArticlePage = () => {
    const { id } = useParams<{id: string}>()

    const fetchUrl = useMemo(() => {
        return new URL(`https://api.spaceflightnewsapi.net/v3/articles/${id}`)
    }, [id])
    const { data: article, isLoading} = useFetch<Article>(fetchUrl)
    const backToHome = "Back to Home"
    return (
        <div className="container mx-auto">
            {isLoading || !article ? (
                <RocketLaunchIcon className='mx-auto my-12 h-12 w-12 text-gray-400 animate-bounce'
                />
            ): (
                <div className="px-4 lg:px-0 pb-24">
                    <Link to={'/'}
                        preventScrollReset={true}>
                        <div className="relative h-12 w-full ml-3 mb-6 flex flex-row gap-2 items-center cursor-pointer">
                            <ArrowLeftIcon className='h-6 w-6 text-gray-400' /> <span className='text-sm text-gray-300'>{backToHome}</span> 
                        </div>
                    </Link>
                    <img 
                        className='mt-4 w-full aspect-video object-cover rounded-xl'
                        src={article.imageUrl} 
                        alt={article.title} 
                        width="1920"
                        height="1080"
                        loading='lazy'
                    />
                    <p className="mt-3 font-inter font-normal text-sm text-gray-300">
                        {new Date(article.publishedAt).toLocaleString()}
                    </p>
                    <h2 className="mt-4 font-sans font-semibold text-4xl text-gray-300 w-full xl:max-w-4xl">{article.title}</h2>
                    <p className="mt-4 font-inter font-medium text-base text-dark-300 w-full xl:max-w-4xl">{article.summary}</p>
                </div>
            )}
        </div>
    )
}