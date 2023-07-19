import { Link } from 'react-router-dom'
import { Article } from '../../types/article'

type Props = {
    article: Article
}

export const HomeArticle = ({ article }: Props) => {
    return (
        <div className="flex flex-col gap-4 py-4 px-2 sm:px-4 border-b-2 border-dark-300 font-mono transition-all rounded-xl hover:bg-dark-200">
            <Link 
                to={`/article/${article.id}`}
                preventScrollReset={true}
            >
                <picture>
                <img 
                    className="aspect-video object-cover rounded-xl mb-4"
                    src={article.imageUrl}
                    alt={article.title}
                    width="1920"
                    height="1080"
                    loading='lazy'
                /> 
                </picture>
                <h2 className="font-sans text-2xl text-gray-300 mb-3">{article.title}</h2>
                <p className="font-inter text-sm text-dark-300 hidden lg:block">{article.summary}</p>
            </Link>
            <p className="font-inter text-sm text-gray-300">
                {new Date(article.publishedAt).toLocaleString()}
            </p>
        </div>
    )
}