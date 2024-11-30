<script setup lang="ts">

    const isToggle = ref(false)
    // toggle
    const toggleMenu = () =>{
      isToggle.value = !isToggle.value;
      
    }

const checkScreenSize = () => {
  window.innerWidth >= 991 ? isToggle.value = false : isToggle.value = true; // Tailwind's `md` breakpoint is 768px
};

// Add event listener to check screen size on resize
onMounted(() => {
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScreenSize);
});
</script>
<template>
  <header class="py-4 border-b">
    <nav class="flex justify-between px-5 desktop:container items-center">
     <div class="flex gap-2">
      <Icon name="ic:round-menu-open" class="text-[30px] block desktop:hidden" @click="toggleMenu"/>
      <NuxtLink to="/">

        <span class="text-[28px] desktop:text-3xl">SHOP.CO</span>
      </NuxtLink>
      <ul class="flex flex-col desktop:flex-row absolute top-[7.5rem] left-0 desktop:top-0 w-full z-10  desktop:relative bg-black text-white desktop:text-black desktop:bg-transparent gap-3 items-center p-5 desktop:p-0 text-center justify-center desktop:items-center" :class=" isToggle ? 'invisible' : 'visible' ">
        <li  class="hover:bg-gray desktop:hover:bg-transparent hover:text-black desktop:hover:text-base desktop: w-full">
          <ul class="space-x-6 flex justify-center">
            <!-- Shop Menu -->
            <li class="relative group">
              <span
                href="#"
                class="text-gray-800 hover:text-blue-500 font-semibold flex"
                >Shop <Icon name="mdi:keyboard-arrow-down"
              /></span>

              <!-- Dropdown Menu -->
              <ul
                class="absolute left-0 mt-2 w-48 bg-white text-black border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 z-10"
              >
                <!-- Shop by Category -->
                <li class="border-b border-gray-100">
                  <a
                    href="#"
                    class="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >Shop by Category</a
                  >
                  <ul class="ml-4 space-y-1 py-2">
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >Men's Clothing</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >Women's Clothing</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >Accessories</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >Shoes</a
                      >
                    </li>
                  </ul>
                </li>

                <!-- Shop by Collection -->
                <li class="border-b border-gray-100">
                  <a
                    href="#"
                    class="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >Shop by Collection</a
                  >
                  <ul class="ml-4 space-y-1 py-2">
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >Summer Collection</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >Winter Collection</a
                      >
                    </li>
                  </ul>
                </li>

                <!-- Shop by Price -->
                <li class="border-b border-gray-100">
                  <a
                    href="#"
                    class="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >Shop by Price</a
                  >
                  <ul class="ml-4 space-y-1 py-2">
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >Under $50</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >$50 - $100</a
                      >
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >Over $100</a
                      >
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="basis-0 desktop:basis-[30.25rem] hover:bg-gray desktop:hover:bg-transparent hover:text-black desktop:hover:text-base desktop: w-full">
          <NuxtLink to="/">New Arrivals</NuxtLink>
        </li>
        <li class="hover:bg-gray desktop:hover:bg-transparent hover:text-black desktop:hover:text-base desktop: w-full">
          <NuxtLink to="/">Brands</NuxtLink>
        </li>
      </ul>
     </div>
      <!-- search -->
       <div class="flex gap-3 items-center">
        <div class="relative ml-auto hidden lg:block">
    <!-- Search Icon -->
    <Icon name="mdi:search" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />

    <!-- Input Field -->
    <input
      type="text"
      class="rounded-[62px] bg-gray px-10 outline-none w-full py-3"
      placeholder="Search for products..."
    />

        </div>
   <div class="flex gap-4 desktop:gap-7 pl-4">
    <Icon name="mdi:search" class="text-[25px] desktop:text-2xl block desktop:hidden"/>
    <NuxtLink to="#" class="relative">
    <Icon name="mdi:heart" class="text-[25px] desktop:text-2xl" />
    <p class="absolute -top-3 -right-3 bg-red-500 text-white text-xs bg-red w-[20px] h-[20px] flex items-center justify-center rounded-full">1</p>
  </NuxtLink>

    <NuxtLink to="/frontend/cart" class="relative">
        <Icon name="mdi:cart" class="text-[25px] desktop:text-2xl"/>
        <p class="absolute -top-3 -right-3 bg-red-500 text-white text-xs bg-red w-[20px] h-[20px] flex items-center justify-center rounded-full">1</p>

    </NuxtLink>
    <NuxtLink to="">
  <Icon name="mdi:user" class="text-[25px] desktop:text-2xl"/>

    </NuxtLink>
   </div>
       </div>
      

    </nav>
    
  </header>
</template>

<style scoped>
  
</style>
