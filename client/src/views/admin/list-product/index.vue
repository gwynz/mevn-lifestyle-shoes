<template>
  <body class="antialiased font-sans bg-gray-200">
    <div class="container mx-auto px-4 sm:px-8">
      <div class="py-8">
        <div>
          <h2 class="text-2xl font-semibold leading-tight">Users</h2>
        </div>
        <div class="my-5">
          <router-link
            to="/admin/product"
            class="uppercase px-4 py-2 bg-white-700"
            >new</router-link
          >
        </div>
        <div class="my-2 flex sm:flex-row flex-col">
          <div class="flex flex-row mb-1 sm:mb-0">
            <div class="relative">
              <select
                class="appearance-none h-full rounded-l border block w-full border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus: focus:border-gray-500"
              >
                <option>5</option>
                <option>10</option>
                <option>20</option>
              </select>
              <div
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
              >
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </div>
            </div>
            <div class="relative">
              <select
                class="h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus: focus:border-gray-500"
              >
                <option>All</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
              <div
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
              >
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="block relative">
            <span
              class="h-full absolute inset-y-0 left-0 flex items-center pl-2"
            >
              <svg
                viewBox="0 0 24 24"
                class="h-4 w-4 fill-current text-gray-500"
              >
                <path
                  d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"
                ></path>
              </svg>
            </span>
            <input
              placeholder="Search"
              class="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full text-sm placeholder-gray-400 text-gray-700 focus: focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
            />
          </div>
        </div>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div
            class="inline-block min-w-full shadow rounded-lg overflow-hidden"
          >
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    User
                  </th>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    Rol
                  </th>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    Created at
                  </th>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in listProduct" :key="index">
                  <td class="px-5 py-5 border-b border-gray-200 text-sm">
                    <div class="flex items-center">
                      <div
                        class="flex-shrink-0 w-64 h-40 pr-4 rounded-sm overflow-hidden bg-white-700"
                      >
                        <img
                          v-if="item.images.length"
                          class="w-full h-full object-contain"
                          :src="item.images[0].url"
                          alt=""
                        />
                        <div
                          v-else
                          class="w-full h-full flex justify-center items-center"
                        >
                          No image
                        </div>
                      </div>
                      <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap">
                          {{ item.name }}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">Admin</p>
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 text-sm">
                    <p class="text-gray-900 whitespace-no-wrap">Jan 21, 2020</p>
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 text-sm">
                    <span
                      class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                    >
                      <span
                        aria-hidden
                        class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                      ></span>
                      <span
                        class="relative"
                        :class="[
                          { 'text-green-500': item.enable },
                          { 'text-red-500': !item.enable },
                        ]"
                        >{{ item.enable ? "active" : "inactive" }}</span
                      >
                    </span>
                  </td>
                  <td class="px-5 py-5 border-b border-gray-200 text-sm">
                    <v-btn depressed color="error" @click="remove(item._id)">
                      Delete
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </table>
            <v-pagination
              v-model="pagnation.currentPage"
              :length="pagnation.totalPages"
              :total-visible="7"
              @input="getData"
              class="mb-4"
            ></v-pagination>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>
<script src="./index.js"></script>