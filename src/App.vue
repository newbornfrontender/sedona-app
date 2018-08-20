<template>
  <section id="app">
    <header class="main-header">
      <nav class="site-nav">
        <ul class="list nav-list">
          <li class="list__item nav-list__item">
            <img class="site-logo" src="" alt="">

            <span class="btn-dropdown btn-dropdown--open"></span>
          </li>

          <li class="list__item nav-list__item">
            <ul class="list nav-list">
              <li class="list__item nav-list__item nav-list__item--dropdown">
                <router-link
                  class="link nav-list__link"
                  to="/"
                >Главная</router-link>

                <span class="btn-dropdown btn-dropdown--close"></span>
              </li>

              <li class="list__item nav-list__item nav-list__item--dropdown">
                <router-link
                  class="link nav-list__link"
                  to="/gallery"
                >Фото и видео</router-link>
              </li>

              <li
                class="list__item nav-list__item nav-list__item--dropdown"
              >
                <router-link
                  class="link nav-list__link"
                  to="/gallery"
                >
                  <img class="site-logo" src="" alt="">
                </router-link>
              </li>

              <li class="list__item nav-list__item nav-list__item--dropdown">
                <router-link
                  class="link nav-list__link"
                  to="/review-form"
                >Форма отзыва</router-link>
              </li>

              <li class="list__item nav-list__item nav-list__item--dropdown">
                <a
                  class="link nav-list__link"
                  target="_blank"
                  href="https://htmlacademy.ru/"
                  hreflang="ru"
                >Html Academy</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>

    <main class="main-content">
      <router-view/>
    </main>
  </section>
</template>
