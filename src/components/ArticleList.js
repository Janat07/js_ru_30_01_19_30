import React, {Component, PropTypes} from 'react'
import Article from './Article/index'
import accordion from '../decorators/accordion'
import SelectFilters from './SelectFilters'
import {connect} from 'react-redux'
import {changeFilters} from '../AC/filters'

class ArticleList extends Component {
    render() {
        const {articles, toggleOpenItem, isOpenItem} = this.props
        const articleElements = articles.map((article) => <li key={article.id}>
            <Article
                article={article}
                isOpen={isOpenItem(article.id)}
                toggleOpen={toggleOpenItem(article.id)}/>
        </li>)
        return (
            <div>
                <SelectFilters/>
                <ul>
                    {articleElements}
                </ul>
            </div>
    )
    }
}
export default accordion(ArticleList)

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    //from accordion decorator
    isOpenItem: PropTypes.func.isRequired,
    toggleOpenItem: PropTypes.func.isRequired
}

ArticleList.defaultProps = {
    articles: []
}
/*export  default connect(state => {


    return {...state}

}, {changeFilters})(ArticleList)*/
