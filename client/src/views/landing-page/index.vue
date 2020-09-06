<template>
  <div>
    <headerBar />
    <div class="relative max-w-lg mx-auto mt-32">
      <router-link to="/product">
        <span class="absolute inset-y-0 left-0 pl-3 flex items-center cursor-pointer text-white">
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
      </router-link>

      <input
        class="w-full border rounded-md pl-10 pr-4 py-2 border-black-500 focus:border-green-500 focus:outline-none focus:shadow-outline bg-black-500"
        type="text"
        placeholder="Search"
      />
    </div>
    <main class="my-8">
      <div
        class="my-32 container mx-auto px-6 sm:px-12 lg:py-6 xl:py-16 relative flex flex-col sm:flex-row"
      >
        <div class="sm:w-1/2 sm:pt-8 lg:pt-16 pb-8 sm:pb-16 lg:pb-32 relative z-30">
          <h2 class="uppercase text-blue-900 font-bold tracking-wider text-2xl">Special Promo</h2>
          <h1
            class="uppercase font-black text-green-550 leading-none tracking-wider mb-6 mt-4 text-5xl lg:text-6xl xl:text-8xl"
          >
            Autumn
            <br class="hidden sm:block" />Sale
          </h1>
          <p
            class="font-roboto text-lg sm:w-2/3 lg:w-1/2"
          >Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incid idunt ut labore dolore.</p>
        </div>
        <div class="sm:w-1/2 lg:w-2/3 relative sm:absolute bottom-0 right-0 bg-gray-300">
          <h3
            class="monteserrat font-black text-white absolute top-0 left-0 mt-32 sm:mt-32 lg:mt-56 ml-0 lg:ml-12 z-10 text-xl sm:text-3xl lg:text-4xl xl:text-5xl transform rotate-90"
          >up to 50%</h3>
          <div
            class="left-0 bottom-0 w-full h-16 absolute z-30 flex items-center justify-center mb-12 lg:mb-24 xl:mb-32"
          >
            <span
              class="bg-black text-white uppercase font-black xl:text-2xl py-2 px-6 rounded-full"
            >Get the code here</span>
          </div>
          <img
            class="absolute left-0 right-0 w-full h-full object-cover z-10"
            src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80"
          />
          <div class="bg-gray-500 absolute inset-0 mt-16 -ml-8"></div>
          <svg
            class="relative z-20 pt-8 -ml-16"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Capa 1"
            viewBox="0 0 428.29 298.11"
          >
            <defs />
            <path
              fill="#fff"
              d="M364.79 23.93v199h-271v-199h271m2.06-2.06H91.73V225h275.12V21.87z"
            />
            <path
              fill="#fff"
              d="M119.74 11.53L84.99 46.29l-2.16-9.75-9.37-1.78L108.22 0l1.35 9.81 10.17 1.72zM387.74 211.53l-34.75 34.76-2.16-9.75-9.37-1.78L376.21 200l1.36 9.81 10.17 1.72z"
            />
            <path
              fill="#b7791f"
              d="M336.29 92.93h92v5h-92zM336.29 77.93h92v5h-92zM336.29 62.93h92v5h-92zM336.29 122.93h92v5h-92zM336.29 107.93h92v5h-92z"
            />
            <circle cx="1.75" cy="296.36" r="1.75" fill="#24263a" />
            <circle cx="1.75" cy="286.99" r="1.75" fill="#24263a" />
            <circle cx="1.75" cy="277.62" r="1.75" fill="#24263a" />
            <circle cx="1.75" cy="268.26" r="1.75" fill="#24263a" />
            <circle cx="1.75" cy="258.89" r="1.75" fill="#24263a" />
            <circle cx="1.75" cy="249.53" r="1.75" fill="#24263a" />
            <circle cx="1.75" cy="240.16" r="1.75" fill="#24263a" />
            <circle cx="1.75" cy="230.8" r="1.75" fill="#24263a" />
            <circle cx="1.75" cy="221.43" r="1.75" fill="#24263a" />
            <circle cx="1.75" cy="212.06" r="1.75" fill="#24263a" />
            <circle cx="1.75" cy="202.7" r="1.75" fill="#24263a" />
            <circle cx="1.75" cy="193.33" r="1.75" fill="#24263a" />
            <circle cx="1.75" cy="183.97" r="1.75" fill="#24263a" />
            <circle cx="1.75" cy="174.6" r="1.75" fill="#24263a" />
            <circle cx="1.75" cy="165.23" r="1.75" fill="#24263a" />
            <circle cx="1.75" cy="155.87" r="1.75" fill="#24263a" />
            <circle cx="1.75" cy="146.5" r="1.75" fill="#24263a" />
            <circle cx="1.75" cy="137.14" r="1.75" fill="#24263a" />
            <path
              fill="#24263a"
              d="M1.75 126A1.75 1.75 0 110 127.77 1.75 1.75 0 011.75 126zM1.75 116.65A1.76 1.76 0 110 118.41a1.75 1.75 0 011.75-1.76zM10.78 294.6A1.76 1.76 0 119 296.36a1.76 1.76 0 011.78-1.76zM10.78 285.24A1.75 1.75 0 119 287a1.75 1.75 0 011.78-1.76zM10.78 275.87A1.76 1.76 0 119 277.62a1.76 1.76 0 011.78-1.75zM10.78 266.51A1.75 1.75 0 119 268.26a1.75 1.75 0 011.78-1.75zM10.78 257.14A1.75 1.75 0 119 258.89a1.75 1.75 0 011.78-1.75zM10.78 247.77A1.76 1.76 0 119 249.53a1.76 1.76 0 011.78-1.76zM10.78 238.41A1.75 1.75 0 119 240.16a1.75 1.75 0 011.78-1.75zM10.78 229A1.76 1.76 0 119 230.8a1.76 1.76 0 011.78-1.8zM10.78 219.68A1.75 1.75 0 119 221.43a1.75 1.75 0 011.78-1.75zM10.78 210.31A1.76 1.76 0 119 212.06a1.76 1.76 0 011.78-1.75zM10.78 201A1.75 1.75 0 119 202.7a1.75 1.75 0 011.78-1.7zM10.78 191.58A1.75 1.75 0 119 193.33a1.75 1.75 0 011.78-1.75zM10.78 182.21A1.76 1.76 0 119 184a1.76 1.76 0 011.78-1.79zM10.78 172.85A1.75 1.75 0 119 174.6a1.75 1.75 0 011.78-1.75zM10.78 163.48A1.76 1.76 0 119 165.23a1.76 1.76 0 011.78-1.75zM10.78 154.12A1.75 1.75 0 119 155.87a1.75 1.75 0 011.78-1.75zM10.78 144.75A1.75 1.75 0 119 146.5a1.76 1.76 0 011.78-1.75zM10.78 135.39A1.75 1.75 0 119 137.14a1.75 1.75 0 011.78-1.75zM10.78 126A1.75 1.75 0 119 127.77a1.75 1.75 0 011.78-1.77zM10.78 116.65A1.76 1.76 0 119 118.41a1.76 1.76 0 011.78-1.76z"
            />
            <circle cx="19.82" cy="296.36" r="1.75" fill="#24263a" />
            <circle cx="19.82" cy="286.99" r="1.75" fill="#24263a" />
            <circle cx="19.82" cy="277.62" r="1.75" fill="#24263a" />
            <circle cx="19.82" cy="268.26" r="1.75" fill="#24263a" />
            <circle cx="19.82" cy="258.89" r="1.75" fill="#24263a" />
            <circle cx="19.82" cy="249.53" r="1.75" fill="#24263a" />
            <circle cx="19.82" cy="240.16" r="1.75" fill="#24263a" />
            <circle cx="19.82" cy="230.8" r="1.75" fill="#24263a" />
            <circle cx="19.82" cy="221.43" r="1.75" fill="#24263a" />
            <circle cx="19.82" cy="212.06" r="1.75" fill="#24263a" />
            <circle cx="19.82" cy="202.7" r="1.75" fill="#24263a" />
            <circle cx="19.82" cy="193.33" r="1.75" fill="#24263a" />
            <circle cx="19.82" cy="183.97" r="1.75" fill="#24263a" />
            <circle cx="19.82" cy="174.6" r="1.75" fill="#24263a" />
            <circle cx="19.82" cy="165.23" r="1.75" fill="#24263a" />
            <circle cx="19.82" cy="155.87" r="1.75" fill="#24263a" />
            <circle cx="19.82" cy="146.5" r="1.75" fill="#24263a" />
            <circle cx="19.82" cy="137.14" r="1.75" fill="#24263a" />
            <path
              fill="#24263a"
              d="M19.82 126a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM19.82 116.65a1.76 1.76 0 11-1.75 1.76 1.75 1.75 0 011.75-1.76z"
            />
            <circle cx="28.85" cy="296.36" r="1.75" fill="#24263a" />
            <circle cx="28.85" cy="286.99" r="1.75" fill="#24263a" />
            <circle cx="28.85" cy="277.62" r="1.75" fill="#24263a" />
            <circle cx="28.85" cy="268.26" r="1.75" fill="#24263a" />
            <circle cx="28.85" cy="258.89" r="1.75" fill="#24263a" />
            <circle cx="28.85" cy="249.53" r="1.75" fill="#24263a" />
            <circle cx="28.85" cy="240.16" r="1.75" fill="#24263a" />
            <circle cx="28.85" cy="230.8" r="1.75" fill="#24263a" />
            <circle cx="28.85" cy="221.43" r="1.75" fill="#24263a" />
            <circle cx="28.85" cy="212.06" r="1.75" fill="#24263a" />
            <circle cx="28.85" cy="202.7" r="1.75" fill="#24263a" />
            <circle cx="28.85" cy="193.33" r="1.75" fill="#24263a" />
            <circle cx="28.85" cy="183.97" r="1.75" fill="#24263a" />
            <circle cx="28.85" cy="174.6" r="1.75" fill="#24263a" />
            <circle cx="28.85" cy="165.23" r="1.75" fill="#24263a" />
            <circle cx="28.85" cy="155.87" r="1.75" fill="#24263a" />
            <circle cx="28.85" cy="146.5" r="1.75" fill="#24263a" />
            <circle cx="28.85" cy="137.14" r="1.75" fill="#24263a" />
            <path
              fill="#24263a"
              d="M28.85 126a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM28.85 116.65a1.76 1.76 0 11-1.75 1.76 1.75 1.75 0 011.75-1.76zM37.88 294.6a1.76 1.76 0 11-1.75 1.76 1.76 1.76 0 011.75-1.76zM37.88 285.24a1.75 1.75 0 11-1.75 1.76 1.75 1.75 0 011.75-1.76zM37.88 275.87a1.76 1.76 0 11-1.75 1.75 1.76 1.76 0 011.75-1.75zM37.88 266.51a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 257.14a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 247.77a1.76 1.76 0 11-1.75 1.76 1.76 1.76 0 011.75-1.76zM37.88 238.41a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 229a1.76 1.76 0 11-1.75 1.76 1.76 1.76 0 011.75-1.76zM37.88 219.68a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 210.31a1.76 1.76 0 11-1.75 1.75 1.76 1.76 0 011.75-1.75zM37.88 201a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 191.58a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 182.21a1.76 1.76 0 11-1.75 1.79 1.76 1.76 0 011.75-1.79zM37.88 172.85a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 163.48a1.76 1.76 0 11-1.75 1.75 1.76 1.76 0 011.75-1.75zM37.88 154.12a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 144.75a1.75 1.75 0 11-1.75 1.75 1.76 1.76 0 011.75-1.75zM37.88 135.39a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 126a1.75 1.75 0 11-1.75 1.75 1.75 1.75 0 011.75-1.75zM37.88 116.65a1.76 1.76 0 11-1.75 1.76 1.76 1.76 0 011.75-1.76z"
            />
            <path
              fill="#fff"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.219"
              d="M387.79 245.93l5.49 5.49-5.49 5.49v-10.98z"
            />
            <path
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.219"
              d="M62.79 256.91l-5.49-5.49 5.49-5.49v10.98z"
            />
          </svg>
        </div>
      </div>
      <div class="container mx-auto px-6">
        <div
          class="h-64 rounded-md overflow-hidden bg-cover bg-center"
          style="background-image: url('https://images.unsplash.com/photo-1577655197620-704858b270ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=144')"
        >
          <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
            <div class="px-10 max-w-xl">
              <h2 class="text-2xl text-white font-semibold">Sport Shoes</h2>
              <p
                class="mt-2 text-gray-400"
              >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
              <button
                class="flex items-center mt-4 px-3 py-2 bg-gradient-green text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
              >
                <span>Shop Now</span>
                <svg
                  class="h-5 w-5 mx-2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="md:flex mt-8 md:-mx-4">
          <div
            class="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2"
            style="background-image: url('https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')"
          >
            <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
              <div class="px-10 max-w-xl">
                <h2 class="text-2xl text-white font-semibold">Back Pack</h2>
                <p
                  class="mt-2 text-gray-400"
                >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
                <button
                  class="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none"
                >
                  <span>Shop Now</span>
                  <svg
                    class="h-5 w-5 mx-2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div
            class="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2"
            style="background-image: url('https://images.unsplash.com/photo-1486401899868-0e435ed85128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')"
          >
            <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
              <div class="px-10 max-w-xl">
                <h2 class="text-2xl text-white font-semibold">Games</h2>
                <p
                  class="mt-2 text-gray-400"
                >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
                <button
                  class="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none"
                >
                  <span>Shop Now</span>
                  <svg
                    class="h-5 w-5 mx-2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-16">
          <h3 class="text-2xl font-medium">Fashions</h3>
          <div class="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
            <router-link
              to="/detail"
              class="w-full card-item cursor-pointer"
              v-for="i in [1,2,3,4,5,6,7,8]"
              :key="i"
            >
              <div
                class="flex items-end justify-end h-40 w-full bg-cover"
                style="background-image: url(&quot;https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1500&amp;q=80&quot;);"
              >
                <button
                  class="p-2 rounded-full bg-gradient-green text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
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
          </div>
        </div>
        <div class="mt-16">
          <h3 class="text-2xl font-medium">Fashions</h3>
          <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
            <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
              <div
                class="flex items-end justify-end h-56 w-full bg-cover"
                style="background-image: url('https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=376&q=80')"
              >
                <button
                  class="p-2 rounded-full bg-green-550 text-white mx-5 -mb-4 focus:outline-none"
                >
                  <svg
                    class="h-5 w-5"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </button>
              </div>
              <div class="px-5 py-3">
                <h3 class="uppercase">Chanel</h3>
                <span class="mt-2">$12</span>
              </div>
            </div>
            <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
              <div
                class="flex items-end justify-end h-56 w-full bg-cover"
                style="background-image: url('https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')"
              >
                <button
                  class="p-2 rounded-full bg-green-550 text-white mx-5 -mb-4 focus:outline-none"
                >
                  <svg
                    class="h-5 w-5"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </button>
              </div>
              <div class="px-5 py-3">
                <h3 class="uppercase">Man Mix</h3>
                <span class="mt-2">$12</span>
              </div>
            </div>
            <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
              <div
                class="flex items-end justify-end h-56 w-full bg-cover"
                style="background-image: url('https://images.unsplash.com/photo-1532667449560-72a95c8d381b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')"
              >
                <button
                  class="p-2 rounded-full bg-green-550 text-white mx-5 -mb-4 focus:outline-none"
                >
                  <svg
                    class="h-5 w-5"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </button>
              </div>
              <div class="px-5 py-3">
                <h3 class="uppercase">Classic watch</h3>
                <span class="mt-2">$12</span>
              </div>
            </div>
            <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
              <div
                class="flex items-end justify-end h-56 w-full bg-cover"
                style="background-image: url('https://images.unsplash.com/photo-1590664863685-a99ef05e9f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=345&q=80')"
              >
                <button
                  class="p-2 rounded-full bg-green-550 text-white mx-5 -mb-4 focus:outline-none"
                >
                  <svg
                    class="h-5 w-5"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </button>
              </div>
              <div class="px-5 py-3">
                <h3 class="uppercase">woman mix</h3>
                <span class="mt-2">$12</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer-master />
  </div>
</template>
<script src="./index.js"></script>