<template>
  <ul>
    <li
      v-for="instructor in instructors"
      :key="instructor.id"
    >
      <router-link :to="`/instructors/${instructor.id}`">
        {{ instructor.first_name }} {{ instructor.last_name }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'InstructorList',
  props: {
    instructors: {
      type: Array,
      default: () => []
    }
  }
}
</script>
