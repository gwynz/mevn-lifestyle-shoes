<template>
  <transition name="right-to">
    <div v-if="isShow" class="fixed inset-0 z-20 bg-opacity-600" @click="isShow=false">
      <div @click.stop class="absolute inset-0 left-auto w-3/12 bg-black-900 z-40 opacity-100 p-8">
        <div class="px-4 py-24">
          <div class="flex items-center justify-between">
            <h3 class="text-2xl font-medium">Your cart</h3>
            <button @click="cartOpen = !cartOpen" class="focus:outline-none">
              <svg
                class="h-5 w-5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <hr class="my-3" />
          <div class="flex justify-between mt-6">
            <div class="flex">
              <img
                class="h-20 w-20 object-cover rounded"
                src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
                alt
              />
              <div class="mx-3">
                <h3 class="text-sm">Mac Book Pro</h3>
                <div class="flex items-center mt-2">
                  <button class="focus:outline-none focus:">
                    <svg
                      class="h-5 w-5"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                  <span class="mx-2">2</span>
                  <button class="focus:outline-none focus:">
                    <svg
                      class="h-5 w-5"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <span class>20$</span>
          </div>
          <div class="flex justify-between mt-6">
            <div class="flex">
              <img
                class="h-20 w-20 object-cover rounded"
                src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
                alt
              />
              <div class="mx-3">
                <h3 class="text-sm">Mac Book Pro</h3>
                <div class="flex items-center mt-2">
                  <button class="focus:outline-none focus:">
                    <svg
                      class="h-5 w-5"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                  <span class="mx-2">2</span>
                  <button class="focus:outline-none focus:">
                    <svg
                      class="h-5 w-5"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <span class>20$</span>
          </div>
          <div class="flex justify-between mt-6">
            <div class="flex">
              <img
                class="h-20 w-20 object-cover rounded"
                src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
                alt
              />
              <div class="mx-3">
                <h3 class="text-sm">Mac Book Pro</h3>
                <div class="flex items-center mt-2">
                  <button class="focus:outline-none focus:">
                    <svg
                      class="h-5 w-5"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                  <span class="mx-2">2</span>
                  <button class="focus:outline-none focus:">
                    <svg
                      class="h-5 w-5"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <span class>20$</span>
          </div>
          <div class="mt-8">
            <form class="flex items-center justify-center">
              <input class="form-input w-48" type="text" placeholder="Add promocode" />
              <button
                class="ml-3 flex items-center px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
              >
                <span>Apply</span>
              </button>
            </form>
          </div>
          <a
            class="flex items-center justify-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
          >
            <span>Chechout</span>
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
          </a>
        </div>
      </div>
    </div>
  </transition>
</template>
<script src="./index.js"></script>