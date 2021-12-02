<template>
  <v-card>
    <v-card-title>
      Instructors
    </v-card-title>
    <v-card-text>
      <instructor-list :instructors="instructors" />
    </v-card-text>
    <v-card-actions>
    </v-card-actions>
  </v-card>
</template>

<script>
import api from '@/services/api'
import InstructorList from '@/components/InstructorList'
export default {
  name: 'Instructors',
  components: {
    InstructorList
  },
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
