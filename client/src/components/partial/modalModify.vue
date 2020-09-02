<template>
  <div class="fixed z-10 inset-0 overflow-y-auto" v-show="showModal">
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>

      <div
        class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <label
            class="w-full mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left text-gray-700 text-xl font-bold mb-8"
          >Nội dung chỉnh sửa</label>
          <div class="sm:flex sm:items-start">
            <div class="w-full mt-6 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <textarea
                class="w-full h-24 resize border rounded focus:outline-none focus:shadow-outline"
                placeholder="Nhập nội dung chỉnh sửa"
                v-model="newData"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
            <button
              @click="onSave"
              type="button"
              class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
            >Save</button>
          </span>
          <span class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
            <button
              @click="onHideModal"
              type="button"
              class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
            >Cancel</button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showModal: false,
      newData: "",
      currentId: "",
    };
  },
  methods: {
    onSave() {
      this.$emit("updateTitle", this.currentId, this.newData);
      this.newData = "";
      this.currentId = "";
      this.onHideModal();
    },
    onShowModal() {
      this.showModal = true;
    },
    onHideModal() {
      this.showModal = false;
    },
  },
};
</script>