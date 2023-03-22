<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import useStudents from '../../Composable/Allstudents'
let route = useRoute()
let id = route.params.id
const { student, fetchSingleStudent, EditStudents } = useStudents()
onMounted(() => {
  fetchSingleStudent(id)
})
const submitHandle = async () => {
  await EditStudents(id, student.value)
}
</script>
<template>
  <!-- table record here -->
  <div class="bg-[#1A2238] min-h-[600px] py-2">
  <div class="container mx-auto px-4 text-center py-2 text-black rounded">
    <form class="w-full max-w-lg mx-auto shadow mt-3 p-2 bg-white" @submit.prevent="submitHandle">
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            First name
          </label>
          <input
            id="firstnmae"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="Enter First name"
            v-model.trim.lazy="student.firstname"
            required
          />
          <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            Last name
          </label>
          <input
            id="lastname"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            placeholder="Enter last name"
            v-model.trim.lazy="student.lastname"
            required
          />
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-first-name"
          >
            Country
          </label>
          <input
            id="country"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text"
            placeholder="Enter Country name"
            v-model="student.country"
            required
          />
          <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
        </div>
        <div class="w-full px-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-last-name"
          >
            city
          </label>
          <input
            id="city"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            placeholder="Enter city"
            v-model="student.city"
            required
          />
        </div>
      </div>

      <div class="flex flex-wrap -mx-3 mb-2">
        <div class="w-full px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-city"
          >
            Nationality
          </label>
          <input
            id="Nationality"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            placeholder="Enter Nationality"
            v-model.trim.lazy="student.Nationality"
            required
          />
        </div>
        <div class="w-full px-3 mb-6 mt-2 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="grid-state"
          >
            State
          </label>
          <div class="relative">
            <select
              id="state"
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              v-model.trim.lazy="student.state"
              required
            >
              <option value="" selected>Select state</option>
              <option value="Punjab">Punjab</option>
              <option value="Sindh">Sindh</option>
              <option value="Balochistan">Balochistan</option>
            </select>
          </div>
        </div>
      </div>
      <button type="submit" class="w-full btn bg-[#1A2238] hover:bg-blue-400 rounded p-1 text-white">
        Edit
      </button>
    </form>
  </div>
</div>
</template>
