<template>
  <header class="fixed inset-0 bottom-auto z-50">
    <header class="bg-gradient-green text-center text-white text-2xl bold">
      <router-link to="/">LIFESTYLE SHOES</router-link>
    </header>
    <div
      class="block sm:hidden absolute left-0 cursor-pointer focus:outline-none"
      style="top: 6px"
      @click.prevent="showMenuOnMobile = true"
    >
      <img src="@/images/menu.svg" alt="" class="w-6 h-6" />
    </div>
    <nav
      class="hidden sm:flex justify-center p-2 bg-black-400 relative items-center"
    >
      <div class="inline-flex" id="main_menu">
        <ul
          class="flex flex-wrap p-1 md:p-2 sm:bg-black-500 sm:rounded-full text-sm md:text-base"
          id="menu_nav"
        >
          <li
            class="relative mx-1 px-1 py-2 group rounded-full mb-1 md:mb-0"
            id="button_home"
          >
            <a
              class="font-semibold whitespace-no-wrap text-green-550 hover:text-green-550"
              href="http://www.italiansubs.local:8081/forum/index.php"
            >
              <span class="last firstlevel">Indice</span>
            </a>
          </li>
          <li
            class="relative mx-1 px-1 py-2 group rounded-full mb-1 md:mb-0"
            id="button_admin"
          >
            <a
              class="font-semibold whitespace-no-wrap text-gray-600 hover:text-green-550"
              href="http://www.italiansubs.local:8081/forum/index.php?action=admin"
            >
              <span class="firstlevel">Amministra</span>
            </a>
            <ul
              class="absolute left-0 top-0 mt-10 p-2 rounded-lg shadow-lg bg-black-500 z-10 hidden group-hover:block"
            >
              <svg
                class="block fill-current text-white w-4 h-4 absolute left-0 top-0 ml-3 -mt-3 z-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                ></path>
              </svg>
              <li
                class="p-1 whitespace-no-wrap rounded-full text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-100"
              >
                <a
                  class="px-2 py-1"
                  href="http://www.italiansubs.local:8081/forum/index.php?action=admin;area=featuresettings"
                >
                  <span class="">Funzioni ed opzioni</span>
                </a>
              </li>
              <li
                class="p-1 whitespace-no-wrap rounded-full text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-100"
              >
                <a
                  class="px-2 py-1"
                  href="http://www.italiansubs.local:8081/forum/index.php?action=admin;area=packages"
                >
                  <span class="">Gestore Pacchetti</span>
                </a>
              </li>
              <li
                class="p-1 whitespace-no-wrap rounded-full text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-100"
              >
                <a
                  class="px-2 py-1"
                  href="http://www.italiansubs.local:8081/forum/index.php?action=admin;area=permissions"
                >
                  <span class="">Permessi</span>
                </a>
              </li>
            </ul>
          </li>
          <li
            class="relative mx-1 px-1 py-2 group rounded-full mb-1 md:mb-0"
            id="button_moderate"
          >
            <a
              class="font-semibold whitespace-no-wrap text-gray-600 hover:text-green-550"
              href="http://www.italiansubs.local:8081/forum/moderate/"
            >
              <span class="firstlevel">Modera</span>
            </a>
            <ul
              class="absolute left-0 top-0 mt-10 p-2 rounded-lg shadow-lg bg-black-500 z-10 hidden group-hover:block"
            >
              <svg
                class="block fill-current text-white w-4 h-4 absolute left-0 top-0 ml-3 -mt-3 z-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                ></path>
              </svg>
              <li
                class="p-1 whitespace-no-wrap rounded-full text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-100"
              >
                <a
                  class="px-2 py-1"
                  href="http://www.italiansubs.local:8081/forum/moderate/?area=modlog"
                >
                  <span class="">Registro moderazione</span>
                </a>
              </li>
              <li
                class="p-1 whitespace-no-wrap rounded-full text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-100"
              >
                <a
                  class="px-2 py-1"
                  href="http://www.italiansubs.local:8081/forum/moderate/?area=reports"
                >
                  <span class="">Post segnalati</span>
                </a>
              </li>
            </ul>
          </li>
          <li
            class="relative mx-1 px-1 py-2 group rounded-full mb-1 md:mb-0"
            id="button_profile"
          >
            <a
              class="font-semibold whitespace-no-wrap text-gray-600 hover:text-green-550"
              href="http://www.italiansubs.local:8081/forum/profile/"
            >
              <span class="firstlevel">Profilo</span>
            </a>
            <ul
              class="absolute left-0 top-0 mt-10 p-2 rounded-lg shadow-lg bg-black-500 z-10 hidden group-hover:block"
            >
              <svg
                class="block fill-current text-white w-4 h-4 absolute left-0 top-0 ml-3 -mt-3 z-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                ></path>
              </svg>
              <li
                class="p-1 whitespace-no-wrap rounded-full text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-100"
              >
                <a
                  class="px-2 py-1"
                  href="http://www.italiansubs.local:8081/forum/profile/"
                >
                  <span class="">Sommario</span>
                </a>
              </li>
              <li
                class="p-1 whitespace-no-wrap rounded-full text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-100"
              >
                <a
                  class="px-2 py-1"
                  href="http://www.italiansubs.local:8081/forum/profile/?area=account"
                >
                  <span class="">Impostazioni account</span>
                </a>
              </li>
              <li
                class="p-1 whitespace-no-wrap rounded-full text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-100"
              >
                <a
                  class="px-2 py-1"
                  href="http://www.italiansubs.local:8081/forum/profile/?area=forumprofile"
                >
                  <span class="">Profilo forum</span>
                </a>
              </li>
              <li
                class="p-1 whitespace-no-wrap rounded-full text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-100"
              >
                <a
                  class="px-2 py-1"
                  href="http://www.italiansubs.local:8081/forum/profile/?area=mentions"
                >
                  <span class="">Tag</span>
                </a>
              </li>
            </ul>
          </li>
          <li
            class="relative mx-1 px-1 py-2 group rounded-full mb-1 md:mb-0"
            id="button_pm"
          >
            <a
              class="font-semibold whitespace-no-wrap text-gray-600 hover:text-green-550"
              href="http://www.italiansubs.local:8081/forum/pm/"
            >
              <span class="firstlevel">Messaggi privati</span>
            </a>
            <ul
              class="absolute left-0 top-0 mt-10 p-2 rounded-lg shadow-lg bg-black-500 z-10 hidden group-hover:block"
            >
              <svg
                class="block fill-current text-white w-4 h-4 absolute left-0 top-0 ml-3 -mt-3 z-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                ></path>
              </svg>
              <li
                class="p-1 whitespace-no-wrap rounded-full text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-100"
              >
                <a
                  class="px-2 py-1"
                  href="http://www.italiansubs.local:8081/forum/pm/"
                >
                  <span class="">Leggi i tuoi messaggi</span>
                </a>
              </li>
              <li
                class="p-1 whitespace-no-wrap rounded-full text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-100"
              >
                <a
                  class="px-2 py-1"
                  href="http://www.italiansubs.local:8081/forum/pm/?sa=send"
                >
                  <span class="">Invia un messaggio privato</span>
                </a>
              </li>
            </ul>
          </li>
          <li
            class="relative mx-1 px-1 py-2 group rounded-full mb-1 md:mb-0"
            id="button_like"
          >
            <a
              class="font-semibold whitespace-no-wrap text-gray-600 hover:text-green-550"
              href="http://www.italiansubs.local:8081/forum/profile/?area=showposts;sa=liked"
            >
              <span class="firstlevel">Like Ricevuti</span>
            </a>
          </li>
          <li
            class="relative mx-1 px-1 py-2 group rounded-full mb-1 md:mb-0"
            id="button_mlist"
          >
            <a
              class="font-semibold whitespace-no-wrap text-gray-600 hover:text-green-550"
              href="http://www.italiansubs.local:8081/forum/mlist/"
            >
              <span class="firstlevel">Utenti</span>
            </a>
            <ul
              class="absolute left-0 top-0 mt-10 p-2 rounded-lg shadow-lg bg-black-500 z-10 hidden group-hover:block"
            >
              <svg
                class="block fill-current text-white w-4 h-4 absolute left-0 top-0 ml-3 -mt-3 z-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                ></path>
              </svg>
              <li
                class="p-1 whitespace-no-wrap rounded-full text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-100"
              >
                <a
                  class="px-2 py-1"
                  href="http://www.italiansubs.local:8081/forum/mlist/"
                >
                  <span class="">Visualizza la lista degli utenti</span>
                </a>
              </li>
              <li
                class="p-1 whitespace-no-wrap rounded-full text-sm md:text-base text-gray-600 hover:text-gray-800 hover:bg-gray-100"
              >
                <a
                  class="px-2 py-1"
                  href="http://www.italiansubs.local:8081/forum/mlist/?sa=search"
                >
                  <span class="">Cerca utente</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="mr-20 absolute right-0 hidden xl:flex">
        <div class="flex" v-if="!user">
          <div
            class="px-4 border-black-100 border-solid border-2 rounded-md bg-black-500 cursor-pointer hover:bg-black-900 flex justify-center items-center transition-all duration-300"
            @click.prevent="showModalRegister"
          >
            Sign Up
          </div>
          <div
            class="px-4 mx-2 border-black-100 border-solid border-2 rounded-md bg-black-500 cursor-pointer hover:bg-black-900 flex justify-center items-center transition-all duration-300"
            @click.prevent="showModalLogin"
          >
            Sign In
          </div>
        </div>
        <div
          v-else
          @click.prevent="showMenuProfile = !showMenuProfile"
          class="p-3 bg-black-500 mr-4 rounded-lg cursor-pointer relative"
        >
          {{ user.name }}
          <div
            v-show="showMenuProfile"
            class="absolute bg-black-500 p-2 w-40 right-0 rounded-md hover:text-green-550"
            style="top: 50px"
          >
            <ul class="w-full flex justify-center">
              <li @click.prevent="logOutHandler">Log out</li>
            </ul>
          </div>
        </div>
        <div
          class="p-1 bg-gradient-mul text-center rounded-sm cursor-pointer"
          @click="$refs.modalCart.setShowModal(true)"
        >
          <span
            class="bg-black-900 hover:opacity-75 p-2 rounded-sm flex justify-center items-center px-4 transition-all duration-300"
          >
            <svg
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-5 w-5 mr-2"
            >
              <path
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Cart
          </span>
        </div>
      </div>
    </nav>
    <cartModal ref="modalCart" />
    <logInModal ref="modalLogin" />
    <registerModal ref="modalRegister" />
    <transition name="left-to">
      <div
        class="absolute w-full h-screen bg-black-500 inset-0"
        v-show="showMenuOnMobile"
      >
        <div
          class="absolute top-0 right-0 text-white"
          style="top: 10px; right: 10px"
          @click.prevent="showMenuOnMobile = false"
        >
          <img
            src="@/images/chevron-pointing-to-the-left.svg"
            class="w-6 h-6 fill-current text-white stroke-current"
          />
        </div>
        <ul class="w-full mt-24">
          <li class="text-center px-4 py-2 hover:bg-green-550">menu 1</li>
          <li class="text-center px-4 py-2 hover:bg-green-550">menu 2</li>
          <li class="text-center px-4 py-2 hover:bg-green-550">menu 3</li>
        </ul>
      </div>
    </transition>
  </header>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped>
.group:hover .group-hover\:block {
  display: block !important;
}
</style>