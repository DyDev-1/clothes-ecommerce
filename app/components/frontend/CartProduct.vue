<script setup lang="ts">
const props = defineProps({
   name:{
     type:String,
    default: ''
   },
   size:{
    type:String,
    default: ''
   },
   color:{
    type:String,
    default: ''
   },
   price:{
     type:String,
     default: ''
   },
   img:{
    type: String,
    default: ''
   }
})
const qtyAmount = ref(0);

// increment
const increment = () => {
  qtyAmount.value += 1;
};
// decrement
const decrement = () => {
  if (qtyAmount.value > 0) {
    qtyAmount.value -= 1;
  }
};

const emit = defineEmits(['remove'])

function removeProduct() {
  // Emit a 'remove' event to the parent
  emit('remove')
}
</script>
<template>
  <div class="flex justify-between p-4 border-b border-b-gray">
    <div class="flex gap-2">
      <NuxtImg
        :src="'/img/products/'+img"
        class="w-[150px] h-[160px] rounded-2xl"
      />
      <div>
        <h1 class="text-l font-bold">{{ name }}</h1>
        <p>
          Size: <span>{{ size }}</span>
        </p>
        <p>
          Color: <span>{{ color }}</span>
        </p>
        <h3 class="text-xl font-semibold">${{ price }}</h3>
      </div>
    </div>
    <div class="flex flex-col justify-between">
      <Icon name="ep:delete-filled" class="text-red ml-auto cursor-pointer "  @click="removeProduct"/>
      <div class="flex gap-3 items-center bg-gray rounded-2xl">
        <button
          class="bg-gray hover:bg-slate-200 flex items-center justify-center px-5 py-3 rounded-l-2xl cursor-pointer"
          @click="decrement" 
        >
          <Icon name="ic:baseline-minus" class="text-base"/>
        </button>
        <p class="mx-2">{{ qtyAmount }}</p>
        <!-- You can replace "1" with a variable to represent the count -->
        <button
          class="bg-gray hover:bg-slate-200 flex items-center justify-center px-5 py-3 rounded-r-2xl cursor-pointer"
          @click="increment"
        >
          <Icon name="ic:round-plus" class="text-base" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
