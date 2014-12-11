module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-markdown');

  grunt.initConfig({
    markdown: {
      all: {
        files: [{
          expand: true,
          src: 'README.md',
          // dest: 'index',
          // ext: '.html',
          rename: function() { return 'index.html' }
        }],
        options: {
          markdownOptions: {
            gfm: true,
            highlight: 'manual',
            // codeLines: {
            //   before: '<span>',
            //   after: '</span>'
            // }
          }
        }
      }
    }
  });

  grunt.registerTask('default', ['markdown']);
};
