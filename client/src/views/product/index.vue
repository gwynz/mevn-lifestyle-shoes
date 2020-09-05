<template>
  <div>
    <header-bar />
    <section class="pt-20">
      <sideBar class="px-10 py-16 fixed w-2/12" />
      <section class="pl-56 pb-2 pt-16">
        <div class="ml-24 py-4 relative max-w-lg">
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
            class="w-full border rounded-md pl-10 pr-4 py-2 border-black-500 focus:border-green-500 focus:outline-none focus:shadow-outline bg-black-500"
            type="text"
            placeholder="Search"
          />
        </div>
      </section>
      <section class="pl-56 py-4">
        <content class="px-24 mx-auto grid grid-cols-5 gap-10">
          <router-link
            to="/detail"
            class="w-full card-item cursor-pointer"
            v-for="i in [1,2,3,4,5]"
            :key="i"
          >
            <div
              class="flex items-end justify-end h-40 w-full bg-cover"
              style="background-image: url(&quot;https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1500&amp;q=80&quot;);"
            >
              <button
                class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
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
              <div class="font-bold text-xl cursor-pointer">The Coldest Sunset</div>
            </div>
            <div class="p-2 text-red-700 text-xl">120$</div>
            <div class="p-2 pb-2">
              <span
                class="text-gray-700 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 cursor-pointer hover:opacity-75"
              >#photography</span>
              <span
                class="text-gray-700 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 cursor-pointer hover:opacity-75"
              >#travel</span>
            </div>
          </router-link>
          <div class="w-full card-item cursor-pointer" v-for="i in [6,7,8,9,10]" :key="i">
            <img
              class="w-full"
              src="https://img.ssensemedia.com/image/upload/b_white/c_scale,h_820/f_auto,dpr_1.0/202799F127006_1.jpg"
              alt="Sunset in the mountains"
            />
            <div class="p-2 pt-4">
              <div class="font-bold text-xl cursor-pointer">The Coldest Sunset</div>
            </div>
            <div class="p-2 text-red-700 text-xl">120$</div>
            <div class="p-2 pb-2">
              <span
                class="text-gray-700 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 cursor-pointer hover:opacity-75"
              >#photography</span>
              <span
                class="text-gray-700 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 cursor-pointer hover:opacity-75"
              >#travel</span>
            </div>
          </div>
        </content>
      </section>
    </section>

    <footer class="bg-black-900 h-64 mt-16">
      <div class="container mx-auto flex justify-between align-middle h-full text-black-100">
        <nav class="flex items-center">
          <h4 class="bold mx-2">Gwynz</h4>
          <a class="mx-2" href="#">About</a>
          <a class="mx-2" href="#">Blog</a>
          <a class="mx-2" href="#">Podcast</a>
          <a class="mx-2" href="#">Advertising</a>
          <a class="mx-2" href="#">Docs</a>
          <a class="mx-2" href="#">Support</a>
          <a class="mx-2" href="#">Shop</a>
        </nav>
        <div class="flex items-center">
          <p>©2020 Gwz</p>
        </div>
      </div>
    </footer>
  </div>
</template>
<script src="./index.js"></script>
