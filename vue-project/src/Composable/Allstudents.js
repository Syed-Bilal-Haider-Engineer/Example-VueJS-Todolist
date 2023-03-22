import { ref } from 'vue';
import axios from 'axios';
export default function useStudents() {
 
  let student = ref([])
  let error = ref('')
  const url = 'http://localhost:4000';

  function reSet(){
    student.value = [];
    error.value = '';
  }
  const fetchStudents = async () => {
    try {
        reSet();
      const { data } = await axios.get(`${url}/`);
      student.value = data;
    } catch (error) {
      console.error('error', error)
      error.value = error
    }
  }

  const fetchSingleStudent = async (id) => {
 
    try {
        reSet();
      const { data } = await axios.get(`${url}/studentrecord/${id}`)
      student.value = data
    } catch (error) {
      console.error('error', error)
      error.value = error
    }
  }

  const postStudents = async (record) => {
    try {
        reSet();
      const { data } = await axios.post(`${url}/studentrecord`, record);
      student.value = data;
    } catch (error) {
      console.log('post error.....>', error)
    }
  }

  const EditStudents = async (id, record) => {
    try {
        reSet();
      const { data } = await axios.put(`${url}/studentrecord/${id}`, record);
      await fetchSingleStudent(id);
    } catch (error) {
      console.log('error edit update', error)
    }

  }
  const removeHandle= async(id)=>{
    try {
      reSet();
      await axios.delete(`${url}/delete/${id}`);
      await fetchStudents();
    } catch (error) {
       console.error("error remove",error);
    }
      }
  return { student, error, fetchStudents, fetchSingleStudent, postStudents, EditStudents,removeHandle }
}
