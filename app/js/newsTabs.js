'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.filtersList__btn');
  const articles = document.querySelectorAll('.newsArticle');
  const tabsList = document.querySelector('.filtersList');

  function hideArticles() {
    articles.forEach((el) => {
      el.closest('.newsList__item').classList.add('newsList__item_hidden');
      el.closest('.newsList__item').classList.remove('newsList__item_visible');
    });
  }

  function showArticles(dataValue = 'all') {
    articles.forEach((el) => {
      if (el.dataset.target === `${dataValue}`) {
        el.closest('.newsList__item').classList.add('newsList__item_visible');
        el.closest('.newsList__item').classList.remove('newsList__item_hidden');
      }
      if (dataValue === 'all') {
        el.closest('.newsList__item').classList.remove('newsList__item_hidden');
        el.closest('.newsList__item').classList.add('newsList__item_visible');
      }
    });
  }

  hideArticles();
  showArticles();

  tabsList.addEventListener('click', (e) => {
    const self = e.target;
    const dataValue = self.dataset.filter;
    
    tabs.forEach((el) => {
      el.classList.remove('filtersList__btn_active');
    });

    self.classList.add('filtersList__btn_active');

    if (self.classList.contains('filtersList__btn')) {
      hideArticles();
      showArticles(dataValue);
    }
  });
});
