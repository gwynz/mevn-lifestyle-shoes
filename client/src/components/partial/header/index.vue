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
    <nav class="hidden sm:flex justify-center p-4 bg-black-400 relative">
      <div
        class="flex items-center px-4 py-2 mx-1 rounded-md bg-black-500 shadow-xs cursor-pointer hover:bg-black-900 transition-all duration-300"
      >
        Nam
        <svg
          class="w-2 fill-current ml-2"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Capa 1"
          viewBox="0 0 3.5 2.5"
        >
          <defs />
          <path d="M3.5 0H0l1.75 2.5L3.5 0z" />
        </svg>
      </div>
      <div
        class="flex items-center px-4 py-2 mx-1 rounded-md bg-black-500 shadow-xs cursor-pointer hover:bg-black-900 transition-all duration-300"
      >
        Nu
        <svg
          class="w-2 fill-current ml-2"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Capa 1"
          viewBox="0 0 3.5 2.5"
        >
          <defs />
          <path d="M3.5 0H0l1.75 2.5L3.5 0z" />
        </svg>
      </div>
      <div
        class="flex items-center px-4 py-2 mx-1 rounded-md bg-black-500 shadow-xs cursor-pointer hover:bg-black-900"
      >
        The thao
        <svg
          class="w-2 fill-current ml-2"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Capa 1"
          viewBox="0 0 3.5 2.5"
        >
          <defs />
          <path d="M3.5 0H0l1.75 2.5L3.5 0z" />
        </svg>
      </div>
      <div
        class="flex items-center px-4 py-2 mx-1 rounded-md bg-black-500 shadow-xs cursor-pointer hover:bg-black-900 transition-all duration-300"
      >
        Cac nhan hieu
        <svg
          class="w-2 fill-current ml-2"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Capa 1"
          viewBox="0 0 3.5 2.5"
        >
          <defs />
          <path d="M3.5 0H0l1.75 2.5L3.5 0z" />
        </svg>
      </div>
      <div
        class="flex items-center px-4 py-2 mx-1 rounded-md bg-black-500 shadow-xs cursor-pointer hover:bg-black-900 transition-all duration-300"
      >
        Phu kien
        <svg
          class="w-2 fill-current ml-2"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Capa 1"
          viewBox="0 0 3.5 2.5"
        >
          <defs />
          <path d="M3.5 0H0l1.75 2.5L3.5 0z" />
        </svg>
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
</style>