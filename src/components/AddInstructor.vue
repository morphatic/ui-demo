<template>
  <v-card>
    <v-card-title>Add New Instructor</v-card-title>
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
        to="/instructors"
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
  name: 'AddInstructor',
  data: () => ({
    first_name: '',
    last_name: '',
    valid: true
  }),
  methods: {
    save () {
      if (this.$refs.form.validate()) {
        // save the new instructor
        api.service('instructors').create({
          first_name: this.first_name,
          last_name: this.last_name
        })
          .then(() => this.$router.push('/instructors'))
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
