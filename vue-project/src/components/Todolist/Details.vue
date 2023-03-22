<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
  import useStudents from '../../Composable/Allstudents';
  let route=useRoute();
  const {student, fetchSingleStudent}=useStudents();
  onMounted(()=>{
    fetchSingleStudent(route.params.id);
  });
  
</script>

<template>
    <Suspense>
        <template #default>
            <div class=" bg-[#1A2238]  flex items-center min-h-[600px] w-full justify-center flex-col md:flex-row gap-3 px-2 ">
<div class="w-full px-2 md:max-w-xs ">
    <div class="bg-white shadow-xl rounded-lg py-3">
        <div class="photo-wrapper p-2">
            <img class="w-32 h-32 rounded-full mx-auto" src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="John Doe">
        </div>
        <div class="p-2">
            <h3 class="text-center text-xl text-gray-900 font-medium leading-8">{{ student.firstname }} {{ student.lastname }}</h3>
           
            <table class="text-xs my-3">
                <tbody><tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Country</td>
                    <td class="px-2 py-2">{{ student.country }}</td>
                </tr>
                <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">City</td>
                    <td class="px-2 py-2">{{ student.city }}</td>
                </tr>
                <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Nationality</td>
                    <td class="px-2 py-2">{{ student.Nationality }}</td>
                </tr>
                <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">State</td>
                    <td class="px-2 py-2">{{ student.state }}</td>
                </tr>
            </tbody></table>

           

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



