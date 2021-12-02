<template>
  <v-card>
    <v-card-title>
      {{ first_name }} {{ last_name }}
    </v-card-title>
    <v-card-text>
      <h2>Courses</h2>
      <ul v-if="courses.length > 0">
        <li
          v-for="course in courses"
          :key="course.id"
        >
          {{ course.dept }} {{ course.num }}: {{ course.title }}
        </li>
      </ul>
      <p v-else>
        There are no courses for this instructor, yet.
      </p>
    </v-card-text>
    <v-card-actions>
      <v-btn
        to="/instructors"
      >
        <v-icon>mdi-arrow-left</v-icon> Back
      </v-btn>
      <v-btn>
        <v-icon>mdi-pencil</v-icon> Edit
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import api from '@/services/api'
export default {
  name: 'Instructor',
  props: {
    id: {
      type: Number,
      default: 1
    }
  },
  data: () => ({
    first_name: '',
    last_name: '',
    courses: []
  }),
  mounted () {
    // try to get the instructor ID from the URL
    // fallback to the ID set in the props
    const id = this.$route.params.id || this.id
    // get the data for the instructor to be displayed
    api.service('instructors').get(id).then(
      instructor => {
        this.first_name = instructor.first_name
        this.last_name = instructor.last_name
        this.courses = instructor.courses
      }
    )
  }
}
</script>
