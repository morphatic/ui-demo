<template>
  <v-card>
    <v-card-title>
      Instructors
    </v-card-title>
    <v-card-text>
      <ul>
        <li
          v-for="instructor in instructors"
          :key="instructor.id"
        >
          {{ instructor.first_name }} {{ instructor.last_name }}
        </li>
      </ul>
    </v-card-text>
    <v-card-actions>
    </v-card-actions>
  </v-card>
</template>

<script>
import api from '@/services/api'
export default {
  name: 'Instructors',
  data: () => ({
    instructors: []
  }),
  mounted () {
    api.service('instructors').find({}).then(
      result => {
        this.instructors = result.data
      }
    )
  }
}
</script>
