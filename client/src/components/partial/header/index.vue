<template>
  <header class="fixed inset-0 bottom-auto z-50">
    <header class="bg-gradient-green text-center text-white text-2xl bold">
      <router-link to="/">LIFESTYLE SHOES</router-link>
    </header>
    <nav class="hidden sm:flex justify-center p-4 bg-black-400 relative">
      <div
        class="flex items-center px-4 py-2 mx-1 rounded-md bg-black-500 shadow-xs cursor-pointer hover:bg-black-900"
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
        class="flex items-center px-4 py-2 mx-1 rounded-md bg-black-500 shadow-xs cursor-pointer hover:bg-black-900"
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
        class="flex items-center px-4 py-2 mx-1 rounded-md bg-black-500 shadow-xs cursor-pointer hover:bg-black-900"
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
        class="flex items-center px-4 py-2 mx-1 rounded-md bg-black-500 shadow-xs cursor-pointer hover:bg-black-900"
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
        <div
          class="px-4 border-black-100 border-solid border-2 rounded-md bg-black-500 cursor-pointer hover:bg-black-900 flex justify-center items-center"
          @click="$refs.modalRegister.setShowModal(true)"
        >Sign Up</div>
        <div
          class="px-4 mx-2 border-black-100 border-solid border-2 rounded-md bg-black-500 cursor-pointer hover:bg-black-900 flex justify-center items-center"
          @click="$refs.modalLogin.setShowModal(true)"
        >Sign In</div>
        <div
          class="p-1 bg-gradient-mul text-center rounded-sm cursor-pointer hover:opacity-75"
          @click="$refs.modalCart.setShowModal(true)"
        >
          <span class="bg-black-900 p-2 rounded-sm flex justify-center items-center px-4">
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
  </header>
</template>
<script src="./index.js"></script>