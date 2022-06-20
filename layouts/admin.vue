<template>
  <div class="c-app">
    <div class="c-sidebar c-sidebar-dark c-sidebar-fixed c-sidebar-lg-show" id="sidebar">
      <div class="c-sidebar-brand d-lg-down-none">
        <img src="/images/logo.png" class="bg-dark rounded shadow-sm" width="35"> <span class="ml-2 font-weight-bold">BICARA LIVE.ID</span>
      </div>

      <!-- sidebar -->
      <Sidebar />
      <!-- end sidebar -->

    </div>
    <div class="c-wrapper c-fixed-components">
      
      <!-- header -->
      <Header />
      <!-- end header -->

      <div class="c-body">

        <!-- content -->
        <Nuxt />
        <!-- end content -->

        <footer class="c-footer">
          <div><strong>BICARA LIVE</strong> &copy; 2022 - bicaralive.id.</div>
          <div class="ml-auto">Template by&nbsp;<a href="https://coreui.io/">CoreUI</a></div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>

  import Header from '@/components/admin/header.vue'
  import Sidebar from '@/components/admin/sidebar.vue'

  export default {

    //middleware
    middleware: 'isAdmin',

    //register components
    components: {
      Header,
      Sidebar
    }

  }
</script>

<style>
</style>