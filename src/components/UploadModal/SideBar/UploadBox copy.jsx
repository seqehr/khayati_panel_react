let browseFile = $('#browseFile')
let resumable = new Resumable({
  target: 'api/upload/new',
  query: { _token: 'kxuu9wtlq7NR0wGUbP0b1lEGXfVJoyZvlFZNe9XJ', dir_id: '1' }, // CSRF token
  fileType: ['mp4'],
  headers: {
    Accept: 'application/json',
  },
  testChunks: false,
  throttleProgressCallbacks: 1,
})
console.log(browseFile[0])
resumable.assignBrowse(browseFile[0])

resumable.on('fileAdded', function (file) {
  // trigger when file picked

  resumable.upload() // to actually start uploading.
})

resumable.on('fileSuccess', function (file, response) {
  // trigger when file upload complete
  alert('file uploading was succesfully.')
})

resumable.on('fileError', function (file, response) {
  // trigger when there is any error
  alert('file uploading error.')
})
