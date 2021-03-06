import {articles_url, api_key, category, country_code } from '../config/rest-config';

export async function getArticles() {
    try {
        let articles = await fetch (`${articles_url}?country=${country_code}&
        category=${category}`, {
            headers: {
                'X-API-KEY': api_key
            }
        });
        let result = await articles.json();
        articles = null;
        return result.articles;
    }
    catch(error){
        throw error;
    }
}