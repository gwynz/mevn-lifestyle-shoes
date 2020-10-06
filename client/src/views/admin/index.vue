<template>
  <!-- component -->
  <div class="h-screen flex">
    <nav
      class="w-56 dark:bg-gray-800 select-none overflow-y-auto transition duration-500 ease-in-out"
    >
      <div class="flex flex-col items-center mt-10">
        <h1
          class="text-3xl font-light text-green-600 dark:text-green-600 mt-0 transition duration-500 ease-in-out"
        >
          ADMIN
        </h1>
      </div>

      <ul class="mt-20">
        <li
          class="pl-8 py-2 font-semibold text-gray-700 dark:text-gray-400 hover:bg-green-600 dark-hover:bg-pink-500 mb-2 transition duration-500 ease-in-out"
        >
          <button
            class="focus:text-green-550 dark-focus:text-green-600 focus:outline-none w-full transition duration-500 ease-in-out"
          >
            <router-link class="flex items-center" to="/admin/product">
              <svg class="h-4 w-4 fill-current" viewBox="0 0 576 512">
                <path
                  d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5
								21.5 48 48.1 48h479.8c26.6 0 48.1-21.5
								48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1
								80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6
								6-6zm467.8 352H54.1c-3.3
								0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192
								332v40c0 6.6-5.4 12-12 12h-72c-6.6
								0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12
								5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6
								0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0
								12 5.4 12 12z"
                />
              </svg>
              <span class="ml-4 capitalize">Product</span>
            </router-link>
          </button>
        </li>

        <li
          class="pl-8 py-2 font-semibold text-gray-700 dark:text-gray-400 hover:bg-green-600 dark-hover:bg-pink-500 mb-2 transition duration-500 ease-in-out"
        >
          <button
            class="focus:text-green-550 dark-focus:text-green-600 focus:outline-none w-full transition duration-500 ease-in-out"
          >
            <span class="flex items-center">
              <svg class="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path
                  d="M20 10H4V4h16m0 11H4v-2h16m0-11H4c-1.11 0-2
								.89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11
								0 2-.89 2-2V4c0-1.11-.89-2-2-2z"
                />
              </svg>
              <span class="ml-4 capitalize">wallet</span>
            </span>
          </button>
        </li>

        <li
          class="pl-8 py-2 font-semibold text-gray-700 dark:text-gray-400 hover:bg-green-600 dark-hover:bg-pink-500 mb-2 transition duration-500 ease-in-out"
        >
          <button
            class="focus:text-green-550 dark-focus:text-green-600 focus:outline-none w-full transition duration-500 ease-in-out"
          >
            <span class="flex items-center">
              <svg class="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path
                  d="M16 9c6 0 6 4 6
								4v2h-6v-2s0-1.69-1.15-3.2c-.17-.23-.38-.45-.6-.66C14.77
								9.06 15.34 9 16 9m-8 2c3.5 0 3.94 1.56 4
								2H4c.06-.44.5-2 4-2m0-2c-6 0-6 4-6
								4v2h12v-2s0-4-6-4m1 8v2h6v-2l3 3-3 3v-2H9v2l-3-3
								3-3M8 3c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1
								.45-1 1-1m0-2C6.34 1 5 2.34 5 4s1.34 3 3 3 3-1.34
								3-3-1.34-3-3-3m8 0c-1.66 0-3 1.34-3 3s1.34 3 3 3
								3-1.34 3-3-1.34-3-3-3z"
                />
              </svg>
              <span class="ml-4 capitalize">manage team</span>
            </span>
          </button>
        </li>

        <li
          class="pl-8 py-2 font-semibold text-gray-700 dark:text-gray-400 hover:bg-green-600 dark-hover:bg-pink-500 mb-2 transition duration-500 ease-in-out"
        >
          <button
            class="focus:text-green-550 dark-focus:text-green-600 focus:outline-none w-full transition duration-500 ease-in-out"
          >
            <span class="flex items-center">
              <svg class="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path
                  d="M21 8V6H7v2h14m0 8v-5H7v5h14m0-12a2 2 0 012
								2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V6c0-1.11.89-2
								2-2h14M3 20h15v2H3a2 2 0 01-2-2V9h2v11z"
                />
              </svg>
              <span class="ml-4 capitalize">manage cards</span>
            </span>
          </button>
        </li>

        <li
          class="pl-8 py-2 font-semibold text-gray-700 dark:text-gray-400 hover:bg-green-600 dark-hover:bg-pink-500 mb-2 transition duration-500 ease-in-out"
        >
          <button
            class="focus:text-green-550 dark-focus:text-green-600 focus:outline-none w-full transition duration-500 ease-in-out"
          >
            <span class="flex items-center">
              <span class="ml-4 capitalize">company profile</span>
            </span>
          </button>
        </li>

        <li
          class="pl-8 py-2 font-semibold text-gray-700 dark:text-gray-400 hover:bg-green-600 dark-hover:bg-pink-500 mb-2 transition duration-500 ease-in-out"
        >
          <button
            class="focus:text-green-550 dark-focus:text-green-600 focus:outline-none w-full transition duration-500 ease-in-out"
          >
            <span class="flex items-center">
              <svg class="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M3 13h12v-2H3m0-5v2h18V6M3 18h6v-2H3v2z" />
              </svg>
              <span class="ml-4 capitalize">manage categories</span>
            </span>
          </button>
        </li>
        <li
          class="pl-8 py-2 font-semibold text-gray-700 dark:text-gray-400 hover:bg-green-600 dark-hover:bg-pink-500 transition duration-500 ease-in-out"
        >
          <button
            class="focus:text-green-550 dark-focus:text-green-600 focus:outline-none w-full transition duration-500 ease-in-out"
          >
            <span class="flex items-center">
              <span class="ml-4 capitalize">my profile</span>
            </span>
          </button>
        </li>
      </ul>
    </nav>

    <main
      class="flex-1 bg-gray-200 dark:bg-gray-900 overflow-y-auto transition duration-500 ease-in-out"
    >
      <div
        class="px-24 py-12 text-gray-700 dark:text-gray-500 transition duration-500 ease-in-out"
      >
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>
<script src="./index.js"></script>