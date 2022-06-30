const AddCourse = () => {
  return (
    <div className="bg-white dark:bg-background2-dark p-10 shadow-md rounded-xl">
      <form>
        <div class="grid xl:grid-cols-3 xl:gap-6">
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="userIdNumber"
              id="userIdNumber"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required=""
            />
            <label
              for="userIdNumber"
              class={`  ${"right-0"} peer-focus:font-medium absolute text-sm text-black dark:text-white  duration-300 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:text-gray-light peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6 `}
            >
              {`نام دوره`}
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="userIdNumber"
              id="userIdNumber"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required=""
            />
            <label
              for="userIdNumber"
              class={`  ${"right-0"} peer-focus:font-medium absolute text-sm text-black dark:text-white  duration-300 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:text-gray-light peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6 `}
            >
              {`توضیح کوتاه`}
            </label>
          </div>
        </div>
        <div class="grid xl:grid-cols-3 xl:gap-6">
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="userIdNumber"
              id="userIdNumber"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required=""
            />
            <label
              for="userIdNumber"
              class={`  ${"right-0"} peer-focus:font-medium absolute text-sm text-black dark:text-white  duration-300 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:text-gray-light peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6 `}
            >
              {``}
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <textarea
              type="text"
              name="userIdNumber"
              id="userIdNumber"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required=""
            />
            <label
              for="userIdNumber"
              class={`  ${"right-0"} peer-focus:font-medium absolute text-sm text-black dark:text-white  duration-300 transform -translate-y-6 top-3 -z-10 origin-[0] peer-focus:text-gray-light peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0  peer-focus:-translate-y-6 `}
            >
              {`توضیح کامل`}
            </label>
          </div>
        </div>
        <button
          type="submit"
          class="text-white bg-blue-dark ring-2 ring-blue-light hover:bg-background-light hover:text-black dark:text-black dark:bg-white hover:ring-2 dark:ring-white dark:hover:bg-background-dark dark:hover:text-white ease-in-out duration-200  focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
        >
          {`ثبت محصول`}
        </button>
      </form>
    </div>
  );
};

export default AddCourse;
