<template>
  <v-card>
    <v-card-title>Edit {{ first_name }} {{ last_name }}</v-card-title>
    <v-card-text>
      <p>
        Please enter details for the new instructor.
      </p>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="first_name"
          hint="The first name of the instructor"
          label="First Name"
          filled
          required
          :rules="[v => !!v || 'First Name is required']"
        />
        <v-text-field
          v-model="last_name"
          hint="The last name of the instructor"
          label="Last Name"
          filled
          required
          :rules="[v => !!v || 'Last Name is required']"
        />
      </v-form>
    </v-card-text>
    <v-divider />
    <v-card-actions>
      <v-btn
        :to="`/instructors/${id}`"
      >
        Cancel
      </v-btn>
      <v-spacer />
      <v-btn
        color="primary"
        @click="save"
      >
        Save
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import api from '@/services/api'
export default {
  name: 'EditInstructor',
  data: () => ({
    id: 0,
    first_name: '',
    last_name: '',
    valid: true
  }),
  mounted () {
    // try to get the instructor ID from the URL
    // fallback to the ID set in the props
    const id = this.$route.params.id || this.id
    // get the data for the instructor to be displayed
    api.service('instructors').get(id).then(
      instructor => {
        this.id = instructor.id
        this.first_name = instructor.first_name
        this.last_name = instructor.last_name
        this.courses = instructor.courses
      }
    )
  },
  methods: {
    save () {
      if (this.$refs.form.validate()) {
        // save the new instructor
        api.service('instructors').patch(this.id, {
          first_name: this.first_name,
          last_name: this.last_name
        })
          .then(() => this.$router.push(`/instructors/${this.id}`))
          .catch(() => alert('Uh-oh!'))
        // then go back to the instructors page
      } else {
        // do nothing
        // the form will show the invalid fields automatically
      }
    }
  }
}
</script>
