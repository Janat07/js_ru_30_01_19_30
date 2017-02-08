import React, {Component, PropTypes} from 'react'
import Article from './Article'
import OneOpen from '../decorators/accordion'

 class ArticleList extends Component {
    static  propTypes = {
        articles: PropTypes.array.isRequired,
        toggleOpen: PropTypes.func.isRequired,
        isItemOpen: PropTypes.func.isRequired
    }

     state = {
         openItemId: null
     }

    render() {
        const {articles,toggleOpen,isItemOpen} = this.props
        const {openItemId} = this.state
        const articleElements = articles.map((article) => <li key={article.id}>
            <Article
                article={article}
                isOpen={isItemOpen(article.id)}
                toggleOpen={toggleOpen(article.id)}/>
            </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
 }


ArticleList.defaultProps = {
    articles: []
}
export default OneOpen(ArticleList)
