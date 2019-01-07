<template>
  <div class="about">
  <div style="width:100%;color:powderblue;">
    <div style="float:left;">
        <h1>Logged in as {{$store.state.username}}</h1>
    </div>
    <div style="color:blue;float:right;" class='about'>
    <h1>logout</h1>
    </div>
  </div>
  </div>
</template>

<style>
.about{
 background-color:powderblue;
}
</style>