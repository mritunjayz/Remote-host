<template>
<div>
<div >
<Monaco
    width="600"
    height="600"
    language="javascript"
    theme="vs"
    :code="code"
    :options="options"
    :changeThrottle="500"
    @mounted="onMounted"
    @codeChange="onCodeChange"
    >
</Monaco>
</div>
  </div>
</template>

<script>
import Monaco from 'monaco-editor-forvue';
//console.log(Monaco)
export default {
  components: {
    Monaco
  },

  data() {
    return {
      code: '// Type away! \n'
    }
  },
methods: {
  onMounted(editor) {
      this.editor = editor;
    },
    onCodeChange(editor) {
      console.log(this.editor.getValue());
    }  
},
}
</script>

<style scoped>

</style>