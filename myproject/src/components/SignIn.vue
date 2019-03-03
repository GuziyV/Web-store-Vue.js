<template>
<div class="Login-form">
  <form>
    <h2 class="text-center">
      Registration
    </h2>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Username" required="required">
    </div>
    <div class="form-group">
      <input type="password" class="form-control" placeholder="Password" required="required">
    </div>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Email" required="required">
    </div>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Phone" required="required" data-format="+38 (0dd) ddd-dddd">
    </div>
      <div class="form-group">
        <button class="btn btn-primary btn-block">
          Register
        </button>
      </div>
      <div class="clearfix">
      </div>
  </form>
</div>
</template>

<script>
export default {
  name: 'signin',
};
</script>

<style scoped>
.Login-form {
  max-width: 450px;
  margin: 0 auto;
  margin-top: 80px;
}
</style>
