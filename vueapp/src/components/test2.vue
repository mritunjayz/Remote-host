<template>
<div>
<div style="width:100%;height:720px; background-color: black;margin:0; position:fixed;" bgcolor="black">

   <div style="padding:20px;width:50%;height:50%;">
       <monaco-editor class="editor"  v-model="code" language="javascript">
       </monaco-editor>
   </div>
</div>
</div>
</template>

<script>
import MonacoEditor from 'vue-monaco'
//import fs from './require.js';
//console.log(fs)

export default {
  components: {
    MonacoEditor
  },

  data() {
    return {
      code:`var requirejs, require, define;
(function (global, setTimeout) {
    var req, s, head, baseElement, dataMain, src,
        interactiveScript, currentlyAddingScript, mainScript, subPath,
        version = '2.3.6',
        commentRegExp = /\/\*[\s\S]*?\*\/|([^:"'=]|^)\/\/.*$/mg,
        cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
        jsSuffixRegExp = /\.js$/,
        currDirRegExp = /^\.\//,
        op = Object.prototype,
        ostring = op.toString,
        hasOwn = op.hasOwnProperty,
        isBrowser = !!(typeof window !== 'undefined' && typeof navigator !== 'undefined' && window.document),
        isWebWorker = !isBrowser && typeof importScripts !== 'undefined',
        //PS3 indicates loaded and complete, but need to wait for complete
        //specifically. Sequence is 'loading', 'loaded', execution,
        // then 'complete'. The UA check is unfortunate, but not sure how
        //to feature test w/o causing perf issues.
        readyRegExp = isBrowser && navigator.platform === 'PLAYSTATION 3' ?
                      /^complete$/ : /^(complete|loaded)$/,
        defContextName = '_',
        //Oh the tragedy, detecting opera. See the usage of isOpera for reason.
        isOpera = typeof opera !== 'undefined' && opera.toString() === '[object Opera]',
        contexts = {},
        cfg = {},
        globalDefQueue = [],
        useInteractive = false;

    //Could match something like ')//comment', do not lose the prefix to comment.
    function commentReplace(match, singlePrefix) {
        return singlePrefix || '';
    }

    function isFunction(it) {
        return ostring.call(it) === '[object Function]';
    }

    function isArray(it) {
        return ostring.call(it) === '[object Array]';
    }

    /**
     * Helper function for iterating over an array. If the func returns
     * a true value, it will break out of the loop.
     */
    function each(ary, func) {
        if (ary) {
            var i;
            for (i = 0; i < ary.length; i += 1) {
                if (ary[i] && func(ary[i], i, ary)) {
                    break;
                }
            }
        }
    }

    /**
     * Helper function for iterating over an array backwards. If the func
     * returns a true value, it will break out of the loop.
     */
    function eachReverse(ary, func) {
        if (ary) {`,
    language: 'javascript',
    theme: 'Visual Studio Dark',
    options: {
      lineNumbers: true,
      language: 'javascript',
      theme: 'vs-dark',
    }
    }
  },
methods: {
    updateCode() {
      this.language = 'html'
      this.code = markdownCode
      this.options.tabSize = 8
      this.options.lineNumbers = false
      this.theme = 'vs-dark'
    }
},
mounted() {
  this.code = this.$store.state.filedata;
  console.log(this.code,this.$store.filedata)
  //this.updateCode()
},
}
</script>

<style scoped>
.editor {
  width: 900px;
  height: 800px;
}
html, body, #app {
  height: 100%;
  text-align: left;
}

body {
  margin: 0;
}
</style>