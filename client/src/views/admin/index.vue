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
            <router-link
              class="flex items-center hover:text-black-500"
              to="/admin/list-product"
            >
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
            class="focus:outline-none w-full transition duration-500 ease-in-out"
          >
            <router-link class="flex items-center text-gray-600" to="/">
              <svg class="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path
                  d="M20 10H4V4h16m0 11H4v-2h16m0-11H4c-1.11 0-2
								.89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11
								0 2-.89 2-2V4c0-1.11-.89-2-2-2z"
                />
              </svg>
              <span class="ml-4 capitalize">Home page</span>
            </router-link>
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