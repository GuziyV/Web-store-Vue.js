<template>
  <div class="container Profile">
    <div class="row">
      <div class="col-6">
        <basket :user="currentUser" />
      </div>
      <div class="col-6">
        <orders :user="currentUser" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Basket from './Basket';
import Orders from './Orders';

export default {
  name: 'Profile',
  components: {
    Basket,
    Orders,
  },
  data() {
    return {

    };
  },
  computed: {
    ...mapState('user', ['currentUser']),
  },
};
</script>

<style scoped>
.Profile {
  padding: 50px;
}

</style>
