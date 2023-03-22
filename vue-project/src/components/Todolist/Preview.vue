<script setup>
import { reactive, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { EyeIcon, TrashIcon, PencilIcon } from '@heroicons/vue/24/solid'
import useStudents from '../../Composable/Allstudents'
import { async } from 'q';
let { student, fetchStudents,removeHandle } = useStudents()
onMounted(fetchStudents);
const studentRemoveHandle=async(id)=>{
  await removeHandle(id);
}
</script>
<template>

<Suspense>
  <template #default>
    <div class=" bg-[#1A2238]  flex items-center min-h-[600px] py-2 w-full justify-start flex-col md:flex-row gap-3 px-2  flex-wrap">
<div class="w-full px-2 mt-1  md:w-72" v-for="(item, index) in student" :key="index">
    <div class="bg-white shadow-xl rounded-lg py-3">
        <div class="photo-wrapper p-2">
            <img class="w-32 h-32 rounded-full mx-auto" src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="John Doe">
        </div>
        <div class="p-2">
            <h3 class="text-center text-xl text-gray-900 font-medium leading-8">{{ item.firstname }} {{ item.lastname }}</h3>
           
            <table class="text-xs my-3">
                <tbody><tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Country</td>
                    <td class="px-2 py-2">{{ item.country }}</td>
                </tr>
                <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">City</td>
                    <td class="px-2 py-2">{{ item.city }}</td>
                </tr>
                <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Nationality</td>
                    <td class="px-2 py-2">{{ item.Nationality }}</td>
                </tr>
                <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">State</td>
                    <td class="px-2 py-2">{{ item.state }}</td>
                </tr>
                
          <td class="px-1 py-1 text-gray-500 font-semibold">
            <RouterLink :to="{ name: 'Edit', params: { id: item._id } }">
              <PencilIcon class="w-4 h-4 inline" />
            </RouterLink>
          </td>
          <td class="px-1 py-1 text-gray-500 font-semibold">
            <TrashIcon class="w-4 h-4 inline cursor-pointer" @click="studentRemoveHandle(item._id)" />
          </td>
            </tbody></table>

            <div class="text-center my-3">
                <RouterLink class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" :to="{ name: 'details', params: { id: item._id } }">View Profile</RouterLink>
            </div>

        </div>
    </div>
</div>

</div>
  </template>
  <template #fallback>
        <h1>Loading...</h1>
      </template>
</Suspense>
 
</template>
