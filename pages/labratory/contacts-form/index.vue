<template>
  <BaseLayout class="dashboard labratory-contacts-form">
    <section class="body">
      <InfoBox :infoOptions="infoOptions" :title="'Guide'"/>
      <section class="form-item">
        <h3 class="code">Unique connection code : {{ code }}</h3>
      </section>
      <section class="form-item">
        <label class="label">Authorized IPs</label>
        <textarea v-model="auth_ip" rows="8"/>
      </section>
      <section class="form-item">
        <section class="alert success">
          <p>First mode: In this case, there is no need for programming, and by copying the sample code on your website, those whose IP is added to the above list can view the system's contact entry form and enter their contact.</p>
        </section>
      </section>
      <section class="form-item">
        <section class="alert success">
          <p>second mode: In this case, the programmer can create the desired form for entering your contact and send the required parameters from the server whose IP is added in the above list using the web service whose codes are available below.</p>
        </section>
      </section>
      <section class="form-item code-example">
        <label class="label">Usage code example:</label>
        <input type="url" v-model="tag" disabled>
      </section>
      <section class="form-item items">
        <section class="item" v-for="index in 3" :key="index">
          <img src="~/assets/images/lock.png">
          <p>PHP</p>
        </section>
      </section>
    </section>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from '@/components/TheBasePanelLayout/BaseLayout';
import InfoBox from "@/components/TheInfoBox/InfoBox.vue";

const infoOptions = ref([
  'By using this option, each user can add their contacts to the system without entering the panel and within their site',
  'By clicking on the activation of the contact creation form, the initial settings will be created for you and a unique code will be created for your user.',
  'In the allowed connection IPs section, you must enter the IP of the site you want to open in that form',
  'This IP can be multiple IP defined by you',
  'Be careful, until an IP is defined in this section, the possibility is not activated for you',
  'After entering the IP and saving the changes, a link will be displayed for you, which you can open and use on your site',
]);
const code = '3D8974764B29E929AA96EAF107E44E02'
const auth_ip = ref('')
const tag = ref(
    '<iframe src="https://dev.smspanel.net/ContactForm/ShowForm.php?hkey=3D8974764B29E929AA96EAF107E44E02" width="800" height="500"></iframe>'
)

</script>

<style scoped>

</style>