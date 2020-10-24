<template>
  <div>
    <header-bar />
    <section class="mt-16 sm:mt-32">
      <sideBar class="hidden sm:block px-5 xl:px-16 py-10 fixed w-32 xl:w-64" />
      <section class="px-4 sm:pl-32 xl:pl-64 pb-2">
        <div class="py-8 relative max-w-lg">
          <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
            <svg class="h-5 w-5" viewBox="0 0 24 24">
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <input
            class="w-full border rounded-md pl-10 pr-4 py-2 border-white-500 focus:border-green-500 focus:outline-none focus:shadow-outline bg-black-500"
            type="text"
            placeholder="Search"
          />
        </div>
      </section>
      <section class="px-8 sm:pl-32 xl:pl-64 py-4 p-8">
        <content
          class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10"
        >
          <router-link
            to="/detail"
            class="w-full card-item cursor-pointer"
            v-for="i in [1, 2, 3, 4, 5, 6]"
            :key="i"
          >
            <div
              class="flex items-end justify-end h-40 w-full bg-cover"
              style="
                background-image: url('https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1500&amp;q=80');
              "
            >
              <button
                class="p-2 rounded-full bg-gradient-green text-white mx-5 -mb-4 focus:outline-none"
              >
                <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </button>
            </div>
            <div class="p-2 pt-4">
              <div class="font-bold text-xl cursor-pointer">
                The Coldest Sunset
              </div>
            </div>
            <div class="p-2 text-red-700 text-xl">120$</div>
            <div class="p-2 pb-2 hidden lg:block">
              <span
                class="text-gray-700 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 cursor-pointer hover:opacity-75"
                >#photography</span
              >
              <span
                class="text-gray-700 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 cursor-pointer hover:opacity-75"
                >#travel</span
              >
            </div>
          </router-link>

          <router-link
            to="/detail"
            class="w-full card-item cursor-pointer"
            v-for="i in [1, 2, 3, 4, 5, 6]"
            :key="i"
          >
            <div
              class="flex items-end justify-end h-40 w-full bg-cover"
              style="
                background-image: url(https://img.ssensemedia.com/image/upload/b_white/c_scale,h_820/f_auto,dpr_1.0/202799F127006_1.jpg);
              "
            >
              <button
                class="p-2 rounded-full bg-gradient-green text-white mx-5 -mb-4 focus:outline-none"
              >
                <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </button>
            </div>
            <div class="p-2 pt-4">
              <div class="font-bold text-xl cursor-pointer">
                The Coldest Sunset
              </div>
            </div>
            <div class="p-2 text-red-700 text-xl">120$</div>
            <div class="p-2 pb-2 hidden lg:block">
              <span
                class="text-gray-700 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 cursor-pointer hover:opacity-75"
                >#photography</span
              >
              <span
                class="text-gray-700 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 cursor-pointer hover:opacity-75"
                >#travel</span
              >
            </div>
          </router-link>
        </content>
      </section>
    </section>

    <footer-master />
  </div>
</template>
<script src="./index.js"></script>
