import { Link } from 'react-router-dom'
import { Article } from '../../types/article'

type Props = {
    article: Article
}

export const HomeArticle = ({ article }: Props) => {
    return (
        <div className="flex flex-col gap-4 py-4 border-b font-mono">
            <Link 
                to={`/article/${article.id}`}
                preventScrollReset={true}
            >
                <picture>
                <img 
                    className="aspect-video object-cover mb-4"
                    src={article.imageUrl}
                    alt={article.title}
                    width="1920"
                    height="1080"
                    loading='lazy'
                /> 
                </picture>
                <h2 className="font-sans text-2xl text-white mb-2">{article.title}</h2>
                <p className="text-sm text-dark-300 hidden lg:block">{article.summary}</p>
            </Link>
            <p className="text-sm text-gray-300">
                {new Date(article.publishedAt).toLocaleString()}
            </p>
        </div>
    )
}